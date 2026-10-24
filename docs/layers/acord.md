# ACORD alignment for OpenPlatform insurance

This file maps Firefly OpenPlatform insurance services onto the ACORD Capability Model. It is a mapping of services that exist in this workspace. It is not an ACORD assessment.

Insurance services do not move money. Where a capability collects or pays, the banking payments journey `exp-payments` and the ledger `core-banking-ledger` own the movement and the ledger entry. An insurance row may store an amount and a payment-order id aimed at `core-banking-payments`. That id is not a ledger posting.

## Source

Source: the public name is still the ACORD Capability Model, a facet of the ACORD Reference Architecture. Read on 20 October 2026 at https://www.acord.org/standards-architecture/reference-architecture. That source identifies the ACORD Capability Model and lists its published editions. The same page lists ACORD Information Model 2.13 and names the concepts Policy, Product, Party, and Claims.

Source: the 21 May 2025 ACORD note at https://www.acord.org/ACORD-about/acord-news/2025/05/21/acord-reference-architecture-updates-capability-model-business-glossary still calls it the ACORD Capability Model, describes the high-level business capabilities and names Business Management and Enterprise Services among them. It does not rename the model.

Source: the 29 January 2026 ACORD note at https://www.acord.org/ACORD-about/acord-news/2026/01/29/acord-releases-interactive-online-versions-of-reference-architecture-models retains the Reference Architecture structure. It gives underwriting, policy administration, and digital marketing as examples of value-chain activities. The full Capability Model 2.6 decomposition is member access. This file does not treat "policy administration" as a new title. In the published model that activity is Contract Administration.

Source: second-level names below come from *The ACORD Capability Model* (ACORD Corporation, first printing October 2010) and from the ACORD 2011 framework slides that list the top-level capabilities: Business Management, Channel Management, Claims, Contract Administration, Customer Service, Enterprise Services, Finance, Marketing, Product, and Sales. Where a 2.6 name was not on a public page, the row was left out.

This mapping uses that capability model and the Information Model names Policy, Product, Party, and Claims. It does not use IFRS 17, Solvency II, or the IAIS Insurance Core Principles.

## How a row is marked

A row exists only when the capability name is public and an insurance journey, domain, or core performs it, or when that named capability has no OpenPlatform service.

- **covers** means an insurance service performs that capability.
- **partial** means the service performs part of it and leaves out a material part.
- **absent** means the capability is in the public model and OpenPlatform has no service that performs it.

Read each capability alongside its actual behavior and boundaries, including pricing, fraud detection, reserve calculation, and cash movement.

Groups follow the ACORD capabilities the insurance code can support: Channel Management, Sales, Contract Administration, Underwriting, Claims, Finance, and one Business Management activity. Underwriting is the shared capability the 2010 model places with Contract Administration process maps, and the January 2026 note lists it beside policy administration. Customer Service, Marketing, Product, and the rest of Business Management and Enterprise Services are not opened here. A Policy or submission stores a product id aimed at `core-common-product-mgmt`, which is outside these insurance repositories. Digital marketing appears only as an example on the January 2026 page, without a formal lower-level title on that page.

## Journey

`exp-insurance` is the insurance journey, at https://github.com/fireflysoftwaresolutions/exp-insurance. It calls `domain-insurance-underwriting`, `domain-insurance-policies`, and `domain-insurance-claims`. Reinsurance, reserving, and insurance financials are not on this journey. Staff administration is `exp-insurance-terminal`.

Quote, bind, and claim registration read a credit report and call `domain-lending-credit-scoring`. A decline stops before the insurance domain. Status, withdraw, cancel, and close do not take that decision.

Operations on the journey:

| Operation | Path |
| --- | --- |
| Create, read, update, status, and withdraw a quote | `/api/v1/experience/insurance/quotes` |
| Bind, read, update, status, and cancel a policy | `/api/v1/experience/insurance/policies` |
| Register, read, update, status, and close a claim | `/api/v1/experience/insurance/claims` |

The quote is an underwriting submission. The catalog default is received for a quote, bound for a policy, and notified for a claim. Endorse and renew are not operations on this journey or on `domain-insurance-policies`. They are not mapped.

