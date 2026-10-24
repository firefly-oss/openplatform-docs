# Edit these docs

Repository: [fireflysoftwaresolutions/openplatform-docs](https://github.com/fireflysoftwaresolutions/openplatform-docs). The public site is [docs.fireflysoftware.io](https://docs.fireflysoftware.io/), served from the `gh-pages` branch.

## Local preview

```sh
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
mkdocs serve
```

Strict build and brand check:

```sh
mkdocs build --strict
python3 scripts/check_site.py
python3 scripts/brand_check.py README.md docs/index.md
```

Pass every `docs/**/*.md` file to the brand check, as `.github/workflows/docs.yml` does. The check fails the build on errors. Do not invent metrics, client names, or certifications. Spell Firefly and OpenPlatform as one word each. The slogan stays in English: Attitude makes the difference.

[Maintenance tools](../../scripts/README.md) explain producer/coverage refreshes and their provenance. Review rendered desktop/mobile pages in both themes, keyboard navigation/search, zoom, long tables, readable diagrams, and read-only explorer loading.

## Publish

Pushing `main` runs the strict build. It does not update GitHub Pages.

Pages updates when the workflow **Publish (GitHub Pages stub)** runs with confirm set to `publish`. That workflow builds `site/` and pushes it to `gh-pages` with CNAME `docs.fireflysoftware.io`. Do not force-push `main` or `gh-pages`.

DNS for the custom domain is outside this repository.
