# Governed document issuance

This producer issues actual immutable HTML content from an exact tenant configuration binding and an exact published master template revision. It stores the bytes in PostgreSQL with an ECM document, version 1, receipt, fact snapshot and retention association in one transaction. It does not calculate financial facts, sign documents, deliver them or provide complete financial/insurance stationery coverage. Domain fact assembly and contract attachment are the next integration stage.

## Authority and ownership

Masters owns global template content, localized immutable revisions and exact canonical schema/source strings. Configuration owns explicit tenant/purpose/product/channel/jurisdiction/locale/effective selection and pinned typed branding. Document core owns issuance, exact content/version identity, immutable provenance and retained readback. No template content is copied into a competing configuration catalog.

Every operation requires deployment-provided Jafly SecurityContextPort and PolicyDecisionPort. Missing ports or a missing/denied validated principal fail with HTTP 403 before repository/downstream operations. Tenant/actor headers and body UUIDs never establish authority. A matching principal tenant is required; cross-tenant services additionally need authority `ecm.document.delegate`, the signed `documentIssuanceTenants` allowlist and a permitting policy. Issuance/correction also requires `ecm.document.fact-producer`.

| Operation | Required current resource policy |
| --- | --- |
| Issue or same-action replay | `ecm.document.issue` and `ecm.document.retention.bind` |
| Correction with predecessor | Both issuance permissions and `ecm.document.correct` |
| Receipt read | `ecm.document.read` |
| Exact content read | `ecm.document.content.read` |

Policy resources are `tenant/{tenantId}/{resourceType}/{resourceId}`. Context includes exact selection, pins, fact digest/contract and retention identity/date. Raw facts, template source and rendered content are excluded. The deployment retention policy adapter must recognize the requested policy/version and enforce the applicable date/minimum; generic tenant retention settings are not a legal policy registry. Missing retention permission fails closed. This stage implements retained immutable evidence, not automatic purge/legal-hold scheduling or a jurisdictional compliance certification.

## API and genuine SDK

The route base is `/api/v1/document-issuances/tenants/{tenantId}/resources/{resourceType}/{resourceId}`. Resource type is an exact uppercase code; IDs use canonical lowercase UUID strings.

- POST `issueGovernedDocument`:200 for first issuance and identical replay.
- GET `/{issuanceId}` `getGovernedDocumentIssuance`: retained receipt and provenance, without raw facts.
- GET `/{issuanceId}/content` `getGovernedDocumentContent`: exact stored UTF-8 content, immutable version ID, SHA-256, byte length and media type.

The generated `GovernedDocumentIssuanceApi` accepts a typed `DocumentIssueRequest`; its optional X-Idempotency-Key parameter is independent of the durable body action ID. Durable correctness uses `(tenantId, actionId)` and exact action intent, not an in-memory HTTP response cache.

The governed POST explicitly bypasses transport response caching. Its existing optional header remains accepted for SDK compatibility, but every attempt reaches native current authorization and action replay. A retained success cannot authorize a caller whose resource or policy permission has since been withdrawn. This endpoint rule does not qualify unrelated legacy mutation routes.

The request contains `actionId`, `definition` and an exact `factsJson` string. Definition contains:

- Selection: documentPurpose, explicit productScope NONE/EXACT, optional productId, channelCode, jurisdiction, localeCode and businessAtEpochMillis.
- Expected pins: bindingId, bindingStateVersion, revisionId and sourceDigest. Resolve/pin deliberately through the configuration SDK before issuance; the producer independently resolves again.
- Fact contract code/version and ordered source references: systemCode, resourceType, resourceId, sourceVersion and observedAtEpochMillis.
- Display name, existing ECM document type and classification of at least CONFIDENTIAL.
- Retention policy code/version/until; optional predecessorIssuanceId for a new correction under the same tenant/business resource.

Timestamps are epoch-millisecond Long values within 1900–9999 UTC. Storage uses whole seconds plus an exact millisecond remainder, including the upper supported epoch. NONE and EXACT are distinct exact selection keys: neither provides a fallback for the other. There is no latest revision, alternate locale or jurisdiction fallback. Unsupported document types, media and style profiles reject explicitly.

Facts remain an exact JSON string throughout SDK transport and persistence. `JSON_UTF8_EXACT_V1` hashes its raw UTF-8 bytes, so whitespace/key-order changes change action intent. Keep one authoritative fact serialization and action ID for retries. Do not deserialize published master canonical strings into generic Maps and reconstruct them: large integers and exact decimals must retain their original meaning. The producer recomputes all four master raw-string digests and verifies identity/canonicalization against the binding pin.

## Atomicity, replay and historical reads

A native action insert atomically claims the tenant/action key. Concurrent calls wait on PostgreSQL uniqueness; one transaction renders/persists and the rest read the committed authoritative receipt. Different intent returns HTTP 409. The local transaction contains the action, document, version, actual bytea content, exact facts and immutable receipt. Worker/schema/source/network/SQL failure rolls back all of them. A lost committed response or process restart can be retried with the same authorized action.

Configuration/master eligibility is observed before rendering and again immediately before persistence. A change between those observations rejects the issuance. These are separate services: retirement may occur after the final observation. Recorded observation times are not an issuance grant or a cross-service transaction claim.

Replay uses the retained receipt and requires current issuance/retention authority; it does not re-render or require current upstream availability/publication. Historical receipt/content reads require current read authority and survive source retirement/outage. Retention expiry does not erase readback. A correction creates a new document/version 1/receipt linked to the retained predecessor; no in-place correction, appended governed version or deletion compensation occurs.

