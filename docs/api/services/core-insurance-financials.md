# core-insurance-financials

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/core-insurance-financials) · [Complete contract](../contracts/core-insurance-financials/openapi.yml)

**Provenance:** base revision `c0b9a15a03f2d6851836e371dd8d60007c4bbcbf`; current copied input SHA256 `33be704912fa72de35b374241ea862fab1a774a7f2a1aa719441d131df6d6fa4`. [Baseline source](https://github.com/fireflysoftwaresolutions/core-insurance-financials/blob/c0b9a15a03f2d6851836e371dd8d60007c4bbcbf/core-insurance-financials-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/premium-schedules/{premiumScheduleId}` | `getPremiumScheduleById` | `200`, `404` |
| `PUT` | `/api/v1/premium-schedules/{premiumScheduleId}` | `updatePremiumSchedule` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/premium-schedules/{premiumScheduleId}` | `deletePremiumSchedule` | `204`, `404` |
| `GET` | `/api/v1/premium-schedules/{premiumScheduleId}/refunds/{premiumRefundId}` | `getPremiumRefundById` | `200`, `404` |
| `PUT` | `/api/v1/premium-schedules/{premiumScheduleId}/refunds/{premiumRefundId}` | `updatePremiumRefund` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/premium-schedules/{premiumScheduleId}/refunds/{premiumRefundId}` | `deletePremiumRefund` | `204`, `404` |
| `GET` | `/api/v1/premium-schedules/{premiumScheduleId}/instalments/{premiumInstalmentId}` | `getPremiumInstalmentById` | `200`, `404` |
| `PUT` | `/api/v1/premium-schedules/{premiumScheduleId}/instalments/{premiumInstalmentId}` | `updatePremiumInstalment` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/premium-schedules/{premiumScheduleId}/instalments/{premiumInstalmentId}` | `deletePremiumInstalment` | `204`, `404` |
| `GET` | `/api/v1/premium-schedules/{premiumScheduleId}/credit-control/{creditControlCaseId}` | `getCreditControlCaseById` | `200`, `404` |
| `PUT` | `/api/v1/premium-schedules/{premiumScheduleId}/credit-control/{creditControlCaseId}` | `updateCreditControlCase` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/premium-schedules/{premiumScheduleId}/credit-control/{creditControlCaseId}` | `deleteCreditControlCase` | `204`, `404` |
| `GET` | `/api/v1/premium-schedules/{premiumScheduleId}/commissions/{commissionEntryId}` | `getCommissionEntryById` | `200`, `404` |
| `PUT` | `/api/v1/premium-schedules/{premiumScheduleId}/commissions/{commissionEntryId}` | `updateCommissionEntry` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/premium-schedules/{premiumScheduleId}/commissions/{commissionEntryId}` | `deleteCommissionEntry` | `204`, `404` |
| `GET` | `/api/v1/premium-schedules/{premiumScheduleId}/audits/{premiumAuditId}` | `getPremiumAuditById` | `200`, `404` |
| `PUT` | `/api/v1/premium-schedules/{premiumScheduleId}/audits/{premiumAuditId}` | `updatePremiumAudit` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/premium-schedules/{premiumScheduleId}/audits/{premiumAuditId}` | `deletePremiumAudit` | `204`, `404` |
| `GET` | `/api/v1/indemnities/{indemnityDisbursementId}` | `getIndemnityDisbursementById` | `200`, `404` |
| `PUT` | `/api/v1/indemnities/{indemnityDisbursementId}` | `updateIndemnityDisbursement` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/indemnities/{indemnityDisbursementId}` | `deleteIndemnityDisbursement` | `204`, `404` |
| `GET` | `/api/v1/bordereaux/{bordereauId}` | `getBordereauById` | `200`, `404` |
| `PUT` | `/api/v1/bordereaux/{bordereauId}` | `updateBordereau` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/bordereaux/{bordereauId}` | `deleteBordereau` | `204`, `404` |
| `GET` | `/api/v1/bordereaux/{bordereauId}/lines/{bordereauLineId}` | `getBordereauLineById` | `200`, `404` |
| `PUT` | `/api/v1/bordereaux/{bordereauId}/lines/{bordereauLineId}` | `updateBordereauLine` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/bordereaux/{bordereauId}/lines/{bordereauLineId}` | `deleteBordereauLine` | `204`, `404` |
| `POST` | `/api/v1/premium-schedules` | `createPremiumSchedule` | `201`, `400` |
| `POST` | `/api/v1/premium-schedules/{premiumScheduleId}/refunds` | `createPremiumRefund` | `201`, `400` |
| `POST` | `/api/v1/premium-schedules/{premiumScheduleId}/refunds/filter` | `filterPremiumRefunds` | `200`, `400` |
| `POST` | `/api/v1/premium-schedules/{premiumScheduleId}/instalments` | `createPremiumInstalment` | `201`, `400` |
| `POST` | `/api/v1/premium-schedules/{premiumScheduleId}/instalments/filter` | `filterPremiumInstalments` | `200`, `400` |
| `POST` | `/api/v1/premium-schedules/{premiumScheduleId}/credit-control` | `createCreditControlCase` | `201`, `400` |
| `POST` | `/api/v1/premium-schedules/{premiumScheduleId}/credit-control/filter` | `filterCreditControlCases` | `200`, `400` |
| `POST` | `/api/v1/premium-schedules/{premiumScheduleId}/commissions` | `createCommissionEntry` | `201`, `400` |
| `POST` | `/api/v1/premium-schedules/{premiumScheduleId}/commissions/filter` | `filterCommissionEntries` | `200`, `400` |
| `POST` | `/api/v1/premium-schedules/{premiumScheduleId}/audits` | `createPremiumAudit` | `201`, `400` |
| `POST` | `/api/v1/premium-schedules/{premiumScheduleId}/audits/filter` | `filterPremiumAudits` | `200`, `400` |
| `POST` | `/api/v1/premium-schedules/filter` | `filterPremiumSchedules` | `200`, `400` |
| `POST` | `/api/v1/indemnities` | `createIndemnityDisbursement` | `201`, `400` |
| `POST` | `/api/v1/indemnities/filter` | `filterIndemnityDisbursements` | `200`, `400` |
| `POST` | `/api/v1/bordereaux` | `createBordereau` | `201`, `400` |
| `POST` | `/api/v1/bordereaux/{bordereauId}/lines` | `createBordereauLine` | `201`, `400` |
| `POST` | `/api/v1/bordereaux/{bordereauId}/lines/filter` | `filterBordereauLines` | `200`, `400` |
| `POST` | `/api/v1/bordereaux/filter` | `filterBordereaux` | `200`, `400` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`BordereauDTO`, `BordereauLineDTO`, `CommissionEntryDTO`, `CreditControlCaseDTO`, `FilterOptions`, `FilterRequestBordereauDTO`, `FilterRequestBordereauLineDTO`, `FilterRequestCommissionEntryDTO`, `FilterRequestCreditControlCaseDTO`, `FilterRequestIndemnityDisbursementDTO`, `FilterRequestPremiumAuditDTO`, `FilterRequestPremiumInstalmentDTO`, `FilterRequestPremiumRefundDTO`, `FilterRequestPremiumScheduleDTO`, `IndemnityDisbursementDTO`, `PaginationRequest`, `PaginationResponseBordereauDTO`, `PaginationResponseBordereauLineDTO`, `PaginationResponseCommissionEntryDTO`, `PaginationResponseCreditControlCaseDTO`, `PaginationResponseIndemnityDisbursementDTO`, `PaginationResponsePremiumAuditDTO`, `PaginationResponsePremiumInstalmentDTO`, `PaginationResponsePremiumRefundDTO`, `PaginationResponsePremiumScheduleDTO`, `PremiumAuditDTO`, `PremiumInstalmentDTO`, `PremiumRefundDTO`, `PremiumScheduleDTO`, `RangeFilter`, `RangeObject`

## Contract explorer

<swagger-ui src="../contracts/core-insurance-financials/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
