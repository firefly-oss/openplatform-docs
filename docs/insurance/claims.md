# Claims operations

**Development area:** Claims operations (insurance)

Claim notification, evidence, assessment, and authorized settlement,
connected to provider services.

Public description:
<https://fireflysoftware.io/openplatform/#insurance-development>

## Intent

Receive notifications, gather evidence, support assessment, and settle
only within authorized limits. Flagged or complex cases go to claims
handlers with delegated authority. Provider services (repair networks,
investigators, and similar) connect through adapters.

## Foundations already in OpenPlatform

| Module | Why it matters for claims |
|--------|---------------------------|
| <a href="../modules/customers.md">Customers</a> | Claimants and related parties |
| <a href="../modules/agreements.md">Agreements</a> | Policy and document references |
| <a href="../modules/payments.md">Payments</a> | Authorized indemnity and expense payments |
| <a href="../modules/shared.md">Shared services</a> | Notifications and access control |

## Repositories and APIs

There is **no dedicated** OpenPlatform claims module repository set
published under `firefly-oss` for this development area yet.

Use foundation OpenAPI:
<a href="../reference/openapi.md">OpenAPI index</a>.

Event contracts: **stub** —
<a href="../reference/events.md">Event contracts</a>.

## Maturity notes

This page does not claim settlement SLAs, fraud-detection performance,
or replacement of the insurer’s claims core.

## Related areas

- <a href="policy-lifecycle.md">Policy lifecycle</a>
- <a href="underwriting.md">Underwriting operations</a>
- <a href="financial-flows.md">Insurance financial flows</a>
- <a href="index.md">Insurance development areas</a>
