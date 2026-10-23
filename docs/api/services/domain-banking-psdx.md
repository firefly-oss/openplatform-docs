# domain-banking-psdx

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/domain-banking-psdx) · [Complete contract](../contracts/domain-banking-psdx/openapi.yml)

**Provenance:** base revision `b45374ceafebc9c805b53bc89a43538a21076ae7`; current copied input SHA256 `4149efb28d982eaa46ab71e7e5e165a455808ba267d1a439ec3aca8f7f776c3c`. [Baseline source](https://github.com/fireflysoftwaresolutions/domain-banking-psdx/blob/b45374ceafebc9c805b53bc89a43538a21076ae7/domain-banking-psdx-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/consents/{id}` | `read` | `200` |
| `PUT` | `/api/v1/consents/{id}/status` | `updateStatus` | `200` |
| `POST` | `/api/v1/consents` | `create` | `200` |
| `GET` | `/api/v1/directory/parties/{partyId}/accounts` | `accountsForParty` | `200` |
| `GET` | `/api/v1/directory/accounts/{accountId}` | `account` | `200` |
| `GET` | `/api/v1/directory/accounts/{accountId}/balances` | `balances` | `200` |
| `GET` | `/api/v1/directory/account-references/balances` | `balancesForReference` | `200` |
| `GET` | `/api/v1/directory/parties/{partyId}/cards` | `cardsForParty` | `200` |
| `GET` | `/api/v1/directory/cards/{cardId}` | `card` | `200` |
| `GET` | `/api/v1/directory/cards/{cardId}/balances` | `cardBalances` | `200` |
| `GET` | `/api/v1/directory/cards/{cardId}/transactions` | `cardTransactions` | `200` |
| `GET` | `/api/v1/directory/cards/{cardId}/transactions/{transactionId}` | `cardTransaction` | `200` |
| `POST` | `/api/v1/directory/payments` | `initiatePayment` | `200` |
| `GET` | `/api/v1/directory/payments/{paymentId}` | `payment` | `200` |
| `GET` | `/api/v1/directory/payments/{paymentId}/status` | `paymentStatus` | `200` |
| `POST` | `/api/v1/directory/payments/{paymentId}/cancel` | `cancelPayment` | `200` |
| `POST` | `/api/v1/directory/payments/{paymentId}/authorize` | `authorizePayment` | `200` |
| `GET` | `/api/v1/directory/accounts/{accountId}/transactions` | `transactions` | `200` |
| `GET` | `/api/v1/directory/transactions/{transactionId}` | `transaction` | `200` |
| `POST` | `/api/v1/directory/sca/authenticate` | `authenticate` | `200` |
| `POST` | `/api/v1/directory/sca/validate` | `validateSca` | `200` |
| `GET` | `/api/v1/directory/sca/required` | `scaRequired` | `200` |
| `POST` | `/api/v1/directory/staff` | `authenticateStaff` | `200`, `401` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`AccountView`, `BalanceView`, `ConsentDraft`, `ConsentView`, `PaymentDraft`, `PaymentView`, `StaffPrincipal`, `StaffSignIn`, `StoredConsent`, `TransactionView`

## Contract explorer

<swagger-ui src="../contracts/domain-banking-psdx/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
