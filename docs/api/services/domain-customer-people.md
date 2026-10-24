# domain-customer-people

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/domain-customer-people) · [Complete contract](../contracts/domain-customer-people/openapi.yml)

**Provenance:** base revision `efc8ca960f7326f9d8ec7b334a43f20af71ae0cf`; current copied input SHA256 `d9427788eb180b2f5ae7fe0e58e1615c1d0767f09f55e59a98afd69a477edc35`. [Baseline source](https://github.com/fireflysoftwaresolutions/domain-customer-people/blob/efc8ca960f7326f9d8ec7b334a43f20af71ae0cf/domain-customer-people-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `PUT` | `/api/v1/party-relationships/{relationId}` | `updateRelationship` | `200` |
| `DELETE` | `/api/v1/party-relationships/{relationId}` | `removeRelationship` | `200` |
| `PUT` | `/api/v1/customers` | `updateCustomer` | `200` |
| `POST` | `/api/v1/customers` | `registerCustomer` | `200` |
| `PUT` | `/api/v1/customers/{partyId}/phones/{phoneId}` | `updateCustomerPhone` | `200` |
| `DELETE` | `/api/v1/customers/{partyId}/phones/{phoneId}` | `removeCustomerPhone` | `200` |
| `PUT` | `/api/v1/customers/{partyId}/emails/{emailId}` | `updateCustomerEmail` | `200` |
| `DELETE` | `/api/v1/customers/{partyId}/emails/{emailId}` | `removeCustomerEmail` | `200` |
| `PUT` | `/api/v1/customers/{partyId}/consents/{consentId}` | `updateCustomerConsent` | `200`, `400`, `404`, `500` |
| `PUT` | `/api/v1/customers/{partyId}/addresses/{addressId}` | `updateCustomerAddress` | `200` |
| `DELETE` | `/api/v1/customers/{partyId}/addresses/{addressId}` | `removeCustomerAddress` | `200` |
| `PUT` | `/api/v1/businesses` | `updateBusiness` | `200` |
| `POST` | `/api/v1/businesses` | `registerBusiness` | `200` |
| `PUT` | `/api/v1/businesses/{partyId}/phones/{phoneId}` | `updateBusinessPhone` | `200` |
| `DELETE` | `/api/v1/businesses/{partyId}/phones/{phoneId}` | `removeBusinessPhone` | `200` |
| `PUT` | `/api/v1/businesses/{partyId}/emails/{emailId}` | `updateBusinessEmail` | `200` |
| `DELETE` | `/api/v1/businesses/{partyId}/emails/{emailId}` | `removeBusinessEmail` | `200` |
| `PUT` | `/api/v1/businesses/{partyId}/addresses/{addressId}` | `updateBusinessAddress` | `200` |
| `DELETE` | `/api/v1/businesses/{partyId}/addresses/{addressId}` | `removeBusinessAddress` | `200` |
| `POST` | `/api/v1/party-relationships` | `registerRelationship` | `200` |
| `POST` | `/api/v1/customers/{partyId}/unlock` | `unlockCustomerProfile` | `200` |
| `POST` | `/api/v1/customers/{partyId}/reactivate` | `reactivateCustomer` | `200` |
| `POST` | `/api/v1/customers/{partyId}/preferred-channel` | `setPreferredChannel` | `200` |
| `POST` | `/api/v1/customers/{partyId}/phones` | `addCustomerPhone` | `200` |
| `POST` | `/api/v1/customers/{partyId}/lock` | `lockCustomerProfile` | `200` |
| `POST` | `/api/v1/customers/{partyId}/id-documents` | `addTaxId` | `200` |
| `POST` | `/api/v1/customers/{partyId}/emails` | `addCustomerEmail` | `200` |
| `POST` | `/api/v1/customers/{partyId}/dormant` | `markCustomerDormant` | `200` |
| `POST` | `/api/v1/customers/{partyId}/deceased` | `markCustomerDeceased` | `200` |
| `POST` | `/api/v1/customers/{partyId}/confirm-closure` | `confirmCustomerClosure` | `200` |
| `POST` | `/api/v1/customers/{partyId}/closure-request` | `requestCustomerClosure` | `200` |
| `POST` | `/api/v1/customers/{partyId}/addresses` | `addCustomerAddress` | `200` |
| `POST` | `/api/v1/customers/search` | `searchCustomers` | `200` |
| `POST` | `/api/v1/businesses/{partyId}/unlock` | `unlockBusinessProfile` | `200` |
| `POST` | `/api/v1/businesses/{partyId}/reactivate` | `reactivateBusiness` | `200` |
| `POST` | `/api/v1/businesses/{partyId}/phones` | `addBusinessPhone` | `200` |
| `POST` | `/api/v1/businesses/{partyId}/lock` | `lockBusinessProfile` | `200` |
| `POST` | `/api/v1/businesses/{partyId}/emails` | `addBusinessEmail` | `200` |
| `POST` | `/api/v1/businesses/{partyId}/dormant` | `markBusinessDormant` | `200` |
| `POST` | `/api/v1/businesses/{partyId}/defunct` | `markBusinessDefunct` | `200` |
| `POST` | `/api/v1/businesses/{partyId}/confirm-closure` | `confirmBusinessClosure` | `200` |
| `POST` | `/api/v1/businesses/{partyId}/closure-request` | `requestBusinessClosure` | `200` |
| `POST` | `/api/v1/businesses/{partyId}/addresses` | `addBusinessAddress` | `200` |
| `GET` | `/api/v1/parties/{partyId}/phones` | `getPartyPhones` | `200` |
| `GET` | `/api/v1/parties/{partyId}/identity-documents` | `getPartyIdentityDocuments` | `200` |
| `GET` | `/api/v1/parties/{partyId}/emails` | `getPartyEmails` | `200` |
| `GET` | `/api/v1/parties/{partyId}/consents` | `getPartyConsents` | `200` |
| `GET` | `/api/v1/parties/{partyId}/addresses` | `getPartyAddresses` | `200` |
| `GET` | `/api/v1/customers/{partyId}/financial-profile` | `getCustomerFinancialProfile` | `200` |
| `GET` | `/api/v1/customers/{customerId}` | `getCustomerInfo` | `200` |
| `GET` | `/api/v1/consents/catalog` | `getConsentCatalog` | `200` |
| `GET` | `/api/v1/businesses/{businessId}` | `getBusinessInfo` | `200` |
| `DELETE` | `/api/v1/customers/{partyId}/id-documents/{taxId}` | `removeTaxId` | `200` |
| `POST` | `/api/v1/parties/{partyId}/industry-classifications` | `createIndustryClassification` | `200` |
| `POST` | `/api/v1/parties/{partyId}/attributes` | `createPartyAttribute` | `200` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`AssetFinanceAgreementDTO`, `ConsentCatalogResponse`, `ContractDTO`, `CustomerFinancialProfileDTO`, `CustomerSearchResultDTO`, `EmailContactDTO`, `EnrichedPartyDTO`, `FilterOptions`, `FilterRequestPartyDTO`, `IndustryClassificationRequest`, `LegalEntityDTO`, `LoanApplicationDTO`, `LoanServicingCaseDTO`, `NaturalPersonDTO`, `PaginationRequest`, `PaginationResponse`, `PaginationResponseEmailContactDTO`, `PaginationResponsePhoneContactDTO`, `PartyAttributeRequest`, `PartyDTO`, `PersonalLoanAgreementDTO`, `PhoneContactDTO`, `RangeFilter`, `RangeObject`, `RegisterAddressCommand`, `RegisterBusinessCommand`, `RegisterConsentCommand`, `RegisterCustomerCommand`, `RegisterEconomicActivityLinkCommand`, `RegisterEmailCommand`, `RegisterIdentityDocumentCommand`, `RegisterLegalEntityCommand`, `RegisterNaturalPersonCommand`, `RegisterPartyCommand`, `RegisterPartyGroupMembershipCommand`, `RegisterPartyProviderCommand`, `RegisterPartyRelationshipCommand`, `RegisterPartyStatusEntryCommand`, `RegisterPepCommand`, `RegisterPhoneCommand`, `UpdateAddressCommand`, `UpdateBusinessCommand`, `UpdateConsentCommand`, `UpdateCustomerCommand`, `UpdateEmailCommand`, `UpdatePartyRelationshipCommand`, `UpdatePhoneCommand`, `UpdatePreferredChannelCommand`

## Contract explorer

<swagger-ui src="../contracts/domain-customer-people/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
