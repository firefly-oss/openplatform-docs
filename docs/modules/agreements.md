# Agreements and documents

**Module id:** `agreements`

<p class="ff-lead">The contract that binds parties to a product, plus the document record that evidence hangs on.</p>

Signature providers and content stores stay behind adapters. This module keeps the contract and the document metadata.

<figure class="ff-figure">
  <img src="/diagrams/module-agreements.svg?v=20261019b" alt="Agreements, read top to bottom: journeys call contract services, then terms and signatures, then the contract and document records" width="960" height="484" />
  <figcaption>Read top to bottom. Journeys call the contract services. The domain handles terms, parties, and signatures. The core stores the contract and the document.</figcaption>
</figure>

There is no `exp-agreements` repository. Lending and onboarding journeys call these APIs when a contract is part of the step.

<div class="ff-split" markdown="0">
  <section class="ff-panel">
    <h3>What it owns</h3>
    <ul>
      <li>Contracts, status history, and contract events</li>
      <li>Parties and terms on a contract, including term templates</li>
      <li>Document metadata, versions, folders, tags, and permissions</li>
      <li>Signature requests and signature verification records</li>
    </ul>
  </section>
  <section class="ff-panel">
    <h3>What it does not own</h3>
    <ul>
      <li>The party of record. That is <a href="/modules/customers/">customers</a>.</li>
      <li>The product definition. That is <a href="/modules/products/">products</a>.</li>
      <li>The signature vendor or the content store. Those stay behind an <a href="/integrate/adapters/">adapter</a>.</li>
      <li>Loan schedules and collateral. Those are <a href="/modules/lending/">lending</a>.</li>
    </ul>
  </section>
</div>

## Repositories

| Repository | Layer | What it holds | OpenAPI |
|------------|-------|---------------|---------|
| [`domain-common-contracts`](https://github.com/firefly-oss/domain-common-contracts) | Domain | Contracts, parties, terms, signatures, documents; lookup by party | [openapi.yml](https://github.com/firefly-oss/domain-common-contracts/blob/main/domain-common-contracts-sdk/src/main/resources/openapi.yml) |
| [`core-common-contract-mgmt`](https://github.com/firefly-oss/core-common-contract-mgmt) | Core | Contract lifecycle, terms, parties, events, status | [openapi.yml](https://github.com/firefly-oss/core-common-contract-mgmt/blob/main/core-common-contract-mgmt-sdk/src/main/resources/openapi.yml) |
| [`core-common-document-mgmt`](https://github.com/firefly-oss/core-common-document-mgmt) | Core | Document metadata, versions, folders, signature requests | [openapi.yml](https://github.com/firefly-oss/core-common-document-mgmt/blob/main/core-common-document-mgmt-sdk/src/main/resources/openapi.yml) |

## How the pieces fit

`domain-common-contracts` is the place a journey asks for a contract, its parties, its terms, its signatures, and its documents. A query by party answers "which contracts name this party?"

`core-common-contract-mgmt` persists the contract under `/api/v1/contracts`, with parties, terms, documents, events, and status history. Term templates and validation rules live beside the contract, not inside the channel.

`core-common-document-mgmt` persists document metadata, versions, folders, tags, permissions, search, signature requests, and signature verification. The signature provider resource is a boundary record. The provider toolkit stays in an adapter, not in the domain service.

## Related

- [Customers](customers.md) for the party id on the contract
- [Products](products.md) for the product id on the contract
- [Lending](lending.md) when the contract is a credit agreement
- [Adapters](../integrate/adapters.md)
- [Catalogue](catalog.md)
