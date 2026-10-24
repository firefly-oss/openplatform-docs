# domain-lending-collateral-management

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/domain-lending-collateral-management) · [Complete contract](../contracts/domain-lending-collateral-management/openapi.yml)

**Provenance:** base revision `1b6d9fbf6a196fa70d421a012b1d2f1d014f1e57`; current copied input SHA256 `13265d4bd5b8744aa6ecd2bbf778d3b838e9ab3e2dc812e46e932b58b1205a25`. [Baseline source](https://github.com/fireflysoftwaresolutions/domain-lending-collateral-management/blob/1b6d9fbf6a196fa70d421a012b1d2f1d014f1e57/domain-lending-collateral-management-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `PUT` | `/api/v1/collateral-cases/{collateralCaseId}/status` | `updateStatus` | `200`, `404` |
| `GET` | `/api/v1/collateral-cases/{collateralCaseId}` | `get` | `200`, `404` |
| `PUT` | `/api/v1/collateral-cases/{collateralCaseId}` | `update` | `200`, `404` |
| `DELETE` | `/api/v1/collateral-cases/{collateralCaseId}` | `remove` | `204`, `404` |
| `POST` | `/api/v1/collateral-cases/{collateralCaseId}/close` | `close` | `200`, `404` |
| `POST` | `/api/v1/collateral-cases` | `create` | `201`, `400` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`CollateralCaseDTO`, `ReasonRequest`, `StatusChangeRequest`

## Contract explorer

<swagger-ui src="../contracts/domain-lending-collateral-management/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
