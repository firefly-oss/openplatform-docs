# core-common-security-vault

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/core-common-security-vault) · [Complete contract](../contracts/core-common-security-vault/openapi.yml)

**Provenance:** base revision `0c4ba050cb8f26cc2525ae2d3d7f0e97ac34ce38`; current copied input SHA256 `2efa244e777f8c068ce3f03e37f008f42ff5795c4bed54c26db931d888c7571b`. [Baseline source](https://github.com/fireflysoftwaresolutions/core-common-security-vault/blob/0c4ba050cb8f26cc2525ae2d3d7f0e97ac34ce38/core-common-security-vault-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/environment-types/{id}` | `getEnvironmentTypeById` | `200` |
| `PUT` | `/api/v1/environment-types/{id}` | `updateEnvironmentType` | `200` |
| `DELETE` | `/api/v1/environment-types/{id}` | `deleteEnvironmentType` | `204` |
| `GET` | `/api/v1/encryption-keys/{id}` | `getEncryptionKeyById` | `200` |
| `PUT` | `/api/v1/encryption-keys/{id}` | `updateEncryptionKey` | `200` |
| `DELETE` | `/api/v1/encryption-keys/{id}` | `deleteEncryptionKey` | `204` |
| `GET` | `/api/v1/credentials/{id}` | `getCredentialById` | `200`, `404` |
| `PUT` | `/api/v1/credentials/{id}` | `updateCredential` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/credentials/{id}` | `deleteCredential` | `204`, `404` |
| `GET` | `/api/v1/credential-types/{id}` | `getCredentialTypeById` | `200`, `404` |
| `PUT` | `/api/v1/credential-types/{id}` | `updateCredentialType` | `200`, `404` |
| `DELETE` | `/api/v1/credential-types/{id}` | `deleteCredentialType` | `204`, `404` |
| `GET` | `/api/v1/credential-statuses/{id}` | `getCredentialStatusById` | `200` |
| `PUT` | `/api/v1/credential-statuses/{id}` | `updateCredentialStatus` | `200` |
| `DELETE` | `/api/v1/credential-statuses/{id}` | `deleteCredentialStatus` | `204` |
| `POST` | `/api/v1/environment-types` | `createEnvironmentType` | `200` |
| `POST` | `/api/v1/environment-types/filter` | `filterEnvironmentTypes` | `200` |
| `POST` | `/api/v1/encryption-keys` | `createEncryptionKey` | `200` |
| `POST` | `/api/v1/encryption-keys/filter` | `filterEncryptionKeys` | `200` |
| `POST` | `/api/v1/credentials` | `createCredential` | `201`, `400` |
| `POST` | `/api/v1/credentials/{id}/decrypt` | `decryptCredential` | `200`, `403`, `404` |
| `POST` | `/api/v1/credentials/filter` | `filterCredentials` | `200` |
| `POST` | `/api/v1/credential-versions` | `createCredentialVersion` | `200` |
| `POST` | `/api/v1/credential-types` | `createCredentialType` | `201`, `400` |
| `POST` | `/api/v1/credential-types/filter` | `filterCredentialTypes` | `200` |
| `POST` | `/api/v1/credential-statuses` | `createCredentialStatus` | `200` |
| `POST` | `/api/v1/credential-statuses/filter` | `filterCredentialStatuses` | `200` |
| `GET` | `/api/v1/credential-versions/{id}` | `getCredentialVersionById` | `200` |
| `GET` | `/api/v1/credential-versions/credential/{credentialId}` | `getVersionsByCredentialId` | `200` |
| `GET` | `/api/v1/credential-versions/credential/{credentialId}/current` | `getCurrentVersion` | `200` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`CredentialDTO`, `CredentialStatusDTO`, `CredentialTypeDTO`, `CredentialVersionDTO`, `EncryptionKeyDTO`, `EnvironmentTypeDTO`, `FilterOptions`, `FilterRequestCredentialStatusDTO`, `FilterRequestCredentialTypeDTO`, `FilterRequestEncryptionKeyDTO`, `FilterRequestEnvironmentTypeDTO`, `PaginationRequest`, `PaginationResponseCredentialDTO`, `PaginationResponseCredentialStatusDTO`, `PaginationResponseCredentialTypeDTO`, `PaginationResponseEncryptionKeyDTO`, `PaginationResponseEnvironmentTypeDTO`, `RangeFilter`, `RangeObject`

## Contract explorer

<swagger-ui src="../contracts/core-common-security-vault/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
