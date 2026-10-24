# core-banking-cards

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/core-banking-cards) · [Complete contract](../contracts/core-banking-cards/openapi.yml)

**Provenance:** base revision `84fe51492341fb17200b3b3650d9039d86ce3b83`; current copied input SHA256 `adfee62a7ee32eee6d05f6a065623e0ef59c487b1d2d7d821ad3742b105b13f6`. [Baseline source](https://github.com/fireflysoftwaresolutions/core-banking-cards/blob/84fe51492341fb17200b3b3650d9039d86ce3b83/core-banking-cards-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/terminals/{terminalId}` | `getTerminal` | `200`, `404` |
| `PUT` | `/api/v1/terminals/{terminalId}` | `updateTerminal` | `200`, `404`, `400` |
| `DELETE` | `/api/v1/terminals/{terminalId}` | `deleteTerminal` | `204`, `404` |
| `GET` | `/api/v1/programs/{programId}` | `getProgram` | `200`, `404` |
| `PUT` | `/api/v1/programs/{programId}` | `updateProgram` | `200`, `404`, `400` |
| `DELETE` | `/api/v1/programs/{programId}` | `deleteProgram` | `204`, `404` |
| `GET` | `/api/v1/networks/{networkId}` | `getNetwork` | `200`, `404` |
| `PUT` | `/api/v1/networks/{networkId}` | `updateNetwork` | `200`, `404`, `400` |
| `DELETE` | `/api/v1/networks/{networkId}` | `deleteNetwork` | `204`, `404` |
| `GET` | `/api/v1/merchants/{merchantId}` | `getMerchant` | `200`, `404` |
| `PUT` | `/api/v1/merchants/{merchantId}` | `updateMerchant` | `200`, `404`, `400` |
| `DELETE` | `/api/v1/merchants/{merchantId}` | `deleteMerchant` | `204`, `404` |
| `GET` | `/api/v1/issuers/{issuerId}` | `getIssuer` | `200`, `404` |
| `PUT` | `/api/v1/issuers/{issuerId}` | `updateIssuer` | `200`, `404`, `400` |
| `DELETE` | `/api/v1/issuers/{issuerId}` | `deleteIssuer` | `204`, `404` |
| `GET` | `/api/v1/gateways/{gatewayId}` | `getGateway` | `200`, `404` |
| `PUT` | `/api/v1/gateways/{gatewayId}` | `updateGateway` | `200`, `404`, `400` |
| `DELETE` | `/api/v1/gateways/{gatewayId}` | `deleteGateway` | `204`, `404` |
| `GET` | `/api/v1/cards/{cardId}/virtual-cards/{virtualCardId}` | `getVirtualCard` | `200`, `404` |
| `PUT` | `/api/v1/cards/{cardId}/virtual-cards/{virtualCardId}` | `updateVirtualCard` | `200`, `404` |
| `DELETE` | `/api/v1/cards/{cardId}/virtual-cards/{virtualCardId}` | `deleteVirtualCard` | `204`, `404` |
| `GET` | `/api/v1/cards/{cardId}/transactions/{transactionId}` | `getTransaction` | `200`, `404` |
| `PUT` | `/api/v1/cards/{cardId}/transactions/{transactionId}` | `updateTransaction` | `200`, `404` |
| `DELETE` | `/api/v1/cards/{cardId}/transactions/{transactionId}` | `deleteTransaction` | `204`, `404` |
| `GET` | `/api/v1/cards/{cardId}/security/{securityId}` | `getSecuritySetting` | `200`, `404` |
| `PUT` | `/api/v1/cards/{cardId}/security/{securityId}` | `updateSecuritySetting` | `200`, `404` |
| `DELETE` | `/api/v1/cards/{cardId}/security/{securityId}` | `deleteSecuritySetting` | `204`, `404` |
| `GET` | `/api/v1/cards/{cardId}/providers/{providerId}` | `getProvider` | `200`, `404` |
| `PUT` | `/api/v1/cards/{cardId}/providers/{providerId}` | `updateProvider` | `200`, `404` |
| `DELETE` | `/api/v1/cards/{cardId}/providers/{providerId}` | `deleteProvider` | `204`, `404` |
| `GET` | `/api/v1/cards/{cardId}/promotions/{promotionId}` | `getPromotion` | `200`, `404` |
| `PUT` | `/api/v1/cards/{cardId}/promotions/{promotionId}` | `updatePromotion` | `200`, `404`, `400` |
| `DELETE` | `/api/v1/cards/{cardId}/promotions/{promotionId}` | `deletePromotion` | `204`, `404` |
| `GET` | `/api/v1/cards/{cardId}/physical-cards/{physicalCardId}` | `getPhysicalCard` | `200`, `404` |
| `PUT` | `/api/v1/cards/{cardId}/physical-cards/{physicalCardId}` | `updatePhysicalCard` | `200`, `404` |
| `DELETE` | `/api/v1/cards/{cardId}/physical-cards/{physicalCardId}` | `deletePhysicalCard` | `204`, `404` |
| `GET` | `/api/v1/cards/{cardId}/payments/{paymentId}` | `getPayment` | `200`, `404` |
| `PUT` | `/api/v1/cards/{cardId}/payments/{paymentId}` | `updatePayment` | `200`, `404`, `400` |
| `DELETE` | `/api/v1/cards/{cardId}/payments/{paymentId}` | `deletePayment` | `204`, `404` |
| `GET` | `/api/v1/cards/{cardId}/limits/{limitId}` | `getLimit` | `200`, `404` |
| `PUT` | `/api/v1/cards/{cardId}/limits/{limitId}` | `updateLimit` | `200`, `404` |
| `DELETE` | `/api/v1/cards/{cardId}/limits/{limitId}` | `deleteLimit` | `204`, `404` |
| `GET` | `/api/v1/cards/{cardId}/interests/{interestId}` | `getInterest` | `200`, `404` |
| `PUT` | `/api/v1/cards/{cardId}/interests/{interestId}` | `updateInterest` | `200`, `404`, `400` |
| `DELETE` | `/api/v1/cards/{cardId}/interests/{interestId}` | `deleteInterest` | `204`, `404` |
| `GET` | `/api/v1/cards/{cardId}/enrollments/{enrollmentId}` | `getEnrollment` | `200`, `404` |
| `PUT` | `/api/v1/cards/{cardId}/enrollments/{enrollmentId}` | `updateEnrollment` | `200`, `404`, `400` |
| `DELETE` | `/api/v1/cards/{cardId}/enrollments/{enrollmentId}` | `deleteEnrollment` | `204`, `404` |
| `GET` | `/api/v1/cards/{cardId}/disputes/{disputeId}` | `getDispute` | `200`, `404` |
| `PUT` | `/api/v1/cards/{cardId}/disputes/{disputeId}` | `updateDispute` | `200`, `404`, `400` |
| `DELETE` | `/api/v1/cards/{cardId}/disputes/{disputeId}` | `deleteDispute` | `204`, `404` |
| `GET` | `/api/v1/cards/{cardId}/configurations/{configId}` | `getConfiguration` | `200`, `404` |
| `PUT` | `/api/v1/cards/{cardId}/configurations/{configId}` | `updateConfiguration` | `200`, `404` |
| `DELETE` | `/api/v1/cards/{cardId}/configurations/{configId}` | `deleteConfiguration` | `204`, `404` |
| `GET` | `/api/v1/cards/{cardId}/balances/{balanceId}` | `getBalance` | `200`, `404` |
| `PUT` | `/api/v1/cards/{cardId}/balances/{balanceId}` | `updateBalance` | `200`, `404`, `400` |
| `DELETE` | `/api/v1/cards/{cardId}/balances/{balanceId}` | `deleteBalance` | `204`, `404` |
| `GET` | `/api/v1/cards/{cardId}/activities/{activityId}` | `getActivity` | `200`, `404` |
| `PUT` | `/api/v1/cards/{cardId}/activities/{activityId}` | `updateActivity` | `200`, `404`, `400` |
| `DELETE` | `/api/v1/cards/{cardId}/activities/{activityId}` | `deleteActivity` | `204`, `404` |
| `GET` | `/api/v1/cards/{cardId}` | `getCard` | `200`, `404` |
| `PUT` | `/api/v1/cards/{cardId}` | `updateCard` | `200`, `404` |
| `DELETE` | `/api/v1/cards/{cardId}` | `deleteCard` | `204`, `404` |
| `GET` | `/api/v1/bins/{binId}` | `getBIN` | `200`, `404` |
| `PUT` | `/api/v1/bins/{binId}` | `updateBIN` | `200`, `404`, `400` |
| `DELETE` | `/api/v1/bins/{binId}` | `deleteBIN` | `204`, `404` |
| `GET` | `/api/v1/acquirers/{acquirerId}` | `getAcquirer` | `200`, `404` |
| `PUT` | `/api/v1/acquirers/{acquirerId}` | `updateAcquirer` | `200`, `404`, `400` |
| `DELETE` | `/api/v1/acquirers/{acquirerId}` | `deleteAcquirer` | `204`, `404` |
| `GET` | `/api/v1/terminals` | `getAllTerminals` | `200`, `404` |
| `POST` | `/api/v1/terminals` | `createTerminal` | `201`, `400` |
| `GET` | `/api/v1/programs` | `getAllPrograms` | `200`, `404` |
| `POST` | `/api/v1/programs` | `createProgram` | `201`, `400` |
| `GET` | `/api/v1/networks` | `getAllNetworks` | `200`, `404` |
| `POST` | `/api/v1/networks` | `createNetwork` | `201`, `400` |
| `GET` | `/api/v1/merchants` | `getAllMerchants` | `200`, `404` |
| `POST` | `/api/v1/merchants` | `createMerchant` | `201`, `400` |
| `GET` | `/api/v1/issuers` | `getAllIssuers` | `200`, `404` |
| `POST` | `/api/v1/issuers` | `createIssuer` | `201`, `400` |
| `GET` | `/api/v1/gateways` | `getAllGateways` | `200`, `404` |
| `POST` | `/api/v1/gateways` | `createGateway` | `201`, `400` |
| `GET` | `/api/v1/cards/{cardId}/virtual-cards` | `getAllVirtualCards` | `200`, `404` |
| `POST` | `/api/v1/cards/{cardId}/virtual-cards` | `createVirtualCard` | `201`, `400` |
| `GET` | `/api/v1/cards/{cardId}/transactions` | `getAllTransactions` | `200`, `404` |
| `POST` | `/api/v1/cards/{cardId}/transactions` | `createTransaction` | `201`, `400` |
| `GET` | `/api/v1/cards/{cardId}/security` | `getAllSecuritySettings` | `200`, `404` |
| `POST` | `/api/v1/cards/{cardId}/security` | `createSecuritySetting` | `201`, `400` |
| `GET` | `/api/v1/cards/{cardId}/providers` | `getAllProviders` | `200`, `404` |
| `POST` | `/api/v1/cards/{cardId}/providers` | `createProvider` | `201`, `400` |
| `GET` | `/api/v1/cards/{cardId}/promotions` | `getAllPromotions` | `200`, `404` |
| `POST` | `/api/v1/cards/{cardId}/promotions` | `createPromotion` | `201`, `400` |
| `GET` | `/api/v1/cards/{cardId}/physical-cards` | `getAllPhysicalCards` | `200`, `404` |
| `POST` | `/api/v1/cards/{cardId}/physical-cards` | `createPhysicalCard` | `201`, `400` |
| `GET` | `/api/v1/cards/{cardId}/payments` | `getAllPayments` | `200`, `404` |
| `POST` | `/api/v1/cards/{cardId}/payments` | `createPayment` | `201`, `400` |
| `GET` | `/api/v1/cards/{cardId}/limits` | `getAllLimits` | `200`, `404` |
| `POST` | `/api/v1/cards/{cardId}/limits` | `createLimit` | `201`, `400` |
| `GET` | `/api/v1/cards/{cardId}/interests` | `getAllInterests` | `200`, `404` |
| `POST` | `/api/v1/cards/{cardId}/interests` | `createInterest` | `201`, `400` |
| `GET` | `/api/v1/cards/{cardId}/enrollments` | `getAllEnrollments` | `200`, `404` |
| `POST` | `/api/v1/cards/{cardId}/enrollments` | `createEnrollment` | `201`, `400` |
| `GET` | `/api/v1/cards/{cardId}/disputes` | `getAllDisputes` | `200`, `404` |
| `POST` | `/api/v1/cards/{cardId}/disputes` | `createDispute` | `201`, `400` |
| `GET` | `/api/v1/cards/{cardId}/configurations` | `getAllConfigurations` | `200`, `404` |
| `POST` | `/api/v1/cards/{cardId}/configurations` | `createConfiguration` | `201`, `400` |
| `GET` | `/api/v1/cards/{cardId}/balances` | `getAllBalances` | `200`, `404` |
| `POST` | `/api/v1/cards/{cardId}/balances` | `createBalance` | `201`, `400` |
| `GET` | `/api/v1/cards/{cardId}/activities` | `getAllActivities` | `200`, `404` |
| `POST` | `/api/v1/cards/{cardId}/activities` | `createActivity` | `201`, `400` |
| `POST` | `/api/v1/cards/{cardId}/activation` | `activateCard` | `200`, `202`, `400`, `403`, `409`, `422`, `503` |
| `POST` | `/api/v1/cards/filter` | `filterCards` | `200` |
| `POST` | `/api/v1/cards` | `createCard` | `201`, `400` |
| `GET` | `/api/v1/bins` | `getAllBINs` | `200`, `404` |
| `POST` | `/api/v1/bins` | `createBIN` | `201`, `400` |
| `GET` | `/api/v1/acquirers` | `getAllAcquirers` | `200`, `404` |
| `POST` | `/api/v1/acquirers` | `createAcquirer` | `201`, `400` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`BINDTO`, `CardAcquirerDTO`, `CardActivationReceipt`, `CardActivationRequest`, `CardActivityDTO`, `CardBalanceDTO`, `CardConfigurationDTO`, `CardDTO`, `CardDisputeDTO`, `CardEnrollmentDTO`, `CardGatewayDTO`, `CardInterestDTO`, `CardLimitDTO`, `CardMerchantDTO`, `CardNetworkDTO`, `CardPaymentDTO`, `CardProgramDTO`, `CardPromotionDTO`, `CardProviderDTO`, `CardSecurityDTO`, `CardTerminalDTO`, `CardTransactionDTO`, `FilterOptions`, `FilterRequestCardDTO`, `FilterRequestCardTransactionDTO`, `IssuerDTO`, `PaginationRequest`, `PaginationResponse`, `PaginationResponseCardDTO`, `PhysicalCardDTO`, `RangeFilter`, `RangeObject`, `VirtualCardDTO`

## Contract explorer

<swagger-ui src="../contracts/core-banking-cards/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
