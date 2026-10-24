# OpenPlatform mapped to the BIAN Service Landscape

This is a coverage map of Firefly OpenPlatform services that exist in this workspace onto the BIAN Service Landscape 14.0 Value Chain View. It is not a certification, a membership claim, or a statement of compliance.

BIAN groups service domains into business areas and business domains. A row appears only when that service domain is in the Value Chain View and its job is clear. A business domain is included only when at least one OpenPlatform journey, domain, or core performs one of its service domains. Business areas with no such service, including markets, treasury, corporate finance, trade finance, investment services, and corporate management, are left out.

Status meanings:

- **covers**: the named service performs that service domain's job.
- **partial**: the named service performs a slice of that job.
- **absent**: BIAN defines the service domain, it sits in a business domain included below, and no journey, domain, or core performs it.

The repository column is the service that does the work. Gateways that only forward a call are not listed. `core-payments-engine` and `core-common-pricing-mgmt` contain no application code and are not treated as services. `library-rails` is a library, cited only where `domain-payments` calls it.

Channel Portfolio and Branch Portfolio are BIAN names in Channel management. The source extract used here has no job description for either name, so they have no row.

Insurance capabilities that have no BIAN service domain are in [Outside BIAN](#outside-bian), together with banking work that was left unmapped so it would not be forced onto a nearby domain.

## Customers

### Party reference

| BIAN service domain | Status | Repository | Layer | What is implemented |
| --- | --- | --- | --- | --- |
| Legal Entity Directory | partial | `domain-customer-people` | domain | Records legal entities on a party and exposes owners, subsidiaries, and ancestors. |
| Location Data Management | partial | `domain-customer-people` | domain | Stores party postal addresses, while country and administrative-division codes live in the reference-data masters. |
| Party Reference Data Directory | covers | `domain-customer-people` | domain | Maintains persons and businesses, contacts, identity documents, consents, relationships, industry facts, and party search, with the customer core as the store. |
| Payee Management | partial | `core-banking-payments` | core | Stores payment-beneficiary records. A payment is refused when the beneficiary is inactive, and an active beneficiary is confirmed through the payments try/confirm port. |

### Relationship management

| BIAN service domain | Status | Repository | Layer | What is implemented |
| --- | --- | --- | --- | --- |
| Customer Relationship Management | absent | — | — | No service builds or runs a customer relationship plan. |
| Customer Behavior Insights | absent | — | — | No service scores propensity or life events from customer history. |
| Customer Credit Rating | absent | — | — | Application scoring exists, and no service keeps a standing customer credit rating. |
| Customer Agreement | absent | — | — | Contracts link a party to a product, and no service keeps a master customer agreement. |
| Sales Product Agreement | partial | `domain-common-contracts` | domain | Maintains a contract between a party and a product, including parties, terms, status, and events. |
| Customer Product And Service Eligibility | partial | `domain-product-pricing` | domain | Evaluates one product for a party by checking that the party and product exist, the product is available, and the requested amount sits inside the product minimum and maximum. |
| Customer Proposition | absent | — | — | No service stores a cross-product proposition for a customer. |
| Customer Event History | absent | — | — | No service keeps a classified log of relationship and servicing events for a party. |
| Customer Product and Service Directory | partial | `domain-customer-people` | domain | Builds a financial profile from the party's contracts, loan applications, servicing cases, personal-loan agreements, and asset-finance agreements. |
| Loan Syndication | partial | `domain-lending-loan-servicing` | domain | Services a facility with participants, a drawdown, and a share allocation. It does not originate the syndicate or distribute participations. |
| Customer Financial Insights | absent | — | — | The financial profile lists product records and does not analyze them for opportunities or distress. |
| Customer Consent | partial | `domain-customer-people` | domain | Updates party consent records against a consent catalog. Open-banking consents are stored on `core-banking-psdx`. |

### Customer care

| BIAN service domain | Status | Repository | Layer | What is implemented |
| --- | --- | --- | --- | --- |
| Servicing Mandate | partial | `core-banking-accounts` | core | An active owner or operator may move money. A viewer may not. The mandate is not stored as its own row. |
| Servicing Order | absent | — | — | No service runs a general customer servicing procedure. |
| Customer Case Management | absent | — | — | No service tracks a general customer-case workload. |
| Card Case | partial | `domain-banking-cards` | domain | Resolves a card dispute by posting a chargeback between the cardholder and a merchant-settlement account. |
| Customer Case | absent | — | — | No service opens and resolves a general customer case on a financial transaction. |

### Sales

| BIAN service domain | Status | Repository | Layer | What is implemented |
| --- | --- | --- | --- | --- |
| Customer Campaign Execution | absent | — | — | No service executes a customer campaign. |
| Product Expert Sales Support | absent | — | — | No service assigns product specialists to a sale. |
| Product Matching | absent | — | — | No service matches a product set to a customer. |
| Customer Offer | partial | `domain-lending-loan-origination` | domain | Stores proposed offers on a loan application, and the lending journey accepts or rejects an offer. |
| Special Pricing Conditions | absent | — | — | Fee schemes and amount limits are standard product pricing, and no service keeps an exception price list. |
| Party Lifecycle Management | covers | `domain-customer-people` | domain | Moves a person or business through dormant, reactivation, deceased or defunct, closure, and lock, after onboarding has created the party. |
| Prospect Campaign Execution | absent | — | — | No service executes a prospect campaign. |
| Lead and Opportunity Management | absent | — | — | No service tracks a sales lead through to an offer. |
| Product Sales Support | absent | — | — | No service gives customers access to a product specialist. |

## Channels

### Information providers

| BIAN service domain | Status | Repository | Layer | What is implemented |
| --- | --- | --- | --- | --- |
| Public Reference Data Management | covers | `core-common-reference-master-data` | core | Maintains shared code lists, including currencies, countries, languages, legal forms, identity-document types, activity codes, and bank institution codes. |
| Financial Instrument Reference Data Management | absent | — | — | No service maintains securities or other instrument reference data. |
| Financial Market Research | absent | — | — | No service publishes market research. |
| Financial Market Analysis | absent | — | — | No service analyzes financial markets. |
| Market Information Management | absent | — | — | No service manages a market-information feed. |
| Market Data Switch Operation | absent | — | — | No service operates a market-data switch. |
| Information Provider Operation | absent | — | — | No service operates an external information-provider connection. |

### Cross channel

| BIAN service domain | Status | Repository | Layer | What is implemented |
| --- | --- | --- | --- | --- |
| Customer Workbench | absent | — | — | No service presents one customer portal across products and devices. |
| Contact Handler | absent | — | — | No service handles an interactive customer contact across channels. |
| Contact Routing | absent | — | — | No service routes a customer contact to a servicing resource. |
| Session Dialogue | absent | — | — | Authentication sessions exist, and no service scripts a customer dialogue. |
| Party Routing Profile | absent | — | — | No service keeps a routing profile of status, value, and alerts for a party. |
| Transaction Authorization | partial | `domain-common-sca` | domain | Challenges and verifies a strong-customer-authentication step for an operation. |
| Customer Access Entitlement | absent | — | — | User accounts cover employees and distributors, and no service keeps a customer's channel entitlements. |
| Channel Activity History | partial | `core-banking-psdx` | core | Writes and reads open-banking access logs. |
| Processing Order | absent | — | — | No service accepts an automated processing request from a known system. |
| Party Authentication | covers | `domain-core-security-center` | domain | Logs a party in, refreshes and introspects tokens, and opens and validates sessions. The live adapter sends the password to an identity provider; the default sandbox accepts a configured username and does not read a password. |

### Channel-specific

| BIAN service domain | Status | Repository | Layer | What is implemented |
| --- | --- | --- | --- | --- |
| ATM Network Operations | absent | — | — | No service operates an ATM network. Withdrawal records can name an ATM. |
| Branch Location Operations | absent | — | — | No service runs teller assignment or branch cash. |
| Advanced Voice Services Operations | absent | — | — | No service operates voice banking. |
| eBranch Operations | absent | — | — | No service operates the online channel's capacity and access. |
| Financial Gateway | absent | — | — | No service runs a SWIFT, ACH, or market-message session. |
| Card Terminal Administration | partial | `core-banking-cards` | core | Stores card-terminal records, including merchant and capability fields. |
| Card Terminal Operation | absent | — | — | No service drives a card terminal during a sale. |

### Distribution

| BIAN service domain | Status | Repository | Layer | What is implemented |
| --- | --- | --- | --- | --- |
| Product Inventory Distribution | absent | — | — | Distributor shipments move a distributor's products, and no service stocks branch inventory. |
| Branch Currency Distribution | absent | — | — | No service distributes cash to branches. |
| Correspondence | partial | `domain-common-notifications` | domain | Sends a notification or a bulk batch, and the notification core delivers email and SMS. |

## Business development

### Product management

| BIAN service domain | Status | Repository | Layer | What is implemented |
| --- | --- | --- | --- | --- |
| Product Portfolio | absent | — | — | No service analyzes product profitability. |
| Product Design | partial | `domain-product-catalog` | domain | Stores configuration on a product record. |
| Production Release | absent | — | — | No service applies release tests to a product change. |
| Product Deployment | partial | `domain-product-catalog` | domain | Publishes, suspends, resumes, and retires a product. |
| Product Quality Assurance | absent | — | — | No service assures product quality. |
| Product Training | absent | — | — | No service trains staff on a product. |
| Case Root Cause Analysis | absent | — | — | No service traces product cases to a root cause. |
| Product Directory | covers | `domain-product-catalog` | domain | Keeps the product directory and its publish, suspend, resume, and retire states, with the product core as the store. |
| Discount Pricing | partial | `domain-product-pricing` | domain | Stores fee schemes and fee components, and reads product minimum, maximum, and availability when judging an amount. |

### Channel management

| BIAN service domain | Status | Repository | Layer | What is implemented |
| --- | --- | --- | --- | --- |
| Contact Center Management | absent | — | — | No service manages a contact center. |
| Servicing Activity Analysis | absent | — | — | No service analyzes servicing activity. |
| Financial Message Analysis | absent | — | — | No service analyzes financial messages. |
| Channel Activity Analysis | absent | — | — | No service analyzes channel usage. |
| Information Provider Administration | absent | — | — | No service administers an information provider. |
| Market Data Switch Administration | absent | — | — | No service administers a market-data switch. |
| Branch Location Management | partial | `core-common-org-mgmt` | core | Stores banks, regions, divisions, branches, departments, positions, hours, holidays, and working calendars. |
| ATM Network Management | absent | — | — | No service manages an ATM network. |
| Branch Network Management | absent | — | — | No service manages branch-network performance. |
| Advanced Voice Services Management | absent | — | — | No service manages a voice channel. |
| eBranch Management | partial | `core-common-config-mgmt` | core | Stores channel configuration, including web and mobile channel codes, and the channel journey reads languages, branding, and master data for the client. |
| Product Inventory Item Management | absent | — | — | No service manages branch product-inventory items. |
| Central Cash Handling | absent | — | — | No service handles central cash. |
| Branch Currency Management | absent | — | — | No service manages branch currency holdings. |

### Models and analytics

| BIAN service domain | Status | Repository | Layer | What is implemented |
| --- | --- | --- | --- | --- |
| Contribution Models | absent | — | — | No service maintains contribution models. |
| Customer Behavior Models | absent | — | — | No service maintains customer-behavior models. |
| Credit Risk Models | partial | `core-lending-credit-scoring` | core | Stores scoring models and scoring cases. `domain-lending-credit-scoring` runs a scoring request and reads stored bureau reports. `domain-data-credit-bureaus` calls Equifax for a credit report. |
| Fraud Model | absent | — | — | No service maintains a fraud-model portfolio. |
| Quant Model | absent | — | — | No service maintains quantitative pricing models. |
| Trading Models | absent | — | — | No service maintains trading models. |
| Financial Instrument Valuation Models | absent | — | — | No service maintains instrument-valuation models. |
| Liquidity Risk Models | absent | — | — | No service maintains liquidity-risk models. |
| Market Risk Models | absent | — | — | No service maintains market-risk models. |

## Products

### Consumer banking

| BIAN service domain | Status | Repository | Layer | What is implemented |
| --- | --- | --- | --- | --- |
| Current Account | partial | `domain-banking-accounts` | domain | Opens a checking account with a contract, a main balance space, restrictions, an opening ledger posting, and closure that can post fees. A sweep moves an amount between two spaces of that account and posts a balanced ledger pair. A statement closes from the opening balance, credits, and debits, and a withdrawal stops at the account limit and the overdraft. |
| Brokered Product Proxy | absent | — | — | No service coordinates fulfillment of a third-party product. |
| Sales Product | partial | `domain-product-catalog` | domain | Stores the configuration used when a catalog product is sold. |
| Trust Services | absent | — | — | No service operates a trust for a customer. |
| Payment Order Initiation | covers | `domain-payments` | domain | Accepts a movement with scheme, accounts, amount, and currency. `exp-payments` posts transfers and inbound credits, and `core-banking-psdx` stores a third-party payment initiation. |
| Currency Exchange | absent | — | — | A payment order can store an exchange rate, and no service sells a currency exchange. |
| Funeral Policy | absent | — | — | No service sells or administers a funeral policy. |
| Claim Assessment | absent | — | — | A claim file can sit in an under-assessment status, and no service assesses coverage or loss. |
| Claim Administration | partial | `core-insurance-claims` | core | Stores the claim file and moves it through notified, open, under assessment, reserved, settled, denied, closed, and reopened. `domain-insurance-claims` updates status, denies, and closes. |

### Loans and deposits

| BIAN service domain | Status | Repository | Layer | What is implemented |
| --- | --- | --- | --- | --- |
| Loan | covers | `domain-lending-loan-servicing` | domain | Services a loan case through disbursement, schedule, repayment, prepayment, interest accrual and capitalization, penalties, rate and index changes, payment holiday, restructuring, arrears, charge-off, write-back, and close. |
| Consumer Loan | partial | `domain-lending-personal-loans` | domain | Creates and reads a personal-loan agreement. Scheduled fulfillment is the shared loan-servicing domain. |
| Mortgage Loan | partial | `domain-lending-mortgage` | domain | Creates, updates, closes, and cancels a mortgage agreement. Escrow rows can be stored on the loan-servicing case. |
| Corporate Loan | absent | — | — | No service fulfills a corporate loan. |
| Corporate Lease | absent | — | — | No service runs an umbrella corporate lease. |
| Merchandising Loan | absent | — | — | No service fulfills a goods-backed merchandise loan. |
| Leasing Item Administration | partial | `domain-lending-asset-finance` | domain | Records leased-asset deliveries, pickups, returns, usage, and service events, and stores end-of-term options. |
| Syndicated Loan | partial | `domain-lending-loan-servicing` | domain | Opens a facility on a servicing case, records each participant as a party, a share from 0 to 100, and a role with one agent, draws that facility through the existing disbursement, and allocates a repayment by share. The money movement goes through the payments try/confirm port. The default adapter is a sandbox and does not open a socket. Bookrunning and trading of participations are not implemented. |
| Fiduciary Agreement | absent | — | — | No service records a fiduciary appointment. |
| Underwriting | partial | `domain-lending-loan-origination` | domain | Scores, approves, and rejects a loan application and stores the decision. `domain-insurance-underwriting` keeps a separate submission that can be declined or withdrawn. |
| Leasing | partial | `domain-lending-asset-finance` | domain | Opens and closes a renting or leasing agreement and records the financed assets. |
| Savings Account | partial | `domain-banking-accounts` | domain | Opens an account with type SAVINGS. The accounts core calculates simple interest from balance, annual rate, and day count. |
| Term Deposit | partial | `domain-banking-accounts` | domain | Opens an account with type TERM_DEPOSIT. Withdrawal on or after maturity returns principal and interest. An earlier withdrawal subtracts a penalty. |
| Standing Order | partial | `core-banking-payments` | core | Stores a payment schedule. A due order is confirmed through the payments try/confirm port and the next execution date advances by one month. |

### Cards

| BIAN service domain | Status | Repository | Layer | What is implemented |
| --- | --- | --- | --- | --- |
| Credit Card | partial | `domain-banking-cards` | domain | Sets a credit line and posts interest, fees, and a statement payment. `core-lending-credit-cards` stores revolving lines, billing cycles, and statements. |
| Card Authorization | partial | `domain-banking-cards` | domain | Authorizes a card transaction by writing a pending card transaction and a pending ledger hold, and can reverse that hold. |
| Card Transaction Capture | absent | — | — | Clearing posts an authorized card transaction to the ledger, and no service captures a transaction at a point of sale. |
| Merchant Relations | partial | `core-banking-cards` | core | Stores merchant records with legal name, category code, and status. |
| Card Network Participant Facility | absent | — | — | Issuer and network records are stored, and no service onboards a scheme participant or maintains its terms. |
| Merchant Acquiring Facility | absent | — | — | Acquirer records are stored, and no service settles a merchant or bills merchant fees. |
| Card Transaction Tracking | partial | `domain-banking-cards` | domain | Keeps card transactions, balances, and activity, and the staff back office can read them. |
| Corporate Card Service | absent | — | — | Card types are debit, credit, and prepaid, and no service runs a corporate card program. |

### Corporate banking

| BIAN service domain | Status | Repository | Layer | What is implemented |
| --- | --- | --- | --- | --- |
| Corporate Current Account | partial | `domain-banking-accounts` | domain | Opens an account with type BUSINESS_CHECKING through the same contract, space, and ledger steps as a consumer checking account. |
| Direct Debit Mandate | partial | `core-banking-payments` | core | A collection is accepted only while the mandate is active and the amount is within its limit. The mandate is not stored as its own row. |
| Cash Management And Account Services | absent | — | — | No service offers corporate cash-management features beyond the account and payment paths. |
| Corporate Trust Services | absent | — | — | No service operates a corporate trust. |
| Credit Facility | absent | — | — | No service keeps a corporate limit under which later products skip a full underwriting. |
| Direct Debit | partial | `core-banking-payments` | core | Collects an amount against an active mandate through the payments try/confirm port. It does not clear the debit through a scheme session. |
| Cheque Lock Box | absent | — | — | No service runs a lockbox for corporate checks. |
| Factoring | partial | `core-lending-supply-chain-finance` | core | Stores factoring and reverse-factoring agreements, with invoices, advances, fees, settlements, and counterparties. An inbound confirming value is stored as reverse factoring. The supply-chain domain opens, closes, and cancels the agreement. |
| Cash Concentration | partial | `domain-banking-accounts` | domain | Sweeps an amount between two spaces of one account and posts a balanced ledger pair. It does not sweep across accounts. |
| Corporate Payroll Services | partial | `core-banking-payments` | core | Stores payroll-order rows under a payment order. |
| Project Finance | absent | — | — | No service fulfills project finance. |
| Notional Pooling | absent | — | — | No service pools balances across corporate accounts for interest. |
| Virtual Account | absent | — | — | Account spaces are labeled balances inside one account, and no service keeps a virtual account that pays and receives as its own account. |

## Operations

### Operational services

| BIAN service domain | Status | Repository | Layer | What is implemented |
| --- | --- | --- | --- | --- |
| Customer Billing | absent | — | — | No service composes and issues a customer bill. |
| Disbursement | partial | `domain-lending-loan-servicing` | domain | Registers a disbursement against a loan servicing case. |
| Open Item Management | partial | `domain-lending-delinquency-collections` | domain | Opens and closes a collection case. `exp-lending` can record a promise to pay, and `domain-lending-loan-servicing` can mark the loan in arrears or return it to normal. |
| Delinquent Account Handling | absent | — | — | No service chases payments on an active credit card. |
| Card Collections | absent | — | — | No service collects a canceled card balance. |
| Product Combination | absent | — | — | No service constrains a bundled product. |
| Reward Points Awards And Redemption | absent | — | — | No service awards or redeems reward points. Card promotion rows are a separate record. |
| Issued Device Administration | partial | `domain-banking-cards` | domain | Issues a card, activates, blocks, unblocks, replaces, and cancels it, and can add a virtual card. |
| Issued Device Tracking | partial | `domain-banking-cards` | domain | Reads card activity, physical and virtual card records, and security settings from the card back office. |
| Card Transaction Switch | absent | — | — | No service switches a card authorization between acquirer and issuer. |
| Internal Bank Account | partial | `domain-payments` | domain | Uses configured clearing, nostro, and suspense accounts when it posts a movement, and those accounts are held in the accounts core. |
| Term Deposit Framework Agreement | absent | — | — | No service keeps a framework agreement under which individual term deposits are opened. |
| Incentive Program Directory | absent | — | — | No service catalogs an incentive program. |
| Incentive Account | absent | — | — | No service keeps an incentive account. |
| Rewards Menu | absent | — | — | No service publishes a rewards menu. |
| Rewards Inventory | absent | — | — | No service tracks rewards inventory. |
| Rewards Delivery | absent | — | — | No service delivers a reward. |
| Issued Certificate Directory | absent | — | — | No service issues or redeems a rewards certificate. |

### Custody, collateral, and documents

| BIAN service domain | Status | Repository | Layer | What is implemented |
| --- | --- | --- | --- | --- |
| Account Recovery | absent | — | — | Loan restructuring is available on a live loan, and no service recovers an account after ordinary collection has ended. |
| Archive Services | absent | — | — | No service archives bank records. |
| Custody Administration | absent | — | — | No service administers safekeeping of customer assets. |
| Collateral Allocation Management | partial | `core-lending-collateral-management` | core | Stores collateral cases and assets, and collateral and guarantees. The collateral domain opens a case and changes its status. |
| Collections | absent | — | — | No service liquidates collateral to offset a loss. |
| Document Directory | partial | `core-common-document-mgmt` | core | Stores documents in folders with tags, metadata, and permissions. |
| Investment Account | absent | — | — | An account type named investment exists, and no service keeps an investment holding. |
| Document Services | partial | `core-common-document-mgmt` | core | Versions a document and records signature requests, signatures, and signature checks. |
| Party Asset Directory | absent | — | — | No service catalogs assets a party owns outside a collateral case. |
| Collateral Asset Administration | partial | `core-lending-collateral-management` | core | Stores collateral valuations, liens, insurance rows, and monitoring records on an asset, including vehicles and real estate. |

### Clearing and settlement

| BIAN service domain | Status | Repository | Layer | What is implemented |
| --- | --- | --- | --- | --- |
| Counterparty Administration | absent | — | — | No service maintains wholesale clearing counterparties. |
| Cheque Processing | absent | — | — | No service clears a paper check. |
| Card Financial Settlement | absent | — | — | No service settles card totals between issuers and acquirers. |
| Order Allocation | absent | — | — | No service allocates a partially filled market trade. |
| Card Clearing | absent | — | — | No service consolidates card transactions from terminals and networks for clearing. |
| Transaction Engine | absent | — | — | No service schedules payment and reporting activity for a long-term or structured instrument. |
| Correspondent Bank Directory | absent | — | — | Bank-institution codes are a reference list, and no service keeps correspondent limits or reciprocity. |
| Card eCommerce Gateway | absent | — | — | Gateway records exist on the cards core, and no service authenticates an e-commerce card payment. |
| Payment Rail | partial | `domain-payments` | domain | Sends an outbound credit transfer or wire through a rail port and accepts an inbound instruction locally. Concrete scheme adapters in the rails library are unfinished, and the default payments mode is a sandbox. |
| Payment Settlement | partial | `domain-payments` | domain | Completes an internal transfer on the ledger and, for an external movement, posts the customer leg to a clearing account before the rail or payment-service provider accepts it. |
| Payment Confirmation | partial | `domain-payments` | domain | Checks scheme, currency, and configured limits before posting. The payments core can store sanctions, AML, PEP, and KYC result fields on the order. |
| Payment Orchestration | covers | `domain-payments` | domain | Routes a movement to an internal book transfer, an outbound rail, an outbound payment-service provider, or an inbound credit, posts a balanced ledger pair, and reverses it when the external step or the record write fails. |

### Accounting services

| BIAN service domain | Status | Repository | Layer | What is implemented |
| --- | --- | --- | --- | --- |
| Position Keeping | partial | `core-banking-ledger` | core | Stores transactions, legs, and typed lines. The accounts and payments domains post the balanced entries. |
| Customer Position | partial | `core-banking-accounts` | core | Calculates available funds from balances, unused credit, and tax, and reports collateral. It does not keep a stored customer position. |
| Accounts Receivable | absent | — | — | No service collects invoices the bank has issued. |
| Financial Accounting | partial | `core-common-accounting-gl` | core | Stores a chart of accounts and journal batches, entries, and lines. |
| Customer Tax Handling | absent | — | — | No service calculates or withholds customer tax. |
| Commissions | absent | — | — | No service calculates employee or partner commissions. |
| Fraud Evaluation | absent | — | — | No service runs fraud-pattern tests on transactions. |
| Account Reconciliation | absent | — | — | No service reconciles an account to a statement or a correspondent. |
| Securities Position Keeping | absent | — | — | No service keeps securities positions. |
| Fraud Diagnosis | absent | — | — | No service diagnoses a suspected fraud event. |
| Reward Points Account | absent | — | — | No service books reward points. |
| Financial Statement Assessment | absent | — | — | No service analyzes an entity's financial statements. |

## Finance and risk management

### Compliance

| BIAN service domain | Status | Repository | Layer | What is implemented |
| --- | --- | --- | --- | --- |
| Regulatory And Legal Authority | absent | — | — | No service manages the relationship with a regulator or government agency. |
| Regulatory Compliance | partial | `domain-lending-regulatory-compliance` | domain | Opens and closes a lending AML case. The lending-compliance core stores the case, actions, and suspicious-activity reports. |
| Regulatory Reporting | partial | `core-lending-regulatory-compliance` | core | Stores reporting runs and the regulatory submissions attached to a run. |
| Guideline Compliance | absent | — | — | No service maintains or samples internal procedure tests. |
| Compliance Reporting | absent | — | — | No service reports on internal control testing. |

## Resource management

### Human resources

| BIAN service domain | Status | Repository | Layer | What is implemented |
| --- | --- | --- | --- | --- |
| Recruitment | absent | — | — | No service recruits employees. |
| Employee Assignment | absent | — | — | No service assigns employees to roles or units. |
| Employee Evaluation | absent | — | — | No service evaluates employees. |
| Employee Certification | absent | — | — | No certification of employees. |
| Employee and Contractor Contract | absent | — | — | No service stores employment or contractor contracts. |
| Employee Data Management | absent | — | — | No service keeps an employee master file. |
| Employee Payroll And Incentives | absent | — | — | No service pays the bank's own employees. |
| Employee Benefits | absent | — | — | No service administers employee benefits. |
| Workforce Training | absent | — | — | No service trains the workforce. |
| Travel and Expenses | absent | — | — | No service handles employee travel and expenses. |
| Employee Access | partial | `core-common-user-mgmt` | core | Stores employee and distributor users, roles, permissions, external identities, and audit logs. The security center can check access for a subject. |

## Outside BIAN

These capabilities are implemented and do not correspond to a BIAN service domain in the Value Chain View. Insurance claim administration is in Consumer banking above, because that service domain exists. Loan underwriting and insurance submission files share the Underwriting row in Loans and deposits, because that service domain covers loan decisions and some insurance products. Funeral Policy and Claim Assessment are BIAN service domains and are marked absent above. General policy, premium, treaty, reserve, and binder handling are not those domains.

### Insurance

| Capability | Repository | Layer | What is implemented |
| --- | --- | --- | --- |
| Policy administration | `domain-insurance-policies` | domain | Creates a policy and can cancel, lapse, or expire it. The policy core stores the file, and the insurance journey binds a policy from a quote. |
| Premiums and bordereaux | `domain-insurance-financials` | domain | Maintains premium schedules. The financials core also stores indemnities and bordereaux. |
| Reinsurance treaties | `domain-insurance-reinsurance` | domain | Opens a treaty and can expire it. The reinsurance core stores the treaty. |
| Reserve snapshots | `domain-insurance-reserving` | domain | Records a reserve snapshot and can accept it. The reserving core stores the snapshot. |
| Delegated authority binders | `domain-insurance-delegated-authority` | domain | Opens a binder and can expire it. The delegated-authority core stores the binder. |
| Insurance staff desk | `exp-insurance-terminal` | journey | Gives staff a session to list, update, close, and decide insurance records and to read distributors and masters. |

### Banking work with no matching service domain

| Capability | Repository | Layer | What is implemented |
| --- | --- | --- | --- |
| Customer due diligence | `domain-customer-kyc-kyb` | domain | Runs KYC and KYB cases: evidence, politically exposed persons and adverse media, beneficial owners, corporate documents, and verify, fail, expire, or renew. The KYC core stores screening, risk, and compliance-case records. Onboarding calls these cases before it completes a person or a business. |
| Loan-loss provisioning | `domain-lending-provisioning-risk` | domain | Opens and closes a provisioning case. The provisioning core stores calculations, stage history, journals, and risk assessments on that case. |
| Distributor network | `domain-distributor-branding` | domain | Keeps distributors, agencies, agents, territories, operations, branding, and signed terms. The distributor catalog ships products, and the distributor core stores the network. |
| Crypto and tokenized account attributes | `core-banking-accounts` | core | An account can carry a wallet address and a blockchain network, and account types include crypto wallet, tokenized asset, digital asset, stablecoin, and NFT collection. |
| Staff finance desk | `exp-finance-terminal` | journey | Gives staff a session to list, update, close, and decide accounts, cards, loan applications, mortgage agreements, supply-chain agreements, collateral cases, collection cases, provisioning cases, and AML cases. |
| Company match | `domain-data-business-intelligence` | domain | Matches a company through an external company-information service. |
