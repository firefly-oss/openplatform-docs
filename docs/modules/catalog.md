# Business modules catalogue

Module ids and names align with the public OpenPlatform modules page at
<https://fireflysoftware.io/openplatform/modules/>
(`platformModules` / `businessModules` in the website sources).

Each business module and the shared identity services now have a dedicated
page with purpose, coverage, key `firefly-oss` repositories, and maturity
notes grounded in those repositories (no invented metrics).

## Business module ids

| Id | Title | Page |
|----|-------|------|
| `customers` | Customers and relationships | <a href="customers.md">customers</a> |
| `onboarding` | Onboarding and verification | <a href="onboarding.md">onboarding</a> |
| `products` | Products and commercial configuration | <a href="products.md">products</a> |
| `agreements` | Agreements and documents | <a href="agreements.md">agreements</a> |
| `distribution` | Distribution and partner channels | <a href="distribution.md">distribution</a> |
| `accounts` | Accounts and financial records | <a href="accounts.md">accounts</a> |
| `payments` | Payments and cards | <a href="payments.md">payments</a> |
| `lending` | The lending lifecycle | <a href="lending.md">lending</a> |
| `risk` | Risk and compliance operations | <a href="risk.md">risk</a> |
| `shared` | Identity and shared services | <a href="shared.md">shared</a> |

## Layer conventions in `firefly-oss`

| Prefix | Typical role |
|--------|----------------|
| `core-*` | Persistence and core APIs for a bounded context |
| `domain-*` | Domain orchestration (commands, sagas, queries) |
| `exp-*` | Experience / BFF journeys for channels |
| `library-*` | Shared libraries (rails, PSP interfaces, …) |

GitHub organisation: <https://github.com/firefly-oss>

## Insurance development areas

OpenPlatform also describes insurance-oriented development areas built on
the same foundations. Dedicated pages:

| Area | Page |
|------|------|
| Policy lifecycle | <a href="../insurance/policy-lifecycle.md">policy lifecycle</a> |
| Underwriting operations | <a href="../insurance/underwriting.md">underwriting</a> |
| Claims operations | <a href="../insurance/claims.md">claims</a> |
| Insurance financial flows | <a href="../insurance/financial-flows.md">financial flows</a> |

Overview: <a href="../insurance/index.md">Insurance development areas</a>
(aligned with
<https://fireflysoftware.io/openplatform/#insurance-development>).

## API and event reference

- <a href="../reference/openapi.md">OpenAPI index</a> — known specs per
  module repository
- <a href="../reference/events.md">Event contracts</a> — stubs until
  shared packs are published

## Architecture and adapters

- <a href="../architecture/overview.md">Architecture overview</a> —
  experience / domain / core bands, `firefly-oss` vs `firefly-serviceOS`,
  Jafly **26.10.19**
- <a href="../integrate/adapters.md">Adapter pattern</a> and library
  guides for `library-psps` and `library-rails`

## Still to deepen for launch

- Runtime ownership and deployment topology beyond the service-band map
- Hosted OpenAPI / event packs for insurance development areas when repos
  exist
