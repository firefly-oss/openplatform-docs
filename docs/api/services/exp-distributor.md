# exp-distributor

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/exp-distributor) · [Complete contract](../contracts/exp-distributor/openapi.yml)

**Provenance:** base revision `fa4c9c5dfd66674e4e56c528b9238b6770619b11`; current copied input SHA256 `e48ccc788e4a776a7dd968ae63bc2e1f3654e85ec9a7babd97559df3c8407ab7`. [Baseline source](https://github.com/fireflysoftwaresolutions/exp-distributor/blob/fa4c9c5dfd66674e4e56c528b9238b6770619b11/exp-distributor-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/experience/distributors/{distributorId}/territories/{territoryId}` | `getTerritory` | `200` |
| `PUT` | `/api/v1/experience/distributors/{distributorId}/territories/{territoryId}` | `updateTerritory` | `200` |
| `DELETE` | `/api/v1/experience/distributors/{distributorId}/territories/{territoryId}` | `deleteTerritory` | `200` |
| `GET` | `/api/v1/experience/distributors/{distributorId}/terms-and-conditions/{tcId}` | `getTermsDetail` | `200` |
| `PUT` | `/api/v1/experience/distributors/{distributorId}/terms-and-conditions/{tcId}` | `updateTerms` | `200` |
| `DELETE` | `/api/v1/experience/distributors/{distributorId}/terms-and-conditions/{tcId}` | `deleteTerms` | `200` |
| `PUT` | `/api/v1/experience/distributors/{distributorId}/shipments/{shipmentId}/status` | `updateStatus` | `200` |
| `GET` | `/api/v1/experience/distributors/{distributorId}/shipments/{shipmentId}` | `getShipment` | `200` |
| `PUT` | `/api/v1/experience/distributors/{distributorId}/shipments/{shipmentId}` | `updateShipment` | `200` |
| `DELETE` | `/api/v1/experience/distributors/{distributorId}/shipments/{shipmentId}` | `deleteShipment` | `200` |
| `GET` | `/api/v1/experience/distributors/{distributorId}/products/{productId}` | `getProduct` | `200` |
| `PUT` | `/api/v1/experience/distributors/{distributorId}/products/{productId}` | `updateProduct` | `200` |
| `DELETE` | `/api/v1/experience/distributors/{distributorId}/products/{productId}` | `removeProduct` | `200` |
| `PUT` | `/api/v1/experience/distributors/{distributorId}/operations/{operationId}` | `updateOperation` | `200` |
| `DELETE` | `/api/v1/experience/distributors/{distributorId}/operations/{operationId}` | `deleteOperation` | `200` |
| `PUT` | `/api/v1/experience/distributors/{distributorId}/configurations/{configId}` | `updateConfiguration` | `200` |
| `DELETE` | `/api/v1/experience/distributors/{distributorId}/configurations/{configId}` | `deleteConfiguration` | `200` |
| `GET` | `/api/v1/experience/distributors/{distributorId}/catalog/{catalogItemId}` | `getCatalogItem` | `200` |
| `PUT` | `/api/v1/experience/distributors/{distributorId}/catalog/{catalogItemId}` | `updateCatalogItem` | `200` |
| `DELETE` | `/api/v1/experience/distributors/{distributorId}/catalog/{catalogItemId}` | `removeFromCatalog` | `200` |
| `PUT` | `/api/v1/experience/distributors/{distributorId}/brandings/{brandingId}/set-default` | `setDefaultBranding` | `200` |
| `GET` | `/api/v1/experience/distributors/{distributorId}/brandings/{brandingId}` | `getBranding` | `200` |
| `PUT` | `/api/v1/experience/distributors/{distributorId}/brandings/{brandingId}` | `updateBranding` | `200` |
| `DELETE` | `/api/v1/experience/distributors/{distributorId}/brandings/{brandingId}` | `deleteBranding` | `200` |
| `GET` | `/api/v1/experience/distributors/{distributorId}/agents/{agentId}` | `getAgent` | `200` |
| `PUT` | `/api/v1/experience/distributors/{distributorId}/agents/{agentId}` | `updateAgent` | `200` |
| `DELETE` | `/api/v1/experience/distributors/{distributorId}/agents/{agentId}` | `deleteAgent` | `200` |
| `GET` | `/api/v1/experience/distributors/{distributorId}/agencies/{agencyId}` | `getAgency` | `200` |
| `PUT` | `/api/v1/experience/distributors/{distributorId}/agencies/{agencyId}` | `updateAgency` | `200` |
| `DELETE` | `/api/v1/experience/distributors/{distributorId}/agencies/{agencyId}` | `deleteAgency` | `200` |
| `GET` | `/api/v1/experience/distributors/{distributorId}` | `getDistributorDetail` | `200` |
| `PUT` | `/api/v1/experience/distributors/{distributorId}` | `updateDistributor` | `200` |
| `DELETE` | `/api/v1/experience/distributors/{distributorId}` | `deleteDistributor` | `200` |
| `GET` | `/api/v1/experience/distributors/{distributorId}/territories` | `listTerritories` | `200` |
| `POST` | `/api/v1/experience/distributors/{distributorId}/territories` | `createTerritory` | `200` |
| `GET` | `/api/v1/experience/distributors/{distributorId}/terms-and-conditions` | `listTerms` | `200` |
| `POST` | `/api/v1/experience/distributors/{distributorId}/terms-and-conditions` | `createTerms` | `200` |
| `POST` | `/api/v1/experience/distributors/{distributorId}/simulations` | `createSimulation` | `200` |
| `GET` | `/api/v1/experience/distributors/{distributorId}/shipments` | `listShipments` | `200` |
| `POST` | `/api/v1/experience/distributors/{distributorId}/shipments` | `registerShipment` | `200` |
| `GET` | `/api/v1/experience/distributors/{distributorId}/products` | `listProducts` | `200` |
| `POST` | `/api/v1/experience/distributors/{distributorId}/products` | `registerProduct` | `200` |
| `GET` | `/api/v1/experience/distributors/{distributorId}/operations` | `listOperations` | `200` |
| `POST` | `/api/v1/experience/distributors/{distributorId}/operations` | `createOperation` | `200` |
| `GET` | `/api/v1/experience/distributors/{distributorId}/configurations` | `listConfigurations` | `200` |
| `POST` | `/api/v1/experience/distributors/{distributorId}/configurations` | `createConfiguration` | `200` |
| `GET` | `/api/v1/experience/distributors/{distributorId}/catalog` | `listCatalog` | `200` |
| `POST` | `/api/v1/experience/distributors/{distributorId}/catalog` | `addToCatalog` | `200` |
| `GET` | `/api/v1/experience/distributors/{distributorId}/brandings` | `listBrandings` | `200` |
| `POST` | `/api/v1/experience/distributors/{distributorId}/brandings` | `createBranding` | `200` |
| `GET` | `/api/v1/experience/distributors/{distributorId}/agents` | `listAgents` | `200` |
| `POST` | `/api/v1/experience/distributors/{distributorId}/agents` | `createAgent` | `200` |
| `GET` | `/api/v1/experience/distributors/{distributorId}/agent-agencies` | `listAssignments` | `200` |
| `POST` | `/api/v1/experience/distributors/{distributorId}/agent-agencies` | `assignAgentToAgency` | `200` |
| `GET` | `/api/v1/experience/distributors/{distributorId}/agencies` | `listAgencies` | `200` |
| `POST` | `/api/v1/experience/distributors/{distributorId}/agencies` | `createAgency` | `200` |
| `POST` | `/api/v1/experience/distributors` | `registerDistributor` | `200` |
| `PATCH` | `/api/v1/experience/distributors/{distributorId}/terms-and-conditions/{tcId}/sign` | `signTerms` | `200` |
| `PATCH` | `/api/v1/experience/distributors/{distributorId}/terms-and-conditions/{tcId}/deactivate` | `deactivateTerms` | `200` |
| `PATCH` | `/api/v1/experience/distributors/{distributorId}/terms-and-conditions/{tcId}/activate` | `activateTerms` | `200` |
| `PATCH` | `/api/v1/experience/distributors/{distributorId}/operations/{operationId}/deactivate` | `deactivateOperation` | `200` |
| `PATCH` | `/api/v1/experience/distributors/{distributorId}/operations/{operationId}/activate` | `activateOperation` | `200` |
| `GET` | `/api/v1/experience/distributors/{distributorId}/terms-and-conditions/latest` | `getLatestTerms` | `200` |
| `GET` | `/api/v1/experience/distributors/{distributorId}/terms-and-conditions/has-active-signed` | `hasActiveSignedTerms` | `200` |
| `GET` | `/api/v1/experience/distributors/{distributorId}/terms-and-conditions/active` | `getActiveTerms` | `200` |
| `GET` | `/api/v1/experience/distributors/{distributorId}/simulations/{simulationId}` | `getSimulation` | `200` |
| `GET` | `/api/v1/experience/distributors/{distributorId}/shipments/{shipmentId}/tracking` | `getTracking` | `200` |
| `GET` | `/api/v1/experience/distributors/{distributorId}/products/active` | `listActiveProducts` | `200` |
| `GET` | `/api/v1/experience/distributors/{distributorId}/operations/can-operate` | `canOperate` | `200` |
| `DELETE` | `/api/v1/experience/distributors/{distributorId}/agent-agencies/{relationshipId}` | `unassignAgent` | `200` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`AddCatalogItemRequest`, `AgencyDTO`, `AgentAgencyDTO`, `AgentDTO`, `AssignAgentRequest`, `BrandingDTO`, `CatalogItemDTO`, `ConfigurationDTO`, `CreateAgencyRequest`, `CreateAgentRequest`, `CreateBrandingRequest`, `CreateConfigurationRequest`, `CreateOperationRequest`, `CreateSimulationRequest`, `CreateTermsRequest`, `CreateTerritoryRequest`, `DistributorDetailDTO`, `OperationDTO`, `PaginationResponse`, `ProductDetailDTO`, `RegisterDistributorRequest`, `RegisterProductRequest`, `RegisterShipmentRequest`, `ShipmentDTO`, `ShipmentTrackingDTO`, `SimulationResultDTO`, `TermsDTO`, `TerritoryDTO`, `UpdateAgencyRequest`, `UpdateAgentRequest`, `UpdateBrandingRequest`, `UpdateCatalogItemRequest`, `UpdateConfigurationRequest`, `UpdateDistributorRequest`, `UpdateOperationRequest`, `UpdateProductRequest`, `UpdateShipmentRequest`, `UpdateStatusRequest`, `UpdateTermsRequest`, `UpdateTerritoryRequest`

## Contract explorer

<swagger-ui src="../contracts/exp-distributor/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
