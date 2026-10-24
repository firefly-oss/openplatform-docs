# domain-core-security-vault

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/domain-core-security-vault) · [Complete contract](../contracts/domain-core-security-vault/openapi.yml)

**Provenance:** base revision `d28642121cd1fec88e7a99aae04dd93278f0e0e0`; current copied input SHA256 `f67d955f60e47277917b13d316df442bdb845332d128e21a29dce927ae8ca202`. [Baseline source](https://github.com/fireflysoftwaresolutions/domain-core-security-vault/blob/d28642121cd1fec88e7a99aae04dd93278f0e0e0/domain-core-security-vault-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/credentials/{id}` | `read` | `200` |
| `PUT` | `/api/v1/credentials/{id}` | `update` | `200` |
| `POST` | `/api/v1/credentials` | `create` | `200` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`CredentialDraft`, `CredentialView`, `StoredCredential`

## Contract explorer

<swagger-ui src="../contracts/domain-core-security-vault/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
