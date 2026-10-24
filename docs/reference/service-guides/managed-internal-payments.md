# Managed internal payments

## Purpose and ownership

This core records a durable instruction to transfer money between two enrolled accounts in the same currency. It owns customer decisions, immutable request identity, coordinator leases, effect scheduling, and a history of verified financial observations. The banking ledger owns booked funds, holds, balanced postings, expiration, and reversals. The accounts core owns canonical account metadata and the committed enrollment linkage. Creating a payment instruction does not reserve or move money.

The managed API is additive. Existing payment orders, provider integrations, mandates, and other legacy APIs keep their existing contracts. A managed payment does not manufacture a legacy payment order or claim external rail settlement. FX, fees, overdrafts, and rail settlement are required platform capabilities with separate authoritative contracts; this initial API rejects their unsupported input fields instead of silently dropping them. Domain and experience integration is a subsequent delivery gate; the core API described here must not be mistaken for an accepted complete customer journey.

| Connection | Responsibility |
| --- | --- |
| Coordinator to payments | Submit the instruction, explicit decision and current claim. |
| Coordinator to ledger | Execute the persisted exact participant command. |
| Payments to ledger | Reconcile the entire original Reserve through the genuine SDK. |
| Ledger to accounts | Verify the actual committed account linkage. |
| Payments to local records | Retain operation, projection, history and outbox. |
| Ledger to financial records | Retain authoritative funds and balanced postings. |

## Lifecycle and financial meaning

| Payment state | Meaning |
| --- | --- |
| `RESERVING` | A durable reserve effect awaits authoritative observation. |
| `RESERVED` | Exact reconciliation observed the ledger reservation as `HELD`. |
| `COMMITTING` | A CONFIRM decision durably schedules the original reservation's COMMIT. |
| `CANCELLING` | A CANCEL decision durably schedules RELEASE. |
| `RECOVERY_REQUIRED` | Outcome is uncertain or a bounded attempt failed; money finality is unknown. |
| `COMPLETED` | Exact reconciliation observed `COMMITTED` and retains its posting ID. |
| `CANCELLED` | Exact reconciliation observed `RELEASED`. |
| `EXPIRED` | The ledger observed `EXPIRED`, or issued an immutable `ABSENT_CLOSED` receipt. These have different receipt shapes. |
| `REVERSED` | A subsequent authoritative reversal retains both original and reversal posting IDs. |

A timeout never means cancellation, release, expiration, or success. A completed payment can later become REVERSED; its original completion event remains in history. Recovery cannot invent a CONFIRM or CANCEL decision. No orchestration compensation should automatically reverse money after a lost response.

1. The coordinator creates the exact instruction with its stable action ID.
2. Payments returns `201 RESERVING` with the fixed deadline.
3. The coordinator claims the pending effect at its exact version.
4. Payments returns stable effect/participant IDs and a fenced lease.
5. The coordinator reserves through ledger using the original operation, TTL and fixed deadline. The response may be lost after the ledger commits.
6. The coordinator acknowledges only the effect ID, fence and expected version.
7. Payments reconciles the exact original Reserve intent through ledger.
8. Ledger returns FOUND, NOT_DUE or its retained ABSENT_CLOSED receipt.
9. Payments returns verified state or `202` recovery required.

## Trust and delegation

Configure a trusted issuer, expected audience, and JWKS URI. Every request must have a signature-validated token with a finite expiration, subject, `tenant_id`, space-separated `scope`, and finite UUID list `funds_accounts`. Tenant names match `[A-Za-z0-9_-]{1,64}`. Resource grants must cover both exact accounts; a global account's existence does not establish tenant or customer ownership. The approved funds enrollment protocol establishes that binding before funds become usable.

Tokens and delegated credentials remain transient Reactor context. They are never serialized into operation payloads, action receipts, events, projections, or diagnostic messages. Each SDK client is constructed per invocation. The default delegation mode `unconfigured` denies peer calls. `validated-multi-audience` permits forwarding only when the already validated token also names the configured ledger audience and holds all required current scopes and accounts. Deployments using token exchange must supply their own trusted `PaymentDelegationPort` bean with equivalent finite current delegation checks; no exchange credentials or customer tokens belong in this repository.

