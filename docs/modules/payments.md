# Payments and cards

**Module id:** `payments`

Payment and card operations without provider details in every application. Rails and payment-service-provider specifics stay in libraries and adapters.

Public product page: <https://fireflysoftware.io/openplatform/modules/>

## When you need this module

Use `payments` for payment orders, beneficiaries, schedules, fees, card records, limits, transactions, and disputes. Prefer the [adapter pattern](../integrate/adapters.md) whenever a journey talks to a network or processor.

## Coverage

- Payment orders, beneficiaries, schedules, and fees
- Card records, limits, transactions, and disputes
- Separate interfaces per payment rail

## How a typical call path looks

1. An experience or domain service accepts a payment or card command.
2. Core services such as `core-banking-payments` or `core-banking-cards` hold durable records.
3. Outbound network or processor calls go through `library-rails` or `library-psps` adapters.
4. Results update payment or card state; other modules (accounts, agreements, lending) keep their own references.

## Key repositories

| Repository | Layer | Role |
|------------|-------|------|
| [`core-banking-payments`](https://github.com/firefly-oss/core-banking-payments) | `core-*` | Payment data and lifecycle |
| [`core-banking-cards`](https://github.com/firefly-oss/core-banking-cards) | `core-*` | Card records and operations |
| [`domain-banking-cards`](https://github.com/firefly-oss/domain-banking-cards) | `domain-*` | Card domain orchestration |
| [`library-rails`](https://github.com/firefly-oss/library-rails) | library | Payment-rail interfaces |
| [`library-psps`](https://github.com/firefly-oss/library-psps) | library | Payment-service-provider interfaces |

Also present: [`core-payments-engine`](https://github.com/firefly-oss/core-payments-engine), [`exp-cards`](https://github.com/firefly-oss/exp-cards).

## Worked adapter guides

- [PSP library](../integrate/library-psps.md) — `PspAdapter` facade and operation ports
- [Payment rails library](../integrate/library-rails.md) — `RailAdapter` and rail ports

## API and events

OpenAPI paths for this module: [OpenAPI index — payments](../reference/openapi.md#payments-payments).

Event contracts: [stub until published](../reference/events.md).

## Maturity notes

Core payment and card repositories plus rail/PSP libraries are checked into `firefly-oss`. Prefer category language for external networks and processors in public docs unless a named integration guide is approved. Parent pin for new work: **26.10.19** / Boot **4.1.1** / Java **25**.

## Related modules

- [Accounts and financial records](accounts.md)
- [Agreements and documents](agreements.md)
- [Integrate — adapters](../integrate/adapters.md)
- [Business modules catalogue](catalog.md)
