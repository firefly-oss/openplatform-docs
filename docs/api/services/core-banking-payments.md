# core-banking-payments

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/core-banking-payments) · [Complete contract](../contracts/core-banking-payments/openapi.yml)

**Provenance:** base revision `72360395129ca7cbb96f110fed657093fbb72fed`; current copied input SHA256 `6ecdc86364ee9a48657b67cadd039c1bc3c29ef9aeb7652726eea7f08da1ff5a`. [Baseline source](https://github.com/fireflysoftwaresolutions/core-banking-payments/blob/72360395129ca7cbb96f110fed657093fbb72fed/core-banking-payments-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/payment-orders/{paymentOrderId}/schedules/{paymentScheduleId}` | `getPaymentScheduleById` | `200`, `404` |
| `PUT` | `/api/v1/payment-orders/{paymentOrderId}/schedules/{paymentScheduleId}` | `updatePaymentSchedule` | `200`, `404` |
| `DELETE` | `/api/v1/payment-orders/{paymentOrderId}/schedules/{paymentScheduleId}` | `deletePaymentSchedule` | `204`, `404` |
| `GET` | `/api/v1/payment-orders/{paymentOrderId}/providers/{paymentProviderId}` | `getPaymentProviderById` | `200`, `404` |
| `PUT` | `/api/v1/payment-orders/{paymentOrderId}/providers/{paymentProviderId}` | `updatePaymentProvider` | `200`, `404` |
| `DELETE` | `/api/v1/payment-orders/{paymentOrderId}/providers/{paymentProviderId}` | `deletePaymentProvider` | `204`, `404` |
| `GET` | `/api/v1/payment-orders/{paymentOrderId}/proof/{paymentProofId}` | `getPaymentProofById` | `200`, `404` |
| `PUT` | `/api/v1/payment-orders/{paymentOrderId}/proof/{paymentProofId}` | `updatePaymentProof` | `200`, `404` |
| `DELETE` | `/api/v1/payment-orders/{paymentOrderId}/proof/{paymentProofId}` | `deletePaymentProof` | `204`, `404` |
| `GET` | `/api/v1/payment-orders/{paymentOrderId}/payroll-orders/{payrollOrderId}` | `getPayrollOrderById` | `200`, `404` |
| `PUT` | `/api/v1/payment-orders/{paymentOrderId}/payroll-orders/{payrollOrderId}` | `updatePayrollOrder` | `200`, `404` |
| `DELETE` | `/api/v1/payment-orders/{paymentOrderId}/payroll-orders/{payrollOrderId}` | `deletePayrollOrder` | `204`, `404` |
| `GET` | `/api/v1/payment-orders/{paymentOrderId}/instructions/{paymentInstructionId}` | `getPaymentInstructionById` | `200`, `404` |
| `PUT` | `/api/v1/payment-orders/{paymentOrderId}/instructions/{paymentInstructionId}` | `updatePaymentInstruction` | `200`, `404` |
| `DELETE` | `/api/v1/payment-orders/{paymentOrderId}/instructions/{paymentInstructionId}` | `deletePaymentInstruction` | `204`, `404` |
| `GET` | `/api/v1/payment-orders/{paymentOrderId}/fees/{paymentFeeId}` | `getPaymentFeeById` | `200`, `404` |
| `PUT` | `/api/v1/payment-orders/{paymentOrderId}/fees/{paymentFeeId}` | `updatePaymentFee` | `200`, `404` |
| `DELETE` | `/api/v1/payment-orders/{paymentOrderId}/fees/{paymentFeeId}` | `deletePaymentFee` | `204`, `404` |
| `GET` | `/api/v1/payment-orders/{paymentOrderId}/exchange-rates/{paymentExchangeRateId}` | `getExchangeRateById` | `200`, `404` |
| `PUT` | `/api/v1/payment-orders/{paymentOrderId}/exchange-rates/{paymentExchangeRateId}` | `updateExchangeRate` | `200`, `404` |
| `DELETE` | `/api/v1/payment-orders/{paymentOrderId}/exchange-rates/{paymentExchangeRateId}` | `deleteExchangeRate` | `204`, `404` |
| `GET` | `/api/v1/payment-orders/{paymentOrderId}/correspondence/{paymentCorrespondenceId}` | `getCorrespondenceById` | `200`, `404` |
| `PUT` | `/api/v1/payment-orders/{paymentOrderId}/correspondence/{paymentCorrespondenceId}` | `updateCorrespondence` | `200`, `404` |
| `DELETE` | `/api/v1/payment-orders/{paymentOrderId}/correspondence/{paymentCorrespondenceId}` | `deleteCorrespondence` | `204`, `404` |
| `PUT` | `/api/v1/payment-orders/{paymentOrderId}/compliance/{paymentComplianceId}` | `updateCompliance` | `200`, `404` |
| `DELETE` | `/api/v1/payment-orders/{paymentOrderId}/compliance/{paymentComplianceId}` | `deleteCompliance` | `204`, `404` |
| `PUT` | `/api/v1/payment-orders/{paymentOrderId}/compliance/reject` | `rejectCompliance` | `200`, `404` |
| `PUT` | `/api/v1/payment-orders/{paymentOrderId}/compliance/approve` | `approveCompliance` | `200`, `404` |
| `GET` | `/api/v1/payment-orders/{paymentOrderId}` | `getPaymentOrderById` | `200`, `404` |
| `PUT` | `/api/v1/payment-orders/{paymentOrderId}` | `updatePaymentOrder` | `200`, `404` |
| `DELETE` | `/api/v1/payment-orders/{paymentOrderId}` | `deletePaymentOrder` | `204`, `404` |
| `GET` | `/api/v1/payment-methods/{paymentMethodId}` | `getPaymentMethodById` | `200`, `404` |
| `PUT` | `/api/v1/payment-methods/{paymentMethodId}` | `updatePaymentMethod` | `200`, `404` |
| `DELETE` | `/api/v1/payment-methods/{paymentMethodId}` | `deletePaymentMethod` | `204`, `404` |
| `PUT` | `/api/v1/payment-beneficiaries/{paymentBeneficiaryId}/favorite` | `markAsFavorite` | `200`, `404` |
| `GET` | `/api/v1/payment-beneficiaries/{paymentBeneficiaryId}` | `getBeneficiaryById` | `200`, `404` |
| `PUT` | `/api/v1/payment-beneficiaries/{paymentBeneficiaryId}` | `updateBeneficiary` | `200`, `404` |
| `DELETE` | `/api/v1/payment-beneficiaries/{paymentBeneficiaryId}` | `deleteBeneficiary` | `204`, `404` |
| `POST` | `/api/v1/tenants/{tenant}/internal-payments` | `createManagedPayment` | `200`, `201`, `400`, `401`, `403`, `404`, `409`, `503` |
| `POST` | `/api/v1/tenants/{tenant}/internal-payments/{paymentId}/recovery` | `recoverManagedPayment` | `200`, `202`, `400`, `401`, `403`, `404`, `409`, `503` |
| `POST` | `/api/v1/tenants/{tenant}/internal-payments/{paymentId}/failures` | `recordManagedPaymentFailure` | `400`, `401`, `403`, `404`, `409`, `503`, `200` |
| `POST` | `/api/v1/tenants/{tenant}/internal-payments/{paymentId}/decisions` | `decideManagedPayment` | `200`, `202`, `400`, `401`, `403`, `404`, `409`, `503` |
| `POST` | `/api/v1/tenants/{tenant}/internal-payments/{paymentId}/claims` | `claimManagedPaymentEffect` | `400`, `401`, `403`, `404`, `409`, `503`, `200` |
| `POST` | `/api/v1/tenants/{tenant}/internal-payments/{paymentId}/acknowledgments` | `acknowledgeManagedPaymentEffect` | `200`, `202`, `400`, `401`, `403`, `404`, `409`, `503` |
| `POST` | `/api/v1/standing-order-runs` | `runStandingOrder` | `200` |
| `GET` | `/api/v1/payment-orders/{paymentOrderId}/schedules` | `getAllPaymentSchedules` | `200`, `404` |
| `POST` | `/api/v1/payment-orders/{paymentOrderId}/schedules` | `createPaymentSchedule` | `201`, `400` |
| `GET` | `/api/v1/payment-orders/{paymentOrderId}/providers` | `getAllPaymentProviders` | `200`, `404` |
| `POST` | `/api/v1/payment-orders/{paymentOrderId}/providers` | `createPaymentProvider` | `201`, `400` |
| `GET` | `/api/v1/payment-orders/{paymentOrderId}/proof` | `getAllPaymentProofs` | `200`, `404` |
| `POST` | `/api/v1/payment-orders/{paymentOrderId}/proof` | `createPaymentProof` | `201`, `400` |
| `GET` | `/api/v1/payment-orders/{paymentOrderId}/payroll-orders` | `getAllPayrollOrders` | `200`, `404` |
| `POST` | `/api/v1/payment-orders/{paymentOrderId}/payroll-orders` | `createPayrollOrder` | `201`, `400` |
| `GET` | `/api/v1/payment-orders/{paymentOrderId}/instructions` | `getAllPaymentInstructions` | `200`, `404` |
| `POST` | `/api/v1/payment-orders/{paymentOrderId}/instructions` | `createPaymentInstruction` | `201`, `400` |
| `GET` | `/api/v1/payment-orders/{paymentOrderId}/fees` | `getAllPaymentFees` | `200`, `404` |
| `POST` | `/api/v1/payment-orders/{paymentOrderId}/fees` | `createPaymentFee` | `201`, `400` |
| `GET` | `/api/v1/payment-orders/{paymentOrderId}/exchange-rates` | `getExchangeRatesByPaymentOrderId` | `200`, `404` |
| `POST` | `/api/v1/payment-orders/{paymentOrderId}/exchange-rates` | `createExchangeRate` | `201`, `400` |
| `GET` | `/api/v1/payment-orders/{paymentOrderId}/correspondence` | `getCorrespondenceByPaymentOrderId` | `200`, `404` |
| `POST` | `/api/v1/payment-orders/{paymentOrderId}/correspondence` | `createCorrespondence` | `201`, `400` |
| `GET` | `/api/v1/payment-orders/{paymentOrderId}/compliance` | `getComplianceByPaymentOrderId` | `200`, `404` |
| `POST` | `/api/v1/payment-orders/{paymentOrderId}/compliance` | `createCompliance` | `201`, `400` |
| `GET` | `/api/v1/payment-orders` | `getAllPaymentOrders` | `200`, `404` |
| `POST` | `/api/v1/payment-orders` | `createPaymentOrder` | `201`, `400` |
| `GET` | `/api/v1/payment-methods` | `getAllPaymentMethods` | `200`, `404` |
| `POST` | `/api/v1/payment-methods` | `createPaymentMethod` | `201`, `400` |
| `GET` | `/api/v1/payment-beneficiaries` | `getAllBeneficiaries` | `200`, `404` |
| `POST` | `/api/v1/payment-beneficiaries` | `createBeneficiary` | `201`, `400` |
| `POST` | `/api/v1/direct-debit-mandates` | `createDirectDebitMandate` | `200` |
| `POST` | `/api/v1/direct-debit-collections` | `collectDirectDebit` | `200` |
| `GET` | `/api/v1/tenants/{tenant}/internal-payments/{paymentId}` | `getManagedPayment` | `400`, `401`, `403`, `404`, `409`, `503`, `200` |
| `GET` | `/api/v1/tenants/{tenant}/internal-payments/{paymentId}/history` | `managedPaymentHistory` | `400`, `401`, `403`, `404`, `409`, `503`, `200` |
| `GET` | `/api/v1/tenants/{tenant}/internal-payments/recovery` | `managedPaymentRecoveryQueue` | `400`, `401`, `403`, `404`, `409`, `503`, `200` |
| `GET` | `/api/v1/standing-order-runs/{runId}` | `getStandingOrderRun` | `200` |
| `GET` | `/api/v1/payment-orders/{paymentOrderId}/instructions/{paymentInstructionId}/audit` | `getAuditsByPaymentInstructionId` | `200`, `404` |
| `GET` | `/api/v1/payment-orders/{paymentOrderId}/correspondence/type/{correspondenceType}` | `getCorrespondenceByPaymentOrderIdAndType` | `200`, `404` |
| `GET` | `/api/v1/payment-orders/{paymentOrderId}/audit` | `getAuditsByPaymentOrderId` | `200`, `404` |
| `GET` | `/api/v1/exchange-rates` | `getCurrentExchangeRate` | `200`, `400` |
| `GET` | `/api/v1/direct-debit-mandates/{mandateId}` | `getDirectDebitMandate` | `200` |
| `GET` | `/api/v1/direct-debit-collections/{collectionId}` | `getDirectDebitCollection` | `200` |
| `GET` | `/api/v1/audit/{paymentAuditId}` | `getAuditById` | `200`, `404` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`Acknowledge`, `Claim`, `Create`, `Decision`, `DirectDebitCollectionDTO`, `DirectDebitMandateDTO`, `EffectClaim`, `Failure`, `HistoryEvent`, `PaginationResponse`, `PaymentAuditDTO`, `PaymentBeneficiaryDTO`, `PaymentComplianceDTO`, `PaymentCorrespondenceDTO`, `PaymentExchangeRateDTO`, `PaymentFeeDTO`, `PaymentInstructionDTO`, `PaymentMethodDTO`, `PaymentOrderDTO`, `PaymentProofDTO`, `PaymentProviderDTO`, `PaymentScheduleDTO`, `PayrollOrderDTO`, `Recovery`, `RecoveryPage`, `StandingOrderRunDTO`, `View`

## Contract explorer

<swagger-ui src="../contracts/core-banking-payments/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
