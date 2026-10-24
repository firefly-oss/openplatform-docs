# domain-common-case-mgmt

[Complete contract](../contracts/domain-common-case-mgmt/openapi.yml)

**Provenance:** local addition; its source repository and SDK release are not published. Current copied input SHA256 `2f08c964162d212cfd843c5d9d33af16d0e45fb256c235f73774aabf94cacb1a`. Producer input: `domain-common-case-mgmt/domain-common-case-mgmt-sdk/src/main/resources/openapi.yml`. Build the matching local producer and SDK before using this contract.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/cases` | `caseQueue` | `200` |
| `POST` | `/api/v1/cases` | `openCase` | `201`, `409`, `401`, `403` |
| `POST` | `/api/v1/cases/{caseId}/actions` | `mutateCase` | `200`, `409`, `401`, `403`, `428` |
| `GET` | `/api/v1/cases/{caseId}` | `getCase` | `200` |
| `GET` | `/api/v1/cases/{caseId}/history` | `caseHistory` | `200` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`CaseErrorResponse`, `CaseEvent`, `CaseView`, `EvidenceReference`, `Mutation`, `OpenCaseRequest`, `ProductReference`, `Resolution`, `VerifiedEvidence`

## Contract explorer

<swagger-ui src="../contracts/domain-common-case-mgmt/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
