# Operate and recover

Recover by establishing the authoritative outcome of an existing operation. Repeating a user command under a new key can duplicate an accepted effect when the original response was lost.

## Before accepting work

Record the trusted actor and tenant, stable business action identity, immutable intent, resource ownership, effective date, dependency versions, and correlation. Validate required provider configuration. Separate acceptance of an instruction from completion of its financial or provider effect.

## Recognize the outcome

| Outcome | Meaning | Permitted next action |
| --- | --- | --- |
| Rejected before acceptance | Validation or policy prevented the operation | Correct input or obtain the required authority; retain the rejection reason |
| Pending | A durable operation exists and awaits a defined event | Resume or query that operation; do not create another |
| Completed | Its authoritative effects and required finality are proven | Return the stored outcome; reconcile dependent records and events |
| Failed with no effect | The responsible system proves no irreversible effect | Retry the same action under its defined retry policy |
| Uncertain | A participant may have accepted work but the reply is unavailable | Query or reconcile by authoritative provider/action identity |
| Compensated | Defined effects have corresponding validated compensation | Retain both original and compensating effects; never erase the evidence |

An HTTP 200, a saga engine's terminal label, or an in-memory session is not sufficient evidence for any financial finality claim.

## Lost response or duplicate instruction

1. Locate the original durable business action by tenant, operation type, and stable action key.
2. Compare immutable intent: parties, resources, amount, currency, dates, and provider route as applicable.
3. Return the stored outcome for an identical replay. Reject conflicting intent under that key.
4. Query external acceptance using the provider's retained request/reference; do not resubmit an uncertain effect blindly.
5. Resume pending work or route unresolved cases to a bounded operator procedure.

Transport response caching is separate. Scope and payload behavior must be verified against the actual framework filter used by the service. It cannot replace durable business deduplication across routes, restarts, replicas, or provider uncertainty.

## Partial financial failure

Inspect the original ledger transaction, complete legs, history, reservation, provider reference, and settlement state. Ledger creation must be atomic within its owning database. A posted effect is preserved; reversal creates a linked opposite effect from authoritative original legs. An unposted reservation can be released only under its documented state rules.

If a payment rail may have accepted the instruction, reconcile its outcome before reversing or resending. A zero ledger net does not prove that no external money moved. Keep account balance, availability, payment, rail settlement, and general ledger reconciled.

## Restart and failover

Stop and restart the responsible application after each material acceptance boundary. Route a retry to another instance. Verify the same business operation resumes with no duplicate contract, policy, account, loan, signature, posting, notification, or provider instruction. Check pending work discovery, leases, retry timing, outbox delivery, and deduplicated callback processing. Process-local maps cannot satisfy this gate.

## Data migrations and retention

Apply additive migrations to disposable empty and populated upgrade fixtures before deployment. Preserve old identifiers and relationships. If a legacy mapping cannot be reconstructed, stop with an actionable error and a reviewed repair plan; do not silently drop rows or invent relationships. Verify managed evidence cannot be deleted through parent cascades or overwritten through an alternate service path.

## Minimum incident evidence

Retain sanitized correlation and business action IDs, tenant/actor authority reference, source and SDK versions, state transitions with timestamps, authoritative row/event IDs, provider references, reconciliation results, and operator actions. Exclude credentials, tokens, full payment credentials, and unnecessary customer content. Access to retained evidence must follow the same resource policy as the operation.

## Follow the owning procedure

| Work to recover or configure | Owning procedure |
| --- | --- |
| Complaint, human investigation, deadline or pending case event | [Complaints and human work](cases.md): current permission, original receipt, retained history, authenticated tenant workers and outbox leases |
| Payment adapter selection or synthetic challenge | [Payment adapters](../adapters/payments.md): separate transaction/configuration modes and explicit challenge delivery replacement |
| Due managed-payment work after a lost response or process restart | [Automatic payment recovery](../reference/service-guides/managed-payment-recovery.md): current service authority, original effects, durable backoff, leases and exhausted budgets |
| Missing or changed document selection | [Template configuration](../shared/template-configuration.md): exact pins/windows, overlap, replacement and retained metadata |
| Pending versus posted financial effect | [Payments](../journeys/payments.md): participant ownership, original posting identity, uncertainty and reconciliation |
| Content or signature evidence | [Documents](../shared/documents.md): retained version/digest, provider association and the current content-generation boundary |

Keep the recovery action with that owner. A human case records investigation and duties; it does not authorize a financial repair. A template retirement stops new selection while preserving historical metadata; it does not revoke already issued customer content automatically. A documented command must be exercised against the actual deployed contract before it becomes an operational recovery procedure.
