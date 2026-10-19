# Products and commercial configuration

**Module id:** `products`

Durable product definitions, versions, catalogue relationships, and pricing simulation. Channel presentation stays in experience services; commercial truth lives here so agreements, distribution, and lending share the same product ids.

Public product page: <https://fireflysoftware.io/openplatform/modules/>

## Why this module exists

Offers, contracts, and distributor catalogues all need a stable product identity. If each channel invents its own catalogue, pricing and reporting diverge. This module holds catalogue and pricing orchestration; journeys store the product id, not a private copy of the definition.

## When to use it

Use `products` when you need a catalogue entry, version, required documentation set, or pricing/instalment simulation that other modules will reference.

Insurer rating engines and third-party pricing systems stay behind [adapters](../integrate/adapters.md).

## Key concepts

| Concept | Meaning in this module |
|---------|------------------------|
| Catalogue | Hierarchy of products, categories, and relationships |
| Version | Published product configuration over time |
| Pricing simulation | Query that returns fees or instalments for an offer |
| Product id | Identifier stored on agreements, offers, and distributor assignments |

## Layer map (repos that exist)

| Repository | Layer | Role |
|------------|-------|------|
| [`core-common-product-mgmt`](https://github.com/firefly-oss/core-common-product-mgmt) | `core-*` | Product catalogue persistence and APIs |
| [`core-common-pricing-mgmt`](https://github.com/firefly-oss/core-common-pricing-mgmt) | `core-*` | Pricing persistence (no published OpenAPI yet) |
| [`domain-product-catalog`](https://github.com/firefly-oss/domain-product-catalog) | `domain-*` | Product catalogue domain orchestration |
| [`domain-product-pricing`](https://github.com/firefly-oss/domain-product-pricing) | `domain-*` | Product pricing and fee orchestration |
| [`domain-core-pricing-engine`](https://github.com/firefly-oss/domain-core-pricing-engine) | `domain-*` | Pricing queries and simulations |

**Experience:** no dedicated `exp-products` repository in the inventory. Distributor-facing catalogue views use [`domain-distributor-catalog`](https://github.com/firefly-oss/domain-distributor-catalog) and [`exp-distributor`](https://github.com/firefly-oss/exp-distributor) under [distribution](distribution.md). Lending simulation surfaces often go through [`exp-lending`](https://github.com/firefly-oss/exp-lending).

## How a typical call path looks

1. A domain or experience service queries catalogue or pricing APIs.
2. Core product (and pricing) services hold definitions and versions.
3. Lending or agreement flows store the product id on offers and contracts.
4. External rating systems, when used, sit behind adapters.

## How to start

1. Confirm the current pin on [Versioning and BOM](../versioning/bom.md) (**26.10.19** / Boot **4.1.1** / Java **25**).
2. Open the repositories in the layer map above and read each README and OpenAPI.
3. Follow related module pages for upstream identifiers and [adapters](../integrate/adapters.md) for outside systems.
4. Framework bootstrap: [Jafly docs](https://fireflyframework.github.io/fireflyframework-jafly/) (outbound).


## OpenAPI

| Repository | Spec |
|------------|------|
| `core-common-product-mgmt` | [`…/openapi.yml`](https://github.com/firefly-oss/core-common-product-mgmt/blob/main/core-common-product-mgmt-sdk/src/main/resources/openapi.yml) |
| `domain-product-catalog` | [`…/openapi.yml`](https://github.com/firefly-oss/domain-product-catalog/blob/main/domain-product-catalog-sdk/src/main/resources/openapi.yml) |
| `domain-core-pricing-engine` | [`…/openapi.yml`](https://github.com/firefly-oss/domain-core-pricing-engine/blob/main/domain-core-pricing-engine-sdk/src/main/resources/openapi.yml) |
| `domain-product-pricing` | [`…/openapi.yml`](https://github.com/firefly-oss/domain-product-pricing/blob/main/domain-product-pricing-sdk/src/main/resources/openapi.yml) |
| `core-common-pricing-mgmt` | — (no published OpenAPI yet) |

Full index: [OpenAPI — products](../reference/openapi.md#products-products).

## Events

[Stub until published](../reference/events.md).

## Maturity notes

Catalogue and pricing repositories exist as multi-module Maven projects. This hub does not publish coverage percentages or SLA claims. Verify parent inheritance against **26.10.19** before trusting Boot badges in older READMEs.

## Related modules

- [Agreements and documents](agreements.md)
- [Distribution and partner channels](distribution.md)
- [The lending lifecycle](lending.md)
- [Business modules catalogue](catalog.md)

## Next steps

Open [Agreements](agreements.md) when binding parties to a product, or [Lending](lending.md) when the product is a credit offer. Confirm pins on [Versioning and BOM](../versioning/bom.md).
