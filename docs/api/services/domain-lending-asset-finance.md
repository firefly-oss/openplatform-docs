# domain-lending-asset-finance

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/domain-lending-asset-finance) · [Complete contract](../contracts/domain-lending-asset-finance/openapi.yml)

**Provenance:** base revision `10ad8d59fa64bc9af93e55a66692aad87d6dedd7`; current copied input SHA256 `62c9f0ae1821c54a15227d31af6f8eff2262d23e066778193dfe0bda8cf934fe`. [Baseline source](https://github.com/fireflysoftwaresolutions/domain-lending-asset-finance/blob/10ad8d59fa64bc9af93e55a66692aad87d6dedd7/domain-lending-asset-finance-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `PUT` | `/api/v1/asset-finance/agreements/{agreementId}/status` | `updateAgreementStatus` | `200`, `404` |
| `PUT` | `/api/v1/asset-finance/agreements/{agreementId}/end-options/{optionId}` | `updateEndOption` | `200`, `404` |
| `GET` | `/api/v1/asset-finance/agreements/{agreementId}` | `getAgreement` | `200`, `404` |
| `PUT` | `/api/v1/asset-finance/agreements/{agreementId}` | `updateAgreement` | `200`, `404` |
| `GET` | `/api/v1/asset-finance/agreements/{agreementId}/end-options` | `getAgreementEndOptions` | `200` |
| `POST` | `/api/v1/asset-finance/agreements/{agreementId}/end-options` | `createEndOption` | `201` |
| `POST` | `/api/v1/asset-finance/agreements/{agreementId}/close` | `closeAgreement` | `200`, `404` |
| `GET` | `/api/v1/asset-finance/agreements/{agreementId}/assets/{assetId}/usage` | `getAssetUsage` | `200` |
| `POST` | `/api/v1/asset-finance/agreements/{agreementId}/assets/{assetId}/usage` | `reportUsage` | `201` |
| `GET` | `/api/v1/asset-finance/agreements/{agreementId}/assets/{assetId}/service-events` | `getAssetServiceEvents` | `200` |
| `POST` | `/api/v1/asset-finance/agreements/{agreementId}/assets/{assetId}/service-events` | `registerServiceEvent` | `201` |
| `GET` | `/api/v1/asset-finance/agreements/{agreementId}/assets/{assetId}/returns` | `getAssetReturns` | `200` |
| `POST` | `/api/v1/asset-finance/agreements/{agreementId}/assets/{assetId}/returns` | `registerReturn` | `201` |
| `GET` | `/api/v1/asset-finance/agreements/{agreementId}/assets/{assetId}/pickups` | `getAssetPickups` | `200` |
| `POST` | `/api/v1/asset-finance/agreements/{agreementId}/assets/{assetId}/pickups` | `registerPickup` | `201` |
| `GET` | `/api/v1/asset-finance/agreements/{agreementId}/assets/{assetId}/deliveries` | `getAssetDeliveries` | `200` |
| `POST` | `/api/v1/asset-finance/agreements/{agreementId}/assets/{assetId}/deliveries` | `registerDelivery` | `201` |
| `GET` | `/api/v1/asset-finance/agreements/{agreementId}/assets` | `getAgreementAssets` | `200` |
| `POST` | `/api/v1/asset-finance/agreements/{agreementId}/assets` | `registerAsset` | `201`, `400` |
| `GET` | `/api/v1/asset-finance/agreements` | `listAgreements` | `200` |
| `POST` | `/api/v1/asset-finance/agreements` | `createAgreement` | `201`, `400` |
| `GET` | `/api/v1/asset-finance/agreements/{agreementId}/assets/{assetId}` | `getAsset` | `200`, `404` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`AssetFinanceAgreementDTO`, `AssetFinanceAssetDTO`, `DeliveryRecordDTO`, `EndOptionDTO`, `PaginationResponseAssetFinanceAgreementDTO`, `PaginationResponseAssetFinanceAssetDTO`, `PaginationResponseDeliveryRecordDTO`, `PaginationResponseEndOptionDTO`, `PaginationResponsePickupRecordDTO`, `PaginationResponseReturnRecordDTO`, `PaginationResponseServiceEventDTO`, `PaginationResponseUsageRecordDTO`, `PickupRecordDTO`, `ReasonRequest`, `ReturnRecordDTO`, `ServiceEventDTO`, `StatusChangeRequest`, `UsageRecordDTO`

## Contract explorer

<swagger-ui src="../contracts/domain-lending-asset-finance/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
