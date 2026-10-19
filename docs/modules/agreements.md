# Agreements and documents

**Module id:** `agreements`

Each agreement with its parties and evidence, in one context.

Public product page:
<https://fireflysoftware.io/openplatform/modules/>

## Coverage

- Contract terms, party roles, and status history
- Document metadata, versions, and permissions
- Content and e-signature through the institution’s providers (adapters)

## How it is used

Assemble account and loan agreements, or manage policy-document
references beside a policy system. Agreements link parties from
<a href="customers.md">customers</a> to products from
<a href="products.md">products</a>.

## Key repositories

| Repository | Layer | Role |
|------------|-------|------|
| <a href="https://github.com/firefly-oss/core-common-contract-mgmt"><code>core-common-contract-mgmt</code></a> | `core-*` | Contract lifecycle and party-product links |
| <a href="https://github.com/firefly-oss/domain-common-contracts"><code>domain-common-contracts</code></a> | `domain-*` | Contract domain orchestration |
| <a href="https://github.com/firefly-oss/core-common-document-mgmt"><code>core-common-document-mgmt</code></a> | `core-*` | Document metadata and storage boundaries |

## API and events

OpenAPI paths for this module:
<a href="../reference/openapi.md#agreements-agreements">OpenAPI index — agreements</a>.

Event contracts: <a href="../reference/events.md">stub until published</a>.

## Maturity notes

All three repositories are present under `firefly-oss`. Document content
and signature providers stay behind adapters; see
<a href="../integrate/adapters.md">Integrate</a>. Confirm schema and API
surfaces in each repository before integrating.

## Related modules

- <a href="customers.md">Customers and relationships</a>
- <a href="products.md">Products and commercial configuration</a>
- <a href="accounts.md">Accounts and financial records</a>
- <a href="lending.md">The lending lifecycle</a>
- <a href="catalog.md">Business modules catalogue</a>
