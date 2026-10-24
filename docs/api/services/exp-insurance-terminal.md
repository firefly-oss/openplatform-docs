# exp-insurance-terminal

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/exp-insurance-terminal) · [Complete contract](../contracts/exp-insurance-terminal/openapi.yml)

**Provenance:** base revision `a9fc32a76ab2eae500ce90593c96103e681f1334`; current copied input SHA256 `11e989b26c759e114fa2546d5264f1c080fca214409dbc1da01f9108c84602cf`. [Baseline source](https://github.com/fireflysoftwaresolutions/exp-insurance-terminal/blob/a9fc32a76ab2eae500ce90593c96103e681f1334/exp-insurance-terminal-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/staff/records/{area}/{recordId}` | `openRecord` | `200` |
| `PUT` | `/api/v1/staff/records/{area}/{recordId}` | `updateRecord` | `200` |
| `PUT` | `/api/v1/staff/configuration/{key}` | `putProperty` | `200` |
| `POST` | `/api/v1/staff/sessions` | `signIn` | `200` |
| `POST` | `/api/v1/staff/records/{area}/{recordId}/remove` | `removeDraft` | `200` |
| `POST` | `/api/v1/staff/records/{area}/{recordId}/distributor` | `attachDistributor` | `200` |
| `POST` | `/api/v1/staff/records/{area}/{recordId}/decide` | `decideRecord` | `200` |
| `POST` | `/api/v1/staff/records/{area}/{recordId}/close` | `closeRecord` | `200` |
| `GET` | `/api/v1/staff/records/{area}` | `listRecords` | `200` |
| `GET` | `/api/v1/staff/masters/{type}` | `listMasters` | `200` |
| `GET` | `/api/v1/staff/distributors` | `listDistributors` | `200` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`DistributorView`, `MasterRecord`, `PropertyBody`, `RecordBody`, `SignInRequest`, `StaffRecord`, `StaffSession`

## Contract explorer

<swagger-ui src="../contracts/exp-insurance-terminal/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
