# Durable internal payments

A payment instruction records intent. The ledger's retained reservation and posting establish what happened to money. The managed payments core coordinates durable work and verifies that financial evidence; an HTTP timeout cannot decide the outcome.

The current managed path connects experience, domain, payment core, ledger and accounts for two explicitly enrolled customer accounts in the same tenant and currency. It supports explicit customer decisions and authorized recovery. FX, fees, approved overdrafts, account spaces and external clearing/settlement remain required platform extensions. The automatic recovery worker is a separate operational capability.

## Read each authority

The following connections identify ownership and dependencies. Their numbers do not assert execution order.

<style>
@media (max-width: 1560px) {
  picture.manual-diagram-phase { display: block; max-width: 432px; margin-inline: auto; }
}
</style>

<picture class="manual-diagram-phase">
  <source media="(max-width: 1560px) and (prefers-color-scheme: dark)" srcset="../../assets/diagrams/managed-payments-ownership-phase-1-narrow-dark.svg">
  <source media="(max-width: 1560px)" srcset="../../assets/diagrams/managed-payments-ownership-phase-1-narrow-light.svg">
  <source media="(prefers-color-scheme: dark)" srcset="../../assets/diagrams/managed-payments-ownership-phase-1-dark.svg">
  <img src="../../assets/diagrams/managed-payments-ownership-phase-1-light.svg" alt="Internal payments: Phase 1" loading="lazy" width="100%" style="padding:0">
</picture>

<picture class="manual-diagram-phase">
  <source media="(max-width: 1560px) and (prefers-color-scheme: dark)" srcset="../../assets/diagrams/managed-payments-ownership-phase-2-narrow-dark.svg">
  <source media="(max-width: 1560px)" srcset="../../assets/diagrams/managed-payments-ownership-phase-2-narrow-light.svg">
  <source media="(prefers-color-scheme: dark)" srcset="../../assets/diagrams/managed-payments-ownership-phase-2-dark.svg">
  <img src="../../assets/diagrams/managed-payments-ownership-phase-2-light.svg" alt="Internal payments: Phase 2" loading="lazy" width="100%" style="padding:0">
</picture>

Accounts owns the committed enrollment tuple and lifecycle. Ledger owns booked/held/available money, full-intent reservation reconciliation and balanced postings. Payments owns the exact instruction, decisions, durable effects, fenced leases and verified observations. Its outbox is a persisted local record; broker delivery requires its own implementation.

## Follow the original effect

The numbered messages preserve the core's execution sequence. The ledger may commit before its response is lost. Acknowledge never accepts a caller's assertion that money moved: the payments core obtains its own exact full-intent observation through the genuine ledger SDK.

<picture class="manual-diagram-phase">
  <source media="(max-width: 1560px) and (prefers-color-scheme: dark)" srcset="../../assets/diagrams/managed-payments-effects-phase-1-narrow-dark.svg">
  <source media="(max-width: 1560px)" srcset="../../assets/diagrams/managed-payments-effects-phase-1-narrow-light.svg">
  <source media="(prefers-color-scheme: dark)" srcset="../../assets/diagrams/managed-payments-effects-phase-1-dark.svg">
  <img src="../../assets/diagrams/managed-payments-effects-phase-1-light.svg" alt="Internal payments: Phase 1" loading="lazy" width="100%" style="padding:0">
</picture>

<picture class="manual-diagram-phase">
  <source media="(max-width: 1560px) and (prefers-color-scheme: dark)" srcset="../../assets/diagrams/managed-payments-effects-phase-2-narrow-dark.svg">
  <source media="(max-width: 1560px)" srcset="../../assets/diagrams/managed-payments-effects-phase-2-narrow-light.svg">
  <source media="(prefers-color-scheme: dark)" srcset="../../assets/diagrams/managed-payments-effects-phase-2-dark.svg">
  <img src="../../assets/diagrams/managed-payments-effects-phase-2-light.svg" alt="Internal payments: Phase 2" loading="lazy" width="100%" style="padding:0">
</picture>

The original reserve includes amount, currency, source/destination, TTL and fixed deadline. Every retry retains these values and its participant identity. A new claim after lease expiry uses a higher fence; a stale worker cannot overwrite newer progress. Current payment, account and effect-specific funds permissions still apply on retained replays.

## Configure and operate

Start with [managed accounts and funds](managed-funds.md), then use the [service-owned configuration and SDK guide](../reference/service-guides/managed-internal-payments.md) for exact routes, scopes, delegation, role separation, request shapes, statuses and recovery procedures. Configure trusted issuer/audience/JWKS and explicit ledger URL/audience. Default unconfigured delegation denies peer calls.

The [native domain journey guide](../reference/service-guides/managed-payment-domain.md) adds customer-facing orchestration, current actor/audience delegation, genuine generated-SDK calls and an authorized bounded business timeline. Configure its own trust and peer properties explicitly. Legacy sandbox selectors do not enable this route, and saga diagnostics are not a public payment-history API.

The [channel experience guide](../reference/service-guides/managed-internal-payment-experience.md) explains its generated public SDK, trusted finite-lived bearer, current account/payment policy, delegated domain calls and history pagination. A create response accepts an instruction; inspect its retained state and financial evidence before reporting completion. Current denial after a downstream effect can hide a response while preserving that effect. Recover with the same action under current authority, rather than creating another instruction.

Resolve uncertain outcomes using the durable recovery queue and original intent. Automated work must honor due times and bounded retry backoff. Manual recovery needs current explicit authority and cannot steal an active lease. Neither an ordinary not-found response nor local deadline passage establishes a financial no-effect result: use the ledger's retained exact reconciliation outcome.

The [automatic recovery guide](../reference/service-guides/managed-payment-recovery.md) configures the opt-in Jafly scheduler, per-tenant native OAuth registrations, exact service grants and project-specific actor replacement. It explains persisted due times, natural lease replacement, exhausted retry budgets and recovery after a participant reply is lost. The worker resumes a retained decision; it cannot create or choose a customer's payment instruction.

Keep bearer credentials outside saga state, database payloads, outbox records and diagnostics. Do not hold a database transaction across HTTP. A failed local persistence step cannot compensate a ledger command by automatically reversing money. Inspect the authoritative posting or no-effect receipt before explaining the customer outcome.

## Map external amount units exactly

When a rail protocol accepts an integer amount, obtain its scale from the admitted currency/rail policy. The [exact rail-unit guide](../reference/service-guides/exact-rail-amount-conversion.md) explains the library conversion, fractional-unit and overflow rejection, and migration from fixed-hundredths aliases. The helper does not select currency policy, create a quote, assess a fee or prove a provider outcome. Preserve the original scale and policy reference with the instruction throughout recovery.
