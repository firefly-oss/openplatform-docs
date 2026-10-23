# Payments: intent, money, and external finality

A payment joins three obligations: an authorized instruction, a correct financial effect, and the outcome of any external movement. The platform must preserve their relationship through retries and exceptions. A successful HTTP response from one participant is only one part of that result.

## Establish the instruction

The experience composes the user's action; [payment domain](../api/services/domain-payments.md) coordinates it; [payment core](../api/services/core-banking-payments.md) owns payment records; [ledger core](../api/services/core-banking-ledger.md) owns financial aggregates. `library-rails` and `library-psps` provide external integration boundaries whose selected implementations require separate qualification.

Before submission, establish actor/tenant authority, owned source account and space, destination or beneficiary, positive amount, currency, contract/product rules, restrictions, available funds, execution date, and required authentication. These are business controls. The generated `MovementCommand` schema has string and UUID fields but does not declare every business constraint; inspect the hub and selected participants rather than treating an unconstrained schema as permission.

Retain `idempotencyKey`, scheme, party/contract IDs, source/destination account and space IDs, payment method, and any external reference that applies. Different routes have different required context: an internal transfer needs a destination account; an outbound rail operation needs its supported beneficiary/routing contract. Do not fabricate an external bank payload from the internal command.

## Try, confirm, and cancel

The domain exposes `POST /api/v1/payments/tries`, confirmation and cancellation under the returned payment ID, and `GET /api/v1/payments/{paymentId}`. `Confirmation` contains a `response` string. The result can include payment identity, status, route, phase, challenge, posting, reversal, and provider synchronization fields.

**Sequence panels.** Follow the numbered messages in order. Return messages and conditional branches are labeled explicitly.

<style>
@media (max-width: 1100px) {
  picture.manual-diagram-phase { display: block; max-width: 432px; margin-inline: auto; }
}
</style>

<picture class="manual-diagram-phase">
  <source media="(max-width: 1100px) and (prefers-color-scheme: dark)" srcset="../../assets/diagrams/journeys-payments-phase-1-narrow-dark.svg">
  <source media="(max-width: 1100px)" srcset="../../assets/diagrams/journeys-payments-phase-1-narrow-light.svg">
  <source media="(prefers-color-scheme: dark)" srcset="../../assets/diagrams/journeys-payments-phase-1-dark.svg">
  <img src="../../assets/diagrams/journeys-payments-phase-1-light.svg" alt="journeys-payments: Phase 1, steps 1, 2, 3, 4, 5" width="100%" style="padding:0">
</picture>

<picture class="manual-diagram-phase">
  <source media="(max-width: 1100px) and (prefers-color-scheme: dark)" srcset="../../assets/diagrams/journeys-payments-phase-2-narrow-dark.svg">
  <source media="(max-width: 1100px)" srcset="../../assets/diagrams/journeys-payments-phase-2-narrow-light.svg">
  <source media="(prefers-color-scheme: dark)" srcset="../../assets/diagrams/journeys-payments-phase-2-dark.svg">
  <img src="../../assets/diagrams/journeys-payments-phase-2-light.svg" alt="journeys-payments: Phase 2, steps 6, 7, 8, 9, 10, 11" width="100%" style="padding:0">
</picture>

<picture class="manual-diagram-phase">
  <source media="(max-width: 1100px) and (prefers-color-scheme: dark)" srcset="../../assets/diagrams/journeys-payments-phase-3-narrow-dark.svg">
  <source media="(max-width: 1100px)" srcset="../../assets/diagrams/journeys-payments-phase-3-narrow-light.svg">
  <source media="(prefers-color-scheme: dark)" srcset="../../assets/diagrams/journeys-payments-phase-3-dark.svg">
  <img src="../../assets/diagrams/journeys-payments-phase-3-light.svg" alt="journeys-payments: Phase 3, steps 12, 13" width="100%" style="padding:0">
</picture>

[Diagram source and stable step identities](../assets/diagrams/sequences.json) preserve the same messages in both layouts.

*Source-informed participant model. Ordering, compensation, and errors are defined by the actual hub/engine; the chart does not claim a distributed atomic commit or a production SCA design.*

