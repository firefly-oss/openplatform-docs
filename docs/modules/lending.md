# The lending lifecycle

**Module id:** `lending`

<p class="ff-lead">From the application to servicing, collateral, and collections. Credit policy stays with the institution.</p>

Scoring and bureau calls are [risk](risk.md). This module holds the loan case and the product-line records.

<figure class="ff-figure">
  <img src="/diagrams/module-lending.svg?v=20261019b" alt="Lending, read top to bottom: journeys, applications and servicing, core records, then product lines" width="960" height="592" />
  <figcaption>Read top to bottom. The channel starts a lending journey. Domain services run applications and servicing. The core stores those records, collateral, and collections. Product lines specialise the agreement.</figcaption>
</figure>

`exp-lending` is the channel. Origination and servicing each have a domain service and a core service. Collateral and collections are core only. Several product lines have a core and no matching domain repository. That gap is listed below, not drawn as a box.

<div class="ff-split" markdown="0">
  <section class="ff-panel">
    <h3>What it owns</h3>
    <ul>
      <li>Applications, offers, parties on an application, and decisions</li>
      <li>Servicing cases, schedules, balances, disbursements, and accruals</li>
      <li>Collateral cases, assets, valuations, and liens</li>
      <li>Collection cases, actions, and promises</li>
      <li>Product-line agreements: personal loans, mortgages, asset finance, credit cards, supply chain</li>
    </ul>
  </section>
  <section class="ff-panel">
    <h3>What it does not own</h3>
    <ul>
      <li>The party. That is <a href="/modules/customers/">customers</a>.</li>
      <li>The product definition. That is <a href="/modules/products/">products</a>.</li>
      <li>Scoring cases, provisioning, and reporting submissions. Those are <a href="/modules/risk/">risk</a>.</li>
      <li>Payment rails. Those are <a href="/modules/payments/">payments</a>.</li>
      <li>Credit policy. That stays with the institution.</li>
    </ul>
  </section>
</div>

## Repositories

### Journey, origination, servicing, collateral, collections

