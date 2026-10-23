# domain-distributor-branding

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/domain-distributor-branding) · [Complete contract](../contracts/domain-distributor-branding/openapi.yml)

**Provenance:** base revision `df367549efc2cc15dae0822d8f530bd96244363b`; current copied input SHA256 `cb3b83ab06e613e49e40a6b68fb41fdfdfddaac92624483a202f201deaff3419`. [Baseline source](https://github.com/fireflysoftwaresolutions/domain-distributor-branding/blob/df367549efc2cc15dae0822d8f530bd96244363b/domain-distributor-branding-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/distributors/{distributorId}/territories/{territoryId}` | `getTerritory` | `200` |
| `PUT` | `/api/v1/distributors/{distributorId}/territories/{territoryId}` | `updateTerritory` | `200` |
| `DELETE` | `/api/v1/distributors/{distributorId}/territories/{territoryId}` | `deleteTerritory` | `204` |
| `GET` | `/api/v1/distributors/{distributorId}/terms-and-conditions/{tcId}` | `getTermsAndConditionsDetail` | `200` |
| `PUT` | `/api/v1/distributors/{distributorId}/terms-and-conditions/{tcId}` | `reviseTermsAndConditions` | `200` |
| `DELETE` | `/api/v1/distributors/{distributorId}/terms-and-conditions/{tcId}` | `deleteTermsAndConditions` | `204` |
| `GET` | `/api/v1/distributors/{distributorId}/profile` | `getDistributorProfile` | `200`, `404` |
| `PUT` | `/api/v1/distributors/{distributorId}/profile` | `updateDistributor` | `200` |
| `DELETE` | `/api/v1/distributors/{distributorId}/profile` | `deleteDistributor` | `204` |
| `GET` | `/api/v1/distributors/{distributorId}/operations/{operationId}` | `getOperation` | `200` |
| `PUT` | `/api/v1/distributors/{distributorId}/operations/{operationId}` | `updateOperation` | `200` |
| `DELETE` | `/api/v1/distributors/{distributorId}/operations/{operationId}` | `deleteOperation` | `204` |
| `GET` | `/api/v1/distributors/{distributorId}/configurations/{configurationId}` | `getConfiguration` | `200` |
| `PUT` | `/api/v1/distributors/{distributorId}/configurations/{configurationId}` | `updateConfiguration` | `200` |
| `DELETE` | `/api/v1/distributors/{distributorId}/configurations/{configurationId}` | `deleteConfiguration` | `204` |
| `GET` | `/api/v1/distributors/{distributorId}/branding/{brandingId}` | `getDistributorBranding` | `200`, `404` |
| `PUT` | `/api/v1/distributors/{distributorId}/branding/{brandingId}` | `reviseBranding` | `200` |
| `DELETE` | `/api/v1/distributors/{distributorId}/branding/{brandingId}` | `deleteDistributorBranding` | `204` |
| `PUT` | `/api/v1/distributors/{distributorId}/branding/{brandingId}/set-default` | `setDefaultBranding` | `200` |
| `GET` | `/api/v1/distributors/{distributorId}/agents/{agentId}` | `getAgent` | `200` |
| `PUT` | `/api/v1/distributors/{distributorId}/agents/{agentId}` | `updateAgent` | `200` |
| `DELETE` | `/api/v1/distributors/{distributorId}/agents/{agentId}` | `deleteAgent` | `204` |
| `GET` | `/api/v1/distributors/{distributorId}/agencies/{agencyId}` | `getAgency` | `200` |
| `PUT` | `/api/v1/distributors/{distributorId}/agencies/{agencyId}` | `updateAgency` | `200` |
| `DELETE` | `/api/v1/distributors/{distributorId}/agencies/{agencyId}` | `deleteAgency` | `204` |
| `POST` | `/api/v1/distributors` | `onboardDistributor` | `200` |
| `GET` | `/api/v1/distributors/{distributorId}/territories` | `listTerritories` | `200` |
| `POST` | `/api/v1/distributors/{distributorId}/territories` | `createTerritory` | `200` |
| `GET` | `/api/v1/distributors/{distributorId}/terms-and-conditions` | `listTermsAndConditions` | `200` |
| `POST` | `/api/v1/distributors/{distributorId}/terms-and-conditions` | `createTermsAndConditions` | `200` |
| `GET` | `/api/v1/distributors/{distributorId}/operations` | `listOperations` | `200` |
| `POST` | `/api/v1/distributors/{distributorId}/operations` | `createOperation` | `200` |
| `GET` | `/api/v1/distributors/{distributorId}/configurations` | `listConfigurations` | `200` |
| `POST` | `/api/v1/distributors/{distributorId}/configurations` | `createConfiguration` | `200` |
| `POST` | `/api/v1/distributors/{distributorId}/branding` | `createDistributorBranding` | `200` |
| `POST` | `/api/v1/distributors/{distributorId}/branding/filter` | `filterDistributorBrandings` | `200` |
| `POST` | `/api/v1/distributors/{distributorId}/audit-logs` | `recordAuditLog` | `200` |
| `GET` | `/api/v1/distributors/{distributorId}/agents` | `listAgents` | `200` |
| `POST` | `/api/v1/distributors/{distributorId}/agents` | `createAgent` | `200` |
| `GET` | `/api/v1/distributors/{distributorId}/agent-agencies` | `listAgentAgencies` | `200` |
| `POST` | `/api/v1/distributors/{distributorId}/agent-agencies` | `assignAgentAgency` | `200` |
| `GET` | `/api/v1/distributors/{distributorId}/agencies` | `listAgencies` | `200` |
| `POST` | `/api/v1/distributors/{distributorId}/agencies` | `createAgency` | `200` |
| `POST` | `/api/v1/distributors/filter` | `filterDistributors` | `200` |
| `PATCH` | `/api/v1/distributors/{distributorId}/terms-and-conditions/{tcId}/sign` | `signTermsAndConditions` | `200` |
| `PATCH` | `/api/v1/distributors/{distributorId}/terms-and-conditions/{tcId}/deactivate` | `deactivateTermsAndConditions` | `200` |
| `PATCH` | `/api/v1/distributors/{distributorId}/terms-and-conditions/{tcId}/activate` | `activateTermsAndConditions` | `200` |
| `PATCH` | `/api/v1/distributors/{distributorId}/operations/{operationId}/deactivate` | `deactivateOperation` | `200` |
| `PATCH` | `/api/v1/distributors/{distributorId}/operations/{operationId}/activate` | `activateOperation` | `200` |
| `GET` | `/api/v1/distributors/{distributorId}/terms-and-conditions/latest` | `getLatestTermsAndConditions` | `200` |
| `GET` | `/api/v1/distributors/{distributorId}/terms-and-conditions/has-active-signed` | `hasActiveSignedTerms` | `200` |
| `GET` | `/api/v1/distributors/{distributorId}/terms-and-conditions/active` | `getActiveTermsAndConditions` | `200` |
| `GET` | `/api/v1/distributors/{distributorId}/operations/can-operate` | `canOperate` | `200` |
| `DELETE` | `/api/v1/distributors/{distributorId}/agent-agencies/{agentAgencyId}` | `removeAgentAgency` | `204` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`AssignAgentAgencyCommand`, `CreateAgencyCommand`, `CreateAgentCommand`, `CreateConfigurationCommand`, `CreateOperationCommand`, `CreateTermsAndConditionsCommand`, `CreateTerritoryCommand`, `DistributorAgencyDTO`, `DistributorAgentDTO`, `DistributorAuthorizedTerritoryDTO`, `DistributorBrandingDTO`, `DistributorConfigurationDTO`, `DistributorDTO`, `DistributorOperationDTO`, `DistributorTermsAndConditionsDTO`, `FilterOptions`, `FilterRequestDistributorBrandingDTO`, `PaginationRequest`, `PaginationResponse`, `RangeFilter`, `RangeObject`, `RegisterDistributorAuditLogCommand`, `RegisterDistributorBrandingCommand`, `RegisterDistributorCommand`, `RegisterDistributorInfoCommand`, `RegisterTandCTemplateCommand`, `RegisterTermsAndConditionsCommand`, `ReviseBrandingCommand`, `ReviseTermsAndConditionsCommand`, `SetDefaultBrandingCommand`, `TermsAndConditionsTemplateDTO`, `UpdateAgencyCommand`, `UpdateAgentCommand`, `UpdateConfigurationCommand`, `UpdateOperationCommand`, `UpdateTerritoryCommand`

## Contract explorer

<swagger-ui src="../contracts/domain-distributor-branding/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
