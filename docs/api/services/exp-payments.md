# exp-payments

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/exp-payments) · [Complete contract](../contracts/exp-payments/openapi.yml)

**Provenance:** base revision `7896f830da451b0d06fe00c6554d767ef4fc62f8`; current copied input SHA256 `8e9862e75156b9cc48c171193c93f4a480b71a3d14b4b2f7914432207b141744`. [Baseline source](https://github.com/fireflysoftwaresolutions/exp-payments/blob/7896f830da451b0d06fe00c6554d767ef4fc62f8/exp-payments-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `POST` | `/api/v1/tenants/{tenant}/internal-payments` | `createManagedPaymentExperience` | `201`, `200`, `400`, `401`, `403`, `404`, `409`, `503` |
| `POST` | `/api/v1/tenants/{tenant}/internal-payments/{paymentId}/recovery` | `recoverManagedPaymentExperience` | `200`, `202`, `400`, `401`, `403`, `404`, `409`, `503` |
| `POST` | `/api/v1/tenants/{tenant}/internal-payments/{paymentId}/decisions` | `decideManagedPaymentExperience` | `200`, `202`, `400`, `401`, `403`, `404`, `409`, `503` |
| `POST` | `/api/v1/payments/{paymentId}/confirmations` | `confirm` | `403`, `200` |
| `POST` | `/api/v1/payments/{paymentId}/cancellations` | `cancel` | `403`, `200` |
| `POST` | `/api/v1/payments/tries` | `tryPayment` | `403`, `201` |
| `GET` | `/api/v1/tenants/{tenant}/internal-payments/{paymentId}` | `getManagedPaymentExperience` | `400`, `401`, `403`, `404`, `409`, `503`, `200` |
| `GET` | `/api/v1/tenants/{tenant}/internal-payments/{paymentId}/history` | `getManagedPaymentExperienceHistory` | `400`, `401`, `403`, `404`, `409`, `503`, `200` |
| `GET` | `/api/v1/payments/{paymentId}` | `status` | `403`, `200` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`Confirmation`, `Create`, `Decision`, `HistoryEvent`, `HistoryPage`, `Leg`, `Movement`, `Posting`, `Recovery`, `Request`, `TryResult`, `View`

## Contract explorer

<swagger-ui src="../contracts/exp-payments/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
