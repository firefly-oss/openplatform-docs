# From business intent to a durable result

An API request is the beginning of a business operation. The execution model explains how it becomes a validated decision, one or more durable effects, and a result that the caller can safely interpret.

## Commands, queries, and ownership

A **query** asks for information. It may read an authoritative record or compose a projection. A **command** asks an owner to change state. Jafly's CQRS facilities dispatch typed commands and queries to handlers. This separation makes intent explicit, but it does not by itself provide an audit log, event sourcing, database isolation, or a reliable retry policy.

For example, a customer-position query can return a stored summary, while a ledger posting command changes authoritative financial records. Both may use reactive APIs, yet only the relevant core transaction defines which writes commit together. Read projections with their freshness and scope in mind; route changes through the owning command boundary.

**Sequence panels.** Follow the numbered messages in order. Return messages and conditional branches are labeled explicitly.

<style>
@media (max-width: 1100px) {
  picture.manual-diagram-phase { display: block; max-width: 432px; margin-inline: auto; }
}
</style>

<picture class="manual-diagram-phase">
  <source media="(max-width: 1100px) and (prefers-color-scheme: dark)" srcset="../../assets/diagrams/introduction-execution-model-phase-1-narrow-dark.svg">
  <source media="(max-width: 1100px)" srcset="../../assets/diagrams/introduction-execution-model-phase-1-narrow-light.svg">
  <source media="(prefers-color-scheme: dark)" srcset="../../assets/diagrams/introduction-execution-model-phase-1-dark.svg">
  <img src="../../assets/diagrams/introduction-execution-model-phase-1-light.svg" alt="introduction-execution-model: Phase 1, steps 1, 2, 3, 4, 5, 6" width="100%" style="padding:0">
</picture>

<picture class="manual-diagram-phase">
  <source media="(max-width: 1100px) and (prefers-color-scheme: dark)" srcset="../../assets/diagrams/introduction-execution-model-phase-2-narrow-dark.svg">
  <source media="(max-width: 1100px)" srcset="../../assets/diagrams/introduction-execution-model-phase-2-narrow-light.svg">
  <source media="(prefers-color-scheme: dark)" srcset="../../assets/diagrams/introduction-execution-model-phase-2-dark.svg">
  <img src="../../assets/diagrams/introduction-execution-model-phase-2-light.svg" alt="introduction-execution-model: Phase 2, steps 7, 8, 9, 10" width="100%" style="padding:0">
</picture>

[Diagram source and stable step identities](../assets/diagrams/sequences.json) preserve the same messages in both layouts.

*Conceptual execution order. Each actual workflow defines its own dependencies; some must contact a provider before or between core writes. This diagram does not imply a distributed transaction.*

## What the SDK preserves

Producer repositories publish OpenAPI contracts and generate typed SDKs. Consumers use model classes and API methods aligned with that producer. This avoids manually guessing JSON shapes and preserves generated enums, dates, parameters, and response decoding.

A generated client does not validate all business preconditions, authorize its caller, or make a group of HTTP calls atomic. Regenerate after a producer contract change, rebuild consumers, then exercise the SDK against the actual controller. A mock server that accepts any JSON cannot prove the real controller binds required fields. The corrected insurance policy path is an example: the creation request must carry `partyId` as well as tenant, product, policy number, line of business, status, and inception date so downstream customer/contract binding can occur.

## Saga: dependent steps and compensation

A saga coordinates ordered or dependent steps. If a later step fails, configured compensations attempt to undo or neutralize earlier effects. This is useful when an operation crosses services that cannot share one database transaction.

Compensation is a business action with its own possibility of failure. Reversing a posted financial effect requires a linked opposite posting; deleting the original destroys the evidence. Canceling an unconsumed pending promise is a different action. A workflow annotation or success event does not establish that compensation is durable, restartable, or accepted by an external provider.

Card authorization shows this distinction. Its saga resolves the account, creates a card transaction, places a pending ledger effect, and updates a card-balance projection. Compensation has separate responsibilities for the card record, financial effect, and projection. The [cards chapter](../journeys/cards.md) maps these steps to their current source.

