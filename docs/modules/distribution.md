# Distribution and partner channels

**Module id:** `distribution`

Product access, branding, territories, and operating context for distributors, agencies, and agents. Partner-led journeys read this context before offering a product.

Public product page: <https://fireflysoftware.io/openplatform/modules/>

## Why this module exists

Direct-to-customer apps can skip distributor rules. Partner portals cannot. Without a distribution module, every experience service reimplements “which products may this agent sell?” and branding drifts per channel. This module holds distributor lifecycle, catalogue views, and branding; product definitions still come from [products](products.md).

## When to use it

Use `distribution` when partners, agents, or brokers need constrained product access, branding, or operating permissions.

Direct-to-customer journeys may skip this module. Partner-led journeys should not hard-code distributor rules in every experience service.

## Key concepts

| Concept | Meaning in this module |
|---------|------------------------|
| Distributor | Partner organisation with assignments and permissions |
| Assignment | Products, territories, or operating rights for a channel |
| Branding | Channel look-and-feel configuration |
| Distributor catalogue | Product view constrained for a distributor |

## Layer map (repos that exist)

| Repository | Layer | Role |
|------------|-------|------|
| [`core-common-distributor-mgmt`](https://github.com/firefly-oss/core-common-distributor-mgmt) | `core-*` | Distributor lifecycle and assignments |
| [`domain-distributor-branding`](https://github.com/firefly-oss/domain-distributor-branding) | `domain-*` | Channel branding configuration |
| [`domain-distributor-catalog`](https://github.com/firefly-oss/domain-distributor-catalog) | `domain-*` | Distributor product catalogue views |
| [`exp-distributor`](https://github.com/firefly-oss/exp-distributor) | `exp-*` | BFF for the distributor portal |

**Related:** [`exp-channel-management`](https://github.com/firefly-oss/exp-channel-management) initialises channel branding and reference data (documented under [shared](shared.md)).

## How a typical call path looks

1. `exp-distributor` exposes portal operations.
2. Domain services manage branding and distributor catalogue views.
3. `core-common-distributor-mgmt` persists assignments and permissions.
4. Product and onboarding flows read distributor context before offering a product.

## How to start

1. Confirm pins: **26.10.19** / Boot **4.1.1** / Java **25**.
2. Mirror `exp-distributor` for portal work ([First service](../start/first-service.md)).
3. Keep commercial product truth in [products](products.md); do not duplicate catalogue definitions here.
4. Pair with [onboarding](onboarding.md) for partner-led KYC/KYB.

## OpenAPI

| Repository | Spec |
|------------|------|
| `core-common-distributor-mgmt` | [`…/openapi.yml`](https://github.com/firefly-oss/core-common-distributor-mgmt/blob/main/core-common-distributor-mgmt-sdk/src/main/resources/openapi.yml) |
| `domain-distributor-branding` | [`…/openapi.yml`](https://github.com/firefly-oss/domain-distributor-branding/blob/main/domain-distributor-branding-sdk/src/main/resources/openapi.yml) |
| `domain-distributor-catalog` | [`…/openapi.yml`](https://github.com/firefly-oss/domain-distributor-catalog/blob/main/domain-distributor-catalog-sdk/src/main/resources/openapi.yml) |
| `exp-distributor` | [`…/openapi.yml`](https://github.com/firefly-oss/exp-distributor/blob/main/exp-distributor-sdk/src/main/resources/openapi.yml) |

Full index: [OpenAPI — distribution](../reference/openapi.md#distribution-distribution).

## Events

[Stub until published](../reference/events.md).

## Maturity notes

Core, domain, and experience repositories for this module id are present under `firefly-oss`. Treat README and OpenAPI in each repo as the source of truth. Parent pin for new work: **26.10.19**.

## Related modules

- [Products and commercial configuration](products.md)
- [Onboarding and verification](onboarding.md)
- [Customers and relationships](customers.md)
- [Business modules catalogue](catalog.md)

## Next steps

Pair with [Products](products.md) and [Onboarding](onboarding.md). Mirror `exp-distributor` when extending partner channels.
