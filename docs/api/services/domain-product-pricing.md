# domain-product-pricing

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/domain-product-pricing) · [Complete contract](../contracts/domain-product-pricing/openapi.yml)

**Provenance:** base revision `186703e2a036be69e5bc015cb60b0ee013b9a53a`; current copied input SHA256 `2ceca21ed752766dc93acb9d2f4e3122556fc77c05b307bad3fce668057cd4dd`. [Baseline source](https://github.com/fireflysoftwaresolutions/domain-product-pricing/blob/186703e2a036be69e5bc015cb60b0ee013b9a53a/domain-product-pricing-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `PUT` | `/api/v1/pricing/{pricingId}` | `amendPricing` | `200` |
| `PUT` | `/api/v1/pricing/fees/schemes/{schemeId}/components/{componentId}` | `updateFeeRule` | `200` |
| `POST` | `/api/v1/pricing` | `registerPricing` | `200` |
| `POST` | `/api/v1/pricing/fees/schemes` | `defineFeeScheme` | `200` |
| `POST` | `/api/v1/pricing/eligibility` | `publishEligibility` | `200` |
| `POST` | `/api/v1/pricing/eligibility/{eligibilityId}/evaluate` | `evaluateEligibility` | `200` |
| `PATCH` | `/api/v1/pricing/eligibility/{eligibilityId}` | `adjustEligibility` | `200` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`AdjustEligibilityCommand`, `EligibilityResultDTO`, `EvaluateEligibilityCommand`, `PublishEligibilityCommand`, `RegisterFeeApplicationRuleCommand`, `RegisterFeeComponentCommand`, `RegisterFeeSchemaCommand`, `RegisterFeeStructureCommand`, `RegisterProductFeeStructureCommand`, `RegisterProductPricingCommand`, `UpdateFeeApplicationRuleCommand`, `UpdateProductPricingCommand`

## Contract explorer

<swagger-ui src="../contracts/domain-product-pricing/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
