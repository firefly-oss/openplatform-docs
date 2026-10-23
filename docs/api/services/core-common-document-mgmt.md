# core-common-document-mgmt

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/core-common-document-mgmt) · [Complete contract](../contracts/core-common-document-mgmt/openapi.yml)

**Provenance:** base revision `7a1bc83de0d938de2add6608c9bc0976f892cd94`; current copied input SHA256 `e0b6375023bd9c9f727af28bbad12113c6ddc291dee7e83ae67fa62ab125e46c`. [Baseline source](https://github.com/fireflysoftwaresolutions/core-common-document-mgmt/blob/7a1bc83de0d938de2add6608c9bc0976f892cd94/core-common-document-mgmt-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/tags/{id}` | `getTagById` | `200`, `404` |
| `PUT` | `/api/v1/tags/{id}` | `updateTag` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/tags/{id}` | `deleteTag` | `204`, `404` |
| `GET` | `/api/v1/signature-verifications/{id}` | `getSignatureVerificationById` | `200`, `404` |
| `PUT` | `/api/v1/signature-verifications/{id}` | `updateSignatureVerification` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/signature-verifications/{id}` | `deleteSignatureVerification` | `204`, `404` |
| `GET` | `/api/v1/signature-requests/{id}` | `getSignatureRequestById` | `200`, `404` |
| `PUT` | `/api/v1/signature-requests/{id}` | `updateSignatureRequest` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/signature-requests/{id}` | `deleteSignatureRequest` | `204`, `404` |
| `GET` | `/api/v1/signature-providers/{id}` | `getSignatureProviderById` | `200`, `404` |
| `PUT` | `/api/v1/signature-providers/{id}` | `updateSignatureProvider` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/signature-providers/{id}` | `deleteSignatureProvider` | `204`, `404` |
| `GET` | `/api/v1/folders/{id}` | `getFolderById` | `200`, `404` |
| `PUT` | `/api/v1/folders/{id}` | `updateFolder` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/folders/{id}` | `deleteFolder` | `204`, `404` |
| `GET` | `/api/v1/documents/{id}` | `getDocumentById` | `200`, `404` |
| `PUT` | `/api/v1/documents/{id}` | `updateDocument` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/documents/{id}` | `deleteDocument` | `204`, `404` |
| `GET` | `/api/v1/documents/{documentId}/signatures/{id}` | `getDocumentSignature` | `200`, `404` |
| `PUT` | `/api/v1/documents/{documentId}/signatures/{id}` | `updateDocumentSignature` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/documents/{documentId}/signatures/{id}` | `deleteDocumentSignature` | `204`, `404` |
| `GET` | `/api/v1/documents/{documentId}/permissions/{id}` | `getDocumentPermission` | `200`, `404` |
| `PUT` | `/api/v1/documents/{documentId}/permissions/{id}` | `updateDocumentPermission` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/documents/{documentId}/permissions/{id}` | `deleteDocumentPermission` | `204`, `404` |
| `GET` | `/api/v1/documents/{documentId}/metadata/{key}` | `getMetadataByKey` | `200`, `404` |
| `PUT` | `/api/v1/documents/{documentId}/metadata/{key}` | `updateMetadata` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/documents/{documentId}/metadata/{key}` | `deleteMetadata` | `204`, `404` |
| `GET` | `/api/v1/tags` | `listTags` | `200` |
| `POST` | `/api/v1/tags` | `createTag` | `201`, `400` |
| `GET` | `/api/v1/signature-verifications` | `listSignatureVerifications` | `200` |
| `POST` | `/api/v1/signature-verifications` | `createSignatureVerification` | `201`, `400` |
| `POST` | `/api/v1/signature-verifications/verify` | `verifyDocumentSignature` | `200`, `400`, `404` |
| `POST` | `/api/v1/signature-submissions` | `submitContractSignature` | `200` |
| `POST` | `/api/v1/signature-submissions/{id}/sandbox-outcome` | `setSandboxSignatureOutcome` | `200` |
| `GET` | `/api/v1/signature-requests` | `listSignatureRequests` | `200` |
| `POST` | `/api/v1/signature-requests` | `createSignatureRequest` | `201`, `400` |
| `POST` | `/api/v1/signature-requests/{id}/send` | `sendSignatureRequest` | `200`, `404` |
| `POST` | `/api/v1/signature-requests/{id}/remind` | `sendSignatureRequestReminder` | `200`, `404` |
| `GET` | `/api/v1/signature-providers` | `listSignatureProviders` | `200` |
| `POST` | `/api/v1/signature-providers` | `createSignatureProvider` | `201`, `400` |
| `POST` | `/api/v1/signature-providers/{id}/default` | `setAsDefaultProvider` | `200`, `404` |
| `GET` | `/api/v1/folders` | `listFolders` | `200` |
| `POST` | `/api/v1/folders` | `createFolder` | `201`, `400` |
| `GET` | `/api/v1/documents` | `listDocuments` | `200` |
| `POST` | `/api/v1/documents` | `createDocument` | `201`, `400` |
| `POST` | `/api/v1/documents/{id}/versions` | `createVersion` | `200`, `404`, `400` |
| `POST` | `/api/v1/documents/{id}/upload` | `uploadContent` | `200`, `404`, `400` |
| `GET` | `/api/v1/documents/{documentId}/versions` | `listDocumentVersions` | `200`, `404` |
| `POST` | `/api/v1/documents/{documentId}/versions` | `createDocumentVersion` | `201`, `400`, `404` |
| `POST` | `/api/v1/documents/{documentId}/versions/{versionId}/upload` | `uploadVersionContent` | `200`, `404`, `400` |
| `GET` | `/api/v1/documents/{documentId}/tags` | `listDocumentTags` | `200`, `404` |
| `POST` | `/api/v1/documents/{documentId}/tags` | `addTagToDocument` | `201`, `400`, `404` |
| `GET` | `/api/v1/documents/{documentId}/signatures` | `listDocumentSignatures` | `200`, `404` |
| `POST` | `/api/v1/documents/{documentId}/signatures` | `addDocumentSignature` | `201`, `400`, `404` |
| `GET` | `/api/v1/documents/{documentId}/permissions` | `listDocumentPermissions` | `200`, `404` |
| `POST` | `/api/v1/documents/{documentId}/permissions` | `addDocumentPermission` | `201`, `400`, `404` |
| `POST` | `/api/v1/documents/{documentId}/metadata` | `addMetadata` | `201`, `400`, `404` |
| `POST` | `/api/v1/documents/search/filter` | `filter` | `200` |
| `POST` | `/api/v1/document-issuances/tenants/{tenantId}/resources/{resourceType}/{resourceId}` | `issueGovernedDocument` | `200` |
| `GET` | `/api/v1/tags/{id}/documents` | `listDocumentsWithTag` | `200`, `404` |
| `GET` | `/api/v1/signature-submissions/{id}` | `verifyContractSignature` | `200` |
| `GET` | `/api/v1/folders/{id}/documents` | `listDocumentsInFolder` | `200`, `404` |
| `GET` | `/api/v1/documents/{id}/metadata` | `getContentMetadata` | `200`, `404` |
| `GET` | `/api/v1/documents/{id}/download` | `downloadContent` | `200`, `404` |
| `GET` | `/api/v1/documents/{documentId}/versions/{versionId}` | `getDocumentVersion` | `200`, `404` |
| `DELETE` | `/api/v1/documents/{documentId}/versions/{versionId}` | `deleteDocumentVersion` | `204`, `404` |
| `GET` | `/api/v1/documents/{documentId}/versions/{versionId}/metadata` | `getVersionContentMetadata` | `200`, `404` |
| `GET` | `/api/v1/documents/{documentId}/versions/{versionId}/download` | `downloadVersionContent` | `200`, `404` |
| `GET` | `/api/v1/documents/{documentId}/permissions/check` | `hasPermission` | `200` |
| `GET` | `/api/v1/documents/{documentId}/metadata/entries/list` | `getAllMetadata` | `200`, `404` |
| `GET` | `/api/v1/document-issuances/tenants/{tenantId}/resources/{resourceType}/{resourceId}/{issuanceId}/content` | `getGovernedDocumentContent` | `200` |
| `GET` | `/api/v1/document-issuances/tenants/{tenantId}/resources/{resourceType}/{resourceId}/{issuanceId}` | `getGovernedDocumentIssuance` | `200` |
| `DELETE` | `/api/v1/documents/{documentId}/tags/{tagId}` | `removeTagFromDocument` | `204`, `404` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`DataBuffer`, `DocumentDTO`, `DocumentFactSource`, `DocumentFactsContract`, `DocumentIssuanceReceipt`, `DocumentIssueBrand`, `DocumentIssueDefinition`, `DocumentIssueExpected`, `DocumentIssueProvenance`, `DocumentIssueRequest`, `DocumentIssueRetention`, `DocumentIssueSelection`, `DocumentIssuedContent`, `DocumentMetadataDTO`, `DocumentPermissionDTO`, `DocumentSignatureDTO`, `DocumentTagDTO`, `DocumentVersionDTO`, `FilterOptions`, `FilterRequestDocumentDTO`, `FolderDTO`, `PaginationRequest`, `PaginationResponse`, `PaginationResponseDocumentDTO`, `PaginationResponseDocumentMetadataDTO`, `PaginationResponseDocumentPermissionDTO`, `PaginationResponseDocumentSignatureDTO`, `PaginationResponseDocumentTagDTO`, `PaginationResponseDocumentVersionDTO`, `RangeFilter`, `RangeObject`, `SignatureProviderDTO`, `SignatureRequestDTO`, `SignatureSubmissionRequestDTO`, `SignatureVerificationDTO`, `TagDTO`

## Contract explorer

<swagger-ui src="../contracts/core-common-document-mgmt/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