## TCC: try, confirm, cancel

TCC models a provisional operation with explicit finalization. **TRY** establishes a promise or reservation according to the participant's actual semantics. **CONFIRM** consumes that promise. **CANCEL** releases what remains provisional. The domain must define expiration, duplicate calls, conflicting retries, and what happens when the coordinator restarts.

`domain-payments` uses a TCC hub with sessions and participant ports. Its ledger participant can now create a durable pending aggregate through one core command. That fact does not turn the domain's process-local session maps into durable coordination, nor make a pending ledger row an available-funds lock. The [payment state walkthrough](../journeys/payments.md#try-confirm-and-cancel) identifies those boundaries precisely.

### Require an acknowledgment before reporting completion

The matching Jafly 26.10.22 source train adds an opt-in policy for TCC persistence acknowledgments. Build and adopt matching artifacts through the [release train](../release/train.md); a source version or a configuration file does not establish that a deployed service contains the change.

```yaml
firefly:
  orchestration:
    tcc:
      persistence-mode: REQUIRED
```

The default remains `BEST_EFFORT`. With `REQUIRED`, the native configuration supplies the engine and orchestrator with the same persistence provider and policy. Manual assembly must preserve that pairing; a missing or inconsistent provider is rejected. A failed initial save prevents participant invocation. A failed checkpoint or final save propagates `TccPersistenceException`, retaining the execution context, correlation identity, attempted status, original cause, and an indication of possible effects.

Overall completion events and success callbacks wait for the final save acknowledgment. Participant and phase events can still describe calls that already happened; they do not prove overall completion. An acknowledgment means the configured save publisher completed. An in-memory provider remains in memory, and a phase snapshot is insufficient to resume a workflow after a process restart.

| Observed outcome | What the caller can establish | Recovery responsibility |
| --- | --- | --- |
| Initial save fails | This execution has not invoked a participant | Correct the persistence failure; retain the business action identity for any retry |
| A later save fails | An earlier participant may already have committed an effect | Retain the exception context and query each owning service using the original action and record identities |
| Final save is acknowledged | The configured provider acknowledged the execution report | Establish product completion from the authoritative business receipts and the provider's verified storage/recovery behavior |

Required persistence failures are not converted into automatic compensation or a confirmed result. A participant failure retains its separately configured cancellation behavior, so each participant must still distinguish rejection from an uncertain remote outcome. For money movement, never release a reservation, reverse a posting, or send another provider instruction merely because the coordinator lost an acknowledgment. The [recovery procedures](../operations/index.md) explain how to preserve uncertainty until the owning records establish the result.

## Four identities to retain

| Identity | Purpose | Failure if confused |
| --- | --- | --- |
| Business action identity | Recognize the same customer or operator instruction | A new request key creates the same business effect twice |
| Transport/correlation identity | Trace one call or retry across services | Logs cannot connect the attempts |
| Durable record identity | Read the effect that an owner persisted | Caller guesses an ID instead of recovering the result |
| Provider reference | Recover the external party's accepted operation | Timeout is retried as a second external instruction |

A transport response cache is not durable business idempotency. The scoped cache correction in Jafly 26.10.22 requires actual rebuilt consumer adoption; older deployed artifacts may still use the earlier key-only behavior. Ledger posting routes explicitly bypass transport caching while using a body key and canonical input claim. Other services must implement their own durable business-action semantics. Avoid optional cache headers in the worked ledger example and verify each service's actual artifact and behavior.

## Design the failure path with the happy path

For each step, record its input authority, durable result, repeat behavior, and recovery owner. A validation rejection before writes can be corrected and resubmitted. A timeout after submission requires status lookup or reconciliation. A partial saga requires inspection of completed steps and compensation outcomes. A stale projection requires rebuilding from authoritative records, not another financial write.

An operator should be able to answer: which instruction is this, what is known to have committed, what remains uncertain, who can resolve it, and what evidence will demonstrate closure? The journey chapters turn those questions into concrete procedures.
