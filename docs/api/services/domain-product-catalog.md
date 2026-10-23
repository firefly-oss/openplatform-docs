# domain-product-catalog

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/domain-product-catalog) · [Complete contract](../contracts/domain-product-catalog/openapi.yml)

**Provenance:** base revision `730466b64cc0caec600cbd385c60c08c0b2785b8`; current copied input SHA256 `a10e67ce69377e81a5c03bda84ff408d80a3e906364d92ef3e11bc1df9bb81ea`. [Baseline source](https://github.com/fireflysoftwaresolutions/domain-product-catalog/blob/730466b64cc0caec600cbd385c60c08c0b2785b8/domain-product-catalog-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `POST` | `/api/v1/products` | `registerProduct` | `200` |
| `POST` | `/api/v1/products/{productId}/suspend` | `suspendProduct` | `200` |
| `POST` | `/api/v1/products/{productId}/retire` | `retireProduct` | `200` |
| `POST` | `/api/v1/products/{productId}/resume` | `resumeProduct` | `200` |
| `POST` | `/api/v1/products/{productId}/publish` | `publishProduct` | `200` |
| `POST` | `/api/v1/products/{productId}/posting-rule-set` | `linkPostingRuleSet` | `200` |
| `GET` | `/api/v1/products/{productId}` | `getProductInfo` | `200` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`ProductDTO`, `RegisterFeeApplicationRuleCommand`, `RegisterFeeComponentCommand`, `RegisterFeeStructureCommand`, `RegisterProductBundleCommand`, `RegisterProductBundleItemCommand`, `RegisterProductCategoryCommand`, `RegisterProductCommand`, `RegisterProductDocumentationCommand`, `RegisterProductDocumentationRequirementCommand`, `RegisterProductFeatureCommand`, `RegisterProductFeeStructureCommand`, `RegisterProductInfoCommand`, `RegisterProductLifecycleCommand`, `RegisterProductLimitCommand`, `RegisterProductLocalizationCommand`, `RegisterProductPricingCommand`, `RegisterProductPricingLocalizationCommand`, `RegisterProductRelationshipCommand`, `RegisterProductSubtypeCommand`, `RegisterProductVersionCommand`

## Contract explorer

<swagger-ui src="../contracts/domain-product-catalog/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
