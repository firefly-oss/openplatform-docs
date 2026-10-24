# core-lending-collateral-management

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/core-lending-collateral-management) · [Complete contract](../contracts/core-lending-collateral-management/openapi.yml)

**Provenance:** base revision `8d844ca199b9ac5cb15e2ded211bbbc2197d79e0`; current copied input SHA256 `70d3eeef10b61b8064faac4d34d4b8e79fe805b4f1f431d4a451bb2306f25f3a`. [Baseline source](https://github.com/fireflysoftwaresolutions/core-lending-collateral-management/blob/8d844ca199b9ac5cb15e2ded211bbbc2197d79e0/core-lending-collateral-management-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/guarantees/{guaranteeRecordId}` | `getById` | `200` |
| `PUT` | `/api/v1/guarantees/{guaranteeRecordId}` | `update` | `200` |
| `DELETE` | `/api/v1/guarantees/{guaranteeRecordId}` | `delete` | `200` |
| `GET` | `/api/v1/guarantees/{guaranteeRecordId}/valuations/{guaranteeValuationId}` | `getById_1` | `200` |
| `PUT` | `/api/v1/guarantees/{guaranteeRecordId}/valuations/{guaranteeValuationId}` | `update_1` | `200` |
| `DELETE` | `/api/v1/guarantees/{guaranteeRecordId}/valuations/{guaranteeValuationId}` | `delete_1` | `200` |
| `GET` | `/api/v1/guarantees/{guaranteeRecordId}/parties/{guaranteePartyId}` | `getById_2` | `200` |
| `PUT` | `/api/v1/guarantees/{guaranteeRecordId}/parties/{guaranteePartyId}` | `update_2` | `200` |
| `DELETE` | `/api/v1/guarantees/{guaranteeRecordId}/parties/{guaranteePartyId}` | `delete_2` | `200` |
| `GET` | `/api/v1/guarantee-records/{guaranteeRecordId}/documents/{guaranteeDocumentId}` | `getById_3` | `200` |
| `PUT` | `/api/v1/guarantee-records/{guaranteeRecordId}/documents/{guaranteeDocumentId}` | `update_3` | `200` |
| `DELETE` | `/api/v1/guarantee-records/{guaranteeRecordId}/documents/{guaranteeDocumentId}` | `delete_3` | `200` |
| `GET` | `/api/v1/guarantee-records/{guaranteeRecordId}/claims/{guaranteeClaimId}` | `getById_4` | `200` |
| `PUT` | `/api/v1/guarantee-records/{guaranteeRecordId}/claims/{guaranteeClaimId}` | `update_4` | `200` |
| `DELETE` | `/api/v1/guarantee-records/{guaranteeRecordId}/claims/{guaranteeClaimId}` | `delete_4` | `200` |
| `GET` | `/api/v1/collateral-cases/{collateralCaseId}` | `getById_5` | `200` |
| `PUT` | `/api/v1/collateral-cases/{collateralCaseId}` | `update_5` | `200` |
| `DELETE` | `/api/v1/collateral-cases/{collateralCaseId}` | `delete_5` | `200` |
| `GET` | `/api/v1/collateral-cases/{collateralCaseId}/documents/{collateralDocumentId}` | `getById_6` | `200` |
| `PUT` | `/api/v1/collateral-cases/{collateralCaseId}/documents/{collateralDocumentId}` | `update_6` | `200` |
| `DELETE` | `/api/v1/collateral-cases/{collateralCaseId}/documents/{collateralDocumentId}` | `delete_6` | `200` |
| `GET` | `/api/v1/collateral-cases/{collateralCaseId}/assets/{collateralAssetId}` | `getById_7` | `200` |
| `PUT` | `/api/v1/collateral-cases/{collateralCaseId}/assets/{collateralAssetId}` | `update_7` | `200` |
| `DELETE` | `/api/v1/collateral-cases/{collateralCaseId}/assets/{collateralAssetId}` | `delete_7` | `200` |
| `GET` | `/api/v1/collateral-cases/{collateralCaseId}/assets/{collateralAssetId}/valuations/{collateralValuationId}` | `getById_8` | `200` |
| `PUT` | `/api/v1/collateral-cases/{collateralCaseId}/assets/{collateralAssetId}/valuations/{collateralValuationId}` | `update_8` | `200` |
| `DELETE` | `/api/v1/collateral-cases/{collateralCaseId}/assets/{collateralAssetId}/valuations/{collateralValuationId}` | `delete_8` | `200` |
| `GET` | `/api/v1/collateral-cases/{collateralCaseId}/assets/{collateralAssetId}/parties/{collateralPartyId}` | `getById_9` | `200` |
| `PUT` | `/api/v1/collateral-cases/{collateralCaseId}/assets/{collateralAssetId}/parties/{collateralPartyId}` | `update_9` | `200` |
| `DELETE` | `/api/v1/collateral-cases/{collateralCaseId}/assets/{collateralAssetId}/parties/{collateralPartyId}` | `delete_9` | `200` |
| `GET` | `/api/v1/collateral-cases/{collateralCaseId}/assets/{collateralAssetId}/liens/{collateralLienId}` | `getById_10` | `200` |
| `PUT` | `/api/v1/collateral-cases/{collateralCaseId}/assets/{collateralAssetId}/liens/{collateralLienId}` | `update_10` | `200` |
| `DELETE` | `/api/v1/collateral-cases/{collateralCaseId}/assets/{collateralAssetId}/liens/{collateralLienId}` | `delete_10` | `200` |
| `GET` | `/api/v1/collateral-assets/{collateralAssetId}/vehicle-details/{vehicleCollateralId}` | `getById_11` | `200` |
| `PUT` | `/api/v1/collateral-assets/{collateralAssetId}/vehicle-details/{vehicleCollateralId}` | `update_11` | `200` |
| `DELETE` | `/api/v1/collateral-assets/{collateralAssetId}/vehicle-details/{vehicleCollateralId}` | `delete_11` | `200` |
| `GET` | `/api/v1/collateral-assets/{collateralAssetId}/securities-details/{securitiesCollateralId}` | `getById_12` | `200` |
| `PUT` | `/api/v1/collateral-assets/{collateralAssetId}/securities-details/{securitiesCollateralId}` | `update_12` | `200` |
| `DELETE` | `/api/v1/collateral-assets/{collateralAssetId}/securities-details/{securitiesCollateralId}` | `delete_12` | `200` |
| `GET` | `/api/v1/collateral-assets/{collateralAssetId}/property-details/{propertyId}` | `getById_13` | `200` |
| `PUT` | `/api/v1/collateral-assets/{collateralAssetId}/property-details/{propertyId}` | `update_13` | `200` |
| `DELETE` | `/api/v1/collateral-assets/{collateralAssetId}/property-details/{propertyId}` | `delete_13` | `200` |
| `GET` | `/api/v1/collateral-assets/{collateralAssetId}/monitoring/{collateralMonitoringId}` | `getById_14` | `200` |
| `PUT` | `/api/v1/collateral-assets/{collateralAssetId}/monitoring/{collateralMonitoringId}` | `update_14` | `200` |
| `DELETE` | `/api/v1/collateral-assets/{collateralAssetId}/monitoring/{collateralMonitoringId}` | `delete_14` | `200` |
| `GET` | `/api/v1/collateral-assets/{collateralAssetId}/insurance/{insuranceId}` | `getById_15` | `200` |
| `PUT` | `/api/v1/collateral-assets/{collateralAssetId}/insurance/{insuranceId}` | `update_15` | `200` |
| `DELETE` | `/api/v1/collateral-assets/{collateralAssetId}/insurance/{insuranceId}` | `delete_15` | `200` |
| `GET` | `/api/v1/guarantees` | `findAll` | `200` |
| `POST` | `/api/v1/guarantees` | `create` | `200` |
| `GET` | `/api/v1/guarantees/{guaranteeRecordId}/valuations` | `findAll_1` | `200` |
| `POST` | `/api/v1/guarantees/{guaranteeRecordId}/valuations` | `create_1` | `200` |
| `GET` | `/api/v1/guarantees/{guaranteeRecordId}/parties` | `findAll_2` | `200` |
| `POST` | `/api/v1/guarantees/{guaranteeRecordId}/parties` | `create_2` | `200` |
| `GET` | `/api/v1/guarantee-records/{guaranteeRecordId}/documents` | `findAll_3` | `200` |
| `POST` | `/api/v1/guarantee-records/{guaranteeRecordId}/documents` | `create_3` | `200` |
| `GET` | `/api/v1/guarantee-records/{guaranteeRecordId}/claims` | `findAll_4` | `200` |
| `POST` | `/api/v1/guarantee-records/{guaranteeRecordId}/claims` | `create_4` | `200` |
| `GET` | `/api/v1/collateral-cases` | `findAll_5` | `200` |
| `POST` | `/api/v1/collateral-cases` | `create_5` | `200` |
| `GET` | `/api/v1/collateral-cases/{collateralCaseId}/documents` | `findAll_6` | `200` |
| `POST` | `/api/v1/collateral-cases/{collateralCaseId}/documents` | `create_6` | `200` |
| `GET` | `/api/v1/collateral-cases/{collateralCaseId}/assets` | `findAll_7` | `200` |
| `POST` | `/api/v1/collateral-cases/{collateralCaseId}/assets` | `create_7` | `200` |
| `GET` | `/api/v1/collateral-cases/{collateralCaseId}/assets/{collateralAssetId}/valuations` | `findAll_8` | `200` |
| `POST` | `/api/v1/collateral-cases/{collateralCaseId}/assets/{collateralAssetId}/valuations` | `create_8` | `200` |
| `GET` | `/api/v1/collateral-cases/{collateralCaseId}/assets/{collateralAssetId}/parties` | `findAll_9` | `200` |
| `POST` | `/api/v1/collateral-cases/{collateralCaseId}/assets/{collateralAssetId}/parties` | `create_9` | `200` |
| `GET` | `/api/v1/collateral-cases/{collateralCaseId}/assets/{collateralAssetId}/liens` | `findAll_10` | `200` |
| `POST` | `/api/v1/collateral-cases/{collateralCaseId}/assets/{collateralAssetId}/liens` | `create_10` | `200` |
| `GET` | `/api/v1/collateral-assets/{collateralAssetId}/vehicle-details` | `findAll_11` | `200` |
| `POST` | `/api/v1/collateral-assets/{collateralAssetId}/vehicle-details` | `create_11` | `200` |
| `GET` | `/api/v1/collateral-assets/{collateralAssetId}/securities-details` | `findAll_12` | `200` |
| `POST` | `/api/v1/collateral-assets/{collateralAssetId}/securities-details` | `create_12` | `200` |
| `GET` | `/api/v1/collateral-assets/{collateralAssetId}/property-details` | `findAll_13` | `200` |
| `POST` | `/api/v1/collateral-assets/{collateralAssetId}/property-details` | `create_13` | `200` |
| `GET` | `/api/v1/collateral-assets/{collateralAssetId}/monitoring` | `findAll_14` | `200` |
| `POST` | `/api/v1/collateral-assets/{collateralAssetId}/monitoring` | `create_14` | `200` |
| `GET` | `/api/v1/collateral-assets/{collateralAssetId}/insurance` | `findAll_15` | `200` |
| `POST` | `/api/v1/collateral-assets/{collateralAssetId}/insurance` | `create_15` | `200` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`CollateralAssetDTO`, `CollateralCaseDTO`, `CollateralDocumentDTO`, `CollateralInsuranceDTO`, `CollateralLienDTO`, `CollateralMonitoringDTO`, `CollateralPartyDTO`, `CollateralValuationDTO`, `FilterOptions`, `FilterRequestCollateralAssetDTO`, `FilterRequestCollateralCaseDTO`, `FilterRequestCollateralDocumentDTO`, `FilterRequestCollateralInsuranceDTO`, `FilterRequestCollateralLienDTO`, `FilterRequestCollateralMonitoringDTO`, `FilterRequestCollateralPartyDTO`, `FilterRequestCollateralValuationDTO`, `FilterRequestGuaranteeClaimDTO`, `FilterRequestGuaranteeDocumentDTO`, `FilterRequestGuaranteePartyDTO`, `FilterRequestGuaranteeRecordDTO`, `FilterRequestGuaranteeValuationDTO`, `FilterRequestRealEstatePropertyDTO`, `FilterRequestSecuritiesCollateralDTO`, `FilterRequestVehicleCollateralDTO`, `GuaranteeClaimDTO`, `GuaranteeDocumentDTO`, `GuaranteePartyDTO`, `GuaranteeRecordDTO`, `GuaranteeValuationDTO`, `PaginationRequest`, `PaginationResponseCollateralAssetDTO`, `PaginationResponseCollateralCaseDTO`, `PaginationResponseCollateralDocumentDTO`, `PaginationResponseCollateralInsuranceDTO`, `PaginationResponseCollateralLienDTO`, `PaginationResponseCollateralMonitoringDTO`, `PaginationResponseCollateralPartyDTO`, `PaginationResponseCollateralValuationDTO`, `PaginationResponseGuaranteeClaimDTO`, `PaginationResponseGuaranteeDocumentDTO`, `PaginationResponseGuaranteePartyDTO`, `PaginationResponseGuaranteeRecordDTO`, `PaginationResponseGuaranteeValuationDTO`, `PaginationResponseRealEstatePropertyDTO`, `PaginationResponseSecuritiesCollateralDTO`, `PaginationResponseVehicleCollateralDTO`, `RangeFilter`, `RangeObject`, `RealEstatePropertyDTO`, `SecuritiesCollateralDTO`, `VehicleCollateralDTO`

## Contract explorer

<swagger-ui src="../contracts/core-lending-collateral-management/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