The existing `PaymentTccHubTest` proves that an outbound TRY returns a nonliteral generated challenge, no posted effect or rail call before confirmation, and a held provisional effect. Confirming with the literal `sandbox` cancels and releases it. Confirming a new TRY with its actual returned fixture challenge yields `CONFIRMED`, one ledger posting and one outbound rail call in the test. Replaying confirmation does not duplicate those in-memory fixture effects. An internal route does not require that external challenge.

Run that repository-owned test with the effective JDK and matching dependencies:

```sh
mvn -B -pl domain-payments-core -am test -DskipOpenApiGen   -Dtest=PaymentTccHubTest -Dsurefire.failIfNoSpecifiedTests=false
```

Sandbox mode now selects the no-socket challenge client. Live SCA requires an explicit delivery adapter and rejects the built-in sandbox inbox. See [payment adapter configuration](../adapters/payments.md) for both selectors, core endpoint ownership and replacement requirements. Production SCA must bind the approved amount, currency and destination, enforce lifetime/attempt rules, and retain evidence through its actual selected provider.

## Worked example: one atomic ledger aggregate

This request shape is copied from the current ledger DTO contract. It represents a synthetic EUR 12.34 internal movement. Replace the source and destination strings with owner-created account UUIDs from an authorized disposable environment before submission; they are placeholders here, not valid IDs.

```json
{
  "idempotencyKey": "manual-internal-transfer-001",
  "transaction": {
    "accountId": "<owned-source-account-uuid>",
    "transactionType": "TRANSFER",
    "transactionStatus": "PENDING",
    "totalAmount": 12.34,
    "currency": "EUR",
    "externalReference": "manual-internal-transfer-001"
  },
  "legs": [
    {"accountId": "<owned-source-account-uuid>", "legType": "DEBIT", "amount": 12.34, "currency": "EUR"},
    {"accountId": "<owned-destination-account-uuid>", "legType": "CREDIT", "amount": 12.34, "currency": "EUR"}
  ]
}
```

Submit to `POST /api/v1/ledger-postings` using the matching `LedgerPostingsApi` or an authorized HTTP client. Do not add the optional response-cache header. The body key is the durable claim. Dates are omitted intentionally: the core assigns them and an identical retry does not generate a different timestamp.

The command commits header, positive balanced same-currency legs, initial history, and input claim together. An identical key/input reloads the existing aggregate. Reusing the key with changed amount or legs conflicts with 409. Retain the returned transaction ID; read its header, legs, and history through the declared transaction routes. Confirm using the aggregate's `/confirm` operation. Confirm/release concurrency has one durable winner; a released pending aggregate cannot later confirm.

For reversal of posted money, use `/reversal` with the exact `LedgerReversalRequestDTO` from the contract. The core reads and flips the original persisted legs, creates a linked posted aggregate, and keeps the original posted. Do not reconstruct an incomplete opposite entry from a caller's current view or overwrite the original history.

### Run the SDK against a disposable core

The repository's `LedgerAtomicRuntimeIT` drives the production payment adapter and generated SDK against the packaged ledger and private PostgreSQL. Build the exact ledger producer and SDK first using its documented JDK 25 Maven workflow. Then, from `domain-payments`, explicitly select the integration test:

```sh
mvn -B verify '-Dtest=*Test,LedgerAtomicRuntimeIT'   -Dledger.runtime.jar=/absolute/path/to/core-banking-ledger-web/target/core-banking-ledger.jar   -Dsurefire.failIfNoSpecifiedTests=false -DskipOpenApiGen
```

Replace the JAR path with the newly built producer artifact; the test deliberately fails without it. A Docker-compatible runtime is required. The fixture uses disposable PostgreSQL on random loopback ports. The fixture calls the packaged core through its generated SDK and inspects the resulting database state. The JSON above is an input template; replace its placeholders with identities created in the same disposable setup before using it in another client.

