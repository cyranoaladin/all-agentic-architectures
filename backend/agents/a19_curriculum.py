from typing import TypedDict, List, Dict
from backend.core.llm import make_llm


class In(TypedDict):
    task: str
    level: int


class Out(TypedDict):
    levels: List[Dict[str, List[str]]]


def run(task: str, level: int = 2) -> Out:
    lvl = max(1, min(int(level or 2), 3))
    llm = make_llm()
    levels: List[Dict[str, List[str]]] = []
    for i in range(1, 4):
        prompt = (
            "Génère 3 exercices sur la tâche suivante (FR), niveau "
            f"{i} (1=facile, 3=difficile).\nTâche: {task}\n"
        )
        out = llm.invoke(prompt).content
        exos = [l.strip(" -\t") for l in out.splitlines() if l.strip()][:3]
        levels.append({f"niveau_{i}": exos})
    return {"levels": levels}
