# core-lending-credit-cards

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/core-lending-credit-cards) · [Complete contract](../contracts/core-lending-credit-cards/openapi.yml)

**Provenance:** base revision `943f4494737c2a06bfe81110e2fbcb1d842879c6`; current copied input SHA256 `476450c9a23c9580dc057b2694bf05aa490989dfdeab035667a8b77cb2a76b9e`. [Baseline source](https://github.com/fireflysoftwaresolutions/core-lending-credit-cards/blob/943f4494737c2a06bfe81110e2fbcb1d842879c6/core-lending-credit-cards-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/cc-revolving-lines/{ccRevolvingLineId}` | `getById` | `200` |
| `PUT` | `/api/v1/cc-revolving-lines/{ccRevolvingLineId}` | `update` | `200` |
| `DELETE` | `/api/v1/cc-revolving-lines/{ccRevolvingLineId}` | `delete` | `200` |
| `GET` | `/api/v1/cc-revolving-lines/{ccRevolvingLineId}/transactions/{ccTransactionId}` | `getById_1` | `200` |
| `PUT` | `/api/v1/cc-revolving-lines/{ccRevolvingLineId}/transactions/{ccTransactionId}` | `update_1` | `200` |
| `DELETE` | `/api/v1/cc-revolving-lines/{ccRevolvingLineId}/transactions/{ccTransactionId}` | `delete_1` | `200` |
| `GET` | `/api/v1/cc-revolving-lines/{ccRevolvingLineId}/servicing-agreements/{ccServicingAgreementId}` | `getById_2` | `200` |
| `PUT` | `/api/v1/cc-revolving-lines/{ccRevolvingLineId}/servicing-agreements/{ccServicingAgreementId}` | `update_2` | `200` |
| `DELETE` | `/api/v1/cc-revolving-lines/{ccRevolvingLineId}/servicing-agreements/{ccServicingAgreementId}` | `delete_2` | `200` |
| `GET` | `/api/v1/cc-revolving-lines/{ccRevolvingLineId}/payments/{ccPaymentId}` | `getById_3` | `200` |
| `PUT` | `/api/v1/cc-revolving-lines/{ccRevolvingLineId}/payments/{ccPaymentId}` | `update_3` | `200` |
| `DELETE` | `/api/v1/cc-revolving-lines/{ccRevolvingLineId}/payments/{ccPaymentId}` | `delete_3` | `200` |
| `GET` | `/api/v1/cc-revolving-lines/{ccRevolvingLineId}/billing-cycles/{ccBillingCycleId}` | `getById_4` | `200` |
| `PUT` | `/api/v1/cc-revolving-lines/{ccRevolvingLineId}/billing-cycles/{ccBillingCycleId}` | `update_4` | `200` |
| `DELETE` | `/api/v1/cc-revolving-lines/{ccRevolvingLineId}/billing-cycles/{ccBillingCycleId}` | `delete_4` | `200` |
| `GET` | `/api/v1/cc-revolving-lines/{ccRevolvingLineId}/billing-cycles/{ccBillingCycleId}/statements/{ccStatementId}` | `getById_5` | `200` |
| `PUT` | `/api/v1/cc-revolving-lines/{ccRevolvingLineId}/billing-cycles/{ccBillingCycleId}/statements/{ccStatementId}` | `update_5` | `200` |
| `DELETE` | `/api/v1/cc-revolving-lines/{ccRevolvingLineId}/billing-cycles/{ccBillingCycleId}/statements/{ccStatementId}` | `delete_5` | `200` |
| `GET` | `/api/v1/cc-revolving-lines` | `findAll` | `200` |
| `POST` | `/api/v1/cc-revolving-lines` | `create` | `200` |
| `GET` | `/api/v1/cc-revolving-lines/{ccRevolvingLineId}/transactions` | `findAll_1` | `200` |
| `POST` | `/api/v1/cc-revolving-lines/{ccRevolvingLineId}/transactions` | `create_1` | `200` |
| `GET` | `/api/v1/cc-revolving-lines/{ccRevolvingLineId}/servicing-agreements` | `findAll_2` | `200` |
| `POST` | `/api/v1/cc-revolving-lines/{ccRevolvingLineId}/servicing-agreements` | `create_2` | `200` |
| `GET` | `/api/v1/cc-revolving-lines/{ccRevolvingLineId}/payments` | `findAll_3` | `200` |
| `POST` | `/api/v1/cc-revolving-lines/{ccRevolvingLineId}/payments` | `create_3` | `200` |
| `GET` | `/api/v1/cc-revolving-lines/{ccRevolvingLineId}/billing-cycles` | `findAll_4` | `200` |
| `POST` | `/api/v1/cc-revolving-lines/{ccRevolvingLineId}/billing-cycles` | `create_4` | `200` |
| `GET` | `/api/v1/cc-revolving-lines/{ccRevolvingLineId}/billing-cycles/{ccBillingCycleId}/statements` | `findAll_5` | `200` |
| `POST` | `/api/v1/cc-revolving-lines/{ccRevolvingLineId}/billing-cycles/{ccBillingCycleId}/statements` | `create_5` | `200` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`CcBillingCycleDTO`, `CcPaymentDTO`, `CcRevolvingLineDTO`, `CcServicingAgreementDTO`, `CcStatementDTO`, `CcTransactionDTO`, `FilterOptions`, `FilterRequestCcBillingCycleDTO`, `FilterRequestCcPaymentDTO`, `FilterRequestCcRevolvingLineDTO`, `FilterRequestCcServicingAgreementDTO`, `FilterRequestCcStatementDTO`, `FilterRequestCcTransactionDTO`, `PaginationRequest`, `PaginationResponseCcBillingCycleDTO`, `PaginationResponseCcPaymentDTO`, `PaginationResponseCcRevolvingLineDTO`, `PaginationResponseCcServicingAgreementDTO`, `PaginationResponseCcStatementDTO`, `PaginationResponseCcTransactionDTO`, `RangeFilter`, `RangeObject`

## Contract explorer

<swagger-ui src="../contracts/core-lending-credit-cards/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
