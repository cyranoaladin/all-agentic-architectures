from typing import TypedDict, List, Dict
from backend.core.llm import make_llm


class In(TypedDict):
    task: str
    level: int


class Out(TypedDict):
    levels: List[Dict[str, List[str]]]


def run(task: str, level: int = 2) -> Out:
    normalized_level = max(1, min(int(level or 2), 3))
    llm = make_llm()
    levels: List[Dict[str, List[str]]] = []
    for i in range(1, normalized_level + 1):
        prompt = (
            "Génère 3 exercices sur la tâche suivante (FR), niveau "
            f"{i} (1=facile, 3=difficile).\nTâche: {task}\n"
        )
        out = llm.invoke(prompt).content
        exercises = [line.strip(" -\t") for line in out.splitlines() if line.strip()][:3]
        levels.append({f"niveau_{i}": exercises})
    return {"levels": levels}
