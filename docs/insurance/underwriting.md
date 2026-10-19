# Underwriting operations

**Development area:** Underwriting operations (insurance)

Evidence, underwriting rules, referrals, and decisions under the insurer’s authority. OpenPlatform supplies case-shaped foundations from onboarding and risk; underwriting authority stays with the insurer.

Public description: <https://fireflysoftware.io/openplatform/#insurance-development>

## Why this area exists

Underwriting needs structured evidence and decision records without embedding every rules engine or actuarial system in a journey service. This area describes how to reuse onboarding-style cases and risk records while keeping significant decisions with people who have delegated authority.

## When to use it

Use this area when designing referral, evidence, or decision flows for insurance underwriting on OpenPlatform foundations. For credit scoring in lending, prefer the [risk](../modules/risk.md) module.

## Foundations already in OpenPlatform

| Module | Why it matters for underwriting |
|--------|---------------------------------|
| [Onboarding](../modules/onboarding.md) | Long-running evidence collection and case status |
| [Customers](../modules/customers.md) | Party identifiers for applicants and insureds |
| [Products](../modules/products.md) | Product configuration; rating engines via adapters |
| [Risk](../modules/risk.md) | Structured review and decision records |
| [Shared services](../modules/shared.md) | Identity, SCA, and notifications |

## Layer map

No dedicated underwriting repositories are published under `firefly-oss` for this area yet.

| Expected layer | Status (2026-10-18/19) |
|----------------|------------------------|
| Experience | Not published |
| Domain | Not published |
| Core | Not published |
| Adapters | Rules engines, actuarial, and bureau systems behind [adapters](../integrate/adapters.md) |

## How to start

1. Reuse [onboarding](../modules/onboarding.md) patterns for evidence over time.
2. Store operational decision records using [risk](../modules/risk.md) shapes where they fit; do not invent compliance outcomes in docs.
3. Keep rating and actuarial systems behind adapters.
4. Parent pin: **26.10.19** / Boot **4.1.1** / Java **25**.

## OpenAPI and events

Foundation specs: [OpenAPI index](../reference/openapi.md). Events: [stub](../reference/events.md).

## Maturity notes

In development on the product site. Decisions with significant effects on people, or beyond delegated limits, go to people with delegated authority. AI decides within approved limits, explained, recorded, and open to human review.

## Related

- [Policy lifecycle](policy-lifecycle.md)
- [Claims operations](claims.md)
- [Risk](../modules/risk.md)
- [Insurance development areas](index.md)
