# domain-core-user-mgmt

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/domain-core-user-mgmt) · [Complete contract](../contracts/domain-core-user-mgmt/openapi.yml)

**Provenance:** base revision `8b6649ccdc336c21f1e64f5c2ca38df26d7cd204`; current copied input SHA256 `a7e2664c33dd662c98817066f3318a529ec0f9030aaeb2736d0ba55aa2d80921`. [Baseline source](https://github.com/fireflysoftwaresolutions/domain-core-user-mgmt/blob/8b6649ccdc336c21f1e64f5c2ca38df26d7cd204/domain-core-user-mgmt-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/accounts/{id}` | `read` | `200` |
| `PUT` | `/api/v1/accounts/{id}` | `update` | `200` |
| `POST` | `/api/v1/accounts` | `create` | `200` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`StoredUserAccount`, `UserAccountDraft`, `UserAccountView`

## Contract explorer

<swagger-ui src="../contracts/domain-core-user-mgmt/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
