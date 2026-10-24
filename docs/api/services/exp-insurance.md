# exp-insurance

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/exp-insurance) · [Complete contract](../contracts/exp-insurance/openapi.yml)

**Provenance:** base revision `b81836f3234f6ed03ef78715e789e1b5c260948c`; current copied input SHA256 `f28dd065bcab99c53f82078f5dd3f0fef7a65c6755ed494a60c8fcf51b9529ec`. [Baseline source](https://github.com/fireflysoftwaresolutions/exp-insurance/blob/b81836f3234f6ed03ef78715e789e1b5c260948c/exp-insurance-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/experience/insurance/quotes/{submissionId}` | `readQuote` | `200` |
| `PUT` | `/api/v1/experience/insurance/quotes/{submissionId}` | `updateQuote` | `200` |
| `PUT` | `/api/v1/experience/insurance/quotes/{submissionId}/status` | `quoteStatus` | `200` |
| `GET` | `/api/v1/experience/insurance/policies/{policyId}` | `readPolicy` | `200` |
| `PUT` | `/api/v1/experience/insurance/policies/{policyId}` | `updatePolicy` | `200` |
| `PUT` | `/api/v1/experience/insurance/policies/{policyId}/status` | `policyStatus` | `200` |
| `GET` | `/api/v1/experience/insurance/claims/{claimId}` | `readClaim` | `200` |
| `PUT` | `/api/v1/experience/insurance/claims/{claimId}` | `updateClaim` | `200` |
| `PUT` | `/api/v1/experience/insurance/claims/{claimId}/status` | `claimStatus` | `200` |
| `POST` | `/api/v1/experience/insurance/quotes` | `createQuote` | `201` |
| `POST` | `/api/v1/experience/insurance/quotes/{submissionId}/withdraw` | `withdrawQuote` | `200` |
| `POST` | `/api/v1/experience/insurance/policies` | `bind` | `201`, `400`, `409`, `422`, `503` |
| `POST` | `/api/v1/experience/insurance/policies/{policyId}/cancel` | `cancelPolicy` | `200` |
| `POST` | `/api/v1/experience/insurance/claims` | `registerClaim` | `201` |
| `POST` | `/api/v1/experience/insurance/claims/{claimId}/close` | `closeClaim` | `200` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`ClaimCommand`, `ClaimStatusBody`, `InsuranceRecord`, `PolicyCommand`, `PolicyStatusBody`, `QuoteCommand`, `QuoteStatusBody`, `ReasonCommand`

## Contract explorer

<swagger-ui src="../contracts/exp-insurance/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
