# core-insurance-policies

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/core-insurance-policies) · [Complete contract](../contracts/core-insurance-policies/openapi.yml)

**Provenance:** base revision `05efb49bb21b0b66cddd51307bb56090e72d7c0c`; current copied input SHA256 `00ba15ad95b25ea252c0cb83869395ec580d05ebd083042475e7d3b43c7e722c`. [Baseline source](https://github.com/fireflysoftwaresolutions/core-insurance-policies/blob/05efb49bb21b0b66cddd51307bb56090e72d7c0c/core-insurance-policies-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/policies/{policyId}` | `getPolicyById` | `200`, `404` |
| `PUT` | `/api/v1/policies/{policyId}` | `updatePolicy` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/policies/{policyId}` | `deletePolicy` | `204`, `404` |
| `GET` | `/api/v1/policies/{policyId}/transactions/{policyTransactionId}` | `getPolicyTransactionById` | `200`, `404` |
| `PUT` | `/api/v1/policies/{policyId}/transactions/{policyTransactionId}` | `updatePolicyTransaction` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/policies/{policyId}/transactions/{policyTransactionId}` | `deletePolicyTransaction` | `204`, `404` |
| `GET` | `/api/v1/policies/{policyId}/status-history/{policyStatusHistoryId}` | `getPolicyStatusHistoryById` | `200`, `404` |
| `PUT` | `/api/v1/policies/{policyId}/status-history/{policyStatusHistoryId}` | `updatePolicyStatusHistory` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/policies/{policyId}/status-history/{policyStatusHistoryId}` | `deletePolicyStatusHistory` | `204`, `404` |
| `GET` | `/api/v1/policies/{policyId}/property-details/{propertyDetailId}` | `getPropertyDetailById` | `200`, `404` |
| `PUT` | `/api/v1/policies/{policyId}/property-details/{propertyDetailId}` | `updatePropertyDetail` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/policies/{policyId}/property-details/{propertyDetailId}` | `deletePropertyDetail` | `204`, `404` |
| `GET` | `/api/v1/policies/{policyId}/parties/{policyPartyId}` | `getPolicyPartyById` | `200`, `404` |
| `PUT` | `/api/v1/policies/{policyId}/parties/{policyPartyId}` | `updatePolicyParty` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/policies/{policyId}/parties/{policyPartyId}` | `deletePolicyParty` | `204`, `404` |
| `GET` | `/api/v1/policies/{policyId}/motor-details/{motorDetailId}` | `getMotorDetailById` | `200`, `404` |
| `PUT` | `/api/v1/policies/{policyId}/motor-details/{motorDetailId}` | `updateMotorDetail` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/policies/{policyId}/motor-details/{motorDetailId}` | `deleteMotorDetail` | `204`, `404` |
| `GET` | `/api/v1/policies/{policyId}/life-details/{lifeDetailId}` | `getLifeDetailById` | `200`, `404` |
| `PUT` | `/api/v1/policies/{policyId}/life-details/{lifeDetailId}` | `updateLifeDetail` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/policies/{policyId}/life-details/{lifeDetailId}` | `deleteLifeDetail` | `204`, `404` |
| `GET` | `/api/v1/policies/{policyId}/liability-details/{liabilityDetailId}` | `getLiabilityDetailById` | `200`, `404` |
| `PUT` | `/api/v1/policies/{policyId}/liability-details/{liabilityDetailId}` | `updateLiabilityDetail` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/policies/{policyId}/liability-details/{liabilityDetailId}` | `deleteLiabilityDetail` | `204`, `404` |
| `GET` | `/api/v1/policies/{policyId}/insured-objects/{insuredObjectId}` | `getInsuredObjectById` | `200`, `404` |
| `PUT` | `/api/v1/policies/{policyId}/insured-objects/{insuredObjectId}` | `updateInsuredObject` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/policies/{policyId}/insured-objects/{insuredObjectId}` | `deleteInsuredObject` | `204`, `404` |
| `GET` | `/api/v1/policies/{policyId}/health-details/{healthDetailId}` | `getHealthDetailById` | `200`, `404` |
| `PUT` | `/api/v1/policies/{policyId}/health-details/{healthDetailId}` | `updateHealthDetail` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/policies/{policyId}/health-details/{healthDetailId}` | `deleteHealthDetail` | `204`, `404` |
| `GET` | `/api/v1/policies/{policyId}/coverages/{coverageId}` | `getCoverageById` | `200`, `404` |
| `PUT` | `/api/v1/policies/{policyId}/coverages/{coverageId}` | `updateCoverage` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/policies/{policyId}/coverages/{coverageId}` | `deleteCoverage` | `204`, `404` |
| `GET` | `/api/v1/policies/{policyId}/certificates/{certificateOfInsuranceId}` | `getCertificateOfInsuranceById` | `200`, `404` |
| `PUT` | `/api/v1/policies/{policyId}/certificates/{certificateOfInsuranceId}` | `updateCertificateOfInsurance` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/policies/{policyId}/certificates/{certificateOfInsuranceId}` | `deleteCertificateOfInsurance` | `204`, `404` |
| `POST` | `/api/v1/policies` | `createPolicy` | `201`, `400` |
| `POST` | `/api/v1/policies/{policyId}/transactions` | `createPolicyTransaction` | `201`, `400` |
| `POST` | `/api/v1/policies/{policyId}/transactions/filter` | `filterPolicyTransactions` | `200`, `400` |
| `POST` | `/api/v1/policies/{policyId}/status-history` | `createPolicyStatusHistory` | `201`, `400` |
| `POST` | `/api/v1/policies/{policyId}/status-history/filter` | `filterPolicyStatusHistories` | `200`, `400` |
| `POST` | `/api/v1/policies/{policyId}/property-details` | `createPropertyDetail` | `201`, `400` |
| `POST` | `/api/v1/policies/{policyId}/property-details/filter` | `filterPropertyDetails` | `200`, `400` |
| `POST` | `/api/v1/policies/{policyId}/parties` | `createPolicyParty` | `201`, `400` |
| `POST` | `/api/v1/policies/{policyId}/parties/filter` | `filterPolicyParties` | `200`, `400` |
| `POST` | `/api/v1/policies/{policyId}/motor-details` | `createMotorDetail` | `201`, `400` |
| `POST` | `/api/v1/policies/{policyId}/motor-details/filter` | `filterMotorDetails` | `200`, `400` |
| `POST` | `/api/v1/policies/{policyId}/life-details` | `createLifeDetail` | `201`, `400` |
| `POST` | `/api/v1/policies/{policyId}/life-details/filter` | `filterLifeDetails` | `200`, `400` |
| `POST` | `/api/v1/policies/{policyId}/liability-details` | `createLiabilityDetail` | `201`, `400` |
| `POST` | `/api/v1/policies/{policyId}/liability-details/filter` | `filterLiabilityDetails` | `200`, `400` |
| `POST` | `/api/v1/policies/{policyId}/insured-objects` | `createInsuredObject` | `201`, `400` |
| `POST` | `/api/v1/policies/{policyId}/insured-objects/filter` | `filterInsuredObjects` | `200`, `400` |
| `POST` | `/api/v1/policies/{policyId}/health-details` | `createHealthDetail` | `201`, `400` |
| `POST` | `/api/v1/policies/{policyId}/health-details/filter` | `filterHealthDetails` | `200`, `400` |
| `POST` | `/api/v1/policies/{policyId}/coverages` | `createCoverage` | `201`, `400` |
| `POST` | `/api/v1/policies/{policyId}/coverages/filter` | `filterCoverages` | `200`, `400` |
| `POST` | `/api/v1/policies/{policyId}/certificates` | `createCertificateOfInsurance` | `201`, `400` |
| `POST` | `/api/v1/policies/{policyId}/certificates/filter` | `filterCertificatesOfInsurance` | `200`, `400` |
| `POST` | `/api/v1/policies/filter` | `filterPolicies` | `200`, `400` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`CertificateOfInsuranceDTO`, `CoverageDTO`, `FilterOptions`, `FilterRequestCertificateOfInsuranceDTO`, `FilterRequestCoverageDTO`, `FilterRequestHealthDetailDTO`, `FilterRequestInsuredObjectDTO`, `FilterRequestLiabilityDetailDTO`, `FilterRequestLifeDetailDTO`, `FilterRequestMotorDetailDTO`, `FilterRequestPolicyDTO`, `FilterRequestPolicyPartyDTO`, `FilterRequestPolicyStatusHistoryDTO`, `FilterRequestPolicyTransactionDTO`, `FilterRequestPropertyDetailDTO`, `HealthDetailDTO`, `InsuredObjectDTO`, `LiabilityDetailDTO`, `LifeDetailDTO`, `MotorDetailDTO`, `PaginationRequest`, `PaginationResponseCertificateOfInsuranceDTO`, `PaginationResponseCoverageDTO`, `PaginationResponseHealthDetailDTO`, `PaginationResponseInsuredObjectDTO`, `PaginationResponseLiabilityDetailDTO`, `PaginationResponseLifeDetailDTO`, `PaginationResponseMotorDetailDTO`, `PaginationResponsePolicyDTO`, `PaginationResponsePolicyPartyDTO`, `PaginationResponsePolicyStatusHistoryDTO`, `PaginationResponsePolicyTransactionDTO`, `PaginationResponsePropertyDetailDTO`, `PolicyDTO`, `PolicyPartyDTO`, `PolicyStatusHistoryDTO`, `PolicyTransactionDTO`, `PropertyDetailDTO`, `RangeFilter`, `RangeObject`

## Contract explorer

<swagger-ui src="../contracts/core-insurance-policies/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
