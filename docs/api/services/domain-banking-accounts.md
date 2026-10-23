# domain-banking-accounts

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/domain-banking-accounts) · [Complete contract](../contracts/domain-banking-accounts/openapi.yml)

**Provenance:** base revision `d4e27b545878ca358e3dfdbccc04416caa73c528`; current copied input SHA256 `21c5e9ff799874f954cc3b211d6e041056f50273f6b34e90c9200989c7d5b109`. [Baseline source](https://github.com/fireflysoftwaresolutions/domain-banking-accounts/blob/d4e27b545878ca358e3dfdbccc04416caa73c528/domain-banking-accounts-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `POST` | `/api/v1/accounts` | `openAccount` | `200` |
| `POST` | `/api/v1/accounts/{accountId}/spaces` | `createSpace` | `200` |
| `POST` | `/api/v1/accounts/{accountId}/restrictions` | `applyRestriction` | `200` |
| `POST` | `/api/v1/accounts/{accountId}/holders` | `addHolder` | `200` |
| `POST` | `/api/v1/accounts/{accountId}/close` | `closeAccount` | `200` |
| `POST` | `/api/v1/accounts/opening/eligibility` | `recordEligibility` | `200` |
| `POST` | `/api/v1/accounts/opening/documents` | `recordDocumentVerification` | `200` |
| `POST` | `/api/v1/account-records/accounts/{accountId}/sweeps` | `spaceSweep` | `200` |
| `POST` | `/api/v1/account-records/accounts/{accountId}/statements` | `closeStatement` | `200` |
| `POST` | `/api/v1/account-records/accounts/{accountId}/servicing-mandates` | `servicingMandate` | `200` |
| `POST` | `/api/v1/account-records/accounts/{accountId}/limits` | `withdrawalLimit` | `200` |
| `GET` | `/api/v1/backoffice/accounts/{accountId}` | `getAccount` | `200` |
| `GET` | `/api/v1/backoffice/accounts/{accountId}/status-history` | `getAccountStatusHistory` | `200` |
| `GET` | `/api/v1/backoffice/accounts/{accountId}/spaces` | `getAccountSpaces` | `200` |
| `GET` | `/api/v1/backoffice/accounts/{accountId}/restrictions` | `getAccountRestrictions` | `200` |
| `GET` | `/api/v1/backoffice/accounts/{accountId}/restrictions/history` | `getAccountRestrictionsHistory` | `200` |
| `GET` | `/api/v1/backoffice/accounts/{accountId}/parameters` | `getAccountParameters` | `200` |
| `GET` | `/api/v1/backoffice/accounts/{accountId}/holders` | `getAccountHolders` | `200` |
| `GET` | `/api/v1/backoffice/accounts/{accountId}/balance` | `getAccountBalances` | `200` |
| `GET` | `/api/v1/account-records/accounts/{accountId}/statements/{statementId}` | `statement` | `200` |
| `GET` | `/api/v1/account-records/accounts/{accountId}/servicing-mandates/{mandateId}` | `servicingMandate_1` | `200` |
| `DELETE` | `/api/v1/backoffice/accounts/{accountId}/restrictions/{restrictionId}` | `removeRestriction` | `200` |
| `DELETE` | `/api/v1/accounts/{accountId}/restrictions/{restrictionId}` | `removeRestriction_1` | `200` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`AccountDTO`, `AccountParameter`, `AccountRestrictionDTO`, `AccountSpaceDTO`, `AddAccountHolderCommand`, `AddHolderResponse`, `ApplyRestrictionCommand`, `ApplyRestrictionResponse`, `AutoTransferRules`, `ConfigureSpaceResponse`, `CreateAccountSpaceCommand`, `DocumentVerificationDecision`, `DocumentVerificationRequest`, `EligibilityDecision`, `EligibilityRequest`, `MandateView`, `OpenAccountCommand`, `OpenAccountResponse`, `PaginationResponse`, `PaginationResponseAccountSpaceDTO`, `RecordedId`, `ServicingMandate`, `SpaceSweep`, `StatementClose`, `StatementView`, `WithdrawalLimit`

## Contract explorer

<swagger-ui src="../contracts/domain-banking-accounts/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
