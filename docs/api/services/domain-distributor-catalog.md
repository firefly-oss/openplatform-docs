# domain-distributor-catalog

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/domain-distributor-catalog) · [Complete contract](../contracts/domain-distributor-catalog/openapi.yml)

**Provenance:** base revision `9d1ed971407cef9063f39c9a830359c7ffc50d58`; current copied input SHA256 `20576005004278ae1832aaafcadae25d6d153abe8d0ef58abd2bd569ad57dfbe`. [Baseline source](https://github.com/fireflysoftwaresolutions/domain-distributor-catalog/blob/9d1ed971407cef9063f39c9a830359c7ffc50d58/domain-distributor-catalog-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `PUT` | `/api/v1/distributors/{distributorId}/products/{productId}` | `reviseProduct` | `200` |
| `DELETE` | `/api/v1/distributors/{distributorId}/products/{productId}` | `retireProduct` | `200` |
| `GET` | `/api/v1/catalog/shipments/{shipmentId}` | `getShipment` | `200` |
| `PUT` | `/api/v1/catalog/shipments/{shipmentId}` | `updateShipment` | `200` |
| `DELETE` | `/api/v1/catalog/shipments/{shipmentId}` | `deleteShipment` | `200` |
| `PUT` | `/api/v1/catalog/shipments/{shipmentId}/status` | `updateShipmentStatus` | `200` |
| `POST` | `/api/v1/distributors/{distributorId}/simulations` | `createSimulation` | `200` |
| `GET` | `/api/v1/distributors/{distributorId}/products` | `listCatalog` | `200` |
| `POST` | `/api/v1/distributors/{distributorId}/products` | `registerProduct` | `200` |
| `GET` | `/api/v1/distributors/{distributorId}/products/{productId}/shipments` | `trackProductShipments` | `200` |
| `POST` | `/api/v1/distributors/{distributorId}/products/{productId}/shipments` | `shipContractItem` | `200` |
| `GET` | `/api/v1/distributors/{distributorId}/simulations/{simulationId}` | `getSimulation` | `200` |
| `GET` | `/api/v1/catalog/shipments` | `listShipments` | `200` |
| `GET` | `/api/v1/catalog/contracts/{contractId}/shipments` | `getShipmentsByContract` | `200` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`CreateSimulationCommand`, `DistributorSimulationDTO`, `ProductDTO`, `RegisterLeasingContractCommand`, `RegisterLendingConfigurationCommand`, `RegisterLendingTypeCommand`, `RegisterProductCategoryCommand`, `RegisterProductCommand`, `RegisterProductInfoCommand`, `RegisterShipmentCommand`, `ShipmentDTO`, `UpdateLeasingContractCommand`, `UpdateLendingConfigurationCommand`, `UpdateProductCommand`, `UpdateProductInfoCommand`, `UpdateShipmentCommand`

## Contract explorer

<swagger-ui src="../contracts/domain-distributor-catalog/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
