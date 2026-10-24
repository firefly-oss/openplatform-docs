# Domain: decisions, orchestration, and recovery

A domain represents a bounded business responsibility. It interprets commands, evaluates business preconditions, coordinates the necessary participants, and answers queries through explicit contracts. It can contain several workflows. A domain is not defined as one generic create/update/delete saga.

## Choose the execution model by the effect

| Mechanism | Use it for | Obligation that remains |
| --- | --- | --- |
| CQRS command | Named intent such as confirm posting or request signature | Validate authority, immutable input, and business preconditions |
| CQRS query | Read authoritative or explicitly projected state | Define freshness, ownership, pagination, and absence |
| Saga | Ordered steps with meaningful recovery/compensation | Persist progress and participant identities; distinguish rejection from uncertainty |
| TCC | Participants offering a genuine reservation, confirm, and cancel contract | Bound reservation lifetime and resolve conflicts/restarts safely |
| Core transaction | Atomic changes inside one owning database | Keep aggregate constraints and durable action identity together |

Use the existing Jafly modules and established repository folder conventions. An annotation or engine completion label does not prove durable progress or financial finality. A process-local map of sessions cannot recover a customer operation after restart or another replica receives its retry.

## Specify each step as a contract

Before writing a step, state the trusted actor/tenant, resource bindings, stable business action identity, immutable intent, expected participant, acceptance boundary, durable returned identity, permitted retries, and reconciliation procedure. A step that may have reached an external provider needs a lookup/recovery path using the original reference. Generating a new random key on retry can duplicate the original effect.

For an account-opening command, the account record, contract, funding/reservation, documents, and customer-visible status have different acceptance boundaries. Creating the account row is one step; it does not establish a funded, authorized, operational account. For a loan decision, persisted bureau evidence and a trusted/versioned model must constrain decision facts. For insurance, a policy row does not establish accepted underwriting, premium collection, effective coverage, and financial close.

## Compensation preserves what happened

Compensation is a business operation, not automatic deletion of every successful step. An unaccepted draft may be removable. A posted financial effect requires an authorized linked reversal. A managed signature or provider request retains its binding and history, including refusal, expiry, and uncertainty. A provider-accepted request cannot be declared absent because its response timed out.

Define which steps are reversible, which need forward recovery, and which require an operator with delegated authority. Record original and compensating identities, reasons, timestamps, and reconciliation outcomes. Never report a completed journey while a required participant remains uncertain.

## Consume owners through SDKs and ports

Domain-to-core calls use the owning generated SDK. Domain-to-domain dependencies also need an explicit published contract. Importing another core's entities or repositories creates a second writer outside the authority boundary. Declaring an SDK dependency is not proof it is actually called; follow the command handler, saga step, adapter, and producer endpoint.

Provider-neutral ports isolate external systems such as bureaus, signing providers, payment rails, and processors. Their sandbox adapters must implement the same acceptance/recovery semantics with explicit synthetic provenance. The [adapter contract](../adapters/index.md) defines replacement and validation; a configured provider name alone cannot create a missing adapter.

## Recovery and events

Persist enough intent, participant identity, step outcome, and retry/reconciliation state to resume the same operation. If a core write and event publication must agree, use its defined transaction/outbox boundary and consumer deduplication; a successful HTTP response does not prove an event was published. Make pending work discoverable and bound retries with actionable operator escalation.

The current source includes partially implemented workflows and process-local coordinators. The [operating guidance](../operations/index.md) and [operating guidance](../operations/index.md) retain those gaps until actual SDK/HTTP/core/database, failure, concurrency, and restart cases pass. The repository directory is a source map, not a declaration that every listed saga is complete.

## Repositories

- [domain-payments](https://github.com/fireflysoftwaresolutions/domain-payments)
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
