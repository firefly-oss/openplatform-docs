# Firefly OpenPlatform Documentation

Developer documentation for OpenPlatform 26.10.4.

Developed by the Firefly Software Foundation. [dev@fireflysoftware.io](mailto:dev@fireflysoftware.io)

[Website](https://fireflysoftware.io/) · [Service host](https://openplatform.fireflysoftware.io) · [Published site](https://docs.fireflysoftware.io/)

The site is the guide for OpenPlatform 26.10.4: presentation, quickstart, architecture, journeys, and one entry for every repository in the release list. Insurance is seven domain services and seven cores. `core-lending-credit-cards` has no domain orchestrator. The published decision call is `POST /api/v1/decisions` on `domain-lending-credit-scoring`.

GitHub organization: [fireflysoftwaresolutions](https://github.com/fireflysoftwaresolutions).

Attitude makes the difference.

## Local preview

```sh
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
mkdocs serve
```

```sh
mkdocs build --strict
```

## Publish

| Workflow | Trigger | What it does |
| --- | --- | --- |
| `.github/workflows/docs.yml` | push and pull request to `main` | `mkdocs build --strict` and brand check |
| `.github/workflows/publish-gh-pages.yml` | `workflow_dispatch` with confirm `publish` | Build and push `site/` to `gh-pages` |

The published site is <https://docs.fireflysoftware.io/>. Pushing `main` does not deploy Pages. Do not force-push.

Published version in these pages: OpenPlatform **26.10.4**, Jafly BOM **26.10.20**, Spring Boot **4.1.1**, Java **25**.
