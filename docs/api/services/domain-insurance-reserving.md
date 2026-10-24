# domain-insurance-reserving

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/domain-insurance-reserving) · [Complete contract](../contracts/domain-insurance-reserving/openapi.yml)

**Provenance:** base revision `8049135716eba977ac2ab5ecf0e3b7e5b364516a`; current copied input SHA256 `d45ac848f1d5f3875e975cf54f1807f511b1879dfe7bce00a6c23f65f9bfa57c`. [Baseline source](https://github.com/fireflysoftwaresolutions/domain-insurance-reserving/blob/8049135716eba977ac2ab5ecf0e3b7e5b364516a/domain-insurance-reserving-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `PUT` | `/api/v1/reserve-snapshots/{reserveSnapshotId}/status` | `updateStatus` | `200`, `404` |
| `GET` | `/api/v1/reserve-snapshots/{reserveSnapshotId}` | `get` | `200`, `404` |
| `PUT` | `/api/v1/reserve-snapshots/{reserveSnapshotId}` | `update` | `200`, `404` |
| `DELETE` | `/api/v1/reserve-snapshots/{reserveSnapshotId}` | `remove` | `204`, `404` |
| `POST` | `/api/v1/reserve-snapshots/{reserveSnapshotId}/accept` | `accept` | `200`, `404` |
| `POST` | `/api/v1/reserve-snapshots` | `create` | `201`, `400` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`ReasonRequest`, `ReserveSnapshotDTO`, `StatusChangeRequest`

## Contract explorer

<swagger-ui src="../contracts/domain-insurance-reserving/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
