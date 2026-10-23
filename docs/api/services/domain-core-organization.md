# domain-core-organization

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/domain-core-organization) · [Complete contract](../contracts/domain-core-organization/openapi.yml)

**Provenance:** base revision `142a18fb7f99823dbb7ec0381603b369b91f2f99`; current copied input SHA256 `7c22206aa52c12cfdb4cbd282e391ae0e9c592a1064e8309146030f44809304c`. [Baseline source](https://github.com/fireflysoftwaresolutions/domain-core-organization/blob/142a18fb7f99823dbb7ec0381603b369b91f2f99/domain-core-organization-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/branches/{id}` | `read` | `200` |
| `PUT` | `/api/v1/branches/{id}` | `update` | `200` |
| `POST` | `/api/v1/branches` | `create` | `200` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`BranchDraft`, `BranchView`, `StoredBranch`

## Contract explorer

<swagger-ui src="../contracts/domain-core-organization/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
