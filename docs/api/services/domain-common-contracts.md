# domain-common-contracts

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/domain-common-contracts) · [Complete contract](../contracts/domain-common-contracts/openapi.yml)

**Provenance:** base revision `266d474f21024125feaf1566bb0ba7fd28e6107d`; current copied input SHA256 `e52ca8104445ac3b51bb0f54a84286f5fc1565e13e02641c1d2ee378ed4aa0b2`. [Baseline source](https://github.com/fireflysoftwaresolutions/domain-common-contracts/blob/266d474f21024125feaf1566bb0ba7fd28e6107d/domain-common-contracts-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `POST` | `/api/v1/tenants/{tenantId}/contracts/{contractId}/governed-documents/{actionId}/resume` | `resumeGovernedContractDocument` | `200` |
| `POST` | `/api/v1/tenants/{tenantId}/contracts/{contractId}/governed-documents` | `issueGovernedContractDocument` | `200` |
| `POST` | `/api/v1/kit-documents` | `issue` | `200`, `409` |
| `POST` | `/api/v1/contracts` | `createContract` | `200` |
| `GET` | `/api/v1/contracts/{contractId}/terms` | `listTerms` | `200` |
| `POST` | `/api/v1/contracts/{contractId}/terms` | `addTerms` | `200` |
| `GET` | `/api/v1/contracts/{contractId}/status` | `getStatus` | `200` |
| `POST` | `/api/v1/contracts/{contractId}/status` | `changeStatus` | `200` |
| `POST` | `/api/v1/contracts/{contractId}/signature/request` | `requestSignature` | `200` |
| `POST` | `/api/v1/contracts/{contractId}/signature/confirm` | `confirmSignature` | `200` |
| `GET` | `/api/v1/contracts/{contractId}/parties` | `listParties` | `200` |
| `POST` | `/api/v1/contracts/{contractId}/parties` | `addParty` | `200` |
| `POST` | `/api/v1/contracts/{contractId}/documents/generate` | `generateDocument` | `200`, `409` |
| `GET` | `/api/v1/tenants/{tenantId}/contracts/{contractId}/governed-documents/{actionId}` | `getGovernedContractDocument` | `200` |
| `GET` | `/api/v1/tenants/{tenantId}/contracts/{contractId}/governed-documents/{actionId}/content` | `getGovernedContractDocumentContent` | `200` |
| `GET` | `/api/v1/kit-documents/{id}` | `read` | `200`, `409` |
| `GET` | `/api/v1/contracts/{contractId}` | `getContractDetail` | `200` |
| `DELETE` | `/api/v1/contracts/{contractId}` | `deleteContract` | `200` |
| `GET` | `/api/v1/contracts/{contractId}/status-history` | `getStatusHistory` | `200` |
| `GET` | `/api/v1/contracts/{contractId}/documents` | `listDocuments` | `200` |
| `GET` | `/api/v1/contracts/{contractId}/documents/{docId}` | `getDocument` | `200` |
| `GET` | `/api/v1/contracts/by-party/{partyId}` | `listByParty` | `200` |
| `GET` | `/api/v1/contracts/by-party/{partyId}/active` | `listActiveByParty` | `200` |
| `DELETE` | `/api/v1/contracts/{contractId}/parties/{partyId}` | `removeParty` | `200` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`AddContractPartyCommand`, `AddContractTermsCommand`, `ChangeContractStatusCommand`, `ConfirmContractSignatureCommand`, `ContractDocumentIssuedEvidence`, `ContractDocumentOperation`, `ContractDocumentPins`, `ContractDocumentPrepareRequest`, `ContractDocumentRetention`, `ContractDocumentSelection`, `ContractLineDTO`, `ContractProductVersionReference`, `CreateContractCommand`, `GenerateContractDocumentCommand`, `GovernedContractDocumentIntent`, `GovernedPins`, `GovernedProductVersion`, `GovernedRetention`, `GovernedSelection`, `IssueBody`, `IssuedView`, `RecordedId`, `RequestContractSignatureCommand`

## Contract explorer

<swagger-ui src="../contracts/domain-common-contracts/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
