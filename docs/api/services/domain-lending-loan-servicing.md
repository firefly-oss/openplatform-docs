# domain-lending-loan-servicing

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/domain-lending-loan-servicing) · [Complete contract](../contracts/domain-lending-loan-servicing/openapi.yml)

**Provenance:** base revision `b8beb6a43e5111b02d83066853018b0d24016939`; current copied input SHA256 `7ed6c9781291f157f10f904fad7d060f28ecd6c07fe05dc4f66365d1f893bf2d`. [Baseline source](https://github.com/fireflysoftwaresolutions/domain-lending-loan-servicing/blob/b8beb6a43e5111b02d83066853018b0d24016939/domain-lending-loan-servicing-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `POST` | `/api/v1/loans` | `submitApplication` | `200` |
| `POST` | `/api/v1/loans/{loanId}/write-back` | `writeBack` | `200` |
| `POST` | `/api/v1/loans/{loanId}/syndicated-facility/repayments` | `repaySyndicatedFacility` | `200` |
| `POST` | `/api/v1/loans/{loanId}/schedule` | `generateSchedule` | `200` |
| `POST` | `/api/v1/loans/{loanId}/restructure` | `applyRestructure` | `200` |
| `POST` | `/api/v1/loans/{loanId}/repayments` | `applyRepayment` | `200` |
| `POST` | `/api/v1/loans/{loanId}/rate` | `setFixedRate` | `200` |
| `POST` | `/api/v1/loans/{loanId}/prepayment` | `applyPrepayment` | `200` |
| `POST` | `/api/v1/loans/{loanId}/penalties` | `generatePenalties` | `200` |
| `POST` | `/api/v1/loans/{loanId}/payment-holiday/grant` | `grantPaymentHoliday` | `200` |
| `POST` | `/api/v1/loans/{loanId}/payment-holiday/end` | `endPaymentHoliday` | `200` |
| `POST` | `/api/v1/loans/{loanId}/interest/capitalize` | `capitalizeInterest` | `200` |
| `POST` | `/api/v1/loans/{loanId}/interest/accrue` | `accrueInterest` | `200` |
| `POST` | `/api/v1/loans/{loanId}/index` | `changeReferenceIndex` | `200` |
| `POST` | `/api/v1/loans/{loanId}/disburse` | `disburse` | `200` |
| `POST` | `/api/v1/loans/{loanId}/close` | `closeLoan` | `200` |
| `POST` | `/api/v1/loans/{loanId}/charge-off` | `chargeOff` | `200` |
| `POST` | `/api/v1/loans/{loanId}/arrears/normalize` | `normalizeArrears` | `200` |
| `POST` | `/api/v1/loans/{loanId}/arrears/mark` | `markInArrears` | `200` |
| `POST` | `/api/v1/loans/end-of-day` | `endOfDay` | `200` |
| `GET` | `/api/v1/loans/{loanId}` | `getLoanDetails` | `200` |
| `GET` | `/api/v1/loans/{loanId}/syndicated-facility` | `viewSyndicatedFacility` | `200` |
| `GET` | `/api/v1/loan-servicing/cases/{caseId}/calendar` | `getAmortizationCalendar` | `200` |
| `GET` | `/api/v1/loan-servicing/cases/{caseId}/schedule` | `getLoanSchedule` | `200` |
| `GET` | `/api/v1/loan-servicing/cases/{caseId}/restructurings` | `getLoanRestructurings` | `200` |
| `GET` | `/api/v1/loan-servicing/cases/{caseId}/repayments` | `getLoanRepayments` | `200` |
| `GET` | `/api/v1/loan-servicing/cases/{caseId}/rebates` | `getLoanRebates` | `200` |
| `GET` | `/api/v1/loan-servicing/cases/{caseId}/rate-changes` | `getLoanRateChanges` | `200` |
| `GET` | `/api/v1/loan-servicing/cases/{caseId}/notifications` | `getLoanNotifications` | `200` |
| `GET` | `/api/v1/loan-servicing/cases/{caseId}/installment-records` | `getLoanInstallmentRecords` | `200` |
| `GET` | `/api/v1/loan-servicing/cases/{caseId}/installment-plan` | `getLoanInstallmentPlan` | `200` |
| `GET` | `/api/v1/loan-servicing/cases/{caseId}/events` | `getLoanEvents` | `200` |
| `GET` | `/api/v1/loan-servicing/cases/{caseId}/escrow` | `getLoanEscrow` | `200` |
| `GET` | `/api/v1/loan-servicing/cases/{caseId}/disbursements` | `getLoanDisbursements` | `200` |
| `GET` | `/api/v1/loan-servicing/cases/{caseId}/disbursement-plan` | `getLoanDisbursementPlan` | `200` |
| `GET` | `/api/v1/loan-servicing/cases/{caseId}/balances` | `getLoanBalances` | `200` |
| `GET` | `/api/v1/loan-servicing/cases/{caseId}/accruals` | `getLoanAccruals` | `200` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`AccrueInterestCommand`, `AllocateSyndicateRepaymentCommand`, `AmortizationCalendarEntry`, `ApplyPrepaymentCommand`, `ApplyRepaymentCommand`, `ApplyRestructureCommand`, `BorrowerFacilityView`, `CapitalizeInterestCommand`, `ChangeReferenceIndexCommand`, `ChargeOffCommand`, `CloseLoanCommand`, `DisburseCommand`, `EndOfDayRequest`, `EndOfDayResult`, `EndPaymentHolidayCommand`, `GeneratePenaltiesCommand`, `GenerateScheduleCommand`, `GrantPaymentHolidayCommand`, `InterestPosting`, `LoanAccrualDTO`, `LoanBalanceDTO`, `LoanDisbursementDTO`, `LoanInstallmentPlanDTO`, `LoanInstallmentRecordDTO`, `LoanRateChangeDTO`, `LoanRepaymentRecordDTO`, `LoanRepaymentScheduleDTO`, `LoanRestructuringDTO`, `LoanServicingEventDTO`, `MarkInArrearsCommand`, `NormalizeArrearsCommand`, `PaginationResponse`, `PaginationResponseLoanAccrualDTO`, `PaginationResponseLoanBalanceDTO`, `PaginationResponseLoanDisbursementDTO`, `PaginationResponseLoanInstallmentPlanDTO`, `PaginationResponseLoanInstallmentRecordDTO`, `PaginationResponseLoanRateChangeDTO`, `PaginationResponseLoanRepaymentRecordDTO`, `PaginationResponseLoanRepaymentScheduleDTO`, `PaginationResponseLoanRestructuringDTO`, `PaginationResponseLoanServicingEventDTO`, `RegisterLoanAccrualCommand`, `RegisterLoanDisbursementCommand`, `RegisterLoanRateChangeCommand`, `RegisterLoanRepaymentRecordCommand`, `RegisterLoanRepaymentScheduleCommand`, `RegisterLoanServicingCaseCommand`, `RegisterLoanServicingEventCommand`, `SetFixedRateCommand`, `SubmitLoanCaseCommand`, `SyndicatePaymentReceipt`, `WriteBackCommand`

## Contract explorer

<swagger-ui src="../contracts/domain-lending-loan-servicing/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
