# core-lending-loan-servicing

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/core-lending-loan-servicing) · [Complete contract](../contracts/core-lending-loan-servicing/openapi.yml)

**Provenance:** base revision `c6f0e7f3ce04a3e5b842764adc654a2c9f2ccb94`; current copied input SHA256 `2532110f31a22dabcceb59f9c87488e8ef88a6b29fa8f3200d9fa87b9c8a7891`. [Baseline source](https://github.com/fireflysoftwaresolutions/core-lending-loan-servicing/blob/c6f0e7f3ce04a3e5b842764adc654a2c9f2ccb94/core-lending-loan-servicing-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/loan-servicing-cases/{caseId}` | `getServicingCaseById` | `200` |
| `PUT` | `/api/v1/loan-servicing-cases/{caseId}` | `updateServicingCase` | `200` |
| `DELETE` | `/api/v1/loan-servicing-cases/{caseId}` | `deleteServicingCase` | `200` |
| `PUT` | `/api/v1/loan-servicing-cases/{caseId}/syndicated-facilities/{facilityId}/repayment-allocations/{allocationId}/payment` | `attachPayment` | `200` |
| `PUT` | `/api/v1/loan-servicing-cases/{caseId}/syndicated-facilities/{facilityId}/participants/{participantId}` | `updateParticipant` | `200` |
| `DELETE` | `/api/v1/loan-servicing-cases/{caseId}/syndicated-facilities/{facilityId}/participants/{participantId}` | `deleteParticipant` | `200` |
| `GET` | `/api/v1/loan-servicing-cases/{caseId}/restructurings/{restructuringId}` | `getRestructuringById` | `200` |
| `PUT` | `/api/v1/loan-servicing-cases/{caseId}/restructurings/{restructuringId}` | `updateRestructuring` | `200` |
| `DELETE` | `/api/v1/loan-servicing-cases/{caseId}/restructurings/{restructuringId}` | `deleteRestructuring` | `200` |
| `GET` | `/api/v1/loan-servicing-cases/{caseId}/repayment-schedules/{scheduleId}` | `getRepaymentScheduleById` | `200` |
| `PUT` | `/api/v1/loan-servicing-cases/{caseId}/repayment-schedules/{scheduleId}` | `updateRepaymentSchedule` | `200` |
| `DELETE` | `/api/v1/loan-servicing-cases/{caseId}/repayment-schedules/{scheduleId}` | `deleteRepaymentSchedule` | `200` |
| `GET` | `/api/v1/loan-servicing-cases/{caseId}/repayment-records/{recordId}` | `getRepaymentRecordById` | `200` |
| `PUT` | `/api/v1/loan-servicing-cases/{caseId}/repayment-records/{recordId}` | `updateRepaymentRecord` | `200` |
| `DELETE` | `/api/v1/loan-servicing-cases/{caseId}/repayment-records/{recordId}` | `deleteRepaymentRecord` | `200` |
| `GET` | `/api/v1/loan-servicing-cases/{caseId}/rebates/{rebateId}` | `getRebateById` | `200`, `404` |
| `PUT` | `/api/v1/loan-servicing-cases/{caseId}/rebates/{rebateId}` | `updateRebate` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/loan-servicing-cases/{caseId}/rebates/{rebateId}` | `deleteRebate` | `204`, `404` |
| `GET` | `/api/v1/loan-servicing-cases/{caseId}/rate-changes/{rateChangeId}` | `getRateChangeById` | `200` |
| `PUT` | `/api/v1/loan-servicing-cases/{caseId}/rate-changes/{rateChangeId}` | `updateRateChange` | `200` |
| `DELETE` | `/api/v1/loan-servicing-cases/{caseId}/rate-changes/{rateChangeId}` | `deleteRateChange` | `200` |
| `GET` | `/api/v1/loan-servicing-cases/{caseId}/notifications/{notificationId}` | `getNotificationById` | `200`, `404` |
| `PUT` | `/api/v1/loan-servicing-cases/{caseId}/notifications/{notificationId}` | `updateNotification` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/loan-servicing-cases/{caseId}/notifications/{notificationId}` | `deleteNotification` | `204`, `404` |
| `GET` | `/api/v1/loan-servicing-cases/{caseId}/installment-records/{recordId}` | `getInstallmentRecordById` | `200` |
| `PUT` | `/api/v1/loan-servicing-cases/{caseId}/installment-records/{recordId}` | `updateInstallmentRecord` | `200` |
| `DELETE` | `/api/v1/loan-servicing-cases/{caseId}/installment-records/{recordId}` | `deleteInstallmentRecord` | `200` |
| `GET` | `/api/v1/loan-servicing-cases/{caseId}/installment-plans/{planId}` | `getInstallmentPlanById` | `200` |
| `PUT` | `/api/v1/loan-servicing-cases/{caseId}/installment-plans/{planId}` | `updateInstallmentPlan` | `200` |
| `DELETE` | `/api/v1/loan-servicing-cases/{caseId}/installment-plans/{planId}` | `deleteInstallmentPlan` | `200` |
| `GET` | `/api/v1/loan-servicing-cases/{caseId}/events/{eventId}` | `getServicingEventById` | `200` |
| `PUT` | `/api/v1/loan-servicing-cases/{caseId}/events/{eventId}` | `updateServicingEvent` | `200` |
| `DELETE` | `/api/v1/loan-servicing-cases/{caseId}/events/{eventId}` | `deleteServicingEvent` | `200` |
| `GET` | `/api/v1/loan-servicing-cases/{caseId}/escrows/{escrowId}` | `getEscrowById` | `200`, `404` |
| `PUT` | `/api/v1/loan-servicing-cases/{caseId}/escrows/{escrowId}` | `updateEscrow` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/loan-servicing-cases/{caseId}/escrows/{escrowId}` | `deleteEscrow` | `204`, `404` |
| `GET` | `/api/v1/loan-servicing-cases/{caseId}/disbursements/{disbursementId}` | `getDisbursementById` | `200` |
| `PUT` | `/api/v1/loan-servicing-cases/{caseId}/disbursements/{disbursementId}` | `updateDisbursement` | `200` |
| `DELETE` | `/api/v1/loan-servicing-cases/{caseId}/disbursements/{disbursementId}` | `deleteDisbursement` | `200` |
| `GET` | `/api/v1/loan-servicing-cases/{caseId}/disbursement-plans/{planId}` | `getDisbursementPlanById` | `200`, `404` |
| `PUT` | `/api/v1/loan-servicing-cases/{caseId}/disbursement-plans/{planId}` | `updateDisbursementPlan` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/loan-servicing-cases/{caseId}/disbursement-plans/{planId}` | `deleteDisbursementPlan` | `204`, `404` |
| `GET` | `/api/v1/loan-servicing-cases/{caseId}/balances/{balanceId}` | `getBalanceById` | `200` |
| `PUT` | `/api/v1/loan-servicing-cases/{caseId}/balances/{balanceId}` | `updateBalance` | `200` |
| `DELETE` | `/api/v1/loan-servicing-cases/{caseId}/balances/{balanceId}` | `deleteBalance` | `200` |
| `GET` | `/api/v1/loan-servicing-cases/{caseId}/accruals/{accrualId}` | `getAccrualById` | `200` |
| `PUT` | `/api/v1/loan-servicing-cases/{caseId}/accruals/{accrualId}` | `updateAccrual` | `200` |
| `DELETE` | `/api/v1/loan-servicing-cases/{caseId}/accruals/{accrualId}` | `deleteAccrual` | `200` |
| `GET` | `/api/v1/loan-servicing-cases` | `findAllServicingCases` | `200` |
| `POST` | `/api/v1/loan-servicing-cases` | `createServicingCase` | `200` |
| `GET` | `/api/v1/loan-servicing-cases/{caseId}/syndicated-facilities` | `listSyndicatedFacilities` | `200` |
| `POST` | `/api/v1/loan-servicing-cases/{caseId}/syndicated-facilities` | `open` | `200` |
| `POST` | `/api/v1/loan-servicing-cases/{caseId}/syndicated-facilities/{facilityId}/status-restores/{historyId}` | `restore` | `200` |
| `POST` | `/api/v1/loan-servicing-cases/{caseId}/syndicated-facilities/{facilityId}/repayment-allocations` | `allocate` | `200` |
| `GET` | `/api/v1/loan-servicing-cases/{caseId}/syndicated-facilities/{facilityId}/participants` | `listParticipants` | `200` |
| `POST` | `/api/v1/loan-servicing-cases/{caseId}/syndicated-facilities/{facilityId}/participants` | `addParticipant` | `200` |
| `POST` | `/api/v1/loan-servicing-cases/{caseId}/syndicated-facilities/{facilityId}/drawdowns` | `draw` | `200` |
| `POST` | `/api/v1/loan-servicing-cases/{caseId}/syndicated-facilities/{facilityId}/closures` | `close` | `200` |
| `GET` | `/api/v1/loan-servicing-cases/{caseId}/restructurings` | `findAllRestructurings` | `200` |
| `POST` | `/api/v1/loan-servicing-cases/{caseId}/restructurings` | `createRestructuring` | `200` |
| `POST` | `/api/v1/loan-servicing-cases/{caseId}/repayment-schedules/calendar` | `storeCalendar` | `200` |
| `GET` | `/api/v1/loan-servicing-cases/{caseId}/repayment-schedules/calendar` | `readCalendar` | `200` |
| `POST` | `/api/v1/loan-servicing-cases/{caseId}/repayment-schedules/calendar/replacements` | `replaceCalendar` | `200` |
| `POST` | `/api/v1/loan-servicing-cases/{caseId}/repayment-schedules/calendar/restore` | `restoreCalendar` | `200` |
| `GET` | `/api/v1/loan-servicing-cases/{caseId}/repayment-schedules` | `findAllRepaymentSchedules` | `200` |
| `POST` | `/api/v1/loan-servicing-cases/{caseId}/repayment-schedules` | `createRepaymentSchedule` | `200` |
| `GET` | `/api/v1/loan-servicing-cases/{caseId}/repayment-records` | `findAllRepaymentRecords` | `200` |
| `POST` | `/api/v1/loan-servicing-cases/{caseId}/repayment-records` | `createRepaymentRecord` | `200` |
| `GET` | `/api/v1/loan-servicing-cases/{caseId}/rebates` | `findAllRebates` | `200`, `400`, `404` |
| `POST` | `/api/v1/loan-servicing-cases/{caseId}/rebates` | `createRebate` | `200`, `400`, `404` |
| `GET` | `/api/v1/loan-servicing-cases/{caseId}/rate-changes` | `findAllRateChanges` | `200` |
| `POST` | `/api/v1/loan-servicing-cases/{caseId}/rate-changes` | `createRateChange` | `200` |
| `GET` | `/api/v1/loan-servicing-cases/{caseId}/notifications` | `findAllNotifications` | `200`, `400`, `404` |
| `POST` | `/api/v1/loan-servicing-cases/{caseId}/notifications` | `createNotification` | `200`, `400`, `404` |
| `GET` | `/api/v1/loan-servicing-cases/{caseId}/installment-records` | `findAllInstallmentRecords` | `200` |
| `POST` | `/api/v1/loan-servicing-cases/{caseId}/installment-records` | `createInstallmentRecord` | `200` |
| `GET` | `/api/v1/loan-servicing-cases/{caseId}/installment-plans` | `findAllInstallmentPlans` | `200` |
| `POST` | `/api/v1/loan-servicing-cases/{caseId}/installment-plans` | `createInstallmentPlan` | `200` |
| `GET` | `/api/v1/loan-servicing-cases/{caseId}/events` | `findAllServicingEvents` | `200` |
| `POST` | `/api/v1/loan-servicing-cases/{caseId}/events` | `createServicingEvent` | `200` |
| `GET` | `/api/v1/loan-servicing-cases/{caseId}/escrows` | `findAllEscrows` | `200`, `400`, `404` |
| `POST` | `/api/v1/loan-servicing-cases/{caseId}/escrows` | `createEscrow` | `200`, `400`, `404` |
| `GET` | `/api/v1/loan-servicing-cases/{caseId}/disbursements` | `findAllDisbursements` | `200` |
| `POST` | `/api/v1/loan-servicing-cases/{caseId}/disbursements` | `createDisbursement` | `200` |
| `GET` | `/api/v1/loan-servicing-cases/{caseId}/disbursements/{disbursementId}/internal-transactions` | `findAllInternalTransactions` | `200` |
| `POST` | `/api/v1/loan-servicing-cases/{caseId}/disbursements/{disbursementId}/internal-transactions` | `createInternalTransaction` | `200` |
| `GET` | `/api/v1/loan-servicing-cases/{caseId}/disbursements/{disbursementId}/external-transactions` | `findAllExternalTransactions` | `200` |
| `POST` | `/api/v1/loan-servicing-cases/{caseId}/disbursements/{disbursementId}/external-transactions` | `createExternalTransaction` | `200` |
| `GET` | `/api/v1/loan-servicing-cases/{caseId}/disbursement-plans` | `findAllDisbursementPlans` | `200`, `400`, `404` |
| `POST` | `/api/v1/loan-servicing-cases/{caseId}/disbursement-plans` | `createDisbursementPlan` | `200`, `400`, `404` |
| `GET` | `/api/v1/loan-servicing-cases/{caseId}/balances` | `findAllBalances` | `200` |
| `POST` | `/api/v1/loan-servicing-cases/{caseId}/balances` | `createBalance` | `200` |
| `GET` | `/api/v1/loan-servicing-cases/{caseId}/accruals` | `findAllAccruals` | `200` |
| `POST` | `/api/v1/loan-servicing-cases/{caseId}/accruals` | `createAccrual` | `200` |
| `GET` | `/api/v1/loan-servicing-cases/{caseId}/syndicated-facilities/{facilityId}` | `get` | `200` |
| `DELETE` | `/api/v1/loan-servicing-cases/{caseId}/syndicated-facilities/{facilityId}` | `delete` | `200` |
| `GET` | `/api/v1/loan-servicing-cases/{caseId}/disbursements/{disbursementId}/internal-transactions/{transactionId}` | `getInternalTransactionById` | `200` |
| `GET` | `/api/v1/loan-servicing-cases/{caseId}/disbursements/{disbursementId}/external-transactions/{transactionId}` | `getExternalTransactionById` | `200` |
| `GET` | `/api/v1/loan-servicing-cases/{caseId}/balances/current` | `getCurrentBalance` | `200` |
| `DELETE` | `/api/v1/loan-servicing-cases/{caseId}/syndicated-facilities/{facilityId}/repayment-allocations/{allocationId}` | `deleteAllocation` | `200` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`AllocateFacilityRepaymentRequest`, `AttachFacilityPaymentRequest`, `FacilityAllocationDTO`, `FacilityAllocationLineDTO`, `FacilityParticipantDTO`, `FilterOptions`, `FilterRequestLoanAccrualDTO`, `FilterRequestLoanBalanceDTO`, `FilterRequestLoanDisbursementDTO`, `FilterRequestLoanDisbursementExternalTransactionDTO`, `FilterRequestLoanDisbursementInternalTransactionDTO`, `FilterRequestLoanDisbursementPlanDTO`, `FilterRequestLoanEscrowDTO`, `FilterRequestLoanInstallmentPlanDTO`, `FilterRequestLoanInstallmentRecordDTO`, `FilterRequestLoanNotificationDTO`, `FilterRequestLoanRateChangeDTO`, `FilterRequestLoanRebateDTO`, `FilterRequestLoanRepaymentRecordDTO`, `FilterRequestLoanRepaymentScheduleDTO`, `FilterRequestLoanRestructuringDTO`, `FilterRequestLoanServicingCaseDTO`, `FilterRequestLoanServicingEventDTO`, `LoanAccrualDTO`, `LoanBalanceDTO`, `LoanDisbursementDTO`, `LoanDisbursementExternalTransactionDTO`, `LoanDisbursementInternalTransactionDTO`, `LoanDisbursementPlanDTO`, `LoanEscrowDTO`, `LoanInstallmentPlanDTO`, `LoanInstallmentRecordDTO`, `LoanNotificationDTO`, `LoanRateChangeDTO`, `LoanRebateDTO`, `LoanRepaymentRecordDTO`, `LoanRepaymentScheduleDTO`, `LoanRestructuringDTO`, `LoanServicingCaseDTO`, `LoanServicingEventDTO`, `PaginationRequest`, `PaginationResponse`, `PaginationResponseLoanAccrualDTO`, `PaginationResponseLoanBalanceDTO`, `PaginationResponseLoanDisbursementDTO`, `PaginationResponseLoanDisbursementExternalTransactionDTO`, `PaginationResponseLoanDisbursementInternalTransactionDTO`, `PaginationResponseLoanInstallmentPlanDTO`, `PaginationResponseLoanInstallmentRecordDTO`, `PaginationResponseLoanRateChangeDTO`, `PaginationResponseLoanRepaymentRecordDTO`, `PaginationResponseLoanRepaymentScheduleDTO`, `PaginationResponseLoanRestructuringDTO`, `PaginationResponseLoanServicingCaseDTO`, `PaginationResponseLoanServicingEventDTO`, `RangeFilter`, `RangeObject`, `RestoreScheduleRequest`, `ScheduleRevisionDTO`, `StoreAmortizationCalendarRequest`, `SyndicatedFacilityDTO`

## Contract explorer

<swagger-ui src="../contracts/core-lending-loan-servicing/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
