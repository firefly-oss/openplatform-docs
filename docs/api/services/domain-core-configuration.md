# domain-core-configuration

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/domain-core-configuration) · [Complete contract](../contracts/domain-core-configuration/openapi.yml)

**Provenance:** base revision `912c97d58fd77936f7a2f1b203ae8bc65c06bc97`; current copied input SHA256 `0aeea08e667a6005a21d700fccde0be379c62938c2f5cc333f750bdddfe52540`. [Baseline source](https://github.com/fireflysoftwaresolutions/domain-core-configuration/blob/912c97d58fd77936f7a2f1b203ae8bc65c06bc97/domain-core-configuration-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/configuration/tenant-brandings` | `getTenantBrandings` | `200` |
| `GET` | `/api/v1/configuration/lookup-items` | `getMasterDataLookups` | `200` |
| `GET` | `/api/v1/configuration/lookup-domains` | `getLookupDomains` | `200` |
| `GET` | `/api/v1/configuration/languages` | `getLanguages` | `200` |
| `GET` | `/api/v1/configuration/init` | `getInitConfiguration` | `200` |
| `POST` | `/api/v1/environment-configs` | `createConfig` | `201` |
| `POST` | `/api/v1/environment-configs/filter` | `filterConfigs` | `200` |
| `GET` | `/api/v1/parameters/by-key/{key}` | `getBusinessParameterByKey` | `200`, `404` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`BusinessParameter`, `CountryDTO`, `CurrencyDTO`, `EnvironmentConfig`, `EnvironmentConfigFilter`, `EnvironmentConfigPage`, `InitConfigResponse`, `LegalFormDTO`, `LookupItemDTO`, `PaginationResponse`, `TenantBrandingDTO`

## Contract explorer

<swagger-ui src="../contracts/domain-core-configuration/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
