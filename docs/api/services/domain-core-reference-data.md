# domain-core-reference-data

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/domain-core-reference-data) · [Complete contract](../contracts/domain-core-reference-data/openapi.yml)

**Provenance:** base revision `297be312b0ccf174c385801902572ad82bc6a1dd`; current copied input SHA256 `3f0ec732029253288b5635a62e5ab70726555d6095a47e52ee9068f0fcb49b9c`. [Baseline source](https://github.com/fireflysoftwaresolutions/domain-core-reference-data/blob/297be312b0ccf174c385801902572ad82bc6a1dd/domain-core-reference-data-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/catalogs/{catalog}` | `listCatalog` | `200` |
| `GET` | `/api/v1/catalogs/{catalog}/{code}` | `findCatalogEntry` | `200` |
| `GET` | `/api/v1/masters/{master}` | `listMaster` | `200` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`CatalogEntry`

## Contract explorer

<swagger-ui src="../contracts/domain-core-reference-data/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
