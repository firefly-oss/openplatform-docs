# Onboarding and verification

**Module id:** `onboarding`

Long-running collection of personal or business data, KYC/KYB evidence, and journey status. The institution keeps approval policy and provider choice; OpenPlatform holds the case shape and coordinates pauses and resumes.

Public product page: <https://fireflysoftware.io/openplatform/modules/>

## Why this module exists

Registration is rarely a single POST. Channels gather documents over days, pause for manual review, and resume when evidence arrives. Putting that state only in the frontend or only in a customer core makes recovery hard. Onboarding owns the case lifecycle; [customers](customers.md) owns the durable party once you are ready to register one.

## When to use it

Use `onboarding` when a channel must gather evidence over time before a customer or agreement is fully ready.

Short, instantaneous registrations may stay closer to `customers`. Identity-provider SDKs and screening vendors stay behind [adapters](../integrate/adapters.md).

## Key concepts

| Concept | Meaning in this module |
|---------|------------------------|
| Journey | Channel-facing onboarding flow (individual or business) |
| Case | Durable KYC/KYB case with status and evidence |
| Evidence | Documents and checks attached to a case |
| Provider boundary | External identity or screening system, reached through adapters |

## Layer map (repos that exist)

| Repository | Layer | Role |
|------------|-------|------|
| [`exp-onboarding`](https://github.com/firefly-oss/exp-onboarding) | `exp-*` | BFF for individual and business onboarding journeys |
| [`domain-customer-kyc-kyb`](https://github.com/firefly-oss/domain-customer-kyc-kyb) | `domain-*` | KYC/KYB domain workflows and APIs |
| [`core-common-kycb-mgmt`](https://github.com/firefly-oss/core-common-kycb-mgmt) | `core-*` | Case and evidence persistence |

**Upstream party registration:** [`domain-customer-people`](https://github.com/firefly-oss/domain-customer-people) and [`core-common-customer-mgmt`](https://github.com/firefly-oss/core-common-customer-mgmt) from [customers](customers.md).

**Related channel setup:** [`exp-channel-management`](https://github.com/firefly-oss/exp-channel-management) (branding and reference data for channel init) is listed under [shared](shared.md).

## How a typical call path looks

1. `exp-onboarding` exposes the journey API for the channel.
2. `domain-customer-kyc-kyb` moves the case through evidence and review steps.
3. `core-common-kycb-mgmt` stores case and evidence state.
4. Adapters reach identity or screening providers.
5. When a durable party is required, registration commands go to the customers module.

## How to start

1. Confirm pins: Jafly **26.10.19** / Boot **4.1.1** / Java **25** ([BOM](../versioning/bom.md)).
2. Mirror [`exp-onboarding`](https://github.com/firefly-oss/exp-onboarding) for channel work, or `domain-customer-kyc-kyb` for domain workflows ([First service](../start/first-service.md)).
3. Read the KYC vs KYB maturity notes below before planning a KYC-only cutover.
4. Design provider calls through the [adapter pattern](../integrate/adapters.md).

## OpenAPI

| Repository | Spec |
|------------|------|
| `exp-onboarding` | [`…/openapi.yml`](https://github.com/firefly-oss/exp-onboarding/blob/main/exp-onboarding-sdk/src/main/resources/openapi.yml) |
| `domain-customer-kyc-kyb` | [`…/openapi.yml`](https://github.com/firefly-oss/domain-customer-kyc-kyb/blob/main/domain-customer-kyc-kyb-sdk/src/main/resources/openapi.yml) |
| `core-common-kycb-mgmt` | [`…/openapi.yml`](https://github.com/firefly-oss/core-common-kycb-mgmt/blob/main/core-common-kycb-mgmt-sdk/src/main/resources/openapi.yml) |

Full index: [OpenAPI — onboarding](../reference/openapi.md#onboarding-onboarding).

## Events

Shared event packs: [stub](../reference/events.md). Check each repository README for published event names when present.

## Maturity notes

Per the `domain-customer-kyc-kyb` README, the KYB track is the primary implemented flow; the KYC track exposes a lifecycle API with implementation still incomplete in places. Confirm current behaviour in that repository before planning a KYC-only cutover. Parent pin for new work remains **26.10.19** / Boot **4.1.1**.

## Related modules

- [Customers and relationships](customers.md)
- [Distribution and partner channels](distribution.md)
- [Risk and compliance operations](risk.md)
- [Identity and shared services](shared.md)
- [Business modules catalogue](catalog.md)

## Next steps

Read [Adapters](../integrate/adapters.md) before wiring an identity provider. Use [First service](../start/first-service.md) if you are mirroring `exp-onboarding`.
