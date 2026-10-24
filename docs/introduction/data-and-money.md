# Records, money, events, and evidence

Different data represents different kinds of truth. A customer record describes a party. An account identifies a financial relationship. A ledger entry records an accounting effect. A provider reference describes an external operation. A notification acknowledgment describes delivery processing. Joining them into one screen does not make them interchangeable.

<picture style="display:block;max-width:432px;margin-inline:auto">
  <source media="(prefers-color-scheme: dark)" srcset="../../assets/diagrams/money-and-evidence-narrow-dark.svg">
  <img src="../../assets/diagrams/money-and-evidence-narrow-light.svg" alt="Payment authority map from customer intent through local money, external outcome and reconciliation" width="100%" style="padding:0">
</picture>

## Keep the owners visible

| Fact | Typical authority | Consumer responsibility |
| --- | --- | --- |
| Party identity and profile | Customer core, with separate verification evidence | Preserve party type, ownership, and effective evidence |
| Product and agreed terms | Product and contract owners | Retain the versions accepted by the decision |
| Account and account space | Accounts core | Read the returned IDs and parent association |
| Financial posting and history | Ledger core | Use balanced aggregates; preserve originals and reversals |
| Card or loan projection | Respective product core | Distinguish a view from authoritative spend or settlement |
| Policy and claim records | Insurance cores | Link coverage/effective version and financial effects |
| Signature request and synthetic outcome | Document core's managed lifecycle | Retain request, tenant, document, signer, and provenance |
| External settlement or legal completion | Relevant external authority and evidence | Reconcile; do not infer it from a local status string |

## A balance is a question, not one number

A posted balance answers which recognized entries apply. An available amount answers what can be spent under current restrictions, credit policy, and reservations. A reserved amount identifies commitments not yet final. A value-dated view answers when effects count economically. A customer-position row summarizes selected values. The implementation must define which of these a field represents and when it was calculated.

The account core's stored customer-position calculation provides a useful numerical example. With balance `100`, credit limit `50`, used credit `20`, collateral `75`, and tax amount `5`, the repository fixture returns available funds `125` and remaining credit `30`. This is the implemented summary calculation; it is not evidence of concurrent authorization, account restrictions, or spend reservation. The [accounts chapter](../journeys/accounts.md) shows how to create and reread that synthetic row.

## Balanced postings and local atomicity

For a synthetic internal transfer of EUR 12.34, a two-leg representation has a `DEBIT` of 12.34 on the source and a `CREDIT` of 12.34 on the destination. Debit and credit are the API's sides; their presentation as increases or decreases depends on the account's accounting classification. Do not infer all balance signs from the words alone.

The current ledger aggregate command stores a header, positive same-currency balanced legs, initial history, and a durable input claim in one local reactive database transaction. It accepts an initial `PENDING` or `POSTED` state. Decimal precision is bounded by `NUMERIC(38,18)`; the service rejects values that require rounding beyond its supported range. Dates can be omitted so the core assigns stable values instead of a retry supplying a new timestamp.

**Ownership and state panels.** Each numbered connection preserves the source, destination, and condition; dependency panels do not imply execution order.

<style>
@media (max-width: 1100px) {
  picture.manual-diagram-phase { display: block; max-width: 432px; margin-inline: auto; }
}
</style>

<picture class="manual-diagram-phase">
  <source media="(max-width: 1100px) and (prefers-color-scheme: dark)" srcset="../../assets/diagrams/introduction-data-and-money-phase-1-narrow-dark.svg">
  <source media="(max-width: 1100px)" srcset="../../assets/diagrams/introduction-data-and-money-phase-1-narrow-light.svg">
  <source media="(prefers-color-scheme: dark)" srcset="../../assets/diagrams/introduction-data-and-money-phase-1-dark.svg">
  <img src="../../assets/diagrams/introduction-data-and-money-phase-1-light.svg" alt="introduction-data-and-money: Connections 1–4, steps 1, 2, 3, 4" width="100%" style="padding:0">
</picture>

<picture class="manual-diagram-phase">
  <source media="(max-width: 1100px) and (prefers-color-scheme: dark)" srcset="../../assets/diagrams/introduction-data-and-money-phase-2-narrow-dark.svg">
  <source media="(max-width: 1100px)" srcset="../../assets/diagrams/introduction-data-and-money-phase-2-narrow-light.svg">
  <source media="(prefers-color-scheme: dark)" srcset="../../assets/diagrams/introduction-data-and-money-phase-2-dark.svg">
  <img src="../../assets/diagrams/introduction-data-and-money-phase-2-light.svg" alt="introduction-data-and-money: Connections 5–6, steps 5, 6" width="100%" style="padding:0">
</picture>

[Diagram source and stable step identities](../assets/diagrams/sequences.json) preserve the same messages in both layouts.

*Current managed ledger lifecycle. The final arrow creates another aggregate; it does not mutate the original posting into a deleted or negative-history record.*

A repeat body key with identical canonical input returns the existing aggregate; a changed input conflicts. Confirm and release serialize on the transaction. Managed rows reject legacy mutation paths. This establishes a local ledger boundary, not account ownership, available-funds exclusion, or atomicity with a rail.

## Events communicate facts; commands request work

A command says “perform this action.” An event should say “this fact occurred,” with the authoritative identity and enough version/correlation context for consumers. Saga step events describe orchestration progress; they must not be interpreted as provider settlement unless that is the fact actually established.

Reliable publication and consumption need a defined commit/publication boundary, duplicate handling, ordering assumptions, and replay policy. A declared event annotation is not proof of an outbox, durable broker delivery, or exactly-once processing. Inspect the service's actual implementation before relying on those properties. Rebuilding a read model from retained facts is different from replaying commands that move money.

## Reconciliation closes the loop

Reconciliation compares independently owned facts: instruction to provider reference, provider outcome to ledger effect, subledger to general ledger, policy premium to collection and allocation, and claim settlement to payment. Differences become assigned exceptions with a reason and retained evidence.

A useful exception record identifies the business action, owner IDs, amount/currency, expected versus observed state, observation time, previous attempts, and permitted next action. These are operating data requirements, not an assertion that a single universal reconciliation DTO currently exists. The [payments](../journeys/payments.md), [lending](../journeys/lending.md), and [insurance](../journeys/insurance.md) chapters explain the different populations and repair decisions.

## Time and evidence

Keep business effective date, booking time, event occurrence time, and processing time distinct. A late claim can refer to a prior policy version; a backdated loan receipt can change accrual; an account restriction can begin after an instruction but before execution. Retain the decision's inputs and versions so the result can be explained later.

Evidence must survive retries, restarts, and ordinary parent-record operations. The current managed synthetic signature lifecycle includes database retention guards; it still has separate requirements for immutable content/version binding and live legal evidence. Read [shared signature operations](../journeys/shared.md#contract-document-and-signature) before treating a synthetic completion as a signed agreement.
