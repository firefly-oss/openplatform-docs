# Exact document template bindings

Configuration owns tenant-specific selection and lifecycle. Masters owns the global template catalog and immutable published revisions. A binding retains an exact revision identity and digests; it never contains template content, schema, CSS or a parallel catalog. This stage does not render, issue or store generated documents.

## Selection

Every request supplies tenant, document purpose, product scope, channel, jurisdiction, locale and effective business instant. Keys are exact and case-sensitive (PostgreSQL `C` collation), without trimming, case folding, Unicode normalization or aliases. `CONTRACT` and `contract` are different keys. There is no priority, latest-version, tenant default, locale fallback or jurisdiction fallback.

`productScope=NONE` requires an absent product ID and matches only a NONE request. `EXACT` requires a canonical lowercase UUID and matches only that product ID. NONE does not mean every product. The channel ID and code must identify the same active, enabled channel owned by the tenant. An operational tenant has `active=true` and the active tenant-status entry whose code is exactly `ACTIVE`; an active SUSPENDED catalog entry does not make a tenant operational.

The half-open interval is `[effectiveFromEpochMillis,effectiveToEpochMillis)`. Start is required; null end means unbounded. The API supports UTC epoch milliseconds from 1900-01-01 (`-2208988800000`) through 9999-12-31T23:59:59.999 (`253402300799999`). Both service and database enforce that range and a strictly later end. New fields use integer milliseconds so the existing SDK local-date-time setting cannot discard an offset. An interval ending at 2000 does not match instant 2000; an adjacent interval starting there does.

An exact master pin carries revision ID, template ID/code/version/locale, media type, `MASTERS_JSON_V1`, and lowercase SHA-256 source/content/schema/style digests. The binding locale must equal the pin locale. A live check uses the generated masters SDK to GET the revision and resolve the exact tuple, compares every pin, and requires PUBLISHED plus eligible master source. Retired or mismatched revisions cannot resolve for new use, including a past business instant. Configuration does not inspect, reserialize or copy canonical template/schema strings; the renderer must retrieve those exact strings from masters later.

## Commands and history

The prefix is `/api/v1/document-template-bindings/tenants/{tenantId}`:

| Method and suffix | Operation |
| --- | --- |
| POST | Create DRAFT with `actionId` and immutable `definition` |
| GET `/{bindingId}` | Read retained metadata and transition history |
| POST `/{bindingId}/activate` | Activate with `actionId` |
| POST `/{bindingId}/retire` | Retire with `actionId` and reason |
| POST `/{bindingId}/replace` | Replace immediately with `actionId`, `replacementBindingId` and reason |
| GET `/resolve` | Exact query: `documentPurpose`, `productScope`, optional `productId`, `channelCode`, `jurisdiction`, `localeCode`, `atEpochMillis` |

Create and activate validate current master/source eligibility. DRAFT definitions may overlap. ACTIVE intervals at the same exact selection key cannot overlap. A tenant row lock serializes managed commands; a database trigger uses the same lock and checks overlap for direct state updates. Restrictive foreign keys protect tenant/channel/branding history and channel ownership/code. Stored binding definitions cannot be edited or deleted. State is DRAFT -> ACTIVE -> RETIRED, or DRAFT -> RETIRED; it cannot reactivate.

Action identity is scoped to the tenant. Creation replays only the same immutable definition. Activation replays only the same activation action. Retirement additionally pins the reason. Reusing an action for another operation or changing its intent returns 409. A successful replay returns current retained metadata: replaying activation after retirement returns RETIRED and never reactivates. A same-intent creation replay does not repeat current-master eligibility checks because it creates no new use.

Replacement requires an ACTIVE old binding and an exact-selection-key DRAFT whose interval contains the current service instant. One transaction retires the old binding with the successor ID and activates the successor. Any failure rolls back both transitions. It preserves both original intervals. Same-intent replacement replay returns that successor's current metadata, even if the successor later retired; changing the successor or reason conflicts. Use adjacent immutable intervals for scheduled changes.

Retirement is immediate for selection. Historical GET and retirement do not contact masters and remain available after source changes or a masters outage. Historical metadata is not evidence that a binding is currently eligible.

## Branding pins

Branding is explicit: `NONE` carries no reference; `EXACT` carries the existing tenant-branding ID and version. EXACT captures a `CONFIG_DOCUMENT_BRAND_V1` digest of issuer display name (`tenants.legal_entity_name`), primary/secondary/accent/background/text colors and font family. It stores a reference and digest, not a second branding body. Resolution returns a typed view only when the existing active row, version and content still match. Colors must be six-digit hexadecimal CSS colors; issuer name must be present. Custom CSS, logos, external assets and arbitrary branding metadata are excluded. NONE never selects a default brand.

