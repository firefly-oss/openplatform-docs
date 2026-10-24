# core-common-reference-master-data

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/core-common-reference-master-data) · [Complete contract](../contracts/core-common-reference-master-data/openapi.yml)

**Provenance:** base revision `7c827fda6f42c21b4dadd792f7ac164dc3b3388b`; current copied input SHA256 `c08c8db0ca7b6059f1b5232d853db244ea8f392a8be68d457988ca51eac9279c`. [Baseline source](https://github.com/fireflysoftwaresolutions/core-common-reference-master-data/blob/7c827fda6f42c21b4dadd792f7ac164dc3b3388b/core-common-reference-master-data-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/transaction-category-localizations/{localizationId}` | `getTransactionCategoryLocalization` | `200`, `404` |
| `PUT` | `/api/v1/transaction-category-localizations/{localizationId}` | `updateTransactionCategoryLocalization` | `200`, `404`, `400` |
| `DELETE` | `/api/v1/transaction-category-localizations/{localizationId}` | `deleteTransactionCategoryLocalization` | `204`, `404` |
| `GET` | `/api/v1/transaction-categories/{categoryId}` | `getTransactionCategory` | `200`, `404` |
| `PUT` | `/api/v1/transaction-categories/{categoryId}` | `updateTransactionCategory` | `200`, `404`, `400` |
| `DELETE` | `/api/v1/transaction-categories/{categoryId}` | `deleteTransactionCategory` | `204`, `404` |
| `GET` | `/api/v1/titles/{titleId}` | `getTitle` | `200`, `404` |
| `PUT` | `/api/v1/titles/{titleId}` | `updateTitle` | `200`, `404` |
| `DELETE` | `/api/v1/titles/{titleId}` | `deleteTitle` | `204`, `404` |
| `GET` | `/api/v1/rule-operation-types/{operationTypeId}` | `getRuleOperationType` | `200`, `404` |
| `PUT` | `/api/v1/rule-operation-types/{operationTypeId}` | `updateRuleOperationType` | `200`, `404` |
| `DELETE` | `/api/v1/rule-operation-types/{operationTypeId}` | `deleteRuleOperationType` | `204`, `404` |
| `GET` | `/api/v1/relationship-types/{relationshipTypeId}` | `getRelationshipType` | `200`, `404` |
| `PUT` | `/api/v1/relationship-types/{relationshipTypeId}` | `updateRelationshipType` | `200`, `404` |
| `DELETE` | `/api/v1/relationship-types/{relationshipTypeId}` | `deleteRelationshipType` | `204`, `404` |
| `GET` | `/api/v1/notification-templates/{templateId}` | `getNotificationMessageTemplate` | `200`, `404` |
| `PUT` | `/api/v1/notification-templates/{templateId}` | `updateNotificationMessageTemplate` | `200`, `404`, `400` |
| `DELETE` | `/api/v1/notification-templates/{templateId}` | `deleteNotificationMessageTemplate` | `204`, `404` |
| `GET` | `/api/v1/notification-messages/{messageId}` | `getNotificationMessage` | `200`, `404` |
| `PUT` | `/api/v1/notification-messages/{messageId}` | `updateNotificationMessage` | `200`, `404`, `400` |
| `DELETE` | `/api/v1/notification-messages/{messageId}` | `deleteNotificationMessage` | `204`, `404` |
| `GET` | `/api/v1/notification-localizations/{localizationId}` | `getNotificationMessageLocalization` | `200`, `404` |
| `PUT` | `/api/v1/notification-localizations/{localizationId}` | `updateNotificationMessageLocalization` | `200`, `404`, `400` |
| `DELETE` | `/api/v1/notification-localizations/{localizationId}` | `deleteNotificationMessageLocalization` | `204`, `404` |
| `GET` | `/api/v1/message-types/{typeId}` | `getMessageType` | `200`, `404` |
| `PUT` | `/api/v1/message-types/{typeId}` | `updateMessageType` | `200`, `404`, `400` |
| `DELETE` | `/api/v1/message-types/{typeId}` | `deleteMessageType` | `204`, `404` |
| `GET` | `/api/v1/lookup/items/{itemId}` | `getItem` | `200`, `404` |
| `PUT` | `/api/v1/lookup/items/{itemId}` | `updateItem` | `200`, `404` |
| `DELETE` | `/api/v1/lookup/items/{itemId}` | `deleteItem` | `204`, `404` |
| `GET` | `/api/v1/lookup/domains/{domainId}` | `getDomain` | `200`, `404` |
| `PUT` | `/api/v1/lookup/domains/{domainId}` | `updateDomain` | `200`, `404` |
| `DELETE` | `/api/v1/lookup/domains/{domainId}` | `deleteDomain` | `204`, `404` |
| `GET` | `/api/v1/legal-forms/{legalFormId}` | `getLegalForm` | `200`, `404` |
| `PUT` | `/api/v1/legal-forms/{legalFormId}` | `updateLegalForm` | `200`, `404` |
| `DELETE` | `/api/v1/legal-forms/{legalFormId}` | `deleteLegalForm` | `204`, `404` |
| `GET` | `/api/v1/language-locales/{id}` | `getLanguageLocale` | `200`, `404` |
| `PUT` | `/api/v1/language-locales/{id}` | `updateLanguageLocale` | `200`, `404` |
| `DELETE` | `/api/v1/language-locales/{id}` | `deleteLanguageLocale` | `204`, `404` |
| `GET` | `/api/v1/identity-documents/{documentId}` | `getIdentityDocument` | `200`, `404` |
| `PUT` | `/api/v1/identity-documents/{documentId}` | `updateIdentityDocument` | `200`, `404`, `400` |
| `DELETE` | `/api/v1/identity-documents/{documentId}` | `deleteIdentityDocument` | `204`, `404` |
| `PUT` | `/api/v1/identity-document-localizations/{localizationId}` | `updateIdentityDocumentLocalization` | `200`, `404`, `400` |
| `DELETE` | `/api/v1/identity-document-localizations/{localizationId}` | `deleteIdentityDocumentLocalization` | `204`, `404` |
| `GET` | `/api/v1/identity-document-categories/{categoryId}` | `getIdentityDocumentCategory` | `200`, `404` |
| `PUT` | `/api/v1/identity-document-categories/{categoryId}` | `updateIdentityDocumentCategory` | `200`, `404`, `400` |
| `DELETE` | `/api/v1/identity-document-categories/{categoryId}` | `deleteIdentityDocumentCategory` | `204`, `404` |
| `GET` | `/api/v1/document-templates/{templateId}` | `getDocumentTemplate` | `200`, `404` |
| `PUT` | `/api/v1/document-templates/{templateId}` | `updateDocumentTemplate` | `200`, `404` |
| `DELETE` | `/api/v1/document-templates/{templateId}` | `deleteDocumentTemplate` | `204`, `404` |
| `GET` | `/api/v1/document-template-types/{typeId}` | `getDocumentTemplateType` | `200`, `404` |
| `PUT` | `/api/v1/document-template-types/{typeId}` | `updateDocumentTemplateType` | `200`, `404` |
| `DELETE` | `/api/v1/document-template-types/{typeId}` | `deleteDocumentTemplateType` | `204`, `404` |
| `GET` | `/api/v1/document-template-localizations/{localizationId}` | `getDocumentTemplateLocalization` | `200`, `404` |
| `PUT` | `/api/v1/document-template-localizations/{localizationId}` | `updateDocumentTemplateLocalization` | `200`, `404` |
| `DELETE` | `/api/v1/document-template-localizations/{localizationId}` | `deleteDocumentTemplateLocalization` | `204`, `404` |
| `GET` | `/api/v1/divisions/{divisionId}` | `getDivision` | `200`, `404` |
| `PUT` | `/api/v1/divisions/{divisionId}` | `updateDivision` | `200`, `404` |
| `DELETE` | `/api/v1/divisions/{divisionId}` | `deleteDivision` | `204`, `404` |
| `GET` | `/api/v1/currencies/{currencyId}` | `getCurrency` | `200`, `404` |
| `PUT` | `/api/v1/currencies/{currencyId}` | `updateCurrency` | `200`, `404` |
| `DELETE` | `/api/v1/currencies/{currencyId}` | `deleteCurrency` | `204`, `404` |
| `GET` | `/api/v1/countries/{countryId}` | `getCountry` | `200`, `404` |
| `PUT` | `/api/v1/countries/{countryId}` | `updateCountry` | `200`, `404` |
| `DELETE` | `/api/v1/countries/{countryId}` | `deleteCountry` | `204`, `404` |
| `GET` | `/api/v1/contract-types/{contractId}` | `getContractType` | `200`, `404` |
| `PUT` | `/api/v1/contract-types/{contractId}` | `updateContractType` | `200`, `404` |
| `DELETE` | `/api/v1/contract-types/{contractId}` | `deleteContractType` | `204`, `404` |
| `GET` | `/api/v1/contract-roles/{roleId}` | `getContractRole` | `200`, `404` |
| `PUT` | `/api/v1/contract-roles/{roleId}` | `updateContractRole` | `200`, `404` |
| `DELETE` | `/api/v1/contract-roles/{roleId}` | `deleteContractRole` | `204`, `404` |
| `GET` | `/api/v1/contract-role-scopes/{scopeId}` | `getContractRoleScope` | `200`, `404` |
| `PUT` | `/api/v1/contract-role-scopes/{scopeId}` | `updateContractRoleScope` | `200`, `404`, `400` |
| `DELETE` | `/api/v1/contract-role-scopes/{scopeId}` | `deleteContractRoleScope` | `204`, `404` |
| `GET` | `/api/v1/contract-document-types/{documentTypeId}` | `getContractDocumentType` | `200`, `404` |
| `PUT` | `/api/v1/contract-document-types/{documentTypeId}` | `updateContractDocumentType` | `200`, `404` |
| `DELETE` | `/api/v1/contract-document-types/{documentTypeId}` | `deleteContractDocumentType` | `204`, `404` |
| `GET` | `/api/v1/consent-catalog/{id}` | `getConsentCatalog` | `200`, `404` |
| `PUT` | `/api/v1/consent-catalog/{id}` | `updateConsentCatalog` | `200`, `404` |
| `DELETE` | `/api/v1/consent-catalog/{id}` | `deleteConsentCatalog` | `204`, `404` |
| `GET` | `/api/v1/bank-institution-codes/{id}` | `getBankInstitutionCode` | `200`, `404` |
| `PUT` | `/api/v1/bank-institution-codes/{id}` | `updateBankInstitutionCode` | `200`, `404` |
| `DELETE` | `/api/v1/bank-institution-codes/{id}` | `deleteBankInstitutionCode` | `204`, `404` |
| `GET` | `/api/v1/asset-types/{assetId}` | `getAssetType` | `200`, `404` |
| `PUT` | `/api/v1/asset-types/{assetId}` | `updateAssetType` | `200`, `404` |
| `DELETE` | `/api/v1/asset-types/{assetId}` | `deleteAssetType` | `204`, `404` |
| `GET` | `/api/v1/activity-codes/{activityCodeId}` | `getActivityCode` | `200`, `404` |
| `PUT` | `/api/v1/activity-codes/{activityCodeId}` | `updateActivityCode` | `200`, `404` |
| `DELETE` | `/api/v1/activity-codes/{activityCodeId}` | `deleteActivityCode` | `204`, `404` |
| `POST` | `/api/v1/transaction-category-localizations` | `createTransactionCategoryLocalization` | `200`, `400` |
| `GET` | `/api/v1/transaction-categories` | `listTransactionCategories` | `200` |
| `POST` | `/api/v1/transaction-categories` | `createTransactionCategory` | `200`, `400` |
| `GET` | `/api/v1/titles` | `listTitles` | `200` |
| `POST` | `/api/v1/titles` | `createTitle` | `200`, `400` |
| `POST` | `/api/v1/rule-operation-types/filter` | `filterRuleOperationTypes` | `200` |
| `POST` | `/api/v1/rule-operation-types` | `createRuleOperationType` | `200`, `400` |
| `GET` | `/api/v1/relationship-types` | `listRelationshipTypes` | `200` |
| `POST` | `/api/v1/relationship-types` | `createRelationshipType` | `200`, `400` |
| `GET` | `/api/v1/notification-templates` | `listNotificationMessageTemplates` | `200` |
| `POST` | `/api/v1/notification-templates` | `createNotificationMessageTemplate` | `200`, `400` |
| `GET` | `/api/v1/notification-messages` | `listNotificationMessages` | `200` |
| `POST` | `/api/v1/notification-messages` | `createNotificationMessage` | `200`, `400` |
| `POST` | `/api/v1/notification-localizations` | `createNotificationMessageLocalization` | `200`, `400` |
| `GET` | `/api/v1/message-types` | `listMessageTypes` | `200` |
| `POST` | `/api/v1/message-types` | `createMessageType` | `200`, `400` |
| `GET` | `/api/v1/lookup/items` | `listItems` | `200` |
| `POST` | `/api/v1/lookup/items` | `createItem` | `200`, `400` |
| `GET` | `/api/v1/lookup/domains` | `listDomains` | `200` |
| `POST` | `/api/v1/lookup/domains` | `createDomain` | `200`, `400` |
| `POST` | `/api/v1/legal-forms/filter` | `listLegalForms` | `200` |
| `POST` | `/api/v1/legal-forms` | `createLegalForm` | `200`, `400` |
| `GET` | `/api/v1/language-locales` | `listLanguageLocales` | `200` |
| `POST` | `/api/v1/language-locales` | `createLanguageLocale` | `200`, `400` |
| `GET` | `/api/v1/identity-documents` | `listIdentityDocuments` | `200` |
| `POST` | `/api/v1/identity-documents` | `createIdentityDocument` | `200`, `400` |
| `GET` | `/api/v1/identity-document-localizations` | `listIdentityDocumentLocalizations` | `200` |
| `POST` | `/api/v1/identity-document-localizations` | `createIdentityDocumentLocalization` | `200`, `400` |
| `GET` | `/api/v1/identity-document-categories` | `listIdentityDocumentCategories` | `200` |
| `POST` | `/api/v1/identity-document-categories` | `createIdentityDocumentCategory` | `200`, `400` |
| `GET` | `/api/v1/document-templates` | `listDocumentTemplates` | `200` |
| `POST` | `/api/v1/document-templates` | `createDocumentTemplate` | `201` |
| `GET` | `/api/v1/document-template-types` | `listDocumentTemplateTypes` | `200` |
| `POST` | `/api/v1/document-template-types` | `createDocumentTemplateType` | `201` |
| `POST` | `/api/v1/document-template-revisions/{revisionId}/retire` | `retireDocumentTemplateRevision` | `200` |
| `POST` | `/api/v1/document-template-revisions/templates/{templateId}/publish` | `publishDocumentTemplateRevision` | `200` |
| `POST` | `/api/v1/document-template-localizations` | `createDocumentTemplateLocalization` | `201` |
| `POST` | `/api/v1/document-layout-publications/{layoutRevisionId}/retire` | `retireDocumentLayoutRevision` | `200` |
| `POST` | `/api/v1/document-layout-publications/templates/{templateId}` | `publishDocumentLayoutRevision` | `201`, `200` |
| `GET` | `/api/v1/divisions` | `listDivisions` | `200` |
| `POST` | `/api/v1/divisions` | `createDivision` | `200`, `400` |
| `POST` | `/api/v1/currency-execution-policies/{policyId}/retire` | `retireCurrencyExecutionPolicy` | `200` |
| `POST` | `/api/v1/currency-execution-policies` | `publishCurrencyExecutionPolicy` | `201`, `200` |
| `POST` | `/api/v1/currencies/filter` | `filterCurrencies` | `200` |
| `POST` | `/api/v1/currencies` | `createCurrency` | `200`, `400` |
| `POST` | `/api/v1/countries/filter` | `filterCountries` | `200` |
| `POST` | `/api/v1/countries` | `createCountry` | `200`, `400` |
| `GET` | `/api/v1/contract-types` | `listContractTypes` | `200` |
| `POST` | `/api/v1/contract-types` | `createContractType` | `200`, `400` |
| `POST` | `/api/v1/contract-roles/filter` | `filterContractRoles` | `200` |
| `POST` | `/api/v1/contract-roles` | `createContractRole` | `200`, `400` |
| `POST` | `/api/v1/contract-role-scopes/filter` | `filterContractRoleScopes` | `200`, `400` |
| `POST` | `/api/v1/contract-role-scopes` | `createContractRoleScope` | `200`, `400` |
| `GET` | `/api/v1/contract-document-types` | `listContractDocumentTypes` | `200` |
| `POST` | `/api/v1/contract-document-types` | `createContractDocumentType` | `201`, `400` |
| `GET` | `/api/v1/consent-catalog` | `listConsentCatalog` | `200` |
| `POST` | `/api/v1/consent-catalog` | `createConsentCatalog` | `200`, `400` |
| `GET` | `/api/v1/bank-institution-codes` | `listBankInstitutionCodes` | `200` |
| `POST` | `/api/v1/bank-institution-codes` | `createBankInstitutionCode` | `200`, `400` |
| `GET` | `/api/v1/asset-types` | `listAssetTypes` | `200` |
| `POST` | `/api/v1/asset-types` | `createAssetType` | `200`, `400` |
| `GET` | `/api/v1/activity-codes` | `listActivityCodes` | `200` |
| `POST` | `/api/v1/activity-codes` | `createActivityCode` | `200`, `400` |
| `GET` | `/api/v1/transaction-category-localizations/category/{categoryId}/paginated` | `listLocalizationsByCategoryId` | `200` |
| `GET` | `/api/v1/transaction-category-localizations/category/{categoryId}/locale/{localeId}` | `getTransactionCategoryLocalizationByCategoryAndLocale` | `200`, `404` |
| `GET` | `/api/v1/transaction-category-localizations/category/{categoryId}` | `getLocalizationsByCategoryId` | `200`, `404` |
| `GET` | `/api/v1/transaction-categories/root` | `listRootTransactionCategories` | `200` |
| `GET` | `/api/v1/transaction-categories/parent/{parentCategoryId}` | `listChildTransactionCategories` | `200` |
| `GET` | `/api/v1/transaction-categories/code/{categoryCode}` | `getTransactionCategoryByCode` | `200`, `404` |
| `GET` | `/api/v1/notification-templates/type/{templateType}` | `listNotificationMessageTemplatesByType` | `200` |
| `GET` | `/api/v1/notification-templates/message/{messageId}/name/{templateName}` | `getNotificationMessageTemplateByNameAndMessageId` | `200`, `404` |
| `GET` | `/api/v1/notification-templates/message/{messageId}` | `getTemplatesByMessageId` | `200` |
| `DELETE` | `/api/v1/notification-templates/message/{messageId}` | `deleteTemplatesByMessageId` | `204`, `404` |
| `GET` | `/api/v1/notification-messages/message-type/{typeId}` | `listNotificationMessagesByTypeId` | `200` |
| `GET` | `/api/v1/notification-messages/event-type/{eventType}` | `listNotificationMessagesByEventType` | `200` |
| `GET` | `/api/v1/notification-messages/code/{messageCode}` | `getNotificationMessageByCode` | `200`, `404` |
| `GET` | `/api/v1/notification-localizations/message/{messageId}/locale/{localeId}` | `getNotificationMessageLocalizationByMessageAndLocale` | `200`, `404` |
| `GET` | `/api/v1/notification-localizations/message/{messageId}` | `getLocalizationsByMessageId` | `200` |
| `DELETE` | `/api/v1/notification-localizations/message/{messageId}` | `deleteLocalizationsByMessageId` | `204`, `404` |
| `GET` | `/api/v1/notification-localizations/locale/{localeId}` | `getLocalizationsByLocaleId` | `200` |
| `GET` | `/api/v1/message-types/code/{typeCode}` | `getMessageTypeByCode` | `200`, `404` |
| `GET` | `/api/v1/lookup/items/domain/{domainId}` | `getItemsByDomain` | `200` |
| `GET` | `/api/v1/legal-forms/country/{countryId}` | `getLegalFormsByCountry` | `200` |
| `GET` | `/api/v1/identity-documents/country/{countryId}` | `listIdentityDocumentsByCountry` | `200` |
| `GET` | `/api/v1/identity-documents/code/{documentCode}` | `getIdentityDocumentByCode` | `200`, `404` |
| `GET` | `/api/v1/identity-documents/category/{categoryId}` | `listIdentityDocumentsByCategory` | `200` |
| `GET` | `/api/v1/identity-document-localizations/document/{documentId}/locale/{localeId}` | `getIdentityDocumentLocalizationByDocumentAndLocale` | `200`, `404` |
| `GET` | `/api/v1/identity-document-localizations/document/{documentId}` | `getLocalizationsByDocumentId` | `200` |
| `DELETE` | `/api/v1/identity-document-localizations/document/{documentId}` | `deleteLocalizationsByDocumentId` | `204`, `404` |
| `GET` | `/api/v1/identity-document-categories/code/{categoryCode}` | `getIdentityDocumentCategoryByCode` | `200`, `404` |
| `GET` | `/api/v1/document-templates/type/{typeId}` | `listDocumentTemplatesByTypeId` | `200` |
| `GET` | `/api/v1/document-templates/code/{templateCode}` | `getDocumentTemplateByCode` | `200`, `404` |
| `GET` | `/api/v1/document-templates/category/{category}` | `listDocumentTemplatesByCategory` | `200` |
| `GET` | `/api/v1/document-template-types/code/{typeCode}` | `getDocumentTemplateTypeByCode` | `200`, `404` |
| `GET` | `/api/v1/document-template-revisions/{revisionId}` | `getDocumentTemplateRevision` | `200` |
| `GET` | `/api/v1/document-template-revisions/resolve` | `resolveDocumentTemplateRevision` | `200` |
| `GET` | `/api/v1/document-template-localizations/template/{templateId}/locale/{localeId}` | `getDocumentTemplateLocalizationByTemplateAndLocale` | `200`, `404` |
| `GET` | `/api/v1/document-template-localizations/template/{templateId}` | `getLocalizationsByTemplateId` | `200`, `404` |
| `DELETE` | `/api/v1/document-template-localizations/template/{templateId}` | `deleteLocalizationsByTemplateId` | `204` |
| `GET` | `/api/v1/document-template-localizations/locale/{localeId}` | `getLocalizationsByLocaleId_1` | `200`, `404` |
| `GET` | `/api/v1/document-layout-publications/{layoutRevisionId}` | `getDocumentLayoutRevision` | `200` |
| `GET` | `/api/v1/document-layout-publications/templates/{templateId}/source-observation` | `observeDocumentLayoutSource` | `200` |
| `GET` | `/api/v1/document-layout-publications/resolve` | `resolveDocumentLayoutRevision` | `200` |
| `GET` | `/api/v1/currency-execution-policies/{policyId}` | `getCurrencyExecutionPolicy` | `200` |
| `GET` | `/api/v1/currency-execution-policies/currencies/{currencyId}/source-observation` | `observeCurrencyPolicySource` | `200` |
| `GET` | `/api/v1/currency-execution-policies/by-action/{actionId}` | `getCurrencyExecutionPolicyByAction` | `200` |
| `GET` | `/api/v1/contract-role-scopes/role/{roleId}/active` | `getActiveScopesByRoleId` | `200` |
| `GET` | `/api/v1/contract-role-scopes/role/{roleId}` | `getScopesByRoleId` | `200` |
| `GET` | `/api/v1/contract-document-types/by-code/{documentCode}` | `getContractDocumentTypeByCode` | `200`, `404` |
| `GET` | `/api/v1/consent-catalog/type/{consentType}` | `listConsentCatalogByType` | `200` |
| `GET` | `/api/v1/activity-codes/parent/{parentCodeId}` | `getChildActivityCodes` | `200` |
| `GET` | `/api/v1/activity-codes/country/{countryId}` | `getActivityCodesByCountry` | `200` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`ActivityCodeDTO`, `AdministrativeDivisionDTO`, `AssetTypeDTO`, `BankInstitutionCodeDTO`, `ConsentCatalogDTO`, `ContractDocumentTypeDTO`, `ContractRoleDTO`, `ContractRoleScopeDTO`, `ContractTypeDTO`, `CountryDTO`, `CurrencyDTO`, `CurrencyPolicyPublishRequest`, `CurrencyPolicyReference`, `CurrencyPolicyRetireRequest`, `CurrencyPolicySourceObservation`, `CurrencyPolicyView`, `DocumentLayoutDefinition`, `DocumentLayoutExpectedDraftReference`, `DocumentLayoutMasterReference`, `DocumentLayoutNoticeReference`, `DocumentLayoutOutputProfileMetadata`, `DocumentLayoutOutputProfileReference`, `DocumentLayoutPublicationDTO`, `DocumentLayoutPublishRequest`, `DocumentLayoutRetireRequest`, `DocumentLayoutSemanticDefinition`, `DocumentLayoutSourceObservation`, `DocumentTemplateCatalogDTO`, `DocumentTemplateLocalizationDTO`, `DocumentTemplatePublicationRequest`, `DocumentTemplateRevisionDTO`, `DocumentTemplateTypeCatalogDTO`, `FilterOptions`, `FilterRequestContractRoleDTO`, `FilterRequestContractRoleScopeDTO`, `FilterRequestCountryDTO`, `FilterRequestCurrencyDTO`, `FilterRequestLegalFormDTO`, `FilterRequestRuleOperationTypeDTO`, `IdentityDocumentCatalogDTO`, `IdentityDocumentCategoryCatalogDTO`, `IdentityDocumentLocalizationDTO`, `LanguageLocaleDTO`, `LegalFormDTO`, `LookupDomainDTO`, `LookupItemDTO`, `MessageTypeCatalogDTO`, `NotificationMessageCatalogDTO`, `NotificationMessageLocalizationDTO`, `NotificationMessageTemplateDTO`, `PaginationRequest`, `PaginationResponse`, `PaginationResponseContractRoleDTO`, `PaginationResponseCountryDTO`, `PaginationResponseCurrencyDTO`, `PaginationResponseLegalFormDTO`, `PaginationResponseRuleOperationTypeDTO`, `RangeFilter`, `RangeObject`, `RelationshipTypeMasterDTO`, `RuleOperationTypeDTO`, `TitleMasterDTO`, `TransactionCategoryCatalogDTO`, `TransactionCategoryLocalizationDTO`

## Contract explorer

<swagger-ui src="../contracts/core-common-reference-master-data/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
