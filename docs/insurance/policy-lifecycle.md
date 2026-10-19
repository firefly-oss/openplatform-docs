# Policy lifecycle

**Development area:** Policy lifecycle (insurance)

Product, party, and agreement foundations extended to policies and renewals. Specialist policy administration systems stay connected through adapters unless an implementation explicitly replaces them.

Public description: <https://fireflysoftware.io/openplatform/#insurance-development>

## Why this area exists

Insurance journeys need policy-oriented product definitions, party roles, agreement and document references, and renewal status. OpenPlatform already provides those foundations for banking-style modules; this area describes how to extend them toward policies without inventing a parallel customer or catalogue stack.

## When to use it

Use this area when you are designing policy issue, endorsement, or renewal flows on OpenPlatform foundations. If you only need party or contract records today, start with [customers](../modules/customers.md) and [agreements](../modules/agreements.md).

## Foundations already in OpenPlatform

| Module | Why it matters for policies |
|--------|-----------------------------|
| [Customers](../modules/customers.md) | Policyholders, insured parties, and relationships |
| [Products](../modules/products.md) | Product catalogue and commercial configuration; rating systems via adapters |
| [Agreements](../modules/agreements.md) | Contract and document context for policy artefacts |
| [Distribution](../modules/distribution.md) | Agent and broker channel context |
| [Shared services](../modules/shared.md) | Identity and notifications for servicing |

## Layer map

There is **no dedicated** `firefly-oss` insurance policy lifecycle repository (`core-insurance-*` / `domain-insurance-*` / `exp-insurance-*`) published as an OpenPlatform module yet.

| Expected layer | Status (2026-10-18/19) |
|----------------|------------------------|
| Experience | Not published — compose `exp-*` from foundations or product apps |
| Domain | Not published |
| Core | Not published |
| Adapters | Institution policy admin systems behind the [adapter pattern](../integrate/adapters.md) |

## How to start

1. Map policyholder and product ids to [customers](../modules/customers.md) and [products](../modules/products.md).
2. Store agreement and document evidence in [agreements](../modules/agreements.md).
3. Keep the insurer’s policy administration system behind an adapter unless the programme explicitly replaces it.
4. Confirm the parent pin: Jafly **26.10.19** / Boot **4.1.1** / Java **25**.

## OpenAPI and events

Use OpenAPI from the foundation modules: [OpenAPI index](../reference/openapi.md). Event contracts for this area: [stub](../reference/events.md).

## Maturity notes

This page mirrors the website “in development” tile. It does not claim production coverage, regulatory outcomes, or replacement of an insurer’s policy administration system.

## Related

- [Underwriting operations](underwriting.md)
- [Claims operations](claims.md)
- [Insurance financial flows](financial-flows.md)
- [Insurance development areas](index.md)
- [Business modules catalogue](../modules/catalog.md)