| Operation | Required current authority |
| --- | --- |
| Create | `payments:create`, `funds:read`, exact pair |
| Read/history | `payments:read`, visible exact pair |
| Claim/failure | `payments:coordinate`; original create/confirm/cancel authority or explicit `payments:recover`; effect-specific reserve/commit/release/read scope |
| Acknowledge | Same current effect authority plus both `funds:read` and `funds:reconcile` before any financial observation |
| CONFIRM | `payments:confirm`, `funds:commit`, exact pair |
| CANCEL | `payments:cancel`, `funds:release`, exact pair |
| Recovery | `payments:recover`, effect-specific current funds authority, exact pair |
| Recovery queue | `payments:recover`, `payments:coordinate`, exact visible pairs |
| Explicit ledger EXPIRE | `funds:expire` at the ledger; observation itself does not confer this authority |

All new managed POST methods disable transport idempotency caching with the supported method annotation. Their durable business receipts always execute current authorization, including terminal replays. Native reads outside the current pair are deliberately invisible and return 404. A known action replay with changed authority or intent returns an explicit denial/conflict rather than an empty success. Error responses must not be used to infer inaccessible resource details.

## Configure the core

| Property | Environment variable | Default and behavior |
| --- | --- | --- |
| `managed-payments.security.issuer` | `MANAGED_PAYMENTS_SECURITY_ISSUER` | Empty; managed authentication denies until configured. |
| `managed-payments.security.audience` | `MANAGED_PAYMENTS_SECURITY_AUDIENCE` | Empty; explicit audience required. |
| `managed-payments.security.jwk-set-uri` | `MANAGED_PAYMENTS_SECURITY_JWK_SET_URI` | Empty; trusted JWKS required. |
| `managed-payments.delegation.mode` | `MANAGED_PAYMENTS_DELEGATION_MODE` | `unconfigured`; use deliberate trusted integration. |
| `managed-payments.peers.ledger.base-url` | `MANAGED_PAYMENTS_PEERS_LEDGER_BASE_URL` | Empty; absolute HTTPS URL required. |
| `managed-payments.peers.ledger.audience` | `MANAGED_PAYMENTS_PEERS_LEDGER_AUDIENCE` | Empty; current delegated token must match. |
| `managed-payments.allow-loopback-http` | `MANAGED_PAYMENTS_ALLOW_LOOPBACK_HTTP` | `false`; enable only for owned loopback qualification. |
| `managed-payments.claim-lease-seconds` | `MANAGED_PAYMENTS_CLAIM_LEASE_SECONDS` | `30`; integer from 15 through 60. |

Database connection parameters are the existing `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USERNAME`, `DB_PASSWORD`, and `DB_SSL_MODE`. Flyway can use a distinct migration credential through Spring's standard `spring.flyway.user` and `spring.flyway.password` overrides. Use TLS and deployment secret management for deployed credentials. The maintained private qualifier supplies synthetic, disposable credentials only to its owned processes.

### Separate migration and runtime roles

The runtime role must be NOSUPERUSER, NOBYPASSRLS, not the owner of any managed relation, and unable to CREATE in `public`. A separate migration role owns schema changes and applies additive migration V12. Grant runtime only the application's required table/sequence privileges; do not grant migration-role membership. All six managed tables FORCE RLS. Their predicates require native transaction-local tenant, exact resources, and purpose, derived from validated application authority.

`ManagedPaymentDatabaseContext` verifies role and ownership before establishing transaction-local context on the same reactive transaction connection. Commit, rollback, cancellation, and pool reuse must not preserve that context. Caller headers cannot set it. This backstop protects application access paths; PostgreSQL administrators and stolen SQL credentials remain outside the application authorization boundary.

