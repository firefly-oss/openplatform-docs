# 16-MkDocs — Firefly Material theme pack

Reusable MkDocs Material theme assets for Firefly documentation sites
(<https://squidfunk.github.io/mkdocs-material/>). Mirrors the token mapping
used by Firefly Weave
(<https://github.com/fireflyframework/firefly-weave>).

**Attitude makes the difference.**

## Contents

| Path | Purpose |
|------|---------|
| `mkdocs.snippet.yml` | Theme, plugins, markdown extensions, dual light/dark palettes |
| `stylesheets/extra.css` | Manrope `@font-face`, `--md-*` tokens, typography |
| `stylesheets/firefly-docs.css` | Alias that imports `extra.css` |
| `stylesheets/firefly-colors.css` | Raw `--firefly-*` tokens from `03-Color/` |
| `assets/brand/` | Logo lockups, icon, favicons (from `02-Logo/`) |
| `assets/fonts/manrope/` | Variable Manrope WOFF2 + OFL |
| `overrides/` | Minimal Material `custom_dir` stubs |

## Colours

| Token | Hex | Role |
|-------|-----|------|
| Charcoal | `#10110F` | Primary dark / header |
| Paper | `#F3F1EB` | Light surface / dark-scheme text |
| Amber | `#FFB34A` | Accent |

Material mapping (dark default matches Weave; light palette is also provided):

```css
--md-primary-fg-color: #10110f;
--md-primary-bg-color: #f3f1eb;
--md-default-bg-color: #10110f; /* slate scheme */
--md-accent-fg-color: #ffb34a;
--md-text-font: "Manrope";
```

## How to consume

### Option A — copy into a docs repo

```sh
# From brand-kit after npm run build (or from a released ZIP):
cp -R dist/Firefly-Brand-Kit/16-MkDocs /path/to/your-docs/theme
```

Then in `mkdocs.yml`:

```yaml
theme:
  name: material
  font: false
  logo: theme/assets/brand/firefly-logo-primary-reversed.svg
  favicon: theme/assets/brand/favicon.svg
  custom_dir: theme/overrides
  palette:
    - scheme: default
      primary: custom
      accent: custom
    - scheme: slate
      primary: custom
      accent: custom
extra_css:
  - theme/stylesheets/extra.css
```

Merge remaining keys from `mkdocs.snippet.yml` (plugins, markdown_extensions).

### Option B — relative path (local monorepo)

Point `extra_css`, `logo`, and `favicon` at this pack while developing next to
the brand kit work tree. Prefer vendoring a copy before publish so the docs
repo stays self-contained.

### Option C — follow Weave

See `firefly-weave/mkdocs.yml` and `docs/stylesheets/weave.css` for a
production consumer of the same tokens.

## Requirements

- Python 3.11+ with `mkdocs-material` (see the consuming repo’s `requirements.txt`)
- Optional: `mike` (<https://github.com/jimporter/mike>) for versioned docs

## Brand rules for docs copy

- Product names: **Firefly**, **OpenPlatform**, **LendingOS** (exact spelling)
- Slogan stays English: **Attitude makes the difference.**
- No emoji on brand surfaces
- Run brand check before merge:

```sh
python3 path/to/firefly-brand-check/scripts/brand_check.py docs/**/*.md
```

## Regenerating assets

Logos come from `02-Logo/`. Colour CSS comes from `03-Color/`. Fonts can be
refreshed from Weave’s `assets/fonts/manrope/` or from `04-Typography/` (TTF).

```sh
# In firefly-oss/brand-kit (or this work tree):
npm run build -- --only logo,colour,type
# Then re-copy SVG/favicon/CSS into 16-MkDocs as needed.
```

## Status

Pack source lives in `templates/mkdocs/` and is assembled by
`npm run build -- --only mkdocs` (or a full `npm run build`) into
`dist/Firefly-Brand-Kit/16-MkDocs/`. First consumer: OpenPlatform docs hub
(`openplatform-docs` toward `docs.fireflysoftware.io`).
