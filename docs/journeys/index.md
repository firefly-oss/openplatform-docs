# Business journeys

A journey follows a business obligation from the first request through servicing, exceptions, and closure. Read it as a connected process: a record created in one core becomes a prerequisite for a decision elsewhere, and a financial effect has to reconcile with the product that caused it.

## Choose a lifecycle

| Chapter | Business question | Worked source boundary |
| --- | --- | --- |
| [Operational banking](banking.md) | How do accounts, cards, payments, and consent fit together? | Ownership map across product records and financial effects |
| [Accounts](accounts.md) | How is an account opened, funded, serviced, restricted, and closed? | Actual SDK and disposable account database; stored customer position |
| [Cards](cards.md) | How does issuance lead to authorization, clearing, billing, and disputes? | Typed issuance contract and authorization/clearing saga source |
| [Payments](payments.md) | How does intent become a provisional, posted, and externally reconciled effect? | Atomic ledger request and synthetic experience/domain/core chain |
| [Lending](lending.md) | How do approved terms become a funded and serviced obligation? | Simulation, amortization, early-repayment coordination, collections records |
| [Insurance](insurance.md) | How do submission, policy, claim, and insurance finance connect? | Typed policy creation and actual SDK/controller validation |
| [Shared services](shared.md) | How are identity, customer, product, agreement, evidence, and communications reused? | Managed synthetic signature lifecycle and email sandbox |

## A consistent way to follow each chapter

Each chapter first explains the business model and owning services. Its worked example uses fields from actual DTOs or an existing repository test. The recovery section then explains what to inspect when the normal path stops. Implementation links lead to the DTOs, handlers, adapters, and fixtures behind the example.

Each chapter distinguishes current service behavior from the policies and integrations needed for the complete institutional process. A repository fixture makes its mock and infrastructure boundaries explicit. Combine the chapter's recovery guidance with the [operations guide](../operations/index.md) for the environment you deploy.

## Follow the same customer across products

A party may own an account, borrow under a loan agreement, and be insured under a policy. The party ID provides a relationship, but each product has its own eligibility, effective dates, authority, and obligations. An open account does not establish credit approval; a paid premium does not establish every claim's coverage; a completed signature simulation does not establish legal execution.

The reusable foundation is [identity, evidence, product, and contract](shared.md). The financial connection is [records, money, and reconciliation](../introduction/data-and-money.md). Together they let teams compose products while preserving the decisions that each product owner must make.
