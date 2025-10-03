from __future__ import annotations

from dataclasses import dataclass
import os
from dotenv import load_dotenv


load_dotenv(override=False)


@dataclass
class RuntimeSettings:
    llm_provider: str = os.getenv("DEFAULT_LLM_PROVIDER", "openai").lower()
    llm_model: str = os.getenv("DEFAULT_LLM_MODEL", "gpt-4o-mini")
    embed_provider: str = os.getenv("DEFAULT_EMBEDDING_PROVIDER", "gemini").lower()
    embed_model: str = os.getenv("DEFAULT_EMBEDDING_MODEL", "text-embedding-004")


_RUNTIME = RuntimeSettings()


def get_settings() -> RuntimeSettings:
    return _RUNTIME


def set_llm(provider: str | None = None, model: str | None = None) -> RuntimeSettings:
    if provider is not None:
        _RUNTIME.llm_provider = str(provider).lower()
    if model is not None:
        _RUNTIME.llm_model = str(model)
    return _RUNTIME


def set_embeddings(provider: str | None = None, model: str | None = None) -> RuntimeSettings:
    if provider is not None:
        _RUNTIME.embed_provider = str(provider).lower()
    if model is not None:
        _RUNTIME.embed_model = str(model)
    return _RUNTIME
