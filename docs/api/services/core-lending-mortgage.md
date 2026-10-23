# core-lending-mortgage

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/core-lending-mortgage) · [Complete contract](../contracts/core-lending-mortgage/openapi.yml)

**Provenance:** base revision `86bc04362b103752fe496523faa29fff321178b5`; current copied input SHA256 `2512ec10ca8a4e8eed05b38c0a65929981a5ab462cc3761ee3fcf879895d0785`. [Baseline source](https://github.com/fireflysoftwaresolutions/core-lending-mortgage/blob/86bc04362b103752fe496523faa29fff321178b5/core-lending-mortgages-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/mortgage-agreements/{mortgageAgreementId}` | `getById` | `200` |
| `PUT` | `/api/v1/mortgage-agreements/{mortgageAgreementId}` | `update` | `200` |
| `DELETE` | `/api/v1/mortgage-agreements/{mortgageAgreementId}` | `delete` | `200` |
| `GET` | `/api/v1/mortgage-agreements` | `findAll` | `200` |
| `POST` | `/api/v1/mortgage-agreements` | `create` | `200` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`FilterOptions`, `FilterRequestMortgageAgreementDTO`, `MortgageAgreementDTO`, `PaginationRequest`, `PaginationResponseMortgageAgreementDTO`, `RangeFilter`, `RangeObject`

## Contract explorer

<swagger-ui src="../contracts/core-lending-mortgage/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
