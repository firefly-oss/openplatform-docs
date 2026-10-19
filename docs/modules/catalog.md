# Business modules catalogue

Module ids and names align with the public OpenPlatform modules page at <https://fireflysoftware.io/openplatform/modules/> (`platformModules` / `businessModules` in the website sources).

Each business module and the shared identity services have a dedicated page with purpose, coverage, key `firefly-oss` repositories, and maturity notes grounded in those repositories. This page is the map; open a module page when you need repositories and OpenAPI links.

## How to use this catalogue

1. Match the journey step you are building (party, agreement, payment, loan, and so on) to a module id.
2. Open that module page for repositories and layer prefixes (`core-*`, `domain-*`, `exp-*`).
3. Confirm the parent pin on [Versioning and BOM](../versioning/bom.md) before you assume Boot or Java levels from a README badge.
4. Put anything outside Firefly behind an [adapter](../integrate/adapters.md).

## Browse by module

<div class="ff-modules" markdown="0">
  <article class="ff-module">
    <p class="ff-module__id">customers</p>
    <p class="ff-module__title"><a href="customers/">Customers</a></p>
    <p class="ff-module__meta">People, legal entities, relationships, and consent.</p>
  </article>
  <article class="ff-module">
    <p class="ff-module__id">onboarding</p>
    <p class="ff-module__title"><a href="onboarding/">Onboarding</a></p>
    <p class="ff-module__meta">Data collection, KYC/KYB evidence, and journey status.</p>
  </article>
  <article class="ff-module">
    <p class="ff-module__id">products</p>
    <p class="ff-module__title"><a href="products/">Products</a></p>
    <p class="ff-module__meta">Commercial configuration for offers you sell.</p>
  </article>
  <article class="ff-module">
    <p class="ff-module__id">agreements</p>
    <p class="ff-module__title"><a href="agreements/">Agreements</a></p>
    <p class="ff-module__meta">Contracts, documents, and signature workflows.</p>
  </article>
  <article class="ff-module">
    <p class="ff-module__id">distribution</p>
    <p class="ff-module__title"><a href="distribution/">Distribution</a></p>
    <p class="ff-module__meta">Partner channels and distributor access.</p>
  </article>
  <article class="ff-module">
    <p class="ff-module__id">accounts</p>
    <p class="ff-module__title"><a href="accounts/">Accounts</a></p>
    <p class="ff-module__meta">Account records and related financial posts.</p>
  </article>
  <article class="ff-module">
    <p class="ff-module__id">payments</p>
    <p class="ff-module__title"><a href="payments/">Payments</a></p>
    <p class="ff-module__meta">Orders, cards, rails, and PSP boundaries.</p>
  </article>
  <article class="ff-module">
    <p class="ff-module__id">lending</p>
    <p class="ff-module__title"><a href="lending/">Lending</a></p>
    <p class="ff-module__meta">Origination, servicing, collateral, collections.</p>
  </article>
  <article class="ff-module">
    <p class="ff-module__id">risk</p>
    <p class="ff-module__title"><a href="risk/">Risk</a></p>
    <p class="ff-module__meta">Risk and compliance operations for journeys.</p>
  </article>
  <article class="ff-module">
    <p class="ff-module__id">shared</p>
    <p class="ff-module__title"><a href="shared/">Shared services</a></p>
    <p class="ff-module__meta">Identity and common services used across modules.</p>
  </article>
</div>

## Business module ids (table)

| Id | Title | Page |
|----|-------|------|
| `customers` | Customers and relationships | [customers](customers.md) |
| `onboarding` | Onboarding and verification | [onboarding](onboarding.md) |
| `products` | Products and commercial configuration | [products](products.md) |
| `agreements` | Agreements and documents | [agreements](agreements.md) |
| `distribution` | Distribution and partner channels | [distribution](distribution.md) |
| `accounts` | Accounts and financial records | [accounts](accounts.md) |
| `payments` | Payments and cards | [payments](payments.md) |
| `lending` | The lending lifecycle | [lending](lending.md) |
| `risk` | Risk and compliance operations | [risk](risk.md) |
| `shared` | Identity and shared services | [shared](shared.md) |

## Layer conventions in `firefly-oss`

| Prefix | Typical role |
|--------|----------------|
| `core-*` | Persistence and core APIs for a bounded context |
| `domain-*` | Domain orchestration (commands, sagas, queries) |
| `exp-*` | Experience / BFF journeys for channels |
| `library-*` | Shared libraries (rails, PSP interfaces, …) |

GitHub organisation: <https://github.com/firefly-oss>

## Insurance development areas

OpenPlatform also describes insurance-oriented development areas built on the same foundations. Dedicated pages:

| Area | Page |
|------|------|
| Policy lifecycle | [policy lifecycle](../insurance/policy-lifecycle.md) |
| Underwriting operations | [underwriting](../insurance/underwriting.md) |
| Claims operations | [claims](../insurance/claims.md) |
| Insurance financial flows | [financial flows](../insurance/financial-flows.md) |

Overview: [Insurance development areas](../insurance/index.md) (aligned with <https://fireflysoftware.io/openplatform/#insurance-development>).

## API and event reference

- [OpenAPI index](../reference/openapi.md) — known specs per module repository
- [Event contracts](../reference/events.md) — stubs until shared packs are published

## Architecture and adapters

- [Architecture overview](../architecture/overview.md) — experience / domain / core bands, `firefly-oss` vs `firefly-serviceOS`, Jafly **26.10.19**
- [Adapter pattern](../integrate/adapters.md) and library guides for `library-psps` and `library-rails`

## Still to deepen

- Runtime ownership and deployment topology beyond the service-band map
- Hosted OpenAPI / event packs for insurance development areas when repos exist
