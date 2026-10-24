# Insurance: coverage, claims, and financial operations

Insurance connects a promise of coverage to a defined risk, period, price, and set of conditions. The operating lifecycle continues through policy changes, losses, premium collection, reserves, recoveries, and close. A policy row is a central record, but it is not the entire coverage decision.

<picture style="display:block;max-width:432px;margin-inline:auto">
  <source media="(prefers-color-scheme: dark)" srcset="../../assets/diagrams/insurance-cover-to-cash-narrow-dark.svg">
  <img src="../../assets/diagrams/insurance-cover-to-cash-narrow-light.svg" alt="Insurance business dependencies from submission and acceptance through coverage, obligations, cash and close" width="100%" style="padding:0">
</picture>

## Follow the obligation across owners

| Lifecycle | Domain / owning core | Authoritative question |
| --- | --- | --- |
| Submission and underwriting | [Underwriting domain](../api/services/domain-insurance-underwriting.md), [core](../api/services/core-insurance-underwriting.md) | What risk and evidence were assessed, by whom, under which authority? |
| Policy | [Policy domain](../api/services/domain-insurance-policies.md), [core](../api/services/core-insurance-policies.md) | Which terms and coverage apply for the effective period? |
| Claim | [Claims domain](../api/services/domain-insurance-claims.md), [core](../api/services/core-insurance-claims.md) | What loss was reported, assessed, reserved, and resolved? |
| Delegated authority | [Delegated-authority core](../api/services/core-insurance-delegated-authority.md) | What may the distributor or coverholder do, within which limits? |
| Premium and insurance finance | [Financials core](../api/services/core-insurance-financials.md) | What is billed, collected, allocated, refunded, and reconciled? |
| Reserving | [Reserving core](../api/services/core-insurance-reserving.md) | Which population, assumptions and version produced the estimate? |
| Reinsurance | [Reinsurance core](../api/services/core-insurance-reinsurance.md) | Which risk and cash flows are ceded and recoverable? |

[Customer insurance experience](../api/services/exp-insurance.md) and [staff insurance terminal](../api/services/exp-insurance-terminal.md) address different interactions over these same authorities. A staff action needs delegated permission and retained reasons; it does not bypass the domain's business conditions.

## Submission, quote, and underwriting

A submission establishes applicant and insured parties, product, risk details, requested dates, distribution context, and evidence. The current submission record includes tenant, submission number, party, product, receipt time, line of business, and status. Declared statuses include `RECEIVED`, `IN_CLEARANCE`, `REFERRED`, `QUOTED`, `BOUND`, `DECLINED`, and `WITHDRAWN`. An enum lists possible values; it does not demonstrate that every transition has its required controls.

A quote should retain offered coverage, limits, deductibles, exclusions, wording/rating versions, premium, tax, commission, conditions, and expiry. These are the business terms that a customer can accept. A product classification or stored quote status cannot substitute for them.

Underwriting distinguishes acceptance within authority, referral, decline, requests for more evidence, and conditional approval. Retain the decision maker, delegated limit, reasons, evidence, and validity. A material change to the risk or an expired quote can require a new decision. Distributor authority must be checked for the actual product and action, not merely for an active distributor record.

## Worked example: policy creation through the typed contract

The corrected domain endpoint accepts a flattened `PolicyCreateRequest`. Its required fields are `partyId`, `tenantId`, `productId`, `policyNumber`, `lineOfBusiness`, `policyStatus`, and `inceptionDate`. `contractId` is optional because the selected customer-contract adapter can create an agreement. Optional currency, expiry and renewal fields retain their own validation and business meaning.

The current contract supports these lines of business: `MOTOR`, `PROPERTY`, `LIABILITY`, `LIFE`, `HEALTH`, `MARINE`, `AVIATION`, `ACCIDENT`, and `OTHER`. The current policy statuses are `QUOTE`, `BOUND`, `IN_FORCE`, `LAPSED`, `CANCELLED`, and `EXPIRED`.

A synthetic request shape for a property quote is:

```json
{
  "partyId": "<owned-party-uuid>",
  "tenantId": "<authorized-tenant-uuid>",
  "contractId": "<owned-contract-uuid>",
  "productId": "<owned-product-uuid>",
  "policyNumber": "SYNTHETIC-BOUNDARY-001",
  "lineOfBusiness": "PROPERTY",
  "policyStatus": "QUOTE",
  "currency": "USD",
  "inceptionDate": "2026-11-01"
}
```

This is a template, not valid runnable JSON until the UUID placeholders are replaced. For a runtime call, create or obtain the party, tenant-scoped product and contract through their owning processes, then verify their associations and configure the domain's selected customer/contract/core adapters. If omitting `contractId`, qualify that adapter's creation and failure path first. `POST /api/v1/policies` returns 201 for successful creation; retain and reread the returned policy ID.

The domain handler needs the party to resolve the customer/contract relationship before core policy creation. Missing `partyId` is rejected by actual controller validation before orchestration. Supplying it preserves the downstream association; it does not itself establish underwriting approval or authorization to bind.

### Run the SDK/controller fixture

