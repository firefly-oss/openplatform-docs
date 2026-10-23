# domain-insurance-underwriting

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/domain-insurance-underwriting) · [Complete contract](../contracts/domain-insurance-underwriting/openapi.yml)

**Provenance:** base revision `2aec713ebc7a28d8205c4cad4ecb37443fc9e508`; current copied input SHA256 `6cb99b145a982cb9d07e39997ff6f90ae0bd4d54a59b9b0b46f911851e9fcb19`. [Baseline source](https://github.com/fireflysoftwaresolutions/domain-insurance-underwriting/blob/2aec713ebc7a28d8205c4cad4ecb37443fc9e508/domain-insurance-underwriting-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `PUT` | `/api/v1/submissions/{submissionId}/status` | `updateStatus` | `200`, `404` |
| `GET` | `/api/v1/submissions/{submissionId}` | `get` | `200`, `404` |
| `PUT` | `/api/v1/submissions/{submissionId}` | `update` | `200`, `404` |
| `DELETE` | `/api/v1/submissions/{submissionId}` | `remove` | `204`, `404` |
| `POST` | `/api/v1/submissions/{submissionId}/withdraw` | `withdraw` | `200`, `404` |
| `POST` | `/api/v1/submissions/{submissionId}/decline` | `decline` | `200`, `404` |
| `POST` | `/api/v1/submissions` | `create` | `201`, `400` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`ReasonRequest`, `StatusChangeRequest`, `SubmissionDTO`

## Contract explorer

<swagger-ui src="../contracts/domain-insurance-underwriting/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
