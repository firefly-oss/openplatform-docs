# core-banking-ledger

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/core-banking-ledger) · [Complete contract](../contracts/core-banking-ledger/openapi.yml)

**Provenance:** base revision `b9bf0997a056a761556883cb8b399dee33c40fd1`; current copied input SHA256 `d5372642dd91dc2e5c5f633259af52ca3fa314f9c5ef4c3502be5dba8ea9c1f8`. [Baseline source](https://github.com/fireflysoftwaresolutions/core-banking-ledger/blob/b9bf0997a056a761556883cb8b399dee33c40fd1/core-banking-ledger-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/transactions/{transactionId}/status-history/{historyId}` | `getStatusHistory` | `200`, `404` |
| `PUT` | `/api/v1/transactions/{transactionId}/status-history/{historyId}` | `updateStatusHistory` | `200`, `404` |
| `DELETE` | `/api/v1/transactions/{transactionId}/status-history/{historyId}` | `deleteStatusHistory` | `204`, `404` |
| `GET` | `/api/v1/transactions/{transactionId}/line-withdrawal` | `getWithdrawalLine` | `200`, `404` |
| `PUT` | `/api/v1/transactions/{transactionId}/line-withdrawal` | `updateWithdrawalLine` | `200`, `404` |
| `POST` | `/api/v1/transactions/{transactionId}/line-withdrawal` | `createWithdrawalLine` | `201`, `400` |
| `DELETE` | `/api/v1/transactions/{transactionId}/line-withdrawal` | `deleteWithdrawalLine` | `204`, `404` |
| `GET` | `/api/v1/transactions/{transactionId}/line-wire-transfer` | `getWireTransferLine` | `200`, `404` |
| `PUT` | `/api/v1/transactions/{transactionId}/line-wire-transfer` | `updateWireTransferLine` | `200`, `404` |
| `POST` | `/api/v1/transactions/{transactionId}/line-wire-transfer` | `createWireTransferLine` | `201`, `400` |
| `DELETE` | `/api/v1/transactions/{transactionId}/line-wire-transfer` | `deleteWireTransferLine` | `204`, `404` |
| `GET` | `/api/v1/transactions/{transactionId}/line-transfer` | `getTransferLine` | `200`, `404` |
| `PUT` | `/api/v1/transactions/{transactionId}/line-transfer` | `updateTransferLine` | `200`, `404` |
| `POST` | `/api/v1/transactions/{transactionId}/line-transfer` | `createTransferLine` | `201`, `400` |
| `DELETE` | `/api/v1/transactions/{transactionId}/line-transfer` | `deleteTransferLine` | `204`, `404` |
| `GET` | `/api/v1/transactions/{transactionId}/line-standing-order` | `getStandingOrderLine` | `200`, `404` |
| `PUT` | `/api/v1/transactions/{transactionId}/line-standing-order` | `updateStandingOrderLine` | `200`, `404` |
| `POST` | `/api/v1/transactions/{transactionId}/line-standing-order` | `createStandingOrderLine` | `201`, `400` |
| `DELETE` | `/api/v1/transactions/{transactionId}/line-standing-order` | `deleteStandingOrderLine` | `204`, `404` |
| `GET` | `/api/v1/transactions/{transactionId}/line-sepa-transfer` | `getSepaTransferLine` | `200`, `404` |
| `PUT` | `/api/v1/transactions/{transactionId}/line-sepa-transfer` | `updateSepaTransferLine` | `200`, `404` |
| `POST` | `/api/v1/transactions/{transactionId}/line-sepa-transfer` | `createSepaTransferLine` | `201`, `400` |
| `DELETE` | `/api/v1/transactions/{transactionId}/line-sepa-transfer` | `deleteSepaTransferLine` | `204`, `404` |
| `GET` | `/api/v1/transactions/{transactionId}/line-interest` | `getInterestLine` | `200`, `404` |
| `PUT` | `/api/v1/transactions/{transactionId}/line-interest` | `updateInterestLine` | `200`, `404` |
| `POST` | `/api/v1/transactions/{transactionId}/line-interest` | `createInterestLine` | `201`, `400` |
| `DELETE` | `/api/v1/transactions/{transactionId}/line-interest` | `deleteInterestLine` | `204`, `404` |
| `GET` | `/api/v1/transactions/{transactionId}/line-fee` | `getFeeLine` | `200`, `404` |
| `PUT` | `/api/v1/transactions/{transactionId}/line-fee` | `updateFeeLine` | `200`, `404` |
| `POST` | `/api/v1/transactions/{transactionId}/line-fee` | `createFeeLine` | `201`, `400` |
| `DELETE` | `/api/v1/transactions/{transactionId}/line-fee` | `deleteFeeLine` | `204`, `404` |
| `GET` | `/api/v1/transactions/{transactionId}/line-direct-debit` | `getDirectDebitLine` | `200`, `404` |
| `PUT` | `/api/v1/transactions/{transactionId}/line-direct-debit` | `updateDirectDebitLine` | `200`, `404` |
| `POST` | `/api/v1/transactions/{transactionId}/line-direct-debit` | `createDirectDebitLine` | `201`, `400` |
| `DELETE` | `/api/v1/transactions/{transactionId}/line-direct-debit` | `deleteDirectDebitLine` | `204`, `404` |
| `GET` | `/api/v1/transactions/{transactionId}/line-deposit` | `getDepositLine` | `200`, `404` |
| `PUT` | `/api/v1/transactions/{transactionId}/line-deposit` | `updateDepositLine` | `200`, `404` |
| `POST` | `/api/v1/transactions/{transactionId}/line-deposit` | `createDepositLine` | `201`, `400` |
| `DELETE` | `/api/v1/transactions/{transactionId}/line-deposit` | `deleteDepositLine` | `204`, `404` |
| `GET` | `/api/v1/transactions/{transactionId}/line-card` | `getCardLine` | `200`, `404` |
| `PUT` | `/api/v1/transactions/{transactionId}/line-card` | `updateCardLine` | `200`, `404` |
| `POST` | `/api/v1/transactions/{transactionId}/line-card` | `createCardLine` | `201`, `400` |
| `DELETE` | `/api/v1/transactions/{transactionId}/line-card` | `deleteCardLine` | `204`, `404` |
| `GET` | `/api/v1/transactions/{transactionId}/line-ach` | `getAchLine` | `200` |
| `PUT` | `/api/v1/transactions/{transactionId}/line-ach` | `updateAchLine` | `200` |
| `POST` | `/api/v1/transactions/{transactionId}/line-ach` | `createAchLine` | `201` |
| `DELETE` | `/api/v1/transactions/{transactionId}/line-ach` | `deleteAchLine` | `204` |
| `GET` | `/api/v1/transactions/{transactionId}` | `getTransaction` | `200`, `404` |
| `PUT` | `/api/v1/transactions/{transactionId}` | `updateTransaction` | `200`, `404` |
| `DELETE` | `/api/v1/transactions/{transactionId}` | `deleteTransaction` | `204`, `404` |
| `GET` | `/api/v1/transactions/{transactionId}/status-history` | `getAllStatusHistory` | `200`, `404` |
| `POST` | `/api/v1/transactions/{transactionId}/status-history` | `createStatusHistory` | `201`, `400` |
| `GET` | `/api/v1/transactions/{transactionId}/legs` | `listTransactionLegs` | `200` |
| `POST` | `/api/v1/transactions/{transactionId}/legs` | `createTransactionLeg` | `201` |
| `GET` | `/api/v1/transactions/{transactionId}/attachments` | `listAttachments` | `200` |
| `POST` | `/api/v1/transactions/{transactionId}/attachments` | `createAttachment` | `201` |
| `POST` | `/api/v1/transactions` | `createTransaction` | `201`, `400` |
| `POST` | `/api/v1/tenants/{tenant}/funds/reservations` | `reserveFunds` | `201` |
| `POST` | `/api/v1/tenants/{tenant}/funds/reservations/{id}/actions` | `actOnFundsReservation` | `200` |
| `POST` | `/api/v1/tenants/{tenant}/funds/reservations/reconciliation` | `reconcileFundsReservation` | `200` |
| `POST` | `/api/v1/tenants/{tenant}/funds/reservations/expiry` | `expireDueFunds` | `200` |
| `POST` | `/api/v1/tenants/{tenant}/funds/funding` | `fundLedgerAccount` | `201` |
| `POST` | `/api/v1/tenants/{tenant}/funds/accounts/{accountId}/enrollment` | `enrollLedgerFunds` | `201` |
| `POST` | `/api/v1/tenants/{tenant}/funds/accounts/{accountId}/controls` | `controlLedgerFunds` | `200` |
| `GET` | `/api/v1/money` | `listMoney` | `200`, `500` |
| `POST` | `/api/v1/money` | `createMoney` | `200`, `400`, `500` |
| `POST` | `/api/v1/ledger-postings` | `createLedgerPosting` | `200` |
| `POST` | `/api/v1/ledger-postings/{transactionId}/reversal` | `reverseLedgerPosting` | `200` |
| `POST` | `/api/v1/ledger-postings/{transactionId}/release` | `releaseLedgerPosting` | `200` |
| `POST` | `/api/v1/ledger-postings/{transactionId}/confirm` | `confirmLedgerPosting` | `200` |
| `PATCH` | `/api/v1/transactions/{transactionId}/status` | `updateTransactionStatus` | `200`, `404` |
| `GET` | `/api/v1/transactions/{transactionId}/legs/{legId}` | `getTransactionLeg` | `200` |
| `GET` | `/api/v1/transactions/{transactionId}/attachments/{attachmentId}` | `getAttachment` | `200` |
| `GET` | `/api/v1/transactions/{transactionId}/attachments/type/{attachmentType}` | `listAttachmentsByType` | `200` |
| `GET` | `/api/v1/transactions/filter` | `filterProducts` | `200`, `404` |
| `GET` | `/api/v1/transactions/by-reference/{externalReference}` | `findByExternalReference` | `200`, `404` |
| `GET` | `/api/v1/transactions/by-account/{accountId}` | `getTransactionsByAccountId` | `200` |
| `GET` | `/api/v1/tenants/{tenant}/funds/reservations/{id}` | `getFundsReservation` | `200` |
| `GET` | `/api/v1/tenants/{tenant}/funds/reservations/by-operation/{operationId}` | `getFundsReservationByOperation` | `200` |
| `GET` | `/api/v1/tenants/{tenant}/funds/accounts/{accountId}` | `getLedgerFunds` | `200` |
| `GET` | `/api/v1/money/{moneyId}` | `getMoney` | `200`, `404`, `500` |
| `GET` | `/api/v1/money/currency/{currency}` | `listMoneyByCurrency` | `200`, `500` |
| `GET` | `/api/v1/accounts/{accountId}/statements/{statementId}` | `getStatement` | `200` |
| `GET` | `/api/v1/accounts/{accountId}/statements/date-range` | `listStatementsByDateRange` | `200` |
| `GET` | `/api/v1/accounts/{accountId}/statements` | `listStatements` | `200` |
| `GET` | `/api/v1/accounts/{accountId}/legs/date-range` | `listAccountLegsByDateRange` | `200` |
| `GET` | `/api/v1/accounts/{accountId}/legs` | `listAccountLegs` | `200` |
| `GET` | `/api/v1/account-spaces/{accountSpaceId}/statements/{statementId}` | `getStatement_1` | `200` |
| `GET` | `/api/v1/account-spaces/{accountSpaceId}/statements/date-range` | `listStatementsByDateRange_1` | `200` |
| `GET` | `/api/v1/account-spaces/{accountSpaceId}/statements` | `listStatements_1` | `200` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`Account`, `Command`, `Control`, `Enrollment`, `ExpiryBatch`, `Funding`, `FundingReceipt`, `LedgerPostingDTO`, `LedgerPostingHeaderDTO`, `LedgerPostingLegDTO`, `LedgerPostingRequestDTO`, `LedgerReversalRequestDTO`, `MoneyDTO`, `PaginationResponse`, `PaginationResponseMoneyDTO`, `Reconciliation`, `Reservation`, `Reserve`, `StatementMetadataDTO`, `TransactionAttachmentDTO`, `TransactionDTO`, `TransactionLegDTO`, `TransactionLineAchDTO`, `TransactionLineCardDTO`, `TransactionLineDepositDTO`, `TransactionLineDirectDebitDTO`, `TransactionLineFeeDTO`, `TransactionLineInterestDTO`, `TransactionLineSepaTransferDTO`, `TransactionLineStandingOrderDTO`, `TransactionLineTransferDTO`, `TransactionLineWireTransferDTO`, `TransactionLineWithdrawalDTO`, `TransactionStatusHistoryDTO`

## Contract explorer

<swagger-ui src="../contracts/core-banking-ledger/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
