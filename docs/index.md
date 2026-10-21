# Overview

<p class="ff-steward">Stewarded by the Firefly Software Foundation. <a href="mailto:dev@fireflysoftware.io">dev@fireflysoftware.io</a></p>


<p class="ff-lead">OpenPlatform is the business software behind customer, contract, product, banking, lending, insurance, and distribution. Train 26.10.3 is the published set.</p>

It is for engineers who change a bounded context or run a journey. Start with the [architecture](layers/index.md). A business domain is not a Maven module. Experience, domain, and core are layers inside the domain. Then open the domain you are working in. Each one is read from the bounded context down to the core.

[Jafly](jafly.md) is the framework under every module (`org.fireflyframework`, BOM 26.10.20). [Quickstart](quickstart.md) is the decision call you can make without a bureau. [Replace an adapter](adapters/index.md) is how an installer swaps the ruleset, the credit report, and the identity provider.

Attitude makes the difference.

## Business domains

- [Customer](domains/customer/context.md). Party, person, company, ownership.
- [Contract](domains/contract/context.md). Agreement, lines, amendment and renewal.
- [Product](domains/product/context.md). Catalog and pricing.
- [Banking](catalog/banking.md). Accounts, cards, payments, ledger.
- [Lending](experience/public/lending.md). One journey. The product kind chooses the saga.
- [Insurance](catalog/insurance.md). Policies, claims, and the other insurance cores.
- [Distribution](catalog/shared.md). Brokers, agencies, and collaborators live with the distributor services.
- [Decision and external data](catalog/decision.md). Approve, refer, or decline. Credit report and company lookup.
- [Access and identity](catalog/security.md). Sessions, strong customer authentication, users, and the vault.

<ul class="ff-pins" markdown="0">
<li class="ff-pin"><span class="ff-pin__label">OpenPlatform</span><span class="ff-pin__value">26.10.3</span></li>
<li class="ff-pin"><span class="ff-pin__label">Jafly BOM</span><span class="ff-pin__value">26.10.20</span></li>
<li class="ff-pin"><span class="ff-pin__label">Java</span><span class="ff-pin__value">25</span></li>
<li class="ff-pin"><span class="ff-pin__label">Spring Boot</span><span class="ff-pin__value">4.1.1</span></li>
</ul>

Published by the Firefly Software Foundation. [dev@fireflysoftware.io](mailto:dev@fireflysoftware.io). Organization: [fireflysoftwaresolutions](https://github.com/fireflysoftwaresolutions). Service host: `https://openplatform.fireflysoftware.io/{service}`. Product site: [fireflysoftware.io](https://fireflysoftware.io/).
