# Product

<p class="ff-steward">Stewarded by the Firefly Software Foundation. <a href="mailto:dev@fireflysoftware.io">dev@fireflysoftware.io</a></p>


The product domain is the catalog. Pricing is optional configuration on a product. It is not a second catalog and not a chain of separate fee, bundle, feature, and limit aggregates.

## What it owns

- The product and its status.
- Optional pricing rows: amount, rate, and fee, when the product is a loan that has them.
- Price calculation, commission, and eligibility, computed from that configuration.

## What it does not own

It does not own the contract that sells the product, the party who buys it, or the decision that approves the application. A product without lending pricing rows is valid.

## Ubiquitous language

| Name in code | Meaning |
| --- | --- |
| `DRAFT`, `ACTIVE`, `SUSPENDED`, `RETIRED` | Product status. `ACTIVE` is the offered product. |
| Not hard-deleted | `ACTIVE`, `SUSPENDED`, and `RETIRED` products stay in the catalog. |
| Pricing row | Optional `product_configuration`. Absent amount, rate, and fee rows are valid when the product is not a loan. |
| Fees, bundles, features, limits | Not separate saga steps. They are not their own aggregates in the catalog saga. |

Next: [Journeys](journeys.md).
