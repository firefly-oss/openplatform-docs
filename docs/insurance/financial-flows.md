# Insurance financial flows

**Development area:** Insurance financial flows

Premiums, commissions, refunds, and indemnity payments, connected to
payment services and reconciliation.

Public description:
<https://fireflysoftware.io/openplatform/#insurance-development>

## Intent

Move money for insurance operations using OpenPlatform payment and
account foundations, while premium billing, commission schemes, and
reconciliation cut-offs remain defined by the institution and its
connected systems.

## Foundations already in OpenPlatform

| Module | Why it matters for insurance money movement |
|--------|---------------------------------------------|
| <a href="../modules/payments.md">Payments</a> | Payment orders, schedules, and card operations |
| <a href="../modules/accounts.md">Accounts</a> | Account relationships, ledger, and GL posting |
| <a href="../modules/agreements.md">Agreements</a> | Contractual context for premium and commission |
| <a href="../modules/distribution.md">Distribution</a> | Distributor and agent commission context |
| <a href="../modules/products.md">Products</a> | Product and commercial configuration |

## Repositories and APIs

There is **no dedicated** insurance financial-flows repository pack
published under `firefly-oss` for this development area yet.

Prefer payment and account OpenAPI entries:
<a href="../reference/openapi.md">OpenAPI index</a>
(sections for `payments` and `accounts`).

Event contracts: **stub** —
<a href="../reference/events.md">Event contracts</a>.

## Maturity notes

Rails and payment-service-provider details stay in libraries and
adapters. This page does not name processors or claim reconciliation
performance figures.

## Related areas

- <a href="claims.md">Claims operations</a>
- <a href="policy-lifecycle.md">Policy lifecycle</a>
- <a href="index.md">Insurance development areas</a>
