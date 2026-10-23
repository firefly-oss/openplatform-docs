# core-common-notification-services

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/core-common-notification-services) · [Complete contract](../contracts/core-common-notification-services/openapi.yml)

**Provenance:** base revision `aaaaa83ea98d307042747bfb231705b1ca06ace7`; current copied input SHA256 `4484470dddc306978e1ed1ad6c3d34a312c963b180c34787de7f50f7ba4d029a`. [Baseline source](https://github.com/fireflysoftwaresolutions/core-common-notification-services/blob/aaaaa83ea98d307042747bfb231705b1ca06ace7/core-common-notification-services-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `POST` | `/api/v1/sms/send` | `sendSMS` | `200`, `400`, `500` |
| `POST` | `/api/v1/push` | `sendPush` | `200`, `400`, `500` |
| `POST` | `/api/v1/email/send` | `sendEmail` | `200`, `400`, `500` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`EmailAttachmentDTO`, `EmailRequestDTO`, `EmailResponseDTO`, `PushNotificationRequest`, `PushNotificationResponse`, `SMSRequestDTO`, `SMSResponseDTO`

## Contract explorer

<swagger-ui src="../contracts/core-common-notification-services/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
