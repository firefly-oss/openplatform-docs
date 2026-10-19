# Customers and relationships

**Module id:** `customers`

One consistent view of the people and businesses each journey serves.

Public product page:
<https://fireflysoftware.io/openplatform/modules/>

## Coverage

- People, legal entities, and relationships
- Contact details, identity records, and consent
- Customer registration coordinated across services

## How it is used

Reuse customer data across account opening, credit applications, and
policyholder service. Other OpenPlatform modules reference party
identifiers from this catalogue rather than duplicating party records.

## Key repositories

| Repository | Layer | Role |
|------------|-------|------|
| <a href="https://github.com/firefly-oss/core-common-customer-mgmt"><code>core-common-customer-mgmt</code></a> | `core-*` | Persistent customer and party management |
| <a href="https://github.com/firefly-oss/domain-customer-people"><code>domain-customer-people</code></a> | `domain-*` | Domain orchestration for people and legal entities |

Related experience surfaces often call the domain SDK from journeys such
as onboarding (`exp-onboarding`).

## API and events

OpenAPI paths for this module:
<a href="../reference/openapi.md#customers-customers">OpenAPI index — customers</a>.

Event contracts: <a href="../reference/events.md">stub until published</a>.

## Maturity notes

Both repositories are present under `firefly-oss` with multi-module Maven
layouts (`-core`, `-web`, `-sdk`, and related artifacts). Treat each
repository README and OpenAPI as authoritative for endpoints and local
run instructions. Do not infer production readiness from this hub alone.

## Related modules

- <a href="onboarding.md">Onboarding and verification</a>
- <a href="agreements.md">Agreements and documents</a>
- <a href="shared.md">Identity and shared services</a>
- <a href="catalog.md">Business modules catalogue</a>
