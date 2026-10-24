# Concepts and vocabulary

These definitions connect the business manual to the service contracts. A term's API spelling and enum values remain defined by its producer.

| Term | Meaning in this manual | Practical consequence |
| --- | --- | --- |
| Actor / subject | Authenticated human or service making a request | Derive identity from trusted context, not a supplied party UUID |
| Party | Individual or organization represented in customer records | Party identity is distinct from login identity and tenant |
| Tenant | Scope within which data and authority are governed | Preserve it through decisions and downstream calls |
| Delegated authority | Permission to act for another party within defined limits | Record the employee/distributor, represented party, scope, and reason |
| Experience | Service that composes a channel-facing business interaction | Returns a result meaningful to the customer or employee |
| Domain | Boundary that owns business intent and coordination | Defines rules, prerequisites, and participating authorities |
| Core | Service that owns durable records and local invariants | Is the authority for its persisted IDs and effects |
| Port / adapter | Explicit application interface / selected implementation | Verify interface, implementation, and runtime selection together |
| SDK | Generated or published typed client for a producer contract | Match producer version; it does not supply business authorization |
| CQRS | Separate command and query contracts/dispatch | Does not inherently imply event sourcing or separate databases |
| Saga | Dependent steps with configured compensations | Compensation is another fallible business action |
| TCC | Try, confirm, cancel coordination | Define what is reserved, by whom, and how recovery survives restart |
| Idempotency | Repeating the same action does not duplicate its effect | Compare immutable input and retain the result at the owning boundary |
| Correlation | Linking observations from related processing | A tracing ID alone does not prevent duplicate writes |
| Projection | Derived or cached view of authoritative facts | State freshness and rebuild it without replaying money commands |
| Posting | A financial aggregate with accounting legs | Balance sides and currencies within the defined local transaction |
| Reservation / hold | A provisional commitment with defined authority | A pending ledger row alone does not enforce available funds |
| Reversal | Linked opposite financial effect retaining the original | Do not delete or rewrite posted history |
| Settlement / finality | The external financial obligation reaches its defined final outcome | Provider acknowledgment and local POSTED are separate facts |
| Reconciliation | Compare independently owned records and resolve differences | Retain populations, cutoffs, matches, and assigned exceptions |
| Effective date | When a business condition applies | Distinguish it from when the system recorded or processed it |
| Underwriting | Authorized assessment of risk and offered terms | Referral or a score alone is not approval |
| Bind | Acceptance that establishes insurance coverage under applicable conditions | A policy record status alone does not prove authorized binding |
| Endorsement | Effective change to an existing policy | Retain prior terms and financial consequences |
| Reserve | Estimated provision for an obligation under a defined method | Distinguish claim/policy reserves from cash reservation |
| Premium | Consideration for insurance coverage | Billing, collection, allocation, earning, and refund are separate events |
| Reinsurance | Transfer of defined insurance risk to a reinsurer | Track ceded premium, recoverables, limits, and counterparty exposure |
| Fixture / sandbox | Controlled synthetic collaborator or environment | Its success does not establish a live external outcome |
| Qualification | Evidence that a specified implementation boundary passed checks | State exact scope, artifacts, and mock boundaries |
| Acceptance | Authorized conclusion that a required journey works in its intended context | Requires evidence beyond contract declaration and local fixtures |

When reporting a result, name the owner and the fact: “the ledger retained one posted aggregate” is more precise than “the transfer worked.” “The synthetic signature lifecycle is completed” is different from “the customer legally signed the agreement.” This vocabulary lets business and engineering teams discuss the same evidence without overstating it.