The operation, action, effect, projection, history, and outbox records commit together. Deferred integrity checks require complete native records. An outbox failure rolls back the local transition. It cannot undo a financial command already committed in the separate ledger; reconciliation recovers that fact. Outbox persistence alone does not constitute a broker publisher or external delivery acknowledgment.

## API and exact request identity

Base path: `/api/v1/tenants/{tenant}/internal-payments`.

| Method and relative path | Operation ID | Successful body/status |
| --- | --- | --- |
| POST base | `createManagedPayment` | View, 201 new / 200 retained replay |
| GET `/{paymentId}` | `getManagedPayment` | View, 200 |
| GET `/{paymentId}/history` | `managedPaymentHistory` | HistoryEvent array, 200 |
| POST `/{paymentId}/claims` | `claimManagedPaymentEffect` | EffectClaim, 200 |
| POST `/{paymentId}/failures` | `recordManagedPaymentFailure` | View, 200 |
| POST `/{paymentId}/acknowledgments` | `acknowledgeManagedPaymentEffect` | View, 200 observed / 202 uncertain |
| POST `/{paymentId}/decisions` | `decideManagedPayment` | View, 202 pending / 200 retained terminal result |
| POST `/{paymentId}/recovery` | `recoverManagedPayment` | View, 202 pending / 200 no pending work |
| GET `/recovery` | `managedPaymentRecoveryQueue` | RecoveryPage, 200 |

Create accepts only `actionId`, `sourceAccountId`, `destinationAccountId`, exact decimal `amount`, `currency`, integer `ttlSeconds`, and optional integer `customerNotAfterEpochMillis`. Every mutation rejects unsupported fields, including caller-supplied financial proof. TTL is 1 through 900 seconds. Deadline and fences are exact signed 64-bit integers; fractions, exponent-form integers, and overflow are rejected. Amount is positive, below the supported NUMERIC magnitude, and exactly representable at the enrolled currency scale; there is no rounding. Currency must match both enrolled accounts. No balance CRUD value or customer-position projection is used as money authority.

The first accepted database clock fixes `notAfterEpochMillis = min(firstAcceptedTime + ttl, optionalCustomerDeadline)`. An elapsed new deadline is rejected before effects. Replays retain the first deadline. The full immutable fingerprint includes the original customer deadline, TTL, normalized amount, currency, and exact pair; changing it conflicts even when the visible pair is unchanged. Equivalent decimal formatting normalizes to the same enrolled-scale amount.

Example request, with synthetic IDs replaced by actual approved enrolled accounts:

```json
{
  "actionId": "3a249ebe-3d08-46b6-8f7b-698e9f767e0e",
  "sourceAccountId": "77cf7085-d34f-4963-869a-f65489ef8e23",
  "destinationAccountId": "149d5de1-7ee9-4488-a5af-2acf902e1707",
  "amount": 12.30,
  "currency": "USD",
  "ttlSeconds": 300,
  "customerNotAfterEpochMillis": null
}
```

Read the generated `ManagedPaymentsApi` rather than constructing untyped HTTP wrappers. `Create.amount` is BigDecimal, `View.amount` is a fixed-scale string, deadlines and fences are Long, history is a typed stream, and the queue is a typed RecoveryPage. Authentication is an Authorization header on a per-call ApiClient; Jwt or framework execution-context objects are never public SDK parameters.

## Claims, decisions, and uncertainty

A claim names a new stable `actionId` and exact current `expectedVersion`. The receipt identifies `effectId`, `participantActionId`, effect kind, database-clock lease and monotonically increasing fence. The core separately persists the verified claim owner. Repeating the same claim action returns its original receipt without renewing its lease. After expiration, a new claim action can acquire the same effect and participant identity at a higher fence. Reuse the participant identity when retrying the ledger command.

Acknowledge accepts only `effectId`, `fence`, and `expectedVersion`. The core checks current authority and claim ownership, ends its local transaction, performs genuine ledger SDK reconciliation of the exact original Reserve intent, and starts a fresh transaction that rechecks the current fence, owner, lease, version, and authority. No database transaction is held across network I/O. Reclaimed or expired workers cannot overwrite newer progress.

