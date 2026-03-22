# Project Template

SaaS with multiple services and shared code.

## Setup

```bash
uv venv && .venv\Scripts\activate && uv pip install -e ".[dev]"
```

## Structure

```
├── src/
│   ├── backend/          - Backend services and API logic
│   │   └── shared/       - Shared utilities across backend services
│   ├── frontend/         - Frontend application
│   │   └── shared/       - Shared utilities across frontend modules
│   └── shared/           - Shared code across all services
├── tests/                - All tests
│   ├── backend/          - Tests for src/backend/ (subfolder per module)
│   │   └── output/       - Test outputs (gitignored)
│   ├── frontend/         - Tests for src/frontend/ (subfolder per module)
│   │   └── output/       - Test outputs (gitignored)
│   └── shared/           - Tests for src/shared/
│       └── output/       - Test outputs (gitignored)
├── scripts/              - Local/one-off scripts, not production code
├── data/                 - Data files (gitignored)
├── taskdocs/             - Information docs and task documentation
│   ├── archive/          - Previous versions of task docs
│   └── current_task.md   - Active task document
└── .github/workflows/    - CI/CD pipelines
```

### Key conventions

- **tests/** mirrors **src/** — each module in `src/` gets a corresponding subfolder under `tests/`
- **output/** folders within test subfolders hold processed test data (gitignored)
- **data/** folders are gitignored wherever they appear
- **scripts/** contains single-use or local utility scripts, not part of production code
- **taskdocs/** holds all information docs; when new versions are created, old ones move to `taskdocs/archive/`
