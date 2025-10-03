#!/usr/bin/env bash
set -euo pipefail
ROOT="${ROOT:-$(cd "$(dirname "$0")/.." && pwd)}"
PORT="${PORT:-8010}"
HOST="${HOST:-127.0.0.1}"
LOG="$ROOT/self_test.log"

cd "$ROOT"
echo "[SELF-TEST] $(date -Is)" > "$LOG"

start_bg() {
  source .venv/bin/activate 2>/dev/null || true
  export PYTHONPATH="$ROOT"
  nohup python -m uvicorn backend.app:app --host 127.0.0.1 --port "$PORT" --workers 1 --log-level info > "$ROOT/uvicorn_selftest.log" 2>&1 &
  echo $! > "$ROOT/uvicorn_selftest.pid"
}

stop_bg() {
  if [ -f "$ROOT/uvicorn_selftest.pid" ]; then
    kill "$(cat "$ROOT/uvicorn_selftest.pid")" 2>/dev/null || true
    rm -f "$ROOT/uvicorn_selftest.pid"
  fi
  pkill -f "uvicorn backend.app:app --host 127.0.0.1 --port $PORT" 2>/dev/null || true
}

trap 'stop_bg' EXIT

echo "[INFO] starting server on :$PORT" | tee -a "$LOG"
stop_bg || true
start_bg

# wait healthz
ATT=60
until [ "$(curl -s -o /dev/null -w "%{http_code}" "http://$HOST:$PORT/healthz")" = "200" ]; do
  ATT=$((ATT-1)); [ $ATT -le 0 ] && { echo "[ERR] healthz KO" | tee -a "$LOG"; exit 1; }; sleep 1; done

measure() {
  local name="$1"; shift
  local payload="$1"; shift
  local t0=$(date +%s%3N)
  local res; res=$(curl -sS -X POST "$@" -H 'Content-Type: application/json' -d "$payload") || { echo "[KO] $name" | tee -a "$LOG"; return 1; }
  local t1=$(date +%s%3N)
  local dt=$((t1 - t0))
  echo "$res" | jq . >/dev/null 2>&1 || echo "$res" | python -m json.tool >/dev/null 2>&1 || true
  if echo "$res" | grep -q '"answer"'; then
    echo "[OK] $name ${dt}ms" | tee -a "$LOG"
  else
    echo "[KO] $name ${dt}ms" | tee -a "$LOG"; return 1
  fi
}

echo "[RUN] endpoints" | tee -a "$LOG"
curl -sS "http://$HOST:$PORT/healthz" | tee -a "$LOG" >/dev/null
measure "A01" '{"prompt":"Explique la loi des grands nombres simplement.","criteria":[]}' "http://$HOST:$PORT/api/a01/run"
measure "A18" '{"question":"Explique brièvement la photosynthèse.","iterations":3}' "http://$HOST:$PORT/api/a18/run"
measure "A19" '{"task":"Factorisation de polynômes","level":2}' "http://$HOST:$PORT/api/a19/run"
measure "A09" '{"task":"Plan d\u0027atelier IA","breadth":2,"depth":2}' "http://$HOST:$PORT/api/a09/run"

echo "[DONE] see $LOG"
