# Families

<div class="ff-banner" markdown="0">
<img class="ff-banner__light" src="../assets/brand/banner-light.svg" alt="Firefly OpenPlatform">
<img class="ff-banner__dark" src="../assets/brand/banner-dark.svg" alt="">
</div>

<p class="ff-steward">Stewarded by the Firefly Software Foundation. <a href="mailto:dev@fireflysoftware.io">dev@fireflysoftware.io</a></p>


The OpenPlatform release list contains 90 repositories. This catalog documents all 90. Each entry names the repository, the layer, and what that repository owns. Links go to `github.com/fireflysoftwaresolutions`.

Insurance is one of the families, with seven domain services and seven cores. A lending core with no `domain-lending-*` repository is described as a core without a domain orchestrator.

Service host pattern: `https://openplatform.fireflysoftware.io/{service}`. Public site: [fireflysoftware.io](https://fireflysoftware.io/). Publisher: Firefly Software Foundation. Contact: [dev@fireflysoftware.io](mailto:dev@fireflysoftware.io).

## Customer and party

- [core-common-customer-mgmt](customer.md#core-common-customer-mgmt)
    Core. Owns party, natural person, and legal entity rows, plus industry classification, party attributes, and relationship edges.

- [core-common-kycb-mgmt](customer.md#core-common-kycb-mgmt)
    Core. Owns KYC, KYB, and AML screening records.

- [domain-customer-kyc-kyb](customer.md#domain-customer-kyc-kyb)
    Domain. Owns the KYC and KYB saga: open a case, attach evidence, and change status, with compensation on create, through `core-common-kycb-mgmt`.

- [domain-customer-people](customer.md#domain-customer-people)
    Domain. Owns the party saga: create, update, status change, and relationship changes for a natural person or a legal entity, with compensation, through `core-common-customer-mgmt`.

## Contract

- [core-common-contract-mgmt](contract.md#core-common-contract-mgmt)
    Core. Owns contract rows, contract lines, status history, and predecessor links.

- [domain-common-contracts](contract.md#domain-common-contracts)
    Domain. Owns the contract saga: create, update, status change, and delete.

## Product

- [core-common-product-mgmt](product.md#core-common-product-mgmt)
    Core. Owns products and optional product configuration, including pricing rows.

- [domain-core-pricing-engine](product.md#domain-core-pricing-engine)
    Domain. Calculates a price, a commission, and eligibility from product configuration.

- [domain-product-catalog](product.md#domain-product-catalog)
    Domain. Owns the product saga: register, publish, suspend, resume, and retire, through `core-common-product-mgmt`.

- [domain-product-pricing](product.md#domain-product-pricing)
    Domain. Owns optional pricing configuration on a product.

## Banking

- [core-banking-accounts](banking.md#core-banking-accounts)
    Core. Owns account records, balances, parameters, providers, spaces, and restrictions.

- [core-banking-cards](banking.md#core-banking-cards)
    Core. Owns payment-card records, including physical and virtual cards.

- [core-banking-ledger](banking.md#core-banking-ledger)
    Core. Owns ledger transactions.

- [core-banking-payments](banking.md#core-banking-payments)
    Core. Owns payment orders, instructions, schedules, and related payment records.

- [core-banking-psdx](banking.md#core-banking-psdx)
    Core. Owns open-banking access records for account information and payment initiation, including consent.

- [domain-banking-accounts](banking.md#domain-banking-accounts)
    Domain. Owns the account saga: open, update, and close, with compensation, through `core-banking-accounts`.

- [domain-banking-cards](banking.md#domain-banking-cards)
    Domain. Owns the card saga: issue, activate, block, replace, and cancel, with compensation, through `core-banking-cards`.

## Lending

- [core-lending-asset-finance](lending.md#core-lending-asset-finance)
    Core. Owns asset-finance agreements, including leasing and renting terms, and the financed asset.

- [core-lending-collateral-management](lending.md#core-lending-collateral-management)
    Core. Owns collateral assets, cases, liens, valuations, and monitoring.

- [core-lending-credit-cards](lending.md#core-lending-credit-cards)
    Core. Owns revolving credit lines, billing cycles, statements, and amounts posted to the credit line.

- [core-lending-credit-scoring](lending.md#core-lending-credit-scoring)
    Core. Owns scoring cases and bureau-call records.

- [core-lending-delinquency-collections](lending.md#core-lending-delinquency-collections)
    Core. Owns delinquency cases, collection actions, and payment promises.

- [core-lending-loan-origination](lending.md#core-lending-loan-origination)
    Core. Owns loan applications, parties on the application, documents, proposed offers, underwriting decisions, scores, and status history.

- [core-lending-loan-servicing](lending.md#core-lending-loan-servicing)
    Core. Owns servicing after origination: disbursements, repayment schedules, interest, rate changes, and servicing events.

- [core-lending-mortgage](lending.md#core-lending-mortgage)
    Core. Owns mortgage agreement terms.

- [core-lending-personal-loans](lending.md#core-lending-personal-loans)
    Core. Owns personal-loan contractual terms, including purpose and early-repayment conditions.

- [core-lending-provisioning-risk](lending.md#core-lending-provisioning-risk)
    Core. Owns provisioning cases, expected-credit-loss amounts, and risk assessments.

- [core-lending-regulatory-compliance](lending.md#core-lending-regulatory-compliance)
    Core. Owns AML cases, suspicious-activity reports, and regulatory report records.

- [core-lending-supply-chain-finance](lending.md#core-lending-supply-chain-finance)
    Core. Owns supply-chain finance agreements, including factoring and confirming.

- [domain-lending-asset-finance](lending.md#domain-lending-asset-finance)
    Domain. Owns the asset-finance saga through `core-lending-asset-finance`.

- [domain-lending-collateral-management](lending.md#domain-lending-collateral-management)
    Domain. Owns the collateral saga: create, update, status change, and close, with compensation, through `core-lending-collateral-management`.

- [domain-lending-credit-scoring](lending.md#domain-lending-credit-scoring)
    Domain. Owns the scoring saga through `core-lending-credit-scoring`.

- [domain-lending-delinquency-collections](lending.md#domain-lending-delinquency-collections)
    Domain. Owns the collections saga: create, update, status change, and close, with compensation, through `core-lending-delinquency-collections`.

- [domain-lending-loan-origination](lending.md#domain-lending-loan-origination)
    Domain. Owns the origination saga: submit, update, and record an underwriting outcome, through `core-lending-loan-origination`.

- [domain-lending-loan-servicing](lending.md#domain-lending-loan-servicing)
    Domain. Owns the servicing saga: disburse, repay, and later servicing commands, through `core-lending-loan-servicing`.

- [domain-lending-mortgage](lending.md#domain-lending-mortgage)
    Domain. Owns the mortgage agreement saga: create, update, status change, and close, with compensation, through `core-lending-mortgage`.

- [domain-lending-personal-loans](lending.md#domain-lending-personal-loans)
    Domain. Owns the personal-loan agreement saga through `core-lending-personal-loans`.

- [domain-lending-provisioning-risk](lending.md#domain-lending-provisioning-risk)
    Domain. Owns the provisioning saga: create, update, status change, and close, with compensation, through `core-lending-provisioning-risk`.

- [domain-lending-regulatory-compliance](lending.md#domain-lending-regulatory-compliance)
    Domain. Owns the AML-case saga: create, update, status change, and close, with compensation, through `core-lending-regulatory-compliance`.

- [domain-lending-supply-chain-finance](lending.md#domain-lending-supply-chain-finance)
    Domain. Owns the supply-chain finance saga: create, update, status change, and close, with compensation, through `core-lending-supply-chain-finance`.

## Insurance

- [core-insurance-claims](insurance.md#core-insurance-claims)
    Core. Owns claim files, coverage checks, reserves, assessments, settlements, fraud referrals, and recoveries.

- [core-insurance-delegated-authority](insurance.md#core-insurance-delegated-authority)
    Core. Owns binders, authority limits, and coverholder appointments.

- [core-insurance-financials](insurance.md#core-insurance-financials)
    Core. Owns premium schedules, commissions, refunds, bordereaux, premium audits, and credit-control records.

- [core-insurance-policies](insurance.md#core-insurance-policies)
    Core. Owns policy records, parties on the policy, transactions, coverages, certificates, and line-level risk details.

- [core-insurance-reinsurance](insurance.md#core-insurance-reinsurance)
    Core. Owns reinsurance treaties, cessions, and claim recoveries recorded against those treaties.

- [core-insurance-reserving](insurance.md#core-insurance-reserving)
    Core. Owns reserving snapshots, loss-development triangle cells, and reporting extracts.

- [core-insurance-underwriting](insurance.md#core-insurance-underwriting)
    Core. Owns underwriting submissions, clearance, statements of value, loss runs, quotes, referrals, and underwriting decisions.

- [domain-insurance-claims](insurance.md#domain-insurance-claims)
    Domain. Owns the claims saga: create, update, status change, and close, with compensation, through `core-insurance-claims`.

- [domain-insurance-delegated-authority](insurance.md#domain-insurance-delegated-authority)
    Domain. Owns the delegated-authority saga: create, update, status change, and close a binder, with compensation, through `core-insurance-delegated-authority`.

- [domain-insurance-financials](insurance.md#domain-insurance-financials)
    Domain. Owns the financials saga for premium schedules and related billing records, through `core-insurance-financials`.

- [domain-insurance-policies](insurance.md#domain-insurance-policies)
    Domain. Owns the policy saga: create, update, status change, and close, with compensation, through `core-insurance-policies`.

- [domain-insurance-reinsurance](insurance.md#domain-insurance-reinsurance)
    Domain. Owns the reinsurance saga for treaties and cessions, through `core-insurance-reinsurance`.

- [domain-insurance-reserving](insurance.md#domain-insurance-reserving)
    Domain. Owns the reserving saga for snapshots and reporting extracts, through `core-insurance-reserving`.

- [domain-insurance-underwriting](insurance.md#domain-insurance-underwriting)
    Domain. Owns the underwriting saga for submissions, quotes, referrals, and decisions, through `core-insurance-underwriting`.

## Data and external systems

- [domain-data-business-intelligence](data.md#domain-data-business-intelligence)
    Domain. Owns the port for company lookup against an external business-information provider.

- [domain-data-credit-bureaus](data.md#domain-data-credit-bureaus)
    Domain. Owns the port for a credit-bureau report.

## Security and access

- [app-authenticator](security.md#app-authenticator)
    Application. Gateway in front of the security center.

- [core-common-sca-mgmt](security.md#core-common-sca-mgmt)
    Core. Owns strong-customer-authentication operations, challenges, attempts, and the audit trail.

- [core-common-security-vault](security.md#core-common-security-vault)
    Core. Owns credential and secret records, including rotation and an access audit.

- [core-common-user-mgmt](security.md#core-common-user-mgmt)
    Core. Owns users, roles, and permissions.

- [domain-common-sca](security.md#domain-common-sca)
    Domain. Owns the strong-customer-authentication saga: start a challenge, verify the response, and write the audit event, through `core-common-sca-mgmt`.

- [domain-core-security-center](security.md#domain-core-security-center)
    Domain. Owns authentication sessions.

- [exp-security](security.md#exp-security)
    Experience. Owns the sign-in journey: password, biometric sign-in, session, strong customer authentication, and password change.

## Onboarding and other journeys

- [bfc-initconfig](journeys.md#bfc-initconfig)
    Application. Channel startup service.

- [exp-accounts](journeys.md#exp-accounts)
    Experience. Owns the account journey: open, summary, list, and close.

- [exp-cards](journeys.md#exp-cards)
    Experience. Owns the card journey: issue, summary, list, activate, block, and cancel.

- [exp-channel-management](journeys.md#exp-channel-management)
    Experience. Owns channel startup reads: branding, languages, and reference data in one response.

- [exp-distributor](journeys.md#exp-distributor)
    Experience. Owns the distributor-portal journey: registration, branding, catalog, territories, and agents.

- [exp-lending](journeys.md#exp-lending)
    Experience. Owns lending screens from simulation and application through offer, signing, and servicing.

- [exp-notifications](journeys.md#exp-notifications)
    Experience. Owns the in-app notification journey: list, read, dismiss, unread count, and preferences.

- [exp-onboarding](journeys.md#exp-onboarding)
    Experience. Owns onboarding for a natural person and for a legal entity.

- [exp-profile](journeys.md#exp-profile)
    Experience. Owns the signed-in customer profile journey: read and update the person, contacts, documents, consents, and contract summaries.

## Shared platform

- [app-configurator-masters](shared.md#app-configurator-masters)
    Application. Gateway in front of configuration.

- [core-common-accounting-gl](shared.md#core-common-accounting-gl)
    Core. Owns general-ledger accounting records for the platform.

- [core-common-config-mgmt](shared.md#core-common-config-mgmt)
    Core. Owns tenant configuration, provider settings, channel settings, and feature flags.

- [core-common-distributor-mgmt](shared.md#core-common-distributor-mgmt)
    Core. Owns distributor records, agreements, agencies, agents, territories, and catalog rows.

- [core-common-document-mgmt](shared.md#core-common-document-mgmt)
    Core. Owns document metadata and stored content.

- [core-common-modelhub](shared.md#core-common-modelhub)
    Core. Owns data models defined at runtime, and the records stored against those models.

- [core-common-notification-services](shared.md#core-common-notification-services)
    Core. Owns notification messages and delivery state.

- [core-common-org-mgmt](shared.md#core-common-org-mgmt)
    Core. Owns organization structure: divisions, regions, branches, departments, positions, and working calendars.

- [core-common-reference-master-data](shared.md#core-common-reference-master-data)
    Core. Owns reference lists such as countries, currencies, and document types.

- [domain-common-notifications](shared.md#domain-common-notifications)
    Domain. Owns the notification saga: send, record history, and store channel preferences, with compensation, through `core-common-notification-services`.

- [domain-core-configuration](shared.md#domain-core-configuration)
    Domain. Owns configuration queries: languages, lookup domains, tenant branding, and master-data lookup items.

- [domain-distributor-branding](shared.md#domain-distributor-branding)
    Domain. Owns the distributor saga for legal identity, branding, terms, agencies, agents, and territories, through `core-common-distributor-mgmt`.

- [domain-distributor-catalog](shared.md#domain-distributor-catalog)
    Domain. Owns the saga for a distributor product catalog, through `core-common-distributor-mgmt`.

- [firefly-bom](shared.md#firefly-bom)
    Platform. Bill of materials for version 26.10.3.

- [firefly-parent](shared.md#firefly-parent)
    Platform. Parent POM for OpenPlatform modules.

- [library-common-batch](shared.md#library-common-batch)
    Library. Library for scheduling batch jobs, with optional execution audit and a lock so the same job does not run concurrently on two nodes.

- [library-psps](shared.md#library-psps)
    Library. Port library for payment service providers.

- [library-rails](shared.md#library-rails)
    Library. Port library for payment rails.

## Decision

No separate decision repository. The published decision service is `domain-lending-credit-scoring`. See [Decision](decision.md).

