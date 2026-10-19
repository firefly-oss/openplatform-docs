# Payments and cards

**Module id:** `payments`

<p class="ff-lead">Payment orders and card records. Networks and providers stay behind ports.</p>

There is no `domain-banking-payments` and no `exp-payments`. Card journeys are the experience service that exists today. Payment orders are a core record.

<figure class="ff-figure">
  <img src="/diagrams/module-payments.svg?v=20261019b" alt="Payments, read top to bottom: card journeys, card domain, payment and card records, then provider and rail ports" width="960" height="592" />
  <figcaption>Read top to bottom. The channel runs card journeys. The domain coordinates cards. The core stores payment orders and card records. Ports reach providers and rails.</figcaption>
</figure>

The provider port is `PspAdapter` in `library-psps`. The rail port is `RailAdapter` in `library-rails`. See [adapter ports](../integrate/adapters.md) for how to read that picture. `core-payments-engine` is on disk as provider-agnostic orchestration and has no published OpenAPI.

<div class="ff-split" markdown="0">
  <section class="ff-panel">
    <h3>What it owns</h3>
    <ul>
      <li>Payment orders, instructions, beneficiaries, methods, schedules, and fees</li>
      <li>Card records, programmes, limits, transactions, and issuance journeys</li>
      <li>Account-information and payment-initiation records for open banking</li>
      <li>The provider port and the rail port</li>
    </ul>
  </section>
  <section class="ff-panel">
    <h3>What it does not own</h3>
    <ul>
      <li>Ledger postings. Those are <a href="/modules/accounts/">accounts</a>.</li>
      <li>Revolving credit servicing agreements. Those are <a href="/modules/lending/">lending</a> (<code>core-lending-credit-cards</code>).</li>
      <li>A named network or processor toolkit. That stays in an adapter, not in the domain.</li>
      <li>The party. That is <a href="/modules/customers/">customers</a>.</li>
    </ul>
  </section>
</div>

## Repositories

| Repository | Layer | What it holds | OpenAPI |
|------------|-------|---------------|---------|
| [`exp-cards`](https://github.com/firefly-oss/exp-cards) | Experience | Card issuance, card replacement, cards by customer | [openapi.yml](https://github.com/firefly-oss/exp-cards/blob/main/exp-cards-sdk/src/main/resources/openapi.yml) |
| [`domain-banking-cards`](https://github.com/firefly-oss/domain-banking-cards) | Domain | Cards, virtual cards, limits, credit line, transactions, security | [openapi.yml](https://github.com/firefly-oss/domain-banking-cards/blob/main/domain-banking-cards-sdk/src/main/resources/openapi.yml) |
| [`core-banking-payments`](https://github.com/firefly-oss/core-banking-payments) | Core | Payment orders, beneficiaries, methods, schedules, fees | [openapi.yml](https://github.com/firefly-oss/core-banking-payments/blob/main/core-banking-payments-sdk/src/main/resources/openapi.yml) |
| [`core-banking-cards`](https://github.com/firefly-oss/core-banking-cards) | Core | Cards, programmes, limits, transactions, issuers | [openapi.yml](https://github.com/firefly-oss/core-banking-cards/blob/main/core-banking-cards-sdk/src/main/resources/openapi.yml) |
| [`core-banking-psdx`](https://github.com/firefly-oss/core-banking-psdx) | Core | Consents, account information, payment initiation, funds confirmation | [openapi.yml](https://github.com/firefly-oss/core-banking-psdx/blob/main/core-banking-psdx-sdk/src/main/resources/openapi.yml) |
| [`core-payments-engine`](https://github.com/firefly-oss/core-payments-engine) | Core | Orchestration of disbursements and inbound payments | No published OpenAPI yet |
| [`library-psps`](https://github.com/firefly-oss/library-psps) | Port | Provider port | Java interfaces, not OpenAPI |
| [`library-rails`](https://github.com/firefly-oss/library-rails) | Port | Rail port | Java interfaces, not OpenAPI |

## How the pieces fit

`exp-cards` exposes issuance and replacement journeys, and cards for a customer. That is the channel edge that exists. Payment orders do not have a matching experience repository.

`domain-banking-cards` coordinates cards, limits, virtual cards, the credit line, transactions, and security, including a back-office view.

`core-banking-payments` persists orders, instructions, beneficiaries, methods, schedules, fees, proofs, and exchange rates. `core-banking-cards` persists the card record: programmes, limits, transactions, balances, issuers, and related card resources in that spec. `core-banking-psdx` persists consents, strong authentication steps, account information, payment initiation, and funds confirmation. Those records are operational. They are not a statement that an institution meets a regulation.

Outbound calls leave through `library-psps` or `library-rails`. Domain code depends on the port. The adapter implements it for one provider or one rail. `core-payments-engine` is described in its README as orchestration that is independent of a provider and a rail. Treat the missing OpenAPI as a gap.

## Related

- [Accounts](accounts.md) when a payment should post
- [Adapters](../integrate/adapters.md), [PSP library](../integrate/library-psps.md), [rails library](../integrate/library-rails.md)
- [Lending](lending.md) for revolving credit servicing
- [Catalogue](catalog.md)
