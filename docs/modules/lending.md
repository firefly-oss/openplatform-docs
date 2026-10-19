# The lending lifecycle

**Module id:** `lending`

From application, offer, and decision to the records that service a loan.

Public product page:
<https://fireflysoftware.io/openplatform/modules/>

## Coverage

- Applications, documents, offers, and decision records
- Disbursements, repayment schedules, and servicing events
- Collateral, collections, and product-specific data

## How it is used

Compose consumer or business finance. Credit policy and decisions stay
with the institution. Product experiences such as LendingOS compose this
module with customers, products, agreements, and risk.

## Key repositories

| Repository | Layer | Role |
|------------|-------|------|
| <a href="https://github.com/firefly-oss/core-lending-loan-origination"><code>core-lending-loan-origination</code></a> | `core-*` | Application, offer, and decision persistence |
| <a href="https://github.com/firefly-oss/domain-lending-loan-origination"><code>domain-lending-loan-origination</code></a> | `domain-*` | Origination domain orchestration |
| <a href="https://github.com/firefly-oss/core-lending-loan-servicing"><code>core-lending-loan-servicing</code></a> | `core-*` | Servicing records and schedules |
| <a href="https://github.com/firefly-oss/domain-lending-loan-servicing"><code>domain-lending-loan-servicing</code></a> | `domain-*` | Servicing domain orchestration |
| <a href="https://github.com/firefly-oss/core-lending-collateral-management"><code>core-lending-collateral-management</code></a> | `core-*` | Collateral linked to applications |
| <a href="https://github.com/firefly-oss/core-lending-delinquency-collections"><code>core-lending-delinquency-collections</code></a> | `core-*` | Delinquency and collections |

Product-line repositories also under `firefly-oss` include personal loans,
mortgage, asset finance, credit cards, and supply-chain finance
(`core-lending-*` / `domain-lending-*`). Experience layer:
<a href="https://github.com/firefly-oss/exp-lending"><code>exp-lending</code></a>.

## API and events

OpenAPI paths for this module:
<a href="../reference/openapi.md#lending-lending">OpenAPI index — lending</a>
(includes product-line specs; `firefly-lending` mock YAML is marked
sample only).

Event contracts: <a href="../reference/events.md">stub until published</a>.

## Maturity notes

Origination, servicing, collateral, and collections repositories are
present as multi-module Maven projects. Several READMEs still mention
older Boot badge lines; OpenPlatform’s current parent pin is Boot
**4.1.1** via Jafly **26.10.19** — verify each module’s parent before
assuming runtime parity. Credit policy ownership remains with the
institution.

## Related modules

- <a href="products.md">Products and commercial configuration</a>
- <a href="agreements.md">Agreements and documents</a>
- <a href="risk.md">Risk and compliance operations</a>
- <a href="accounts.md">Accounts and financial records</a>
- <a href="catalog.md">Business modules catalogue</a>
