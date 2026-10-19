# Underwriting operations

**Development area:** Underwriting operations (insurance)

Evidence, underwriting rules, referrals, and decisions under the
insurer’s authority.

Public description:
<https://fireflysoftware.io/openplatform/#insurance-development>

## Intent

Support submission intake, evidence collection, rule evaluation, and
referral to people with delegated authority. AI may prepare and decide
**within approved limits**, with explanation and a path to human review.
Decisions beyond those limits stay with the insurer’s delegated roles.

## Foundations already in OpenPlatform

| Module | Why it matters for underwriting |
|--------|--------------------------------|
| <a href="../modules/customers.md">Customers</a> | Parties on the submission |
| <a href="../modules/onboarding.md">Onboarding</a> | Evidence and verification patterns |
| <a href="../modules/products.md">Products</a> | Product rules and documentation requirements |
| <a href="../modules/agreements.md">Agreements</a> | Document and agreement context |
| <a href="../modules/distribution.md">Distribution</a> | Broker and agent submissions |
| <a href="../modules/risk.md">Risk</a> | Structured decision and case records (lending-oriented today; patterns reuse) |

## Repositories and APIs

There is **no dedicated** OpenPlatform underwriting module repository
set published under `firefly-oss` for this development area yet.

Use foundation OpenAPI:
<a href="../reference/openapi.md">OpenAPI index</a>.

Event contracts: **stub** —
<a href="../reference/events.md">Event contracts</a>.

## Maturity notes

Aligned with the website “in development” language. This hub does not
claim autonomous underwriting outcomes or regulatory approval.

## Related areas

- <a href="policy-lifecycle.md">Policy lifecycle</a>
- <a href="claims.md">Claims operations</a>
- <a href="index.md">Insurance development areas</a>
