# domain-lending-personal-loans

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/domain-lending-personal-loans) · [Complete contract](../contracts/domain-lending-personal-loans/openapi.yml)

**Provenance:** base revision `fe7a27114329649d2a8a3081c16ad03ed4a1cf98`; current copied input SHA256 `7b25505799125da3f88452b9a2419a13def67b9de0203f32f52b63fe1fae664a`. [Baseline source](https://github.com/fireflysoftwaresolutions/domain-lending-personal-loans/blob/fe7a27114329649d2a8a3081c16ad03ed4a1cf98/domain-lending-personal-loans-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/personal-loans/agreements/{agreementId}` | `getAgreement` | `200`, `404` |
| `PUT` | `/api/v1/personal-loans/agreements/{agreementId}` | `updateAgreement` | `200`, `404` |
| `GET` | `/api/v1/personal-loans/agreements` | `listAgreements` | `200` |
| `POST` | `/api/v1/personal-loans/agreements` | `createAgreement` | `201`, `400` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`PaginationResponsePersonalLoanAgreementDTO`, `PersonalLoanAgreementDTO`

## Contract explorer

<swagger-ui src="../contracts/domain-lending-personal-loans/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
