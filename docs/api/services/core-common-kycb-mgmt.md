# core-common-kycb-mgmt

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/core-common-kycb-mgmt) · [Complete contract](../contracts/core-common-kycb-mgmt/openapi.yml)

**Provenance:** base revision `53bdc8df2b3f82cf7461ba0e6dfe593cc93b3d96`; current copied input SHA256 `954f2df0ab40f5660f1e27163bc961e4c8f48af699628f0941b5369afb6d3443`. [Baseline source](https://github.com/fireflysoftwaresolutions/core-common-kycb-mgmt/blob/53bdc8df2b3f82cf7461ba0e6dfe593cc93b3d96/core-common-kycb-mgmt-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/identity/parties/{partyId}/sanctions-questionnaire` | `listSanctionsQuestionnaires` | `200` |
| `POST` | `/api/v1/identity/parties/{partyId}/sanctions-questionnaire` | `createSanctionsQuestionnaire` | `201` |
| `GET` | `/api/v1/identity/parties/{partyId}/kyc` | `listKycVerifications` | `200` |
| `POST` | `/api/v1/identity/parties/{partyId}/kyc` | `createKycVerification` | `201` |
| `GET` | `/api/v1/identity/parties/{partyId}/kyc/{verificationId}/edd` | `listEddProcesses` | `200` |
| `POST` | `/api/v1/identity/parties/{partyId}/kyc/{verificationId}/edd` | `startEddProcess` | `201` |
| `GET` | `/api/v1/identity/parties/{partyId}/kyc/{verificationId}/documents` | `listVerificationDocuments` | `200` |
| `POST` | `/api/v1/identity/parties/{partyId}/kyc/{verificationId}/documents` | `addVerificationDocument` | `201` |
| `GET` | `/api/v1/identity/parties/{partyId}/kyb` | `listKybVerifications` | `200` |
| `POST` | `/api/v1/identity/parties/{partyId}/kyb` | `createKybVerification` | `201` |
| `GET` | `/api/v1/identity/parties/{partyId}/business-profile` | `listBusinessProfiles` | `200` |
| `POST` | `/api/v1/identity/parties/{partyId}/business-profile` | `createBusinessProfile` | `201` |
| `GET` | `/api/v1/documents/verification` | `listVerificationDocuments_1` | `200` |
| `POST` | `/api/v1/documents/verification` | `createVerificationDocument` | `201` |
| `GET` | `/api/v1/documents/powers-of-attorney` | `listPowersOfAttorney` | `200` |
| `POST` | `/api/v1/documents/powers-of-attorney` | `addPowerOfAttorney` | `201` |
| `GET` | `/api/v1/documents/corporate` | `listCorporateDocuments` | `200` |
| `POST` | `/api/v1/documents/corporate` | `addCorporateDocument` | `201` |
| `GET` | `/api/v1/corporate/parties/{partyId}/ubos` | `listUbos` | `200` |
| `POST` | `/api/v1/corporate/parties/{partyId}/ubos` | `addUbo` | `201` |
| `GET` | `/api/v1/corporate/parties/{partyId}/structure` | `listStructureRelationships` | `200` |
| `POST` | `/api/v1/corporate/parties/{partyId}/structure` | `addStructureRelationship` | `201` |
| `GET` | `/api/v1/corporate/parties/{partyId}/locations` | `listBusinessLocations` | `200` |
| `POST` | `/api/v1/corporate/parties/{partyId}/locations` | `addBusinessLocation` | `201` |
| `GET` | `/api/v1/corporate/parties/{partyId}/activities` | `listEconomicActivities` | `200` |
| `POST` | `/api/v1/corporate/parties/{partyId}/activities` | `addEconomicActivity` | `201` |
| `GET` | `/api/v1/compliance/parties/{partyId}/risk-assessments` | `listRiskAssessments` | `200` |
| `POST` | `/api/v1/compliance/parties/{partyId}/risk-assessments` | `createRiskAssessment` | `201` |
| `GET` | `/api/v1/compliance/parties/{partyId}/aml-screenings` | `listAmlScreenings` | `200` |
| `POST` | `/api/v1/compliance/parties/{partyId}/aml-screenings` | `createAmlScreening` | `201` |
| `GET` | `/api/v1/compliance/parties/{partyId}/aml-screenings/{screeningId}/matches` | `listAmlMatches` | `200` |
| `POST` | `/api/v1/compliance/parties/{partyId}/aml-screenings/{screeningId}/matches` | `createAmlMatch` | `201` |
| `GET` | `/api/v1/compliance/industry-risks` | `listIndustryRisks` | `200` |
| `POST` | `/api/v1/compliance/industry-risks` | `createIndustryRisk` | `201` |
| `GET` | `/api/v1/compliance/cases` | `listComplianceCases` | `200` |
| `POST` | `/api/v1/compliance/cases` | `createComplianceCase` | `201` |
| `GET` | `/api/v1/compliance/cases/{caseId}/reports` | `listRegulatoryReports` | `200` |
| `POST` | `/api/v1/compliance/cases/{caseId}/reports` | `submitRegulatoryReport` | `201` |
| `GET` | `/api/v1/compliance/cases/{caseId}/actions` | `listCaseActions` | `200` |
| `POST` | `/api/v1/compliance/cases/{caseId}/actions` | `createCaseAction` | `201` |
| `GET` | `/api/v1/activity/parties/{partyId}/sources-of-funds` | `listSourcesOfFunds` | `200` |
| `POST` | `/api/v1/activity/parties/{partyId}/sources-of-funds` | `addSourceOfFunds` | `201` |
| `GET` | `/api/v1/activity/parties/{partyId}/expected-activities` | `listExpectedActivities` | `200` |
| `POST` | `/api/v1/activity/parties/{partyId}/expected-activities` | `addExpectedActivity` | `201` |
| `GET` | `/api/v1/identity/parties/{partyId}/sanctions-questionnaire/{sanctionsQuestionnaireId}` | `getSanctionsQuestionnaire` | `200`, `404` |
| `DELETE` | `/api/v1/identity/parties/{partyId}/sanctions-questionnaire/{sanctionsQuestionnaireId}` | `deleteSanctionsQuestionnaire` | `204`, `404` |
| `PATCH` | `/api/v1/identity/parties/{partyId}/sanctions-questionnaire/{sanctionsQuestionnaireId}` | `updateSanctionsQuestionnaire` | `200`, `404` |
| `GET` | `/api/v1/identity/parties/{partyId}/kyc/{verificationId}` | `getKycVerification` | `200`, `404` |
| `DELETE` | `/api/v1/identity/parties/{partyId}/kyc/{verificationId}` | `deleteKycVerification` | `204`, `404` |
| `PATCH` | `/api/v1/identity/parties/{partyId}/kyc/{verificationId}` | `updateKycVerification` | `200`, `404` |
| `GET` | `/api/v1/identity/parties/{partyId}/kyc/{verificationId}/edd/{eddId}` | `getEddProcess` | `200`, `404` |
| `DELETE` | `/api/v1/identity/parties/{partyId}/kyc/{verificationId}/edd/{eddId}` | `deleteEddProcess` | `204`, `404` |
| `PATCH` | `/api/v1/identity/parties/{partyId}/kyc/{verificationId}/edd/{eddId}` | `updateEddProcess` | `200`, `404` |
| `GET` | `/api/v1/identity/parties/{partyId}/kyc/{verificationId}/documents/{documentId}` | `getVerificationDocument` | `200`, `404` |
| `DELETE` | `/api/v1/identity/parties/{partyId}/kyc/{verificationId}/documents/{documentId}` | `deleteVerificationDocument` | `204`, `404` |
| `PATCH` | `/api/v1/identity/parties/{partyId}/kyc/{verificationId}/documents/{documentId}` | `updateVerificationDocument` | `200`, `404` |
| `GET` | `/api/v1/identity/parties/{partyId}/kyb/{verificationId}` | `getKybVerification` | `200`, `404` |
| `DELETE` | `/api/v1/identity/parties/{partyId}/kyb/{verificationId}` | `deleteKybVerification` | `204`, `404` |
| `PATCH` | `/api/v1/identity/parties/{partyId}/kyb/{verificationId}` | `updateKybVerification` | `200`, `404` |
| `GET` | `/api/v1/identity/parties/{partyId}/business-profile/{businessProfileId}` | `getBusinessProfile` | `200`, `404` |
| `DELETE` | `/api/v1/identity/parties/{partyId}/business-profile/{businessProfileId}` | `deleteBusinessProfile` | `204`, `404` |
| `PATCH` | `/api/v1/identity/parties/{partyId}/business-profile/{businessProfileId}` | `updateBusinessProfile` | `200`, `404` |
| `GET` | `/api/v1/documents/verification/{documentId}` | `getVerificationDocument_1` | `200`, `404` |
| `DELETE` | `/api/v1/documents/verification/{documentId}` | `deleteVerificationDocument_1` | `204`, `404` |
| `PATCH` | `/api/v1/documents/verification/{documentId}` | `updateVerificationDocument_1` | `200`, `404` |
| `GET` | `/api/v1/documents/powers-of-attorney/{powerId}` | `getPowerOfAttorney` | `200`, `404` |
| `DELETE` | `/api/v1/documents/powers-of-attorney/{powerId}` | `deletePowerOfAttorney` | `204`, `404` |
| `PATCH` | `/api/v1/documents/powers-of-attorney/{powerId}` | `updatePowerOfAttorney` | `200`, `404` |
| `GET` | `/api/v1/documents/corporate/{documentId}` | `getCorporateDocument` | `200`, `404` |
| `DELETE` | `/api/v1/documents/corporate/{documentId}` | `deleteCorporateDocument` | `204`, `404` |
| `PATCH` | `/api/v1/documents/corporate/{documentId}` | `updateCorporateDocument` | `200`, `404` |
| `GET` | `/api/v1/corporate/parties/{partyId}/ubos/{uboId}` | `getUbo` | `200`, `404` |
| `DELETE` | `/api/v1/corporate/parties/{partyId}/ubos/{uboId}` | `deleteUbo` | `204`, `404` |
| `PATCH` | `/api/v1/corporate/parties/{partyId}/ubos/{uboId}` | `updateUbo` | `200`, `404` |
| `GET` | `/api/v1/corporate/parties/{partyId}/structure/{structureId}` | `getStructureRelationship` | `200`, `404` |
| `DELETE` | `/api/v1/corporate/parties/{partyId}/structure/{structureId}` | `deleteStructureRelationship` | `204`, `404` |
| `PATCH` | `/api/v1/corporate/parties/{partyId}/structure/{structureId}` | `updateStructureRelationship` | `200`, `404` |
| `GET` | `/api/v1/corporate/parties/{partyId}/locations/{locationId}` | `getBusinessLocation` | `200`, `404` |
| `DELETE` | `/api/v1/corporate/parties/{partyId}/locations/{locationId}` | `deleteBusinessLocation` | `204`, `404` |
| `PATCH` | `/api/v1/corporate/parties/{partyId}/locations/{locationId}` | `updateBusinessLocation` | `200`, `404` |
| `GET` | `/api/v1/corporate/parties/{partyId}/activities/{activityId}` | `getEconomicActivity` | `200`, `404` |
| `DELETE` | `/api/v1/corporate/parties/{partyId}/activities/{activityId}` | `deleteEconomicActivity` | `204`, `404` |
| `PATCH` | `/api/v1/corporate/parties/{partyId}/activities/{activityId}` | `updateEconomicActivity` | `200`, `404` |
| `GET` | `/api/v1/compliance/parties/{partyId}/risk-assessments/{assessmentId}` | `getRiskAssessment` | `200`, `404` |
| `DELETE` | `/api/v1/compliance/parties/{partyId}/risk-assessments/{assessmentId}` | `deleteRiskAssessment` | `204`, `404` |
| `PATCH` | `/api/v1/compliance/parties/{partyId}/risk-assessments/{assessmentId}` | `updateRiskAssessment` | `200`, `404` |
| `GET` | `/api/v1/compliance/parties/{partyId}/aml-screenings/{screeningId}` | `getAmlScreening` | `200`, `404` |
| `DELETE` | `/api/v1/compliance/parties/{partyId}/aml-screenings/{screeningId}` | `deleteAmlScreening` | `204`, `404` |
| `PATCH` | `/api/v1/compliance/parties/{partyId}/aml-screenings/{screeningId}` | `updateAmlScreening` | `200`, `404` |
| `GET` | `/api/v1/compliance/parties/{partyId}/aml-screenings/{screeningId}/matches/{matchId}` | `getAmlMatch` | `200`, `404` |
| `DELETE` | `/api/v1/compliance/parties/{partyId}/aml-screenings/{screeningId}/matches/{matchId}` | `deleteAmlMatch` | `204`, `404` |
| `PATCH` | `/api/v1/compliance/parties/{partyId}/aml-screenings/{screeningId}/matches/{matchId}` | `updateAmlMatch` | `200`, `404` |
| `GET` | `/api/v1/compliance/industry-risks/{industryRiskId}` | `getIndustryRisk` | `200`, `404` |
| `DELETE` | `/api/v1/compliance/industry-risks/{industryRiskId}` | `deleteIndustryRisk` | `204`, `404` |
| `PATCH` | `/api/v1/compliance/industry-risks/{industryRiskId}` | `updateIndustryRisk` | `200`, `404` |
| `GET` | `/api/v1/compliance/cases/{caseId}` | `getComplianceCase` | `200`, `404` |
| `DELETE` | `/api/v1/compliance/cases/{caseId}` | `deleteComplianceCase` | `204`, `404` |
| `PATCH` | `/api/v1/compliance/cases/{caseId}` | `updateComplianceCase` | `200`, `404` |
| `GET` | `/api/v1/compliance/cases/{caseId}/reports/{reportId}` | `getRegulatoryReport` | `200`, `404` |
| `DELETE` | `/api/v1/compliance/cases/{caseId}/reports/{reportId}` | `deleteRegulatoryReport` | `204`, `404` |
| `PATCH` | `/api/v1/compliance/cases/{caseId}/reports/{reportId}` | `updateRegulatoryReport` | `200`, `404` |
| `GET` | `/api/v1/compliance/cases/{caseId}/actions/{actionId}` | `getCaseAction` | `200`, `404` |
| `DELETE` | `/api/v1/compliance/cases/{caseId}/actions/{actionId}` | `deleteCaseAction` | `204`, `404` |
| `PATCH` | `/api/v1/compliance/cases/{caseId}/actions/{actionId}` | `updateCaseAction` | `200`, `404` |
| `GET` | `/api/v1/activity/parties/{partyId}/sources-of-funds/{sourceId}` | `getSourceOfFunds` | `200`, `404` |
| `DELETE` | `/api/v1/activity/parties/{partyId}/sources-of-funds/{sourceId}` | `deleteSourceOfFunds` | `204`, `404` |
| `PATCH` | `/api/v1/activity/parties/{partyId}/sources-of-funds/{sourceId}` | `updateSourceOfFunds` | `200`, `404` |
| `GET` | `/api/v1/activity/parties/{partyId}/expected-activities/{activityId}` | `getExpectedActivity` | `200`, `404` |
| `DELETE` | `/api/v1/activity/parties/{partyId}/expected-activities/{activityId}` | `deleteExpectedActivity` | `204`, `404` |
| `PATCH` | `/api/v1/activity/parties/{partyId}/expected-activities/{activityId}` | `updateExpectedActivity` | `200`, `404` |
| `GET` | `/api/v1/identity/parties/{partyId}/sanctions-questionnaire/latest` | `getLatestSanctionsQuestionnaire` | `200`, `404` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`AmlMatchDTO`, `AmlScreeningDTO`, `BusinessLocationDTO`, `BusinessProfileDTO`, `ComplianceActionDTO`, `ComplianceCaseDTO`, `CorporateDocumentDTO`, `CorporateStructureDTO`, `EconomicActivityDTO`, `EnhancedDueDiligenceDTO`, `ExpectedActivityDTO`, `FilterOptions`, `FilterRequestAmlMatchDTO`, `FilterRequestAmlScreeningDTO`, `FilterRequestBusinessProfileDTO`, `FilterRequestComplianceActionDTO`, `FilterRequestComplianceCaseDTO`, `FilterRequestCorporateDocumentDTO`, `FilterRequestCorporateStructureDTO`, `FilterRequestEconomicActivityDTO`, `FilterRequestEnhancedDueDiligenceDTO`, `FilterRequestExpectedActivityDTO`, `FilterRequestIndustryRiskDTO`, `FilterRequestKybVerificationDTO`, `FilterRequestKycVerificationDTO`, `FilterRequestPowerOfAttorneyDTO`, `FilterRequestRegulatoryReportingDTO`, `FilterRequestRiskAssessmentDTO`, `FilterRequestSourceOfFundsDTO`, `FilterRequestUboDTO`, `FilterRequestVerificationDocumentDTO`, `IndustryRiskDTO`, `KybVerificationDTO`, `KycVerificationDTO`, `PaginationRequest`, `PaginationResponse`, `PowerOfAttorneyDTO`, `RangeFilter`, `RangeObject`, `RegulatoryReportingDTO`, `RiskAssessmentDTO`, `SanctionsQuestionnaireDTO`, `SourceOfFundsDTO`, `UboDTO`, `VerificationDocumentDTO`

## Contract explorer

<swagger-ui src="../contracts/core-common-kycb-mgmt/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
