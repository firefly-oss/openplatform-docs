# Product domain

## Catalog saga

[domain-product-catalog](https://github.com/fireflysoftwaresolutions/domain-product-catalog) registers a product and publishes, suspends, resumes, and retires it. Fees, bundles, features, and limits are not separate saga steps. It calls `core-common-product-mgmt`.

## Pricing configuration

[domain-product-pricing](https://github.com/fireflysoftwaresolutions/domain-product-pricing) writes optional pricing rows on that product. Creating a row is compensated by deleting it. Amending a row restores the previous configuration. A product that is not a loan is valid when amount, rate, and fee rows are absent.

## Calculation

[domain-core-pricing-engine](https://github.com/fireflysoftwaresolutions/domain-core-pricing-engine) calculates a price, a commission, and eligibility from product configuration. It does not own the product database.

Next: [Core](core.md).
