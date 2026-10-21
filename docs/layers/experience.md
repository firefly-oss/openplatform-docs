# Experience

Experience services own the customer journey. They do not own the database and they do not run another service's saga.

Each step calls a domain service today. A later process engine can implement that same port. That engine is not running. `AccessPort` is not in these modules on main, so this page does not describe a sample access decision.

Applications `app-authenticator` and `app-configurator-masters` are gateways in front of domain services. `bfc-initconfig` serves channel startup data. They are listed in the catalog, not in the `exp-*` list below.

## Repositories

- [exp-accounts](../catalog/journeys.md#exp-accounts)
- [exp-cards](../catalog/journeys.md#exp-cards)
- [exp-channel-management](../catalog/journeys.md#exp-channel-management)
- [exp-distributor](../catalog/journeys.md#exp-distributor)
- [exp-lending](../catalog/journeys.md#exp-lending)
- [exp-notifications](../catalog/journeys.md#exp-notifications)
- [exp-onboarding](../catalog/journeys.md#exp-onboarding)
- [exp-profile](../catalog/journeys.md#exp-profile)
- [exp-security](../catalog/security.md#exp-security)

Journey narratives: [Journeys](../journeys/index.md).
