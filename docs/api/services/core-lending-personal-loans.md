# core-lending-personal-loans

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/core-lending-personal-loans) · [Complete contract](../contracts/core-lending-personal-loans/openapi.yml)

**Provenance:** base revision `090007a2cbcbcd2cab7bd9234e5613a3d4b9947c`; current copied input SHA256 `1d5bd3223090ff7f1b9130863c8929354542a04e5462abb7dc881855d257b158`. [Baseline source](https://github.com/fireflysoftwaresolutions/core-lending-personal-loans/blob/090007a2cbcbcd2cab7bd9234e5613a3d4b9947c/core-lending-personal-loans-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/personal-loan-agreements/{personalLoanAgreementId}` | `getById` | `200` |
| `PUT` | `/api/v1/personal-loan-agreements/{personalLoanAgreementId}` | `update` | `200` |
| `DELETE` | `/api/v1/personal-loan-agreements/{personalLoanAgreementId}` | `delete` | `200` |
| `GET` | `/api/v1/personal-loan-agreements` | `findAll` | `200` |
| `POST` | `/api/v1/personal-loan-agreements` | `create` | `200` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`FilterOptions`, `FilterRequestPersonalLoanAgreementDTO`, `PaginationRequest`, `PaginationResponsePersonalLoanAgreementDTO`, `PersonalLoanAgreementDTO`, `RangeFilter`, `RangeObject`

## Contract explorer

<swagger-ui src="../contracts/core-lending-personal-loans/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
