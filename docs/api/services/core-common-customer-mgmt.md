# core-common-customer-mgmt

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/core-common-customer-mgmt) · [Complete contract](../contracts/core-common-customer-mgmt/openapi.yml)

**Provenance:** base revision `194ebf43f14a83d0fd7cde305a9b8f172a98cac3`; current copied input SHA256 `672c7d74fe671a2a6aba56000e18997456dd9289a7a29ac31e0c6b1ca9630f34`. [Baseline source](https://github.com/fireflysoftwaresolutions/core-common-customer-mgmt/blob/194ebf43f14a83d0fd7cde305a9b8f172a98cac3/core-common-customer-mgmt-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/parties/{partyId}` | `getPartyById` | `200`, `404` |
| `PUT` | `/api/v1/parties/{partyId}` | `updateParty` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/parties/{partyId}` | `deleteParty` | `204`, `404` |
| `GET` | `/api/v1/parties/{partyId}/politically-exposed-persons/{pepId}` | `getPoliticallyExposedPersonById` | `200`, `404` |
| `PUT` | `/api/v1/parties/{partyId}/politically-exposed-persons/{pepId}` | `updatePoliticallyExposedPerson` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/parties/{partyId}/politically-exposed-persons/{pepId}` | `deletePoliticallyExposedPerson` | `204`, `404` |
| `PUT` | `/api/v1/parties/{partyId}/party-statuses` | `updatePartyStatus` | `200`, `400`, `404` |
| `POST` | `/api/v1/parties/{partyId}/party-statuses` | `createPartyStatus` | `201`, `400`, `404` |
| `GET` | `/api/v1/parties/{partyId}/party-providers/{partyProviderId}` | `getPartyProviderById` | `200`, `404` |
| `PUT` | `/api/v1/parties/{partyId}/party-providers/{partyProviderId}` | `updatePartyProvider` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/parties/{partyId}/party-providers/{partyProviderId}` | `deletePartyProvider` | `204`, `404` |
| `GET` | `/api/v1/parties/{partyId}/party-group-memberships/{partyGroupMembershipId}` | `getPartyGroupMembershipById` | `200`, `404` |
| `PUT` | `/api/v1/parties/{partyId}/party-group-memberships/{partyGroupMembershipId}` | `updatePartyGroupMembership` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/parties/{partyId}/party-group-memberships/{partyGroupMembershipId}` | `deletePartyGroupMembership` | `204`, `404` |
| `GET` | `/api/v1/parties/{partyId}/party-economic-activities/{partyEconomicActivityId}` | `getPartyEconomicActivityById` | `200`, `404` |
| `PUT` | `/api/v1/parties/{partyId}/party-economic-activities/{partyEconomicActivityId}` | `updatePartyEconomicActivity` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/parties/{partyId}/party-economic-activities/{partyEconomicActivityId}` | `deletePartyEconomicActivity` | `204`, `404` |
| `GET` | `/api/v1/parties/{partyId}/natural-persons/{naturalPersonId}` | `getNaturalPersonById` | `200`, `404` |
| `PUT` | `/api/v1/parties/{partyId}/natural-persons/{naturalPersonId}` | `updateNaturalPerson` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/parties/{partyId}/natural-persons/{naturalPersonId}` | `deleteNaturalPerson` | `204`, `404` |
| `GET` | `/api/v1/parties/{partyId}/legal-entities/{legalEntityId}` | `getLegalEntityById` | `200`, `404` |
| `PUT` | `/api/v1/parties/{partyId}/legal-entities/{legalEntityId}` | `updateLegalEntity` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/parties/{partyId}/legal-entities/{legalEntityId}` | `deleteLegalEntity` | `204`, `404` |
| `GET` | `/api/v1/parties/{partyId}/industry-classifications/{classificationId}` | `get` | `200` |
| `PUT` | `/api/v1/parties/{partyId}/industry-classifications/{classificationId}` | `update` | `200` |
| `DELETE` | `/api/v1/parties/{partyId}/industry-classifications/{classificationId}` | `delete` | `200` |
| `GET` | `/api/v1/parties/{partyId}/documents/identity/{identityDocumentId}` | `getIdentityDocumentById` | `200`, `404` |
| `PUT` | `/api/v1/parties/{partyId}/documents/identity/{identityDocumentId}` | `updateIdentityDocument` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/parties/{partyId}/documents/identity/{identityDocumentId}` | `deleteIdentityDocument` | `204`, `404` |
| `GET` | `/api/v1/parties/{partyId}/contacts/phone/{phoneContactId}` | `getPhoneContactById` | `200`, `404` |
| `PUT` | `/api/v1/parties/{partyId}/contacts/phone/{phoneContactId}` | `updatePhoneContact` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/parties/{partyId}/contacts/phone/{phoneContactId}` | `deletePhoneContact` | `204`, `404` |
| `GET` | `/api/v1/parties/{partyId}/contacts/email/{emailContactId}` | `getEmailContactById` | `200`, `404` |
| `PUT` | `/api/v1/parties/{partyId}/contacts/email/{emailContactId}` | `updateEmailContact` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/parties/{partyId}/contacts/email/{emailContactId}` | `deleteEmailContact` | `204`, `404` |
| `GET` | `/api/v1/parties/{partyId}/consents/{consentId}` | `getConsentById` | `200`, `404` |
| `PUT` | `/api/v1/parties/{partyId}/consents/{consentId}` | `updateConsent` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/parties/{partyId}/consents/{consentId}` | `deleteConsent` | `204`, `404` |
| `GET` | `/api/v1/parties/{partyId}/attributes/{attributeId}` | `get_1` | `200` |
| `PUT` | `/api/v1/parties/{partyId}/attributes/{attributeId}` | `update_1` | `200` |
| `DELETE` | `/api/v1/parties/{partyId}/attributes/{attributeId}` | `delete_1` | `200` |
| `GET` | `/api/v1/parties/{partyId}/addresses/{addressId}` | `getAddressById` | `200`, `404` |
| `PUT` | `/api/v1/parties/{partyId}/addresses/{addressId}` | `updateAddress` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/parties/{partyId}/addresses/{addressId}` | `deleteAddress` | `204`, `404` |
| `GET` | `/api/v1/parties/relationships/{relationshipId}` | `getPartyRelationshipById` | `200`, `404` |
| `PUT` | `/api/v1/parties/relationships/{relationshipId}` | `updatePartyRelationship` | `200`, `400`, `404` |
| `DELETE` | `/api/v1/parties/relationships/{relationshipId}` | `deletePartyRelationship` | `204`, `404` |
| `POST` | `/api/v1/parties` | `createParty` | `201`, `400` |
| `POST` | `/api/v1/parties/{partyId}/politically-exposed-persons` | `createPoliticallyExposedPerson` | `201`, `400`, `404` |
| `POST` | `/api/v1/parties/{partyId}/politically-exposed-persons/filter` | `filterPoliticallyExposedPersons` | `200`, `400`, `404` |
| `POST` | `/api/v1/parties/{partyId}/party-statuses/filter` | `filterPartyStatuses` | `200`, `400`, `404` |
| `POST` | `/api/v1/parties/{partyId}/party-providers` | `createPartyProvider` | `201`, `400`, `404` |
| `POST` | `/api/v1/parties/{partyId}/party-providers/filter` | `filterPartyProviders` | `200`, `400`, `404` |
| `POST` | `/api/v1/parties/{partyId}/party-group-memberships` | `createPartyGroupMembership` | `201`, `400`, `404` |
| `POST` | `/api/v1/parties/{partyId}/party-group-memberships/filter` | `filterPartyGroupMemberships` | `200`, `400`, `404` |
| `POST` | `/api/v1/parties/{partyId}/party-economic-activities` | `createPartyEconomicActivity` | `201`, `400`, `404` |
| `POST` | `/api/v1/parties/{partyId}/party-economic-activities/filter` | `filterPartyEconomicActivities` | `200`, `400`, `404` |
| `GET` | `/api/v1/parties/{partyId}/natural-persons` | `getNaturalPersonByPartyId` | `200`, `404` |
| `POST` | `/api/v1/parties/{partyId}/natural-persons` | `createNaturalPerson` | `201`, `400`, `404` |
| `POST` | `/api/v1/parties/{partyId}/natural-persons/filter` | `filterNaturalPersons` | `200`, `400`, `404` |
| `GET` | `/api/v1/parties/{partyId}/legal-entities` | `getLegalEntityByPartyId` | `200`, `404` |
| `POST` | `/api/v1/parties/{partyId}/legal-entities` | `createLegalEntity` | `201`, `400`, `404` |
| `POST` | `/api/v1/parties/{partyId}/legal-entities/filter` | `filterLegalEntities` | `200`, `400`, `404` |
| `POST` | `/api/v1/parties/{partyId}/industry-classifications` | `create` | `200` |
| `POST` | `/api/v1/parties/{partyId}/industry-classifications/filter` | `filter` | `200` |
| `POST` | `/api/v1/parties/{partyId}/documents/identity` | `createIdentityDocument` | `201`, `400`, `404` |
| `POST` | `/api/v1/parties/{partyId}/documents/identity/filter` | `filterIdentityDocuments` | `200`, `400`, `404` |
| `POST` | `/api/v1/parties/{partyId}/contacts/phone` | `createPhoneContact` | `201`, `400`, `404` |
| `POST` | `/api/v1/parties/{partyId}/contacts/phone/filter` | `filterPhoneContacts` | `200`, `400`, `404` |
| `POST` | `/api/v1/parties/{partyId}/contacts/email` | `createEmailContact` | `201`, `400`, `404` |
| `POST` | `/api/v1/parties/{partyId}/contacts/email/filter` | `filterEmailContacts` | `200`, `400`, `404` |
| `POST` | `/api/v1/parties/{partyId}/consents` | `createConsent` | `201`, `400`, `404` |
| `POST` | `/api/v1/parties/{partyId}/consents/filter` | `filterConsents` | `200`, `400`, `404` |
| `POST` | `/api/v1/parties/{partyId}/attributes` | `create_1` | `200` |
| `POST` | `/api/v1/parties/{partyId}/attributes/filter` | `filter_1` | `200` |
| `POST` | `/api/v1/parties/{partyId}/addresses` | `createAddress` | `201`, `400`, `404` |
| `POST` | `/api/v1/parties/{partyId}/addresses/filter` | `filterAddresses` | `200`, `400`, `404` |
| `POST` | `/api/v1/parties/relationships` | `createPartyRelationship` | `201`, `400`, `404` |
| `POST` | `/api/v1/parties/relationships/filter` | `filterPartyRelationships` | `200`, `400`, `404` |
| `POST` | `/api/v1/parties/filter` | `filterParties` | `200`, `400` |
| `GET` | `/api/v1/parties/{partyId}/subsidiaries` | `directSubsidiaries` | `200` |
| `GET` | `/api/v1/parties/{partyId}/party-statuses/{partyStatusId}` | `getPartyStatusById` | `200`, `404` |
| `DELETE` | `/api/v1/parties/{partyId}/party-statuses/{partyStatusId}` | `deletePartyStatus` | `204`, `404` |
| `GET` | `/api/v1/parties/{partyId}/owners` | `directOwners` | `200` |
| `GET` | `/api/v1/parties/{partyId}/ancestors` | `ancestors` | `200` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`AddressDTO`, `ConsentDTO`, `EmailContactDTO`, `FilterOptions`, `FilterRequestAddressDTO`, `FilterRequestConsentDTO`, `FilterRequestEmailContactDTO`, `FilterRequestIdentityDocumentDTO`, `FilterRequestLegalEntityDTO`, `FilterRequestNaturalPersonDTO`, `FilterRequestPartyAttributeDTO`, `FilterRequestPartyDTO`, `FilterRequestPartyEconomicActivityDTO`, `FilterRequestPartyGroupMembershipDTO`, `FilterRequestPartyIndustryClassificationDTO`, `FilterRequestPartyProviderDTO`, `FilterRequestPartyRelationshipDTO`, `FilterRequestPartyStatusDTO`, `FilterRequestPhoneContactDTO`, `FilterRequestPoliticallyExposedPersonDTO`, `IdentityDocumentDTO`, `LegalEntityDTO`, `NaturalPersonDTO`, `PaginationRequest`, `PaginationResponse`, `PaginationResponseEmailContactDTO`, `PaginationResponsePartyAttributeDTO`, `PaginationResponsePartyDTO`, `PaginationResponsePartyIndustryClassificationDTO`, `PaginationResponsePhoneContactDTO`, `PartyAncestorDTO`, `PartyAttributeDTO`, `PartyDTO`, `PartyEconomicActivityDTO`, `PartyGroupMembershipDTO`, `PartyIndustryClassificationDTO`, `PartyProviderDTO`, `PartyRelationshipDTO`, `PartyStatusDTO`, `PhoneContactDTO`, `PoliticallyExposedPersonDTO`, `RangeFilter`, `RangeObject`

## Contract explorer

<swagger-ui src="../contracts/core-common-customer-mgmt/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
