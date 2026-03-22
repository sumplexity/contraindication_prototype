# Modularity

## Structure

### shared/
Common code used by all services and frontend.

| File | Purpose |
|------|---------|
| `config.py` | Base configuration loading from env vars |

### backend/
Backend services and API logic.

| File | Purpose |
|------|---------|
| `utils.py` | Backend utility functions |

### backend/shared/
Shared utilities across backend services.

### frontend/
Frontend application.

### frontend/shared/
Shared utilities across frontend modules.

### scripts/
Local/one-off scripts not part of production code.

### taskdocs/
Information docs and task documentation. Old versions archived in `taskdocs/archive/`.
