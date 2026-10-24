# core-common-accounting-gl

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/core-common-accounting-gl) · [Complete contract](../contracts/core-common-accounting-gl/openapi.yml)

**Provenance:** base revision `2561336a2a2e6379c1a9a0ef245ab23c9a732c8d`; current copied input SHA256 `780be3257b142daa2a18818a1b5ad77420a6b7ff5c20039dfe43fc858e5b5724`. [Baseline source](https://github.com/fireflysoftwaresolutions/core-common-accounting-gl/blob/2561336a2a2e6379c1a9a0ef245ab23c9a732c8d/core-common-accounting-gl-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/journal-batches/{id}` | `getById` | `200` |
| `PUT` | `/api/v1/journal-batches/{id}` | `update` | `200` |
| `DELETE` | `/api/v1/journal-batches/{id}` | `delete` | `204` |
| `GET` | `/api/v1/journal-batches/{batchId}/entries/{entryId}` | `getById_1` | `200` |
| `PUT` | `/api/v1/journal-batches/{batchId}/entries/{entryId}` | `update_1` | `200` |
| `DELETE` | `/api/v1/journal-batches/{batchId}/entries/{entryId}` | `delete_1` | `204` |
| `GET` | `/api/v1/journal-batches/{batchId}/entries/{entryId}/lines/{lineId}` | `getById_2` | `200` |
| `PUT` | `/api/v1/journal-batches/{batchId}/entries/{entryId}/lines/{lineId}` | `update_2` | `200` |
| `DELETE` | `/api/v1/journal-batches/{batchId}/entries/{entryId}/lines/{lineId}` | `delete_2` | `204` |
| `GET` | `/api/v1/gl-accounts/{id}` | `getById_3` | `200` |
| `PUT` | `/api/v1/gl-accounts/{id}` | `update_3` | `200` |
| `DELETE` | `/api/v1/gl-accounts/{id}` | `delete_3` | `204` |
| `POST` | `/api/v1/journal-batches` | `create` | `201` |
| `POST` | `/api/v1/journal-batches/{batchId}/entries` | `create_1` | `201` |
| `POST` | `/api/v1/journal-batches/{batchId}/entries/{entryId}/lines` | `create_2` | `201` |
| `POST` | `/api/v1/gl-accounts` | `create_3` | `201` |
| `GET` | `/api/v1/gl-accounts/{parentId}/children` | `findChildren` | `200` |
| `POST` | `/api/v1/gl-accounts/{parentId}/children` | `createChild` | `201` |
| `GET` | `/api/v1/journal-batches/` | `search` | `200` |
| `GET` | `/api/v1/journal-batches/{batchId}/entries/` | `search_1` | `200` |
| `GET` | `/api/v1/journal-batches/{batchId}/entries/{entryId}/lines/` | `search_2` | `200` |
| `GET` | `/api/v1/gl-accounts/` | `search_3` | `200` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`FilterOptions`, `FilterRequestJournalLineDTO`, `GlAccountDTO`, `JournalBatchDTO`, `JournalEntryDTO`, `JournalLineDTO`, `PaginationRequest`, `PaginationResponseGlAccountDTO`, `PaginationResponseJournalBatchDTO`, `PaginationResponseJournalEntryDTO`, `PaginationResponseJournalLineDTO`, `RangeFilter`, `RangeObject`

## Contract explorer

<swagger-ui src="../contracts/core-common-accounting-gl/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
