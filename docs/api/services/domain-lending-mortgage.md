# domain-lending-mortgage

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/domain-lending-mortgage) · [Complete contract](../contracts/domain-lending-mortgage/openapi.yml)

**Provenance:** base revision `6948e7725598a9bd91cbd2cb470d9ed2fe9d9363`; current copied input SHA256 `59c42dfc83b73278a6fde21f9668fd8b0ccb9135ef76a297cab5d73ea9dbb506`. [Baseline source](https://github.com/fireflysoftwaresolutions/domain-lending-mortgage/blob/6948e7725598a9bd91cbd2cb470d9ed2fe9d9363/domain-lending-mortgage-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `PUT` | `/api/v1/mortgage-agreements/{mortgageAgreementId}/status` | `updateStatus` | `200`, `404` |
| `GET` | `/api/v1/mortgage-agreements/{mortgageAgreementId}` | `get` | `200`, `404` |
| `PUT` | `/api/v1/mortgage-agreements/{mortgageAgreementId}` | `update` | `200`, `404` |
| `DELETE` | `/api/v1/mortgage-agreements/{mortgageAgreementId}` | `remove` | `204`, `404` |
| `POST` | `/api/v1/mortgage-agreements/{mortgageAgreementId}/close` | `close` | `200`, `404` |
| `POST` | `/api/v1/mortgage-agreements/{mortgageAgreementId}/cancel` | `cancel` | `200`, `404` |
| `POST` | `/api/v1/mortgage-agreements` | `create` | `201`, `400` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`MortgageAgreementDTO`, `ReasonRequest`, `StatusChangeRequest`

## Contract explorer

<swagger-ui src="../contracts/domain-lending-mortgage/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