## Channel Management

Distribution in the model is Channel Management: channel development, channel strategy, producer management, channel execution, and channel planning.

| ACORD capability | Repository | Layer | Mark | What is implemented |
| --- | --- | --- | --- | --- |
| Producer management | exp-insurance-terminal | journey | partial | The staff terminal lists distributors from `core-common-distributor-mgmt` and writes an attachment to that distributor's audit log, and `core-insurance-underwriting` can store a distributor id on a submission. |
| Producer compensation | core-insurance-financials | core | partial | The financials core stores commission amounts with a payment-order id for `core-banking-payments`, `domain-insurance-financials` does not post commission, and `exp-payments` and `core-banking-ledger` own the payment and the ledger entry. |
| Channel development | none | none | absent | No OpenPlatform service develops an insurance distribution channel. |
| Channel strategy | none | none | absent | No OpenPlatform service sets insurance channel strategy. |
| Channel planning | none | none | absent | No OpenPlatform service plans producer production. |
| Producer Agreement Administration | none | none | absent | No OpenPlatform service administers a producer agreement, and binder records stay in the unmapped section below. |

## Sales

Sales has one sub-capability in the published model, Contract Acquisition, whose execution process maps include Provide Quote and Apply for Insurance.

| ACORD capability | Repository | Layer | Mark | What is implemented |
| --- | --- | --- | --- | --- |
| Sales Execution | exp-insurance | journey | partial | The journey creates, reads, updates, changes status, and withdraws an underwriting submission as the quote, and it leaves the priced quote record on `core-insurance-underwriting` unwritten. |

## Contract Administration

The January 2026 note calls this part of the value chain policy administration. The capability name in the model is Contract Administration. Data names are Policy and Party.

| ACORD capability | Repository | Layer | Mark | What is implemented |
| --- | --- | --- | --- | --- |
| Contract Lifecycle Management | exp-insurance | journey | partial | The journey binds, reads, updates, changes status, and cancels a Policy, `domain-insurance-policies` also lapses and expires it, and `core-insurance-policies` enforces quote, bound, in force, lapsed, canceled, and expired while storing coverages, Party roles, insured objects, a certificate, and motor, property, liability, life, and health detail. |
| Contract Investment Administration | none | none | absent | No OpenPlatform service administers investments on a contract, and life detail stores a sum assured and a term. |

The stored policy status for canceled is `CANCELLED`. A lapsed Policy can return to in force through the core status machine. The journey has no lapse or expire path of its own. Those two closes are on the policies domain.

## Underwriting

| ACORD capability | Repository | Layer | Mark | What is implemented |
| --- | --- | --- | --- | --- |
| Underwriting | core-insurance-underwriting | core | partial | The underwriting core stores submission risk, evidence references, clearance, referral, decision, subjectivity, loss run, statement of value, a sanctions-screen result, and a priced quote, and it does not rate the risk or apply authority, while `domain-insurance-underwriting` moves submission status and the staff terminal can decline or withdraw by that status. |

The journey's quote, quote status, and withdraw call that same submission status path. They are mapped under Sales Execution. The domain does not call the sanctions, referral, or decision APIs.

## Claims

The Information Model name is Claims. Second-tier names are Claims Lifecycle Management, Fraud Management, Claims Handling, Claims Recovery, Dispute Resolution, and Claims Inquiry.

