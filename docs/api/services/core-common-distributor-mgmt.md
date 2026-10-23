# core-common-distributor-mgmt

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/core-common-distributor-mgmt) · [Complete contract](../contracts/core-common-distributor-mgmt/openapi.yml)

**Provenance:** base revision `51f3acad982fcc7b7bc09dd4f9764ee9fea4098f`; current copied input SHA256 `c2b64b4e279802a48531b174a7aa1ba97c8ab31b526798f15fee1a2a41920d69`. [Baseline source](https://github.com/fireflysoftwaresolutions/core-common-distributor-mgmt/blob/51f3acad982fcc7b7bc09dd4f9764ee9fea4098f/core-common-distributor-mgmt-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/terms-and-conditions-templates/{templateId}` | `getTemplateById` | `200`, `404`, `500` |
| `PUT` | `/api/v1/terms-and-conditions-templates/{templateId}` | `updateTemplate` | `200`, `400`, `404`, `409`, `500` |
| `DELETE` | `/api/v1/terms-and-conditions-templates/{templateId}` | `deleteTemplate` | `204`, `404`, `500` |
| `PUT` | `/api/v1/shipments/{id}/status` | `updateShipmentStatus` | `200`, `400`, `404`, `500` |
| `GET` | `/api/v1/shipments/{id}` | `getShipmentById` | `200`, `404`, `500` |
| `PUT` | `/api/v1/shipments/{id}` | `updateShipment` | `200`, `400`, `404`, `500` |
| `DELETE` | `/api/v1/shipments/{id}` | `deleteShipment` | `204`, `404`, `500` |
| `GET` | `/api/v1/product-categories/{id}` | `getProductCategoryById` | `200`, `404`, `500` |
| `PUT` | `/api/v1/product-categories/{id}` | `updateProductCategory` | `200`, `400`, `404`, `500` |
| `DELETE` | `/api/v1/product-categories/{id}` | `deleteProductCategory` | `204`, `404`, `500` |
| `GET` | `/api/v1/lending-types/{id}` | `getLendingTypeById` | `200`, `404`, `500` |
| `PUT` | `/api/v1/lending-types/{id}` | `updateLendingType` | `200`, `400`, `404`, `500` |
| `DELETE` | `/api/v1/lending-types/{id}` | `deleteLendingType` | `204`, `404`, `500` |
| `GET` | `/api/v1/lending-contracts/{id}` | `getLendingContractById` | `200`, `404`, `500` |
| `PUT` | `/api/v1/lending-contracts/{id}` | `updateLendingContract` | `200`, `400`, `404`, `500` |
| `DELETE` | `/api/v1/lending-contracts/{id}` | `deleteLendingContract` | `204`, `404`, `500` |
| `GET` | `/api/v1/distributors/{distributorId}/terms-and-conditions/{termsId}` | `getDistributorTermsAndConditionsById` | `200`, `404`, `500` |
| `PUT` | `/api/v1/distributors/{distributorId}/terms-and-conditions/{termsId}` | `updateDistributorTermsAndConditions` | `200`, `400`, `404`, `500` |
| `DELETE` | `/api/v1/distributors/{distributorId}/terms-and-conditions/{termsId}` | `deleteDistributorTermsAndConditions` | `204`, `404`, `500` |
| `GET` | `/api/v1/distributors/{distributorId}/simulations/{simulationId}` | `getDistributorSimulationById` | `200`, `404`, `500` |
| `PUT` | `/api/v1/distributors/{distributorId}/simulations/{simulationId}` | `updateDistributorSimulation` | `200`, `400`, `404`, `500` |
| `DELETE` | `/api/v1/distributors/{distributorId}/simulations/{simulationId}` | `deleteDistributorSimulation` | `204`, `404`, `500` |
| `GET` | `/api/v1/distributors/{distributorId}/products/{productId}/lending-configurations/{configId}` | `getLendingConfigurationById` | `200`, `404`, `500` |
| `PUT` | `/api/v1/distributors/{distributorId}/products/{productId}/lending-configurations/{configId}` | `updateLendingConfiguration` | `200`, `400`, `404`, `500` |
| `DELETE` | `/api/v1/distributors/{distributorId}/products/{productId}/lending-configurations/{configId}` | `deleteLendingConfiguration` | `204`, `404`, `500` |
| `GET` | `/api/v1/distributors/{distributorId}/products/{productId}` | `getProductById` | `200`, `404`, `500` |
| `PUT` | `/api/v1/distributors/{distributorId}/products/{productId}` | `updateProduct` | `200`, `400`, `404`, `500` |
| `DELETE` | `/api/v1/distributors/{distributorId}/products/{productId}` | `deleteProduct` | `204`, `404`, `500` |
| `GET` | `/api/v1/distributors/{distributorId}/product-catalog/{catalogId}` | `getById` | `200`, `404` |
| `PUT` | `/api/v1/distributors/{distributorId}/product-catalog/{catalogId}` | `update` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/distributors/{distributorId}/product-catalog/{catalogId}` | `delete` | `204`, `404` |
| `GET` | `/api/v1/distributors/{distributorId}/operations/{operationId}` | `getDistributorOperationById` | `200`, `404`, `500` |
| `PUT` | `/api/v1/distributors/{distributorId}/operations/{operationId}` | `updateDistributorOperation` | `200`, `400`, `404`, `500` |
| `DELETE` | `/api/v1/distributors/{distributorId}/operations/{operationId}` | `deleteDistributorOperation` | `204`, `404`, `500` |
| `GET` | `/api/v1/distributors/{distributorId}/contracts/{contractId}` | `getById_1` | `200`, `404` |
| `PUT` | `/api/v1/distributors/{distributorId}/contracts/{contractId}` | `update_1` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/distributors/{distributorId}/contracts/{contractId}` | `delete_1` | `204`, `404` |
| `GET` | `/api/v1/distributors/{distributorId}/configurations/{configurationId}` | `getById_2` | `200`, `404` |
| `PUT` | `/api/v1/distributors/{distributorId}/configurations/{configurationId}` | `update_2` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/distributors/{distributorId}/configurations/{configurationId}` | `delete_2` | `204`, `404` |
| `GET` | `/api/v1/distributors/{distributorId}/brandings/{brandingId}` | `getDistributorBrandingById` | `200`, `404`, `500` |
| `PUT` | `/api/v1/distributors/{distributorId}/brandings/{brandingId}` | `updateDistributorBranding` | `200`, `400`, `404`, `500` |
| `DELETE` | `/api/v1/distributors/{distributorId}/brandings/{brandingId}` | `deleteDistributorBranding` | `204`, `404`, `500` |
| `GET` | `/api/v1/distributors/{distributorId}/authorized-territories/{territoryId}` | `getById_3` | `200`, `404` |
| `PUT` | `/api/v1/distributors/{distributorId}/authorized-territories/{territoryId}` | `update_3` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/distributors/{distributorId}/authorized-territories/{territoryId}` | `delete_3` | `204`, `404` |
| `GET` | `/api/v1/distributors/{distributorId}/audit-logs/{auditLogId}` | `getDistributorAuditLogById` | `200`, `404`, `500` |
| `PUT` | `/api/v1/distributors/{distributorId}/audit-logs/{auditLogId}` | `updateDistributorAuditLog` | `200`, `400`, `404`, `500` |
| `DELETE` | `/api/v1/distributors/{distributorId}/audit-logs/{auditLogId}` | `deleteDistributorAuditLog` | `204`, `404`, `500` |
| `GET` | `/api/v1/distributors/{distributorId}/agents/{agentId}` | `getById_4` | `200`, `404` |
| `PUT` | `/api/v1/distributors/{distributorId}/agents/{agentId}` | `update_4` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/distributors/{distributorId}/agents/{agentId}` | `delete_4` | `204`, `404` |
| `GET` | `/api/v1/distributors/{distributorId}/agent-agencies/{id}` | `getById_5` | `200`, `404`, `500` |
| `PUT` | `/api/v1/distributors/{distributorId}/agent-agencies/{id}` | `update_5` | `200`, `400`, `404`, `500` |
| `DELETE` | `/api/v1/distributors/{distributorId}/agent-agencies/{id}` | `delete_5` | `204`, `404`, `500` |
| `GET` | `/api/v1/distributors/{distributorId}/agencies/{agencyId}` | `getById_6` | `200`, `404` |
| `PUT` | `/api/v1/distributors/{distributorId}/agencies/{agencyId}` | `update_6` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/distributors/{distributorId}/agencies/{agencyId}` | `delete_6` | `204`, `404` |
| `GET` | `/api/v1/distributors/{distributorId}` | `getDistributorById` | `200`, `404`, `500` |
| `PUT` | `/api/v1/distributors/{distributorId}` | `updateDistributor` | `200`, `400`, `404`, `500` |
| `DELETE` | `/api/v1/distributors/{distributorId}` | `deleteDistributor` | `204`, `404`, `500` |
| `GET` | `/api/v1/configuration-scopes/{id}` | `getById_7` | `200`, `404` |
| `PUT` | `/api/v1/configuration-scopes/{id}` | `update_7` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/configuration-scopes/{id}` | `delete_7` | `204`, `404` |
| `GET` | `/api/v1/configuration-data-types/{id}` | `getById_8` | `200`, `404` |
| `PUT` | `/api/v1/configuration-data-types/{id}` | `update_8` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/configuration-data-types/{id}` | `delete_8` | `204`, `404` |
| `GET` | `/api/v1/agent-roles/{id}` | `getById_9` | `200`, `404` |
| `PUT` | `/api/v1/agent-roles/{id}` | `update_9` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/agent-roles/{id}` | `delete_9` | `204`, `404` |
| `GET` | `/api/v1/agencies/{agencyId}/payment-methods/{paymentMethodId}` | `getById_10` | `200`, `404` |
| `PUT` | `/api/v1/agencies/{agencyId}/payment-methods/{paymentMethodId}` | `update_10` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/agencies/{agencyId}/payment-methods/{paymentMethodId}` | `delete_10` | `204`, `404` |
| `POST` | `/api/v1/terms-and-conditions-templates/{templateId}/preview` | `previewGeneration` | `200`, `400`, `404`, `500` |
| `POST` | `/api/v1/terms-and-conditions-templates/filter` | `filterTemplates` | `200`, `400`, `500` |
| `POST` | `/api/v1/terms-and-conditions-templates` | `createTemplate` | `201`, `400`, `409`, `500` |
| `POST` | `/api/v1/shipments/filter` | `filterShipments` | `200`, `400`, `500` |
| `POST` | `/api/v1/shipments` | `createShipment` | `201`, `400`, `500` |
| `GET` | `/api/v1/product-categories` | `getAllProductCategories` | `200`, `500` |
| `POST` | `/api/v1/product-categories` | `createProductCategory` | `201`, `400`, `500` |
| `GET` | `/api/v1/lending-types` | `getAllLendingTypes` | `200`, `500` |
| `POST` | `/api/v1/lending-types` | `createLendingType` | `201`, `400`, `500` |
| `POST` | `/api/v1/lending-contracts/{id}/approve` | `approveLendingContract` | `200`, `400`, `404`, `500` |
| `POST` | `/api/v1/lending-contracts/filter` | `filterLendingContracts` | `200`, `400`, `500` |
| `POST` | `/api/v1/lending-contracts` | `createLendingContract` | `201`, `400`, `500` |
| `POST` | `/api/v1/distributors/{distributorId}/terms-and-conditions/generate/{templateId}` | `generateFromTemplate` | `201`, `400`, `500` |
| `POST` | `/api/v1/distributors/{distributorId}/terms-and-conditions/filter` | `filterDistributorTermsAndConditions` | `200`, `400`, `500` |
| `GET` | `/api/v1/distributors/{distributorId}/terms-and-conditions` | `getTermsAndConditionsByDistributorId` | `200`, `500` |
| `POST` | `/api/v1/distributors/{distributorId}/terms-and-conditions` | `createDistributorTermsAndConditions` | `201`, `400`, `500` |
| `POST` | `/api/v1/distributors/{distributorId}/simulations/filter` | `filterDistributorSimulations` | `200`, `400`, `500` |
| `GET` | `/api/v1/distributors/{distributorId}/simulations` | `getSimulationsByDistributorId` | `200`, `500` |
| `POST` | `/api/v1/distributors/{distributorId}/simulations` | `createDistributorSimulation` | `201`, `400`, `409`, `500` |
| `POST` | `/api/v1/distributors/{distributorId}/products/{productId}/lending-configurations/{configId}/create-contract` | `createLendingContractFromConfiguration` | `201`, `400`, `404`, `500` |
| `POST` | `/api/v1/distributors/{distributorId}/products/{productId}/lending-configurations/filter` | `filterLendingConfigurations` | `200`, `400`, `500` |
| `GET` | `/api/v1/distributors/{distributorId}/products/{productId}/lending-configurations` | `getLendingConfigurationsByProductId` | `200`, `404`, `500` |
| `POST` | `/api/v1/distributors/{distributorId}/products/{productId}/lending-configurations` | `createLendingConfiguration` | `201`, `400`, `500` |
| `POST` | `/api/v1/distributors/{distributorId}/products/filter` | `filterProducts` | `200`, `400`, `500` |
| `GET` | `/api/v1/distributors/{distributorId}/products` | `getProductsByDistributorId` | `200`, `404`, `500` |
| `POST` | `/api/v1/distributors/{distributorId}/products` | `createProduct` | `201`, `400`, `500` |
| `POST` | `/api/v1/distributors/{distributorId}/product-catalog` | `create` | `201`, `400`, `404` |
| `POST` | `/api/v1/distributors/{distributorId}/product-catalog/filter` | `filter` | `200`, `400`, `404` |
| `POST` | `/api/v1/distributors/{distributorId}/operations/filter` | `filterDistributorOperations` | `200`, `400`, `500` |
| `GET` | `/api/v1/distributors/{distributorId}/operations` | `getOperationsByDistributorId` | `200`, `500` |
| `POST` | `/api/v1/distributors/{distributorId}/operations` | `createDistributorOperation` | `201`, `400`, `409`, `500` |
| `POST` | `/api/v1/distributors/{distributorId}/contracts` | `create_1` | `201`, `400`, `404` |
| `POST` | `/api/v1/distributors/{distributorId}/contracts/filter` | `filter_1` | `200`, `400`, `404` |
| `POST` | `/api/v1/distributors/{distributorId}/configurations` | `create_2` | `201`, `400`, `404` |
| `POST` | `/api/v1/distributors/{distributorId}/configurations/filter` | `filter_2` | `200`, `400`, `404` |
| `POST` | `/api/v1/distributors/{distributorId}/brandings/filter` | `filterDistributorBrandings` | `200`, `400`, `500` |
| `POST` | `/api/v1/distributors/{distributorId}/brandings` | `createDistributorBranding` | `201`, `400`, `404`, `500` |
| `POST` | `/api/v1/distributors/{distributorId}/authorized-territories` | `create_3` | `201`, `400`, `404` |
| `POST` | `/api/v1/distributors/{distributorId}/authorized-territories/filter` | `filter_3` | `200`, `400`, `404` |
| `POST` | `/api/v1/distributors/{distributorId}/audit-logs/filter` | `filterDistributorAuditLogs` | `200`, `400`, `500` |
| `POST` | `/api/v1/distributors/{distributorId}/audit-logs` | `createDistributorAuditLog` | `201`, `400`, `404`, `500` |
| `POST` | `/api/v1/distributors/{distributorId}/agents` | `create_4` | `201`, `400`, `404` |
| `POST` | `/api/v1/distributors/{distributorId}/agents/filter` | `filter_4` | `200`, `400`, `404` |
| `POST` | `/api/v1/distributors/{distributorId}/agent-agencies/filter` | `filter_5` | `200`, `400`, `500` |
| `POST` | `/api/v1/distributors/{distributorId}/agent-agencies` | `create_5` | `201`, `400`, `500` |
| `POST` | `/api/v1/distributors/{distributorId}/agencies` | `create_6` | `201`, `400`, `404` |
| `POST` | `/api/v1/distributors/{distributorId}/agencies/filter` | `filter_6` | `200`, `400`, `404` |
| `POST` | `/api/v1/distributors/filter` | `filterDistributors` | `200`, `400`, `500` |
| `POST` | `/api/v1/distributors` | `createDistributor` | `201`, `400`, `500` |
| `POST` | `/api/v1/configuration-scopes` | `create_7` | `201`, `400` |
| `POST` | `/api/v1/configuration-scopes/filter` | `filter_7` | `200`, `400` |
| `POST` | `/api/v1/configuration-data-types` | `create_8` | `201`, `400` |
| `POST` | `/api/v1/configuration-data-types/filter` | `filter_8` | `200`, `400` |
| `POST` | `/api/v1/agent-roles` | `create_9` | `201`, `400` |
| `POST` | `/api/v1/agent-roles/filter` | `filter_9` | `200`, `400` |
| `POST` | `/api/v1/agencies/{agencyId}/payment-methods` | `create_10` | `201`, `400`, `404` |
| `POST` | `/api/v1/agencies/{agencyId}/payment-methods/filter` | `filter_10` | `200`, `400`, `404` |
| `PATCH` | `/api/v1/terms-and-conditions-templates/{templateId}/set-default` | `setAsDefault` | `200`, `404`, `500` |
| `PATCH` | `/api/v1/terms-and-conditions-templates/{templateId}/remove-default` | `removeDefault` | `200`, `404`, `500` |
| `PATCH` | `/api/v1/terms-and-conditions-templates/{templateId}/deactivate` | `deactivateTemplate` | `200`, `404`, `500` |
| `PATCH` | `/api/v1/terms-and-conditions-templates/{templateId}/activate` | `activateTemplate` | `200`, `404`, `500` |
| `PATCH` | `/api/v1/distributors/{distributorId}/terms-and-conditions/{termsId}/status` | `updateStatus` | `200`, `404`, `500` |
| `PATCH` | `/api/v1/distributors/{distributorId}/terms-and-conditions/{termsId}/sign` | `signTermsAndConditions` | `200`, `404`, `500` |
| `PATCH` | `/api/v1/distributors/{distributorId}/terms-and-conditions/{termsId}/deactivate` | `deactivateTermsAndConditions` | `200`, `404`, `500` |
| `PATCH` | `/api/v1/distributors/{distributorId}/terms-and-conditions/{termsId}/activate` | `activateTermsAndConditions` | `200`, `404`, `500` |
| `PATCH` | `/api/v1/distributors/{distributorId}/simulations/{simulationId}/status` | `updateSimulationStatus` | `200`, `404`, `500` |
| `PATCH` | `/api/v1/distributors/{distributorId}/simulations/{simulationId}/deactivate` | `deactivateDistributorSimulation` | `200`, `404`, `500` |
| `PATCH` | `/api/v1/distributors/{distributorId}/simulations/{simulationId}/activate` | `activateDistributorSimulation` | `200`, `404`, `500` |
| `PATCH` | `/api/v1/distributors/{distributorId}/operations/{operationId}/deactivate` | `deactivateDistributorOperation` | `200`, `404`, `500` |
| `PATCH` | `/api/v1/distributors/{distributorId}/operations/{operationId}/activate` | `activateDistributorOperation` | `200`, `404`, `500` |
| `PATCH` | `/api/v1/agencies/{agencyId}/payment-methods/{paymentMethodId}/set-primary` | `setPrimary` | `200`, `404` |
| `GET` | `/api/v1/terms-and-conditions-templates/name/{name}` | `getTemplateByName` | `200`, `404`, `500` |
| `GET` | `/api/v1/terms-and-conditions-templates/default/category/{category}` | `getDefaultTemplateByCategory` | `200`, `404`, `500` |
| `GET` | `/api/v1/terms-and-conditions-templates/default` | `getDefaultTemplates` | `200`, `500` |
| `GET` | `/api/v1/terms-and-conditions-templates/category/{category}/active` | `getActiveTemplatesByCategory` | `200`, `500` |
| `GET` | `/api/v1/terms-and-conditions-templates/category/{category}` | `getTemplatesByCategory` | `200`, `500` |
| `GET` | `/api/v1/terms-and-conditions-templates/active` | `getActiveTemplates` | `200`, `500` |
| `GET` | `/api/v1/simulations/status/{status}` | `getSimulationsByStatus` | `200`, `500` |
| `GET` | `/api/v1/simulations/country/{countryId}` | `getSimulationsByCountry` | `200`, `500` |
| `GET` | `/api/v1/simulations/application/{applicationId}` | `getSimulationByApplicationId` | `200`, `404`, `500` |
| `GET` | `/api/v1/shipments/tracking/{trackingNumber}` | `getShipmentByTrackingNumber` | `200`, `404`, `500` |
| `GET` | `/api/v1/shipments/status/{status}` | `getShipmentsByStatus` | `200`, `400`, `500` |
| `GET` | `/api/v1/shipments/product/{productId}` | `getShipmentsByProductId` | `200`, `404`, `500` |
| `GET` | `/api/v1/shipments/leasing-contract/{leasingContractId}` | `getShipmentsByLendingContractId` | `200`, `404`, `500` |
| `GET` | `/api/v1/product-categories/code/{code}` | `getProductCategoryByCode` | `200`, `404`, `500` |
| `GET` | `/api/v1/product-categories/active` | `getActiveProductCategories` | `200`, `500` |
| `GET` | `/api/v1/lending-types/code/{code}` | `getLendingTypeByCode` | `200`, `404`, `500` |
| `GET` | `/api/v1/lending-types/active` | `getActiveLendingTypes` | `200`, `500` |
| `GET` | `/api/v1/lending-contracts/status/{status}` | `getLendingContractsByStatus` | `200`, `400`, `500` |
| `GET` | `/api/v1/lending-contracts/product/{productId}` | `getLendingContractsByProductId` | `200`, `404`, `500` |
| `GET` | `/api/v1/lending-contracts/party/{partyId}` | `getLendingContractsByPartyId` | `200`, `404`, `500` |
| `GET` | `/api/v1/lending-contracts/distributor/{distributorId}` | `getLendingContractsByDistributorId` | `200`, `404`, `500` |
| `GET` | `/api/v1/lending-contracts/contract/{contractId}` | `getLendingContractByContractId` | `200`, `404`, `500` |
| `GET` | `/api/v1/distributors/{distributorId}/terms-and-conditions/status/{status}` | `getTermsAndConditionsByDistributorIdAndStatus` | `200`, `500` |
| `GET` | `/api/v1/distributors/{distributorId}/terms-and-conditions/latest` | `getLatestTermsAndConditions` | `200`, `404`, `500` |
| `GET` | `/api/v1/distributors/{distributorId}/terms-and-conditions/has-active-signed` | `hasActiveSignedTerms` | `200`, `500` |
| `GET` | `/api/v1/distributors/{distributorId}/terms-and-conditions/expiring` | `getExpiringTermsAndConditions` | `200`, `500` |
| `GET` | `/api/v1/distributors/{distributorId}/terms-and-conditions/active` | `getActiveTermsAndConditionsByDistributorId` | `200`, `500` |
| `GET` | `/api/v1/distributors/{distributorId}/simulations/status/{status}` | `getSimulationsByDistributorIdAndStatus` | `200`, `500` |
| `GET` | `/api/v1/distributors/{distributorId}/simulations/active` | `getActiveSimulationsByDistributorId` | `200`, `500` |
| `GET` | `/api/v1/distributors/{distributorId}/products/{productId}/lending-configurations/type/{lendingTypeId}` | `getLendingConfigurationsByProductIdAndLendingType` | `200`, `404`, `500` |
| `GET` | `/api/v1/distributors/{distributorId}/products/{productId}/lending-configurations/default` | `getDefaultLendingConfigurationByProductId` | `200`, `404`, `500` |
| `GET` | `/api/v1/distributors/{distributorId}/products/{productId}/lending-configurations/active` | `getActiveLendingConfigurationsByProductId` | `200`, `404`, `500` |
| `GET` | `/api/v1/distributors/{distributorId}/products/category/{categoryId}` | `getProductsByDistributorIdAndCategory` | `200`, `404`, `500` |
| `GET` | `/api/v1/distributors/{distributorId}/products/active` | `getActiveProductsByDistributorId` | `200`, `404`, `500` |
| `GET` | `/api/v1/distributors/{distributorId}/operations/can-operate` | `canDistributorOperateInLocation` | `200`, `500` |
| `GET` | `/api/v1/distributors/{distributorId}/operations/active` | `getActiveOperationsByDistributorId` | `200`, `500` |
| `GET` | `/api/v1/distributors/{distributorId}/lending-configurations` | `getLendingConfigurationsByDistributorId` | `200`, `404`, `500` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`AgencyPaymentMethodDTO`, `AgentRoleDTO`, `ConfigurationDataTypeDTO`, `ConfigurationScopeDTO`, `DistributorAgencyDTO`, `DistributorAgentAgencyDTO`, `DistributorAgentDTO`, `DistributorAuditLogDTO`, `DistributorAuthorizedTerritoryDTO`, `DistributorBrandingDTO`, `DistributorConfigurationDTO`, `DistributorContractDTO`, `DistributorDTO`, `DistributorOperationDTO`, `DistributorProductCatalogDTO`, `DistributorSimulationDTO`, `DistributorTermsAndConditionsDTO`, `FilterOptions`, `FilterRequestAgencyPaymentMethodDTO`, `FilterRequestAgentRoleDTO`, `FilterRequestConfigurationDataTypeDTO`, `FilterRequestConfigurationScopeDTO`, `FilterRequestDistributorAgencyDTO`, `FilterRequestDistributorAgentAgencyDTO`, `FilterRequestDistributorAgentDTO`, `FilterRequestDistributorAuditLogDTO`, `FilterRequestDistributorAuthorizedTerritoryDTO`, `FilterRequestDistributorBrandingDTO`, `FilterRequestDistributorConfigurationDTO`, `FilterRequestDistributorContractDTO`, `FilterRequestDistributorDTO`, `FilterRequestDistributorOperationDTO`, `FilterRequestDistributorProductCatalogDTO`, `FilterRequestDistributorSimulationDTO`, `FilterRequestDistributorTermsAndConditionsDTO`, `FilterRequestLendingConfigurationDTO`, `FilterRequestLendingContractDTO`, `FilterRequestProductDTO`, `FilterRequestShipmentDTO`, `FilterRequestTermsAndConditionsTemplateDTO`, `LendingConfigurationDTO`, `LendingContractDTO`, `LendingTypeDTO`, `PaginationRequest`, `PaginationResponse`, `ProductCategoryDTO`, `ProductDTO`, `RangeFilter`, `RangeObject`, `ShipmentDTO`, `TermsAndConditionsTemplateDTO`

## Contract explorer

<swagger-ui src="../contracts/core-common-distributor-mgmt/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
