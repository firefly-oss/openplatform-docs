# domain-insurance-financials

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/domain-insurance-financials) · [Complete contract](../contracts/domain-insurance-financials/openapi.yml)

**Provenance:** base revision `1e74e8cc552f03a903ed956f265ffb06e02fd6bd`; current copied input SHA256 `b3dd80addaacdef80a93b7e1ce8a3feb539ea2f82c89db6d0cd56a7811c13adf`. [Baseline source](https://github.com/fireflysoftwaresolutions/domain-insurance-financials/blob/1e74e8cc552f03a903ed956f265ffb06e02fd6bd/domain-insurance-financials-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `PUT` | `/api/v1/premium-schedules/{premiumScheduleId}/status` | `updateStatus` | `200`, `404` |
| `GET` | `/api/v1/premium-schedules/{premiumScheduleId}` | `get` | `200`, `404` |
| `PUT` | `/api/v1/premium-schedules/{premiumScheduleId}` | `update` | `200`, `404` |
| `DELETE` | `/api/v1/premium-schedules/{premiumScheduleId}` | `remove` | `204`, `404` |
| `POST` | `/api/v1/premium-schedules/{premiumScheduleId}/complete` | `complete` | `200`, `404` |
| `POST` | `/api/v1/premium-schedules/{premiumScheduleId}/cancel` | `cancel` | `200`, `404` |
| `POST` | `/api/v1/premium-schedules` | `create` | `201`, `400` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`PremiumScheduleDTO`, `ReasonRequest`, `StatusChangeRequest`

## Contract explorer

<swagger-ui src="../contracts/domain-insurance-financials/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