| Repository | Layer | What it holds | OpenAPI |
|------------|-------|---------------|---------|
| [`exp-lending`](https://github.com/firefly-oss/exp-lending) | Experience | Personal-loan experience at `/api/v1/experience/lending` | [openapi.yml](https://github.com/firefly-oss/exp-lending/blob/main/exp-lending-sdk/src/main/resources/openapi.yml) |
| [`domain-lending-loan-origination`](https://github.com/firefly-oss/domain-lending-loan-origination) | Domain | Applications and simulations | [openapi.yml](https://github.com/firefly-oss/domain-lending-loan-origination/blob/main/domain-lending-loan-origination-sdk/src/main/resources/openapi.yml) |
| [`core-lending-loan-origination`](https://github.com/firefly-oss/core-lending-loan-origination) | Core | Applications, parties, verifications, decisions | [openapi.yml](https://github.com/firefly-oss/core-lending-loan-origination/blob/main/core-lending-loan-origination-sdk/src/main/resources/openapi.yml) |
| [`domain-lending-loan-servicing`](https://github.com/firefly-oss/domain-lending-loan-servicing) | Domain | Servicing commands and queries | [openapi.yml](https://github.com/firefly-oss/domain-lending-loan-servicing/blob/main/domain-lending-loan-servicing-sdk/src/main/resources/openapi.yml) |
| [`core-lending-loan-servicing`](https://github.com/firefly-oss/core-lending-loan-servicing) | Core | Cases, schedules, balances, disbursements, accruals | [openapi.yml](https://github.com/firefly-oss/core-lending-loan-servicing/blob/main/core-lending-loan-servicing-sdk/src/main/resources/openapi.yml) |
| [`core-lending-collateral-management`](https://github.com/firefly-oss/core-lending-collateral-management) | Core | Collateral cases, assets, valuations, liens | [openapi.yml](https://github.com/firefly-oss/core-lending-collateral-management/blob/main/core-lending-collateral-management-sdk/src/main/resources/openapi.yml) |
| [`core-lending-delinquency-collections`](https://github.com/firefly-oss/core-lending-delinquency-collections) | Core | Collection cases, actions, promises, escalations | [openapi.yml](https://github.com/firefly-oss/core-lending-delinquency-collections/blob/main/core-lending-delinquency-collections-sdk/src/main/resources/openapi.yml) |

### Product lines

| Repository | Layer | What it holds | OpenAPI |
|------------|-------|---------------|---------|
| [`domain-lending-personal-loans`](https://github.com/firefly-oss/domain-lending-personal-loans) | Domain | Personal-loan agreements | [openapi.yml](https://github.com/firefly-oss/domain-lending-personal-loans/blob/main/domain-lending-personal-loans-sdk/src/main/resources/openapi.yml) |
| [`core-lending-personal-loans`](https://github.com/firefly-oss/core-lending-personal-loans) | Core | Personal-loan agreements | [openapi.yml](https://github.com/firefly-oss/core-lending-personal-loans/blob/main/core-lending-personal-loans-sdk/src/main/resources/openapi.yml) |
| [`domain-lending-asset-finance`](https://github.com/firefly-oss/domain-lending-asset-finance) | Domain | Asset-finance agreements | [openapi.yml](https://github.com/firefly-oss/domain-lending-asset-finance/blob/main/domain-lending-asset-finance-sdk/src/main/resources/openapi.yml) |
| [`core-lending-asset-finance`](https://github.com/firefly-oss/core-lending-asset-finance) | Core | Asset-finance agreements, assets, usage | [openapi.yml](https://github.com/firefly-oss/core-lending-asset-finance/blob/main/core-lending-asset-finance-sdk/src/main/resources/openapi.yml) |
| [`core-lending-mortgage`](https://github.com/firefly-oss/core-lending-mortgage) | Core | Mortgage agreements. The SDK folder is `core-lending-mortgages-sdk`. | [openapi.yml](https://github.com/firefly-oss/core-lending-mortgage/blob/main/core-lending-mortgages-sdk/src/main/resources/openapi.yml) |
| [`core-lending-credit-cards`](https://github.com/firefly-oss/core-lending-credit-cards) | Core | Revolving lines, statements, billing cycles | [openapi.yml](https://github.com/firefly-oss/core-lending-credit-cards/blob/main/core-lending-credit-cards-sdk/src/main/resources/openapi.yml) |
| [`core-lending-supply-chain-finance`](https://github.com/firefly-oss/core-lending-supply-chain-finance) | Core | Agreements, invoices, advances, settlements | [openapi.yml](https://github.com/firefly-oss/core-lending-supply-chain-finance/blob/main/core-lending-supply-chain-finance-sdk/src/main/resources/openapi.yml) |

No `domain-lending-mortgage`, `domain-lending-credit-cards`, or `domain-lending-supply-chain-finance` is on disk.

[`firefly-lending`](https://github.com/firefly-oss/firefly-lending) publishes a mock OpenAPI at `openapi/lending.v1.yaml`. The [OpenAPI index](../reference/openapi.md#lending-lending) marks it as a sample. It is not the module contract.

## How the pieces fit

`exp-lending` is the channel for the personal-loan experience. It does not persist the application.

Origination: `domain-lending-loan-origination` coordinates applications and simulations. `core-lending-loan-origination` stores the application, its parties, verifications, fees, and decisions.

Servicing: `domain-lending-loan-servicing` exposes servicing commands and queries. `core-lending-loan-servicing` stores the case, schedule, instalments, balances, disbursements, accruals, and restructurings.

Collateral and collections are core records without a domain repository in this inventory. Product-line services hold the specialised agreement. Where a domain repository is missing, do not invent one.

Scoring requests go to [risk](risk.md). Bureau toolkits stay behind adapters.

## Related

- [Customers](customers.md), [Products](products.md), [Agreements](agreements.md)
- [Risk](risk.md) for scoring and provisioning
- [Accounts](accounts.md) when servicing posts
- [Payments](payments.md) for disbursement rails
- [Catalogue](catalog.md)