Database constraints verify content size/SHA-256, closed definition/provenance shapes and receipt/action/tenant/resource/document/version/retention associations. Parent and version creation actor/time must match the retained receipt. Published parent/version/action/receipt/content rows cannot mutate or disappear, including cascades. Legacy NULL-marker documents cannot be adopted by UPDATE, and legacy versions cannot be reparented into governed evidence. Facts are private immutable generation evidence, not returned in public receipts.

Malformed requests return400, denied authority403, absent exact retained records404, intent/source/integrity conflicts409, unsupported schema/facts/rendering profiles422, incomplete upstream responses502, unavailable credentials/services or worker saturation503, and worker/operation deadlines504. Error responses exclude raw facts, rendered content and database exception text.

## Rendering profile and worker limits

`GOVERNED_XHTML_V1` renders actual repeated rows, conditions and financial text using the shared Jafly restricted renderer. Templates use JSON-compatible `facts`, trusted `issuance` context and typed `branding`. Arbitrary objects, class/API access, include/import loaders, scripts/events, author CSS/assets and active/unknown HTML are unavailable. Master styleContent must be exactly empty. The server adds typed issuer/colors, escaped font text, a print stylesheet and a restrictive CSP to the validated fragment. The outer HTML language is the exact pinned revision locale, which must be a well-formed BCP47 language tag for this profile. No English, PDF or text/plain fallback occurs.

The shared Draft2020-12 offline schema engine validates exact facts, dates and numbers under its supported closed local-acyclic reference profile. This is not arbitrary unrestricted JSON Schema support. Source/schema/fact parsing, output, depth/nodes and numeric expansion are bounded. Empty or invisible-only output fails.

Each render/schema operation runs in a private child JVM with 96 MiB Java heap, a five-second parent wall deadline and termination/forced termination/bounded reap. Two workers are allowed; saturation rejects rather than waiting in an unbounded queue. Protocol frames are capped at 2 MiB and final content at 1 MiB. The trusted deployed executable/classpath supplies process arguments; templates and request fields do not supply worker commands, arguments, files or environment. The inherited environment is cleared; macOS JVM startup may synthesize __CF_USER_TEXT_ENCODING. Credentials are not passed to workers.

Tracer checks are cooperative at template-element boundaries and cannot interrupt one expensive expression. The child lifecycle bounds worker wall time and Java heap, not total native RSS or an OS CPU quota. This is a restricted capability profile and process lifecycle, not an OS/container sandbox certification.

## Downstream service configuration

Configure both `firefly.documents.governed.configuration.*` and `firefly.documents.governed.masters.*`: base-url, token-uri, client-id, client-secret and scopes. Values come from deployment environment/secrets. HTTPS is required; allow-loopback-http is an explicit private qualification option. The producer uses genuine generated SDKs and OAuth2ClientHelper client_credentials with bounded timeouts and no caller bearer/header relay. Configuration service tokens must contain actual validated tenant delegation; a requested tenant parameter is not authority. Missing credentials fail with HTTP 503 and never select sandbox templates.

Legacy sandbox generation now requires explicit sandbox template/storage/render selectors. Missing selectors create no implicit sandbox. Legacy tenantless calls with core selectors fail clearly and direct callers to the governed core SDK. The governed HTTP producer always uses genuine configuration/masters clients and native database persistence.

## Existing ECM and signing compatibility

Document and version IDs, tenant strings, parent/version fields and existing generated SDK method signatures remain compatible. Current legacy document access requires `ecm.document.legacy.read` or `.content.read` in addition to the actual stored governed business-resource permission. Legacy writes require `.legacy.write`; managed update/upload/version/create/delete paths reject409 before external effects. Global legacy document/search and child collections omit governed rows and constrain validated tenant before pagination/count. Exact parent collections authorize the stored business resource and constrain the path document/folder in SQL. Exact get/download and issuance routes remain available. Metadata, tag, permission and indirect signing request/verification paths use the same parent/tenant/version checks; governed sidecar mutations reject before provider effects. Native guards reject managed sidecars, forged signature associations, cross-tenant/version mismatch, reparenting and protected cascades. Legacy ordinary cascades and accepted provider-managed signature history remain intact.

The content metadata GET remains `/api/v1/documents/{documentId}/metadata`. Sidecar collection metadata GET is `/api/v1/documents/{documentId}/metadata/entries/list`, resolving the former duplicate route; keyed metadata GET/PUT/DELETE and creation POST retain their paths. The generated metadata SDK list operation uses the new route. New sidecar audit actor/tenant comes from trusted context, and updates preserve stored creation metadata and identity.

New governed documents reject the old signing submission path because it does not bind provider bytes to an exact version/digest. Existing managed legacy signing IDs/history remain intact. Version-aware provider signing is a separate integration gate; ISSUED never means SIGNED or DELIVERED.

## Qualification

Private tests use synthetic signed principals, explicit scope/resource/retention policies, client-credential exchange and disposable PostgreSQL 17 on random loopback ports. The SDK integration runs the actual document/configuration/masters executable jars and genuine SDKs. It separately retains a reconciled two-decimal synthetic USD statement and an explicitly labeled exact-number transport instrument; schema validation does not establish financial calculation authority. It verifies substantive branded financial content, exact decimal/integer/Unicode transport, immutable byte readback through the existing case-verifier SDK methods, concurrency, restart, denied actions and source/credential failures. Ordinary java-jar without trusted adapters is a separate fail-closed probe. This guide does not claim domain fact assembly, all document types or independent acceptance until their separate gates complete.
