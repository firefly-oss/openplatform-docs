# core-common-product-mgmt

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/core-common-product-mgmt) · [Complete contract](../contracts/core-common-product-mgmt/openapi.yml)

**Provenance:** base revision `73104164893dc1714adeffb443d529b6c993d8f5`; current copied input SHA256 `be68a9932684c422409503ece0d413edfa0ad84e3695af38b19f2487b30329b1`. [Baseline source](https://github.com/fireflysoftwaresolutions/core-common-product-mgmt/blob/73104164893dc1714adeffb443d529b6c993d8f5/core-common-product-mgmt-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/products/{productId}` | `getProductById` | `200`, `404` |
| `PUT` | `/api/v1/products/{productId}` | `updateProduct` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/products/{productId}` | `deleteProduct` | `204`, `404` |
| `GET` | `/api/v1/products/{productId}/versions/{versionId}` | `getProductVersionById` | `200`, `404` |
| `PUT` | `/api/v1/products/{productId}/versions/{versionId}` | `updateProductVersion` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/products/{productId}/versions/{versionId}` | `deleteProductVersion` | `204`, `404` |
| `GET` | `/api/v1/products/{productId}/relationships/{relationshipId}` | `getRelationshipById` | `200`, `404` |
| `PUT` | `/api/v1/products/{productId}/relationships/{relationshipId}` | `updateRelationship` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/products/{productId}/relationships/{relationshipId}` | `deleteRelationship` | `204`, `404` |
| `GET` | `/api/v1/products/{productId}/localizations/{localizationId}` | `getLocalizationById` | `200`, `404` |
| `PUT` | `/api/v1/products/{productId}/localizations/{localizationId}` | `updateLocalization` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/products/{productId}/localizations/{localizationId}` | `deleteLocalization` | `204`, `404` |
| `GET` | `/api/v1/products/{productId}/documentation/{docId}` | `getDocumentationById` | `200`, `404` |
| `PUT` | `/api/v1/products/{productId}/documentation/{docId}` | `updateDocumentation` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/products/{productId}/documentation/{docId}` | `deleteDocumentation` | `204`, `404` |
| `GET` | `/api/v1/products/{productId}/documentation-requirements/{requirementId}` | `getDocumentationRequirementById` | `200`, `404` |
| `PUT` | `/api/v1/products/{productId}/documentation-requirements/{requirementId}` | `updateDocumentationRequirement` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/products/{productId}/documentation-requirements/{requirementId}` | `deleteDocumentationRequirement` | `204`, `404` |
| `GET` | `/api/v1/products/{productId}/configurations/{configId}` | `getConfigurationById` | `200`, `404` |
| `PUT` | `/api/v1/products/{productId}/configurations/{configId}` | `updateConfiguration` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/products/{productId}/configurations/{configId}` | `deleteConfiguration` | `204`, `404` |
| `GET` | `/api/v1/categories/{categoryId}` | `getCategoryById` | `200`, `404` |
| `PUT` | `/api/v1/categories/{categoryId}` | `updateCategory` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/categories/{categoryId}` | `deleteCategory` | `204`, `404` |
| `POST` | `/api/v1/products` | `createProduct` | `201`, `400` |
| `POST` | `/api/v1/products/{productId}/versions` | `createProductVersion` | `201`, `400`, `404` |
| `POST` | `/api/v1/products/{productId}/versions/filter` | `filterProductVersions` | `200`, `400`, `404` |
| `POST` | `/api/v1/products/{productId}/relationships` | `createRelationship` | `201`, `400`, `404` |
| `POST` | `/api/v1/products/{productId}/relationships/filter` | `filterRelationships` | `200`, `400`, `404` |
| `POST` | `/api/v1/products/{productId}/localizations` | `createLocalization` | `201`, `400`, `404` |
| `POST` | `/api/v1/products/{productId}/localizations/filter` | `filterLocalizations` | `200`, `400`, `404` |
| `POST` | `/api/v1/products/{productId}/documentation` | `createDocumentation` | `201`, `400`, `404` |
| `POST` | `/api/v1/products/{productId}/documentation/filter` | `filterDocumentation` | `200`, `400`, `404` |
| `POST` | `/api/v1/products/{productId}/documentation-requirements` | `createDocumentationRequirement` | `201`, `400`, `404` |
| `POST` | `/api/v1/products/{productId}/documentation-requirements/filter` | `filterDocumentationRequirements` | `200`, `400`, `404` |
| `POST` | `/api/v1/products/{productId}/configurations` | `createConfiguration` | `201`, `400`, `404` |
| `POST` | `/api/v1/products/{productId}/configurations/filter` | `filterConfigurations` | `200`, `400`, `404` |
| `POST` | `/api/v1/products/filter` | `filterProducts` | `200`, `400` |
| `POST` | `/api/v1/categories` | `createCategory` | `201`, `400` |
| `POST` | `/api/v1/categories/filter` | `filterCategories` | `200`, `400` |
| `GET` | `/api/v1/products/{productId}/pricing` | `getProductPricing` | `200`, `404`, `502` |
| `GET` | `/api/v1/products/{productId}/documentation-requirements/mandatory` | `getMandatoryDocumentationRequirements` | `200`, `404` |
| `GET` | `/api/v1/products/{productId}/documentation-requirements/by-type/{docType}` | `getDocumentationRequirementByType` | `200`, `404` |
| `GET` | `/api/v1/products/{productId}/configurations/by-type/{configType}` | `getConfigurationsByType` | `200`, `404` |
| `GET` | `/api/v1/products/{productId}/configurations/by-key/{configKey}` | `getConfigurationByKey` | `200`, `404` |
| `GET` | `/api/v1/products/with-pricing` | `listProductsWithPricing` | `200` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`FeeDefinitionDTO`, `FilterOptions`, `FilterRequestProductCategoryDTO`, `FilterRequestProductConfigurationDTO`, `FilterRequestProductDTO`, `FilterRequestProductDocumentationDTO`, `FilterRequestProductDocumentationRequirementDTO`, `FilterRequestProductLocalizationDTO`, `FilterRequestProductRelationshipDTO`, `FilterRequestProductVersionDTO`, `InterestRateBracketDTO`, `PaginationRequest`, `PaginationResponse`, `ProductCategoryDTO`, `ProductConfigurationDTO`, `ProductDTO`, `ProductDocumentationDTO`, `ProductDocumentationRequirementDTO`, `ProductLocalizationDTO`, `ProductPricingDTO`, `ProductRelationshipDTO`, `ProductVersionDTO`, `RangeFilter`, `RangeObject`

## Contract explorer

<swagger-ui src="../contracts/core-common-product-mgmt/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
