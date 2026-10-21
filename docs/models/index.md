# Models

<p class="ff-steward">Stewarded by the Firefly Software Foundation. <a href="mailto:dev@fireflysoftware.io">dev@fireflysoftware.io</a></p>


Three records sit under most journeys. Each has a core that owns the tables and a domain that owns the saga.

- [Party](party.md). Person or company, industry scheme, attributes, ownership graph.
- [Contract](contract.md). Currency, product lines, predecessor, draft delete.
- [Product](product.md). Catalog status and optional pricing.

The decision call is a port on `domain-lending-credit-scoring`, not one of these tables. See [Decision](../catalog/decision.md). Credit-bureau client code is a separate repository. See [Data and external systems](../catalog/data.md).
