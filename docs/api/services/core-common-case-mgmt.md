# core-common-case-mgmt

[Complete contract](../contracts/core-common-case-mgmt/openapi.yml)

**Provenance:** local addition; its source repository and SDK release are not published. Current copied input SHA256 `116db1010298209fbc2c8c63520bcec299345467d558b296d6e0ebaa0a0b4bad`. Producer input: `core-common-case-mgmt/core-common-case-mgmt-sdk/src/main/resources/openapi.yml`. Build the matching local producer and SDK before using this contract.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/internal/cases` | `caseQueue` | `200` |
| `POST` | `/api/v1/internal/cases` | `openCase` | `201`, `409`, `401`, `403` |
| `POST` | `/api/v1/internal/cases/{caseId}/actions` | `mutateCase` | `200`, `409`, `401`, `403`, `428` |
| `POST` | `/api/v1/internal/cases/workers/outbox` | `dispatchCaseOutbox` | `200` |
| `POST` | `/api/v1/internal/cases/workers/deadlines` | `runCaseDeadlines` | `200` |
| `GET` | `/api/v1/internal/cases/{caseId}` | `getCase` | `200` |
| `GET` | `/api/v1/internal/cases/{caseId}/history` | `caseHistory` | `200` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`CaseEvent`, `CaseView`, `ErrorResponse`, `EvidenceReference`, `Mutation`, `OpenCaseRequest`, `ProductReference`, `Resolution`, `VerifiedEvidence`

## Contract explorer

<swagger-ui src="../contracts/core-common-case-mgmt/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
