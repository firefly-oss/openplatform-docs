# API and event reference

Indexes of **known** OpenAPI specifications and event-contract locations in `firefly-oss`. Links point at repository files on GitHub. This hub does not invent endpoints or publish a synthetic API catalogue.

| Page | Contents |
|------|----------|
| [OpenAPI index](openapi.md) | Spec paths by OpenPlatform module |
| [Event contracts](events.md) | Published schemas where they exist; stubs where they do not |

## How to use these indexes

<ol class="ff-steps" markdown="0">
  <li class="ff-step">
    <p class="ff-step__title">Start from the module</p>
    <p class="ff-step__meta">Open the <a href="/modules/catalog/">business module</a> that owns your journey.</p>
  </li>
  <li class="ff-step">
    <p class="ff-step__title">Follow the OpenAPI link</p>
    <p class="ff-step__meta">Read the linked <code>openapi.yml</code> (or module README) for paths, schemas, and local <code>/v3/api-docs</code> behaviour.</p>
  </li>
  <li class="ff-step">
    <p class="ff-step__title">Trust the repository</p>
    <p class="ff-step__meta">Specs can move between <code>openapi.yml</code> and <code>api-spec/openapi.yml</code> as modules evolve. The repo wins over this hub if they disagree.</p>
  </li>
</ol>

Runtime Swagger UI / SpringDoc URLs (often `/v3/api-docs` and `/swagger-ui.html`) are documented in individual service READMEs when the service is running locally. This hub does not assume a public hosted API gateway.

## Related

- [Architecture overview](../architecture/overview.md)
- [Adapters](../integrate/adapters.md)
- [Versioning and BOM](../versioning/bom.md)
