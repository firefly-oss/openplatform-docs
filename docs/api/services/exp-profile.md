# exp-profile

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/exp-profile) · [Complete contract](../contracts/exp-profile/openapi.yml)

**Provenance:** base revision `ab6ff382c129b9a7793a5c429f24f4a887d0aef5`; current copied input SHA256 `0d6526fcf13c742f0442cdab4898f9683203997073d80e96b3d656ce295e5ba0`. [Baseline source](https://github.com/fireflysoftwaresolutions/exp-profile/blob/ab6ff382c129b9a7793a5c429f24f4a887d0aef5/exp-profile-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `PUT` | `/api/v1/experience/profile/consents/{id}` | `updateConsent` | `200` |
| `PUT` | `/api/v1/experience/profile/addresses/{id}` | `updateAddress` | `200` |
| `DELETE` | `/api/v1/experience/profile/addresses/{id}` | `deleteAddress` | `200` |
| `GET` | `/api/v1/experience/profile/identity-documents` | `getIdentityDocuments` | `200` |
| `POST` | `/api/v1/experience/profile/identity-documents` | `addIdentityDocument` | `201` |
| `GET` | `/api/v1/experience/profile/documents` | `getDocuments` | `200` |
| `POST` | `/api/v1/experience/profile/documents` | `uploadDocument` | `201` |
| `GET` | `/api/v1/experience/profile/addresses` | `getAddresses` | `200` |
| `POST` | `/api/v1/experience/profile/addresses` | `addAddress` | `201` |
| `PATCH` | `/api/v1/experience/profile/personal-data` | `updatePersonalData` | `200` |
| `PATCH` | `/api/v1/experience/profile/contact-data` | `updateContactData` | `200` |
| `GET` | `/api/v1/experience/profile/documents/{id}` | `downloadDocument` | `200` |
| `GET` | `/api/v1/experience/profile/contracts` | `getContracts` | `200` |
| `GET` | `/api/v1/experience/profile/consents` | `getConsents` | `200` |
| `GET` | `/api/v1/experience/profile` | `getProfile` | `200` |
| `DELETE` | `/api/v1/experience/profile/identity-documents/{id}` | `deleteIdentityDocument` | `200` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`AddAddressCommand`, `AddIdentityDocumentCommand`, `AddressDTO`, `ConsentDTO`, `ContractSummaryDTO`, `DocumentDTO`, `IdentityDocumentDTO`, `ProfileDTO`, `UpdateAddressCommand`, `UpdateConsentCommand`, `UpdateContactDataCommand`, `UpdatePersonalDataCommand`, `UploadDocumentCommand`

## Contract explorer

<swagger-ui src="../contracts/exp-profile/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
