# core-banking-accounts

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/core-banking-accounts) · [Complete contract](../contracts/core-banking-accounts/openapi.yml)

**Provenance:** base revision `9b97b9fe5bc084061ede0cd263f823a3ded66604`; current copied input SHA256 `0afa0ff5ff7ca25dd01d229bd16ebc20618d81bdf4619ef6b28e2b269a3291d3`. [Baseline source](https://github.com/fireflysoftwaresolutions/core-banking-accounts/blob/9b97b9fe5bc084061ede0cd263f823a3ded66604/core-banking-accounts-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/asset-prices/{assetPriceId}` | `getAssetPrice` | `200`, `404` |
| `PUT` | `/api/v1/asset-prices/{assetPriceId}` | `updateAssetPrice` | `200`, `404` |
| `DELETE` | `/api/v1/asset-prices/{assetPriceId}` | `deleteAssetPrice` | `204`, `404` |
| `GET` | `/api/v1/accounts/{accountId}/status-history/{historyId}` | `getStatusHistory` | `200`, `404` |
| `PUT` | `/api/v1/accounts/{accountId}/status-history/{historyId}` | `updateStatusHistory` | `200`, `404` |
| `DELETE` | `/api/v1/accounts/{accountId}/status-history/{historyId}` | `deleteStatusHistory` | `204`, `404` |
| `GET` | `/api/v1/accounts/{accountId}/spaces/{accountSpaceId}/providers/{providerId}` | `getProviderForSpace` | `200`, `404` |
| `PUT` | `/api/v1/accounts/{accountId}/spaces/{accountSpaceId}/providers/{providerId}` | `updateProviderForSpace` | `200`, `404` |
| `DELETE` | `/api/v1/accounts/{accountId}/spaces/{accountSpaceId}/providers/{providerId}` | `deleteProviderForSpace` | `204`, `404` |
| `GET` | `/api/v1/accounts/{accountId}/providers/{providerId}` | `getProvider` | `200`, `404` |
| `PUT` | `/api/v1/accounts/{accountId}/providers/{providerId}` | `updateProvider` | `200`, `404` |
| `DELETE` | `/api/v1/accounts/{accountId}/providers/{providerId}` | `deleteProvider` | `204`, `404` |
| `GET` | `/api/v1/accounts/{accountId}/parameters/{paramId}` | `getParameter` | `200`, `404` |
| `PUT` | `/api/v1/accounts/{accountId}/parameters/{paramId}` | `updateParameter` | `200`, `404` |
| `DELETE` | `/api/v1/accounts/{accountId}/parameters/{paramId}` | `deleteParameter` | `204`, `404` |
| `GET` | `/api/v1/accounts/{accountId}/balances/{balanceId}` | `getBalance` | `200`, `404` |
| `PUT` | `/api/v1/accounts/{accountId}/balances/{balanceId}` | `updateBalance` | `200`, `404` |
| `DELETE` | `/api/v1/accounts/{accountId}/balances/{balanceId}` | `deleteBalance` | `204`, `404` |
| `GET` | `/api/v1/accounts/{accountId}` | `getAccount` | `200` |
| `PUT` | `/api/v1/accounts/{accountId}` | `updateAccount` | `200` |
| `DELETE` | `/api/v1/accounts/{accountId}` | `deleteAccount` | `200` |
| `PUT` | `/api/v1/account-spaces/{accountSpaceId}/balance` | `updateAccountSpaceBalance` | `200` |
| `GET` | `/api/v1/account-spaces/{accountSpaceId}` | `getAccountSpace` | `200` |
| `PUT` | `/api/v1/account-spaces/{accountSpaceId}` | `updateAccountSpace` | `200` |
| `DELETE` | `/api/v1/account-spaces/{accountSpaceId}` | `deleteAccountSpace` | `200` |
| `GET` | `/api/v1/account-restrictions/{accountRestrictionId}` | `getAccountRestriction` | `200`, `404` |
| `PUT` | `/api/v1/account-restrictions/{accountRestrictionId}` | `updateAccountRestriction` | `200`, `404`, `400` |
| `DELETE` | `/api/v1/account-restrictions/{accountRestrictionId}` | `deleteAccountRestriction` | `204`, `404` |
| `GET` | `/api/v1/account-notifications/{accountNotificationId}` | `getAccountNotification` | `200`, `404` |
| `PUT` | `/api/v1/account-notifications/{accountNotificationId}` | `updateAccountNotification` | `200`, `404`, `400` |
| `DELETE` | `/api/v1/account-notifications/{accountNotificationId}` | `deleteAccountNotification` | `204`, `404` |
| `GET` | `/api/v1/tenants/{tenant}/funds/accounts/{accountId}/enrollment` | `verifyFundsEnrollment` | `200` |
| `POST` | `/api/v1/tenants/{tenant}/funds/accounts/{accountId}/enrollment` | `beginFundsEnrollment` | `201` |
| `POST` | `/api/v1/tenants/{tenant}/funds/accounts/{accountId}/enrollment/link` | `linkFundsEnrollment` | `200` |
| `POST` | `/api/v1/tenants/{tenant}/funds/accounts/{accountId}/controls` | `controlAccountFunds` | `200` |
| `POST` | `/api/v1/customer-positions` | `recordCustomerPosition` | `200` |
| `GET` | `/api/v1/asset-prices` | `getAllAssetPrices` | `200`, `404` |
| `POST` | `/api/v1/asset-prices` | `createAssetPrice` | `201`, `400` |
| `POST` | `/api/v1/accounts/{accountId}/term-deposits` | `recordTermDeposit` | `200` |
| `POST` | `/api/v1/accounts/{accountId}/sweeps` | `recordAccountSweep` | `200` |
| `GET` | `/api/v1/accounts/{accountId}/status-history` | `getAllStatusHistory` | `200`, `404` |
| `POST` | `/api/v1/accounts/{accountId}/status-history` | `createStatusHistory` | `201`, `400` |
| `POST` | `/api/v1/accounts/{accountId}/statements` | `recordAccountStatement` | `200` |
| `GET` | `/api/v1/accounts/{accountId}/spaces/{accountSpaceId}/providers` | `getAllProvidersForSpace` | `200`, `404` |
| `POST` | `/api/v1/accounts/{accountId}/spaces/{accountSpaceId}/providers` | `createProviderForSpace` | `201`, `400` |
| `POST` | `/api/v1/accounts/{accountId}/servicing-mandates` | `createServicingMandate` | `200` |
| `POST` | `/api/v1/accounts/{accountId}/savings-interest` | `recordSavingsInterest` | `200` |
| `GET` | `/api/v1/accounts/{accountId}/providers` | `getAllProviders` | `200`, `404` |
| `POST` | `/api/v1/accounts/{accountId}/providers` | `createProvider` | `201`, `400` |
| `GET` | `/api/v1/accounts/{accountId}/parameters` | `getAllParameters` | `200`, `404` |
| `POST` | `/api/v1/accounts/{accountId}/parameters` | `createParameter` | `201`, `400` |
| `POST` | `/api/v1/accounts/{accountId}/limits` | `recordAccountLimit` | `200` |
| `GET` | `/api/v1/accounts/{accountId}/balances` | `getAllBalances` | `200`, `404` |
| `POST` | `/api/v1/accounts/{accountId}/balances` | `createBalance` | `201`, `400` |
| `POST` | `/api/v1/accounts/filter` | `filterAccounts` | `200` |
| `POST` | `/api/v1/accounts` | `createAccount` | `200` |
| `POST` | `/api/v1/account-spaces/{accountSpaceId}/unfreeze` | `unfreezeAccountSpace` | `200` |
| `GET` | `/api/v1/account-spaces/{accountSpaceId}/transactions` | `getTransactions` | `200`, `400`, `404` |
| `POST` | `/api/v1/account-spaces/{accountSpaceId}/transactions` | `recordTransaction` | `201`, `400`, `404` |
| `POST` | `/api/v1/account-spaces/{accountSpaceId}/freeze` | `freezeAccountSpace` | `200` |
| `POST` | `/api/v1/account-spaces/{accountSpaceId}/configure-transfers` | `configureAutomaticTransfers` | `200` |
| `POST` | `/api/v1/account-spaces/transfer` | `transferBetweenSpaces` | `200` |
| `POST` | `/api/v1/account-spaces/execute-transfers/{accountId}` | `executeAutomaticTransfers` | `200` |
| `GET` | `/api/v1/account-spaces` | `filterAccountSpaces` | `200` |
| `POST` | `/api/v1/account-spaces` | `createAccountSpace` | `200` |
| `POST` | `/api/v1/account-restrictions/{accountRestrictionId}/remove` | `removeRestriction` | `200`, `404`, `400` |
| `GET` | `/api/v1/account-restrictions` | `filterAccountRestrictions` | `200`, `404` |
| `POST` | `/api/v1/account-restrictions` | `createAccountRestriction` | `201`, `400` |
| `POST` | `/api/v1/account-notifications/{accountNotificationId}/mark-read` | `markNotificationAsRead` | `200`, `404`, `400` |
| `POST` | `/api/v1/account-notifications/account/{accountId}/mark-all-read` | `markAllNotificationsAsRead` | `200`, `400` |
| `GET` | `/api/v1/account-notifications` | `filterAccountNotifications` | `200`, `404` |
| `POST` | `/api/v1/account-notifications` | `createAccountNotification` | `201`, `400` |
| `GET` | `/api/v1/customer-positions/{positionId}` | `getCustomerPosition` | `200` |
| `GET` | `/api/v1/asset-prices/asset/{assetSymbol}/history` | `getHistoricalAssetPrices` | `200`, `404` |
| `GET` | `/api/v1/asset-prices/asset/{assetSymbol}/currency/{quoteCurrency}/latest` | `getLatestAssetPrice` | `200`, `404` |
| `GET` | `/api/v1/asset-prices/asset/{assetSymbol}/currency/{quoteCurrency}/history` | `getHistoricalAssetPricesByCurrency` | `200`, `404` |
| `GET` | `/api/v1/asset-prices/asset/{assetSymbol}/currency/{quoteCurrency}` | `getAssetPricesBySymbolAndCurrency` | `200`, `404` |
| `DELETE` | `/api/v1/asset-prices/asset/{assetSymbol}/currency/{quoteCurrency}` | `deleteAssetPricesBySymbolAndCurrency` | `204`, `404` |
| `GET` | `/api/v1/asset-prices/asset/{assetSymbol}` | `getAssetPricesBySymbol` | `200`, `404` |
| `DELETE` | `/api/v1/asset-prices/asset/{assetSymbol}` | `deleteAssetPricesBySymbol` | `204`, `404` |
| `GET` | `/api/v1/accounts/{accountId}/term-deposits/{termDepositId}` | `getTermDeposit` | `200` |
| `GET` | `/api/v1/accounts/{accountId}/sweeps/{sweepId}` | `getAccountSweep` | `200` |
| `GET` | `/api/v1/accounts/{accountId}/statements/{statementId}` | `getAccountStatement` | `200` |
| `GET` | `/api/v1/accounts/{accountId}/servicing-mandates/{mandateId}` | `getServicingMandate` | `200` |
| `GET` | `/api/v1/accounts/{accountId}/savings-interest/{interestId}` | `getSavingsInterest` | `200` |
| `GET` | `/api/v1/accounts/{accountId}/limits/{limitId}` | `getAccountLimit` | `200` |
| `GET` | `/api/v1/account-spaces/{accountSpaceId}/transactions/history/balance` | `getBalanceAtDateTime` | `200`, `400` |
| `GET` | `/api/v1/account-spaces/{accountSpaceId}/transactions/filter/date` | `getTransactionsByDateRange` | `200`, `400`, `404` |
| `GET` | `/api/v1/account-spaces/{accountSpaceId}/transactions/analytics/withdrawals` | `calculateTotalWithdrawals` | `200`, `400` |
| `GET` | `/api/v1/account-spaces/{accountSpaceId}/transactions/analytics/deposits` | `calculateTotalDeposits` | `200`, `400` |
| `GET` | `/api/v1/account-spaces/{accountSpaceId}/goal-progress` | `calculateGoalProgress` | `200` |
| `GET` | `/api/v1/account-spaces/{accountSpaceId}/analytics` | `getSpaceAnalytics` | `200` |
| `GET` | `/api/v1/account-spaces/with-upcoming-targets/{accountId}` | `getSpacesWithUpcomingTargetDates` | `200` |
| `GET` | `/api/v1/account-spaces/with-goals/{accountId}` | `getSpacesWithGoals` | `200` |
| `GET` | `/api/v1/account-spaces/simulate-balances/{accountId}` | `simulateFutureBalances` | `200` |
| `GET` | `/api/v1/account-spaces/growth-rates/{accountId}` | `calculateGrowthRates` | `200` |
| `GET` | `/api/v1/account-spaces/by-type/{accountId}` | `getSpacesByType` | `200` |
| `GET` | `/api/v1/account-spaces/by-account/{accountId}/paginated` | `getAccountSpacesByAccountIdPaginated` | `200` |
| `GET` | `/api/v1/account-spaces/by-account/{accountId}` | `getAccountSpacesByAccountId` | `200` |
| `GET` | `/api/v1/account-spaces/balance-distribution/{accountId}` | `calculateBalanceDistribution` | `200` |
| `GET` | `/api/v1/account-restrictions/account/{accountId}/active` | `getActiveAccountRestrictionsByAccountId` | `200`, `400` |
| `GET` | `/api/v1/account-restrictions/account/{accountId}` | `getAccountRestrictionsByAccountId` | `200`, `400` |
| `GET` | `/api/v1/account-notifications/account/{accountId}/unread` | `getUnreadAccountNotifications` | `200`, `400` |
| `GET` | `/api/v1/account-notifications/account/{accountId}/type/{notificationType}` | `getAccountNotificationsByType` | `200`, `400` |
| `GET` | `/api/v1/account-notifications/account/{accountId}/active` | `getActiveNotifications` | `200`, `400` |
| `GET` | `/api/v1/account-notifications/account/{accountId}` | `getAccountNotificationsByAccountId` | `200`, `400` |
| `DELETE` | `/api/v1/asset-prices/older-than` | `deleteAssetPricesOlderThan` | `204`, `404` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`AccountBalanceDTO`, `AccountDTO`, `AccountLimitDTO`, `AccountNotificationDTO`, `AccountParameterDTO`, `AccountProviderDTO`, `AccountRestrictionDTO`, `AccountSpaceDTO`, `AccountStatementDTO`, `AccountStatusHistoryDTO`, `AccountSweepDTO`, `AssetPriceDTO`, `Begin`, `CustomerPositionDTO`, `Enrollment`, `FilterOptions`, `FilterRequestAccountDTO`, `FilterRequestAccountNotificationDTO`, `FilterRequestAccountRestrictionDTO`, `FilterRequestAccountSpaceDTO`, `Link`, `Manage`, `PaginationRequest`, `PaginationResponse`, `PaginationResponseAccountDTO`, `PaginationResponseAccountSpaceDTO`, `RangeFilter`, `RangeObject`, `SavingsInterestDTO`, `ServicingMandateDTO`, `SpaceAnalyticsDTO`, `SpaceTransactionDTO`, `TermDepositDTO`, `TimeSeriesDataPoint`

## Contract explorer

<swagger-ui src="../contracts/core-banking-accounts/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
