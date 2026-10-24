# core-common-modelhub

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/core-common-modelhub) · [Complete contract](../contracts/core-common-modelhub/openapi.yml)

**Provenance:** base revision `5031d237391d8f9e188992472580bedf82758c51`; current copied input SHA256 `1bf6becceb5547706caaeda023fea6812b0eb8d9dca1f6ccfc22b8589dcadf9b`. [Baseline source](https://github.com/fireflysoftwaresolutions/core-common-modelhub/blob/5031d237391d8f9e188992472580bedf82758c51/core-common-modelhub-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/fields/{id}` | `getFieldById` | `200`, `404` |
| `PUT` | `/api/v1/fields/{id}` | `updateField` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/fields/{id}` | `deleteField` | `204`, `404` |
| `GET` | `/api/v1/entities/{id}` | `getEntityById` | `200`, `404` |
| `PUT` | `/api/v1/entities/{id}` | `updateEntity` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/entities/{id}` | `deleteEntity` | `204`, `404` |
| `GET` | `/api/dynamic/{entityName}/{id}` | `getRecordByIdForEntity` | `200`, `404` |
| `PUT` | `/api/dynamic/{entityName}/{id}` | `updateRecordForEntity` | `200`, `400`, `404` |
| `DELETE` | `/api/dynamic/{entityName}/{id}` | `deleteRecordForEntity` | `204`, `404` |
| `POST` | `/api/v1/fields` | `createField` | `201`, `400`, `404` |
| `GET` | `/api/v1/entities` | `getAllEntities` | `200` |
| `POST` | `/api/v1/entities` | `createEntity` | `201`, `400` |
| `POST` | `/api/dynamic/{entityName}/query` | `queryRecordsForEntity` | `200`, `400`, `404` |
| `GET` | `/api/dynamic/{entityName}` | `getAllRecordsByEntityName` | `200`, `404` |
| `POST` | `/api/dynamic/{entityName}` | `createRecordForEntity` | `201`, `400`, `404` |
| `GET` | `/api/v1/fields/entity/{entityId}` | `getFieldsByEntityId` | `200`, `404` |
| `GET` | `/api/v1/entities/{name}/schema` | `getEntitySchema` | `200`, `404` |
| `GET` | `/api/v1/entities/name/{name}` | `getEntityByName` | `200`, `404` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`QueryConditionDto`, `QueryDto`, `QueryGroupDto`, `VirtualEntityDto`, `VirtualEntityFieldDto`, `VirtualEntityRecordDto`, `VirtualEntitySchemaDto`

## Contract explorer

<swagger-ui src="../contracts/core-common-modelhub/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
