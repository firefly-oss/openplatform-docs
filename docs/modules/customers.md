# Customers and relationships

**Module id:** `customers`

<p class="ff-lead">The party of record: a person or a legal entity, the links between them, and the consent attached to that party.</p>

Other modules store the party id from here. They do not keep a private copy of the person or the company.

<figure class="ff-figure">
  <img src="/diagrams/module-customers.svg?v=20261019b" alt="Customers, read top to bottom: channel journeys, then people and businesses, then the party record" width="960" height="484" />
  <figcaption>Read top to bottom. Channel journeys ask the domain about people and businesses. The core stores the party record.</figcaption>
</figure>

There is no `exp-customers` repository. Channel work uses [onboarding](onboarding.md) (`exp-onboarding`) and profile self-service (`exp-profile`, under [shared services](shared.md)). The domain service is `domain-customer-people`. The core service is `core-common-customer-mgmt`.

<div class="ff-split" markdown="0">
  <section class="ff-panel">
    <h3>What it owns</h3>
    <ul>
      <li>Parties, natural persons, and legal entities</li>
      <li>Relationships between parties</li>
      <li>Addresses, phone contacts, and email contacts</li>
      <li>Identity documents, economic activities, and group memberships</li>
      <li>Consent records and party status</li>
      <li>Politically exposed person records attached to a party</li>
    </ul>
  </section>
  <section class="ff-panel">
    <h3>What it does not own</h3>
    <ul>
      <li>KYC and KYB cases. Those are <a href="/modules/onboarding/">onboarding</a>.</li>
      <li>User accounts, sessions, and sign-in. Those are <a href="/modules/shared/">shared services</a>.</li>
      <li>Bank and branch structure. That is organisation management, also under shared services.</li>
      <li>Contracts that bind a party to a product. Those are <a href="/modules/agreements/">agreements</a>.</li>
    </ul>
  </section>
</div>

## Repositories

| Repository | Layer | What it holds | OpenAPI |
|------------|-------|---------------|---------|
| [`domain-customer-people`](https://github.com/firefly-oss/domain-customer-people) | Domain | Customers, businesses, relationships, contact queries, consent catalogue | [openapi.yml](https://github.com/firefly-oss/domain-customer-people/blob/main/domain-customer-people-sdk/src/main/resources/openapi.yml) |
| [`core-common-customer-mgmt`](https://github.com/firefly-oss/core-common-customer-mgmt) | Core | Party persistence and the nested party resources | [openapi.yml](https://github.com/firefly-oss/core-common-customer-mgmt/blob/main/core-common-customer-mgmt-sdk/src/main/resources/openapi.yml) |

## How the pieces fit

A channel collects the journey. When the party should last, the domain service takes the command.

`domain-customer-people` exposes customers, businesses, party relationships, a consent catalogue, and party contact queries. Search sits on the customer resource. Those calls are the domain's job: coordinate the command or answer the query.

`core-common-customer-mgmt` persists the party under `/api/v1/parties`, with nested resources for persons, legal entities, relationships, contacts, documents, consent, status, and politically exposed persons. Downstream modules store the party id on their own records. They do not recreate the party table.

## Related

- [Onboarding](onboarding.md) while evidence is still a case
- [Agreements](agreements.md) when the party is bound to a product
- [Accounts](accounts.md) when the party holds an account
- [Shared services](shared.md) for sign-in and profile
- [Catalogue](catalog.md)
