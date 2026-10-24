# core-lending-asset-finance

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/core-lending-asset-finance) · [Complete contract](../contracts/core-lending-asset-finance/openapi.yml)

**Provenance:** base revision `90d42a423aa800c76fcc25b80b3f289b36056d79`; current copied input SHA256 `c640878a06b18230dcf9f21a6921b000aced54e7c82d2a6e2830f05c85265c9c`. [Baseline source](https://github.com/fireflysoftwaresolutions/core-lending-asset-finance/blob/90d42a423aa800c76fcc25b80b3f289b36056d79/core-lending-asset-finance-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/asset-finance-agreements/{assetFinanceAgreementId}` | `getById` | `200`, `404`, `500` |
| `PUT` | `/api/v1/asset-finance-agreements/{assetFinanceAgreementId}` | `update` | `200`, `400`, `404`, `500` |
| `DELETE` | `/api/v1/asset-finance-agreements/{assetFinanceAgreementId}` | `delete` | `204`, `404`, `500` |
| `GET` | `/api/v1/asset-finance-agreements/{agreementId}/end-options/{optionId}` | `getById_1` | `200`, `404`, `500` |
| `PUT` | `/api/v1/asset-finance-agreements/{agreementId}/end-options/{optionId}` | `update_1` | `200`, `400`, `404`, `500` |
| `DELETE` | `/api/v1/asset-finance-agreements/{agreementId}/end-options/{optionId}` | `delete_1` | `204`, `404`, `500` |
| `GET` | `/api/v1/asset-finance-agreements/{agreementId}/assets/{assetId}` | `getById_2` | `200`, `404`, `500` |
| `PUT` | `/api/v1/asset-finance-agreements/{agreementId}/assets/{assetId}` | `update_2` | `200`, `400`, `404`, `500` |
| `DELETE` | `/api/v1/asset-finance-agreements/{agreementId}/assets/{assetId}` | `delete_2` | `204`, `404`, `500` |
| `GET` | `/api/v1/asset-finance-agreements/{agreementId}/assets/{assetId}/usage-records/{recordId}` | `getById_3` | `200`, `404`, `500` |
| `PUT` | `/api/v1/asset-finance-agreements/{agreementId}/assets/{assetId}/usage-records/{recordId}` | `update_3` | `200`, `400`, `404`, `500` |
| `DELETE` | `/api/v1/asset-finance-agreements/{agreementId}/assets/{assetId}/usage-records/{recordId}` | `delete_3` | `204`, `404`, `500` |
| `GET` | `/api/v1/asset-finance-agreements/{agreementId}/assets/{assetId}/service-events/{eventId}` | `getById_4` | `200`, `404`, `500` |
| `PUT` | `/api/v1/asset-finance-agreements/{agreementId}/assets/{assetId}/service-events/{eventId}` | `update_4` | `200`, `400`, `404`, `500` |
| `DELETE` | `/api/v1/asset-finance-agreements/{agreementId}/assets/{assetId}/service-events/{eventId}` | `delete_4` | `204`, `404`, `500` |
| `GET` | `/api/v1/asset-finance-agreements/{agreementId}/assets/{assetId}/return-records/{recordId}` | `getById_5` | `200`, `404`, `500` |
| `PUT` | `/api/v1/asset-finance-agreements/{agreementId}/assets/{assetId}/return-records/{recordId}` | `update_5` | `200`, `400`, `404`, `500` |
| `DELETE` | `/api/v1/asset-finance-agreements/{agreementId}/assets/{assetId}/return-records/{recordId}` | `delete_5` | `204`, `404`, `500` |
| `GET` | `/api/v1/asset-finance-agreements/{agreementId}/assets/{assetId}/pickup-records/{pickupRecordId}` | `getById_6` | `200`, `404`, `500` |
| `PUT` | `/api/v1/asset-finance-agreements/{agreementId}/assets/{assetId}/pickup-records/{pickupRecordId}` | `update_6` | `200`, `400`, `404`, `500` |
| `DELETE` | `/api/v1/asset-finance-agreements/{agreementId}/assets/{assetId}/pickup-records/{pickupRecordId}` | `delete_6` | `204`, `404`, `500` |
| `GET` | `/api/v1/asset-finance-agreements/{agreementId}/assets/{assetId}/delivery-records/{deliveryRecordId}` | `getById_7` | `200`, `404`, `500` |
| `PUT` | `/api/v1/asset-finance-agreements/{agreementId}/assets/{assetId}/delivery-records/{deliveryRecordId}` | `update_7` | `200`, `400`, `404`, `500` |
| `DELETE` | `/api/v1/asset-finance-agreements/{agreementId}/assets/{assetId}/delivery-records/{deliveryRecordId}` | `delete_7` | `204`, `404`, `500` |
| `GET` | `/api/v1/asset-finance-agreements` | `findAll` | `200`, `400`, `500` |
| `POST` | `/api/v1/asset-finance-agreements` | `create` | `200`, `400`, `500` |
| `GET` | `/api/v1/asset-finance-agreements/{agreementId}/end-options` | `findAll_1` | `200`, `400`, `404`, `500` |
| `POST` | `/api/v1/asset-finance-agreements/{agreementId}/end-options` | `create_1` | `200`, `400`, `404`, `500` |
| `GET` | `/api/v1/asset-finance-agreements/{agreementId}/assets` | `findAll_2` | `200`, `400`, `404`, `500` |
| `POST` | `/api/v1/asset-finance-agreements/{agreementId}/assets` | `create_2` | `200`, `400`, `404`, `500` |
| `GET` | `/api/v1/asset-finance-agreements/{agreementId}/assets/{assetId}/usage-records` | `findAll_3` | `200`, `400`, `404`, `500` |
| `POST` | `/api/v1/asset-finance-agreements/{agreementId}/assets/{assetId}/usage-records` | `create_3` | `200`, `400`, `404`, `500` |
| `GET` | `/api/v1/asset-finance-agreements/{agreementId}/assets/{assetId}/service-events` | `findAll_4` | `200`, `400`, `404`, `500` |
| `POST` | `/api/v1/asset-finance-agreements/{agreementId}/assets/{assetId}/service-events` | `create_4` | `200`, `400`, `404`, `500` |
| `GET` | `/api/v1/asset-finance-agreements/{agreementId}/assets/{assetId}/return-records` | `findAll_5` | `200`, `400`, `404`, `500` |
| `POST` | `/api/v1/asset-finance-agreements/{agreementId}/assets/{assetId}/return-records` | `create_5` | `200`, `400`, `404`, `500` |
| `GET` | `/api/v1/asset-finance-agreements/{agreementId}/assets/{assetId}/pickup-records` | `findAll_6` | `200`, `400`, `404`, `500` |
| `POST` | `/api/v1/asset-finance-agreements/{agreementId}/assets/{assetId}/pickup-records` | `create_6` | `200`, `400`, `404`, `500` |
| `GET` | `/api/v1/asset-finance-agreements/{agreementId}/assets/{assetId}/delivery-records` | `findAll_7` | `200`, `400`, `404`, `500` |
| `POST` | `/api/v1/asset-finance-agreements/{agreementId}/assets/{assetId}/delivery-records` | `create_7` | `200`, `400`, `404`, `500` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`AssetFinanceAgreementDTO`, `AssetFinanceAssetDTO`, `DeliveryRecordDTO`, `EndOptionDTO`, `FilterOptions`, `FilterRequestAssetFinanceAgreementDTO`, `FilterRequestAssetFinanceAssetDTO`, `FilterRequestDeliveryRecordDTO`, `FilterRequestEndOptionDTO`, `FilterRequestPickupRecordDTO`, `FilterRequestReturnRecordDTO`, `FilterRequestServiceEventDTO`, `FilterRequestUsageRecordDTO`, `PaginationRequest`, `PaginationResponseAssetFinanceAgreementDTO`, `PaginationResponseAssetFinanceAssetDTO`, `PaginationResponseDeliveryRecordDTO`, `PaginationResponseEndOptionDTO`, `PaginationResponsePickupRecordDTO`, `PaginationResponseReturnRecordDTO`, `PaginationResponseServiceEventDTO`, `PaginationResponseUsageRecordDTO`, `PickupRecordDTO`, `RangeFilter`, `RangeObject`, `ReturnRecordDTO`, `ServiceEventDTO`, `UsageRecordDTO`

## Contract explorer

<swagger-ui src="../contracts/core-lending-asset-finance/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
