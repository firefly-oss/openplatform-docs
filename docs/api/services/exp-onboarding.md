# exp-onboarding

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/exp-onboarding) · [Complete contract](../contracts/exp-onboarding/openapi.yml)

**Provenance:** base revision `0c2dae401b3d683c8828c9417f133a58412e162e`; current copied input SHA256 `9b1af00e231e688faecd3bb0bbd196da9095dfee608cd46afd240112810cfdb2`. [Baseline source](https://github.com/fireflysoftwaresolutions/exp-onboarding/blob/0c2dae401b3d683c8828c9417f133a58412e162e/exp-onboarding-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `POST` | `/api/v1/onboarding/individuals/{onboardingId}/personal-data` | `submitPersonalData` | `200` |
| `POST` | `/api/v1/onboarding/individuals/{onboardingId}/kyc` | `triggerKyc` | `200` |
| `POST` | `/api/v1/onboarding/individuals/{onboardingId}/identity-documents` | `submitIdentityDocuments` | `200` |
| `POST` | `/api/v1/onboarding/individuals/{onboardingId}/economic-data` | `submitEconomicData` | `200` |
| `POST` | `/api/v1/onboarding/individuals/{onboardingId}/completion` | `completeOnboarding` | `200` |
| `POST` | `/api/v1/onboarding/individuals` | `initiateOnboarding` | `200` |
| `POST` | `/api/v1/onboarding/businesses/{onboardingId}/ubos` | `submitUbos` | `200`, `400`, `404`, `409` |
| `POST` | `/api/v1/onboarding/businesses/{onboardingId}/kyb` | `triggerKybVerification` | `202`, `404`, `409` |
| `POST` | `/api/v1/onboarding/businesses/{onboardingId}/corporate-documents` | `submitCorporateDocuments` | `200`, `400`, `404`, `409` |
| `POST` | `/api/v1/onboarding/businesses/{onboardingId}/completion` | `completeOnboarding_1` | `200`, `404`, `409` |
| `POST` | `/api/v1/onboarding/businesses/{onboardingId}/company-data` | `submitCompanyData` | `200`, `400`, `404`, `409` |
| `POST` | `/api/v1/onboarding/businesses/{onboardingId}/authorized-signers` | `submitAuthorizedSigners` | `200`, `400`, `404`, `409` |
| `POST` | `/api/v1/onboarding/businesses/search` | `search` | `200`, `400`, `502` |
| `POST` | `/api/v1/onboarding/businesses` | `initiateOnboarding_1` | `201`, `400`, `409` |
| `GET` | `/api/v1/onboarding/businesses/{onboardingId}` | `getOnboardingStatus` | `200`, `404` |
| `PATCH` | `/api/v1/onboarding/businesses/{onboardingId}` | `updatePartialData` | `200`, `400`, `404` |
| `GET` | `/api/v1/onboarding/individuals/{onboardingId}/kyc/status` | `getKycStatus` | `200` |
| `GET` | `/api/v1/onboarding/individuals/{onboardingId}` | `getOnboardingStatus_1` | `200` |
| `GET` | `/api/v1/onboarding/businesses/{onboardingId}/kyb/status` | `getKybStatus` | `200`, `404` |
| `GET` | `/api/v1/onboarding/businesses/search/{bvdId}` | `getCompanyData` | `200`, `400`, `502` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`BusinessOnboardingResponse`, `BusinessSearchRequest`, `CorporateDocumentEntry`, `InitiateBusinessOnboardingCommand`, `InitiateOnboardingCommand`, `JourneyStatusDTO`, `JsonNode`, `KybStatusResponse`, `KycStatusDTO`, `SignerEntry`, `SubmitAuthorizedSignersCommand`, `SubmitCompanyDataCommand`, `SubmitCorporateDocumentsCommand`, `SubmitEconomicDataCommand`, `SubmitIdentityDocumentsCommand`, `SubmitPersonalDataCommand`, `SubmitUbosCommand`, `UboEntry`, `UpdatePartialDataCommand`

## Contract explorer

<swagger-ui src="../contracts/exp-onboarding/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