| ACORD capability | Repository | Layer | Mark | What is implemented |
| --- | --- | --- | --- | --- |
| Claims Lifecycle Management | exp-insurance | journey | partial | The journey registers a Claim, updates it, changes its status, and closes it, `domain-insurance-claims` and the staff terminal can deny one, and `core-insurance-claims` enforces notified, open, under assessment, reserved, settled, closed, reopened, and denied. |
| Claims Inquiry | exp-insurance | journey | partial | The journey reads one Claim, and `exp-insurance-terminal` lists and opens claims, with no separate inquiry case. |
| Fraud Management | core-insurance-claims | core | partial | The claims core stores fraud indicators and special-investigation referrals and does not detect fraud, and `domain-insurance-claims` does not call those operations. |
| Claims Handling | core-insurance-claims | core | partial | The claims core stores coverage checks, triage, adjuster assignment, assessment, denial, evidence references, case reserves, and an authorized settlement with a payment-order id for `core-banking-payments`, the claims domain does not write those rows, and `exp-payments` and `core-banking-ledger` own any payment and the ledger entry. |
| Claims Recovery | core-insurance-claims | core | partial | The claims core stores subrogation, salvage, and contribution amounts and does not collect them, and `exp-payments` and `core-banking-ledger` own any cash movement and the ledger entry. |
| Dispute Resolution | none | none | absent | No OpenPlatform service manages litigation or another dispute on a claim. |
| Catastrophe Planning | none | none | absent | No OpenPlatform service plans for a catastrophe or simulates loss projections. |

## Finance

Finance in the model includes Billing and Payments, split into Billing and Collection and Payment Management, and the process map Analyze Reserves.

| ACORD capability | Repository | Layer | Mark | What is implemented |
| --- | --- | --- | --- | --- |
| Billing and Collection | core-insurance-financials | core | partial | The financials core stores a premium schedule, installments, a premium audit, and a credit-control case, with each installment holding an amount and a payment-order id for `core-banking-payments`, `domain-insurance-financials` opens, cancels, and completes the schedule, and `exp-payments` and `core-banking-ledger` own collection and the ledger entry. |
| Payment Management | core-insurance-financials | core | partial | The financials core stores premium refunds and indemnity disbursements as amounts plus a payment-order id for `core-banking-payments`, the financials domain does not pay them, and `exp-payments` and `core-banking-ledger` own the movement and the ledger entry. |
| Analyze Reserves | core-insurance-reserving | core | partial | The reserving core stores a snapshot, loss-development triangle cells, and a reporting extract produced elsewhere and does not calculate reserves, and `domain-insurance-reserving` can mark the snapshot accepted. |
| Investment Management | none | none | absent | No OpenPlatform service administers an insurer investment portfolio. |

Case reserves on a single claim stay in Claims Handling. The reserving extract is stored input for Analyze Reserves. It is not a statutory filing.

## Business Management

| ACORD capability | Repository | Layer | Mark | What is implemented |
| --- | --- | --- | --- | --- |
| Perform Statutory Reporting | none | none | absent | No OpenPlatform service files a statutory insurance return, and a reserving extract is stored input only. |

## Endorse and renew

Endorse and renew are not mapped. `exp-insurance` has no endorse or renew operation, and `domain-insurance-policies` has no endorse or renew saga. `core-insurance-policies` can store a policy transaction whose type is `ENDORSEMENT`, `RENEWAL`, `NEW_BUSINESS`, `CANCELLATION`, or `REINSTATEMENT`. Creating that row does not move Policy status. Cancellation of a Policy is the journey cancel operation mapped under Contract Lifecycle Management.

## Insurance areas with no ACORD capability

These services exist on disk. The public Capability Model text read for this file does not name a capability they perform, so they have no row.

**Reinsurance.** `core-insurance-reinsurance` and `domain-insurance-reinsurance` store treaties and move them through draft, active, run-off, and expired. The core also stores policy cessions, with a ceded premium and a payment-order id, and claim recoveries. `exp-payments` and `core-banking-ledger` own any cash movement. The public names nearby are Manage Reinsurance Requirements, an Enterprise Services risk process, and Define Product Reinsurance Requirements, a product-design process. Neither is treaty, cession, or recovery administration.

**Delegated authority.** `core-insurance-delegated-authority` and `domain-insurance-delegated-authority` store binders, authority limits, and coverholder appointments. A binder moves through draft, active, suspended, and expired. The service does not decide whether a risk is inside authority. The public text read here does not name delegated authority, binders, or coverholders. Those records are not treated as Producer Agreement Administration.

**Bordereaux.** `core-insurance-financials` stores a bordereau and its lines. `domain-insurance-financials` does not open or close them. No public capability name for a bordereau was confirmed.

`exp-finance-terminal` is a staff terminal for banking and lending records and is not an insurance service, so it is not in this mapping.
