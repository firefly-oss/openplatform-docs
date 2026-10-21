# Domain

A domain service owns one saga. The steps are create, update, status change, and close or remove. Close or remove runs only when the core allows it. Each write has compensation.

The domain calls a core through that core's SDK. It does not import another core's internals. Cross-service references that the core stores are UUIDs, not joined tables.

A few domain builds still declare an extra core SDK. That is a dependency, not permission to reach into the other core. The catalog entry names the extra SDK when the build has one: banking accounts (contract and ledger), banking cards (credit cards and ledger), and configuration (reference data).

Insurance domains follow the same saga shape. They do not move money and do not certify IFRS 17 or Solvency II.

Decision lives in `domain-lending-credit-scoring`. The credit-bureau and company-lookup ports live in `domain-data-credit-bureaus` and `domain-data-business-intelligence`. Those two own the port. They do not own a core database in this release list.

## Repositories

- [domain-banking-accounts](../catalog/banking.md#domain-banking-accounts)
- [domain-banking-cards](../catalog/banking.md#domain-banking-cards)
- [domain-common-contracts](../catalog/contract.md#domain-common-contracts)
- [domain-common-notifications](../catalog/shared.md#domain-common-notifications)
- [domain-common-sca](../catalog/security.md#domain-common-sca)
- [domain-core-configuration](../catalog/shared.md#domain-core-configuration)
- [domain-core-pricing-engine](../catalog/product.md#domain-core-pricing-engine)
- [domain-core-security-center](../catalog/security.md#domain-core-security-center)
- [domain-customer-kyc-kyb](../catalog/customer.md#domain-customer-kyc-kyb)
- [domain-customer-people](../catalog/customer.md#domain-customer-people)
- [domain-data-business-intelligence](../catalog/data.md#domain-data-business-intelligence)
- [domain-data-credit-bureaus](../catalog/data.md#domain-data-credit-bureaus)
- [domain-distributor-branding](../catalog/shared.md#domain-distributor-branding)
- [domain-distributor-catalog](../catalog/shared.md#domain-distributor-catalog)
- [domain-insurance-claims](../catalog/insurance.md#domain-insurance-claims)
- [domain-insurance-delegated-authority](../catalog/insurance.md#domain-insurance-delegated-authority)
- [domain-insurance-financials](../catalog/insurance.md#domain-insurance-financials)
- [domain-insurance-policies](../catalog/insurance.md#domain-insurance-policies)
- [domain-insurance-reinsurance](../catalog/insurance.md#domain-insurance-reinsurance)
- [domain-insurance-reserving](../catalog/insurance.md#domain-insurance-reserving)
- [domain-insurance-underwriting](../catalog/insurance.md#domain-insurance-underwriting)
- [domain-lending-asset-finance](../catalog/lending.md#domain-lending-asset-finance)
- [domain-lending-collateral-management](../catalog/lending.md#domain-lending-collateral-management)
- [domain-lending-credit-scoring](../catalog/lending.md#domain-lending-credit-scoring)
- [domain-lending-delinquency-collections](../catalog/lending.md#domain-lending-delinquency-collections)
- [domain-lending-loan-origination](../catalog/lending.md#domain-lending-loan-origination)
- [domain-lending-loan-servicing](../catalog/lending.md#domain-lending-loan-servicing)
- [domain-lending-mortgage](../catalog/lending.md#domain-lending-mortgage)
- [domain-lending-personal-loans](../catalog/lending.md#domain-lending-personal-loans)
- [domain-lending-provisioning-risk](../catalog/lending.md#domain-lending-provisioning-risk)
- [domain-lending-regulatory-compliance](../catalog/lending.md#domain-lending-regulatory-compliance)
- [domain-lending-supply-chain-finance](../catalog/lending.md#domain-lending-supply-chain-finance)
- [domain-product-catalog](../catalog/product.md#domain-product-catalog)
- [domain-product-pricing](../catalog/product.md#domain-product-pricing)