CONFIRM and CANCEL each name their own stable action and exact version. They are accepted only for an authoritatively HELD reservation with no pending effect. Concurrent opposite decisions have one winner. Recovery schedules/reclaims existing intent or an OBSERVE effect; it cannot create a new financial decision. The queue is cursor-based by UUID and bounded to 1 through 100 entries, default25. History similarly accepts `afterVersion` (default -1) and limit1..100.

Failure accepts only a bounded FailureCode and the exact owned claim reference. It records uncertainty and bounded retry scheduling: 1, 2, 4, 8, 16, then at most30 seconds; automatic attempts stop after ten failures. Manual recovery requires current authority and cannot steal an active lease. Fence, attempt, and version exhaustion return explicit conflicts before admitting unusable work.

## Deadline and expiration recovery

Ledger GET-by-operation is a hint, not full-intent proof. Every financial acknowledgment reconciles the retained complete Reserve, including original TTL and fixed deadline, under current `funds:read` and `funds:reconcile`. A denied reconciliation never falls back to GET.

Before the deadline, absence/NOT_DUE remains uncertain. At or after its own clock deadline, the ledger serializes reconciliation with the same operation gate: a matching in-flight reservation is FOUND, or it commits an immutable ABSENT_CLOSED receipt and tombstone that prevents a later reserve. Only that typed receipt proves no effect. Ordinary 404, local clock passage, worker scheduling time, and a missing response prove nothing about financial finality.

An existing HELD reservation requires a distinct explicit ledger EXPIRE action with `funds:expire`. The coordinator reuses its persisted OBSERVE participant identity. An early rejection leaves that exact action usable later when the ledger clock permits expiration; insufficient current scope cannot fall back to local expiry. Reconcile again after the action to resolve concurrent commit/release/expiration. A due RESERVED instruction with no pending effect remains discoverable in the queue.

## Operator procedures

1. Read the current payment under its exact current pair grant. Preserve payment, effect, participant, reservation, posting, reversal, and absence-receipt IDs in authorized diagnostic tooling; never copy bearer tokens.
2. Inspect bounded history and current recovery code. Treat RECOVERY_REQUIRED as an unresolved outcome; do not tell the customer that money was cancelled or moved without an authoritative observation.
3. If a lease is active, wait or let its owner complete. After expiration, acquire a new claim with a new action ID and exact current version. Keep the original effect/participant identity.
4. Retry the appropriate participant command or exact reconciliation. For due HELD reservations, use the explicit EXPIRE command only with current expiry authority. Never create a new reserve operation to replace an unknown one.
5. Acknowledge the exact current claim. The core independently obtains the financial observation. On local outbox failure, retry recovery after correcting the local persistence fault; do not undo a committed ledger command automatically.
6. After restart, use the durable queue and exact IDs. There is no in-memory financial coordinator state to reconstruct. Broker delivery, external-rail reconciliation, and subsequent FX/fee/overdraft extensions require their separately implemented owner contracts.

## Run the owned private qualifier

`scripts/qualify-managed-payment-core.py` accepts copied/hash-identified accounts, ledger, and payments executable JARs, the genuine generated payments SDK JAR, the accepted funds fixture helper, and an owned output directory. It creates fresh loopback PostgreSQL containers with distinct migration/runtime roles and an ephemeral local issuer. It boots actual executable processes, verifies enrollment/linkage through real APIs, performs explicit privileged balanced bank-control funding, exercises restart and lost-observation recovery, and runs `ManagedPaymentsSdkProbe.java` compiled against the actual SDK. It cleans only its own PIDs, containers, and temporary keys.

The script is local qualification tooling, not a deployment bootstrap or production funding procedure. Its report distinguishes public SDK observations from private owned-database posting audits and records all artifact identities. Component transport stubs, local assertions, genuine producer generation, actual peer results, independent review, and full domain/experience acceptance remain distinct evidence stages.
