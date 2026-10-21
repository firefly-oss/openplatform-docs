# Channel

This page is generated from `exp-channel-management-sdk/src/main/resources/openapi.yml`.
Core and domain contracts stay in each repository.
A journey call is identity, then access, then a decision only when the operation creates risk, then the domain port.
Read the path, then the example, then the panel rendered from the spec.

## GET /api/v1/experience/channel/master-data

All reference master data.

Returns all reference data (countries, currencies, document types) required for form rendering and validation.

This operation's spec does not document a separate refusal body.

```text
// request GET /api/v1/experience/channel/master-data
// no request body declared

// response
// 200 OK
// schema: MasterDataDTO
{
  // countries: array, optional
  // currencies: array, optional
  // documentTypes: array, optional
  // employmentStatuses: array, optional
  // contractTypes: array, optional
  // housingTypes: array, optional
  // maritalStatuses: array, optional
  // loanPurposes: array, optional
  // sectors: array, optional
  // assetTypes: array, optional
  // legalForms: array, optional
  // employeeRanges: array, optional
  // representativeRoles: array, optional
}
```

## GET /api/v1/experience/channel/languages/{localeId}

Language detail.

Retrieves a single language entry by its locale identifier.

This operation's spec does not document a separate refusal body.

```text
// request GET /api/v1/experience/channel/languages/{localeId}
// no request body declared

// response
// 200 OK
// schema: LanguageDTO
{
  // localeId: string; identifier, optional
  // name: string, optional
  // nativeName: string, optional
  // default: boolean, optional
}
```

## GET /api/v1/experience/channel/languages

Available languages and locales.

Lists all language/locale entries available for this channel.

This operation's spec does not document a separate refusal body.

```text
// request GET /api/v1/experience/channel/languages
// no request body declared

// response
// 200 OK
// no fields declared
```

## GET /api/v1/experience/channel/init

Full channel initialization.

Returns languages, active branding, and reference master data in a single call. Intended for frontend bootstrap — minimises round-trips on app start.

This operation's spec does not document a separate refusal body.

```text
// request GET /api/v1/experience/channel/init
// no request body declared

// response
// 200 OK
// schema: ChannelInitDTO
{
  // languages: array, optional
  // branding: value, optional
  // masterData: value, optional
}
```

## GET /api/v1/experience/channel/branding

Active channel branding.

Retrieves the active visual branding configuration for this channel.

This operation's spec does not document a separate refusal body.

```text
// request GET /api/v1/experience/channel/branding
// no request body declared

// response
// 200 OK
// schema: BrandingDTO
{
  // logoUrl: string, optional
  // primaryColor: string, optional
  // secondaryColor: string, optional
  // theme: string, optional
}
```

The panel below is the same file. Open an operation there after you have read its example.

<swagger-ui src="specs/channel/openapi.yml"></swagger-ui>
