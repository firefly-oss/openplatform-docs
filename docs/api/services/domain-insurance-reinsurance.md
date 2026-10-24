# domain-insurance-reinsurance

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/domain-insurance-reinsurance) · [Complete contract](../contracts/domain-insurance-reinsurance/openapi.yml)

**Provenance:** base revision `8c262120374099f1ca1465e77495b8f52df5c073`; current copied input SHA256 `a1188d722f71198c917df177cd9c8e2014af0385f0098367cf229ced8511d937`. [Baseline source](https://github.com/fireflysoftwaresolutions/domain-insurance-reinsurance/blob/8c262120374099f1ca1465e77495b8f52df5c073/domain-insurance-reinsurance-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `PUT` | `/api/v1/treaties/{treatyId}/status` | `updateStatus` | `200`, `404` |
| `GET` | `/api/v1/treaties/{treatyId}` | `get` | `200`, `404` |
| `PUT` | `/api/v1/treaties/{treatyId}` | `update` | `200`, `404` |
| `DELETE` | `/api/v1/treaties/{treatyId}` | `remove` | `204`, `404` |
| `POST` | `/api/v1/treaties/{treatyId}/expire` | `expire` | `200`, `404` |
| `POST` | `/api/v1/treaties` | `create` | `201`, `400` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`ReasonRequest`, `StatusChangeRequest`, `TreatyDTO`

## Contract explorer

<swagger-ui src="../contracts/domain-insurance-reinsurance/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
