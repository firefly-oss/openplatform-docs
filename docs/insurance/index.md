# Insurance development areas

OpenPlatform describes four insurance-oriented development areas on the
public product site. They extend the same foundations as the banking
modules; they are **in development** and agreed before inclusion in an
implementation.

Public anchor:
<https://fireflysoftware.io/openplatform/#insurance-development>

Source of titles and intent: `insuranceDevelopmentAreas` in the
Firefly Software website platform data (aligned 2026-10-18/19).

| Area | Intent | Page |
|------|--------|------|
| Policy lifecycle | Product, party, and agreement foundations extended to policies and renewals | <a href="policy-lifecycle.md">policy lifecycle</a> |
| Underwriting operations | Evidence, underwriting rules, referrals, and decisions under the insurer’s authority | <a href="underwriting.md">underwriting</a> |
| Claims operations | Claim notification, evidence, assessment, and authorized settlement | <a href="claims.md">claims</a> |
| Insurance financial flows | Premiums, commissions, refunds, and indemnity payments via payment services | <a href="financial-flows.md">financial flows</a> |

## What exists today

- **Business modules** already support insurance-adjacent journeys
  (customers, products, agreements, distribution, payments, risk, and
  shared identity). See <a href="../modules/catalog.md">catalogue</a>.
- **Dedicated insurance core / domain / experience repositories** for
  these four areas are **not** published as separate OpenPlatform module
  ids yet. Do not assume a `core-insurance-*` catalogue from this hub.
- **OpenAPI / event packs** specific to insurance areas:
  <a href="../reference/events.md">not published</a>; use foundation
  module specs from the <a href="../reference/openapi.md">OpenAPI
  index</a>.

Rating, policy administration, and claims systems that an institution
already runs remain connected through adapters. OpenPlatform does not
replace every specialist insurance core by default.

## Product experiences

Operating products such as PolicyOS, UnderwritingOS, and ClaimsOS
compose these areas with OpenPlatform modules. Product pages live on
fireflysoftware.io under Services; this hub stays at the platform and
module layer.

## Related

- <a href="../modules/catalog.md">Business modules catalogue</a>
- <a href="../integrate/adapters.md">Adapters</a>
- <a href="../architecture/overview.md">Architecture</a>
