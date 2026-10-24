# domain-core-pricing-engine

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/domain-core-pricing-engine) · [Complete contract](../contracts/domain-core-pricing-engine/openapi.yml)

**Provenance:** base revision `bf30e82bdd09b606e9b4d8d8d462faec6b34f917`; current copied input SHA256 `81cd02b219cd9ea8fb8c043625c5e6cb86c4fa4d82804cd1684060df7ec4e289`. [Baseline source](https://github.com/fireflysoftwaresolutions/domain-core-pricing-engine/blob/bf30e82bdd09b606e9b4d8d8d462faec6b34f917/domain-core-pricing-engine-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `POST` | `/api/v1/pricing-engine/simulations/calculate` | `calculateSimulation` | `200`, `400`, `404` |
| `GET` | `/api/v1/pricing-engine/products/{productId}/pricing` | `getEngineProductPricing` | `200`, `400`, `404` |
| `GET` | `/api/v1/pricing-engine/products` | `listEngineProductsWithPricing` | `200`, `400`, `404` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`CalculateSimulationCommand`, `FeeDefinitionDTO`, `InterestRateBracketDTO`, `ProductPricingDTO`, `SimulationCalculationResultDTO`

## Contract explorer

<swagger-ui src="../contracts/domain-core-pricing-engine/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
