# Managed accounts and available funds

An account identity and a spendable balance are different authorities. Accounts owns the canonical account, contract association, currency and lifecycle. Ledger owns booked money, active holds, available funds and balanced postings. A domain coordinates their SDKs; it must not calculate a second spendable balance from generic account records or a party-level customer-position projection.

The opt-in managed contract supports same-tenant, same-currency customer transfers and explicitly privileged synthetic bank-control funding. It requires fresh zero-history enrollment. Legacy balance import, spaces, overdrafts, fees, FX and external settlement require separate integrations. These current source additions are not a published release or a complete payment experience.

## Start with the right authority

| Question | Owner | What the result establishes |
| --- | --- | --- |
| Which contract, currency and lifecycle belong to this account? | Accounts | Canonical identity and committed enrollment/control state |
| How much can this account spend now? | Ledger | Booked minus held funds under its enrolled precision policy |
| Did this internal movement commit? | Ledger | Retained reservation state and linked balanced posting |
| What did the customer request and what work remains? | Payment core/domain | Durable instruction, decision and recovery work; integration is in progress |
| Did an external bank or processor settle? | Owning rail/provider integration | Actual provider/settlement evidence; internal posting alone is insufficient |

For a customer account, `available = booked - held`, with `booked >= held >= 0`. Reserve increases held funds without moving booked money. Commit consumes the hold and moves booked money once. Release and expiry remove the hold. Reversal creates a linked opposite posting while preserving the original evidence.

The synthetic bank-control account is deliberately privileged and can carry the balancing negative amount. Its funding command is a balanced development facility. It does not represent a deposit received from an external bank.

## Enroll before accepting financial operations

Enrollment needs a validated finite token, exact tenant/account grants, enrollment and tenant-binding scopes, and an issuer-approved tuple naming the actual contract, currency and account kind. A globally existing UUID is not ownership evidence. The issuer's business policy must establish the customer/product association before granting that tuple.

Use the same immutable enrollment identity in both services:

1. Begin accounts enrollment. Accounts locks the canonical account, verifies the signed tuple and checks zero money/history and compatible lifecycle. The account becomes fenced for enrollment.
2. Enroll the identical blocked, zero-funds authority in ledger.
3. Commit the managed link in accounts.
4. Activate ledger. Its separate service identity reads the committed accounts link through the genuine SDK and verifies the complete tuple before allowing spending.

A crash leaves a blocked or incomplete enrollment. Retry the original identities and observe both owners. Existing history requires a reconciled migration design; deleting history or copying a generic balance is not an enrollment procedure.

Follow the [accounts configuration and lifecycle guide](../reference/service-guides/managed-account-lifecycle.md) for exact routes, claims, source properties, role requirements, alternate-write behavior and the maintained two-core local qualifier.

## Pin intent and deadlines

Use one stable operation ID for reserve and stable action IDs for transitions. The amount, currency, pair, relative TTL and absolute deadline belong to the immutable intent. Current permissions still apply to a retained replay.

A durable coordinator should retain `notAfterEpochMillis` before remote effects and send that same value on every retry. The initial effective expiry is the earlier of the ledger's relative TTL and that absolute deadline. A late new reserve fails; a retained existing reserve replays without receiving a fresh lifetime.

The by-operation read serializes with admitted creates. Its `404` still means absent **or invisible**, not a final no-effect result. Exact-intent reconciliation before deadline remains pending. After the ledger's deadline, reconciliation can commit a retained `ABSENT_CLOSED` receipt that fences any future create under that identity. A timeout, ordinary `404`, local lease expiry or coordinator acknowledgment cannot substitute for this receipt.

Read the [ledger reservation and recovery guide](../reference/service-guides/managed-funds-reservations.md) for all scopes, exact monetary limits, expiry batches, signed enrollment, SQL roles and recovery responses.

## Keep lifecycle and recovery conservative

Accounts persists a lifecycle intent before calling ledger, then commits its final receipt only after validating the actual peer result. A lost response leaves durable pending work. A freeze becomes confirmed after the ledger latch commits. A nonzero closure rejection leaves the account blocked; resolve the booked/held funds before submitting a new versioned close action. A completed close cannot reopen.

Release and expiry may remove existing holds on a blocked account. A commit racing a freeze is ordered by the ledger latch. The resulting authoritative receipt determines what happened; the operator must not infer the winner from request timing.

Provision separate migration and runtime identities. Runtime must be a nonowner without superuser/RLS bypass, and the narrowly privileged nonlogin policy roles must exist before migration. Forced resource policies and alternate-write fences apply to enrolled accounts and linked records. Generic legacy account/space/statement operations are not automatically migrated consumers.

## Integrate a customer journey deliberately

Build the experience through the domain and genuine producer SDKs. Follow [durable internal payments](managed-payments.md) for the current core's ownership, effect sequence and recovery boundaries. Retain the exact user instruction and current actor/resource authorization, durable pending work, stable participant identities and financial receipts. Never hold a SQL transaction across remote HTTP, persist bearer credentials as workflow state or compensate uncertain money by automatically reversing it.

An account summary or statement needs an authorized source and declared freshness. The legacy customer-position record does not yet provide managed tenant/account/provenance authority. Complete that projection and transaction-history integration before displaying it as the managed funds result. Full payment coordination, external rails and client deployment remain separately qualified stages; the foundational account/ledger contract does not close those journeys by itself.
