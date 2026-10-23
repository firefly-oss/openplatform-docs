# core-lending-credit-scoring

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/core-lending-credit-scoring) · [Complete contract](../contracts/core-lending-credit-scoring/openapi.yml)

**Provenance:** base revision `5e1a0a128c9c967b55a37101812d72775eabf71b`; current copied input SHA256 `b41dabf137c665e78275a3d86d45b3b00c2648c2870c3fd73b4d70df514d0776`. [Baseline source](https://github.com/fireflysoftwaresolutions/core-lending-credit-scoring/blob/5e1a0a128c9c967b55a37101812d72775eabf71b/core-lending-credit-scoring-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/scoring-models/{scoringModelId}` | `getById` | `200` |
| `PUT` | `/api/v1/scoring-models/{scoringModelId}` | `update` | `200` |
| `DELETE` | `/api/v1/scoring-models/{scoringModelId}` | `delete` | `200` |
| `GET` | `/api/v1/scoring-cases/{scoringCaseId}` | `getById_1` | `200` |
| `PUT` | `/api/v1/scoring-cases/{scoringCaseId}` | `update_1` | `200` |
| `DELETE` | `/api/v1/scoring-cases/{scoringCaseId}` | `delete_1` | `200` |
| `GET` | `/api/v1/scoring-cases/{scoringCaseId}/requests/{scoringRequestId}` | `getById_2` | `200` |
| `PUT` | `/api/v1/scoring-cases/{scoringCaseId}/requests/{scoringRequestId}` | `update_2` | `200` |
| `DELETE` | `/api/v1/scoring-cases/{scoringCaseId}/requests/{scoringRequestId}` | `delete_2` | `200` |
| `GET` | `/api/v1/scoring-cases/{scoringCaseId}/requests/{scoringRequestId}/results/{scoringResultId}` | `getById_3` | `200` |
| `PUT` | `/api/v1/scoring-cases/{scoringCaseId}/requests/{scoringRequestId}/results/{scoringResultId}` | `update_3` | `200` |
| `DELETE` | `/api/v1/scoring-cases/{scoringCaseId}/requests/{scoringRequestId}/results/{scoringResultId}` | `delete_3` | `200` |
| `GET` | `/api/v1/scoring-cases/{scoringCaseId}/bureau-calls/{scoringBureauCallId}` | `getById_4` | `200` |
| `PUT` | `/api/v1/scoring-cases/{scoringCaseId}/bureau-calls/{scoringBureauCallId}` | `update_4` | `200` |
| `DELETE` | `/api/v1/scoring-cases/{scoringCaseId}/bureau-calls/{scoringBureauCallId}` | `delete_4` | `200` |
| `PUT` | `/api/v1/bureau-inquiries/{inquiryId}/evidence` | `recordBureauEvidence` | `200` |
| `GET` | `/api/v1/scoring-models` | `findAll` | `200` |
| `POST` | `/api/v1/scoring-models` | `create` | `200` |
| `GET` | `/api/v1/scoring-cases` | `findAll_1` | `200` |
| `POST` | `/api/v1/scoring-cases` | `create_1` | `200` |
| `GET` | `/api/v1/scoring-cases/{scoringCaseId}/requests` | `findAll_2` | `200` |
| `POST` | `/api/v1/scoring-cases/{scoringCaseId}/requests` | `create_2` | `200` |
| `GET` | `/api/v1/scoring-cases/{scoringCaseId}/requests/{scoringRequestId}/results` | `findAll_3` | `200` |
| `POST` | `/api/v1/scoring-cases/{scoringCaseId}/requests/{scoringRequestId}/results` | `create_3` | `200` |
| `GET` | `/api/v1/scoring-cases/{scoringCaseId}/bureau-calls` | `findAll_4` | `200` |
| `POST` | `/api/v1/scoring-cases/{scoringCaseId}/bureau-calls` | `create_4` | `200` |
| `POST` | `/api/v1/bureau-scoring-evaluations` | `recordBureauScoringEvaluation` | `200` |
| `POST` | `/api/v1/bureau-inquiries` | `openBureauInquiry` | `200` |
| `GET` | `/api/v1/scoring-requests/{scoringRequestId}` | `getScoringRequestById` | `200` |
| `GET` | `/api/v1/bureau-scoring-evaluations/by-inquiry/{inquiryId}` | `getBureauScoringEvaluation` | `200` |
| `GET` | `/api/v1/bureau-inquiries/{inquiryId}` | `getBureauInquiry` | `200` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`BureauEvaluationRequest`, `BureauInquiry`, `BureauInquiryRequest`, `BureauReportEvidence`, `BureauScoringEvaluation`, `FilterOptions`, `FilterRequestScoringBureauCallDTO`, `FilterRequestScoringCaseDTO`, `FilterRequestScoringModelDTO`, `FilterRequestScoringRequestDTO`, `FilterRequestScoringResultDTO`, `PaginationRequest`, `PaginationResponseScoringBureauCallDTO`, `PaginationResponseScoringCaseDTO`, `PaginationResponseScoringModelDTO`, `PaginationResponseScoringRequestDTO`, `PaginationResponseScoringResultDTO`, `RangeFilter`, `RangeObject`, `ScoringBureauCallDTO`, `ScoringCaseDTO`, `ScoringModelDTO`, `ScoringRequestDTO`, `ScoringResultDTO`

## Contract explorer

<swagger-ui src="../contracts/core-lending-credit-scoring/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
