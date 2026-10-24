# domain-lending-provisioning-risk

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/domain-lending-provisioning-risk) · [Complete contract](../contracts/domain-lending-provisioning-risk/openapi.yml)

**Provenance:** base revision `39f036cba403dee0e0e1ea44fa27c223e99bddc7`; current copied input SHA256 `4fc8fa65eb801b8971b4e01cb0700f6e573c38d0a4d0d2afa1090f4d0d267384`. [Baseline source](https://github.com/fireflysoftwaresolutions/domain-lending-provisioning-risk/blob/39f036cba403dee0e0e1ea44fa27c223e99bddc7/domain-lending-provisioning-risk-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `PUT` | `/api/v1/provisioning-cases/{provisioningCaseId}/status` | `updateStatus` | `200`, `404` |
| `GET` | `/api/v1/provisioning-cases/{provisioningCaseId}` | `get` | `200`, `404` |
| `PUT` | `/api/v1/provisioning-cases/{provisioningCaseId}` | `update` | `200`, `404` |
| `DELETE` | `/api/v1/provisioning-cases/{provisioningCaseId}` | `remove` | `204`, `404` |
| `POST` | `/api/v1/provisioning-cases/{provisioningCaseId}/close` | `close` | `200`, `404` |
| `POST` | `/api/v1/provisioning-cases` | `create` | `201`, `400` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`ProvisioningCaseDTO`, `ReasonRequest`, `StatusChangeRequest`

## Contract explorer

<swagger-ui src="../contracts/domain-lending-provisioning-risk/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
