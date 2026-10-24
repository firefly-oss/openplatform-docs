# Shared services: trust, terms, evidence, and communication

Shared services let product journeys reuse the same party, authority, terms, agreement, and evidence. Reuse works when ownership stays explicit. An onboarding result, a signed document, and a notification are different facts with different lifecycles.

## Identity and delegated authority

Establish the authenticated subject and tenant before accepting business identifiers. Then authorize the requested action on the particular resource. A supplied customer ID identifies the desired subject; it does not prove that the caller may act for that customer. Preserve the distinction between a human customer, staff member, partner, and service identity.

The [security domain](../api/services/domain-core-security-center.md) and [security experience](../api/services/exp-security.md) define current contracts. Source fixtures include a subject-bound access adapter: the sample customer can read/create but cannot administer or impersonate; a sample employee has additional explicitly modeled actions; unknown or denied actors fail. This is a documented fixture policy, not production authorization for arbitrary usernames.

A staff-assisted operation must retain employee identity, represented customer, scope, reason, and required approval. Authentication success alone does not confer permission to release a restriction, settle a claim, or change a payment destination. Test denial before effects, cross-tenant resources, expired credentials, and unauthorized delegation through the actual deployed filters and handlers.

## Customer, KYC/KYB, and changing evidence

[Customer core](../api/services/core-common-customer-mgmt.md) owns party/profile records. [KYC/KYB core](../api/services/core-common-kycb-mgmt.md) and its [domain](../api/services/domain-customer-kyc-kyb.md) address verification evidence and decisions. Individual and organization profiles are not interchangeable: the current customer service rejects a person profile for an `ORGANIZATION` party.

Onboarding should retain identity and ownership evidence, consent, screening results, risk decisions, review authority, expiry and refresh requirements. A successful party create is the start of that process, not its approval. An organization may need an ownership graph and authorized signatories before entering an agreement. Evidence that is missing, rejected, conflicting or expired must remain visible to dependent product decisions.

Party changes affect existing products. A name correction, duplicate merge, deceased individual, dissolved organization, or changed representative requires a controlled propagation policy. Record what changed and from when; do not silently rewrite the historical party/authority that accepted an agreement or initiated a transaction.

## Product, price, and effective terms

The [product core](../api/services/core-common-product-mgmt.md), [catalog domain](../api/services/domain-product-catalog.md), and [pricing domain](../api/services/domain-product-pricing.md) separate product records and decision behavior. Retain availability, permitted currencies, limits, rates, fees, effective periods, and the versions used when an offer is made.

The pricing eligibility command currently includes party ID, product ID and a positive amount. The implementation reads the party and product-pricing dependency and produces reasons such as `PARTY_NOT_FOUND`, `PRODUCT_NOT_FOUND`, `PRODUCT_NOT_AVAILABLE`, `AMOUNT_BELOW_MINIMUM`, or `AMOUNT_ABOVE_MAXIMUM`. This is a bounded availability/amount decision, not a complete affordability, KYC or bureau assessment. The path eligibility ID and downstream pricing-identity semantics require careful source inspection; the current publish/adjust eligibility methods are unfinished.

An application should present a referral or unavailable dependency honestly. Silent fallback configuration cannot authorize a live financial decision. When terms change, decide whether outstanding offers remain valid and preserve the terms accepted by existing contracts. The product core's rejection of deleting an active product illustrates why lifecycle controls matter beyond a generic CRUD interface.

## Contract, document, and signature

A contract connects parties, product terms, obligations, dates, and evidence. The [contract core](../api/services/core-common-contract-mgmt.md) defaults new contracts to `DRAFT` with created history, and rejects a rollback from `ACTIVE` to `DRAFT` in the current service. Dynamic terms include overlap checks. These are useful local invariants; they do not automatically establish that every product has completed its approval and signature requirements.

A document is content plus metadata and access/retention policy. Generating or storing content is distinct from submitting it for signature. Signature request, provider verification, business confirmation, and legal evidence also have separate responsibilities.

The current kit-document service persists metadata; its public read path can return empty HTML. A separate document-generation library exists, but that is not a qualified content-generation/storage/signature chain. The [document capability guide](../shared/documents.md) explains these boundaries and the current storage implementation before you connect a real agreement.

### The current managed synthetic signature lifecycle

[Contract domain](../api/services/domain-common-contracts.md) coordinates request/confirmation; [document core](../api/services/core-common-document-mgmt.md) owns the managed signature record and provider inquiry. The authoritative lifecycle is durable in the document database. It is not merely the domain's local variables or a second record created by the saga.

