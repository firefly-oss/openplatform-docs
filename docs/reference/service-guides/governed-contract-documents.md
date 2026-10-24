# Governed contract document operations

This producer retains an exact contract snapshot, seals the `CONTRACT_DOCUMENT_V1` facts contract, verifies independently issued document bytes, and atomically attaches that immutable evidence to the native contract. It does not turn a document metadata row into generated content. Template content and published revisions belong to masters; tenant selection and activation belong to configuration; document issuance, bytes, versions, provenance and retention belong to document management.

The contract producer does not collect customer or product data through foreign repositories. A separately authorized fact producer supplies typed, source-identified customer/product observations. Contract fields, parties, lines and typed terms are selected from the retained native snapshot. Domain collection through authoritative generated SDKs and kit orchestration are separate consumer stages. `CONTRACT_DOCUMENT_V1/1` is not interchangeable with the stationery-specific account statement, loan agreement or policy facts contracts. This guide does not establish a final branded print/PDF profile.

## Routes and typed SDK

All routes start with `/api/v1/tenants/{tenantId}/contracts/{contractId}`. The generated `ContractDocumentOperationsApi` owns these operations:

| Method and suffix | SDK method | Result |
| --- | --- | --- |
| POST `/document-owner-binding` | `bindContractDocumentOwner` | Exact attested ownership binding |
| POST `/document-operations` | `prepareContractDocument` | `RESERVED` action and captured native source |
| GET `/document-operations/{actionId}` | `getContractDocumentOperation` | Current-authorized operation metadata |
| GET `/document-operations/{actionId}/facts` | `getContractDocumentFacts` | Private snapshot and exact sealed JSON strings |
| POST `/document-operations/{actionId}/seal` | `sealContractDocument` | `READY` exact facts/request |
| POST `/document-operations/{actionId}/issuance` | `recordContractDocumentIssuance` | `ISSUED_PENDING_ATTACHMENT` verified evidence |
| POST `/document-operations/{actionId}/attachment` | `attachContractDocumentIssuance` | `ATTACHED` immutable native association |

Initial success and same-intent replay both return 200. The action UUID and complete retained intent provide business replay protection. The five native POST operations bypass transport response caching. Existing protected legacy POST/PUT/DELETE routes also bypass caching so a repeated request cannot bypass current authorization. Their optional generated SDK `X-Idempotency-Key` argument remains accepted and ignored for compatibility. Safe GET SDK methods retain the existing optional header. No header supplies tenant or actor authority.

Send exact generated request DTOs. The producer rejects duplicate keys, trailing JSON, scalar-to-string coercion, fractional/string revisions, unsupported fields, malformed identifiers and invalid timestamps. Private `coreSnapshotCanonicalJson`, `sealedFactsJson` and `sealedIssueRequestJson` are strings. A consumer issues the exact retained `DocumentIssueRequest`, preserving its `factsJson`; it must not reconstruct facts from a generic map or current mutable data.

## Current authority and ownership

Production requires trusted Jafly `SecurityContextPort` and `PolicyDecisionPort` implementations. Missing principal/policy denies before protected repository or outbound access. Tenant comes from a validated principal or explicit validated signed service delegation, never from a caller UUID alone. The `contracts.document.delegate` authority requires the exact tenant in validated `contractDocumentTenants` attributes.

Policies authorize `contracts.document.{read,write,prepare,facts.read,seal,record-issuance,attach,ownership.bind}` against `tenant/{tenantId}/CONTRACT/{contractId}`. Context includes current/captured revision, action, selection, pins, type, retention and retained digests/receipt identities as applicable. It excludes private fact values. Private fact reads and sealing additionally require `contracts.document.fact-producer`. Audit actors come from the authenticated principal.

Existing unbound contracts are not assigned a tenant from party membership. Enrollment requires an exact signed ownership attestation in validated principal claims, current `ownership.bind` policy and `contracts.document.ownership-authority`. Configure:

```properties
firefly.contracts.documents.ownership.issuer=<exact trusted issuer>
firefly.contracts.documents.ownership.audience=<exact contract service audience>
```

The closed `contractDocumentOwnership` claim contains `contractId`, `tenantId`, `expectedContractRevision`, `actionId`, `attestationId`, `expiresAtEpochMillis`, and `timestampInterpretation: UTC`. Issuer, audience, expiry and the exact tuple are checked. A body claim or broad tenant scope is insufficient. A bound predecessor must already belong to the same tenant; enrollment does not infer or change its ownership. Legacy unbound predecessors remain compatible until enrollment is attempted.

## Snapshot and exact facts

A preparation request names an explicit purpose, product scope `NONE` or `EXACT`, channel, jurisdiction, locale, business instant, exact binding ID/state version, master revision/source digest, semantic contract document type, exact product-version references, retention and display name. There is no latest-version, other-locale, jurisdiction or product fallback.

Native business changes advance `document_source_revision`. Audit-only changes and the document journal/attachment do not advance it. First seal conflicts after a business-source change; an already sealed action retains its original meaning and exact request. Product/customer observations must match the complete selected identity sets and tenant. Role/document type observations identify real semantic master records, not template IDs. Unknown legacy validation formats reject explicitly; no inline rule interpreter is introduced.

The bounded profile supports STRING, ENUM, NUMBER, DECIMAL, MONEY, BOOLEAN, DATE, DATETIME and JSON terms. Stored numeric terms retain the native 20-digit/6-decimal constraint; line quantities retain native precision. JSON terms retain their exact canonical string, including integers above 2^53 and 18-decimal values. This transport precision is not a currency settlement scale or a financial calculation. Legacy timestamp-without-zone source fields are interpreted explicitly as UTC, with half-open effective intervals.

