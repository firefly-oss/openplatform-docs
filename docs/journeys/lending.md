# Lending

`exp-lending` is the lending journey. It composes calls. It does not own loan rows.

The experience build calls these domain SDKs today:

- `domain-lending-loan-origination`
- `domain-lending-credit-scoring`
- `domain-lending-personal-loans`
- `domain-lending-asset-finance`
- `domain-lending-loan-servicing`

It also calls product catalog, product pricing, the pricing engine, contracts, strong customer authentication, and notifications. Each of those domains calls its own core SDK.

These lending domains are in the same train and are not on the `exp-lending` classpath yet. A channel can still call them. Their sagas write their own cores:

- `domain-lending-collateral-management`
- `domain-lending-delinquency-collections`
- `domain-lending-mortgage`
- `domain-lending-provisioning-risk`
- `domain-lending-regulatory-compliance`
- `domain-lending-supply-chain-finance`

`DecisionPort` is how a journey asks for `APPROVE`, `REFER`, or `DECLINE`. Credit scoring stores a score. It is not that port. See [Decision](../catalog/decision.md).

## Core without a domain orchestrator

`core-lending-credit-cards` has no `domain-lending-credit-cards` repository. `domain-banking-cards` calls that core. Payment servicing for a mortgage stays on `core-lending-loan-servicing`, which has its own domain. The mortgage domain owns the mortgage agreement.

Catalog: [Lending](../catalog/lending.md).
