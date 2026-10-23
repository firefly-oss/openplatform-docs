# domain-common-accounting

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/domain-common-accounting) · [Complete contract](../contracts/domain-common-accounting/openapi.yml)

**Provenance:** base revision `c54d9fc44bb2042c82e8a956f201265e39157dbf`; current copied input SHA256 `13a9c4ff893c85e5e6a081d3908d9c97c43649f87147147bddbbe4b3fccc436e`. [Baseline source](https://github.com/fireflysoftwaresolutions/domain-common-accounting/blob/c54d9fc44bb2042c82e8a956f201265e39157dbf/domain-common-accounting-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `POST` | `/api/v1/journals` | `postJournal` | `200` |
| `GET` | `/api/v1/journals/{businessDate}` | `readJournal` | `200` |
| `GET` | `/api/v1/accounts/{id}` | `readAccount` | `200` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`InterestJournal`, `JournalRequest`, `LedgerAccountView`

## Contract explorer

<swagger-ui src="../contracts/domain-common-accounting/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
