# Distribution and partner channels

**Module id:** `distribution`

<p class="ff-lead">What a partner may sell, in which territory, and how that channel looks.</p>

Product definitions stay in [products](products.md). This module holds the partner, the assignment, and the branding.

<figure class="ff-figure">
  <img src="/diagrams/module-distribution.svg?v=20261019b" alt="Distribution, read top to bottom: partner portal, then branding and catalogue, then distributor records" width="960" height="484" />
  <figcaption>Read top to bottom. The partner portal is the channel. Branding and the partner catalogue sit in the domain. Distributor, agency, and agent records sit in the core.</figcaption>
</figure>

`exp-distributor` is the portal. `domain-distributor-branding` and `domain-distributor-catalog` shape what that portal shows. `core-common-distributor-mgmt` stores the distributor.

<div class="ff-split" markdown="0">
  <section class="ff-panel">
    <h3>What it owns</h3>
    <ul>
      <li>Distributors, agencies, agents, and agent roles</li>
      <li>Territories and product assignments for a partner</li>
      <li>Branding, terms templates, and channel configuration</li>
      <li>Partner catalogue views and simulations for that partner</li>
    </ul>
  </section>
  <section class="ff-panel">
    <h3>What it does not own</h3>
    <ul>
      <li>The product master. That is <a href="/modules/products/">products</a>.</li>
      <li>The party of record for a customer. That is <a href="/modules/customers/">customers</a>.</li>
      <li>Direct-to-customer journeys that do not pass through a partner.</li>
      <li>Channel init for a customer app. That is <code>exp-channel-management</code> under <a href="/modules/shared/">shared services</a>.</li>
    </ul>
  </section>
</div>

## Repositories

| Repository | Layer | What it holds | OpenAPI |
|------------|-------|---------------|---------|
| [`exp-distributor`](https://github.com/firefly-oss/exp-distributor) | Experience | Portal: profile, branding, agents, agencies, territories, products, catalogue, simulations | [openapi.yml](https://github.com/firefly-oss/exp-distributor/blob/main/exp-distributor-sdk/src/main/resources/openapi.yml) |
| [`domain-distributor-branding`](https://github.com/firefly-oss/domain-distributor-branding) | Domain | Distributor, agency, agent, territory, operation, configuration | [openapi.yml](https://github.com/firefly-oss/domain-distributor-branding/blob/main/domain-distributor-branding-sdk/src/main/resources/openapi.yml) |
| [`domain-distributor-catalog`](https://github.com/firefly-oss/domain-distributor-catalog) | Domain | Partner catalogue, simulations, shipment queries | [openapi.yml](https://github.com/firefly-oss/domain-distributor-catalog/blob/main/domain-distributor-catalog-sdk/src/main/resources/openapi.yml) |
| [`core-common-distributor-mgmt`](https://github.com/firefly-oss/core-common-distributor-mgmt) | Core | Distributor lifecycle, agencies, agents, territories, assignments | [openapi.yml](https://github.com/firefly-oss/core-common-distributor-mgmt/blob/main/core-common-distributor-mgmt-sdk/src/main/resources/openapi.yml) |

## How the pieces fit

`exp-distributor` is the BFF at `/api/v1/experience/distributors`. The portal asks it for profile, branding, agents, agencies, territories, products, catalogue, and simulations.

`domain-distributor-branding` answers distributor, agency, agent, territory, and configuration. `domain-distributor-catalog` answers the constrained catalogue, simulations, and shipment queries. Those are domain queries over the partner's view, not a second product master.

`core-common-distributor-mgmt` persists distributors, agencies, agents, roles, territories, product assignments, terms templates, and configuration. The product id on an assignment points at [products](products.md).

## Related

- [Products](products.md) for the definition being assigned
- [Onboarding](onboarding.md) when a partner starts a customer journey
- [Shared services](shared.md) for channel init outside the partner portal
- [Catalogue](catalog.md)
