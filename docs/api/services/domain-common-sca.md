# domain-common-sca

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/domain-common-sca) · [Complete contract](../contracts/domain-common-sca/openapi.yml)

**Provenance:** base revision `741cfd7dd9ec0459e29ecac054d97b4c639139f6`; current copied input SHA256 `7c2900b47106b7bb6bda00a084c59871bf6c28c25e9057e3e233988eefd5f80e`. [Baseline source](https://github.com/fireflysoftwaresolutions/domain-common-sca/blob/741cfd7dd9ec0459e29ecac054d97b4c639139f6/domain-common-sca-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `POST` | `/api/v1/sca/operations/{operationId}/verify` | `verifyAttempt` | `200`, `400`, `404` |
| `POST` | `/api/v1/sca/operations/{operationId}/challenge` | `generateChallenge` | `201`, `400`, `404` |
| `POST` | `/api/v1/sca/operations` | `initiateOperation` | `201`, `400` |
| `GET` | `/api/v1/sca/operations/{operationId}/status-history` | `getStatusHistory` | `200`, `404` |
| `GET` | `/api/v1/sca/operations/{operationId}/attempts` | `getAttempts` | `200`, `404` |
| `GET` | `/api/v1/sca/operations/{operationId}` | `getOperation` | `200`, `404` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`GenerateChallengeRequest`, `InitiateScaOperationRequest`, `PaginationResponseSCAAttemptDTO`, `PaginationResponseSCAOperationHistoryDTO`, `SCAAttemptDTO`, `SCAChallengeDTO`, `SCAOperationDTO`, `SCAOperationHistoryDTO`, `SagaResult`, `VerifyAttemptRequest`

## Contract explorer

<swagger-ui src="../contracts/domain-common-sca/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
