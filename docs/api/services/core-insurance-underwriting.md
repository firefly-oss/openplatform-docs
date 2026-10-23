# core-insurance-underwriting

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/core-insurance-underwriting) · [Complete contract](../contracts/core-insurance-underwriting/openapi.yml)

**Provenance:** base revision `6985af7b185fbb96283a0aac6279a6199d1e57f7`; current copied input SHA256 `72e870af6d31348d98e26cd11935ad948b6b333c4f9389515373f22bdf146840`. [Baseline source](https://github.com/fireflysoftwaresolutions/core-insurance-underwriting/blob/6985af7b185fbb96283a0aac6279a6199d1e57f7/core-insurance-underwriting-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/submissions/{submissionId}` | `getSubmissionById` | `200`, `404` |
| `PUT` | `/api/v1/submissions/{submissionId}` | `updateSubmission` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/submissions/{submissionId}` | `deleteSubmission` | `204`, `404` |
| `GET` | `/api/v1/submissions/{submissionId}/subjectivities/{subjectivityId}` | `getSubjectivityById` | `200`, `404` |
| `PUT` | `/api/v1/submissions/{submissionId}/subjectivities/{subjectivityId}` | `updateSubjectivity` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/submissions/{submissionId}/subjectivities/{subjectivityId}` | `deleteSubjectivity` | `204`, `404` |
| `GET` | `/api/v1/submissions/{submissionId}/status-history/{submissionStatusHistoryId}` | `getSubmissionStatusHistoryById` | `200`, `404` |
| `PUT` | `/api/v1/submissions/{submissionId}/status-history/{submissionStatusHistoryId}` | `updateSubmissionStatusHistory` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/submissions/{submissionId}/status-history/{submissionStatusHistoryId}` | `deleteSubmissionStatusHistory` | `204`, `404` |
| `GET` | `/api/v1/submissions/{submissionId}/statements-of-value/{statementOfValueId}` | `getStatementOfValueById` | `200`, `404` |
| `PUT` | `/api/v1/submissions/{submissionId}/statements-of-value/{statementOfValueId}` | `updateStatementOfValue` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/submissions/{submissionId}/statements-of-value/{statementOfValueId}` | `deleteStatementOfValue` | `204`, `404` |
| `GET` | `/api/v1/submissions/{submissionId}/sanctions-screens/{sanctionsScreenId}` | `getSanctionsScreenById` | `200`, `404` |
| `PUT` | `/api/v1/submissions/{submissionId}/sanctions-screens/{sanctionsScreenId}` | `updateSanctionsScreen` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/submissions/{submissionId}/sanctions-screens/{sanctionsScreenId}` | `deleteSanctionsScreen` | `204`, `404` |
| `GET` | `/api/v1/submissions/{submissionId}/risks/{submissionRiskId}` | `getSubmissionRiskById` | `200`, `404` |
| `PUT` | `/api/v1/submissions/{submissionId}/risks/{submissionRiskId}` | `updateSubmissionRisk` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/submissions/{submissionId}/risks/{submissionRiskId}` | `deleteSubmissionRisk` | `204`, `404` |
| `GET` | `/api/v1/submissions/{submissionId}/referrals/{referralId}` | `getReferralById` | `200`, `404` |
| `PUT` | `/api/v1/submissions/{submissionId}/referrals/{referralId}` | `updateReferral` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/submissions/{submissionId}/referrals/{referralId}` | `deleteReferral` | `204`, `404` |
| `GET` | `/api/v1/submissions/{submissionId}/quotes/{quoteId}` | `getQuoteById` | `200`, `404` |
| `PUT` | `/api/v1/submissions/{submissionId}/quotes/{quoteId}` | `updateQuote` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/submissions/{submissionId}/quotes/{quoteId}` | `deleteQuote` | `204`, `404` |
| `GET` | `/api/v1/submissions/{submissionId}/loss-runs/{lossRunId}` | `getLossRunById` | `200`, `404` |
| `PUT` | `/api/v1/submissions/{submissionId}/loss-runs/{lossRunId}` | `updateLossRun` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/submissions/{submissionId}/loss-runs/{lossRunId}` | `deleteLossRun` | `204`, `404` |
| `GET` | `/api/v1/submissions/{submissionId}/evidence/{underwritingEvidenceId}` | `getUnderwritingEvidenceById` | `200`, `404` |
| `PUT` | `/api/v1/submissions/{submissionId}/evidence/{underwritingEvidenceId}` | `updateUnderwritingEvidence` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/submissions/{submissionId}/evidence/{underwritingEvidenceId}` | `deleteUnderwritingEvidence` | `204`, `404` |
| `GET` | `/api/v1/submissions/{submissionId}/decisions/{underwritingDecisionId}` | `getUnderwritingDecisionById` | `200`, `404` |
| `PUT` | `/api/v1/submissions/{submissionId}/decisions/{underwritingDecisionId}` | `updateUnderwritingDecision` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/submissions/{submissionId}/decisions/{underwritingDecisionId}` | `deleteUnderwritingDecision` | `204`, `404` |
| `GET` | `/api/v1/submissions/{submissionId}/clearances/{clearanceId}` | `getClearanceById` | `200`, `404` |
| `PUT` | `/api/v1/submissions/{submissionId}/clearances/{clearanceId}` | `updateClearance` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/submissions/{submissionId}/clearances/{clearanceId}` | `deleteClearance` | `204`, `404` |
| `POST` | `/api/v1/submissions` | `createSubmission` | `201`, `400` |
| `POST` | `/api/v1/submissions/{submissionId}/subjectivities` | `createSubjectivity` | `201`, `400` |
| `POST` | `/api/v1/submissions/{submissionId}/subjectivities/filter` | `filterSubjectivities` | `200`, `400` |
| `POST` | `/api/v1/submissions/{submissionId}/status-history` | `createSubmissionStatusHistory` | `201`, `400` |
| `POST` | `/api/v1/submissions/{submissionId}/status-history/filter` | `filterSubmissionStatusHistories` | `200`, `400` |
| `POST` | `/api/v1/submissions/{submissionId}/statements-of-value` | `createStatementOfValue` | `201`, `400` |
| `POST` | `/api/v1/submissions/{submissionId}/statements-of-value/filter` | `filterStatementsOfValue` | `200`, `400` |
| `POST` | `/api/v1/submissions/{submissionId}/sanctions-screens` | `createSanctionsScreen` | `201`, `400` |
| `POST` | `/api/v1/submissions/{submissionId}/sanctions-screens/filter` | `filterSanctionsScreens` | `200`, `400` |
| `POST` | `/api/v1/submissions/{submissionId}/risks` | `createSubmissionRisk` | `201`, `400` |
| `POST` | `/api/v1/submissions/{submissionId}/risks/filter` | `filterSubmissionRisks` | `200`, `400` |
| `POST` | `/api/v1/submissions/{submissionId}/referrals` | `createReferral` | `201`, `400` |
| `POST` | `/api/v1/submissions/{submissionId}/referrals/filter` | `filterReferrals` | `200`, `400` |
| `POST` | `/api/v1/submissions/{submissionId}/quotes` | `createQuote` | `201`, `400` |
| `POST` | `/api/v1/submissions/{submissionId}/quotes/filter` | `filterQuotes` | `200`, `400` |
| `POST` | `/api/v1/submissions/{submissionId}/loss-runs` | `createLossRun` | `201`, `400` |
| `POST` | `/api/v1/submissions/{submissionId}/loss-runs/filter` | `filterLossRuns` | `200`, `400` |
| `POST` | `/api/v1/submissions/{submissionId}/evidence` | `createUnderwritingEvidence` | `201`, `400` |
| `POST` | `/api/v1/submissions/{submissionId}/evidence/filter` | `filterUnderwritingEvidenceItems` | `200`, `400` |
| `POST` | `/api/v1/submissions/{submissionId}/decisions` | `createUnderwritingDecision` | `201`, `400` |
| `POST` | `/api/v1/submissions/{submissionId}/decisions/filter` | `filterUnderwritingDecisions` | `200`, `400` |
| `POST` | `/api/v1/submissions/{submissionId}/clearances` | `createClearance` | `201`, `400` |
| `POST` | `/api/v1/submissions/{submissionId}/clearances/filter` | `filterClearances` | `200`, `400` |
| `POST` | `/api/v1/submissions/filter` | `filterSubmissions` | `200`, `400` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`ClearanceDTO`, `FilterOptions`, `FilterRequestClearanceDTO`, `FilterRequestLossRunDTO`, `FilterRequestQuoteDTO`, `FilterRequestReferralDTO`, `FilterRequestSanctionsScreenDTO`, `FilterRequestStatementOfValueDTO`, `FilterRequestSubjectivityDTO`, `FilterRequestSubmissionDTO`, `FilterRequestSubmissionRiskDTO`, `FilterRequestSubmissionStatusHistoryDTO`, `FilterRequestUnderwritingDecisionDTO`, `FilterRequestUnderwritingEvidenceDTO`, `LossRunDTO`, `PaginationRequest`, `PaginationResponseClearanceDTO`, `PaginationResponseLossRunDTO`, `PaginationResponseQuoteDTO`, `PaginationResponseReferralDTO`, `PaginationResponseSanctionsScreenDTO`, `PaginationResponseStatementOfValueDTO`, `PaginationResponseSubjectivityDTO`, `PaginationResponseSubmissionDTO`, `PaginationResponseSubmissionRiskDTO`, `PaginationResponseSubmissionStatusHistoryDTO`, `PaginationResponseUnderwritingDecisionDTO`, `PaginationResponseUnderwritingEvidenceDTO`, `QuoteDTO`, `RangeFilter`, `RangeObject`, `ReferralDTO`, `SanctionsScreenDTO`, `StatementOfValueDTO`, `SubjectivityDTO`, `SubmissionDTO`, `SubmissionRiskDTO`, `SubmissionStatusHistoryDTO`, `UnderwritingDecisionDTO`, `UnderwritingEvidenceDTO`

## Contract explorer

<swagger-ui src="../contracts/core-insurance-underwriting/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
