# Policy lifecycle

**Core repository:** [`core-insurance-policies`](https://github.com/firefly-oss/core-insurance-policies)

Records for a specific policy: the policy itself, the parties on it, transactions (new business, endorsement, renewal, cancellation, reinstatement), coverages, insured objects, certificates of insurance, and the line-specific detail for property, motor, liability, life, and health.

The policyholder is a `partyId` from [customers](../modules/customers.md). The agreement is a `contractId` from [agreements](../modules/agreements.md). The product is a `productId` from [products](../modules/products.md).

## What it does not own

Rating, premium collection, underwriting decisions, and claims. Premium amounts on a coverage are recorded figures.

## API

Base path `/api/v1/policies`, with nested parties, transactions, coverages, insured objects, status history, certificates, and line details.

OpenAPI: [openapi.yml](https://github.com/firefly-oss/core-insurance-policies/blob/main/core-insurance-policies-sdk/src/main/resources/openapi.yml)

## Related

- [Underwriting](underwriting.md)
- [Claims](claims.md)
- [Insurance cores](index.md)
