# domain-insurance-delegated-authority

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/domain-insurance-delegated-authority) · [Complete contract](../contracts/domain-insurance-delegated-authority/openapi.yml)

**Provenance:** base revision `c979e0fb7b5237fc2f8bf9cd0e682ef941a9497c`; current copied input SHA256 `67fb04fd4676655b00c962b3fe2b4a26b1f2891391620302de1947999bbc2fe0`. [Baseline source](https://github.com/fireflysoftwaresolutions/domain-insurance-delegated-authority/blob/c979e0fb7b5237fc2f8bf9cd0e682ef941a9497c/domain-insurance-delegated-authority-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `PUT` | `/api/v1/binders/{binderId}/status` | `updateStatus` | `200`, `404` |
| `GET` | `/api/v1/binders/{binderId}` | `get` | `200`, `404` |
| `PUT` | `/api/v1/binders/{binderId}` | `update` | `200`, `404` |
| `DELETE` | `/api/v1/binders/{binderId}` | `remove` | `204`, `404` |
| `POST` | `/api/v1/binders/{binderId}/expire` | `expire` | `200`, `404` |
| `POST` | `/api/v1/binders` | `create` | `201`, `400` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`BinderDTO`, `ReasonRequest`, `StatusChangeRequest`

## Contract explorer

<swagger-ui src="../contracts/domain-insurance-delegated-authority/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
