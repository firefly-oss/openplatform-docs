# Contribute

How to improve this documentation hub.

## Repository

`firefly-oss/openplatform-docs`. Public site:
<https://docs.fireflysoftware.io/> (GitHub Pages on the `gh-pages`
branch with that custom domain). DNS and HTTPS enforcement are owned by
the publish track; do not change GoDaddy or Pages domain settings from
docs-only work.

## Editing docs

1. Edit Markdown under `docs/`
2. Preview with `mkdocs serve`
3. Build with `mkdocs build --strict`
4. Run brand check before opening a pull request

## Brand check

Use the vendored script in this repository:

```sh
python3 scripts/brand_check.py README.md docs/**/*.md
```

It matches the Firefly brand-check skill rules. Refresh from the brand kit
plugin when the skill advances:

```sh
cp path/to/firefly-brand-check/scripts/brand_check.py scripts/brand_check.py
```

Rules that matter most for this hub:

- Spell **Firefly**, **OpenPlatform**, and **LendingOS** exactly
- Keep the slogan in English: **Attitude makes the difference.**
- No emoji on docs pages
- Do not invent metrics, certifications, or client names
- Prefer calm, precise tone (avoid exclamation marks)

## CI and publish

Pull requests and pushes run `.github/workflows/docs.yml`
(`mkdocs build --strict` and brand check). To refresh the live site, run
**Publish (GitHub Pages stub)** via `workflow_dispatch` with confirm set
to `publish`, or push commits that the publish track deploys. Prefer
<a href="../versioning/mike.md">mike</a> for versioned aliases
(`26.10.19` / `latest`) when moving from the single-tree snapshot to
versioned Pages.

## Theme pack

Visual tokens come from brand-kit `16-MkDocs/`. When refreshing logos or
CSS, copy from
`dist/Firefly-Brand-Kit/16-MkDocs/` into this repo’s `theme/` and
`docs/assets` / `docs/stylesheets` as described in `theme/PACK.md`.
Hub helpers (`.ff-hero`, `.ff-paths`, `.ff-pins`, `.ff-topo`) ship in that
pack.

## What not to do

- Do not invent a second BOM train in these pages; the current pin is
  **26.10.19** / Boot **4.1.1** (see Versioning and BOM)
- Do not change DNS, CNAME, or force-push Pages from local experiments
  without team agreement
- Do not touch the firefly-builderOS organisation or `firefly-parent`
  bumps from this docs work (owned by other tracks)
