# domain-lending-delinquency-collections

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/domain-lending-delinquency-collections) · [Complete contract](../contracts/domain-lending-delinquency-collections/openapi.yml)

**Provenance:** base revision `2c470b21cc164bb30825cebc055fd4f4c65f6475`; current copied input SHA256 `48240ddef5082f5ce2e92c79d90cd72cff67bbf08f948d10614ba4c3c3d47aab`. [Baseline source](https://github.com/fireflysoftwaresolutions/domain-lending-delinquency-collections/blob/2c470b21cc164bb30825cebc055fd4f4c65f6475/domain-lending-delinquency-collections-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `PUT` | `/api/v1/collection-cases/{collectionCaseId}/status` | `updateStatus` | `200`, `404` |
| `GET` | `/api/v1/collection-cases/{collectionCaseId}` | `get` | `200`, `404` |
| `PUT` | `/api/v1/collection-cases/{collectionCaseId}` | `update` | `200`, `404` |
| `DELETE` | `/api/v1/collection-cases/{collectionCaseId}` | `remove` | `204`, `404` |
| `POST` | `/api/v1/collection-cases/{collectionCaseId}/close` | `close` | `200`, `404` |
| `GET` | `/api/v1/collection-cases` | `list` | `200` |
| `POST` | `/api/v1/collection-cases` | `create` | `201`, `400` |
| `POST` | `/api/v1/collection-cases/{collectionCaseId}/promises` | `registerPaymentPromise` | `201`, `400` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`CollectionCaseDTO`, `CollectionPromiseDTO`, `PaginationResponseCollectionCaseDTO`, `ReasonRequest`, `StatusChangeRequest`

## Contract explorer

<swagger-ui src="../contracts/domain-lending-delinquency-collections/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
