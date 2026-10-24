# core-common-config-mgmt

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/core-common-config-mgmt) · [Complete contract](../contracts/core-common-config-mgmt/openapi.yml)

**Provenance:** base revision `a14ea8cced7261c090285a5b8cdadadb55192bb7`; current copied input SHA256 `93e82ba2b0cb4c0e4e6d325536afdf4c3c4cefbb23037c36a0256e6214e9e606`. [Baseline source](https://github.com/fireflysoftwaresolutions/core-common-config-mgmt/blob/a14ea8cced7261c090285a5b8cdadadb55192bb7/core-common-config-mgmt-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/webhook-configs/{id}` | `getWebhookConfigById` | `200`, `404`, `403` |
| `PUT` | `/api/v1/webhook-configs/{id}` | `updateWebhookConfig` | `200`, `404`, `400`, `409` |
| `DELETE` | `/api/v1/webhook-configs/{id}` | `deleteWebhookConfig` | `204`, `404` |
| `GET` | `/api/v1/tenants/{tenantId}/providers/{id}` | `getTenantProviderById` | `200`, `404` |
| `PUT` | `/api/v1/tenants/{tenantId}/providers/{id}` | `updateTenantProvider` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/tenants/{tenantId}/providers/{id}` | `removeTenantProvider` | `204`, `404` |
| `GET` | `/api/v1/tenants/{id}` | `getTenantById` | `200`, `404`, `403` |
| `PUT` | `/api/v1/tenants/{id}` | `updateTenant` | `200`, `400`, `404`, `409` |
| `DELETE` | `/api/v1/tenants/{id}` | `deleteTenant` | `204`, `404`, `409`, `403` |
| `GET` | `/api/v1/tenant-statuses/{id}` | `getTenantStatusById` | `200`, `404` |
| `PUT` | `/api/v1/tenant-statuses/{id}` | `updateTenantStatus` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/tenant-statuses/{id}` | `deleteTenantStatus` | `204`, `404` |
| `GET` | `/api/v1/tenant-settings/{id}` | `getTenantSettingsById` | `200`, `404` |
| `PUT` | `/api/v1/tenant-settings/{id}` | `updateTenantSettings` | `200`, `404`, `400` |
| `DELETE` | `/api/v1/tenant-settings/{id}` | `deleteTenantSettings` | `204`, `404` |
| `GET` | `/api/v1/tenant-brandings/{id}` | `getTenantBrandingById` | `200`, `404` |
| `PUT` | `/api/v1/tenant-brandings/{id}` | `updateTenantBranding` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/tenant-brandings/{id}` | `deleteTenantBranding` | `204`, `404` |
| `GET` | `/api/v1/providers/{id}` | `getProviderById` | `200`, `404`, `403` |
| `PUT` | `/api/v1/providers/{id}` | `updateProvider` | `200`, `400`, `404`, `409` |
| `DELETE` | `/api/v1/providers/{id}` | `deleteProvider` | `204`, `404` |
| `GET` | `/api/v1/provider-value-mappings/{id}` | `getProviderValueMappingById` | `200`, `404` |
| `PUT` | `/api/v1/provider-value-mappings/{id}` | `updateProviderValueMapping` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/provider-value-mappings/{id}` | `deleteProviderValueMapping` | `204`, `404` |
| `GET` | `/api/v1/provider-types/{id}` | `getProviderTypeById` | `200`, `404` |
| `PUT` | `/api/v1/provider-types/{id}` | `updateProviderType` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/provider-types/{id}` | `deleteProviderType` | `204`, `404` |
| `GET` | `/api/v1/provider-tenants/{id}` | `getProviderTenantById` | `200`, `404`, `403` |
| `PUT` | `/api/v1/provider-tenants/{id}` | `updateProviderTenant` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/provider-tenants/{id}` | `deleteProviderTenant` | `204`, `404` |
| `GET` | `/api/v1/provider-statuses/{id}` | `getProviderStatusById` | `200`, `404` |
| `PUT` | `/api/v1/provider-statuses/{id}` | `updateProviderStatus` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/provider-statuses/{id}` | `deleteProviderStatus` | `204`, `404` |
| `GET` | `/api/v1/provider-parameters/{id}` | `getProviderParameterById` | `200`, `404` |
| `PUT` | `/api/v1/provider-parameters/{id}` | `updateProviderParameter` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/provider-parameters/{id}` | `deleteProviderParameter` | `204`, `404` |
| `GET` | `/api/v1/feature-flags/{id}` | `getFeatureFlagById` | `200`, `404` |
| `PUT` | `/api/v1/feature-flags/{id}` | `updateFeatureFlag` | `200`, `404`, `400` |
| `DELETE` | `/api/v1/feature-flags/{id}` | `deleteFeatureFlag` | `204`, `404` |
| `GET` | `/api/v1/environment-configs/{id}` | `getEnvironmentConfigById` | `200`, `404` |
| `PUT` | `/api/v1/environment-configs/{id}` | `updateEnvironmentConfig` | `200`, `404`, `400` |
| `DELETE` | `/api/v1/environment-configs/{id}` | `deleteEnvironmentConfig` | `204`, `404` |
| `GET` | `/api/v1/channel-configs/{id}` | `getChannelConfigById` | `200`, `404` |
| `PUT` | `/api/v1/channel-configs/{id}` | `updateChannelConfig` | `200`, `404`, `400` |
| `DELETE` | `/api/v1/channel-configs/{id}` | `deleteChannelConfig` | `204`, `404` |
| `GET` | `/api/v1/channel-config-parameters/{id}` | `getById` | `200`, `404` |
| `PUT` | `/api/v1/channel-config-parameters/{id}` | `update` | `200`, `404`, `400` |
| `DELETE` | `/api/v1/channel-config-parameters/{id}` | `delete` | `204`, `404` |
| `GET` | `/api/v1/api-process-mappings/{id}` | `getApiProcessMappingById` | `200`, `404` |
| `PUT` | `/api/v1/api-process-mappings/{id}` | `updateApiProcessMapping` | `200`, `404`, `400` |
| `DELETE` | `/api/v1/api-process-mappings/{id}` | `deleteApiProcessMapping` | `204`, `404` |
| `POST` | `/api/v1/webhook-configs` | `createWebhookConfig` | `201`, `400`, `409` |
| `POST` | `/api/v1/webhook-configs/filter` | `filterWebhookConfigs` | `200`, `400` |
| `POST` | `/api/v1/tenants` | `createTenant` | `201`, `400`, `409` |
| `POST` | `/api/v1/tenants/{tenantId}/providers` | `addProviderToTenant` | `201`, `400`, `404`, `409` |
| `POST` | `/api/v1/tenants/{tenantId}/providers/filter` | `filterTenantProviders` | `200`, `404` |
| `POST` | `/api/v1/tenants/filter` | `filterTenants` | `200`, `400` |
| `POST` | `/api/v1/tenant-statuses` | `createTenantStatus` | `201`, `400` |
| `POST` | `/api/v1/tenant-statuses/filter` | `filterTenantStatuses` | `200` |
| `POST` | `/api/v1/tenant-settings` | `createTenantSettings` | `201`, `400` |
| `POST` | `/api/v1/tenant-settings/filter` | `filterTenantSettings` | `200` |
| `POST` | `/api/v1/tenant-brandings` | `createTenantBranding` | `201`, `400` |
| `POST` | `/api/v1/tenant-brandings/filter` | `filterTenantBrandings` | `200` |
| `POST` | `/api/v1/providers` | `createProvider` | `201`, `400`, `409` |
| `POST` | `/api/v1/providers/filter` | `filterProviders` | `200`, `400` |
| `POST` | `/api/v1/provider-value-mappings` | `createProviderValueMapping` | `201`, `400` |
| `POST` | `/api/v1/provider-value-mappings/filter` | `filterProviderValueMappings` | `200` |
| `POST` | `/api/v1/provider-types` | `createProviderType` | `201`, `400` |
| `POST` | `/api/v1/provider-types/filter` | `filterProviderTypes` | `200` |
| `POST` | `/api/v1/provider-tenants` | `createProviderTenant` | `201`, `400` |
| `POST` | `/api/v1/provider-tenants/filter` | `filterProviderTenants` | `200`, `400` |
| `POST` | `/api/v1/provider-statuses` | `createProviderStatus` | `201`, `400` |
| `POST` | `/api/v1/provider-statuses/filter` | `filterProviderStatuses` | `200` |
| `POST` | `/api/v1/provider-parameters` | `createProviderParameter` | `201`, `400` |
| `POST` | `/api/v1/provider-parameters/filter` | `filterProviderParameters` | `200` |
| `POST` | `/api/v1/feature-flags` | `createFeatureFlag` | `201`, `400` |
| `POST` | `/api/v1/feature-flags/filter` | `filterFeatureFlags` | `200` |
| `POST` | `/api/v1/environment-configs` | `createEnvironmentConfig` | `201`, `400` |
| `POST` | `/api/v1/environment-configs/filter` | `filterEnvironmentConfigs` | `200` |
| `POST` | `/api/v1/document-template-bindings/tenants/{tenantId}` | `createDocumentTemplateBinding` | `200` |
| `POST` | `/api/v1/document-template-bindings/tenants/{tenantId}/{bindingId}/retire` | `retireDocumentTemplateBinding` | `200` |
| `POST` | `/api/v1/document-template-bindings/tenants/{tenantId}/{bindingId}/replace` | `replaceDocumentTemplateBinding` | `200` |
| `POST` | `/api/v1/document-template-bindings/tenants/{tenantId}/{bindingId}/activate` | `activateDocumentTemplateBinding` | `200` |
| `POST` | `/api/v1/document-issuer-revisions/tenants/{tenantId}/{revisionId}/retire` | `retireDocumentIssuerRevision` | `200`, `400`, `403`, `404`, `409`, `503` |
| `POST` | `/api/v1/document-issuer-revisions/tenants/{tenantId}/{revisionId}/activate` | `activateDocumentIssuerRevision` | `200`, `400`, `403`, `404`, `409`, `503` |
| `POST` | `/api/v1/document-issuer-revisions/tenants/{tenantId}` | `createDocumentIssuerRevision` | `200`, `400`, `403`, `404`, `409`, `503` |
| `POST` | `/api/v1/configuration-audits` | `createConfigurationAudit` | `201`, `400` |
| `POST` | `/api/v1/configuration-audits/filter` | `filterConfigurationAudits` | `200` |
| `POST` | `/api/v1/channel-configs` | `createChannelConfig` | `201`, `400` |
| `POST` | `/api/v1/channel-configs/filter` | `filterChannelConfigs` | `200`, `400` |
| `POST` | `/api/v1/channel-config-parameters` | `create` | `201`, `400` |
| `POST` | `/api/v1/channel-config-parameters/filter` | `filter` | `200` |
| `POST` | `/api/v1/api-process-mappings` | `createApiProcessMapping` | `201`, `400` |
| `POST` | `/api/v1/api-process-mappings/filter` | `filterApiProcessMappings` | `200` |
| `POST` | `/api/v1/api-process-mappings/cache/invalidate` | `invalidateApiProcessMappingCache` | `204` |
| `GET` | `/api/v1/tenant-brandings/tenant/{tenantId}` | `getTenantBrandingByTenantId` | `200`, `404` |
| `GET` | `/api/v1/document-template-bindings/tenants/{tenantId}/{bindingId}` | `getDocumentTemplateBinding` | `200` |
| `GET` | `/api/v1/document-template-bindings/tenants/{tenantId}/resolve` | `resolveDocumentTemplateBinding` | `200` |
| `GET` | `/api/v1/document-issuer-revisions/tenants/{tenantId}/{revisionId}` | `getDocumentIssuerRevision` | `200`, `400`, `403`, `404`, `409`, `503` |
| `GET` | `/api/v1/document-issuer-revisions/tenants/{tenantId}/resolve` | `resolveDocumentIssuerRevision` | `200`, `400`, `403`, `404`, `409`, `503` |
| `GET` | `/api/v1/configuration-audits/{id}` | `getConfigurationAuditById` | `200`, `404` |
| `GET` | `/api/v1/api-process-mappings/vanilla` | `getVanillaApiProcessMappings` | `200` |
| `GET` | `/api/v1/api-process-mappings/tenants/{tenantId}/mappings` | `getApiProcessMappingsByTenant` | `200` |
| `GET` | `/api/v1/api-process-mappings/resolve` | `resolveApiProcessMapping` | `200`, `404` |
| `GET` | `/api/v1/api-process-mappings/processes/{processId}` | `getApiProcessMappingsByProcess` | `200` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`ApiProcessMappingDTO`, `ChannelConfigDTO`, `ChannelConfigParameterDTO`, `ConfigurationAuditDTO`, `DocumentBindingBrandReference`, `DocumentBindingBrandView`, `DocumentIssuerAddress`, `DocumentIssuerAssetPackReference`, `DocumentIssuerContact`, `DocumentIssuerCreateRequest`, `DocumentIssuerDefinition`, `DocumentIssuerRetireRequest`, `DocumentIssuerRevisionView`, `DocumentIssuerTransitionRequest`, `DocumentTemplateBindingActionRequest`, `DocumentTemplateBindingCreateRequest`, `DocumentTemplateBindingDTO`, `DocumentTemplateBindingDefinition`, `DocumentTemplateBindingReplaceRequest`, `DocumentTemplateBindingResolution`, `DocumentTemplateBindingRetireRequest`, `DocumentTemplateMasterReference`, `EnvironmentConfigDTO`, `FeatureFlagDTO`, `FilterOptions`, `FilterRequestChannelConfigDTO`, `FilterRequestChannelConfigParameterDTO`, `FilterRequestProviderTenantDTO`, `PaginationRequest`, `PaginationResponse`, `PaginationResponseApiProcessMappingDTO`, `PaginationResponseChannelConfigDTO`, `PaginationResponseConfigurationAuditDTO`, `PaginationResponseEnvironmentConfigDTO`, `PaginationResponseFeatureFlagDTO`, `PaginationResponseProviderDTO`, `PaginationResponseProviderParameterDTO`, `PaginationResponseProviderStatusDTO`, `PaginationResponseProviderTenantDTO`, `PaginationResponseProviderTypeDTO`, `PaginationResponseProviderValueMappingDTO`, `PaginationResponseTenantBrandingDTO`, `PaginationResponseTenantDTO`, `PaginationResponseTenantSettingsDTO`, `PaginationResponseTenantStatusDTO`, `PaginationResponseWebhookConfigDTO`, `ProviderDTO`, `ProviderParameterDTO`, `ProviderStatusDTO`, `ProviderTenantDTO`, `ProviderTypeDTO`, `ProviderValueMappingDTO`, `RangeFilter`, `RangeObject`, `TenantBrandingDTO`, `TenantDTO`, `TenantSettingsDTO`, `TenantStatusDTO`, `WebhookConfigDTO`

## Contract explorer

<swagger-ui src="../contracts/core-common-config-mgmt/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
