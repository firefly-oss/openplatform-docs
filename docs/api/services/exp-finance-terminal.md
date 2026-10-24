# exp-finance-terminal

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/exp-finance-terminal) · [Complete contract](../contracts/exp-finance-terminal/openapi.yml)

**Provenance:** base revision `7309a4fa15e3b1e02334864dbb12575e386293e9`; current copied input SHA256 `6ea59b9712c7e91437561b2ec1d70bfa6d7be6165b52e1c67e18adc25f1f77be`. [Baseline source](https://github.com/fireflysoftwaresolutions/exp-finance-terminal/blob/7309a4fa15e3b1e02334864dbb12575e386293e9/exp-finance-terminal-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/staff/records/{area}/{recordId}` | `openRecord` | `200` |
| `PUT` | `/api/v1/staff/records/{area}/{recordId}` | `updateRecord` | `200` |
| `GET` | `/api/v1/staff/configuration/{key}` | `getProperty` | `200` |
| `PUT` | `/api/v1/staff/configuration/{key}` | `putProperty` | `200` |
| `POST` | `/api/v1/staff/sessions` | `signIn` | `200` |
| `POST` | `/api/v1/staff/records/{area}/{recordId}/remove` | `removeDraft` | `200` |
| `POST` | `/api/v1/staff/records/{area}/{recordId}/distributor` | `attachDistributor` | `200` |
| `POST` | `/api/v1/staff/records/{area}/{recordId}/decide` | `decideRecord` | `200` |
| `POST` | `/api/v1/staff/records/{area}/{recordId}/close` | `closeRecord` | `200` |
| `GET` | `/api/v1/staff/standing-orders/{runId}` | `readStandingOrder` | `200` |
| `GET` | `/api/v1/staff/records/{area}` | `listRecords` | `200` |
| `GET` | `/api/v1/staff/masters/{type}` | `listMasters` | `200` |
| `GET` | `/api/v1/staff/distributors` | `listDistributors` | `200` |
| `GET` | `/api/v1/staff/direct-debits/{mandateId}` | `readDirectDebit` | `200` |
| `GET` | `/api/v1/staff/accounts/{accountId}/servicing-mandates/{mandateId}` | `readMandate` | `200` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`DirectDebit`, `DistributorView`, `Mandate`, `MasterRecord`, `PropertyBody`, `RecordBody`, `SignInRequest`, `StaffRecord`, `StaffSession`, `StandingOrder`

## Contract explorer

<swagger-ui src="../contracts/exp-finance-terminal/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
