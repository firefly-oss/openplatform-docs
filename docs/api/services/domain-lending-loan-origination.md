# domain-lending-loan-origination

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/domain-lending-loan-origination) · [Complete contract](../contracts/domain-lending-loan-origination/openapi.yml)

**Provenance:** base revision `4938b6de578b047c0c08acb108371c8b39c3c661`; current copied input SHA256 `39b5dc5d9dc7da3147ecd1073a1bcb728c343d65ab68f924fcd0d158f9050348`. [Baseline source](https://github.com/fireflysoftwaresolutions/domain-lending-loan-origination/blob/4938b6de578b047c0c08acb108371c8b39c3c661/domain-lending-loan-origination-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `POST` | `/api/v1/loan-applications` | `submitApplication` | `200` |
| `POST` | `/api/v1/loan-applications/{appId}/withdraw` | `withdrawApplication` | `200` |
| `POST` | `/api/v1/loan-applications/{appId}/score` | `scoreApplication` | `200` |
| `POST` | `/api/v1/loan-applications/{appId}/reject` | `rejectApplication` | `200` |
| `POST` | `/api/v1/loan-applications/{appId}/documents` | `attachDocuments` | `200` |
| `POST` | `/api/v1/loan-applications/{appId}/approve` | `approveApplication` | `200` |
| `POST` | `/api/v1/loan-applications/simulations` | `persistLendingSimulation` | `201`, `400` |
| `PATCH` | `/api/v1/loan-applications/{applicationId}/employment-data` | `updateApplicationEmploymentData` | `200`, `400`, `404` |
| `GET` | `/api/v1/loan-origination/applications/{applicationId}/verifications` | `getApplicationVerifications` | `200` |
| `GET` | `/api/v1/loan-origination/applications/{applicationId}/tasks` | `getApplicationTasks` | `200` |
| `GET` | `/api/v1/loan-origination/applications/{applicationId}/parties` | `getApplicationParties` | `200` |
| `POST` | `/api/v1/loan-origination/applications/{applicationId}/parties` | `addApplicationParty` | `201` |
| `PUT` | `/api/v1/loan-origination/applications/{applicationId}/parties/{partyId}` | `updateApplicationParty` | `200` |
| `DELETE` | `/api/v1/loan-origination/applications/{applicationId}/parties/{partyId}` | `removeApplicationParty` | `204` |
| `GET` | `/api/v1/loan-origination/applications/{applicationId}/offers` | `getApplicationOffers` | `200` |
| `GET` | `/api/v1/loan-origination/applications/{applicationId}/fees` | `getApplicationFees` | `200` |
| `GET` | `/api/v1/loan-origination/applications/{applicationId}/documents` | `getApplicationDocuments` | `200` |
| `GET` | `/api/v1/loan-origination/applications/{applicationId}/documents/{documentId}` | `getApplicationDocumentById` | `200` |
| `DELETE` | `/api/v1/loan-origination/applications/{applicationId}/documents/{documentId}` | `deleteApplicationDocument` | `204` |
| `POST` | `/api/v1/loan-origination/applications/{applicationId}/tasks/{taskId}/complete` | `completeApplicationTask` | `200` |
| `PUT` | `/api/v1/loan-origination/applications/{applicationId}/offers/{offerId}` | `updateApplicationOffer` | `200` |
| `PUT` | `/api/v1/loan-origination/applications/{applicationId}/disbursement-account` | `configureDisbursementAccount` | `200` |
| `GET` | `/api/v1/loan-origination/applications/{applicationId}/detail` | `getApplicationDetail` | `200` |
| `GET` | `/api/v1/loan-origination/applications/{applicationId}/decisions` | `getApplicationDecisions` | `200` |
| `GET` | `/api/v1/loan-origination/applications/{applicationId}/conditions` | `getApplicationConditions` | `200` |
| `GET` | `/api/v1/loan-origination/applications/{applicationId}/bank-accounts` | `getApplicationBankAccounts` | `200` |
| `POST` | `/api/v1/loan-origination/applications/{applicationId}/bank-accounts` | `registerExternalBankAccount` | `201` |
| `DELETE` | `/api/v1/loan-origination/applications/{applicationId}/bank-accounts/{accountId}` | `deleteExternalBankAccount` | `204` |
| `GET` | `/api/v1/loan-applications/{appId}` | `getApplication` | `200` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`ApplicationConditionDTO`, `ApplicationDocumentDTO`, `ApplicationExternalBankAccountDTO`, `ApplicationFeeDTO`, `ApplicationPartyDTO`, `ApplicationTaskDTO`, `ApplicationVerificationDTO`, `LoanApplicationDTO`, `PaginationResponseApplicationConditionDTO`, `PaginationResponseApplicationDocumentDTO`, `PaginationResponseApplicationExternalBankAccountDTO`, `PaginationResponseApplicationFeeDTO`, `PaginationResponseApplicationPartyDTO`, `PaginationResponseApplicationTaskDTO`, `PaginationResponseApplicationVerificationDTO`, `PaginationResponseProposedOfferDTO`, `PaginationResponseUnderwritingDecisionDTO`, `PersistSimulationCommand`, `ProposedOfferDTO`, `RegisterApplicationDocumentCommand`, `RegisterApplicationPartyCommand`, `RegisterLoanApplicationCommand`, `RegisterLoanApplicationStatusHistoryCommand`, `RegisterProposedOfferCommand`, `RegisterUnderwritingDecisionCommand`, `RegisterUnderwritingScoreCommand`, `SimulationDTO`, `SubmitApplicationCommand`, `UnderwritingDecisionDTO`, `UpdateApplicationEmploymentDataCommand`

## Contract explorer

<swagger-ui src="../contracts/domain-lending-loan-origination/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
