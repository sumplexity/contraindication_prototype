import os
from pathlib import Path


class BaseConfig:
    """Base configuration loaded from environment variables."""

    project_root: Path = Path(__file__).parent.parent.parent
    database_url: str = os.environ.get("DATABASE_URL", "")
