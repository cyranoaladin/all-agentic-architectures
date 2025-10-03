#!/usr/bin/env bash
set -euo pipefail
HOST="${HOST:-127.0.0.1}"
PORT="${PORT:-8010}"
BASE="http://$HOST:$PORT"

run_py() {
python - <<PY
import requests, sys, json
base = "$BASE"
# healthz
r = requests.get(f"{base}/healthz", timeout=15)
print("/healthz:", r.status_code)
assert r.ok and r.json().get("ok") is True
# a01
r = requests.post(f"{base}/api/a01/run", json={"prompt":"Explique la loi des grands nombres simplement.", "criteria": []}, timeout=60)
print("a01:", r.status_code)
assert r.ok and r.json().get("answer")
# rag
r = requests.post(f"{base}/api/rag/qa", json={"question":"Quels thèmes sont évoqués dans la démo RAG ?", "k": 5}, timeout=60)
print("rag:", r.status_code)
assert r.ok and r.json().get("answer")
# a02 (tavily optionnel, ne casse pas si indispo)
r = requests.post(f"{base}/api/a02/run", json={"question":"Quelles ont été les annonces majeures de la dernière WWDC ?"}, timeout=60)
print("a02:", r.status_code)
assert r.ok
print("OK")
PY
}

run_py
