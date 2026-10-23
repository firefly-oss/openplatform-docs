# domain-insurance-claims

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/domain-insurance-claims) · [Complete contract](../contracts/domain-insurance-claims/openapi.yml)

**Provenance:** base revision `893780d41e5f79cdf61761f129430d178e82c435`; current copied input SHA256 `9e362a96b8417d18f1d85ffde638139032a2463be3b65d4fd7727cd1b071f7e2`. [Baseline source](https://github.com/fireflysoftwaresolutions/domain-insurance-claims/blob/893780d41e5f79cdf61761f129430d178e82c435/domain-insurance-claims-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `PUT` | `/api/v1/claims/{claimId}/status` | `updateStatus` | `200`, `404` |
| `GET` | `/api/v1/claims/{claimId}` | `get` | `200`, `404` |
| `PUT` | `/api/v1/claims/{claimId}` | `update` | `200`, `404` |
| `DELETE` | `/api/v1/claims/{claimId}` | `remove` | `204`, `404` |
| `POST` | `/api/v1/claims/{claimId}/deny` | `deny` | `200`, `404` |
| `POST` | `/api/v1/claims/{claimId}/close` | `close` | `200`, `404` |
| `POST` | `/api/v1/claims` | `create` | `201`, `400` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`ClaimDTO`, `ReasonRequest`, `StatusChangeRequest`

## Contract explorer

<swagger-ui src="../contracts/domain-insurance-claims/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
