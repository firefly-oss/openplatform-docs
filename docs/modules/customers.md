# Customers and relationships

**Module id:** `customers`

One consistent view of the people and businesses each journey serves. Other OpenPlatform modules reference party identifiers from this catalogue rather than duplicating party records.

Public product page: <https://fireflysoftware.io/openplatform/modules/>

## When you need this module

Use `customers` when a journey needs a durable party record: a person opening an account, a legal entity applying for credit, or a policyholder already known to another product. If you only need temporary form data before a party exists, start in onboarding and register the party here when the case is ready.

## Coverage

- People, legal entities, and relationships
- Contact details, identity records, and consent
- Customer registration coordinated across services

## How a typical call path looks

1. An experience service (for example `exp-onboarding`) collects journey input.
2. A domain service such as `domain-customer-people` coordinates registration commands.
3. `core-common-customer-mgmt` persists party and relationship state.
4. Downstream modules store the party id on agreements, accounts, or loans.

## Key repositories

| Repository | Layer | Role |
|------------|-------|------|
| [`core-common-customer-mgmt`](https://github.com/firefly-oss/core-common-customer-mgmt) | `core-*` | Persistent customer and party management |
| [`domain-customer-people`](https://github.com/firefly-oss/domain-customer-people) | `domain-*` | Domain orchestration for people and legal entities |

Related experience surfaces often call the domain SDK from journeys such as onboarding (`exp-onboarding`).

## API and events

OpenAPI paths for this module: [OpenAPI index — customers](../reference/openapi.md#customers-customers).

Event contracts: [stub until published](../reference/events.md).

## Maturity notes

Both repositories are present under `firefly-oss` with multi-module Maven layouts (`-core`, `-web`, `-sdk`, and related artifacts). Treat each repository README and OpenAPI as authoritative for endpoints and local run instructions. Do not infer production readiness from this hub alone. Parent pin for new work: Jafly **26.10.19** / Boot **4.1.1** / Java **25**.

## Related modules

- [Onboarding and verification](onboarding.md)
- [Agreements and documents](agreements.md)
- [Identity and shared services](shared.md)
- [Business modules catalogue](catalog.md)

## What next

Mirror `domain-customer-people` or `core-common-customer-mgmt` when extending party behaviour. Confirm inheritance on [First service](../start/first-service.md).
