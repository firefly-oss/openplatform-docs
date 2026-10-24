# Cards: issuance, authorization, and clearing

A card is an instrument linked to a customer relationship and an account or credit product. Its lifecycle is distinct from the merchant transactions it initiates. Issuing or activating the instrument does not prove that network authorization, clearing, billing, and disputes are connected.

## Establish the instrument

[Card experience](../api/services/exp-cards.md), [card domain](../api/services/domain-banking-cards.md), and [card core](../api/services/core-banking-cards.md) divide interaction, orchestration, and records. Before issuance, resolve the eligible cardholder, owned account, card program, applicable limits and security settings, and the selected processor or personalization path.

The current `IssueCardCommand` requires the consumer to supply customer, account, and card-program UUIDs. The web contract test injects a successful saga result and verifies HTTP 200 with the returned card ID and response status `COMPLETED`. That status describes the orchestrated API result; the test's mocked `CardService` and `SagaResult` do not establish card manufacturing, network enrollment, or external activation.

Run the existing typed contract from `domain-banking-cards` with the effective JDK and matching dependencies:

```sh
mvn -B -pl domain-banking-cards-web -am test -DskipOpenApiGen   -Dtest=CardsControllerTest -Dsurefire.failIfNoSpecifiedTests=false
```

Inspect the assertions and mocked collaborators when interpreting the result. For a runtime call, obtain the customer/account/program IDs from their owning APIs in the same environment and configure the actual selected adapters. Fixture-generated UUIDs cannot be reused as deployed records.

## Protect card record credentials

Card record creation and update reject every non-null `pin` and `cvv`, including empty strings. Ordinary responses omit these values, and filtering or sorting by either field is rejected. The [card authentication-data guide](../reference/service-guides/card-authentication-data.md) explains validation, historical-row handling, additive storage guards, and the separate processor integration required for PIN operations and activation.

A record status change does not establish processor authorization. Keep issuance, activation, PAN handling, network authorization, and financial effects as separate integration boundaries and verify each through its owning service and adapter.

## Guarded activation and issuer ownership

