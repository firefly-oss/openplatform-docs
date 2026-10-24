# core-banking-psdx

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/core-banking-psdx) · [Complete contract](../contracts/core-banking-psdx/openapi.yml)

**Provenance:** base revision `e91894575f1700619f61b2b373af6f8f24b979e3`; current copied input SHA256 `c2effd58ed295a9483ac36c686872e65ee32db4475feb3476d71fbd029a047f5`. [Baseline source](https://github.com/fireflysoftwaresolutions/core-banking-psdx/blob/e91894575f1700619f61b2b373af6f8f24b979e3/core-banking-psdx-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/providers/{providerId}` | `getProvider` | `200`, `404`, `401`, `500` |
| `PUT` | `/api/v1/providers/{providerId}` | `updateProvider` | `200`, `404`, `401`, `500` |
| `DELETE` | `/api/v1/providers/{providerId}` | `revokeProvider` | `200`, `404`, `401`, `500` |
| `PUT` | `/api/v1/consents/{consentId}/status` | `updateConsentStatus` | `200`, `404`, `401`, `500` |
| `POST` | `/api/v1/sca/validate` | `validateSCA` | `200`, `400`, `401`, `500` |
| `POST` | `/api/v1/sca/authenticate` | `initiateSCA` | `200`, `400`, `401`, `500` |
| `POST` | `/api/v1/providers/{providerId}/suspend` | `suspendProvider` | `200`, `404`, `401`, `500` |
| `POST` | `/api/v1/providers/{providerId}/activate` | `activateProvider` | `200`, `404`, `401`, `500` |
| `GET` | `/api/v1/providers` | `getAllProviders` | `200`, `401`, `500` |
| `POST` | `/api/v1/providers` | `registerProvider` | `201`, `400`, `401`, `500` |
| `POST` | `/api/v1/payments/{paymentId}/authorize` | `authorizePayment` | `200`, `404`, `401`, `403`, `500` |
| `POST` | `/api/v1/payments` | `initiatePayment` | `201`, `400`, `401`, `403`, `500` |
| `POST` | `/api/v1/funds-confirmations` | `confirmFunds` | `201`, `400`, `401`, `500` |
| `GET` | `/api/v1/consents` | `getConsentsForCustomer` | `200`, `401`, `500` |
| `POST` | `/api/v1/consents` | `createConsent` | `201`, `400`, `401`, `500` |
| `GET` | `/api/v1/access-logs` | `getAccessLogs` | `200`, `401`, `500` |
| `POST` | `/api/v1/access-logs` | `logAccess` | `201`, `400`, `401`, `500` |
| `POST` | `/api/auth/token` | `authenticate` | `200`, `401`, `500` |
| `POST` | `/api/auth/refresh` | `refreshToken` | `200`, `401`, `500` |
| `GET` | `/api/v1/sca/required` | `isSCARequired` | `200`, `401`, `500` |
| `GET` | `/api/v1/providers/validate` | `validateApiKey` | `200`, `401`, `500` |
| `GET` | `/api/v1/payments/{paymentId}/status` | `getPaymentStatus` | `200`, `404`, `401`, `403`, `500` |
| `GET` | `/api/v1/payments/{paymentId}` | `getPayment` | `200`, `404`, `401`, `403`, `500` |
| `DELETE` | `/api/v1/payments/{paymentId}` | `cancelPayment` | `200`, `404`, `401`, `403`, `500` |
| `GET` | `/api/v1/funds-confirmations/{fundsConfirmationId}` | `getFundsConfirmation` | `200`, `404`, `401`, `500` |
| `GET` | `/api/v1/consents/{consentId}` | `getConsent` | `200`, `404`, `401`, `500` |
| `DELETE` | `/api/v1/consents/{consentId}` | `revokeConsent` | `200`, `404`, `401`, `500` |
| `GET` | `/api/v1/card-accounts/{cardId}/transactions/{transactionId}` | `getCardTransaction` | `200`, `404`, `401`, `500` |
| `GET` | `/api/v1/card-accounts/{cardId}/transactions` | `getCardTransactions` | `200`, `404`, `401`, `500` |
| `GET` | `/api/v1/card-accounts/{cardId}/balances` | `getCardBalances` | `200`, `404`, `401`, `500` |
| `GET` | `/api/v1/card-accounts/{cardId}` | `getCardAccount` | `200`, `404`, `401`, `500` |
| `GET` | `/api/v1/card-accounts` | `getCardAccounts` | `200`, `401`, `500` |
| `GET` | `/api/v1/accounts/{accountId}/transactions/{transactionId}` | `getTransaction` | `200`, `404`, `401`, `403`, `500` |
| `GET` | `/api/v1/accounts/{accountId}/transactions` | `getTransactions` | `200`, `404`, `401`, `403`, `500` |
| `GET` | `/api/v1/accounts/{accountId}/balances` | `getBalances` | `200`, `404`, `401`, `403`, `500` |
| `GET` | `/api/v1/accounts/{accountId}` | `getAccount` | `200`, `404`, `401`, `403`, `500` |
| `GET` | `/api/v1/accounts` | `getAccounts` | `200`, `401`, `403`, `500` |
| `GET` | `/api/v1/access-logs/{logId}` | `getAccessLog` | `200`, `404`, `401`, `500` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`PSDAccessDTO`, `PSDAccessLogDTO`, `PSDAccessLogRequestDTO`, `PSDAccountDTO`, `PSDAccountReferenceDTO`, `PSDAddressDTO`, `PSDAmountDTO`, `PSDAuthenticationRequestDTO`, `PSDAuthenticationResponseDTO`, `PSDBalanceDTO`, `PSDCardAccountDTO`, `PSDCertificateDTO`, `PSDConsentDTO`, `PSDConsentRequestDTO`, `PSDConsentStatusDTO`, `PSDFundsConfirmationDTO`, `PSDLinkDTO`, `PSDLinksDTO`, `PSDPaymentDTO`, `PSDPaymentInitiationRequestDTO`, `PSDPaymentStatusDTO`, `PSDRefreshTokenRequestDTO`, `PSDRemittanceDTO`, `PSDSCAAuthenticationRequestDTO`, `PSDSCAAuthenticationResponseDTO`, `PSDSCAValidationRequestDTO`, `PSDSCAValidationResponseDTO`, `PSDThirdPartyProviderDTO`, `PSDThirdPartyProviderRegistrationDTO`, `PSDTransactionDTO`

## Contract explorer

<swagger-ui src="../contracts/core-banking-psdx/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
