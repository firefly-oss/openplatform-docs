# Insurance cores

OpenPlatform now publishes the insurance **core** repositories. They store policy, underwriting, claims, financial, delegated-authority, reinsurance, and reserving records. Domain and experience services for these areas are not published. Parties stay in [customers](../modules/customers.md). Agreements stay in [agreements](../modules/agreements.md). Payment execution stays in [payments](../modules/payments.md).

Public anchor: <https://fireflysoftware.io/openplatform/#insurance-development>

| Area | Core repository | Page |
|------|-----------------|------|
| Policy lifecycle | `core-insurance-policies` | [policy lifecycle](policy-lifecycle.md) |
| Underwriting operations | `core-insurance-underwriting` | [underwriting](underwriting.md) |
| Claims operations | `core-insurance-claims` | [claims](claims.md) |
| Insurance financial flows | `core-insurance-financials` | [financial flows](financial-flows.md) |
| Delegated authority | `core-insurance-delegated-authority` | [delegated authority](delegated-authority.md) |
| Reinsurance records | `core-insurance-reinsurance` | [reinsurance](reinsurance.md) |
| Reserving data | `core-insurance-reserving` | [reserving](reserving.md) |

## What a core service is

Each repository follows the same shape as the banking cores: `interfaces`, `models`, `core`, `web`, and `sdk`. It owns its PostgreSQL tables and exposes `/api/v1` through Spring WebFlux. It does not call another core service. Cross-service links are UUID columns without a database foreign key.

Developed by Firefly Software Foundation. Development contact: `dev@fireflysoftware.io`. Platform host: <https://openplatform.fireflysoftware.io>.

## What is not in these repositories

- Domain orchestration and experience journeys.
- Rating, rules execution, and actuarial calculation.
- A regulatory filing. Reserving extracts are stored data, not a certified return.
- The person, the contract, the product definition, or the payment order. Those remain in the shared and banking cores.

Parent pin: Jafly **26.10.20** / Spring Boot **4.1.1** / Java **25**. OpenPlatform artifact train: `io.fireflysoftware` **26.10.3**.

## Related

- [Business modules catalogue](../modules/catalog.md)
- [OpenAPI index](../reference/openapi.md)
- [Event contracts](../reference/events.md)
- [Architecture](../architecture/overview.md)
