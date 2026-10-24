# core-insurance-delegated-authority

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/core-insurance-delegated-authority) · [Complete contract](../contracts/core-insurance-delegated-authority/openapi.yml)

**Provenance:** base revision `aa6f0d59529ce35dd565f882623906398c6e1c46`; current copied input SHA256 `56e228a5e9af02f66a5a668e76373832261fbcb4303aab824c3ac80cb8f01745`. [Baseline source](https://github.com/fireflysoftwaresolutions/core-insurance-delegated-authority/blob/aa6f0d59529ce35dd565f882623906398c6e1c46/core-insurance-delegated-authority-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/binders/{binderId}` | `getBinderById` | `200`, `404` |
| `PUT` | `/api/v1/binders/{binderId}` | `updateBinder` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/binders/{binderId}` | `deleteBinder` | `204`, `404` |
| `GET` | `/api/v1/binders/{binderId}/limits/{authorityLimitId}` | `getAuthorityLimitById` | `200`, `404` |
| `PUT` | `/api/v1/binders/{binderId}/limits/{authorityLimitId}` | `updateAuthorityLimit` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/binders/{binderId}/limits/{authorityLimitId}` | `deleteAuthorityLimit` | `204`, `404` |
| `GET` | `/api/v1/binders/{binderId}/appointments/{coverholderAppointmentId}` | `getCoverholderAppointmentById` | `200`, `404` |
| `PUT` | `/api/v1/binders/{binderId}/appointments/{coverholderAppointmentId}` | `updateCoverholderAppointment` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/binders/{binderId}/appointments/{coverholderAppointmentId}` | `deleteCoverholderAppointment` | `204`, `404` |
| `POST` | `/api/v1/binders` | `createBinder` | `201`, `400` |
| `POST` | `/api/v1/binders/{binderId}/limits` | `createAuthorityLimit` | `201`, `400` |
| `POST` | `/api/v1/binders/{binderId}/limits/filter` | `filterAuthorityLimits` | `200`, `400` |
| `POST` | `/api/v1/binders/{binderId}/appointments` | `createCoverholderAppointment` | `201`, `400` |
| `POST` | `/api/v1/binders/{binderId}/appointments/filter` | `filterCoverholderAppointments` | `200`, `400` |
| `POST` | `/api/v1/binders/filter` | `filterBinders` | `200`, `400` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`AuthorityLimitDTO`, `BinderDTO`, `CoverholderAppointmentDTO`, `FilterOptions`, `FilterRequestAuthorityLimitDTO`, `FilterRequestBinderDTO`, `FilterRequestCoverholderAppointmentDTO`, `PaginationRequest`, `PaginationResponseAuthorityLimitDTO`, `PaginationResponseBinderDTO`, `PaginationResponseCoverholderAppointmentDTO`, `RangeFilter`, `RangeObject`

## Contract explorer

<swagger-ui src="../contracts/core-insurance-delegated-authority/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