The [card activation guide](../reference/service-guides/card-activation.md) reproduces [the published core source](https://github.com/fireflysoftwaresolutions/core-banking-cards/blob/84fe51492341fb17200b3b3650d9039d86ce3b83/docs/card-activation.md). The core activation action requires a stable UUID `X-Idempotency-Key`, a valid proof, current tenant/card authorization and an independently observed issuer result. Native transport opt-out makes each retry reach current checks. Ordinary create/update cannot activate a draft or lift a restriction.

A genuine core-owned issuance integration, issuer adapter and positive issuer recovery journey remain unavailable for adoption. Database fixtures demonstrate persistence mechanics; they do not establish issued instruments or end-to-end activation. The existing domain and experience activation paths still require migration to the generated core command. Source publication establishes no SDK release or deployed card journey.

## Authorization: four different effects

The current authorization saga first resolves the account linked to the card. A card with no linked account ID fails at that step. It then creates a `PURCHASE` card transaction in `PENDING`, submits a pending ledger command with source-account debit and configured card-authorization suspense credit, and updates the card-balance projection.

**Sequence panels.** Follow the numbered messages in order. Return messages and conditional branches are labeled explicitly.

<style>
@media (max-width: 1100px) {
  picture.manual-diagram-phase { display: block; max-width: 432px; margin-inline: auto; }
}
</style>

<picture class="manual-diagram-phase">
  <source media="(max-width: 1100px) and (prefers-color-scheme: dark)" srcset="../../assets/diagrams/journeys-cards-phase-1-narrow-dark.svg">
  <source media="(max-width: 1100px)" srcset="../../assets/diagrams/journeys-cards-phase-1-narrow-light.svg">
  <source media="(prefers-color-scheme: dark)" srcset="../../assets/diagrams/journeys-cards-phase-1-dark.svg">
  <img src="../../assets/diagrams/journeys-cards-phase-1-light.svg" alt="journeys-cards: Phase 1, steps 1, 2, 3, 4, 5" width="100%" style="padding:0">
</picture>

<picture class="manual-diagram-phase">
  <source media="(max-width: 1100px) and (prefers-color-scheme: dark)" srcset="../../assets/diagrams/journeys-cards-phase-2-narrow-dark.svg">
  <source media="(max-width: 1100px)" srcset="../../assets/diagrams/journeys-cards-phase-2-narrow-light.svg">
  <source media="(prefers-color-scheme: dark)" srcset="../../assets/diagrams/journeys-cards-phase-2-dark.svg">
  <img src="../../assets/diagrams/journeys-cards-phase-2-light.svg" alt="journeys-cards: Phase 2, steps 6, 7, 8, 9" width="100%" style="padding:0">
</picture>

[Diagram source and stable step identities](../assets/diagrams/sequences.json) preserve the same messages in both layouts.

*Current saga dependency order. The card ledger handler is a separate implementation from the payment ledger adapter; this diagram does not inherit that adapter's atomicity proof.*

The authorization command includes `cardId`, `amount`, `currency`, merchant data, authorization code, entry mode, card-present flag, conversion rate, and `externalAuthReference`. Preserve that external reference across retries of the same network intent. The source uses it in card transaction creation and in a `card-auth:` ledger reference. These correlations are valuable, but the shared transport-cache defect and the adapter's own write behavior must be qualified before claiming durable end-to-end deduplication.

## Worked lifecycle: authorize 25, clear 23

This example explains source behavior using synthetic amounts; it is not a replayable network payload or an executed processor test.

1. Resolve an owned card linked to an account. Configure the actual suspense-account identity through `LedgerGlProperties`; an arbitrary UUID is not an accounting setup.
2. Authorize 25.00 in the account currency with a stable synthetic external authorization reference. Retain both the card transaction and ledger identities.
3. Clear 23.00 using the original `cardTransactionId`, owning `cardId`, a settlement timestamp, and a distinct stable `networkClearingReference` from `ClearCardTransactionCommand`.
4. The current clearing saga locates the authorization ledger effect. If the cleared amount equals the authorized amount, it attempts to transition the pending transaction to posted. If it differs, it constructs a reversal of the authorization and a new posted effect for the cleared amount.
5. The saga updates the card transaction to `COMPLETED` and refreshes balance projections from ledger legs.

This explains why authorization and clearing need separate identities. The merchant's final amount may differ from the provisional amount. A balance projection must not count both as independent completed purchases. Qualify the exact current card ledger handler, managed/legacy ledger compatibility, and failure compensation before using this path against an institution's money.

## Reversal and compensation

An authorization reversal releases or neutralizes the provisional effect according to the actual ledger semantics. The saga has compensations for a failed card transaction, ledger effect, and projection update. If a later step fails, do not assume every compensation succeeded because the workflow returned an error.

Reconcile the card transaction, original ledger reference, any reversal, and pending-balance projection. A failed projection update should trigger view repair after financial authority is established. It should not trigger a second merchant transaction. A timeout after processor acceptance needs processor lookup using the original reference before any resubmission.

## Billing, fees, and repayments

The source contains separate sagas for card interest, fees, and statement payment. These operations require a controlled billing model: cycle boundaries, rate and fee terms, minimum due, payment allocation, grace rules, delinquency, and limits. The existence of those sagas is a starting implementation surface; the full billing policy and its accounting acceptance must be established for the institution and product.

A statement is a dated view over financial activity. Preserve the population and cutoff used to generate it. A statement payment must link the receipt and allocation to the obligation it reduces. Reversed or partial receipts must not leave the statement paid while the ledger says otherwise. Card replacement should preserve account, statement, and dispute history while changing the instrument reference under the appropriate controls.

## Disputes and controlled adjustments

`ResolveCardDisputeCommand` carries `cardId`, `disputeId`, `resolutionOutcome`, `creditAmount`, `debitAmount`, and `resolutionReference`. Its source describes `APPROVED_CARDHOLDER`, `APPROVED_MERCHANT`, and `SPLIT` as expected outcome strings. These are command semantics, not proof that the complete network dispute lifecycle is implemented.

A complete dispute process retains the original transaction, claimant, evidence, deadlines, provisional credit, representment, authorized resolution, and linked adjustments. The customer-facing resolution and financial effects must agree. A dispute is not closed merely because a status field was updated; verify the permitted adjustment, its ledger identity, and any external disposition.

## Recovery map

| Observation | Authoritative comparison | Operator action |
| --- | --- | --- |
| Authorization returned an error | Card transaction, ledger effect, compensation results | Determine whether the provisional effect remains |
| Clearing reference is repeated | Original authorization and prior clearing identity | Recover prior result; compare amount and immutable intent |
| Cleared amount differs | Original hold, reversal, replacement posting | Verify no double count and correct residual provisional amount |
| Projection disagrees | Complete relevant ledger legs and their status | Repair the projection through its owner |
| Dispute resolved but money unclear | Resolution reference, authorized amounts, linked adjustments | Keep financial exception open until reconciled |

## Implementation sources

Source anchors: [CardsControllerTest.java](https://github.com/fireflysoftwaresolutions/domain-banking-cards/blob/main/domain-banking-cards-web/src/test/java/io/fireflysoftware/domain/banking/cards/web/controllers/CardsControllerTest.java) · [AuthorizeCardTransactionSaga.java](https://github.com/fireflysoftwaresolutions/domain-banking-cards/blob/main/domain-banking-cards-core/src/main/java/io/fireflysoftware/domain/banking/cards/core/transaction/workflows/AuthorizeCardTransactionSaga.java) · [ClearCardTransactionSaga.java](https://github.com/fireflysoftwaresolutions/domain-banking-cards/blob/main/domain-banking-cards-core/src/main/java/io/fireflysoftware/domain/banking/cards/core/transaction/workflows/ClearCardTransactionSaga.java) · [ResolveCardDisputeCommand.java](https://github.com/fireflysoftwaresolutions/domain-banking-cards/blob/main/domain-banking-cards-core/src/main/java/io/fireflysoftware/domain/banking/cards/core/transaction/commands/ResolveCardDisputeCommand.java).
