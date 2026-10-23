# domain-data-credit-bureaus

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/domain-data-credit-bureaus) · [Complete contract](../contracts/domain-data-credit-bureaus/openapi.yml)

**Provenance:** base revision `bcab5dbae24b3daee0573db0de275a3f9aeb26a5`; current copied input SHA256 `85558b03c3230eac5d23beaaa29c6f67f1aa43d6d4eb1c732c2fe50105ebe1b6`. [Baseline source](https://github.com/fireflysoftwaresolutions/domain-data-credit-bureaus/blob/bcab5dbae24b3daee0573db0de275a3f9aeb26a5/domain-data-credit-bureaus-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `POST` | `/api/v1/bureau-inquiries` | `submitBureauInquiry` | `200` |
| `POST` | `/api/v1/bureau-inquiries/{inquiryId}/recovery` | `recoverBureauInquiry` | `200` |
| `GET` | `/api/v1/bureau-inquiries/{inquiryId}` | `readBureauInquiry` | `200` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`BureauInquiry`, `BureauInquiryRequest`, `BureauReportEvidence`

## Contract explorer

<swagger-ui src="../contracts/domain-data-credit-bureaus/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
