# Payments and cards

**Module id:** `payments`

Payment and card operations without provider details in every
application.

Public product page:
<https://fireflysoftware.io/openplatform/modules/>

## Coverage

- Payment orders, beneficiaries, schedules, and fees
- Card records, limits, transactions, and disputes
- Separate interfaces per payment rail

## How it is used

Build payment and card journeys, including premium collections, refunds,
and insurance payouts. Rails and payment-service-provider specifics stay
in libraries and adapters, not in every application service.

## Key repositories

| Repository | Layer | Role |
|------------|-------|------|
| <a href="https://github.com/firefly-oss/core-banking-payments"><code>core-banking-payments</code></a> | `core-*` | Payment data and lifecycle |
| <a href="https://github.com/firefly-oss/core-banking-cards"><code>core-banking-cards</code></a> | `core-*` | Card records and operations |
| <a href="https://github.com/firefly-oss/domain-banking-cards"><code>domain-banking-cards</code></a> | `domain-*` | Card domain orchestration |
| <a href="https://github.com/firefly-oss/library-rails"><code>library-rails</code></a> | library | Payment-rail interfaces |
| <a href="https://github.com/firefly-oss/library-psps"><code>library-psps</code></a> | library | Payment-service-provider interfaces |

Also present:
<a href="https://github.com/firefly-oss/core-payments-engine"><code>core-payments-engine</code></a>,
<a href="https://github.com/firefly-oss/exp-cards"><code>exp-cards</code></a>.

## API and events

OpenAPI paths for this module:
<a href="../reference/openapi.md#payments-payments">OpenAPI index — payments</a>.

Event contracts: <a href="../reference/events.md">stub until published</a>.

## Maturity notes

Core payment and card repositories plus rail/PSP libraries are checked
into `firefly-oss`. Prefer category language for external networks and
processors in public docs unless a named integration guide is approved.

## Related modules

- <a href="accounts.md">Accounts and financial records</a>
- <a href="agreements.md">Agreements and documents</a>
- <a href="../integrate/adapters.md">Integrate — adapters</a>
- <a href="catalog.md">Business modules catalogue</a>
