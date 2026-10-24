# core-common-contract-mgmt

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/core-common-contract-mgmt) · [Complete contract](../contracts/core-common-contract-mgmt/openapi.yml)

**Provenance:** base revision `b9846569e715603763455a93f31d3eedd16aa884`; current copied input SHA256 `15cba145c3c50484d83148718835e0c15de953fbe94e166a4a5cc560c969fff6`. [Baseline source](https://github.com/fireflysoftwaresolutions/core-common-contract-mgmt/blob/b9846569e715603763455a93f31d3eedd16aa884/core-common-contract-mgmt-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/contracts/{contractId}/terms/{termId}` | `getContractTermById` | `200`, `404`, `500` |
| `PUT` | `/api/v1/contracts/{contractId}/terms/{termId}` | `updateContractTerm` | `200`, `400`, `404`, `500` |
| `DELETE` | `/api/v1/contracts/{contractId}/terms/{termId}` | `deleteContractTerm` | `204`, `404`, `500` |
| `GET` | `/api/v1/contracts/{contractId}/status-history/{contractStatusHistoryId}` | `getContractStatusHistoryById` | `200`, `404`, `500` |
| `PUT` | `/api/v1/contracts/{contractId}/status-history/{contractStatusHistoryId}` | `updateContractStatusHistory` | `200`, `400`, `404`, `500` |
| `DELETE` | `/api/v1/contracts/{contractId}/status-history/{contractStatusHistoryId}` | `deleteContractStatusHistory` | `204`, `404`, `500` |
| `GET` | `/api/v1/contracts/{contractId}/risk-assessments/{contractRiskAssessmentId}` | `getContractRiskAssessmentById` | `200`, `404`, `500` |
| `PUT` | `/api/v1/contracts/{contractId}/risk-assessments/{contractRiskAssessmentId}` | `updateContractRiskAssessment` | `200`, `400`, `404`, `500` |
| `DELETE` | `/api/v1/contracts/{contractId}/risk-assessments/{contractRiskAssessmentId}` | `deleteContractRiskAssessment` | `204`, `404`, `500` |
| `GET` | `/api/v1/contracts/{contractId}/parties/{contractPartyId}` | `getContractPartyById` | `200`, `404`, `500` |
| `PUT` | `/api/v1/contracts/{contractId}/parties/{contractPartyId}` | `updateContractParty` | `200`, `400`, `404`, `500` |
| `DELETE` | `/api/v1/contracts/{contractId}/parties/{contractPartyId}` | `deleteContractParty` | `204`, `404`, `500` |
| `GET` | `/api/v1/contracts/{contractId}/lines/{contractLineId}` | `get` | `200` |
| `PUT` | `/api/v1/contracts/{contractId}/lines/{contractLineId}` | `update` | `200` |
| `DELETE` | `/api/v1/contracts/{contractId}/lines/{contractLineId}` | `delete` | `200` |
| `GET` | `/api/v1/contracts/{contractId}/events/{contractEventId}` | `getContractEventById` | `200`, `404`, `500` |
| `PUT` | `/api/v1/contracts/{contractId}/events/{contractEventId}` | `updateContractEvent` | `200`, `400`, `404`, `500` |
| `DELETE` | `/api/v1/contracts/{contractId}/events/{contractEventId}` | `deleteContractEvent` | `204`, `404`, `500` |
| `GET` | `/api/v1/contracts/{contractId}/documents/{contractDocumentId}` | `getContractDocumentById` | `200`, `404`, `500` |
| `PUT` | `/api/v1/contracts/{contractId}/documents/{contractDocumentId}` | `updateContractDocument` | `200`, `400`, `404`, `500` |
| `DELETE` | `/api/v1/contracts/{contractId}/documents/{contractDocumentId}` | `deleteContractDocument` | `204`, `404`, `500` |
| `GET` | `/api/v1/contracts/{contractId}` | `getContractById` | `200`, `404`, `500` |
| `PUT` | `/api/v1/contracts/{contractId}` | `updateContract` | `200`, `400`, `404`, `500` |
| `DELETE` | `/api/v1/contracts/{contractId}` | `deleteContract` | `204`, `404`, `500` |
| `GET` | `/api/v1/contract-term-templates/{termTemplateId}/validation-rules/{validationRuleId}` | `getContractTermValidationRuleById` | `200`, `404`, `500` |
| `PUT` | `/api/v1/contract-term-templates/{termTemplateId}/validation-rules/{validationRuleId}` | `updateContractTermValidationRule` | `200`, `400`, `404`, `500` |
| `DELETE` | `/api/v1/contract-term-templates/{termTemplateId}/validation-rules/{validationRuleId}` | `deleteContractTermValidationRule` | `204`, `404`, `500` |
| `GET` | `/api/v1/contract-term-templates/{termTemplateId}` | `getContractTermTemplateById` | `200`, `404`, `500` |
| `PUT` | `/api/v1/contract-term-templates/{termTemplateId}` | `updateContractTermTemplate` | `200`, `400`, `404`, `500` |
| `DELETE` | `/api/v1/contract-term-templates/{termTemplateId}` | `deleteContractTermTemplate` | `204`, `404`, `500` |
| `POST` | `/api/v1/tenants/{tenantId}/contracts/{contractId}/document-owner-binding` | `bindContractDocumentOwner` | `400`, `403`, `404`, `409`, `422`, `502`, `503`, `200` |
| `POST` | `/api/v1/tenants/{tenantId}/contracts/{contractId}/document-operations/{actionId}/seal` | `sealContractDocument` | `400`, `403`, `404`, `409`, `422`, `502`, `503`, `200` |
| `POST` | `/api/v1/tenants/{tenantId}/contracts/{contractId}/document-operations/{actionId}/issuance` | `recordContractDocumentIssuance` | `400`, `403`, `404`, `409`, `422`, `502`, `503`, `200` |
| `POST` | `/api/v1/tenants/{tenantId}/contracts/{contractId}/document-operations/{actionId}/attachment` | `attachContractDocumentIssuance` | `400`, `403`, `404`, `409`, `422`, `502`, `503`, `200` |
| `POST` | `/api/v1/tenants/{tenantId}/contracts/{contractId}/document-operations` | `prepareContractDocument` | `400`, `403`, `404`, `409`, `422`, `502`, `503`, `200` |
| `POST` | `/api/v1/contracts/{contractId}/terms/filter` | `filterContractTerms` | `200`, `400`, `500` |
| `POST` | `/api/v1/contracts/{contractId}/terms` | `createContractTerm` | `201`, `400`, `404`, `500` |
| `POST` | `/api/v1/contracts/{contractId}/status-history/filter` | `filterContractStatusHistory` | `200`, `400`, `500` |
| `POST` | `/api/v1/contracts/{contractId}/status-history` | `createContractStatusHistory` | `201`, `400`, `404`, `500` |
| `POST` | `/api/v1/contracts/{contractId}/risk-assessments/filter` | `filterContractRiskAssessments` | `200`, `400`, `500` |
| `POST` | `/api/v1/contracts/{contractId}/risk-assessments` | `createContractRiskAssessment` | `201`, `400`, `404`, `500` |
| `POST` | `/api/v1/contracts/{contractId}/parties/filter` | `filterContractParties` | `200`, `400`, `500` |
| `POST` | `/api/v1/contracts/{contractId}/parties` | `createContractParty` | `201`, `400`, `404`, `500` |
| `POST` | `/api/v1/contracts/{contractId}/lines/filter` | `filter` | `200` |
| `POST` | `/api/v1/contracts/{contractId}/lines` | `create` | `200` |
| `POST` | `/api/v1/contracts/{contractId}/events/filter` | `filterContractEvents` | `200`, `400`, `500` |
| `POST` | `/api/v1/contracts/{contractId}/events` | `createContractEvent` | `201`, `400`, `404`, `500` |
| `POST` | `/api/v1/contracts/{contractId}/documents/filter` | `filterContractDocuments` | `200`, `400`, `500` |
| `POST` | `/api/v1/contracts/{contractId}/documents` | `createContractDocument` | `201`, `400`, `404`, `500` |
| `POST` | `/api/v1/contracts/filter` | `filterContracts` | `200`, `400`, `500` |
| `POST` | `/api/v1/contracts` | `createContract` | `201`, `400`, `500` |
| `POST` | `/api/v1/contract-term-templates/{termTemplateId}/validation-rules/filter` | `filterContractTermValidationRules` | `200`, `400`, `500` |
| `POST` | `/api/v1/contract-term-templates/{termTemplateId}/validation-rules` | `createContractTermValidationRule` | `201`, `400`, `404`, `500` |
| `POST` | `/api/v1/contract-term-templates/filter` | `filterContractTermTemplates` | `200`, `400`, `500` |
| `POST` | `/api/v1/contract-term-templates` | `createContractTermTemplate` | `201`, `400`, `500` |
| `POST` | `/api/v1/contract-parties/filter` | `filterContractPartiesGlobally` | `200`, `400`, `500` |
| `GET` | `/api/v1/tenants/{tenantId}/contracts/{contractId}/document-operations/{actionId}/facts` | `getContractDocumentFacts` | `400`, `403`, `404`, `409`, `422`, `502`, `503`, `200` |
| `GET` | `/api/v1/tenants/{tenantId}/contracts/{contractId}/document-operations/{actionId}` | `getContractDocumentOperation` | `400`, `403`, `404`, `409`, `422`, `502`, `503`, `200` |
| `GET` | `/api/v1/contract-parties` | `getContractPartiesByPartyId` | `200`, `400`, `500` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`ContractDTO`, `ContractDocumentDTO`, `ContractDocumentEnrichment`, `ContractDocumentFactPreparation`, `ContractDocumentIssuedEvidence`, `ContractDocumentOperation`, `ContractDocumentOwnerBinding`, `ContractDocumentOwnerBindingRequest`, `ContractDocumentPartyObservation`, `ContractDocumentPins`, `ContractDocumentPrepareRequest`, `ContractDocumentProductObservation`, `ContractDocumentRecordIssuanceRequest`, `ContractDocumentRetention`, `ContractDocumentRoleObservation`, `ContractDocumentSelection`, `ContractDocumentSourceObservation`, `ContractDocumentTypeObservation`, `ContractEventDTO`, `ContractLineDTO`, `ContractPartyDTO`, `ContractProductVersionReference`, `ContractRiskAssessmentDTO`, `ContractStatusHistoryDTO`, `ContractTermDynamicDTO`, `ContractTermTemplateDTO`, `ContractTermValidationRuleDTO`, `FilterOptions`, `FilterRequestContractDTO`, `FilterRequestContractDocumentDTO`, `FilterRequestContractEventDTO`, `FilterRequestContractLineDTO`, `FilterRequestContractPartyDTO`, `FilterRequestContractRiskAssessmentDTO`, `FilterRequestContractStatusHistoryDTO`, `FilterRequestContractTermDynamicDTO`, `FilterRequestContractTermTemplateDTO`, `FilterRequestContractTermValidationRuleDTO`, `JsonNode`, `PaginationRequest`, `PaginationResponse`, `PaginationResponseContractLineDTO`, `PaginationResponseContractPartyDTO`, `RangeFilter`, `RangeObject`

## Contract explorer

<swagger-ui src="../contracts/core-common-contract-mgmt/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
