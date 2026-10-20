<a href="https://fireflysoftware.io/openplatform/">
<picture>
  <source media="(max-width: 640px) and (prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/firefly-oss/.github/main/profile/assets/banner-narrow-dark.svg">
  <source media="(max-width: 640px)" srcset="https://raw.githubusercontent.com/firefly-oss/.github/main/profile/assets/banner-narrow-light.svg">
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/firefly-oss/.github/main/profile/assets/banner-dark.svg">
  <img src="https://raw.githubusercontent.com/firefly-oss/.github/main/profile/assets/banner-light.svg" alt="Firefly OpenPlatform - Platform - Documentation" width="100%">
</picture>
</a>

# Firefly OpenPlatform - Platform - Documentation

Developed by the Firefly Software Foundation. [dev@fireflysoftware.io](mailto:dev@fireflysoftware.io)

[Website](https://fireflysoftware.io/) · [OpenPlatform](https://fireflysoftware.io/openplatform/) · [Module catalogue](https://fireflysoftware.io/openplatform/modules/)

Developer documentation hub for **Firefly OpenPlatform**.

Public site: <https://docs.fireflysoftware.io/>.
CI builds the site on every push and pull request. GitHub Pages publish is
via `workflow_dispatch` (confirm=`publish`) to the `gh-pages` branch with
CNAME `docs.fireflysoftware.io`. Versioned deploys use **mike**
(`26.10.20` / `latest`); see `docs/versioning/mike.md`.

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
mike deploy --update-aliases 26.10.20 latest
mike set-default latest
mike list
```

Details: `docs/versioning/mike.md`.

## CI

| Workflow | Trigger | Purpose |
|----------|---------|---------|
| `.github/workflows/docs.yml` | push / pull_request | `mkdocs build --strict` + brand check |
| `.github/workflows/publish-gh-pages.yml` | `workflow_dispatch` (confirm=`publish`) | Build, brand check, push `site/` to `gh-pages` |

DNS and HTTPS for the custom domain are owned by the publish track.

## Theme

Material theme assets are vendored from the Firefly brand kit pack
`16-MkDocs/` (`firefly-oss/brand-kit`). See `theme/PACK.md`.

Refresh from a local brand-kit work tree after `npm run build -- --only mkdocs`:

```sh
cp -R ../firefly-brand-kit-work/dist/Firefly-Brand-Kit/16-MkDocs/. theme/
cp theme/stylesheets/*.css docs/stylesheets/
cp -R theme/assets/brand/. docs/assets/brand/
cp -R theme/assets/fonts/. docs/assets/fonts/
```

Current train documented in these pages: Jafly / Central **26.10.20**,
Spring Boot **4.1.1**, Java **25**.
