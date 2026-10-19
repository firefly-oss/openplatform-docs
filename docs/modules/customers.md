# Customers and relationships

**Module id:** `customers`

OpenPlatform’s durable party catalogue: people, legal entities, relationships, contact details, and consent. Other modules store party identifiers from here instead of inventing their own customer tables.

Public product page: <https://fireflysoftware.io/openplatform/modules/>

## Why this module exists

Journeys that open accounts, underwrite loans, or bind agreements all need the same notion of “who is this party?” Without a shared customers module, each service invents its own person or company record and you spend the rest of the programme reconciling duplicates. This module holds the party of record; onboarding, agreements, accounts, and lending reference it.

## When to use it

Use `customers` when you need a durable party record: a person opening an account, a legal entity applying for credit, or a policyholder already known to another product.

Stay in [onboarding](onboarding.md) while evidence is still temporary form data. Register or update the party here when the case is ready for a lasting identifier.

## Key concepts

| Concept | Meaning in this module |
|---------|------------------------|
| Party | Person or legal entity with a stable id |
| Relationship | Link between parties (for example ownership or guardianship) |
| Consent | Recorded permission attached to a party |
| Registration | Domain command that creates or updates party state in core |

## Layer map (repos that exist)

Invented repository names are not listed. Every row below is present under `firefly-oss` on this workstation inventory (2026-10-18/19).

| Repository | Layer | Role |
|------------|-------|------|
| [`core-common-customer-mgmt`](https://github.com/firefly-oss/core-common-customer-mgmt) | `core-*` | Persistent customer and party management |
| [`domain-customer-people`](https://github.com/firefly-oss/domain-customer-people) | `domain-*` | Domain orchestration for people and legal entities |

**Experience:** there is no dedicated `exp-customers` repository. Channel journeys such as [`exp-onboarding`](https://github.com/firefly-oss/exp-onboarding) and [`exp-profile`](https://github.com/firefly-oss/exp-profile) call the domain SDK. Profile self-service is documented under [shared services](shared.md).

**Gap:** organisation-centric party work may also touch [`core-common-org-mgmt`](https://github.com/firefly-oss/core-common-org-mgmt) (listed under shared). Confirm ownership in that repo’s README before treating it as part of `customers`.

## How a typical call path looks

1. An experience service (often `exp-onboarding` or `exp-profile`) collects journey input.
2. `domain-customer-people` coordinates registration and relationship commands.
3. `core-common-customer-mgmt` persists party and relationship state.
4. Downstream modules (agreements, accounts, lending) store the party id on their own records.

## How to start

1. Confirm the parent pin on [Versioning and BOM](../versioning/bom.md): Jafly **26.10.19**, Spring Boot **4.1.1**, Java **25**.
2. Clone a neighbour: prefer `domain-customer-people` for orchestration work, or `core-common-customer-mgmt` for persistence APIs.
3. Follow [First service](../start/first-service.md) to mirror the Maven layout and rename packages.
4. Open the OpenAPI files linked below before designing new endpoints.

## OpenAPI

| Repository | Spec |
|------------|------|
| `core-common-customer-mgmt` | [`…/openapi.yml`](https://github.com/firefly-oss/core-common-customer-mgmt/blob/main/core-common-customer-mgmt-sdk/src/main/resources/openapi.yml) |
| `domain-customer-people` | [`…/openapi.yml`](https://github.com/firefly-oss/domain-customer-people/blob/main/domain-customer-people-sdk/src/main/resources/openapi.yml) |

Full index: [OpenAPI — customers](../reference/openapi.md#customers-customers).

## Events

No shared event-contract pack is published for this module yet. See [Event contracts](../reference/events.md). Prefer each repository’s README for outbox or integration notes when present.

## Maturity notes

Both core and domain repositories are multi-module Maven projects (`-core`, `-web`, `-sdk`). Treat README and OpenAPI in each repo as authoritative. Do not infer production readiness from this hub alone. Several READMEs may still show older Boot badges; new work follows Boot **4.1.1** via parent **26.10.19**.

## Related modules

- [Onboarding and verification](onboarding.md)
- [Agreements and documents](agreements.md)
- [Identity and shared services](shared.md)
- [Business modules catalogue](catalog.md)

## Next steps

Mirror `domain-customer-people` or `core-common-customer-mgmt` when extending party behaviour. If the journey still collects KYC evidence, continue on [Onboarding](onboarding.md).
