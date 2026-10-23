# exp-lending

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/exp-lending) · [Complete contract](../contracts/exp-lending/openapi.yml)

**Provenance:** base revision `fcffe113af1171f5968bd6046b00e460a4142c94`; current copied input SHA256 `299a0079ea24a810bcadd96d47672140b2af068a682bfd8731a4e9f027229a51`. [Baseline source](https://github.com/fireflysoftwaresolutions/exp-lending/blob/fcffe113af1171f5968bd6046b00e460a4142c94/exp-lending-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/experience/lending/personal-loans/{agreementId}` | `getAgreement` | `200`, `404` |
| `PUT` | `/api/v1/experience/lending/personal-loans/{agreementId}` | `updateAgreement` | `200`, `404` |
| `GET` | `/api/v1/experience/lending/applications/{id}/parties/{partyId}` | `getParty` | `200` |
| `PUT` | `/api/v1/experience/lending/applications/{id}/parties/{partyId}` | `updateParty` | `200` |
| `DELETE` | `/api/v1/experience/lending/applications/{id}/parties/{partyId}` | `removeParty` | `200` |
| `GET` | `/api/v1/experience/lending/applications/{id}/disbursement-account` | `getDisbursementAccount` | `200` |
| `PUT` | `/api/v1/experience/lending/applications/{id}/disbursement-account` | `configureDisbursementAccount` | `200` |
| `POST` | `/api/v1/experience/lending/simulations/configure` | `configureLendingSimulation` | `201`, `400` |
| `POST` | `/api/v1/experience/lending/simulations` | `createSimulation` | `200` |
| `GET` | `/api/v1/experience/lending/personal-loans` | `listAgreements` | `200` |
| `POST` | `/api/v1/experience/lending/personal-loans` | `createAgreement` | `201`, `400` |
| `POST` | `/api/v1/experience/lending/loans/{id}/restructuring` | `requestRestructuring` | `200` |
| `POST` | `/api/v1/experience/lending/loans/{id}/early-repayment/simulation` | `simulateEarlyRepayment` | `200` |
| `POST` | `/api/v1/experience/lending/loans/{id}/early-repayment` | `requestEarlyRepayment` | `200` |
| `POST` | `/api/v1/experience/lending/eligibility` | `checkEligibility` | `200` |
| `POST` | `/api/v1/experience/lending/collections/{id}/promise-to-pay` | `registerPaymentPromise` | `200` |
| `POST` | `/api/v1/experience/lending/asset-finance/{id}/end-options/{optId}/exercise` | `exerciseEndOption` | `200` |
| `GET` | `/api/v1/experience/lending/asset-finance/{id}/assets/{assetId}/usage` | `listUsage` | `200` |
| `POST` | `/api/v1/experience/lending/asset-finance/{id}/assets/{assetId}/usage` | `reportUsage` | `200` |
| `GET` | `/api/v1/experience/lending/asset-finance/{id}/assets/{assetId}/service-events` | `listServiceEvents` | `200` |
| `POST` | `/api/v1/experience/lending/asset-finance/{id}/assets/{assetId}/service-events` | `reportServiceEvent` | `200` |
| `GET` | `/api/v1/experience/lending/asset-finance/{id}/assets/{assetId}/returns` | `listReturns` | `200` |
| `POST` | `/api/v1/experience/lending/asset-finance/{id}/assets/{assetId}/returns` | `requestReturn` | `200` |
| `POST` | `/api/v1/experience/lending/applications/{id}/withdraw` | `withdrawApplication` | `200` |
| `POST` | `/api/v1/experience/lending/applications/{id}/submission` | `submitApplication` | `200` |
| `GET` | `/api/v1/experience/lending/applications/{id}/parties` | `listParties` | `200` |
| `POST` | `/api/v1/experience/lending/applications/{id}/parties` | `addParty` | `200` |
| `POST` | `/api/v1/experience/lending/applications/{id}/offers/{offerId}/reject` | `rejectOffer` | `200` |
| `POST` | `/api/v1/experience/lending/applications/{id}/offers/{offerId}/accept` | `acceptOffer` | `200` |
| `GET` | `/api/v1/experience/lending/applications/{id}/external-accounts` | `listExternalAccounts` | `200` |
| `POST` | `/api/v1/experience/lending/applications/{id}/external-accounts` | `registerExternalAccount` | `200` |
| `GET` | `/api/v1/experience/lending/applications/{id}/documents` | `listDocuments` | `200` |
| `POST` | `/api/v1/experience/lending/applications/{id}/documents` | `uploadDocument` | `200` |
| `POST` | `/api/v1/experience/lending/applications/{id}/contract/sign` | `signContract` | `200` |
| `GET` | `/api/v1/experience/lending/applications` | `listApplications` | `200` |
| `POST` | `/api/v1/experience/lending/applications` | `createApplication` | `201`, `400` |
| `PATCH` | `/api/v1/experience/lending/applications/{id}/tasks/{taskId}` | `completeTask` | `200` |
| `GET` | `/api/v1/experience/lending/applications/{id}` | `getApplication` | `200` |
| `PATCH` | `/api/v1/experience/lending/applications/{id}` | `updateApplication` | `200` |
| `PATCH` | `/api/v1/experience/lending/applications/{applicationId}/employment-data` | `updateApplicationEmploymentData` | `200`, `400` |
| `GET` | `/api/v1/experience/lending/products/{productId}/pricing` | `getLendingProductPricing` | `200`, `404` |
| `GET` | `/api/v1/experience/lending/products` | `listLendingProducts` | `200` |
| `GET` | `/api/v1/experience/lending/loans/{id}/calendar` | `readAmortizationCalendar` | `200` |
| `GET` | `/api/v1/experience/lending/loans/{id}/schedule` | `getRepaymentSchedule` | `200` |
| `GET` | `/api/v1/experience/lending/loans/{id}/restructurings` | `getRestructurings` | `200` |
| `GET` | `/api/v1/experience/lending/loans/{id}/repayments` | `getRepayments` | `200` |
| `GET` | `/api/v1/experience/lending/loans/{id}/rebates` | `getRebates` | `200` |
| `GET` | `/api/v1/experience/lending/loans/{id}/rate-info` | `getRateInfo` | `200` |
| `GET` | `/api/v1/experience/lending/loans/{id}/rate-changes` | `getRateChanges` | `200` |
| `GET` | `/api/v1/experience/lending/loans/{id}/notifications` | `getNotifications` | `200` |
| `GET` | `/api/v1/experience/lending/loans/{id}/installments/{instId}/payments` | `getInstallmentPayments` | `200` |
| `GET` | `/api/v1/experience/lending/loans/{id}/installments/{instId}` | `getInstallment` | `200` |
| `GET` | `/api/v1/experience/lending/loans/{id}/installments` | `getInstallments` | `200` |
| `GET` | `/api/v1/experience/lending/loans/{id}/events` | `getEvents` | `200` |
| `GET` | `/api/v1/experience/lending/loans/{id}/escrow` | `getEscrow` | `200` |
| `GET` | `/api/v1/experience/lending/loans/{id}/documents` | `getDocuments` | `200` |
| `GET` | `/api/v1/experience/lending/loans/{id}/disbursements/{dId}` | `getDisbursement` | `200` |
| `GET` | `/api/v1/experience/lending/loans/{id}/disbursements` | `getDisbursements` | `200` |
| `GET` | `/api/v1/experience/lending/loans/{id}/disbursement-plan` | `getDisbursementPlan` | `200` |
| `GET` | `/api/v1/experience/lending/loans/{id}/balance/history` | `getBalanceHistory` | `200` |
| `GET` | `/api/v1/experience/lending/loans/{id}/balance` | `getBalance` | `200` |
| `GET` | `/api/v1/experience/lending/loans/{id}/accruals` | `getAccruals` | `200` |
| `GET` | `/api/v1/experience/lending/loans/{id}` | `getLoan` | `200` |
| `GET` | `/api/v1/experience/lending/loans` | `listLoans` | `200` |
| `GET` | `/api/v1/experience/lending/collections/{id}` | `getCollectionCase` | `200` |
| `GET` | `/api/v1/experience/lending/collections` | `listCollectionCases` | `200` |
| `GET` | `/api/v1/experience/lending/asset-finance/{id}/end-options` | `listEndOptions` | `200` |
| `GET` | `/api/v1/experience/lending/asset-finance/{id}/assets/{assetId}/pickups` | `listPickups` | `200` |
| `GET` | `/api/v1/experience/lending/asset-finance/{id}/assets/{assetId}/deliveries/{dId}` | `getDelivery` | `200` |
| `GET` | `/api/v1/experience/lending/asset-finance/{id}/assets/{assetId}/deliveries` | `listDeliveries` | `200` |
| `GET` | `/api/v1/experience/lending/asset-finance/{id}/assets/{assetId}` | `getAsset` | `200` |
| `GET` | `/api/v1/experience/lending/asset-finance/{id}/assets` | `listAssets` | `200` |
| `GET` | `/api/v1/experience/lending/asset-finance/{id}` | `getAgreement_1` | `200` |
| `GET` | `/api/v1/experience/lending/asset-finance` | `listAgreements_1` | `200` |
| `GET` | `/api/v1/experience/lending/applications/{id}/verifications` | `getVerifications` | `200` |
| `GET` | `/api/v1/experience/lending/applications/{id}/tasks` | `getTasks` | `200` |
| `GET` | `/api/v1/experience/lending/applications/{id}/status-history` | `getStatusHistory` | `200` |
| `GET` | `/api/v1/experience/lending/applications/{id}/scoring-status` | `getScoringStatus` | `200` |
| `GET` | `/api/v1/experience/lending/applications/{id}/offers/{offerId}` | `getOffer` | `200` |
| `GET` | `/api/v1/experience/lending/applications/{id}/offers` | `getOffers` | `200` |
| `GET` | `/api/v1/experience/lending/applications/{id}/fees` | `getFees` | `200` |
| `DELETE` | `/api/v1/experience/lending/applications/{id}/documents/{docId}` | `deleteDocument` | `200` |
| `GET` | `/api/v1/experience/lending/applications/{id}/decision` | `getDecision` | `200` |
| `GET` | `/api/v1/experience/lending/applications/{id}/contract` | `getContract` | `200` |
| `GET` | `/api/v1/experience/lending/applications/{id}/conditions` | `getConditions` | `200` |
| `DELETE` | `/api/v1/experience/lending/applications/{id}/external-accounts/{accId}` | `deleteExternalAccount` | `200` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`AccrualDTO`, `AddApplicationPartyCommand`, `AgreementDetailDTO`, `AgreementSummaryDTO`, `AmortizationCalendarRow`, `ApplicationDetailDTO`, `ApplicationDocumentDTO`, `ApplicationPartyDTO`, `ApplicationStatusHistoryDTO`, `ApplicationSummaryDTO`, `BalanceDTO`, `BalanceHistoryDTO`, `CheckEligibilityCommand`, `CollectionActionDTO`, `CollectionCaseDetailDTO`, `CollectionCaseSummaryDTO`, `ConditionDTO`, `ConfigureDisbursementAccountCommand`, `ConfigureSimulationCommand`, `ConfiguredSimulationDTO`, `ContractDTO`, `CreateApplicationCommand`, `CreatePersonalLoanCommand`, `CreateSimulationCommand`, `DecisionDTO`, `DeliveryDTO`, `DisbursementAccountDTO`, `DisbursementDTO`, `DisbursementPlanDTO`, `EarlyRepaymentSimulationDTO`, `EligibilityResultDTO`, `EndOptionDTO`, `EscrowDTO`, `ExternalAccountDTO`, `FeeDTO`, `FeeDefinitionDTO`, `FinancedAssetDTO`, `InstallmentDTO`, `InstallmentPaymentDTO`, `InterestRateBracketDTO`, `LoanDetailDTO`, `LoanDocumentDTO`, `LoanEventDTO`, `LoanNotificationDTO`, `LoanSummaryDTO`, `OfferDetailDTO`, `OfferSummaryDTO`, `PaymentPromiseDTO`, `PersonalLoanDetailDTO`, `PersonalLoanSummaryDTO`, `PickupDTO`, `ProductPricingDTO`, `RateChangeDTO`, `RateInfoDTO`, `RebateDTO`, `RegisterExternalAccountCommand`, `RegisterPaymentPromiseCommand`, `RejectOfferCommand`, `RepaymentDTO`, `ReportServiceEventCommand`, `ReportUsageCommand`, `RequestEarlyRepaymentCommand`, `RequestRestructuringCommand`, `RequestReturnCommand`, `RestructuringDTO`, `ReturnDTO`, `ScheduleEntryDTO`, `ScoringStatusDTO`, `ServiceEventDTO`, `SignContractCommand`, `SimulationResultDTO`, `StatusEntryDTO`, `TaskDTO`, `UpdateApplicationCommand`, `UpdateApplicationPartyCommand`, `UpdateEmploymentDataCommand`, `UploadDocumentCommand`, `UsageRecordDTO`, `VerificationDTO`

## Contract explorer

<swagger-ui src="../contracts/exp-lending/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
