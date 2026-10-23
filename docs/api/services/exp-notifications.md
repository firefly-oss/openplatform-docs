# exp-notifications

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/exp-notifications) · [Complete contract](../contracts/exp-notifications/openapi.yml)

**Provenance:** base revision `dbaf6caa88c9407da3e3504f1c0a9718eed4f4db`; current copied input SHA256 `0b30cb5171d92229d4f550c888bf6448f72c3bc3a915ae06337fb34d0ec6f1f6`. [Baseline source](https://github.com/fireflysoftwaresolutions/exp-notifications/blob/dbaf6caa88c9407da3e3504f1c0a9718eed4f4db/exp-notifications-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `POST` | `/api/v1/experience/notifications/read-all` | `markAllAsRead` | `204` |
| `PATCH` | `/api/v1/experience/notifications/{id}/read` | `markAsRead` | `204` |
| `GET` | `/api/v1/experience/notifications` | `listNotifications` | `200` |
| `GET` | `/api/v1/experience/notifications/{id}` | `getNotification` | `200` |
| `DELETE` | `/api/v1/experience/notifications/{id}` | `deleteNotification` | `204` |
| `GET` | `/api/v1/experience/notifications/unread-count` | `getUnreadCount` | `200` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`NotificationDTO`, `NotificationDetailDTO`, `UnreadCountDTO`

## Contract explorer

<swagger-ui src="../contracts/exp-notifications/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
