# Products and commercial configuration

**Module id:** `products`

<p class="ff-lead">The commercial definition: catalogue, versions, and the price or eligibility another module will point at.</p>

Agreements, distribution, and lending store the product id. They do not keep a private copy of the definition.

<figure class="ff-figure">
  <img src="/diagrams/module-products.svg?v=20261019b" alt="Products, read top to bottom: no separate channel, then catalogue and price, then the product record" width="960" height="484" />
  <figcaption>Read top to bottom. There is no products channel. Domain services answer catalogue, price, and eligibility. The core stores the product record.</figcaption>
</figure>

There is no `exp-products` repository. Partner-facing catalogue views are [distribution](distribution.md). Lending simulations that a channel starts often go through `exp-lending`.

<div class="ff-split" markdown="0">
  <section class="ff-panel">
    <h3>What it owns</h3>
    <ul>
      <li>Products, versions, categories, and relationships</li>
      <li>Configuration, localisation, and documentation requirements</li>
      <li>Fees, pricing, and eligibility</li>
      <li>Pricing simulations against a product</li>
    </ul>
  </section>
  <section class="ff-panel">
    <h3>What it does not own</h3>
    <ul>
      <li>Which products a partner may sell. That is <a href="/modules/distribution/">distribution</a>.</li>
      <li>The contract that binds a party to a product. That is <a href="/modules/agreements/">agreements</a>.</li>
      <li>Loan agreements for a product line. Those are <a href="/modules/lending/">lending</a>.</li>
      <li>An external rating engine. That stays behind an <a href="/integrate/adapters/">adapter</a>.</li>
    </ul>
  </section>
</div>

## Repositories

| Repository | Layer | What it holds | OpenAPI |
|------------|-------|---------------|---------|
| [`domain-product-catalog`](https://github.com/firefly-oss/domain-product-catalog) | Domain | Product catalogue | [openapi.yml](https://github.com/firefly-oss/domain-product-catalog/blob/main/domain-product-catalog-sdk/src/main/resources/openapi.yml) |
| [`domain-product-pricing`](https://github.com/firefly-oss/domain-product-pricing) | Domain | Fees, pricing, and eligibility | [openapi.yml](https://github.com/firefly-oss/domain-product-pricing/blob/main/domain-product-pricing-sdk/src/main/resources/openapi.yml) |
| [`domain-core-pricing-engine`](https://github.com/firefly-oss/domain-core-pricing-engine) | Domain | Product pricing queries and simulations | [openapi.yml](https://github.com/firefly-oss/domain-core-pricing-engine/blob/main/domain-core-pricing-engine-sdk/src/main/resources/openapi.yml) |
| [`core-common-product-mgmt`](https://github.com/firefly-oss/core-common-product-mgmt) | Core | Product, version, category, documentation, configuration | [openapi.yml](https://github.com/firefly-oss/core-common-product-mgmt/blob/main/core-common-product-mgmt-sdk/src/main/resources/openapi.yml) |
| [`core-common-pricing-mgmt`](https://github.com/firefly-oss/core-common-pricing-mgmt) | Core | Pricing persistence | No published OpenAPI yet |

## How the pieces fit

`domain-product-catalog` answers `/api/v1/products`. That is the catalogue query other services call.

`domain-product-pricing` answers pricing, fees, and eligibility. `domain-core-pricing-engine` answers simulations and product pricing queries under `/api/v1/pricing-engine`. A simulation is a query. It does not replace the product record.

`core-common-product-mgmt` persists products, versions, categories, configuration, localisation, documentation, and documentation requirements. `core-common-pricing-mgmt` is on disk and has no checked-in OpenAPI. Do not invent a contract for it.

Lending and agreements store the product id on offers and contracts. They read the definition from here.

## Related

- [Agreements](agreements.md) when a party is bound to a product
- [Distribution](distribution.md) for the partner's view of the catalogue
- [Lending](lending.md) when the product is a credit offer
- [Catalogue](catalog.md)
