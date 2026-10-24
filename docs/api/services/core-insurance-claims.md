# core-insurance-claims

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/core-insurance-claims) · [Complete contract](../contracts/core-insurance-claims/openapi.yml)

**Provenance:** base revision `cac0ed150e5f1c09fa67125aff09be517f4d861f`; current copied input SHA256 `279d1b2800c04d719fd2eed71671f2e36321fb4ce8bc4e768a4e40c3e21799d0`. [Baseline source](https://github.com/fireflysoftwaresolutions/core-insurance-claims/blob/cac0ed150e5f1c09fa67125aff09be517f4d861f/core-insurance-claims-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/claims/{claimId}` | `getClaimById` | `200`, `404` |
| `PUT` | `/api/v1/claims/{claimId}` | `updateClaim` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/claims/{claimId}` | `deleteClaim` | `204`, `404` |
| `GET` | `/api/v1/claims/{claimId}/triage/{claimTriageId}` | `getClaimTriageById` | `200`, `404` |
| `PUT` | `/api/v1/claims/{claimId}/triage/{claimTriageId}` | `updateClaimTriage` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/claims/{claimId}/triage/{claimTriageId}` | `deleteClaimTriage` | `204`, `404` |
| `GET` | `/api/v1/claims/{claimId}/status-history/{claimStatusHistoryId}` | `getClaimStatusHistoryById` | `200`, `404` |
| `PUT` | `/api/v1/claims/{claimId}/status-history/{claimStatusHistoryId}` | `updateClaimStatusHistory` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/claims/{claimId}/status-history/{claimStatusHistoryId}` | `deleteClaimStatusHistory` | `204`, `404` |
| `GET` | `/api/v1/claims/{claimId}/siu-referrals/{siuReferralId}` | `getSiuReferralById` | `200`, `404` |
| `PUT` | `/api/v1/claims/{claimId}/siu-referrals/{siuReferralId}` | `updateSiuReferral` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/claims/{claimId}/siu-referrals/{siuReferralId}` | `deleteSiuReferral` | `204`, `404` |
| `GET` | `/api/v1/claims/{claimId}/settlements/{claimSettlementId}` | `getClaimSettlementById` | `200`, `404` |
| `PUT` | `/api/v1/claims/{claimId}/settlements/{claimSettlementId}` | `updateClaimSettlement` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/claims/{claimId}/settlements/{claimSettlementId}` | `deleteClaimSettlement` | `204`, `404` |
| `GET` | `/api/v1/claims/{claimId}/reserves/{claimReserveId}` | `getClaimReserveById` | `200`, `404` |
| `PUT` | `/api/v1/claims/{claimId}/reserves/{claimReserveId}` | `updateClaimReserve` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/claims/{claimId}/reserves/{claimReserveId}` | `deleteClaimReserve` | `204`, `404` |
| `GET` | `/api/v1/claims/{claimId}/recoveries/{claimRecoveryId}` | `getClaimRecoveryById` | `200`, `404` |
| `PUT` | `/api/v1/claims/{claimId}/recoveries/{claimRecoveryId}` | `updateClaimRecovery` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/claims/{claimId}/recoveries/{claimRecoveryId}` | `deleteClaimRecovery` | `204`, `404` |
| `GET` | `/api/v1/claims/{claimId}/parties/{claimPartyId}` | `getClaimPartyById` | `200`, `404` |
| `PUT` | `/api/v1/claims/{claimId}/parties/{claimPartyId}` | `updateClaimParty` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/claims/{claimId}/parties/{claimPartyId}` | `deleteClaimParty` | `204`, `404` |
| `GET` | `/api/v1/claims/{claimId}/fraud-indicators/{fraudIndicatorId}` | `getFraudIndicatorById` | `200`, `404` |
| `PUT` | `/api/v1/claims/{claimId}/fraud-indicators/{fraudIndicatorId}` | `updateFraudIndicator` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/claims/{claimId}/fraud-indicators/{fraudIndicatorId}` | `deleteFraudIndicator` | `204`, `404` |
| `GET` | `/api/v1/claims/{claimId}/evidence/{claimEvidenceId}` | `getClaimEvidenceById` | `200`, `404` |
| `PUT` | `/api/v1/claims/{claimId}/evidence/{claimEvidenceId}` | `updateClaimEvidence` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/claims/{claimId}/evidence/{claimEvidenceId}` | `deleteClaimEvidence` | `204`, `404` |
| `GET` | `/api/v1/claims/{claimId}/denials/{claimDenialId}` | `getClaimDenialById` | `200`, `404` |
| `PUT` | `/api/v1/claims/{claimId}/denials/{claimDenialId}` | `updateClaimDenial` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/claims/{claimId}/denials/{claimDenialId}` | `deleteClaimDenial` | `204`, `404` |
| `GET` | `/api/v1/claims/{claimId}/coverages/{claimCoverageId}` | `getClaimCoverageById` | `200`, `404` |
| `PUT` | `/api/v1/claims/{claimId}/coverages/{claimCoverageId}` | `updateClaimCoverage` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/claims/{claimId}/coverages/{claimCoverageId}` | `deleteClaimCoverage` | `204`, `404` |
| `GET` | `/api/v1/claims/{claimId}/coverage-checks/{coverageCheckId}` | `getCoverageCheckById` | `200`, `404` |
| `PUT` | `/api/v1/claims/{claimId}/coverage-checks/{coverageCheckId}` | `updateCoverageCheck` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/claims/{claimId}/coverage-checks/{coverageCheckId}` | `deleteCoverageCheck` | `204`, `404` |
| `GET` | `/api/v1/claims/{claimId}/assessments/{claimAssessmentId}` | `getClaimAssessmentById` | `200`, `404` |
| `PUT` | `/api/v1/claims/{claimId}/assessments/{claimAssessmentId}` | `updateClaimAssessment` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/claims/{claimId}/assessments/{claimAssessmentId}` | `deleteClaimAssessment` | `204`, `404` |
| `GET` | `/api/v1/claims/{claimId}/adjusters/{adjusterAssignmentId}` | `getAdjusterAssignmentById` | `200`, `404` |
| `PUT` | `/api/v1/claims/{claimId}/adjusters/{adjusterAssignmentId}` | `updateAdjusterAssignment` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/claims/{claimId}/adjusters/{adjusterAssignmentId}` | `deleteAdjusterAssignment` | `204`, `404` |
| `POST` | `/api/v1/claims` | `createClaim` | `201`, `400` |
| `POST` | `/api/v1/claims/{claimId}/triage` | `createClaimTriage` | `201`, `400` |
| `POST` | `/api/v1/claims/{claimId}/triage/filter` | `filterClaimTriages` | `200`, `400` |
| `POST` | `/api/v1/claims/{claimId}/status-history` | `createClaimStatusHistory` | `201`, `400` |
| `POST` | `/api/v1/claims/{claimId}/status-history/filter` | `filterClaimStatusHistories` | `200`, `400` |
| `POST` | `/api/v1/claims/{claimId}/siu-referrals` | `createSiuReferral` | `201`, `400` |
| `POST` | `/api/v1/claims/{claimId}/siu-referrals/filter` | `filterSiuReferrals` | `200`, `400` |
| `POST` | `/api/v1/claims/{claimId}/settlements` | `createClaimSettlement` | `201`, `400` |
| `POST` | `/api/v1/claims/{claimId}/settlements/filter` | `filterClaimSettlements` | `200`, `400` |
| `POST` | `/api/v1/claims/{claimId}/reserves` | `createClaimReserve` | `201`, `400` |
| `POST` | `/api/v1/claims/{claimId}/reserves/filter` | `filterClaimReserves` | `200`, `400` |
| `POST` | `/api/v1/claims/{claimId}/recoveries` | `createClaimRecovery` | `201`, `400` |
| `POST` | `/api/v1/claims/{claimId}/recoveries/filter` | `filterClaimRecoveries` | `200`, `400` |
| `POST` | `/api/v1/claims/{claimId}/parties` | `createClaimParty` | `201`, `400` |
| `POST` | `/api/v1/claims/{claimId}/parties/filter` | `filterClaimParties` | `200`, `400` |
| `POST` | `/api/v1/claims/{claimId}/fraud-indicators` | `createFraudIndicator` | `201`, `400` |
| `POST` | `/api/v1/claims/{claimId}/fraud-indicators/filter` | `filterFraudIndicators` | `200`, `400` |
| `POST` | `/api/v1/claims/{claimId}/evidence` | `createClaimEvidence` | `201`, `400` |
| `POST` | `/api/v1/claims/{claimId}/evidence/filter` | `filterClaimEvidenceItems` | `200`, `400` |
| `POST` | `/api/v1/claims/{claimId}/denials` | `createClaimDenial` | `201`, `400` |
| `POST` | `/api/v1/claims/{claimId}/denials/filter` | `filterClaimDenials` | `200`, `400` |
| `POST` | `/api/v1/claims/{claimId}/coverages` | `createClaimCoverage` | `201`, `400` |
| `POST` | `/api/v1/claims/{claimId}/coverages/filter` | `filterClaimCoverages` | `200`, `400` |
| `POST` | `/api/v1/claims/{claimId}/coverage-checks` | `createCoverageCheck` | `201`, `400` |
| `POST` | `/api/v1/claims/{claimId}/coverage-checks/filter` | `filterCoverageChecks` | `200`, `400` |
| `POST` | `/api/v1/claims/{claimId}/assessments` | `createClaimAssessment` | `201`, `400` |
| `POST` | `/api/v1/claims/{claimId}/assessments/filter` | `filterClaimAssessments` | `200`, `400` |
| `POST` | `/api/v1/claims/{claimId}/adjusters` | `createAdjusterAssignment` | `201`, `400` |
| `POST` | `/api/v1/claims/{claimId}/adjusters/filter` | `filterAdjusterAssignments` | `200`, `400` |
| `POST` | `/api/v1/claims/filter` | `filterClaims` | `200`, `400` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`AdjusterAssignmentDTO`, `ClaimAssessmentDTO`, `ClaimCoverageDTO`, `ClaimDTO`, `ClaimDenialDTO`, `ClaimEvidenceDTO`, `ClaimPartyDTO`, `ClaimRecoveryDTO`, `ClaimReserveDTO`, `ClaimSettlementDTO`, `ClaimStatusHistoryDTO`, `ClaimTriageDTO`, `CoverageCheckDTO`, `FilterOptions`, `FilterRequestAdjusterAssignmentDTO`, `FilterRequestClaimAssessmentDTO`, `FilterRequestClaimCoverageDTO`, `FilterRequestClaimDTO`, `FilterRequestClaimDenialDTO`, `FilterRequestClaimEvidenceDTO`, `FilterRequestClaimPartyDTO`, `FilterRequestClaimRecoveryDTO`, `FilterRequestClaimReserveDTO`, `FilterRequestClaimSettlementDTO`, `FilterRequestClaimStatusHistoryDTO`, `FilterRequestClaimTriageDTO`, `FilterRequestCoverageCheckDTO`, `FilterRequestFraudIndicatorDTO`, `FilterRequestSiuReferralDTO`, `FraudIndicatorDTO`, `PaginationRequest`, `PaginationResponseAdjusterAssignmentDTO`, `PaginationResponseClaimAssessmentDTO`, `PaginationResponseClaimCoverageDTO`, `PaginationResponseClaimDTO`, `PaginationResponseClaimDenialDTO`, `PaginationResponseClaimEvidenceDTO`, `PaginationResponseClaimPartyDTO`, `PaginationResponseClaimRecoveryDTO`, `PaginationResponseClaimReserveDTO`, `PaginationResponseClaimSettlementDTO`, `PaginationResponseClaimStatusHistoryDTO`, `PaginationResponseClaimTriageDTO`, `PaginationResponseCoverageCheckDTO`, `PaginationResponseFraudIndicatorDTO`, `PaginationResponseSiuReferralDTO`, `RangeFilter`, `RangeObject`, `SiuReferralDTO`

## Contract explorer

<swagger-ui src="../contracts/core-insurance-claims/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