`SignatureSubmissionRequestDTO` requires `contractId`, `documentId`, `signerPartyId`, `signatureProviderId`, `tenantId`, `signatureRequestKey`, `signatureType`, and `signatureFormat`. The key is a stable tenant-scoped business action identity. The service validates that the document belongs to that tenant and that the provider record belongs to the tenant, is active, and matches the configured provider code.

For the synthetic path, use the explicit `sandbox` profile and `integration.signature.provider=sandbox`. The source refuses sandbox signing if its adapter is absent. The default unconfigured path fails closed; the presence of a framework envelope adapter does not automatically supply the required request-level port.

**Sequence panels.** Follow the numbered messages in order. Return messages and conditional branches are labeled explicitly.

<style>
@media (max-width: 1100px) {
  picture.manual-diagram-phase { display: block; max-width: 432px; margin-inline: auto; }
}
</style>

<picture class="manual-diagram-phase">
  <source media="(max-width: 1100px) and (prefers-color-scheme: dark)" srcset="../../assets/diagrams/journeys-shared-phase-1-narrow-dark.svg">
  <source media="(max-width: 1100px)" srcset="../../assets/diagrams/journeys-shared-phase-1-narrow-light.svg">
  <source media="(prefers-color-scheme: dark)" srcset="../../assets/diagrams/journeys-shared-phase-1-dark.svg">
  <img src="../../assets/diagrams/journeys-shared-phase-1-light.svg" alt="journeys-shared: Phase 1, steps 1, 2, 3, 4, 5, 6, 7" width="100%" style="padding:0">
</picture>

<picture class="manual-diagram-phase">
  <source media="(max-width: 1100px) and (prefers-color-scheme: dark)" srcset="../../assets/diagrams/journeys-shared-phase-2-narrow-dark.svg">
  <source media="(max-width: 1100px)" srcset="../../assets/diagrams/journeys-shared-phase-2-narrow-light.svg">
  <source media="(prefers-color-scheme: dark)" srcset="../../assets/diagrams/journeys-shared-phase-2-dark.svg">
  <img src="../../assets/diagrams/journeys-shared-phase-2-light.svg" alt="journeys-shared: Phase 2, steps 8, 9, 10" width="100%" style="padding:0">
</picture>

[Diagram source and stable step identities](../assets/diagrams/sequences.json) preserve the same messages in both layouts.

*The simulator is an explicit fixture control. The actual endpoint delegates to the core service and adapter; no external signing is implied.*

<picture style="display:block;max-width:432px;margin-inline:auto">
  <source media="(prefers-color-scheme: dark)" srcset="../../assets/diagrams/signature-evidence-narrow-dark.svg">
  <img src="../../assets/diagrams/signature-evidence-narrow-light.svg" alt="Managed synthetic signature lifecycle retains binding, pending state, explicit outcome and evidence" width="100%" style="padding:0">
</picture>

### Prepare and verify the synthetic fixture

Use JDK 25, the matching regenerated document SDK, and disposable PostgreSQL. The domain's `SignatureCoreSdkDatabaseTest` starts the actual packaged core against a private database, seeds a synthetic document and active `SANDBOX` provider in the same tenant, and uses the generated SDK. Build the producer first. From `domain-common-contracts`, run the targeted integration fixture with the actual executable path:

```sh
mvn -B -pl domain-common-contracts-infra -am test -DskipOpenApiGen   -Dtest=SignatureCoreSdkDatabaseTest -Dsurefire.failIfNoSpecifiedTests=false   -Dsignature.core.executable=/absolute/path/to/core-common-document-mgmt-web/target/core-common-document-mgmt.jar
```

Use the producer's actual packaged filename from its build, and configure the Docker-compatible runtime required by the fixture. It must never target an existing shared database. The fixture uses the generated SDK against the actual core, restarts the core process, and checks retained pending and completed outcomes. Its explicit simulator controls the provider result; it does not contact a live signing provider.

The HTTP submit route is `POST /api/v1/signature-submissions`. Verification is `GET /api/v1/signature-submissions/{id}` with tenant and optional contract scope. The simulator's `POST /api/v1/signature-submissions/{id}/sandbox-outcome` requires tenant, contract, and an explicit outcome. It is restricted to the nonproduction sandbox profile (and contract generation profile), not a production completion webhook.

A same-key identical submission recovers its binding; a changed binding is rejected. Pending stays pending until an explicit simulator action. Completed/declined/expired outcomes retain their terminal meaning, and an unknown/ambiguous outcome is not a successful signature. Verify that a different tenant/contract cannot retrieve the managed result and that the signing timestamp is present for completion.

