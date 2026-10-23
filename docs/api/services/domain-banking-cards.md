# domain-banking-cards

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/domain-banking-cards) · [Complete contract](../contracts/domain-banking-cards/openapi.yml)

**Provenance:** base revision `fa75286715a89ca8f9486cb5fd9510c24e40a121`; current copied input SHA256 `f18e959b1e5b2c000a7135d5634a8143af9006d2e8c3cee2d19b7a20bab00b3f`. [Baseline source](https://github.com/fireflysoftwaresolutions/domain-banking-cards/blob/fa75286715a89ca8f9486cb5fd9510c24e40a121/domain-banking-cards-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `PUT` | `/api/v1/cards/{cardId}/security/{securitySettingId}` | `updateSecuritySettings` | `200` |
| `PUT` | `/api/v1/cards/{cardId}/limits/{limitId}` | `updateLimits` | `200` |
| `GET` | `/api/v1/backoffice/cards/{cardId}/security` | `getCardSecurity` | `200` |
| `PUT` | `/api/v1/backoffice/cards/{cardId}/security` | `updateSecurity` | `200` |
| `POST` | `/api/v1/cards` | `issueCard` | `200` |
| `POST` | `/api/v1/cards/{cardId}/virtual` | `issueVirtualCard` | `200` |
| `POST` | `/api/v1/cards/{cardId}/unblock` | `unblockCard` | `200` |
| `POST` | `/api/v1/cards/{cardId}/transactions/{transactionId}/reversal` | `reverseCardAuthorization` | `200`, `404` |
| `POST` | `/api/v1/cards/{cardId}/transactions/{transactionId}/clearing` | `clearCardTransaction` | `200`, `404`, `409` |
| `POST` | `/api/v1/cards/{cardId}/statements/{statementId}/payments` | `postCardStatementPayment` | `200`, `400`, `409` |
| `POST` | `/api/v1/cards/{cardId}/replace` | `replaceCard` | `200` |
| `POST` | `/api/v1/cards/{cardId}/interest-accrual` | `accrueCardInterest` | `200`, `409` |
| `POST` | `/api/v1/cards/{cardId}/fees` | `chargeCardFee` | `200`, `409` |
| `POST` | `/api/v1/cards/{cardId}/disputes/{disputeId}/resolution` | `resolveCardDispute` | `200`, `404`, `409` |
| `POST` | `/api/v1/cards/{cardId}/credit-line` | `setupCreditLine` | `200` |
| `POST` | `/api/v1/cards/{cardId}/cancel` | `cancelCard` | `200` |
| `POST` | `/api/v1/cards/{cardId}/block` | `blockCard` | `200` |
| `POST` | `/api/v1/cards/{cardId}/authorizations` | `authorizeCardTransaction` | `200`, `400`, `409` |
| `POST` | `/api/v1/cards/{cardId}/activate` | `activateCard` | `200` |
| `GET` | `/api/v1/backoffice/cards/{cardId}/virtual` | `getVirtualCards` | `200` |
| `POST` | `/api/v1/backoffice/cards/{cardId}/virtual` | `createVirtualCard` | `200` |
| `GET` | `/api/v1/backoffice/cards/{cardId}` | `getCard` | `200` |
| `GET` | `/api/v1/backoffice/cards/{cardId}/transactions` | `getCardTransactions` | `200` |
| `GET` | `/api/v1/backoffice/cards/{cardId}/physical` | `getPhysicalCard` | `200` |
| `GET` | `/api/v1/backoffice/cards/{cardId}/limits` | `getCardLimits` | `200` |
| `GET` | `/api/v1/backoffice/cards/{cardId}/disputes` | `getCardDisputes` | `200` |
| `GET` | `/api/v1/backoffice/cards/{cardId}/configuration` | `getCardConfiguration` | `200` |
| `GET` | `/api/v1/backoffice/cards/{cardId}/balance` | `getCardBalance` | `200` |
| `GET` | `/api/v1/backoffice/cards/{cardId}/activity` | `getCardActivity` | `200` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`AccrueCardInterestCommand`, `AuthorizeCardTransactionCommand`, `CardActivityDTO`, `CardBalanceDTO`, `CardConfigurationDTO`, `CardDTO`, `CardDisputeDTO`, `CardLimitDTO`, `CardSecurityDTO`, `CardTransactionDTO`, `CardTransactionSagaResponse`, `ChargeCardFeeCommand`, `ClearCardTransactionCommand`, `CreateVirtualCardRequest`, `CreditLineResponse`, `IssueCardCommand`, `IssueCardResponse`, `IssueVirtualCardCommand`, `PhysicalCardDTO`, `PostCardStatementPaymentCommand`, `ReplaceCardResponse`, `ResolveCardDisputeCommand`, `ReverseCardAuthorizationCommand`, `SetupCreditLineCommand`, `UpdateCardLimitsCommand`, `UpdateSecuritySettingsCommand`, `UpdateSecuritySettingsRequest`, `VirtualCardDTO`, `VirtualCardResponse`

## Contract explorer

<swagger-ui src="../contracts/domain-banking-cards/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
