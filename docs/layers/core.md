# Core

A core service owns its database. Another service does not share that schema.

Rules that hold across cores:

- A link to a record in another service is a UUID.
- Child rows inside the same service cascade when the parent row is deleted.
- Currency is `VARCHAR(3)`.
- Accounts, cards, the ledger, and payments do not hard-delete an open record.
- A contract is deleted only in `DRAFT`.
- Offered, suspended, and retired products are not hard-deleted. `DRAFT` and `SUSPENDED` exist. Status values also include `ACTIVE` and `RETIRED`.

Ledger identification is `initiating_party_identifier` for the party that started the transaction and `card_merchant_tax_id` for a card merchant. Those columns are not NIF or CIF.

Where a core has no domain orchestrator, the catalog says so. In lending, that is `core-lending-credit-cards`. In banking, that is the ledger, payments, and open-banking access.

## Repositories

- [core-banking-accounts](../catalog/banking.md#core-banking-accounts)
- [core-banking-cards](../catalog/banking.md#core-banking-cards)
- [core-banking-ledger](../catalog/banking.md#core-banking-ledger)
- [core-banking-payments](../catalog/banking.md#core-banking-payments)
- [core-banking-psdx](../catalog/banking.md#core-banking-psdx)
- [core-common-accounting-gl](../catalog/shared.md#core-common-accounting-gl)
- [core-common-config-mgmt](../catalog/shared.md#core-common-config-mgmt)
- [core-common-contract-mgmt](../catalog/contract.md#core-common-contract-mgmt)
- [core-common-customer-mgmt](../catalog/customer.md#core-common-customer-mgmt)
- [core-common-distributor-mgmt](../catalog/shared.md#core-common-distributor-mgmt)
- [core-common-document-mgmt](../catalog/shared.md#core-common-document-mgmt)
- [core-common-kycb-mgmt](../catalog/customer.md#core-common-kycb-mgmt)
- [core-common-modelhub](../catalog/shared.md#core-common-modelhub)
- [core-common-notification-services](../catalog/shared.md#core-common-notification-services)
- [core-common-org-mgmt](../catalog/shared.md#core-common-org-mgmt)
- [core-common-product-mgmt](../catalog/product.md#core-common-product-mgmt)
- [core-common-reference-master-data](../catalog/shared.md#core-common-reference-master-data)
- [core-common-sca-mgmt](../catalog/security.md#core-common-sca-mgmt)
- [core-common-security-vault](../catalog/security.md#core-common-security-vault)
- [core-common-user-mgmt](../catalog/security.md#core-common-user-mgmt)
- [core-insurance-claims](../catalog/insurance.md#core-insurance-claims)
- [core-insurance-delegated-authority](../catalog/insurance.md#core-insurance-delegated-authority)
- [core-insurance-financials](../catalog/insurance.md#core-insurance-financials)
- [core-insurance-policies](../catalog/insurance.md#core-insurance-policies)
- [core-insurance-reinsurance](../catalog/insurance.md#core-insurance-reinsurance)
- [core-insurance-reserving](../catalog/insurance.md#core-insurance-reserving)
- [core-insurance-underwriting](../catalog/insurance.md#core-insurance-underwriting)
- [core-lending-asset-finance](../catalog/lending.md#core-lending-asset-finance)
- [core-lending-collateral-management](../catalog/lending.md#core-lending-collateral-management)
- [core-lending-credit-cards](../catalog/lending.md#core-lending-credit-cards)
- [core-lending-credit-scoring](../catalog/lending.md#core-lending-credit-scoring)
- [core-lending-delinquency-collections](../catalog/lending.md#core-lending-delinquency-collections)
- [core-lending-loan-origination](../catalog/lending.md#core-lending-loan-origination)
- [core-lending-loan-servicing](../catalog/lending.md#core-lending-loan-servicing)
- [core-lending-mortgage](../catalog/lending.md#core-lending-mortgage)
- [core-lending-personal-loans](../catalog/lending.md#core-lending-personal-loans)
- [core-lending-provisioning-risk](../catalog/lending.md#core-lending-provisioning-risk)
- [core-lending-regulatory-compliance](../catalog/lending.md#core-lending-regulatory-compliance)
- [core-lending-supply-chain-finance](../catalog/lending.md#core-lending-supply-chain-finance)
