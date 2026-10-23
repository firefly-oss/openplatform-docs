# domain-insurance-policies

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/domain-insurance-policies) · [Complete contract](../contracts/domain-insurance-policies/openapi.yml)

**Provenance:** base revision `4e92c22cb9f17251989a2748ea9543080b7210cd`; current copied input SHA256 `0f993d686b59d95a75270e10d2f382a10d4ba293576264266b1d250f2d6ced90`. [Baseline source](https://github.com/fireflysoftwaresolutions/domain-insurance-policies/blob/4e92c22cb9f17251989a2748ea9543080b7210cd/domain-insurance-policies-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `PUT` | `/api/v1/policies/{policyId}/status` | `updateStatus` | `200`, `404` |
| `GET` | `/api/v1/policies/{policyId}` | `get` | `200`, `404` |
| `PUT` | `/api/v1/policies/{policyId}` | `update` | `200`, `404` |
| `DELETE` | `/api/v1/policies/{policyId}` | `remove` | `204`, `404` |
| `POST` | `/api/v1/policies/{policyId}/lapse` | `lapse` | `200`, `404` |
| `POST` | `/api/v1/policies/{policyId}/expire` | `expire` | `200`, `404` |
| `POST` | `/api/v1/policies/{policyId}/cancel` | `cancel` | `200`, `404` |
| `POST` | `/api/v1/policies` | `create` | `201`, `400` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`PolicyCreateRequest`, `PolicyDTO`, `ReasonRequest`, `StatusChangeRequest`

## Contract explorer

<swagger-ui src="../contracts/domain-insurance-policies/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
