# core-lending-delinquency-collections

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/core-lending-delinquency-collections) · [Complete contract](../contracts/core-lending-delinquency-collections/openapi.yml)

**Provenance:** base revision `1d859da35fb3245868eb9e69d71cb33d84740647`; current copied input SHA256 `5263d6d052449580d8958273caea0335fe0ca05b3000757b6307bbe22f56b8a8`. [Baseline source](https://github.com/fireflysoftwaresolutions/core-lending-delinquency-collections/blob/1d859da35fb3245868eb9e69d71cb33d84740647/core-lending-delinquency-collections-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/collection-cases/{collectionCaseId}` | `getById` | `200` |
| `PUT` | `/api/v1/collection-cases/{collectionCaseId}` | `update` | `200` |
| `DELETE` | `/api/v1/collection-cases/{collectionCaseId}` | `delete` | `200` |
| `GET` | `/api/v1/collection-cases/{collectionCaseId}/status-history/{statusHistoryId}` | `getById_1` | `200` |
| `PUT` | `/api/v1/collection-cases/{collectionCaseId}/status-history/{statusHistoryId}` | `update_1` | `200` |
| `DELETE` | `/api/v1/collection-cases/{collectionCaseId}/status-history/{statusHistoryId}` | `delete_1` | `200` |
| `GET` | `/api/v1/collection-cases/{collectionCaseId}/promises/{promiseId}` | `getById_2` | `200` |
| `PUT` | `/api/v1/collection-cases/{collectionCaseId}/promises/{promiseId}` | `update_2` | `200` |
| `DELETE` | `/api/v1/collection-cases/{collectionCaseId}/promises/{promiseId}` | `delete_2` | `200` |
| `GET` | `/api/v1/collection-cases/{collectionCaseId}/escalations/{escalationId}` | `getById_3` | `200` |
| `PUT` | `/api/v1/collection-cases/{collectionCaseId}/escalations/{escalationId}` | `update_3` | `200` |
| `DELETE` | `/api/v1/collection-cases/{collectionCaseId}/escalations/{escalationId}` | `delete_3` | `200` |
| `GET` | `/api/v1/collection-cases/{collectionCaseId}/actions/{actionId}` | `getById_4` | `200` |
| `PUT` | `/api/v1/collection-cases/{collectionCaseId}/actions/{actionId}` | `update_4` | `200` |
| `DELETE` | `/api/v1/collection-cases/{collectionCaseId}/actions/{actionId}` | `delete_4` | `200` |
| `GET` | `/api/v1/collection-cases` | `findAll` | `200` |
| `POST` | `/api/v1/collection-cases` | `create` | `200` |
| `GET` | `/api/v1/collection-cases/{collectionCaseId}/status-history` | `findAll_1` | `200` |
| `POST` | `/api/v1/collection-cases/{collectionCaseId}/status-history` | `create_1` | `200` |
| `GET` | `/api/v1/collection-cases/{collectionCaseId}/promises` | `findAll_2` | `200` |
| `POST` | `/api/v1/collection-cases/{collectionCaseId}/promises` | `create_2` | `200` |
| `GET` | `/api/v1/collection-cases/{collectionCaseId}/escalations` | `findAll_3` | `200` |
| `POST` | `/api/v1/collection-cases/{collectionCaseId}/escalations` | `create_3` | `200` |
| `GET` | `/api/v1/collection-cases/{collectionCaseId}/actions` | `findAll_4` | `200` |
| `POST` | `/api/v1/collection-cases/{collectionCaseId}/actions` | `create_4` | `200` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`CollectionActionDTO`, `CollectionCaseDTO`, `CollectionEscalationDTO`, `CollectionPromiseDTO`, `CollectionStatusHistoryDTO`, `FilterOptions`, `FilterRequestCollectionActionDTO`, `FilterRequestCollectionCaseDTO`, `FilterRequestCollectionEscalationDTO`, `FilterRequestCollectionPromiseDTO`, `FilterRequestCollectionStatusHistoryDTO`, `PaginationRequest`, `PaginationResponseCollectionActionDTO`, `PaginationResponseCollectionCaseDTO`, `PaginationResponseCollectionEscalationDTO`, `PaginationResponseCollectionPromiseDTO`, `PaginationResponseCollectionStatusHistoryDTO`, `RangeFilter`, `RangeObject`

## Contract explorer

<swagger-ui src="../contracts/core-lending-delinquency-collections/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