`CONTRACT_DOCUMENT_JSON_V1` sorts object keys, preserves array order, rejects duplicate/trailing/empty/malformed Unicode input and writes exact bounded plain numbers. It is not RFC 8785. The parser is bounded to 2 MiB, depth 64, 1 MiB strings and 128-character numeric input/expansion; JSON term strings are bounded to 32 KiB. Composition allows at most 100 selected parties/lines/terms/products and 100 total source references. The private source query has additional bounded projection checks and refuses unsupported fanout.

## Transaction and concurrency boundary

Application entry points fully consume safe owner/membership/revision/identity observations, release connections, and authorize all required resources outside SQL transactions. Ambient transactions fail closed before calling an extensible policy provider. A short owned native transaction then sets local lock/statement budgets, acquires any per-template nonblocking advisory keys, locks parents in PostgreSQL UUID order and compares the complete approved observation again before effects. Drift conflicts; policy is not silently reused for a changed set. Immutable journal advancement may perform a bounded fresh capture and authorization for same-action concurrency.

Term/template/rule membership uses the stable native namespace `CONTRACT_DOCUMENT_TERM_TEMPLATE`. Old and new template keys cover movement and cascade paths. Raw SQL row triggers use nonblocking acquisition to avoid waiting on an advisory gate while already holding a row. The semantic affected-parent cap is 100; a bounded 101-member projection is authorized before generic refusal, without partial changes or foreign-resource disclosure. Arbitrary SQL still requires its own lock-order analysis and retry handling. Native constraints protect integrity; they do not replace application authorization.

Local transaction budgets are 3 seconds for locks and 8 seconds for statements; policy calls have a separate 5-second reactive budget. Policy and document-service calls occur without local SQL locks. Receipt recording releases capture transactions before the remote observation, then obtains fresh current authority and rechecks local owner/revision/seal before persisting. A failed or denied observation leaves the sealed operation recoverable.

## Issuance, readback and recovery

The document peer is called through its genuine generated SDK using configured service credentials:

```properties
firefly.contract-documents.documents.base-url=https://documents.example
firefly.contract-documents.documents.token-uri=https://identity.example/oauth/token
firefly.contract-documents.documents.client-id=<service client>
firefly.contract-documents.documents.client-secret=<secret from environment or secret store>
firefly.contract-documents.documents.scopes=<current document read and content permissions>
```

`allow-loopback-http=true` is an explicit private qualification option; production URLs require HTTPS. There is no default sandbox peer. Credentials have a 4-second token budget and observation has a 10-second reactive budget, without automatic retries. The peer must independently authorize the exact tenant/CONTRACT/resource/issuance/version and content. A general service credential does not grant arbitrary resource access.

Only candidate `issuanceId` is accepted for recording. The producer independently reads the receipt and UTF-8 content, compares exact action/resource/tenant/full definition/facts digest/pins/provenance/retention, verifies immutable document/version IDs and computes SHA-256 over the actual bytes. Caller-supplied receipt fields are not authority. The V1 renderer is exactly `FREEMARKER_RESTRICTED/1`, `GOVERNED_XHTML_V1`, `text/html`, with the accepted empty style digest and exact configuration branding digest.

G2 `issuedAt` is the action claim timestamp, before catalog observations complete. Catalog observation timestamps are checked against current readback time, not reinterpreted as earlier than the claim. Source observations remain checked against the claim. Invalid/range/future times reject; this profile has zero additional clock-skew tolerance and assumes operational clock synchronization. A peer ahead of the local clock may require a later authorized retry.

If issue succeeds but its response is lost, replay the retained exact request through document SDK. If receipt recording or attachment fails, retain the issued evidence and retry under current authority. The attachment row and `ATTACHED` phase commit atomically; rollback preserves `ISSUED_PENDING_ATTACHMENT`. A lost attachment response returns the same attachment on replay. No compensation deletes an issued document/version or managed attachment, and no cross-service atomicity or issuance grant is implied.

Managed native `contract_document` rows expose existing typed `documentId` plus tenant, issuance, immutable version, media/length and content/facts/source digests. Current-authorized legacy exact reads remain usable. Bound document associations cannot be forged or replaced through legacy CRUD; managed rows cannot be updated/deleted/cascaded through direct SQL. Global legacy filters exclude governed aggregates before both rows and counts; scoped reads require the actual stored parent/tenant and current policy. Truly unbound legacy behavior is retained.

The existing document SDK methods `getDocumentById`, `getDocumentVersion`, and `downloadVersionContentWithResponseSpec(...).bodyToMono(byte[].class)` remain the byte-read path used by evidence consumers. Those consumers must compare both tenant IDs, parent/version identity and exact SHA under current resource/content permission.

## Qualification

Use Java 25, the repository Maven settings/cache and private Testcontainers PostgreSQL 17. The maintained SDK chain requires an explicit `-Dcontract.qualifier.peer-manifest=<accepted immutable peer manifest>`; it checks all copied executables/SDK hashes, actual loaded SDK origins and the document SDK nested in the contract executable. It does not use sibling target artifacts as peer authority. The private test bootstrap supplies synthetic signed trust; a separate ordinary `java -jar` probe verifies missing-trust denial. No fixture trust implementation is packaged in production.

Run the normal six-module reactor with `verify -DskipOpenApiGen` and that manifest after generation. Generating the producer spec requires the exclusive inherited port-18080 build window. Generated target Java/build files are not source artifacts. Qualification of this producer does not establish domain-kit orchestration, customer/product live-provider acceptance, all stationery types, signing of generated bytes, or a controlled print/PDF profile.
