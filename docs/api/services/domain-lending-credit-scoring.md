# domain-lending-credit-scoring

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/domain-lending-credit-scoring) · [Complete contract](../contracts/domain-lending-credit-scoring/openapi.yml)

**Provenance:** base revision `68b46911427a77bcd0926aa2cc463cd3b2f9f7f0`; current copied input SHA256 `7d0bed9bcbf6eb178210dbc39769a3583c336ca5885a2444c6c6592ded8672fb`. [Baseline source](https://github.com/fireflysoftwaresolutions/domain-lending-credit-scoring/blob/68b46911427a77bcd0926aa2cc463cd3b2f9f7f0/domain-lending-credit-scoring-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `POST` | `/api/v1/scoring/requests` | `requestScoring` | `200`, `202`, `422`, `400`, `500` |
| `POST` | `/api/v1/decisions` | `evaluateDecision` | `200`, `400` |
| `POST` | `/api/v1/credit-scoring/cases` | `initiateScoring` | `200` |
| `GET` | `/api/v1/scoring/requests/{requestId}/result` | `getScoringResult` | `200`, `404` |
| `GET` | `/api/v1/scoring/requests/{requestId}/bureau-reports` | `getBureauReports` | `200`, `404` |
| `GET` | `/api/v1/scoring/requests/{requestId}` | `getScoringRequest` | `200`, `404` |
| `GET` | `/api/v1/scoring/models` | `getScoringModels` | `200` |
| `GET` | `/api/v1/credit-scoring/cases/{scoringCaseId}` | `getScoringCase` | `200` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`DecisionRequest`, `DecisionResponse`, `InitiateScoringCaseCommand`, `PaginationResponseScoringBureauCallDTO`, `PaginationResponseScoringModelDTO`, `RequestScoringCommand`, `ScoringBureauCallDTO`, `ScoringCaseDTO`, `ScoringModelDTO`, `ScoringProcessResponse`, `ScoringRequestDTO`, `ScoringResultDTO`

## Contract explorer

<swagger-ui src="../contracts/domain-lending-credit-scoring/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