For an internal EUR 12.34 movement, inspect the pending aggregate after TRY, then the posted aggregate after CONFIRM. Its two balanced legs identify the financial effect; its history records the transition. Replaying the same supported intent must recover that effect rather than create another movement. A connected synthetic fixture covers this relationship with an actual ledger/PostgreSQL boundary and synthetic identity, configuration, payment-record, SCA, and provider collaborators. Configure those collaborators explicitly when integrating the deployed experience and domain services.

## What remains provisional

The current TCC hub retains sessions and its by-key index in process-local maps. Its same-key precheck does not compare immutable intent. Consequently, durable core replay does not prove domain restart recovery, confirmation on another coordinator, or changed-intent conflict at the experience boundary. The core's pending aggregate is also not an available-funds reservation or an ownership/restriction check.

These distinctions matter operationally: after a coordinator restart, a persisted pending ledger aggregate may still exist while the session needed to continue is unavailable. Recovery needs a durable operation model and reconstruction policy before it can be automated. Do not invent a successful confirmation from the existence of the core row.

## External finality, reconciliation, and repair

Treat rail acceptance, settlement, rejection, return, recall, and repair as separate business observations. `thirdPartySynced=true` in a synthetic fixture means its configured participant reported success. It is not evidence of bank settlement or scheme acceptance.

| Situation | Establish first | Recovery rule |
| --- | --- | --- |
| TRY rejected before effects | Validation and participant results | Correct input/authority; preserve the original failed attempt |
| Confirmation response lost | Domain result and authoritative ledger aggregate | Recover the result before retrying the business action |
| Provider timeout after submission | Original provider reference and status/statement evidence | Keep outcome uncertain; do not submit with a new identity |
| Posted effect must be undone | Original persisted aggregate and external disposition | Use an authorized linked reversal; retain the original |
| Reconciliation mismatch | Instruction, clearing/settlement population, ledger and GL | Assign repair with evidence and bounded authority |
| Legacy ledger upgrade blocked | `LEDGER_HISTORY_UUID_REPAIR_REQUIRED` and historical identity evidence | Preserve rows and obtain a reviewed mapping repair; never guess associations |

Reconcile totals and individual identities by currency and cutoff. A matching aggregate total can hide duplicated and missing individual payments. Retain unmatched items, partial batches, fees, FX, returns, and value dates separately.

## Scheduled payments, collections, and consent

Standing-order and direct-debit record operations exist in the domain contract. The current instruction tests check active beneficiaries, standing-order date advancement after confirmation, and mandate status/amount limits. These rules provide concrete starting points; acceptance also needs repeat scheduling, missed/cutoff dates, mandate changes, duplicate collection files, partial failure, and external rejection.

Open-banking payment initiation adds consent and third-party authority to the same money path. Apply consent scope, expiry and revocation without treating a consent ID as account ownership. See [open banking](banking.md#open-banking-and-consent).

For account transaction reads, the [ledger and PSD2 SDK guide](../reference/service-guides/ledger-account-transactions.md) explains the actual array response, empty collections, generated reactive client, inclusive booking-date filters and restart verification. This read boundary does not establish customer consent or authority over the account.

## Implementation sources

Source anchors: [PaymentTccHubTest.java](https://github.com/fireflysoftwaresolutions/domain-payments/blob/main/domain-payments-core/src/test/java/io/fireflysoftware/domain/payments/core/tcc/PaymentTccHubTest.java) · [PaymentTccHub.java](https://github.com/fireflysoftwaresolutions/domain-payments/blob/main/domain-payments-core/src/main/java/io/fireflysoftware/domain/payments/core/tcc/PaymentTccHub.java) · [LedgerAtomicRuntimeIT.java](https://github.com/fireflysoftwaresolutions/domain-payments/blob/main/domain-payments-infra/src/test/java/io/fireflysoftware/domain/payments/infra/LedgerAtomicRuntimeIT.java) · [LedgerPostingRequestDTO.java](https://github.com/fireflysoftwaresolutions/core-banking-ledger/blob/main/core-banking-ledger-interfaces/src/main/java/io/fireflysoftware/core/banking/ledger/interfaces/dtos/core/v1/LedgerPostingRequestDTO.java).
