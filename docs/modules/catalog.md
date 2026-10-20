# Business modules catalogue

Module ids and names align with the public OpenPlatform modules page at <https://fireflysoftware.io/openplatform/modules/> (`platformModules` / `businessModules` in the website sources).

Each business module and the shared identity services have a dedicated page with purpose, what the module owns, the repositories on disk, and OpenAPI links. This page is the map.

<figure class="ff-figure">
  <img src="/diagrams/openplatform-ecosystem.svg?v=20261019b" alt="Map of the ten OpenPlatform module ids in firefly-oss" width="960" height="964" />
  <figcaption>Read the grid left to right, then down. Each card is one module id. The page for that id lists the repositories.</figcaption>
</figure>

## How to use this catalogue

1. Match the journey step (party, agreement, payment, loan, and so on) to a module id.
2. Open that module page for repositories and layer prefixes (`core-*`, `domain-*`, `exp-*`).
3. Use the [OpenAPI index](../reference/openapi.md) for published contracts; treat each repo README as authoritative for local run.
4. Put anything outside Firefly behind an [adapter](../integrate/adapters.md). The current train pin is on [Versioning and BOM](../versioning/bom.md).

## Browse by module

<div class="ff-modules" markdown="0">
  <a class="ff-module" href="/modules/customers/">
    <span class="ff-module__id">customers</span>
    <span class="ff-module__title">Customers</span>
    <span class="ff-module__meta">People, legal entities, relationships, and consent.</span>
  </a>
  <a class="ff-module" href="/modules/onboarding/">
    <span class="ff-module__id">onboarding</span>
    <span class="ff-module__title">Onboarding</span>
    <span class="ff-module__meta">Data collection, KYC/KYB evidence, and journey status.</span>
  </a>
  <a class="ff-module" href="/modules/products/">
    <span class="ff-module__id">products</span>
    <span class="ff-module__title">Products</span>
    <span class="ff-module__meta">Commercial configuration for offers you sell.</span>
  </a>
  <a class="ff-module" href="/modules/agreements/">
    <span class="ff-module__id">agreements</span>
    <span class="ff-module__title">Agreements</span>
    <span class="ff-module__meta">Contracts, documents, and signature workflows.</span>
  </a>
  <a class="ff-module" href="/modules/distribution/">
    <span class="ff-module__id">distribution</span>
    <span class="ff-module__title">Distribution</span>
    <span class="ff-module__meta">Partner channels and distributor access.</span>
  </a>
  <a class="ff-module" href="/modules/accounts/">
    <span class="ff-module__id">accounts</span>
    <span class="ff-module__title">Accounts</span>
    <span class="ff-module__meta">Account records and related financial posts.</span>
  </a>
  <a class="ff-module" href="/modules/payments/">
    <span class="ff-module__id">payments</span>
    <span class="ff-module__title">Payments</span>
    <span class="ff-module__meta">Orders, cards, rails, and PSP boundaries.</span>
  </a>
  <a class="ff-module" href="/modules/lending/">
    <span class="ff-module__id">lending</span>
    <span class="ff-module__title">Lending</span>
    <span class="ff-module__meta">Origination, servicing, collateral, collections.</span>
  </a>
  <a class="ff-module" href="/modules/risk/">
    <span class="ff-module__id">risk</span>
    <span class="ff-module__title">Risk</span>
    <span class="ff-module__meta">Risk and compliance operations for journeys.</span>
  </a>
  <a class="ff-module" href="/modules/shared/">
    <span class="ff-module__id">shared</span>
    <span class="ff-module__title">Shared services</span>
    <span class="ff-module__meta">Identity and common services used across modules.</span>
  </a>
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

Insurance cores are published. Domain and experience services for these areas are not. Parties stay in customers. Agreements stay in agreements. Payment execution stays in payments.

| Area | Page | Core repository | Doc status |
|------|------|-----------------|------------|
| Policy lifecycle | [policy-lifecycle](../insurance/policy-lifecycle.md) | `core-insurance-policies` | Complete |
| Underwriting | [underwriting](../insurance/underwriting.md) | `core-insurance-underwriting` | Complete |
| Claims | [claims](../insurance/claims.md) | `core-insurance-claims` | Complete |
| Financial flows | [financial-flows](../insurance/financial-flows.md) | `core-insurance-financials` | Complete |
| Delegated authority | [delegated-authority](../insurance/delegated-authority.md) | `core-insurance-delegated-authority` | Complete |
| Reinsurance | [reinsurance](../insurance/reinsurance.md) | `core-insurance-reinsurance` | Complete |
| Reserving data | [reserving](../insurance/reserving.md) | `core-insurance-reserving` | Complete |

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

- [Architecture overview](../architecture/overview.md) — experience / domain / core bands in `firefly-oss`, Jafly **26.10.19**
- [Adapter pattern](../integrate/adapters.md) and library guides for `library-psps` and `library-rails`
- [Start here](../start/index.md) — how to navigate this hub

## Still to deepen

- Runtime ownership and deployment topology beyond the service-band map
- Hosted OpenAPI / event packs for insurance development areas when repos exist
- Filling domain-layer gaps where only core (or only exp) exists today
