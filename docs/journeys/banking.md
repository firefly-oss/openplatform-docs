# Operational banking

Operational banking connects the right to use an account with the instruments that move value. Accounts establish the relationship and its spaces; cards and payment instructions initiate activity; the ledger records financial effects; external rails and processors establish outcomes beyond the platform. Open-banking consent governs another party's right to access or initiate particular actions.

**Ownership and state panels.** Each numbered connection preserves the source, destination, and condition; dependency panels do not imply execution order.

<style>
@media (max-width: 1100px) {
  picture.manual-diagram-phase { display: block; max-width: 432px; margin-inline: auto; }
}
</style>

<picture class="manual-diagram-phase">
  <source media="(max-width: 1100px) and (prefers-color-scheme: dark)" srcset="../../assets/diagrams/journeys-banking-phase-1-narrow-dark.svg">
  <source media="(max-width: 1100px)" srcset="../../assets/diagrams/journeys-banking-phase-1-narrow-light.svg">
  <source media="(prefers-color-scheme: dark)" srcset="../../assets/diagrams/journeys-banking-phase-1-dark.svg">
  <img src="../../assets/diagrams/journeys-banking-phase-1-light.svg" alt="journeys-banking: Connections 1 to 4" width="100%" style="padding:0">
</picture>

<picture class="manual-diagram-phase">
  <source media="(max-width: 1100px) and (prefers-color-scheme: dark)" srcset="../../assets/diagrams/journeys-banking-phase-2-narrow-dark.svg">
  <source media="(max-width: 1100px)" srcset="../../assets/diagrams/journeys-banking-phase-2-narrow-light.svg">
  <source media="(prefers-color-scheme: dark)" srcset="../../assets/diagrams/journeys-banking-phase-2-dark.svg">
  <img src="../../assets/diagrams/journeys-banking-phase-2-light.svg" alt="journeys-banking: Connections 5 to 8" width="100%" style="padding:0">
</picture>

<picture class="manual-diagram-phase">
  <source media="(max-width: 1100px) and (prefers-color-scheme: dark)" srcset="../../assets/diagrams/journeys-banking-phase-3-narrow-dark.svg">
  <source media="(max-width: 1100px)" srcset="../../assets/diagrams/journeys-banking-phase-3-narrow-light.svg">
  <source media="(prefers-color-scheme: dark)" srcset="../../assets/diagrams/journeys-banking-phase-3-dark.svg">
  <img src="../../assets/diagrams/journeys-banking-phase-3-light.svg" alt="journeys-banking: Connections 9 to 12" width="100%" style="padding:0">
</picture>

<picture class="manual-diagram-phase">
  <source media="(max-width: 1100px) and (prefers-color-scheme: dark)" srcset="../../assets/diagrams/journeys-banking-phase-4-narrow-dark.svg">
  <source media="(max-width: 1100px)" srcset="../../assets/diagrams/journeys-banking-phase-4-narrow-light.svg">
  <source media="(prefers-color-scheme: dark)" srcset="../../assets/diagrams/journeys-banking-phase-4-dark.svg">
  <img src="../../assets/diagrams/journeys-banking-phase-4-light.svg" alt="journeys-banking: Connections 13 to 13" width="100%" style="padding:0">
</picture>

[Diagram source and stable step identities](../assets/diagrams/sequences.json) preserve the same messages in both layouts.

*Business ownership map. Arrows describe dependencies and evidence flow, not a claim that every shown integration has completed acceptance.*

## An account is the anchor, not the whole process

The account core owns the account record, spaces, balances and related servicing data. The ledger owns postings. A card record links an instrument to an account; a payment record carries an instruction and its references. Each relationship must preserve the owner-created UUID and its parent scope.

Start with [accounts](accounts.md) for the opening and servicing lifecycle. Continue to [cards](cards.md) for merchant activity or [payments](payments.md) for transfers, collections, and external movement. The same restriction or delegated-access decision must be applied at the relevant execution boundary even when activity originates from a different channel.

## Distinguish product state from financial state

An account may be `OPEN` while an instruction is rejected. A card transaction can be `PENDING` before clearing. A ledger aggregate can be `POSTED` while an outbound provider outcome remains uncertain. These are different owners' statements, not contradictory statuses to be collapsed into a single “success” flag.

A useful customer view names the outcome that matters to the person and retains the underlying references for support. A useful operator view shows the instruction, account, product record, ledger effect, provider reference, and last known reconciliation state. Missing evidence remains visible so a support agent does not resolve uncertainty by sending money again.

## Staff-assisted operations

Staff access is a separate authority path. Preserve the employee identity, represented customer, action scope, reason, and approval when policy requires it. An employee authorized to view an account is not automatically permitted to release a legal restriction, approve a write-off, or initiate a payment.

Batch and scheduled operations also need an actor or service authority, a stable business identity, and a record of each item's result. Partial completion must be represented per item. Replaying the entire file because one item failed can duplicate successful effects.

## Open banking and consent

`domain-banking-psdx` and `core-banking-psdx` provide the relevant bounded contexts. Consult their [domain contract](../api/services/domain-banking-psdx.md) and [core contract](../api/services/core-banking-psdx.md) for the exact resource shape. A complete consent operation must connect institution, third party, subject, permitted account/action scope, expiration, authentication, and revocation.

Account-information access and payment initiation are different permissions. The resource owner must enforce the applicable scope on each call; a request-supplied party or account ID is not proof. Revocation should stop future access according to policy without erasing the history of prior authorized activity. A provider outage during consent maintenance must not silently change a previously submitted payment's financial state.

For qualification, establish a consent on synthetic owned accounts, show allowed access, reject a different account and actor, revoke it, and prove the next relevant call is denied before effects. Then test duplicate and delayed callbacks. These are acceptance requirements, not a statement that the current PSD resource APIs already enforce the entire sequence.

## Start implementation with one controlled path

Choose one product, currency, channel, and adapter set. Create the party, terms, contract, and account in disposable owning stores. Record the exact IDs. Exercise one normal instruction and one denied instruction before adding provider interactions. Then add loss-of-response, duplicate, reversal, and reconciliation cases. The individual chapters show which current fixtures can serve as that starting point.
