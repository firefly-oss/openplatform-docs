# API and event reference

Indexes of **known** OpenAPI specifications and event-contract locations
in `firefly-oss`. Links point at repository files on GitHub. This hub does
not invent endpoints or publish a synthetic API catalogue.

| Page | Contents |
|------|----------|
| <a href="openapi.md">OpenAPI index</a> | Spec paths by OpenPlatform module |
| <a href="events.md">Event contracts</a> | Published schemas where they exist; stubs where they do not |

## How to use these indexes

1. Start from the <a href="../modules/catalog.md">business module</a> that
   owns your journey.
2. Open the linked `openapi.yml` (or module README) for paths, schemas,
   and local `/v3/api-docs` behaviour.
3. Treat each repository as authoritative. Specs can move between
   `openapi.yml` and `api-spec/openapi.yml` as modules evolve.

Runtime Swagger UI / SpringDoc URLs (often `/v3/api-docs` and
`/swagger-ui.html`) are documented in individual service READMEs when
the service is running locally. This hub does not assume a public hosted
API gateway.

## Related

- <a href="../architecture/overview.md">Architecture overview</a>
- <a href="../integrate/adapters.md">Adapters</a>
- <a href="../versioning/bom.md">Versioning and BOM</a>
