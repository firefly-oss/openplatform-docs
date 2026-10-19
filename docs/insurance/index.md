# Insurance development areas

OpenPlatform describes four insurance-oriented development areas on the public product site. They extend the same foundations as the banking modules; they are **in development** and agreed before inclusion in an implementation.

Public anchor: <https://fireflysoftware.io/openplatform/#insurance-development>

| Area | Intent | Page |
|------|--------|------|
| Policy lifecycle | Product, party, and agreement foundations extended to policies and renewals | [policy lifecycle](policy-lifecycle.md) |
| Underwriting operations | Evidence, underwriting rules, referrals, and decisions under the insurer’s authority | [underwriting](underwriting.md) |
| Claims operations | Claim notification, evidence, assessment, and authorized settlement | [claims](claims.md) |
| Insurance financial flows | Premiums, commissions, refunds, and indemnity payments via payment services | [financial flows](financial-flows.md) |

## What exists today

- **Business modules** already support insurance-adjacent journeys (customers, products, agreements, distribution, payments, risk, and shared identity). See the [catalogue](../modules/catalog.md).
- **Dedicated insurance core / domain / experience repositories** for these four areas are **not** published as separate OpenPlatform module ids yet. Do not assume a `core-insurance-*` catalogue from this hub.
- **OpenAPI / event packs** specific to insurance areas: [not published](../reference/events.md); use foundation module specs from the [OpenAPI index](../reference/openapi.md).

## How to read these pages

Each area page states why it exists, when to use it, which foundation modules to reuse, an honest layer map (usually empty for dedicated repos), how to start, and next links. Treat dashed outlines on the product site as in development; solid pieces are available today in the business module catalogue.

Parent pin for new foundation work: Jafly **26.10.19** / Spring Boot **4.1.1** / Java **25**.

## Product experiences

Operating products such as PolicyOS, UnderwritingOS, and ClaimsOS compose these areas with OpenPlatform modules. Product pages live on fireflysoftware.io under Services; this hub stays at the platform and module layer.

## Related

- [Business modules catalogue](../modules/catalog.md)
- [Adapters](../integrate/adapters.md)
- [Architecture](../architecture/overview.md)
- [Home](../index.md)
