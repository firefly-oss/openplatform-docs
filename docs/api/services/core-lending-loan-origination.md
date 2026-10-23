# core-lending-loan-origination

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/core-lending-loan-origination) · [Complete contract](../contracts/core-lending-loan-origination/openapi.yml)

**Provenance:** base revision `b565bf817a3ae18dc54c395047937c19e97c1d57`; current copied input SHA256 `69d2f5c161d3373df02df9b059f551e40faf9c73f19c2f9031a51b1f2da3f57b`. [Baseline source](https://github.com/fireflysoftwaresolutions/core-lending-loan-origination/blob/b565bf817a3ae18dc54c395047937c19e97c1d57/core-lending-loan-origination-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/loan-applications/{applicationId}` | `getLoanApplication` | `200` |
| `PUT` | `/api/v1/loan-applications/{applicationId}` | `updateLoanApplication` | `200` |
| `DELETE` | `/api/v1/loan-applications/{applicationId}` | `deleteLoanApplication` | `200` |
| `GET` | `/api/v1/loan-applications/{applicationId}/verifications/{verificationId}` | `getVerification` | `200` |
| `PUT` | `/api/v1/loan-applications/{applicationId}/verifications/{verificationId}` | `updateVerification` | `200` |
| `DELETE` | `/api/v1/loan-applications/{applicationId}/verifications/{verificationId}` | `deleteVerification` | `200` |
| `GET` | `/api/v1/loan-applications/{applicationId}/tasks/{taskId}` | `getTask` | `200` |
| `PUT` | `/api/v1/loan-applications/{applicationId}/tasks/{taskId}` | `updateTask` | `200` |
| `DELETE` | `/api/v1/loan-applications/{applicationId}/tasks/{taskId}` | `deleteTask` | `200` |
| `GET` | `/api/v1/loan-applications/{applicationId}/status-history/{statusHistoryId}` | `getStatusHistory` | `200` |
| `PUT` | `/api/v1/loan-applications/{applicationId}/status-history/{statusHistoryId}` | `updateStatusHistory` | `200` |
| `DELETE` | `/api/v1/loan-applications/{applicationId}/status-history/{statusHistoryId}` | `deleteStatusHistory` | `200` |
| `GET` | `/api/v1/loan-applications/{applicationId}/scores/{scoreId}` | `getScore` | `200` |
| `PUT` | `/api/v1/loan-applications/{applicationId}/scores/{scoreId}` | `updateScore` | `200` |
| `DELETE` | `/api/v1/loan-applications/{applicationId}/scores/{scoreId}` | `deleteScore` | `200` |
| `GET` | `/api/v1/loan-applications/{applicationId}/parties/{partyId}` | `getParty` | `200` |
| `PUT` | `/api/v1/loan-applications/{applicationId}/parties/{partyId}` | `updateParty` | `200` |
| `DELETE` | `/api/v1/loan-applications/{applicationId}/parties/{partyId}` | `deleteParty` | `200` |
| `GET` | `/api/v1/loan-applications/{applicationId}/offers/{offerId}` | `getOffer` | `200` |
| `PUT` | `/api/v1/loan-applications/{applicationId}/offers/{offerId}` | `updateOffer` | `200` |
| `DELETE` | `/api/v1/loan-applications/{applicationId}/offers/{offerId}` | `deleteOffer` | `200` |
| `GET` | `/api/v1/loan-applications/{applicationId}/metrics/{metricId}` | `getMetric` | `200` |
| `PUT` | `/api/v1/loan-applications/{applicationId}/metrics/{metricId}` | `updateMetric` | `200` |
| `DELETE` | `/api/v1/loan-applications/{applicationId}/metrics/{metricId}` | `deleteMetric` | `200` |
| `GET` | `/api/v1/loan-applications/{applicationId}/fees/{feeId}` | `getFee` | `200` |
| `PUT` | `/api/v1/loan-applications/{applicationId}/fees/{feeId}` | `updateFee` | `200` |
| `DELETE` | `/api/v1/loan-applications/{applicationId}/fees/{feeId}` | `deleteFee` | `200` |
| `GET` | `/api/v1/loan-applications/{applicationId}/external-calls/{callId}` | `getExternalCall` | `200` |
| `PUT` | `/api/v1/loan-applications/{applicationId}/external-calls/{callId}` | `updateExternalCall` | `200` |
| `DELETE` | `/api/v1/loan-applications/{applicationId}/external-calls/{callId}` | `deleteExternalCall` | `200` |
| `GET` | `/api/v1/loan-applications/{applicationId}/external-bank-accounts/{externalBankAccountId}` | `get` | `200` |
| `PUT` | `/api/v1/loan-applications/{applicationId}/external-bank-accounts/{externalBankAccountId}` | `update` | `200` |
| `DELETE` | `/api/v1/loan-applications/{applicationId}/external-bank-accounts/{externalBankAccountId}` | `delete` | `204` |
| `GET` | `/api/v1/loan-applications/{applicationId}/exceptions/{exceptionId}` | `getException` | `200` |
| `PUT` | `/api/v1/loan-applications/{applicationId}/exceptions/{exceptionId}` | `updateException` | `200` |
| `DELETE` | `/api/v1/loan-applications/{applicationId}/exceptions/{exceptionId}` | `deleteException` | `200` |
| `GET` | `/api/v1/loan-applications/{applicationId}/documents/{documentId}` | `getDocument` | `200` |
| `PUT` | `/api/v1/loan-applications/{applicationId}/documents/{documentId}` | `updateDocument` | `200` |
| `DELETE` | `/api/v1/loan-applications/{applicationId}/documents/{documentId}` | `deleteDocument` | `200` |
| `GET` | `/api/v1/loan-applications/{applicationId}/decisions/{decisionId}` | `getDecision` | `200` |
| `PUT` | `/api/v1/loan-applications/{applicationId}/decisions/{decisionId}` | `updateDecision` | `200` |
| `DELETE` | `/api/v1/loan-applications/{applicationId}/decisions/{decisionId}` | `deleteDecision` | `200` |
| `GET` | `/api/v1/loan-applications/{applicationId}/conditions/{conditionId}` | `getCondition` | `200` |
| `PUT` | `/api/v1/loan-applications/{applicationId}/conditions/{conditionId}` | `updateCondition` | `200` |
| `DELETE` | `/api/v1/loan-applications/{applicationId}/conditions/{conditionId}` | `deleteCondition` | `200` |
| `GET` | `/api/v1/loan-applications/{applicationId}/communications/{communicationId}` | `getCommunication` | `200` |
| `PUT` | `/api/v1/loan-applications/{applicationId}/communications/{communicationId}` | `updateCommunication` | `200` |
| `DELETE` | `/api/v1/loan-applications/{applicationId}/communications/{communicationId}` | `deleteCommunication` | `200` |
| `GET` | `/api/v1/loan-applications/{applicationId}/comments/{commentId}` | `getComment` | `200` |
| `PUT` | `/api/v1/loan-applications/{applicationId}/comments/{commentId}` | `updateComment` | `200` |
| `DELETE` | `/api/v1/loan-applications/{applicationId}/comments/{commentId}` | `deleteComment` | `200` |
| `GET` | `/api/v1/document-types/{id}` | `getDocumentTypeById` | `200` |
| `PUT` | `/api/v1/document-types/{id}` | `updateDocumentType` | `200` |
| `DELETE` | `/api/v1/document-types/{id}` | `deleteDocumentType` | `204` |
| `GET` | `/api/v1/decision-codes/{id}` | `getDecisionCodeById` | `200` |
| `PUT` | `/api/v1/decision-codes/{id}` | `updateDecisionCode` | `200` |
| `DELETE` | `/api/v1/decision-codes/{id}` | `deleteDecisionCode` | `204` |
| `GET` | `/api/v1/application-statuses/{applicationStatusId}` | `getApplicationStatus` | `200` |
| `PUT` | `/api/v1/application-statuses/{applicationStatusId}` | `updateApplicationStatus` | `200` |
| `DELETE` | `/api/v1/application-statuses/{applicationStatusId}` | `deleteApplicationStatus` | `200` |
| `POST` | `/api/v1/simulations` | `createSimulation` | `201`, `400` |
| `GET` | `/api/v1/loan-applications` | `filterLoanApplications` | `200` |
| `POST` | `/api/v1/loan-applications` | `createLoanApplication` | `200` |
| `GET` | `/api/v1/loan-applications/{applicationId}/verifications` | `findAllVerifications` | `200` |
| `POST` | `/api/v1/loan-applications/{applicationId}/verifications` | `createVerification` | `200` |
| `GET` | `/api/v1/loan-applications/{applicationId}/tasks` | `findAllTasks` | `200` |
| `POST` | `/api/v1/loan-applications/{applicationId}/tasks` | `createTask` | `200` |
| `GET` | `/api/v1/loan-applications/{applicationId}/status-history` | `findAllStatusHistory` | `200` |
| `POST` | `/api/v1/loan-applications/{applicationId}/status-history` | `createStatusHistory` | `200` |
| `GET` | `/api/v1/loan-applications/{applicationId}/scores` | `findAllScores` | `200` |
| `POST` | `/api/v1/loan-applications/{applicationId}/scores` | `createScore` | `200` |
| `GET` | `/api/v1/loan-applications/{applicationId}/parties` | `findAllParties` | `200` |
| `POST` | `/api/v1/loan-applications/{applicationId}/parties` | `createParty` | `200` |
| `GET` | `/api/v1/loan-applications/{applicationId}/offers` | `findAllOffers` | `200` |
| `POST` | `/api/v1/loan-applications/{applicationId}/offers` | `createOffer` | `200` |
| `GET` | `/api/v1/loan-applications/{applicationId}/metrics` | `findAllMetrics` | `200` |
| `POST` | `/api/v1/loan-applications/{applicationId}/metrics` | `createMetric` | `200` |
| `GET` | `/api/v1/loan-applications/{applicationId}/fees` | `findAllFees` | `200` |
| `POST` | `/api/v1/loan-applications/{applicationId}/fees` | `createFee` | `200` |
| `GET` | `/api/v1/loan-applications/{applicationId}/external-calls` | `findAllExternalCalls` | `200` |
| `POST` | `/api/v1/loan-applications/{applicationId}/external-calls` | `createExternalCall` | `200` |
| `GET` | `/api/v1/loan-applications/{applicationId}/external-bank-accounts` | `findAll` | `200` |
| `POST` | `/api/v1/loan-applications/{applicationId}/external-bank-accounts` | `create` | `201` |
| `GET` | `/api/v1/loan-applications/{applicationId}/exceptions` | `findAllExceptions` | `200` |
| `POST` | `/api/v1/loan-applications/{applicationId}/exceptions` | `createException` | `200` |
| `GET` | `/api/v1/loan-applications/{applicationId}/documents` | `findAllDocuments` | `200` |
| `POST` | `/api/v1/loan-applications/{applicationId}/documents` | `createDocument` | `200` |
| `GET` | `/api/v1/loan-applications/{applicationId}/decisions` | `findAllDecisions` | `200` |
| `POST` | `/api/v1/loan-applications/{applicationId}/decisions` | `createDecision` | `200` |
| `GET` | `/api/v1/loan-applications/{applicationId}/conditions` | `findAllConditions` | `200` |
| `POST` | `/api/v1/loan-applications/{applicationId}/conditions` | `createCondition` | `200` |
| `GET` | `/api/v1/loan-applications/{applicationId}/communications` | `findAllCommunications` | `200` |
| `POST` | `/api/v1/loan-applications/{applicationId}/communications` | `createCommunication` | `200` |
| `GET` | `/api/v1/loan-applications/{applicationId}/comments` | `findAllComments` | `200` |
| `POST` | `/api/v1/loan-applications/{applicationId}/comments` | `createComment` | `200` |
| `GET` | `/api/v1/document-types` | `getAllDocumentTypes` | `200` |
| `POST` | `/api/v1/document-types` | `createDocumentType` | `201` |
| `GET` | `/api/v1/decision-codes` | `getAllDecisionCodes` | `200` |
| `POST` | `/api/v1/decision-codes` | `createDecisionCode` | `201` |
| `GET` | `/api/v1/application-statuses` | `filterApplicationStatuses` | `200` |
| `POST` | `/api/v1/application-statuses` | `createApplicationStatus` | `200` |
| `GET` | `/api/v1/simulations/{id}` | `getSimulation` | `200`, `404` |
| `PATCH` | `/api/v1/simulations/{id}` | `updateSimulation` | `200`, `400`, `404` |
| `PATCH` | `/api/v1/application-parties/{id}/employment-data` | `updateApplicationPartyEmploymentData` | `200`, `400`, `404` |
| `GET` | `/api/v1/loan-applications/all` | `listLoanApplications` | `200` |
| `GET` | `/api/v1/document-types/code/{code}` | `getDocumentTypeByCode` | `200` |
| `GET` | `/api/v1/decision-codes/code/{code}` | `getDecisionCodeByCode` | `200` |
| `GET` | `/api/v1/application-statuses/code/{code}` | `getApplicationStatusByCode` | `200` |
| `GET` | `/api/v1/application-statuses/all` | `listApplicationStatuses` | `200` |
| `GET` | `/api/v1/application-parties/by-party/{partyId}` | `findByPartyId` | `200` |
| `GET` | `/api/v1/application-parties/by-application/{applicationId}/primary` | `findPrimaryApplicationParty` | `200`, `404` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`ApplicationCommentDTO`, `ApplicationCommunicationDTO`, `ApplicationConditionDTO`, `ApplicationDocumentDTO`, `ApplicationExceptionDTO`, `ApplicationExternalBankAccountDTO`, `ApplicationExternalCallDTO`, `ApplicationFeeDTO`, `ApplicationMetricDTO`, `ApplicationPartyDTO`, `ApplicationStatusDTO`, `ApplicationTaskDTO`, `ApplicationVerificationDTO`, `DecisionCode`, `DocumentType`, `EmploymentDataPatchDTO`, `LoanApplicationDTO`, `LoanApplicationStatusHistoryDTO`, `PaginationRequest`, `PaginationResponseApplicationCommentDTO`, `PaginationResponseApplicationCommunicationDTO`, `PaginationResponseApplicationConditionDTO`, `PaginationResponseApplicationDocumentDTO`, `PaginationResponseApplicationExceptionDTO`, `PaginationResponseApplicationExternalBankAccountDTO`, `PaginationResponseApplicationExternalCallDTO`, `PaginationResponseApplicationFeeDTO`, `PaginationResponseApplicationMetricDTO`, `PaginationResponseApplicationPartyDTO`, `PaginationResponseApplicationStatusDTO`, `PaginationResponseApplicationTaskDTO`, `PaginationResponseApplicationVerificationDTO`, `PaginationResponseLoanApplicationDTO`, `PaginationResponseLoanApplicationStatusHistoryDTO`, `PaginationResponseProposedOfferDTO`, `PaginationResponseUnderwritingDecisionDTO`, `PaginationResponseUnderwritingScoreDTO`, `ProposedOfferDTO`, `SimulationDTO`, `UnderwritingDecisionDTO`, `UnderwritingScoreDTO`, `UpdateSimulationCalculationsRequest`

## Contract explorer

<swagger-ui src="../contracts/core-lending-loan-origination/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
