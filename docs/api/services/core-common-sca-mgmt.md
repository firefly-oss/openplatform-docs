# core-common-sca-mgmt

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/core-common-sca-mgmt) · [Complete contract](../contracts/core-common-sca-mgmt/openapi.yml)

**Provenance:** base revision `4127e3c3d469088c00e0642fc437442f550938ba`; current copied input SHA256 `36898bb44b8a1f09c9fff4f5eba63a9776893d917faaa01dd6ab23bd8441cf44`. [Baseline source](https://github.com/fireflysoftwaresolutions/core-common-sca-mgmt/blob/4127e3c3d469088c00e0642fc437442f550938ba/core-common-sca-mgmt-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/sca/operations/{operationId}` | `getOperation` | `200` |
| `PUT` | `/api/v1/sca/operations/{operationId}` | `updateOperation` | `200` |
| `DELETE` | `/api/v1/sca/operations/{operationId}` | `deleteOperation` | `200` |
| `GET` | `/api/v1/sca/operations/{operationId}/history/{historyId}` | `getHistory` | `200` |
| `PUT` | `/api/v1/sca/operations/{operationId}/history/{historyId}` | `updateHistory` | `200` |
| `DELETE` | `/api/v1/sca/operations/{operationId}/history/{historyId}` | `deleteHistory` | `200` |
| `GET` | `/api/v1/sca/operations/{operationId}/challenges/{challengeId}` | `getChallenge` | `200` |
| `PUT` | `/api/v1/sca/operations/{operationId}/challenges/{challengeId}` | `updateChallenge` | `200` |
| `DELETE` | `/api/v1/sca/operations/{operationId}/challenges/{challengeId}` | `deleteChallenge` | `200` |
| `GET` | `/api/v1/sca/operations/{operationId}/challenges/{challengeId}/attempts/{attemptId}` | `getAttempt` | `200` |
| `PUT` | `/api/v1/sca/operations/{operationId}/challenges/{challengeId}/attempts/{attemptId}` | `updateAttempt` | `200` |
| `DELETE` | `/api/v1/sca/operations/{operationId}/challenges/{challengeId}/attempts/{attemptId}` | `deleteAttempt` | `200` |
| `GET` | `/api/sca/v1/operations/{operationId}/audit/{auditId}` | `getAuditEvent` | `200` |
| `PUT` | `/api/sca/v1/operations/{operationId}/audit/{auditId}` | `updateAuditEvent` | `200` |
| `DELETE` | `/api/sca/v1/operations/{operationId}/audit/{auditId}` | `deleteAuditEvent` | `200` |
| `GET` | `/api/v1/sca/operations` | `filterOperations` | `200` |
| `POST` | `/api/v1/sca/operations` | `createOperation` | `200` |
| `POST` | `/api/v1/sca/operations/{operationId}/validate` | `validateSCA` | `200` |
| `POST` | `/api/v1/sca/operations/{operationId}/trigger` | `triggerSCA` | `200` |
| `GET` | `/api/v1/sca/operations/{operationId}/history` | `getAllHistory` | `200` |
| `POST` | `/api/v1/sca/operations/{operationId}/history` | `createHistory` | `200` |
| `GET` | `/api/v1/sca/operations/{operationId}/challenges` | `getAllChallenges` | `200` |
| `POST` | `/api/v1/sca/operations/{operationId}/challenges` | `createChallenge` | `200` |
| `POST` | `/api/v1/sca/operations/{operationId}/challenges/{challengeId}/validate` | `validateChallenge` | `200` |
| `GET` | `/api/v1/sca/operations/{operationId}/challenges/{challengeId}/attempts` | `getAllAttempts` | `200` |
| `POST` | `/api/v1/sca/operations/{operationId}/challenges/{challengeId}/attempts` | `createAttempt` | `200` |
| `GET` | `/api/sca/v1/operations/{operationId}/audit` | `getAllAudit` | `200` |
| `POST` | `/api/sca/v1/operations/{operationId}/audit` | `createAuditEvent` | `200` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`FilterOptions`, `FilterRequestSCAOperationDTO`, `PaginationRequest`, `PaginationResponseSCAAttemptDTO`, `PaginationResponseSCAAuditDTO`, `PaginationResponseSCAChallengeDTO`, `PaginationResponseSCAOperationDTO`, `PaginationResponseSCAOperationHistoryDTO`, `RangeFilter`, `RangeObject`, `SCAAttemptDTO`, `SCAAuditDTO`, `SCAChallengeDTO`, `SCAOperationDTO`, `SCAOperationHistoryDTO`, `ValidationResultDTO`

## Contract explorer

<swagger-ui src="../contracts/core-common-sca-mgmt/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
