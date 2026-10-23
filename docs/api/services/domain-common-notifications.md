# domain-common-notifications

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/domain-common-notifications) · [Complete contract](../contracts/domain-common-notifications/openapi.yml)

**Provenance:** base revision `708a6766738ee0d6f7bb516fc60520926824ed71`; current copied input SHA256 `d654530db018d53eeedf5dcdee6eb391f0415c5335c1a2e6c8f901af405f0d74`. [Baseline source](https://github.com/fireflysoftwaresolutions/domain-common-notifications/blob/708a6766738ee0d6f7bb516fc60520926824ed71/domain-common-notifications-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `POST` | `/api/v1/notifications/send` | `sendNotification` | `200` |
| `POST` | `/api/v1/notifications/send-bulk` | `sendBulkNotifications` | `200` |
| `POST` | `/api/v1/notifications/party/{partyId}/read-all` | `markAllAsRead` | `200` |
| `PATCH` | `/api/v1/notifications/{notificationId}/read` | `markAsRead` | `200` |
| `GET` | `/api/v1/notifications/{notificationId}` | `getNotificationDetail` | `200`, `404` |
| `DELETE` | `/api/v1/notifications/{notificationId}` | `deleteNotification` | `200` |
| `GET` | `/api/v1/notifications/party/{partyId}` | `getNotificationsForParty` | `200` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`NotificationDTO`, `SendBulkNotificationCommand`, `SendNotificationCommand`

## Contract explorer

<swagger-ui src="../contracts/domain-common-notifications/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
