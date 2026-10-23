# Managed internal payment experience

The managed experience exposes a current-authorized channel API for a durable internal transfer. It obtains financial receipts exclusively from the payments domain's generated SDK. The domain owns per-command CQRS/Saga coordination; payment core owns durable decisions, effects, claims, fencing, history, and retry scheduling; ledger owns enrolled positions, holds, balanced postings, expiry and linked reversals; accounts owns canonical account metadata and enrollment linkage. The experience owns none of those financial records.

This chapter describes the managed path. The legacy username/challenge journey has different contracts and is not evidence for the managed path. A payment marked COMPLETED means that its exact original funds intent has a retained committed ledger receipt. It does not establish external rail settlement. FX, fees, overdrafts, and external settlement remain required dependent program deliveries; they must use their explicit owners and cannot be inferred from this bounded single-currency internal transfer.

## Operation contract

All routes begin with `/api/v1/tenants/{tenant}/internal-payments`.

| Operation | Request | Result |
| --- | --- | --- |
| `POST` | Immutable create action UUID, exact source/destination UUIDs, positive decimal amount, currency, integer TTL, optional fixed customer deadline | 201 on first acceptance or 200 on current-authorized replay; inspect state and evidence |
| `GET /{paymentId}` | Real retained payment UUID | Current authorized typed receipt |
| `POST /{paymentId}/decisions` | Stable action UUID, CONFIRM or CANCEL, optional exact expected version | 200 receipt or 202 while effect remains pending/uncertain |
| `POST /{paymentId}/recovery` | Stable recovery action UUID and optional exact expected version | Current observation/recovery; never invents financial completion |
| `GET /{paymentId}/history` | `afterVersion` integer >= -1, `limit` integer 1..100 | Typed ordered history; completion and a later reversal retain separate references |

Use the experience's generated SDK for this public channel contract. Its API and DTO namespace is `io.fireflysoftware.experience.payments.sdk`; the experience itself calls the independently generated `io.fireflysoftware.domain.payments.sdk` client. Neither client introduces a second money authority.

The input body cannot select a principal, account policy, SCA challenge, effect ID, posting ID, ledger outcome, or internal claim. Unsupported fields, string/fractional integer fields and out-of-range values fail before a financial operation. Output money is a canonical decimal string accompanied by currency, scale and the retained currency policy. Never sum or recompute account availability from experience responses.

## Current identity and resource policy

The managed resource-server chain validates the bearer signature, issuer, audience and finite expiry. Signed `tenant_id` must equal the path tenant. A bounded `funds_accounts` grant list must include the actual source and destination. `X-Firefly-Username`, caller-created JWT objects, fixed payment-resource constants, and legacy challenge values do not grant managed authority.

The experience also invokes Jafly's native `PolicyDecisionPort` for `ACCOUNT:<actual UUID>` and `PAYMENT:<actual UUID>`. Before create, it checks the exact account pair. After the domain returns the owning receipt, it checks immutable input equality and the actual assigned payment UUID. Existing-resource operations first obtain an independently protected domain view, validate its route identity and pair, then evaluate current resource policy before mutation or disclosure. An invisible owner response remains 404; it is not converted to a guessed account pair.

The policy context is constructed in the service from that protected owning receipt. The caller cannot supply it. Missing, failed or indeterminate decisions and unhandled obligations deny access. The default policy is unconfigured and denies. Explicit `signed-resource-grants` mode checks the trusted issuer and exact bounded signed tuple; it is a deployment integration mode, not proof that a real external ownership/approval engine has been integrated. A deployment may supply its actual `PolicyDecisionPort` implementation.

Every new mutation uses `DisableIdempotency`. Transport-cache replay must never bypass current signed scopes or the current PDP decision. Native business action IDs provide immutable replay semantics in the owning core. Policy calls run outside local database transactions or locks; the experience has no money store.

## Delegation and configuration

All configuration defaults fail closed. Set the following through the environment; never place bearer credentials in YAML, saga state, logs or source.

