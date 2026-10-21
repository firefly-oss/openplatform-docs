# Insurance

Insurance is seven independent domains. Each one orchestrates its own core. There is no `exp-insurance` repository in the release list, so there is no single insurance journey service in front of them. A channel calls the domain it needs. A later experience service can implement the same port. A later process engine can replace that domain adapter. This page does not describe either of those as already running.

| Subject | Domain | Core |
| --- | --- | --- |
| Policies | `domain-insurance-policies` | `core-insurance-policies` |
| Underwriting | `domain-insurance-underwriting` | `core-insurance-underwriting` |
| Claims | `domain-insurance-claims` | `core-insurance-claims` |
| Financials | `domain-insurance-financials` | `core-insurance-financials` |
| Delegated authority | `domain-insurance-delegated-authority` | `core-insurance-delegated-authority` |
| Reinsurance | `domain-insurance-reinsurance` | `core-insurance-reinsurance` |
| Reserving | `domain-insurance-reserving` | `core-insurance-reserving` |

The saga on each domain is create, update, status change, and close, with compensation, and only when that core allows the close. The domain calls its core SDK and does not import the core's internals.

These domains do not move money and do not certify IFRS 17 or Solvency II. Financials stores premium schedules, commissions, refunds, bordereaux, premium audits, and credit-control records. Those are records. They are not a payment.

Catalog, with one entry per repository: [Insurance](../catalog/insurance.md).
