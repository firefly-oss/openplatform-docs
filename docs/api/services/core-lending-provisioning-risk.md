# core-lending-provisioning-risk

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/core-lending-provisioning-risk) · [Complete contract](../contracts/core-lending-provisioning-risk/openapi.yml)

**Provenance:** base revision `c19174c5e809af26237af424ddd32d30dc6a378b`; current copied input SHA256 `74c70ce0589e9b2763a1bb8f12a0902e1c6582b39b0dba3c58eac7afff137f7a`. [Baseline source](https://github.com/fireflysoftwaresolutions/core-lending-provisioning-risk/blob/c19174c5e809af26237af424ddd32d30dc6a378b/core-lending-provisioning-risk-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/provisioning-cases/{provisioningCaseId}` | `getById` | `200` |
| `PUT` | `/api/v1/provisioning-cases/{provisioningCaseId}` | `update` | `200` |
| `DELETE` | `/api/v1/provisioning-cases/{provisioningCaseId}` | `delete` | `200` |
| `GET` | `/api/v1/provisioning-cases/{provisioningCaseId}/stage-history/{provisioningStageHistoryId}` | `getById_1` | `200` |
| `PUT` | `/api/v1/provisioning-cases/{provisioningCaseId}/stage-history/{provisioningStageHistoryId}` | `update_1` | `200` |
| `DELETE` | `/api/v1/provisioning-cases/{provisioningCaseId}/stage-history/{provisioningStageHistoryId}` | `delete_1` | `200` |
| `GET` | `/api/v1/provisioning-cases/{provisioningCaseId}/risk-assessments/{riskAssessmentId}` | `getById_2` | `200` |
| `PUT` | `/api/v1/provisioning-cases/{provisioningCaseId}/risk-assessments/{riskAssessmentId}` | `update_2` | `200` |
| `DELETE` | `/api/v1/provisioning-cases/{provisioningCaseId}/risk-assessments/{riskAssessmentId}` | `delete_2` | `200` |
| `GET` | `/api/v1/provisioning-cases/{provisioningCaseId}/calculations/{provisioningCalculationId}` | `getById_3` | `200` |
| `PUT` | `/api/v1/provisioning-cases/{provisioningCaseId}/calculations/{provisioningCalculationId}` | `update_3` | `200` |
| `DELETE` | `/api/v1/provisioning-cases/{provisioningCaseId}/calculations/{provisioningCalculationId}` | `delete_3` | `200` |
| `GET` | `/api/v1/provisioning-cases/{provisioningCaseId}/calculations/{provisioningCalculationId}/journal/{provisioningJournalId}` | `getById_4` | `200` |
| `PUT` | `/api/v1/provisioning-cases/{provisioningCaseId}/calculations/{provisioningCalculationId}/journal/{provisioningJournalId}` | `update_4` | `200` |
| `DELETE` | `/api/v1/provisioning-cases/{provisioningCaseId}/calculations/{provisioningCalculationId}/journal/{provisioningJournalId}` | `delete_4` | `200` |
| `GET` | `/api/v1/provisioning-cases` | `findAll` | `200` |
| `POST` | `/api/v1/provisioning-cases` | `create` | `200` |
| `GET` | `/api/v1/provisioning-cases/{provisioningCaseId}/stage-history` | `findAll_1` | `200` |
| `POST` | `/api/v1/provisioning-cases/{provisioningCaseId}/stage-history` | `create_1` | `200` |
| `GET` | `/api/v1/provisioning-cases/{provisioningCaseId}/risk-assessments` | `findAll_2` | `200` |
| `POST` | `/api/v1/provisioning-cases/{provisioningCaseId}/risk-assessments` | `create_2` | `200` |
| `GET` | `/api/v1/provisioning-cases/{provisioningCaseId}/calculations` | `findAll_3` | `200` |
| `POST` | `/api/v1/provisioning-cases/{provisioningCaseId}/calculations` | `create_3` | `200` |
| `GET` | `/api/v1/provisioning-cases/{provisioningCaseId}/calculations/{provisioningCalculationId}/journal` | `findAll_4` | `200` |
| `POST` | `/api/v1/provisioning-cases/{provisioningCaseId}/calculations/{provisioningCalculationId}/journal` | `create_4` | `200` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`FilterOptions`, `FilterRequestProvisioningCalculationDTO`, `FilterRequestProvisioningCaseDTO`, `FilterRequestProvisioningJournalDTO`, `FilterRequestProvisioningStageHistoryDTO`, `FilterRequestRiskAssessmentDTO`, `PaginationRequest`, `PaginationResponseProvisioningCalculationDTO`, `PaginationResponseProvisioningCaseDTO`, `PaginationResponseProvisioningJournalDTO`, `PaginationResponseProvisioningStageHistoryDTO`, `PaginationResponseRiskAssessmentDTO`, `ProvisioningCalculationDTO`, `ProvisioningCaseDTO`, `ProvisioningJournalDTO`, `ProvisioningStageHistoryDTO`, `RangeFilter`, `RangeObject`, `RiskAssessmentDTO`

## Contract explorer

<swagger-ui src="../contracts/core-lending-provisioning-risk/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
