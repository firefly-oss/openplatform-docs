# Business modules catalogue

Module ids and names align with the public OpenPlatform modules page at <https://fireflysoftware.io/openplatform/modules/> (`platformModules` / `businessModules` in the website sources).

Each business module and the shared identity services have a dedicated page with purpose, when-to-use guidance, layer maps grounded in local `firefly-oss` repositories, OpenAPI links, and honest gaps. This page is the map.

## How to use this catalogue

1. Match the journey step you are building (party, agreement, payment, loan, and so on) to a module id.
2. Open that module page for repositories and layer prefixes (`core-*`, `domain-*`, `exp-*`).
3. Confirm the parent pin on [Versioning and BOM](../versioning/bom.md) before you assume Boot or Java levels from a README badge (**26.10.19** / Boot **4.1.1** / Java **25**).
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

## Inventory (module, page, status)

Status reflects documentation completeness for this hub as of 2026-10-18/19, not production readiness of the services.

| Module id | Page | Repos linked (summary) | Doc status |
|-----------|------|------------------------|------------|
| `customers` | [customers](customers.md) | `core-common-customer-mgmt`, `domain-customer-people` | Complete |
| `onboarding` | [onboarding](onboarding.md) | `exp-onboarding`, `domain-customer-kyc-kyb`, `core-common-kycb-mgmt` | Complete |
| `products` | [products](products.md) | product + pricing core/domain set | Complete |
| `agreements` | [agreements](agreements.md) | contract + document core/domain | Complete |
| `distribution` | [distribution](distribution.md) | distributor core/domain + `exp-distributor` | Complete |
| `accounts` | [accounts](accounts.md) | accounts/ledger/GL + `exp-accounts` | Complete |
| `payments` | [payments](payments.md) | payments/cards/psdx/engine + libraries + `exp-cards` | Complete |
| `lending` | [lending](lending.md) | origination/servicing/collateral/collections + product lines + `exp-lending` | Complete |
| `risk` | [risk](risk.md) | scoring/provisioning/regulatory + bureau domain | Complete |
| `shared` | [shared](shared.md) | identity, SCA, notifications, org, config, profile, channel | Complete |

Insurance development areas (in IA, not separate module ids yet):

| Area | Page | Dedicated `firefly-oss` repos | Doc status |
|------|------|-------------------------------|------------|
| Policy lifecycle | [policy-lifecycle](../insurance/policy-lifecycle.md) | None published yet — reuses foundations | Complete (honest gaps) |
| Underwriting | [underwriting](../insurance/underwriting.md) | None published yet | Complete (honest gaps) |
| Claims | [claims](../insurance/claims.md) | None published yet | Complete (honest gaps) |
| Financial flows | [financial-flows](../insurance/financial-flows.md) | None published yet — uses payments | Complete (honest gaps) |

## Layer conventions in `firefly-oss`

| Prefix | Typical role |
|--------|----------------|
| `core-*` | Persistence and core APIs for a bounded context |
| `domain-*` | Domain orchestration (commands, sagas, queries) |
| `exp-*` | Experience / BFF journeys for channels |
| `library-*` | Shared libraries (rails, PSP interfaces, batch utilities) |
| `app-*` | Standalone applications (for example authenticator) |

GitHub organisation: <https://github.com/firefly-oss>

## Unmapped local repositories

These exist under the local `firefly-oss` tree and are called out on module pages where relevant; they are not separate website module tiles:

- `core-common-modelhub`, `core-data-template`, `domain-data-business-intelligence` — supporting data platforms (see [shared](shared.md))
- `library-common-batch` — batch utilities
- `firefly-lending` — mock OpenAPI sample only (see [OpenAPI index](../reference/openapi.md))

## API and event reference

- [OpenAPI index](../reference/openapi.md) — known specs per module repository
- [Event contracts](../reference/events.md) — stubs until shared packs are published

## Architecture and adapters

- [Architecture overview](../architecture/overview.md) — experience / domain / core bands, `firefly-oss` vs `firefly-serviceOS`, Jafly **26.10.19**
- [Adapter pattern](../integrate/adapters.md) and library guides for `library-psps` and `library-rails`
- [Start here — Prerequisites](../start/prerequisites.md) and [First service](../start/first-service.md)

## Still to deepen

- Runtime ownership and deployment topology beyond the service-band map
- Hosted OpenAPI / event packs for insurance development areas when repos exist
- Filling domain-layer gaps where only core (or only exp) exists today