From `exp-insurance`, use JDK 25 and matching regenerated domain SDK/internal artifacts:

```sh
mvn -B -pl exp-insurance-core -am test -DskipOpenApiGen   -Dtest=PolicySdkControllerIntegrationTest -Dsurefire.failIfNoSpecifiedTests=false
```

The test starts the actual `PoliciesController` on a private random loopback HTTP port and calls it through the production experience client and generated SDK. It verifies that party, tenant, contract, product, and line of business reach the domain command. A second case omits party and expects HTTP 400 with no orchestration call. Only the domain orchestration collaborator is mocked; no provider credentials or database are needed for this transport fixture.

This fixture exercises the SDK/controller boundary with mocked orchestration. Use it to check request construction and validation; policy persistence, underwriting decisions, and bind conditions require their owning services and configured integrations.

## Bind and put coverage into force

The current customer experience bind route is unavailable. After current decision checks, even `APPROVE` returns HTTP 503 `INSURANCE_BINDING_UNAVAILABLE` before policy creation or document issuance. `REFER` returns HTTP 409; missing decision evidence returns HTTP 503. The [insurance binding guide](../reference/service-guides/insurance-bind-decision-boundary.md) reproduces [the published source](https://github.com/fireflysoftwaresolutions/exp-insurance/blob/b81836f3234f6ed03ef78715e789e1b5c260948c/docs/insurance-bind-decision-boundary.md), including exact prerequisite gaps, retry handling and the breaking generated-client migration. This fence creates no durable bind receipt and does not resolve earlier effects. The direct domain policy example above exercises a separate transport boundary; it does not bypass this experience fence or establish coverage.

The genuine producer now declares typed operations through `InsuranceControllerApi`. Published `exp-insurance-sdk:26.10.6` callers using the former bodyless `QuotesApi`, `PoliciesApi` and `ClaimsApi` need source, binary and request migration plus a coordinated future version bump. Source publication does not release that SDK or qualify positive binding.

Binding means that an authorized acceptance establishes the intended coverage under its conditions. Before that action, verify current offered terms, underwriting approval and conditions, insured interests and parties, effective dates, required agreement/signature evidence, payment conditions, and delegated authority. Preserve exactly which terms were accepted.

**Ownership and state panels.** Each numbered connection preserves the source, destination, and condition; dependency panels do not imply execution order.

<style>
@media (max-width: 1100px) {
  picture.manual-diagram-phase { display: block; max-width: 432px; margin-inline: auto; }
}
</style>

<picture class="manual-diagram-phase">
  <source media="(max-width: 1100px) and (prefers-color-scheme: dark)" srcset="../../assets/diagrams/journeys-insurance-phase-1-narrow-dark.svg">
  <source media="(max-width: 1100px)" srcset="../../assets/diagrams/journeys-insurance-phase-1-narrow-light.svg">
  <source media="(prefers-color-scheme: dark)" srcset="../../assets/diagrams/journeys-insurance-phase-1-dark.svg">
  <img src="../../assets/diagrams/journeys-insurance-phase-1-light.svg" alt="journeys-insurance: Connections 1 to 4" width="100%" style="padding:0">
</picture>

<picture class="manual-diagram-phase">
  <source media="(max-width: 1100px) and (prefers-color-scheme: dark)" srcset="../../assets/diagrams/journeys-insurance-phase-2-narrow-dark.svg">
  <source media="(max-width: 1100px)" srcset="../../assets/diagrams/journeys-insurance-phase-2-narrow-light.svg">
  <source media="(prefers-color-scheme: dark)" srcset="../../assets/diagrams/journeys-insurance-phase-2-dark.svg">
  <img src="../../assets/diagrams/journeys-insurance-phase-2-light.svg" alt="journeys-insurance: Connections 5 to 8" width="100%" style="padding:0">
</picture>

<picture class="manual-diagram-phase">
  <source media="(max-width: 1100px) and (prefers-color-scheme: dark)" srcset="../../assets/diagrams/journeys-insurance-phase-3-narrow-dark.svg">
  <source media="(max-width: 1100px)" srcset="../../assets/diagrams/journeys-insurance-phase-3-narrow-light.svg">
  <source media="(prefers-color-scheme: dark)" srcset="../../assets/diagrams/journeys-insurance-phase-3-dark.svg">
  <img src="../../assets/diagrams/journeys-insurance-phase-3-light.svg" alt="journeys-insurance: Connections 9 to 10" width="100%" style="padding:0">
</picture>

[Diagram source and stable step identities](../assets/diagrams/sequences.json) preserve the same messages in both layouts.

*Business dependencies. A record API supports part of this chain; the arrows are not assertions that current status updates enforce the complete process.*

A lost bind response must be recovered by the stable business action and authoritative policy identity. Reissuing a create with a new key can create a second obligation. Keep a rejected or referred case distinct from accepted coverage in customer and staff views.

## Endorsement, renewal, lapse, and cancellation

An endorsement changes a policy from an effective date. Retain the previous terms and the change's reason, authority, premium impact, taxes/commission, refunds or additional charges, notices, and claims consequences. Overwriting the original policy without a versioned business record makes it difficult to determine coverage at a past loss date.

Renewal evaluates the next coverage period with current risk, terms, rates, and required disclosures. It should identify the predecessor policy/period and the customer's acceptance where required. Lapse, cancellation, reinstatement, rescission, and nonrenewal have different effective-date and financial implications; an enum value alone does not resolve them. Define institutional policy and qualified transitions for each supported action.

## Claims: from notice to settlement and recovery

First notice of loss identifies the policy, claimant, insured, occurrence and reporting dates, event, interests, and possible duplicates. The core claim DTO includes tenant, claim number, policy ID, claim status, loss date, and notification time. Its statuses include `NOTIFIED`, `OPEN`, `UNDER_ASSESSMENT`, `RESERVED`, `SETTLED`, `CLOSED`, `REOPENED`, and `DENIED`.

Use the policy version effective at the relevant event date and inspect conditions, limits, exclusions, and deductible. Triage can require additional evidence, fraud referral, an adjuster, or a coverage decision. Record the decision and authority before settlement. Reserving estimates an obligation; settlement authorizes a result; payment moves funds. They should remain separately traceable.

A synthetic claim example can start with a policy created in the same disposable environment, a unique claim number, `claimStatus=NOTIFIED`, and known loss/notification dates. Creating that record proves neither coverage nor an accepted claim. Subsequent tests should show denied coverage before payment, authorized settlement linked to a payment, and a reversed payment that does not leave a false paid/closed result.

Before a claims payment, reconcile the approved settlement, deductible and limit treatment, payee authority and verified destination, payment instruction, ledger effect, and actual finality. Recovery, salvage, subrogation, litigation, and reinsurance recoverables can continue after the initial payment and must retain their own identities.

## Premium, reserves, and reinsurance

Premium operations connect a schedule to billing, collection, allocation, arrears, refund, tax, and commission. A schedule with status `ACTIVE` is not evidence that installments were paid. The same receipt can require allocation across periods or obligations, and a failed collection can affect coverage only through the applicable policy and authority.

Reserving needs a controlled population, measurement date, assumptions, methods, run/version identity, review, adjustments, and reproducibility. The reserve-snapshot record contains tenant, snapshot date, line of business, and a status such as `DRAFT`, `SUBMITTED`, or `ACCEPTED`. A snapshot CRUD operation does not calculate or approve the reserve. Keep claims case reserves and broader actuarial estimates conceptually distinct.

Reinsurance includes treaty/facultative placement, attachment and limits, ceded premium, bordereaux, recoverables, collection and counterparty reconciliation. The treaty contract supports `QUOTA_SHARE`, `SURPLUS`, `EXCESS_OF_LOSS`, and `FACULTATIVE`. A treaty record needs its effective period and reinsurer relationship before a claim recovery can be attributed to it. Do not treat a receivable as collected cash.

Delegated-authority binder records connect carrier, coverholder/distributor, contract, line of business, dates, and status. The operational process must additionally enforce authority limits and reporting obligations. A binder marked active does not automatically permit every underwriting or claim decision.

## Financial close and operator recovery

Close compares policy, premium, claims, reserves, reinsurance, cash and accounting populations at consistent cutoffs. Preserve unprocessed late events and adjustments so the next close can explain them. Standards mappings and product labels guide analysis; they do not establish accepted accounting/reporting compliance.

| Exception | Evidence to compare | Recovery action |
| --- | --- | --- |
| Policy creation rejected | Required party/tenant/product fields and owner records | Correct association; confirm no downstream write before retry |
| Bind outcome uncertain | Accepted terms, business identity, policy and provider evidence | Recover prior outcome before another obligation |
| Claim says settled but payment is uncertain | Settlement authority, payment, provider and ledger references | Keep payment exception visible; do not infer finality from claim status |
| Premium receipt unmatched | Collection reference, currency/date, schedule and allocations | Assign controlled allocation; preserve original receipt |
| Reserve/reinsurance population differs | Run/cutoff, policy and claim versions, treaty terms | Reproduce and explain the difference before close approval |

## Implementation sources

Source anchors: [PolicyCreateRequest.java](https://github.com/fireflysoftwaresolutions/domain-insurance-policies/blob/main/domain-insurance-policies-interfaces/src/main/java/io/fireflysoftware/domain/insurance/policies/interfaces/dtos/PolicyCreateRequest.java) · [PolicySdkControllerIntegrationTest.java](https://github.com/fireflysoftwaresolutions/exp-insurance/blob/main/exp-insurance-core/src/test/java/io/fireflysoftware/experience/insurance/core/adapter/PolicySdkControllerIntegrationTest.java) · [ClaimDTO.java](https://github.com/fireflysoftwaresolutions/core-insurance-claims/blob/main/core-insurance-claims-interfaces/src/main/java/io/fireflysoftware/core/insurance/claims/interfaces/dtos/ClaimDTO.java) · [TreatyDTO.java](https://github.com/fireflysoftwaresolutions/core-insurance-reinsurance/blob/main/core-insurance-reinsurance-interfaces/src/main/java/io/fireflysoftware/core/insurance/reinsurance/interfaces/dtos/TreatyDTO.java).
