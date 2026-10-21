# Product

`core-common-product-mgmt` owns the product tables. `domain-product-catalog` owns register, publish, suspend, resume, and retire. `domain-product-pricing` owns optional pricing rows on that product. Source commits: product core `ff8f9d7`, catalog domain `a5a1be5`, pricing domain `afd2f51`.

## Status

`DRAFT` and `SUSPENDED` exist. The catalog saga also uses `ACTIVE` and `RETIRED`. Offered, suspended, and retired products are not hard-deleted. `ACTIVE` is the offered status.

## Pricing

A product without lending pricing rows is valid. A product that is not a loan succeeds when amount, rate, and fee rows are absent.

Fees, bundles, features, and limits are not separate saga steps. Pricing is optional product configuration. Creating a pricing row is compensated by deleting that row. Amending a row restores the previous configuration.

`domain-core-pricing-engine` calculates a price, a commission, and eligibility from that configuration. It does not own the product database.

Catalog: [Product](../catalog/product.md).
