# Understand OpenPlatform

OpenPlatform is a set of composable services for building and operating banking, lending, and insurance products. It gives teams explicit places for customer interactions, business decisions, authoritative records, financial effects, and external integrations. A customer can see one coherent product while those responsibilities remain separately owned and testable.

Consider three requests: open a checking account, repay a loan early, and bind an insurance policy. Each begins with a person's intent. Each needs identity, permission, a product and its terms, current evidence, a decision, durable records, and an explanation of the result. Two may move money; another may create a contractual obligation before money moves. OpenPlatform organizes those common responsibilities without treating the three products as the same workflow.

## An operating system for financial products

A financial product is more than a form and a database row. It must continue to work after the first sale: accounts accumulate transactions and restrictions; loans accrue interest and receive partial repayments; policies change coverage and generate claims. Staff need to investigate exceptions, explain decisions, reconcile outcomes, and retain evidence. The platform's business perimeter therefore includes origination, servicing, financial operations, and controlled recovery.

The repositories cover customer and organization records, products and pricing, contracts and documents, accounts, cards, payments, lending, insurance, accounting, security, configuration, notifications, and data. They also include public experiences, staff experiences, typed SDKs, integration libraries, and tooling. The [platform map](platform-map.md) explains how those pieces fit together; the [repository catalog](../reference/repositories.md) identifies the individual projects.

## What teams build with it

A product team composes an experience around a business outcome. An integration team selects adapters for the institution's systems and providers. A domain team owns decisions and transitions. A core team maintains authoritative data and local invariants. Operations teams need the resulting identifiers, evidence, and recovery actions, not access to every internal service.

This separation makes incremental adoption possible. A bank can connect an existing account authority while adopting a new experience or domain capability. An insurer can introduce a policy journey while retaining its established claims or accounting estate. Such an integration requires an explicit contract and adapter; a matching repository name does not automatically make two systems interchangeable.

## Follow one instruction

A typical instruction passes through these responsibilities:

1. **Establish authority.** Identify the actor, tenant, represented customer, requested resource, and allowed action.
2. **Compose the interaction.** The experience gathers the required inputs and presents a useful business result.
3. **Make the domain decision.** The domain validates prerequisites and coordinates commands, queries, and participating services.
4. **Commit authoritative effects.** Owning cores persist records, histories, and financial effects within their supported transaction boundaries.
5. **Reach external authorities.** Selected adapters invoke rails, identity, bureau, signature, delivery, or other providers and preserve their outcomes.
6. **Explain and recover.** The channel and operator distinguish completed, rejected, pending, and uncertain work and retain enough identity to investigate safely.

The [execution model](execution-model.md) follows this path in detail. The [data and money guide](data-and-money.md) explains why a balance view, a pending posting, an external acknowledgment, and settlement are different facts.

## Read this manual in order

Begin with the [platform map](platform-map.md), then [execution model](execution-model.md) and [data and money](data-and-money.md). Choose a [business journey](../journeys/index.md), inspect its concrete worked example, and follow its linked [API contracts](../api/index.md). Use the [glossary](glossary.md) when a term crosses business and software meanings. [Reading paths](reading-paths.md) provide shorter routes for product, engineering, and operations teams.

## Use the examples and contracts

The examples use synthetic data to explain concrete inputs, relationships, and results. Repository fixtures state whether they call a real service and database or replace collaborators with mocks. Run them in their documented disposable setup before adapting the request to your own environment. Obtain resource identities from their owning APIs; a UUID in a fixture is not a customer record in your deployment.

The business chapters distinguish current service behavior from the rules and integrations an institution must configure for a complete process. Follow the linked API contracts and implementation sources for exact fields and supported operations. Use the [operations guide](../operations/index.md) to prepare diagnosis and recovery procedures around the services you deploy.
