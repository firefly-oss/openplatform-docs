# exp-channel-management

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/exp-channel-management) · [Complete contract](../contracts/exp-channel-management/openapi.yml)

**Provenance:** base revision `9291cf575f7888894fdc31ffa411d121758f6963`; current copied input SHA256 `b97524e8eb1416c4189cac6be0bc4e18254fc46ff2205f63961efb4c99e88483`. [Baseline source](https://github.com/fireflysoftwaresolutions/exp-channel-management/blob/9291cf575f7888894fdc31ffa411d121758f6963/exp-channel-management-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/experience/channel/master-data` | `getMasterData` | `200` |
| `GET` | `/api/v1/experience/channel/languages/{localeId}` | `getLanguage` | `200` |
| `GET` | `/api/v1/experience/channel/languages` | `getLanguages` | `200` |
| `GET` | `/api/v1/experience/channel/init` | `getChannelInit` | `200` |
| `GET` | `/api/v1/experience/channel/branding` | `getChannelBranding` | `200` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`BrandingDTO`, `ChannelInitDTO`, `LanguageDTO`, `LookupEntryDTO`, `MasterDataDTO`

## Contract explorer

<swagger-ui src="../contracts/exp-channel-management/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
