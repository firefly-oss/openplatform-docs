# Product

The product core is the catalog. Pricing is optional configuration on that product, not a second database and not a chain of fee, bundle, feature, and limit sagas. The pricing engine calculates from that configuration. It does not own the product rows.

The data rules are on the [product model](../models/product.md).



## Domain

<div class="ff-entry ff-entry--domain" markdown="1">
<p class="ff-kicker">Domain</p>

### domain-core-pricing-engine

Calculates a price, a commission, and eligibility from product configuration. It does not own the product database. Fees, bundles, features, and limits are not separate product saga steps.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/domain-core-pricing-engine">github.com/fireflysoftwaresolutions/domain-core-pricing-engine</a></p>

</div>

<div class="ff-entry ff-entry--domain" markdown="1">
<p class="ff-kicker">Domain</p>

### domain-product-catalog

Owns the product saga: register, publish, suspend, resume, and retire, through `core-common-product-mgmt`. Fees, bundles, features, and limits are not separate saga steps. A product without lending pricing rows is valid.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/domain-product-catalog">github.com/fireflysoftwaresolutions/domain-product-catalog</a></p>

</div>

<div class="ff-entry ff-entry--domain" markdown="1">
<p class="ff-kicker">Domain</p>

### domain-product-pricing

Owns optional pricing configuration on a product. Creating a row is compensated by deleting that row. A product that is not a loan is valid when amount, rate, and fee rows are absent. Pricing is not a second product aggregate.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/domain-product-pricing">github.com/fireflysoftwaresolutions/domain-product-pricing</a></p>

</div>


## Core

<div class="ff-entry ff-entry--core" markdown="1">
<p class="ff-kicker">Core</p>

### core-common-product-mgmt

Owns products and optional product configuration, including pricing rows. `DRAFT` and `SUSPENDED` are statuses. Offered, suspended, and retired products are not hard-deleted. `domain-product-catalog` and `domain-product-pricing` orchestrate this core.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/core-common-product-mgmt">github.com/fireflysoftwaresolutions/core-common-product-mgmt</a></p>

</div>


## Related


- [All services](index.md)

- [Layers](../layers/index.md)

- [Replace an adapter](../adapters/index.md)