`CONFIG_DOCUMENT_BRAND_V1` and `CONFIG_DOCUMENT_BINDING_INTENT_V1` hash UTF-8 `algorithm + LF + JSON`; typed record properties sort alphabetically, nulls remain explicit and JSON is compact. A private fixed mapper keeps digest bytes independent of global application JSON formatting. Definition JSONB is metadata-only, restricted to contract keys, and checked against the flat selection columns. It is not the master's canonicalization algorithm.

## Trusted access and deployment

Every operation authorizes before repository or downstream access through Jafly `SecurityContextPort` and `PolicyDecisionPort`. Actions are `config.document-template-binding.read`, `.write`, `.activate`, `.retire`, `.replace`, `.resolve`. The policy receives the exact selection fields for create/resolve and tenant/binding identity for binding commands, before repository access. Request context cannot override the trusted target tenant. The validated principal supplies the actor and tenant. Request bodies, path IDs and X-Actor/X-Tenant headers provide no authority. Missing context/policy, invalid subject, denial, errors or unimplemented obligations return 403.

Cross-tenant delegation needs all three: the validated principal's `config.document-template.delegate` authority, its trusted `documentTemplateBindingTenants` collection containing the canonical target tenant UUID, and a permitting action/resource policy decision. An allowlist supplied outside the validated security context has no effect. Deployments must provide authentication/signature validation and policy adapters; the ordinary executable has no synthetic trust provider and denies these routes without them. Unrelated configuration CRUD is outside this bounded authorization change.

Outbound masters access reuses Jafly `OAuth2ClientHelper` client_credentials and the genuine masters SDK. Supply deployment properties through environment/configuration:

| Property | Purpose |
| --- | --- |
| `firefly.document-bindings.masters.base-url` | Masters API base URL |
| `.token-uri` | OAuth2 token endpoint |
| `.client-id` / `.client-secret` | Deployment-managed service credentials |
| `.scopes` | Explicit service scopes permitted for master read and resolve |
| `.allow-loopback-http` | Default false; test/private-loopback HTTP only |

URLs require HTTPS unless explicitly allowing HTTP on localhost/127.0.0.1/::1; URL credentials, query and fragment are rejected. Caller bearer tokens are never relayed. Token acquisition has a four-second timeout and no retry; the complete remote verification has a ten-second timeout. SDK responses are bounded to 2 MiB in memory. Missing service configuration, token failure, upstream authorization failure and transport/timeouts fail closed with 503. An unavailable/retired/mismatched pinned revision is 409; an incomplete upstream revision is 502. No fallback request follows a failure.

Local resolution holds the tenant transaction and source row locks while observing masters, then rechecks the local lifecycle/version. It returns `masterVerifiedAtEpochMillis`, an observation time. There is no cross-service transaction: masters may retire immediately after observation. This response is not a lease, capability or issuance grant. Generation must revalidate when it performs its own issuance operation.

## SDK usage

Use generated `DocumentTemplateBindingsApi`, not a private HTTP replacement. Build a `DocumentTemplateBindingCreateRequest` from a `DocumentTemplateBindingDefinition`, including an exact `DocumentTemplateMasterReference` obtained from the published masters SDK response and an explicit `DocumentBindingBrandReference`. All identifier strings must be canonical lowercase UUIDs. The SDK exposes the epoch fields as Long.

```java
var draft = bindings.createDocumentTemplateBinding(tenantId, request, null).block();
var active = bindings.activateDocumentTemplateBinding(tenantId, draft.getBindingId().toString(),
    new DocumentTemplateBindingActionRequest().actionId(actionId), null).block();
var selected = bindings.resolveDocumentTemplateBinding(tenantId, "CONTRACT", "NONE", "WEB", "US",
    exactLocale, businessInstantEpochMillis, null, null).block();
```

Obtain caller credentials from the deployment's trusted security facility. Reuse an action ID only for retries of the same command. Retain returned binding/revision identity and digests for later immutable generation provenance; do not treat the response as completed generation.

## Verification

Run the normal Maven reactor with Java 25 and a disposable PostgreSQL17 container runtime. The SDK's Failsafe integration suite launches unchanged executable config and masters jars against separate private databases, calls the genuine config SDK, and authenticates outbound masters SDK calls through a private client_credentials endpoint. Test-only loader.path code verifies signed synthetic JWT claims and action-specific policy; it is absent from the production jars. A separate ordinary-java-jar probe verifies missing trusted ports deny access. No host/shared database is used. Independent review and the broader renderer/document library remain separate gates.
