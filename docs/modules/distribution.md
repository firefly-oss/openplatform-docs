# Distribution and partner channels

**Module id:** `distribution`

Product access, branding, and operating context for distributors and
agents.

Public product page:
<https://fireflysoftware.io/openplatform/modules/>

## When you need this module

Use `distribution` when partners, agents, or brokers need constrained product access, branding, or operating permissions. Direct-to-customer journeys may skip this module; partner-led journeys should not hard-code distributor rules in every experience service.

## Coverage

- Distributors, agencies, agents, and assignments
- Product assignments, territories, and operating permissions
- Channel branding, configuration, and contractual terms

## How it is used

1. Experience APIs such as `exp-distributor` expose channel operations.
2. Domain services manage branding and distributor catalogue views.
3. Core distributor management persists assignments and permissions.
4. Product and onboarding flows read distributor context before offering a product.

Build partner-led finance, or agent and broker journeys connected to the
institution. Distribution context constrains which products and journeys
a channel may offer.

## Key repositories

| Repository | Layer | Role |
|------------|-------|------|
| <a href="https://github.com/firefly-oss/core-common-distributor-mgmt"><code>core-common-distributor-mgmt</code></a> | `core-*` | Distributor lifecycle and assignments |
| <a href="https://github.com/firefly-oss/domain-distributor-branding"><code>domain-distributor-branding</code></a> | `domain-*` | Channel branding configuration |
| <a href="https://github.com/firefly-oss/domain-distributor-catalog"><code>domain-distributor-catalog</code></a> | `domain-*` | Distributor product catalogue views |
| <a href="https://github.com/firefly-oss/exp-distributor"><code>exp-distributor</code></a> | `exp-*` | Experience APIs for distributor channels |

## API and events

OpenAPI paths for this module:
<a href="../reference/openapi.md#distribution-distribution">OpenAPI index — distribution</a>.

Event contracts: <a href="../reference/events.md">stub until published</a>.

## Maturity notes

Core, domain, and experience repositories for this module id are present
under `firefly-oss`. Treat README and OpenAPI in each repo as the source
of truth for endpoints and deployment shape.

Parent pin for new work: Jafly **26.10.19** / Boot **4.1.1** / Java **25**.

## Related modules

- <a href="products.md">Products and commercial configuration</a>
- <a href="onboarding.md">Onboarding and verification</a>
- <a href="customers.md">Customers and relationships</a>
- <a href="catalog.md">Business modules catalogue</a>

## What next

Pair with [Products](products.md) and [Onboarding](onboarding.md). Mirror `exp-distributor` when extending partner channels.
