# exp-accounts

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/exp-accounts) · [Complete contract](../contracts/exp-accounts/openapi.yml)

**Provenance:** base revision `15a1a53f9d3b00a360462973f51e8f6231251f9c`; current copied input SHA256 `26d92cbd53a93e6f1dd5b7ae8055edda928dfe8d4f5e6f2ce83fd3205bc1f4ce`. [Baseline source](https://github.com/fireflysoftwaresolutions/exp-accounts/blob/15a1a53f9d3b00a360462973f51e8f6231251f9c/exp-accounts-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/accounts/{accountId}` | `getAccountSummary` | `200`, `404` |
| `PUT` | `/api/v1/accounts/{accountId}` | `updateAccount` | `200` |
| `DELETE` | `/api/v1/accounts/{accountId}` | `closeAccount` | `204`, `404` |
| `POST` | `/api/v1/journeys/account-opening/{journeyId}/income-proof` | `submitIncomeProof` | `200` |
| `POST` | `/api/v1/journeys/account-opening/{journeyId}/funding` | `configureFundingSource` | `200` |
| `POST` | `/api/v1/journeys/account-opening` | `initiateAccountOpening` | `200` |
| `POST` | `/api/v1/experience/accounts/{resourceId}/complaints` | `open` | `201` |
| `POST` | `/api/v1/accounts` | `openAccount` | `200` |
| `POST` | `/api/v1/accounts/{accountId}/statements` | `closeStatement` | `200` |
| `GET` | `/api/v1/journeys/account-opening/{journeyId}` | `getJourneyStatus` | `200` |
| `GET` | `/api/v1/accounts/{accountId}/statements/{statementId}` | `readStatement` | `200` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`AccountOpeningJourneyStatusDTO`, `AccountSummaryResponse`, `ComplaintRequest`, `ComplaintResponse`, `ConfigureFundingSourceCommand`, `InitiateAccountOpeningCommand`, `OpenAccountRequest`, `OpenAccountResponse`, `StatementView`, `SubmitIncomeProofCommand`, `UpdateAccountRequest`

## Contract explorer

<swagger-ui src="../contracts/exp-accounts/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
