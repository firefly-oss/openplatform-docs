# Payments and cards

**Module id:** `payments`

Payment orders, card records, and the libraries that keep rail and PSP details out of every application. Provider SDKs stay in adapters.

Public product page: <https://fireflysoftware.io/openplatform/modules/>

## Why this module exists

Every product that moves money eventually talks to a network or processor. If each domain service embeds a vendor SDK, swapping a rail becomes a rewrite. Payments holds durable payment and card records; [`library-rails`](https://github.com/firefly-oss/library-rails) and [`library-psps`](https://github.com/firefly-oss/library-psps) define the ports; adapters implement them.

## When to use it

Use `payments` for payment orders, beneficiaries, schedules, fees, card records, limits, transactions, and disputes.

Prefer the [adapter pattern](../integrate/adapters.md) whenever a journey talks to a network or processor. Prefer category language for external networks in public docs unless an approved integration guide names them.

## Key concepts

| Concept | Meaning in this module |
|---------|------------------------|
| Payment order | Durable payment intent and lifecycle |
| Card record | Card product data, limits, transactions, disputes |
| Rail port | Interface in `library-rails` for a payment rail |
| PSP port | Interface in `library-psps` for a payment-service provider |
| Engine | Rail-agnostic orchestration (`core-payments-engine`) |

## Layer map (repos that exist)

| Repository | Layer | Role |
|------------|-------|------|
| [`core-banking-payments`](https://github.com/firefly-oss/core-banking-payments) | `core-*` | Payment data and lifecycle |
| [`core-banking-cards`](https://github.com/firefly-oss/core-banking-cards) | `core-*` | Card records and operations |
| [`core-banking-psdx`](https://github.com/firefly-oss/core-banking-psdx) | `core-*` | PSD2/PSD3-oriented compliance service |
| [`core-payments-engine`](https://github.com/firefly-oss/core-payments-engine) | `core-*` | Provider-agnostic payment orchestration (no published OpenAPI yet) |
| [`domain-banking-cards`](https://github.com/firefly-oss/domain-banking-cards) | `domain-*` | Card domain orchestration |
| [`exp-cards`](https://github.com/firefly-oss/exp-cards) | `exp-*` | Card journeys for channels |
| [`library-rails`](https://github.com/firefly-oss/library-rails) | library | Payment-rail interfaces |
| [`library-psps`](https://github.com/firefly-oss/library-psps) | library | PSP interfaces |

**Gap:** no `domain-banking-payments` or `exp-payments` repository in the inventory. Payment domain work may sit in the engine and card domain today; confirm in each README before assuming a missing layer.

## How a typical call path looks

1. An experience or domain service accepts a payment or card command.
2. Core services such as `core-banking-payments` or `core-banking-cards` hold durable records.
3. Outbound network or processor calls go through `library-rails` or `library-psps` adapters.
4. Results update payment or card state; accounts, agreements, and lending keep their own references.

## How to start

1. Confirm the current pin on [Versioning and BOM](../versioning/bom.md) (**26.10.19** / Boot **4.1.1** / Java **25**).
2. Open the repositories in the layer map above and read each README and OpenAPI.
3. Follow related module pages for upstream identifiers and [adapters](../integrate/adapters.md) for outside systems.
4. Framework bootstrap: [Jafly docs](https://fireflyframework.github.io/fireflyframework-jafly/) (outbound).


## OpenAPI

| Repository | Spec |
|------------|------|
| `core-banking-payments` | [`…/openapi.yml`](https://github.com/firefly-oss/core-banking-payments/blob/main/core-banking-payments-sdk/src/main/resources/openapi.yml) |
| `core-banking-cards` | [`…/openapi.yml`](https://github.com/firefly-oss/core-banking-cards/blob/main/core-banking-cards-sdk/src/main/resources/openapi.yml) |
| `core-banking-psdx` | [`…/openapi.yml`](https://github.com/firefly-oss/core-banking-psdx/blob/main/core-banking-psdx-sdk/src/main/resources/openapi.yml) |
| `domain-banking-cards` | [`…/openapi.yml`](https://github.com/firefly-oss/domain-banking-cards/blob/main/domain-banking-cards-sdk/src/main/resources/openapi.yml) |
| `exp-cards` | [`…/openapi.yml`](https://github.com/firefly-oss/exp-cards/blob/main/exp-cards-sdk/src/main/resources/openapi.yml) |
| `core-payments-engine` | — (no published OpenAPI yet) |
| `library-rails` / `library-psps` | Java interfaces in-repo (not OpenAPI) |

Full index: [OpenAPI — payments](../reference/openapi.md#payments-payments).

## Events

[Stub until published](../reference/events.md).

## Maturity notes

Core payment and card repositories plus rail/PSP libraries are checked into `firefly-oss`. Prefer category language for external networks unless a named integration guide is approved. Parent pin for new work: **26.10.19** / Boot **4.1.1** / Java **25**.

## Related modules

- [Accounts and financial records](accounts.md)
- [Agreements and documents](agreements.md)
- [Insurance financial flows](../insurance/financial-flows.md)
- [Integrate — adapters](../integrate/adapters.md)
- [Business modules catalogue](catalog.md)

## Next steps

Implement against [library-psps](../integrate/library-psps.md) or [library-rails](../integrate/library-rails.md), then open the core OpenAPI for the record shape you will persist.