| Environment variable | Purpose |
| --- | --- |
| `MANAGED_PAYMENTS_EXPERIENCE_ISSUER` | Exact trusted issuer |
| `MANAGED_PAYMENTS_EXPERIENCE_AUDIENCE` | Experience audience |
| `MANAGED_PAYMENTS_EXPERIENCE_JWK_SET_URI` | Trusted issuer's key set endpoint |
| `MANAGED_PAYMENTS_EXPERIENCE_AUTHORIZATION_MODE` | `unconfigured` by default; explicit `signed-resource-grants` integration mode |
| `MANAGED_PAYMENTS_EXPERIENCE_DELEGATION_MODE` | `unconfigured` by default; explicit `validated-multi-audience` mode or a deployment-supplied delegation port |
| `MANAGED_PAYMENTS_EXPERIENCE_DOMAIN_URL` | HTTPS domain base URL |
| `MANAGED_PAYMENTS_EXPERIENCE_DOMAIN_AUDIENCE` | Exact domain audience |
| `MANAGED_PAYMENTS_EXPERIENCE_ALLOW_LOOPBACK_HTTP` | False by default; true only for deliberate private loopback qualification |

The adapter obtains delegated credentials for every call and constructs a separate generated client. A first protected read may use the bounded signed grant set because the actual pair is not known yet; subsequent mutations and history use the retained exact pair. Validated multi-audience mode requires the target audience and current scopes/resources before using the verified transient bearer. A production token-exchange adapter must preserve the real actor and current exact grants. An arbitrary Authorization header relay is not a delegation policy. Unsafe peer URLs cannot obtain credentials.

The managed create needs current `payments:create`, `payments:read`, `payments:coordinate`, `funds:read`, `funds:reserve`, and `funds:reconcile`. Existing operations also require read authority for the protected owner lookup. Confirm adds `payments:confirm` and `funds:commit`; cancel adds `payments:cancel` and `funds:release`; explicit recovery requires `payments:recover`, coordination and exact-intent read/reconciliation authority plus any actual participant scope demanded by the domain. Ledger-clock expiry requires `funds:expire`; a missing current scope never becomes local expiry.

## State and failure interpretation

The experience preserves owning states: RECEIVED, RESERVING, RESERVED, COMMITTING, CANCELLING, COMPLETED, REVERSED, CANCELLED, EXPIRED and RECOVERY_REQUIRED. It does not translate unknown provider outcomes to success. A response with a pending effect or RECOVERY_REQUIRED uses 202 for decision/recovery; callers must retain the payment/action IDs and read or request authorized recovery.

The domain independently reconciles the full original funds intent for every financial acknowledgment. Ordinary GET/404 is not authoritative proof that a delayed reserve cannot still commit. Deadline recovery uses the ledger's serialized reconciliation and immutable ABSENT_CLOSED receipt. A genuine reversal has a distinct linked reversal ID and preserves original completion history. Recovery does not automatically confirm, cancel or reverse a customer instruction.

Known peer 400/401/403/404/409 statuses remain explicit with fixed sanitized messages. Missing/empty/unknown peer responses fail 503. Provider bodies, raw exception causes and credentials are not relayed. A successful HTTP response alone is not financial finality; inspect the typed state and retained financial identifiers.

## Qualification and remaining gates

The maintained reactor tests cover the current resource/PDP boundary, warm transport-cache denial, finite trusted HTTP identity, exact input parsing, bounded history, legacy generated-enum compatibility and genuine domain SDK mappings. The private qualification script copies the accepted core/domain archives, creates separate disposable PostgreSQL stores and nonprivileged runtime roles, uses synthetic signed actors, performs explicit API enrollment/linkage and privileged balanced funding, and checks the actual financial positions through the ledger owner.

The five-executable gate checks reserve, confirmation, cancellation, ledger-clock expiry, real linked reversal, retained business history, current denial and all-five restarts. Its artifact identities, assertion totals, logs and cleanup status belong to the corresponding frozen packet. Automatic queue-only worker recovery requires its own implementation and qualification beyond this manual experience stage. Production identity/ownership policy, provider access, performance, external rails and the complete financial-product program require their own qualification.
