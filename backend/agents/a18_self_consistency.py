from typing import TypedDict, List, Dict
from statistics import mode
from backend.core.llm import make_llm


class In(TypedDict):
    question: str
    iterations: int
    temperature: float


class Out(TypedDict):
    answer: str
    candidates: List[str]
    votes: Dict[str, int]
    iterations_done: int


def run(question: str, iterations: int = 3, temperature: float = 0.7) -> Out:
    iters = max(1, min(int(iterations or 3), 5))
    temp = float(temperature or 0.7)
    candidates: List[str] = []
    for _ in range(iters):
        llm = make_llm(temperature=temp)
        out = llm.invoke(
            f"Réponds clairement (FR) à la question suivante en 1-2 paragraphes:\n{question}"
        ).content
        candidates.append(out.strip())

    # Agrégation simple par texte exact; sinon, fallback au premier
    try:
        m = mode(candidates)
    except Exception:
        m = candidates[0] if candidates else ""

    # Compter votes
    votes: Dict[str, int] = {}
    for c in candidates:
        votes[c] = votes.get(c, 0) + 1

    return {
        "answer": m,
        "candidates": candidates,
        "votes": votes,
        "iterations_done": iters,
    }
