# Configure governed document templates

A document purpose identifies the business output, such as an account agreement or policy schedule. Masters owns its published localized template. Configuration decides exactly when a tenant, product and channel may select that revision. Document core owns the later rendering and retained content. This tutorial configures selection; it does not create a downloadable or signed document.

## Prepare the owning records

Use the matching [masters](../api/services/core-common-reference-master-data.md) and [configuration](../api/services/core-common-config-mgmt.md) SDKs. Deploy trusted caller authentication/policy and the configuration service's masters OAuth client. Work with a disposable tenant and explicitly authorized synthetic resources first.

Before creating a binding:

1. Create the tenant and select an operational tenant-status entry. Both records must be active and the status code must be exactly `ACTIVE`. An active status catalog entry named `SUSPENDED` does not make a tenant operational.
2. Create an active, enabled channel owned by that tenant. Retain its ID and exact channel code; a channel belonging to another tenant is invalid.
3. Author the global template and active localization in masters. Publish the explicit version and locale. Preserve the returned revision ID, parent identity, canonicalization version and source/content/schema/style digests. Read the [revision guide](../reference/service-guides/document-template-revisions.md) for exact JSON-schema authoring and publication.
4. Decide the document purpose, explicit product scope, jurisdiction, locale and effective window. These are institution/product choices; the platform does not infer a legal form from a country name or choose a default locale.

## Define the exact selection

| Field | Required meaning |
| --- | --- |
| `documentPurpose` | Exact business-purpose key, such as a deployment's `ACCOUNT_AGREEMENT` |
| `productScope` | Explicit `NONE` or `EXACT` |
| `productId` | Absent for NONE; canonical product UUID for EXACT |
| `channelConfigId`, `channelCode` | The same active tenant-owned channel |
| `jurisdiction` | Exact configured jurisdiction key |
| `localeCode` | Exact locale of the published master revision |
| `effectiveFromEpochMillis` | Inclusive UTC start |
| `effectiveToEpochMillis` | Exclusive UTC end; null means unbounded |
| `masterReference` | Exact published revision identity and all returned digests |
| `branding` | Explicit NONE, or EXACT existing tenant-branding ID/version |

Keys are case-sensitive. There is no trimming, case folding, Unicode normalization, latest revision, priority or fallback. `NONE` means the selection has no product; it never means every product. An EXACT request cannot select a NONE binding when its product is absent from configuration. Jurisdiction and locale have the same strict behavior.

The supported UTC range is 1900 through 9999, at millisecond precision. For example, an interval `[1000, 2000)` includes instant 1000 and excludes instant 2000; an adjacent `[2000, 3000)` can start there. These small values illustrate interval arithmetic, not a suggested financial effective date. Use the actual business instant in deployment. Integer epoch fields preserve time exactly through the existing generated SDK configuration, without losing a timezone offset.

## Create, activate, and resolve through the SDK

The [complete typed Java example](../examples/DocumentTemplateBindingsExample.java) uses the real generated configuration and masters classes. Provide SDK clients configured with trusted credentials and URLs, a previously published template code/version, owner-created tenant/channel IDs, and stable creation/activation action IDs. The example copies every pin from the actual masters response; it does not invent a digest or template ID.

```java
var selected = DocumentTemplateBindingsExample.createAndResolve(
        mastersApi, configurationBindingsApi, templateCode, explicitVersion,
        new DocumentTemplateBindingsExample.Selection(
                tenantId, channelId, channelCode, documentPurpose, jurisdiction, locale,
                effectiveFromEpochMillis, effectiveToEpochMillis, businessInstantEpochMillis,
                createActionId, activateActionId));
```

The example selects product scope NONE and branding NONE explicitly. For an EXACT product, set the definition's `ProductScopeEnum.EXACT`, supply `productId`, and resolve with scope `EXACT` and that same ID. For EXACT branding, supply the existing tenant-branding ID and version; there is no default-brand lookup.

