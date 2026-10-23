# domain-lending-regulatory-compliance

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/domain-lending-regulatory-compliance) · [Complete contract](../contracts/domain-lending-regulatory-compliance/openapi.yml)

**Provenance:** base revision `cf70ecbf9ca5ca0740fe2273561f60569392d13a`; current copied input SHA256 `61fc8767479c6a62116771d62926bc4336b911aa2231043799542e5a7ef4c64b`. [Baseline source](https://github.com/fireflysoftwaresolutions/domain-lending-regulatory-compliance/blob/cf70ecbf9ca5ca0740fe2273561f60569392d13a/domain-lending-regulatory-compliance-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `PUT` | `/api/v1/aml-cases/{amlCaseId}/status` | `updateStatus` | `200`, `404` |
| `GET` | `/api/v1/aml-cases/{amlCaseId}` | `get` | `200`, `404` |
| `PUT` | `/api/v1/aml-cases/{amlCaseId}` | `update` | `200`, `404` |
| `DELETE` | `/api/v1/aml-cases/{amlCaseId}` | `remove` | `204`, `404` |
| `POST` | `/api/v1/aml-cases/{amlCaseId}/close` | `close` | `200`, `404` |
| `POST` | `/api/v1/aml-cases` | `create` | `201`, `400` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`AmlCaseDTO`, `ReasonRequest`, `StatusChangeRequest`

## Contract explorer

<swagger-ui src="../contracts/domain-lending-regulatory-compliance/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
