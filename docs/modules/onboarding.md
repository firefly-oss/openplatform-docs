# Onboarding and verification

**Module id:** `onboarding`

Data collection, identity evidence, and verification cases in one journey. The institution keeps approval policy and provider choice; OpenPlatform holds the case shape and coordinates pauses and resumes.

Public product page: <https://fireflysoftware.io/openplatform/modules/>

## When you need this module

Use `onboarding` when a channel must gather evidence over time (documents, KYC/KYB checks, manual review) before a customer or agreement is fully ready. Short, instantaneous registrations may stay closer to `customers`; long-running verification belongs here.

## Coverage

- Individual and business onboarding APIs
- Personal, economic, and corporate information
- KYC/KYB evidence, case records, and journey status

## How a typical call path looks

1. `exp-onboarding` exposes the journey API for the channel.
2. Domain workflows in `domain-customer-kyc-kyb` move the case through evidence and review steps.
3. `core-common-kycb-mgmt` stores case and evidence state.
4. Adapters reach identity or screening providers; party registration uses the [customers](customers.md) module when a durable party is created.

## Key repositories

| Repository | Layer | Role |
|------------|-------|------|
| [`exp-onboarding`](https://github.com/firefly-oss/exp-onboarding) | `exp-*` | Journey orchestration for individual and business onboarding |
| [`domain-customer-kyc-kyb`](https://github.com/firefly-oss/domain-customer-kyc-kyb) | `domain-*` | KYC/KYB domain workflows and APIs |
| [`core-common-kycb-mgmt`](https://github.com/firefly-oss/core-common-kycb-mgmt) | `core-*` | Core KYC/KYB case and evidence persistence |

Upstream customer registration typically uses [`domain-customer-people`](https://github.com/firefly-oss/domain-customer-people) from the [customers](customers.md) module.

## API and events

OpenAPI paths for this module: [OpenAPI index — onboarding](../reference/openapi.md#onboarding-onboarding).

Event contracts: [stub until published](../reference/events.md).

## Maturity notes

Repositories are public under `firefly-oss`. Per the `domain-customer-kyc-kyb` README, the KYB track is the primary implemented flow; the KYC track exposes a lifecycle API with implementation still incomplete in places. Confirm current behaviour in that repository before planning a KYC-only cutover.

## Related modules

- [Customers and relationships](customers.md)
- [Distribution and partner channels](distribution.md)
- [Risk and compliance operations](risk.md)
- [Business modules catalogue](catalog.md)

## What next

Read [Adapters](../integrate/adapters.md) before wiring an identity provider. Use [First service](../start/first-service.md) if you are mirroring `exp-onboarding`.