Creation stores an immutable DRAFT. Activation rechecks live master/source eligibility and rejects an overlapping ACTIVE binding at the same exact selection key. Overlapping drafts may exist; they cannot both activate. Resolution requires exactly one eligible ACTIVE definition for the requested business instant. Zero matches returns 404; ambiguity or a changed/retired pin returns 409. It never chooses the first row.

Retain the returned binding identity, exact master pins, and `masterVerifiedAtEpochMillis`. The timestamp records observation. Masters can retire immediately afterward, so the response is not a lease or issuance grant. A renderer must validate eligibility when performing its own issuance operation. No content, schema body or stylesheet is copied into configuration.

## Change a template without rewriting history

Publish a new masters revision, then create a new binding with its exact pins. Definition fields never change after creation. For a scheduled change, use adjacent immutable effective windows. For an immediate replacement, call `replaceDocumentTemplateBinding` with the ACTIVE old binding ID, an exact-selection-key DRAFT successor effective now, a stable action ID and reason.

Replacement retires the old binding and activates the successor in one local transaction. Failure leaves both previous states intact. Both original intervals and the successor association remain retained. A later retirement does not delete content or historical metadata in masters/configuration.

Action IDs are tenant-scoped command identities. Reuse an ID only for the same intent. Changing a definition, successor or reason under an existing action conflicts. A successful retry returns current retained metadata: replaying activation after retirement returns RETIRED and never reactivates it. A replacement retry returns its original successor even when that successor subsequently retired.

Retirement stops new selection immediately, including selection for a past business instant. Historical GET still returns the original definition and transition metadata. Historical access and retirement do not require masters to be available; new activation/resolution does.

## Pin tenant branding deliberately

EXACT branding pins an active existing tenant-branding row/version and the tenant's issuer display name. Configuration computes `CONFIG_DOCUMENT_BRAND_V1` over its typed issuer/color/font view. A later version, color, font or issuer change invalidates new resolution until the binding is deliberately replaced. The returned typed view is configuration data; external logos, arbitrary CSS and legal issuer verification are separate responsibilities.

NONE returns no branding and never selects a default brand. This distinction lets a document type require an explicit institution-approved brand without accidentally inheriting unrelated channel decoration.

## Configure service access

Every binding operation checks Jafly trusted principal/policy ports before repository or downstream access. Create/resolve policy receives the exact selection fields. The requested tenant must match the validated principal or an explicitly permitted delegation; request context cannot override that target. Unsupported obligations deny access. Cross-tenant service delegation requires explicit delegation authority, a trusted allowlist containing the target tenant, and policy permission. Path/body IDs and identity headers provide no authority.

Configuration calls masters through its own client_credentials service identity. It never relays the caller's bearer token. Supply these full property names through deployment configuration/secrets:

```yaml
firefly:
  document-bindings:
    masters:
      base-url: ${MASTERS_API_URL}
      token-uri: ${MASTERS_TOKEN_URL}
      client-id: ${MASTERS_CLIENT_ID}
      client-secret: ${MASTERS_CLIENT_SECRET}
      scopes: ${MASTERS_READ_RESOLVE_SCOPES}
      allow-loopback-http: false
```

Use trusted HTTPS endpoints. Explicit loopback HTTP is available for private local qualification only. Missing credentials/configuration, token failure, upstream refusal or transport timeout returns 503; an incomplete masters response returns 502. There is no substitute revision after a failed observation.

For troubleshooting, distinguish missing selection (404), invalid input (400), denied authority (403), conflicting/retired/mismatched source or overlapping activation (409), and unavailable dependencies (502/503). Preserve the original action IDs and inspect retained state before retrying. The [configuration service guide](../reference/service-guides/document-template-bindings.md) specifies the complete commands, pin algorithms, service timeouts and retention behavior. These [service guide snapshots](../reference/service-guides/index.md) identify the current local source separately from a published release. Continue with [document content and signing](documents.md) for the separate generation/storage path.
