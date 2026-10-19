# OpenPlatform docs

Developer documentation hub for **Firefly OpenPlatform**.

Target publish URL: <https://docs.fireflysoftware.io/>.
CI builds the site on every push and pull request. GitHub Pages publish is
a manual `workflow_dispatch` stub (no DNS/CNAME yet). Versioned deploys
use **mike** locally (`26.10.19` / `latest`); see
`docs/versioning/mike.md`.

Attitude makes the difference.

## Local preview

```sh
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
mkdocs serve
```

Build the static site:

```sh
mkdocs build --strict
```

## Brand check

Vendored script (same rules as the Firefly brand-check skill):

```sh
python3 scripts/brand_check.py README.md docs/**/*.md
```

Or list files explicitly if your shell does not expand globs:

```sh
python3 scripts/brand_check.py README.md docs/index.md docs/ecosystem.md \
  docs/start/*.md docs/architecture/*.md docs/modules/*.md \
  docs/insurance/*.md docs/reference/*.md docs/integrate/*.md \
  docs/versioning/*.md docs/contribute/*.md
```

## Mike versioning

```sh
mike deploy --update-aliases 26.10.19 latest
mike set-default latest
mike list
```

Omit `--push` until a remote and Pages branch are ready. Details:
`docs/versioning/mike.md`.

## CI

| Workflow | Trigger | Purpose |
|----------|---------|---------|
| `.github/workflows/docs.yml` | push / pull_request | `mkdocs build --strict` + brand check |
| `.github/workflows/publish-gh-pages.yml` | `workflow_dispatch` (confirm=`publish`) | Build, brand check, push `site/` to `gh-pages` |

Custom domain (`docs.fireflysoftware.io`) and DNS are intentionally not
wired in the publish job until approved. Prefer switching the publish
job to `mike deploy` when versioned Pages go live.

## Theme

Material theme assets are vendored from the Firefly brand kit pack
`16-MkDocs/` (`firefly-oss/brand-kit`). See `theme/PACK.md`.

Refresh from a local brand-kit work tree after `npm run build -- --only mkdocs`:

```sh
cp -R ../firefly-brand-kit-work/dist/Firefly-Brand-Kit/16-MkDocs/. theme/
cp theme/stylesheets/*.css docs/stylesheets/
cp -R theme/assets/brand docs/assets/
cp -R theme/assets/fonts docs/assets/
```

Adjust relative paths if your checkouts sit elsewhere.

## Status (2026-10-18/19)

- Per-module catalogue pages for all OpenPlatform module ids
- OpenAPI index and event-contract stubs (no invented endpoints)
- Insurance development-area pages aligned with fireflysoftware.io
- Architecture topology (exp / domain / core, firefly-oss vs
  firefly-serviceOS, Jafly **26.10.19**)
- Adapter pattern plus `library-psps` / `library-rails` guides
- Mike plugin + publish notes for **26.10.19** / `latest`
- Deeper first-service guide for parent **26.10.19** / Boot **4.1.1**
- CI for strict MkDocs build and brand check; Pages publish stub
- OpenPlatform consumes Jafly **26.10.19** / Spring Boot **4.1.1**
  (`org.fireflyframework:fireflyframework-parent:26.10.19` on Maven Central)
