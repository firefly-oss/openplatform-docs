# Contribute

How to improve this documentation hub.

## Repository

`firefly-oss/openplatform-docs`. Public site: <https://docs.fireflysoftware.io/> (GitHub Pages on the `gh-pages` branch with that custom domain). DNS and HTTPS enforcement are owned by the publish track; do not change GoDaddy or Pages domain settings from docs-only work.

## Editing docs

1. Edit Markdown under `docs/`
2. Preview with `mkdocs serve`
3. Build with `mkdocs build --strict`
4. Run brand check before opening a pull request

Prefer clear teaching prose: say what to do, why it matters, and what to open next. Keep version pins honest (**26.10.19** / Boot **4.1.1** / Java **25**). Do not invent endpoints, metrics, or compliance claims.

## Brand check

Use the vendored script in this repository:

```sh
python3 scripts/brand_check.py README.md docs/**/*.md
```

It matches the Firefly brand-check skill rules. Refresh from the brand kit plugin when the skill advances:

```sh
cp path/to/firefly-brand-check/scripts/brand_check.py scripts/brand_check.py
```

Rules that matter most for this hub:

- Spell **Firefly**, **OpenPlatform**, and **LendingOS** exactly
- Keep the slogan in English: **Attitude makes the difference.**
- No emoji on docs pages
- Do not invent metrics, certifications, or client names
- Prefer calm, precise tone (avoid exclamation marks)

## Images and theme

- Diagrams live under `docs/diagrams/` (SVG)
- OpenPlatform diagrams live under `docs/diagrams/` as purpose-built SVGs (layers, ecosystem, adapters). Do not vendor LendingOS product-assembly slides or other brand-kit presentation isometrics into this hub.
- Logos and Manrope live under `docs/assets/brand/` and `docs/assets/fonts/`
- Header lockup is logo + `|` + OpenPlatform. The document title is Firefly OpenPlatform Documentation Hub (`site_name`).

Prefer root-absolute `/diagrams/...` and `/assets/...` paths so images resolve on localhost and on `docs.fireflysoftware.io`.

## CI and publish

Pull requests and pushes run `.github/workflows/docs.yml` (`mkdocs build --strict` and brand check). To refresh the live site, run **Publish (GitHub Pages stub)** via `workflow_dispatch` with confirm set to `publish`. Prefer [mike](../versioning/mike.md) for versioned aliases (`26.10.19` / `latest`) when moving from the single-tree snapshot to versioned Pages.

## Theme pack

Visual tokens come from brand-kit `16-MkDocs/`. When refreshing logos or CSS, copy from `dist/Firefly-Brand-Kit/16-MkDocs/` into this repo’s `theme/` and `docs/assets` / `docs/stylesheets` as described in `theme/PACK.md`. Hub helpers (`.ff-hero`, `.ff-paths`, `.ff-pins`, `.ff-topo`, `.ff-iso`, `.ff-steps`) ship in that pack.

## What not to do

- Do not invent a second BOM train in these pages; the current pin is **26.10.19** / Boot **4.1.1** (see Versioning and BOM)
- Do not change DNS, CNAME, or force-push Pages from local experiments without team agreement
- Do not touch the firefly-builderOS organisation or `firefly-parent` bumps from this docs work (owned by other tracks)
