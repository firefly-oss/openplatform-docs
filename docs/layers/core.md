# Core: authoritative state and local transactions

A core is the durable authority for a bounded set of records, constraints, lifecycle transitions, and financial or evidence effects. Its service owns its database and migrations. Another service calls its published SDK; it does not join that database, import the core's repositories, or patch its rows to compensate for an incomplete API.

## Define the aggregate before the endpoints

An aggregate is the set of facts that must change together under one invariant. For a ledger posting, that includes the transaction header, every debit/credit leg, initial history, and its durable action claim. Creating these with separate successful HTTP calls can leave an incomplete financial effect. The managed posting API puts those writes in one database transaction. A query endpoint then returns the authoritative aggregate rather than relying on a caller's remembered request.

| Responsibility | Owning core must establish | Consumer must preserve |
| --- | --- | --- |
| Identity | Stable record IDs and uniqueness boundaries | The returned IDs and their actual context |
| Lifecycle | Allowed transitions and terminal-state rules | The command's preconditions and returned outcome |
| Idempotency | Durable action key bound to immutable intent | The same key for retries of the same action |
| Concurrency | Database constraint, version check, or row lock | Conflict handling without blind overwrite |
| Money | Decimal precision, currency, balanced effects, history | Exact values and the meaning of each amount |
| Evidence | Immutable binding, provenance, retention | Provider/action references and authorized access |
| Migration | Empty and populated upgrade safety | Version/repair prerequisites before rollout |

A UUID is a reference, not proof that the caller owns the referenced resource. Validate tenant, party, document, account, contract, and provider associations at the responsible boundary. Database-local foreign keys can enforce local relationships; a cross-service UUID requires an explicit validation and consistency strategy.

## Managed operations and legacy CRUD

Source contains both record CRUD and newer managed business operations. Do not route a managed aggregate through an older update, delete, child-create, or parent cascade that bypasses its invariants. Guard the public service API as well as HTTP deserialization: internal callers can supply fields a controller schema marks read-only.

The managed ledger API rejects supplied create IDs/versions and managed CRUD mutation, preserves posted transactions, and creates linked opposite postings for reversal. The managed signature lifecycle protects managed signature identities and deletion, including document/version parent cascades. Other aggregates have their own lifecycle and retention rules. Inspect the owning source, migrations, and actual database tests before relying on a lifecycle protection.

## Money and accounting boundaries

Account balance, available funds, ledger posting, external settlement, and general-ledger accounting describe different facts. A balanced posting does not prove available funds, account ownership, settlement, or a reconciled GL. A payment needs explicit integration between these authorities. See [data and money](../introduction/data-and-money.md) and [payments](../journeys/payments.md) for the full obligation.

Use decimal values with declared precision and a validated currency code; never calculate money through binary floating point. Effective business dates and observation timestamps serve different purposes. Preserve both where lifecycle and accounting require them.

## Deletion, retention, and upgrade

Deletion policy belongs to each aggregate. There is no universal rule that every child should cascade or every open record is automatically protected. Posted money, managed provider evidence, legal holds, and regulatory retention can require explicit deletion rejection and a retained correction history. Test parent cascades and alternative service paths against real database constraints.

The ledger's additive UUID-history migration deliberately stops with `LEDGER_HISTORY_UUID_REPAIR_REQUIRED` when old populated history cannot be authoritatively linked. An empty database passing migration does not qualify that upgrade. Preserve the original data and mapping evidence; use a separately reviewed repair procedure rather than guessing relationships or rewriting old migrations.

## Read the producer's contract and prove it

Locate the core's [API declaration](../api/contracts.md), README adoption guide, actual controller/service, migrations, and test inventory. Generate the SDK from the actual controller contract and retain source/specification/artifact identities. Exercise negative validation, exact/conflicting replay, concurrent transitions, rollback, restarts, deletion guards, and populated upgrades with disposable infrastructure. A generated specification or a passing mocked service test alone cannot qualify these invariants.

The directory below locates existing contexts; [the complete repository map](../reference/repositories.md) also includes supporting and archived repositories. A missing dedicated domain repository does not imply that no domain consumes a core: `domain-payments` consumes the ledger and payment cores through their SDKs.

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
