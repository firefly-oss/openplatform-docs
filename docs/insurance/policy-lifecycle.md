# Policy lifecycle

**Development area:** Policy lifecycle (insurance)

Product, party, and agreement foundations, extended to policies and
renewals.

Public description:
<https://fireflysoftware.io/openplatform/#insurance-development>

## Intent

Hold policy-oriented product definitions, party roles, agreement and
document references, and renewal status beside the insurer’s policy
administration systems. OpenPlatform supplies shared foundations;
specialist policy cores stay connected through adapters unless an
implementation explicitly replaces them.

## Foundations already in OpenPlatform

| Module | Why it matters for policies |
|--------|-----------------------------|
| <a href="../modules/customers.md">Customers</a> | Policyholders, insured parties, and relationships |
| <a href="../modules/products.md">Products</a> | Product catalogue and commercial configuration; rating systems via adapters |
| <a href="../modules/agreements.md">Agreements</a> | Contract and document context for policy artefacts |
| <a href="../modules/distribution.md">Distribution</a> | Agent and broker channel context |
| <a href="../modules/shared.md">Shared services</a> | Identity and notifications for servicing |

## Repositories and APIs

There is **no dedicated** `firefly-oss` insurance policy lifecycle
repository published as an OpenPlatform module yet.

Use OpenAPI from the foundation modules above:
<a href="../reference/openapi.md">OpenAPI index</a>.

Event contracts for this area: **stub** — see
<a href="../reference/events.md">Event contracts</a>.

## Maturity notes

This page mirrors the website “in development” tile. It does not claim
production coverage, regulatory outcomes, or replacement of an insurer’s
policy administration system.

## Related areas

- <a href="underwriting.md">Underwriting operations</a>
- <a href="claims.md">Claims operations</a>
- <a href="financial-flows.md">Insurance financial flows</a>
- <a href="index.md">Insurance development areas</a>
