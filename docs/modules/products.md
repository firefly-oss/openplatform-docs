# Products and commercial configuration

**Module id:** `products`

Consistent product definitions, adapted to each channel.

Public product page:
<https://fireflysoftware.io/openplatform/modules/>

## When you need this module

Use `products` when you need a durable catalogue entry, version, or pricing simulation that agreements, distribution, and lending can reference. Channel-specific presentation still belongs in experience services; commercial truth belongs here.

## Coverage

- Catalogue, categories, versions, and product relationships
- Configuration and required documentation
- Lending pricing queries and instalment simulations

## How it is used

1. Domain or experience services query catalogue and pricing APIs.
2. Core product persistence holds definitions and versions.
3. Lending or agreement flows store the product id on offers and contracts.
4. Insurer rating systems, when used, stay behind adapters.

Compose a financing offer from catalogue and pricing, or connect to an
insurer’s rating systems through adapters. Product identifiers feed
agreements, distribution assignments, and lending offers.

## Key repositories

| Repository | Layer | Role |
|------------|-------|------|
| <a href="https://github.com/firefly-oss/core-common-product-mgmt"><code>core-common-product-mgmt</code></a> | `core-*` | Product catalogue persistence and APIs |
| <a href="https://github.com/firefly-oss/domain-product-catalog"><code>domain-product-catalog</code></a> | `domain-*` | Product catalogue domain orchestration |
| <a href="https://github.com/firefly-oss/domain-core-pricing-engine"><code>domain-core-pricing-engine</code></a> | `domain-*` | Pricing queries and simulations |

Also present under `firefly-oss` for related commercial configuration:
<a href="https://github.com/firefly-oss/domain-product-pricing"><code>domain-product-pricing</code></a>,
<a href="https://github.com/firefly-oss/core-common-pricing-mgmt"><code>core-common-pricing-mgmt</code></a>.

## API and events

OpenAPI paths for this module:
<a href="../reference/openapi.md#products-products">OpenAPI index — products</a>.

Event contracts: <a href="../reference/events.md">stub until published</a>.

## Maturity notes

Catalogue and pricing repositories exist as multi-module Maven projects.
Use each README for runtime dependencies and OpenAPI locations. This hub
does not publish coverage percentages or SLA claims.

Parent pin for new work: Jafly **26.10.19** / Boot **4.1.1** / Java **25**.

## Related modules

- <a href="agreements.md">Agreements and documents</a>
- <a href="distribution.md">Distribution and partner channels</a>
- <a href="lending.md">The lending lifecycle</a>
- <a href="catalog.md">Business modules catalogue</a>

## What next

Open [Agreements](agreements.md) or [Lending](lending.md) next, depending on the journey. Confirm pins on [Versioning and BOM](../versioning/bom.md).
