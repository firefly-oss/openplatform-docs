# domain-customer-kyc-kyb

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/domain-customer-kyc-kyb) · [Complete contract](../contracts/domain-customer-kyc-kyb/openapi.yml)

**Provenance:** base revision `1ebfe41745e73438c586fefced50fee6874c6387`; current copied input SHA256 `a07ec921b1148abeab705e2d7f8f3734e24e7e8aa12f38d1216fd0a5f431784e`. [Baseline source](https://github.com/fireflysoftwaresolutions/domain-customer-kyc-kyb/blob/1ebfe41745e73438c586fefced50fee6874c6387/domain-customer-kyc-kyb-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `POST` | `/api/v1/kyc/cases` | `openCase` | `200` |
| `POST` | `/api/v1/kyc/cases/{caseId}/verify` | `verify` | `200` |
| `POST` | `/api/v1/kyc/cases/{caseId}/renew` | `renew` | `200` |
| `POST` | `/api/v1/kyc/cases/{caseId}/pep-adverse-media` | `recordPepAdverseMedia` | `200` |
| `POST` | `/api/v1/kyc/cases/{caseId}/fail` | `fail` | `200` |
| `POST` | `/api/v1/kyc/cases/{caseId}/expire` | `expire` | `200` |
| `POST` | `/api/v1/kyc/cases/{caseId}/evidence` | `attachEvidence` | `200` |
| `POST` | `/api/v1/kyc/cases/{caseId}/docs-complete` | `markDocsComplete` | `200` |
| `POST` | `/api/v1/kyb/cases/{caseId}/verify` | `requestVerification` | `200`, `400`, `404` |
| `POST` | `/api/v1/kyb/cases/{caseId}/ubos` | `registerUbos` | `200`, `400`, `404` |
| `POST` | `/api/v1/kyb/cases/{caseId}/corporate-documents` | `submitCorporateDocuments` | `200`, `400`, `404` |
| `POST` | `/api/v1/kyb/cases/{caseId}/authorized-signers` | `submitAuthorizedSigners` | `200`, `400`, `404` |
| `POST` | `/api/v1/kyb/cases` | `createCase` | `201`, `400` |
| `GET` | `/api/v1/kyb/cases/{caseId}/result` | `getResult` | `200`, `404` |
| `GET` | `/api/v1/kyb/cases/{caseId}` | `getCase` | `200`, `404` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`AttachEvidenceCommand`, `CreateKybCaseRequest`, `DocumentData`, `KybCaseResponse`, `KybResultResponse`, `RegisterUbosRequest`, `SignerData`, `SubmissionResult`, `SubmitAuthorizedSignersRequest`, `SubmitCorporateDocumentsRequest`, `UboData`

## Contract explorer

<swagger-ui src="../contracts/domain-customer-kyc-kyb/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
