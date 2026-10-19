# Claims operations

**Development area:** Claims operations (insurance)

Claim notification, evidence, assessment, and authorized settlement. Settlement payment execution reuses [payments](../modules/payments.md); authority for indemnity decisions stays with the insurer.

Public description: <https://fireflysoftware.io/openplatform/#insurance-development>

## Why this area exists

Claims need a case lifecycle (notify, evidence, assess, settle) that is not the same as loan servicing or KYC onboarding, but can reuse party, document, and payment foundations. This area states that intent and the honest gap: no dedicated claims repositories are published yet.

## When to use it

Use this area when designing claim intake or settlement flows on OpenPlatform foundations. For payment rails and PSP boundaries, use [payments](../modules/payments.md) directly.

## Foundations already in OpenPlatform

| Module | Why it matters for claims |
|--------|---------------------------|
| [Customers](../modules/customers.md) | Claimant and insured party ids |
| [Agreements](../modules/agreements.md) | Policy or contract document context |
| [Payments](../modules/payments.md) | Indemnity and refund payment execution |
| [Shared services](../modules/shared.md) | Notifications and identity |
| [Onboarding](../modules/onboarding.md) | Patterns for evidence collection over time |

## Layer map

No dedicated claims repositories are published under `firefly-oss` for this area yet.

| Expected layer | Status (2026-10-18/19) |
|----------------|------------------------|
| Experience | Not published |
| Domain | Not published |
| Core | Not published |
| Adapters | Claims systems and adjuster tools behind [adapters](../integrate/adapters.md) |

## How to start

1. Identify party and agreement ids from foundation modules.
2. Plan settlement through [payments](../modules/payments.md) and adapters for rails/PSPs.
3. Do not invent claim OpenAPI paths until a repository publishes them.
4. Parent pin: **26.10.19** / Boot **4.1.1** / Java **25**.

## OpenAPI and events

Foundation specs: [OpenAPI index](../reference/openapi.md). Events: [stub](../reference/events.md).

## Maturity notes

In development. Authorized settlement remains with the insurer’s delegated authority. This hub does not claim claims-system replacement.

## Related

- [Policy lifecycle](policy-lifecycle.md)
- [Underwriting operations](underwriting.md)
- [Insurance financial flows](financial-flows.md)
- [Payments](../modules/payments.md)
- [Insurance development areas](index.md)
