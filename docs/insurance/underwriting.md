# Underwriting operations

**Core repository:** [`core-insurance-underwriting`](https://github.com/firefly-oss/core-insurance-underwriting)

Records for a specific submission: clearance against in-force business, sanctions-screen results, statement-of-values lines, loss runs, referrals, quotes, subjectivities, and the underwriting decision. A bound decision may point at a `policyId` in `core-insurance-policies`.

The applicant is a `partyId` from [customers](../modules/customers.md). Evidence files are `documentId` values from document management. This service records the screening result. It does not call the sanctions provider.

## What it does not own

Risk selection, rating, and binding authority. Those stay with the insurer. Delegated limits live in [delegated authority](delegated-authority.md).

## API

Base path `/api/v1/submissions`, with nested risks, evidence, referrals, decisions, clearances, sanctions screens, statements of value, loss runs, quotes, subjectivities, and status history.

OpenAPI: [openapi.yml](https://github.com/firefly-oss/core-insurance-underwriting/blob/main/core-insurance-underwriting-sdk/src/main/resources/openapi.yml)

## Related

- [Policy lifecycle](policy-lifecycle.md)
- [Insurance cores](index.md)
