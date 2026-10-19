# The lending lifecycle

**Module id:** `lending`

From application, offer, and decision records through servicing, collateral, and collections. Credit policy and final decisions stay with the institution. Journeys usually compose this module with customers, products, agreements, and risk.

Public product page: <https://fireflysoftware.io/openplatform/modules/>

## Why this module exists

Lending spans many bounded contexts (origination, servicing, collateral, collections, product lines). Putting them in one monolith makes every change a release risk. OpenPlatform publishes separate core/domain repositories so teams can evolve origination without rewriting servicing, and product-line cores (personal loans, mortgage, and others) can specialise without forking the whole stack.

## When to use it

Use `lending` for origination, servicing, collateral, collections, and product-line loan data.

Credit scoring and bureau calls belong in [risk](risk.md) and adapters, not inside every lending core. Credit policy ownership remains with the institution.

## Key concepts

| Concept | Meaning in this module |
|---------|------------------------|
| Origination | Application, offer, and decision records |
| Servicing | Schedules, disbursements, and servicing events |
| Collateral | Assets linked to applications or loans |
| Collections | Delinquency and collections cases |
| Product line | Specialised core/domain for personal loans, mortgage, asset finance, and similar |

## Layer map (repos that exist)

### Cross-cutting lending

| Repository | Layer | Role |
|------------|-------|------|
| [`core-lending-loan-origination`](https://github.com/firefly-oss/core-lending-loan-origination) | `core-*` | Application, offer, and decision persistence |
| [`domain-lending-loan-origination`](https://github.com/firefly-oss/domain-lending-loan-origination) | `domain-*` | Origination domain orchestration |
| [`core-lending-loan-servicing`](https://github.com/firefly-oss/core-lending-loan-servicing) | `core-*` | Servicing records and schedules |
| [`domain-lending-loan-servicing`](https://github.com/firefly-oss/domain-lending-loan-servicing) | `domain-*` | Servicing domain orchestration |
| [`core-lending-collateral-management`](https://github.com/firefly-oss/core-lending-collateral-management) | `core-*` | Collateral linked to applications |
| [`core-lending-delinquency-collections`](https://github.com/firefly-oss/core-lending-delinquency-collections) | `core-*` | Delinquency and collections |
| [`exp-lending`](https://github.com/firefly-oss/exp-lending) | `exp-*` | Lending portal BFF (simulation, application, underwriting hand-off) |

### Product-line repositories

| Repository | Layer | Role |
|------------|-------|------|
| [`core-lending-personal-loans`](https://github.com/firefly-oss/core-lending-personal-loans) | `core-*` | Personal-loan product data |
| [`domain-lending-personal-loans`](https://github.com/firefly-oss/domain-lending-personal-loans) | `domain-*` | Personal-loan domain orchestration |
| [`core-lending-mortgage`](https://github.com/firefly-oss/core-lending-mortgage) | `core-*` | Mortgage product data (SDK artifact uses `mortgages`) |
| [`core-lending-asset-finance`](https://github.com/firefly-oss/core-lending-asset-finance) | `core-*` | Asset-finance product data |
| [`domain-lending-asset-finance`](https://github.com/firefly-oss/domain-lending-asset-finance) | `domain-*` | Asset-finance domain orchestration |
| [`core-lending-credit-cards`](https://github.com/firefly-oss/core-lending-credit-cards) | `core-*` | Revolving credit-card lending records |
| [`core-lending-supply-chain-finance`](https://github.com/firefly-oss/core-lending-supply-chain-finance) | `core-*` | Supply-chain finance product data |

**Gap:** no `domain-lending-mortgage`, `domain-lending-credit-cards`, or `domain-lending-supply-chain-finance` in the inventory. Product-line domain coverage is uneven; confirm each README before planning a full vertical.

**Risk-adjacent (documented under [risk](risk.md)):** `core-lending-credit-scoring`, `domain-lending-credit-scoring`, `core-lending-provisioning-risk`, `core-lending-regulatory-compliance`.

**Sample only:** [`firefly-lending`](https://github.com/firefly-oss/firefly-lending) mock OpenAPI is marked sample in the [OpenAPI index](../reference/openapi.md#lending-lending) — not the production module contract.

## How a typical call path looks

1. `exp-lending` starts applications and servicing journeys.
2. Domain origination or servicing services coordinate commands.
3. Core repositories persist applications, offers, schedules, collateral, and collections.
4. Product-line cores hold specialised loan data when the product requires it.
5. Scoring and bureau calls go to [risk](risk.md) and adapters.

## How to start

1. Confirm the current pin on [Versioning and BOM](../versioning/bom.md) (**26.10.19** / Boot **4.1.1** / Java **25**).
2. Open the repositories in the layer map above and read each README and OpenAPI.
3. Follow related module pages for upstream identifiers and [adapters](../integrate/adapters.md) for outside systems.
4. Framework bootstrap: [Jafly docs](https://fireflyframework.github.io/fireflyframework-jafly/) (outbound).


## OpenAPI

Cross-cutting and product-line specs are listed under [OpenAPI — lending](../reference/openapi.md#lending-lending). Prefer `*-sdk/src/main/resources/openapi.yml` in each repository.

## Events

[Stub until published](../reference/events.md).

## Maturity notes

Origination, servicing, collateral, and collections repositories are present as multi-module Maven projects. Product-line coverage varies. Credit policy ownership remains with the institution. Parent pin for new work: **26.10.19** / Boot **4.1.1** / Java **25**.

## Related modules

- [Products and commercial configuration](products.md)
- [Agreements and documents](agreements.md)
- [Risk and compliance operations](risk.md)
- [Accounts and financial records](accounts.md)
- [Customers and relationships](customers.md)
- [Business modules catalogue](catalog.md)

## Next steps

Open [Risk](risk.md) for scoring records and [Adapters](../integrate/adapters.md) for bureau boundaries. Confirm Boot badges against parent **26.10.19**.
