# Agreements and documents

**Module id:** `agreements`

Contracts, party–product links, document metadata, and the boundary to e-signature and content providers. Each agreement keeps parties and evidence in one context.

Public product page: <https://fireflysoftware.io/openplatform/modules/>

## Why this module exists

Accounts, loans, and insurance-style policies all need a place for terms, party roles, and signed evidence. Scattering that across experience services or provider SDKs makes audit and renewal painful. Agreements owns contract and document records; signature and ECM providers stay behind adapters (often via Jafly SPI modules).

## When to use it

Use `agreements` when parties and products must be bound by contract terms, document versions, or e-signature evidence.

Do not embed provider-specific signature SDKs in domain services. See [Adapters](../integrate/adapters.md).

## Key concepts

| Concept | Meaning in this module |
|---------|------------------------|
| Contract | Terms, status history, and party–product links |
| Document metadata | Versions, permissions, and storage references |
| Evidence | Signed artefacts referenced from the agreement |
| Provider boundary | Content or e-signature system behind an adapter |

## Layer map (repos that exist)

| Repository | Layer | Role |
|------------|-------|------|
| [`core-common-contract-mgmt`](https://github.com/firefly-oss/core-common-contract-mgmt) | `core-*` | Contract lifecycle and party–product links |
| [`domain-common-contracts`](https://github.com/firefly-oss/domain-common-contracts) | `domain-*` | Contract domain orchestration |
| [`core-common-document-mgmt`](https://github.com/firefly-oss/core-common-document-mgmt) | `core-*` | Document metadata and storage boundaries |

**Experience:** no dedicated `exp-agreements` repository in the inventory. Lending and onboarding experience services typically compose contract APIs indirectly.

**Gap:** dedicated e-signature adapter repositories are not listed as OpenPlatform module ids here; use Jafly ECM/signature guidance and the [adapter pattern](../integrate/adapters.md).

## How a typical call path looks

1. Domain contract services assemble parties (from [customers](customers.md)) and product references (from [products](products.md)).
2. Core contract and document services persist terms and metadata.
3. Signature and content providers sit behind adapters.
4. Accounts and lending keep agreement ids on their own records.

## How to start

1. Confirm pins: **26.10.19** / Boot **4.1.1** / Java **25**.
2. Mirror `domain-common-contracts` for orchestration or `core-common-contract-mgmt` for persistence ([First service](../start/first-service.md)).
3. Read OpenAPI before adding fields that already exist as document metadata.
4. Plan provider wiring through adapters, not domain dependencies.

## OpenAPI

| Repository | Spec |
|------------|------|
| `core-common-contract-mgmt` | [`…/openapi.yml`](https://github.com/firefly-oss/core-common-contract-mgmt/blob/main/core-common-contract-mgmt-sdk/src/main/resources/openapi.yml) |
| `domain-common-contracts` | [`…/openapi.yml`](https://github.com/firefly-oss/domain-common-contracts/blob/main/domain-common-contracts-sdk/src/main/resources/openapi.yml) |
| `core-common-document-mgmt` | [`…/openapi.yml`](https://github.com/firefly-oss/core-common-document-mgmt/blob/main/core-common-document-mgmt-sdk/src/main/resources/openapi.yml) |

Full index: [OpenAPI — agreements](../reference/openapi.md#agreements-agreements).

## Events

[Stub until published](../reference/events.md).

## Maturity notes

All three repositories are present under `firefly-oss`. Document content and signature providers stay behind adapters. Confirm schema and API surfaces in each repository before integrating. Parent pin for new work: **26.10.19**.

## Related modules

- [Customers and relationships](customers.md)
- [Products and commercial configuration](products.md)
- [Accounts and financial records](accounts.md)
- [The lending lifecycle](lending.md)
- [Insurance — policy lifecycle](../insurance/policy-lifecycle.md)
- [Business modules catalogue](catalog.md)

## Next steps

Read [Adapters](../integrate/adapters.md) before wiring e-signature. See [Customers](customers.md) and [Products](products.md) for upstream identifiers.
