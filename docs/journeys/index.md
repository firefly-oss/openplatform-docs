# Journeys

Each journey below is an experience service that is on main, or a direct call to a domain when no experience service exists. The experience service keeps the screens. The domain runs the saga. The core keeps the rows.

A decision, when the journey needs one, is `POST /api/v1/decisions` on `domain-lending-credit-scoring`. The published experience modules do not contain that client yet. `journeyStep` is already defined for onboarding, a lending application, an insurance quote, an insurance bind, and a claim. See [Decision](../catalog/decision.md).

`AccessPort` is not in those experience modules on main. Do not describe a sample access decision as something you can call today.

A later process engine can implement the port that today calls a domain service. That engine is not running in this train.

There is no staff repository for employee identity or impersonation. Those terminals are omitted.

## Choose a journey

- [Onboarding](onboarding.md) for a new person or company.
- [Customer](customer.md) for the signed-in profile and the party graph.
- [Accounts and cards](accounts-cards.md) for deposit accounts and cards.
- [Lending](lending.md) for eleven lending domains. Credit cards have no domain orchestrator.
- [Insurance](insurance.md) for seven domains and seven cores. There is no `exp-insurance` repository.

Other experience services, the distributor portal, channel startup, and notifications are in the [journey catalog](../catalog/journeys.md).
