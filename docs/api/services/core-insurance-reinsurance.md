# core-insurance-reinsurance

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/core-insurance-reinsurance) · [Complete contract](../contracts/core-insurance-reinsurance/openapi.yml)

**Provenance:** base revision `edba5267cd167109cf8781e19dc7b8167bb3871d`; current copied input SHA256 `1b3a8c88f6c35fa8fd0491593d0df6f4bc41ce9fe452a70ad373a753d39ae624`. [Baseline source](https://github.com/fireflysoftwaresolutions/core-insurance-reinsurance/blob/edba5267cd167109cf8781e19dc7b8167bb3871d/core-insurance-reinsurance-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/treaties/{treatyId}` | `getTreatyById` | `200`, `404` |
| `PUT` | `/api/v1/treaties/{treatyId}` | `updateTreaty` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/treaties/{treatyId}` | `deleteTreaty` | `204`, `404` |
| `GET` | `/api/v1/treaties/{treatyId}/recoveries/{reinsuranceRecoveryId}` | `getReinsuranceRecoveryById` | `200`, `404` |
| `PUT` | `/api/v1/treaties/{treatyId}/recoveries/{reinsuranceRecoveryId}` | `updateReinsuranceRecovery` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/treaties/{treatyId}/recoveries/{reinsuranceRecoveryId}` | `deleteReinsuranceRecovery` | `204`, `404` |
| `GET` | `/api/v1/treaties/{treatyId}/cessions/{cessionId}` | `getCessionById` | `200`, `404` |
| `PUT` | `/api/v1/treaties/{treatyId}/cessions/{cessionId}` | `updateCession` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/treaties/{treatyId}/cessions/{cessionId}` | `deleteCession` | `204`, `404` |
| `POST` | `/api/v1/treaties` | `createTreaty` | `201`, `400` |
| `POST` | `/api/v1/treaties/{treatyId}/recoveries` | `createReinsuranceRecovery` | `201`, `400` |
| `POST` | `/api/v1/treaties/{treatyId}/recoveries/filter` | `filterReinsuranceRecoveries` | `200`, `400` |
| `POST` | `/api/v1/treaties/{treatyId}/cessions` | `createCession` | `201`, `400` |
| `POST` | `/api/v1/treaties/{treatyId}/cessions/filter` | `filterCessions` | `200`, `400` |
| `POST` | `/api/v1/treaties/filter` | `filterTreaties` | `200`, `400` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`CessionDTO`, `FilterOptions`, `FilterRequestCessionDTO`, `FilterRequestReinsuranceRecoveryDTO`, `FilterRequestTreatyDTO`, `PaginationRequest`, `PaginationResponseCessionDTO`, `PaginationResponseReinsuranceRecoveryDTO`, `PaginationResponseTreatyDTO`, `RangeFilter`, `RangeObject`, `ReinsuranceRecoveryDTO`, `TreatyDTO`

## Contract explorer

<swagger-ui src="../contracts/core-insurance-reinsurance/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
