# Documentation maintenance tools

These tools maintain the OpenPlatform manual. They distinguish producer declarations, governed requirements, built-link validity, brand compliance, and runtime acceptance. Run them from the repository root with the dependencies in `requirements.txt` installed. None publishes the site or changes a journey acceptance state.

## Build and inspect

```sh
python3 -m venv .venv
. .venv/bin/activate
python -m pip install -r requirements.txt
mkdocs build --strict
python scripts/check_public_manual.py
python scripts/check_site.py --report /tmp/openplatform-site-check.json
```

`check_site.py` requires an existing, nonempty built site. It checks every local HTML link, fragment target, image, `srcset` variant, stylesheet, and CSS font/image URL. It rejects references outside the build directory. It does not contact external links, execute Swagger UI, assess diagram readability, or prove that a documented API works. Use `--site` when the build output is elsewhere.

## Refresh producer contracts

```sh
python scripts/sync_api_reference.py --workspace /path/to/fireflysoftwaresolutions-program
```

Inputs live in `sources/api-contracts.json`: an explicit public producer, its repository-relative SDK input, and the remote base commit. The script copies current input bytes into `docs/api/contracts/`, renders operation/schema indexes in `docs/api/services/`, and writes `docs/api/contract-manifest.json`. Current local changes are identified by SHA256 separately from the baseline revision. A copied specification is a declaration snapshot; generation does not prove controller parity, authorization, publication, or downstream behavior.

Review new producer inclusion and source paths before refreshing. Regenerate a producer's authoritative SDK specification using its own Maven lifecycle first; do not edit a copied YAML to invent an implementation. Generated Java under producer `target/` directories stays outside version control.

## Refresh service configuration guides

```sh
python scripts/sync_service_guides.py --workspace /path/to/fireflysoftwaresolutions-program
python scripts/sync_service_guides.py --workspace /path/to/fireflysoftwaresolutions-program --check
```

`sources/service-guides.json` selects repository-owned guides for byte-for-byte inclusion in `docs/reference/service-guides/`. The generated directory records source paths and digests without implying the local changes have been published. Missing sources, duplicate destinations and paths escaping their owning repository are rejected. Unexpected output files also fail: removing a registry entry requires explicit review/removal of its retired snapshot, and the tool never silently deletes it. Existing output links cannot escape the generated directory. Check mode detects changed source or output without modifying either. Run it after a service guide changes; ordinary standalone documentation builds use the checked-in snapshots and do not require sibling repositories. The configured tooling suite also validates the shipped guide/API bytes, registry membership, provenance and declared operation/schema structure against their manifests without network access; this establishes snapshot integrity, not upstream freshness or runtime behavior.

## Internal governance stays outside the public manual

Acceptance registers, audit findings, required-case matrices, execution statistics, and review verdicts belong in the program's access-controlled governance/evidence sources. Do not copy them into `docs/`. `check_public_manual.py` enforces this publication boundary for the known register exports, internal case IDs, and register links. Business acceptance of an offer, policy terms, or provider request remains normal product terminology. The public manual contains business behavior, supported contracts, configuration, tutorials, limitations, and operational procedures. The repository directory identifies public source ownership without exporting internal case records.

## Brand and diagram checks

```sh
python scripts/brand_check.py README.md docs/index.md
python -m unittest discover -s scripts/tests -v
node docs/assets/diagrams/render.mjs
```

CI passes all Markdown pages to `brand_check.py`; its vendored rules detect copy/brand violations and do not verify visual design. The diagram renderer requires the current sibling brand kit and its documented Node dependencies. Read [the diagram source guide](../docs/assets/diagrams/README.md) for provenance, reproduction, light/dark variants, and text-fit rules.

Before accepting changes, inspect actual built pages on desktop and mobile, in both themes, with keyboard navigation, search, zoom, long tables, diagrams, and an API explorer. Retain exact source and generated snapshot identities with the results. A strict build and clean crawl establish structural validity only.
