# Insurance financial flows

**Development area:** Insurance financial flows

Premiums, commissions, refunds, and indemnity payments executed through payment services. OpenPlatform reuses the [payments](../modules/payments.md) module and adapter libraries rather than inventing a parallel money-movement stack.

Public description: <https://fireflysoftware.io/openplatform/#insurance-development>

## Why this area exists

Insurance money movement (premium, commission, refund, indemnity) still needs durable payment records and rail/PSP boundaries. Duplicating that beside banking payments would fork the hardest integration surface. This area points implementers at the payments module and states what is still missing for insurance-specific ledgers.

## When to use it

Use this area when designing premium collection, commission payout, refund, or indemnity settlement on OpenPlatform. Implement against [payments](../modules/payments.md), [library-rails](../integrate/library-rails.md), and [library-psps](../integrate/library-psps.md).

## Foundations already in OpenPlatform

| Module / guide | Why it matters |
|----------------|----------------|
| [Payments](../modules/payments.md) | Orders, cards, engine, PSDX, rail/PSP libraries |
| [Accounts](../modules/accounts.md) | Account relationships and ledger/GL posting when required |
| [Distribution](../modules/distribution.md) | Commission context for agents and brokers |
| [Agreements](../modules/agreements.md) | Contractual basis for premium and indemnity |
| [Adapters](../integrate/adapters.md) | Provider and institution-core boundaries |

## Layer map

No dedicated insurance-finance repositories are published under `firefly-oss` yet. Use the payments layer map:

| Layer | Repositories to start from |
|-------|----------------------------|
| Experience | `exp-cards` (and product BFFs as published) |
| Domain | `domain-banking-cards` (payment domain gaps called out on the payments page) |
| Core | `core-banking-payments`, `core-payments-engine`, `core-banking-psdx` |
| Libraries | `library-rails`, `library-psps` |

## How to start

1. Read [Payments](../modules/payments.md) end to end.
2. Implement rail/PSP calls through the adapter libraries, not inside domain services.
3. Keep institution cores that remain books of record behind adapters ([accounts](../modules/accounts.md)).
4. Parent pin: **26.10.19** / Boot **4.1.1** / Java **25**.

## OpenAPI and events

[OpenAPI — payments](../reference/openapi.md#payments-payments). Events: [stub](../reference/events.md).

## Maturity notes

In development as an insurance tile; payment foundations are already present. Prefer category language for external networks unless an approved integration guide names them.

## Related

- [Payments](../modules/payments.md)
- [Claims operations](claims.md)
- [Policy lifecycle](policy-lifecycle.md)
- [Insurance development areas](index.md)