### Retention and live-signature boundary

Managed signature identity is protected against reassignment and deletion, including parent document/version cascades. Legacy cancellation cannot mutate managed records. Document deletion checks retention before provider access and performs its database deletion/guard before irreversible provider-content removal, so a retained-evidence rejection does not follow an already deleted external document.

The public request still binds a document UUID rather than immutable content version/hash. Trusted live actor/tenant context, complete envelope construction, real document/signer payloads, provider-reference recovery, authenticated callbacks, and legal completion evidence remain separate implementation requirements. The synthetic durable lifecycle is useful for integration qualification; it must not be presented as a legally signed customer contract.

## Notifications: communicate a result without changing it

[Notification core](../api/services/core-common-notification-services.md) exposes delivery facades; [notification domain](../api/services/domain-common-notifications.md) also has local sent-notification recording behavior. The delivery core does not own a notification database merely because other cores do.

For email, `NOTIFICATIONS_EMAIL_PROVIDER=sandbox` selects the explicit synthetic provider. A request needs a valid `from`, valid `to`, and nonblank `subject`; text/HTML fields are optional under the DTO. `POST /api/v1/email/send` returns a synthetic message UUID and `SENT` without opening a delivery socket. No provider yields 503; a provider failure yields 500. This local email sandbox does not imply equivalent local SMS/push sandboxes.

A synthetic request can use `from=manual@example.test`, `to=customer@example.test`, subject `Synthetic account notice`, and text explaining that no message will be delivered. Start only the configured disposable service, submit through its declared DTO, and check the response and provider selection. The manual describes source behavior; it has not sent this request or validated a live mailbox.

For an actual institution, preserve message intent, permitted recipient/channel, template/version, correlation to the business action, attempts, provider outcome, suppression and retry rules. If a payment posts but its notice fails, retry the notification using the known payment identity. Do not repeat the payment to trigger another notice. Domain recording/list/read flags are not proof of external delivery.

## Configuration, accounting, and operational control

Configuration and reference data provide inputs to decisions. Validate required values, effective dates, and compatibility before use. A gateway route is not sufficient proof of a downstream operation: the current configurator passthrough's initialization path needs alignment with the domain's actual query routes. Do not build an onboarding promise on a route name alone.

Accounting and audit connect business effects to reporting and investigation. Preserve the source operation, currency/amount, business dates, posting identities, actor, and evidence. Security-vault operations need explicit credential-provider outcomes: the synthetic issuer's “no new secret” path does not mark rotation successful or create a new encrypted credential.

## Recovery by owning service

| Situation | Owning service | Operator action |
| --- | --- | --- |
| Caller may act on this resource | Security/access boundary | Reject before effects; qualify tenant, delegation and deployed filters |
| Product decision uses current terms | Product/pricing and contract owners | Retain versions; resolve referral or unavailable dependency explicitly |
| Signature pending after restart | Document core managed record | Recover same request; verify provider state rather than create another binding |
| Signature evidence deletion blocked | Core service and database retention guards | Preserve evidence; use reviewed retention policy rather than direct deletion |
| Notification fails after business success | Delivery facade and business owner | Retry communication only, with original business correlation |
| Configuration or provider unavailable | Selected port/configuration owner | Keep decision/action pending or failed according to explicit policy |

Source anchors: [SignatureSubmissionRequestDTO.java](https://github.com/fireflysoftwaresolutions/core-common-document-mgmt/blob/main/core-common-document-mgmt-interfaces/src/main/java/io/fireflysoftware/commons/ecm/interfaces/dtos/SignatureSubmissionRequestDTO.java) · [SignatureSubmissionService.java](https://github.com/fireflysoftwaresolutions/core-common-document-mgmt/blob/main/core-common-document-mgmt-core/src/main/java/io/fireflysoftware/commons/ecm/core/signature/SignatureSubmissionService.java) · [SignatureCoreSdkDatabaseTest.java](https://github.com/fireflysoftwaresolutions/domain-common-contracts/blob/main/domain-common-contracts-infra/src/test/java/io/fireflysoftware/domain/common/contracts/infra/SignatureCoreSdkDatabaseTest.java) · [SandboxSignatureOutcomeController.java](https://github.com/fireflysoftwaresolutions/core-common-document-mgmt/blob/main/core-common-document-mgmt-web/src/main/java/io/fireflysoftware/commons/ecm/web/controllers/SandboxSignatureOutcomeController.java).
