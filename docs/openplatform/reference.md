# OpenPlatform Documentation: source reference

[Repository guide](../../README.md) · [Machine-readable inventory](source-inventory.json)

This reference is derived from checked-in source. It separates declared HTTP mappings, typed contracts, property placeholders, and validation locations. Java reflection, inherited framework routes, generated targets, and runtime infrastructure are outside this static inventory.

## HTTP operations

No local Spring HTTP mapping declarations were found.

## Data contracts

## Ports and service contracts

## Configuration

Values below come from source placeholders. Plain YAML values and configuration-property classes must also be reviewed at the linked configuration sources. Secret fallback values are deliberately redacted.

No Spring-style property placeholders were found.

## Security and failure evidence

No local authorization/status/exception sites matched this inventory. This does not establish either the presence or absence of inherited security enforcement.

## Build and dependencies

## Test sources

- [scripts/tests/test_api_reference.py](../../scripts/tests/test_api_reference.py)
- [scripts/tests/test_brand_check.py](../../scripts/tests/test_brand_check.py)
- [scripts/tests/test_repository_snapshots.py](../../scripts/tests/test_repository_snapshots.py)
- [scripts/tests/test_service_guides.py](../../scripts/tests/test_service_guides.py)

## CI definitions

- [.github/workflows/docs.yml](../../.github/workflows/docs.yml)
- [.github/workflows/publish-gh-pages.yml](../../.github/workflows/publish-gh-pages.yml)
