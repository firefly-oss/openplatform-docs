# domain-core-modelhub

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/domain-core-modelhub) · [Complete contract](../contracts/domain-core-modelhub/openapi.yml)

**Provenance:** base revision `46285e8e047e072ccc9e6909eb98a362038bd5d4`; current copied input SHA256 `baa944e2b5241e27af836330b392eba3ca21a96855c7215df75d58782cc601d6`. [Baseline source](https://github.com/fireflysoftwaresolutions/domain-core-modelhub/blob/46285e8e047e072ccc9e6909eb98a362038bd5d4/domain-core-modelhub-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/records/{id}` | `read` | `200` |
| `PUT` | `/api/v1/records/{id}` | `update` | `200` |
| `POST` | `/api/v1/records` | `create` | `200` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`ModelRecordView`, `RecordDraft`, `StoredRecord`

## Contract explorer

<swagger-ui src="../contracts/domain-core-modelhub/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
