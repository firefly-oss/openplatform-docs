# The platform map

The most useful way to navigate OpenPlatform is by responsibility. Repository prefixes describe architectural roles; business families describe the capabilities those roles serve. A payment can therefore cross several roles while remaining one business journey.

<picture style="display:block;max-width:432px;margin-inline:auto">
  <source media="(prefers-color-scheme: dark)" srcset="../../assets/diagrams/platform-landscape-narrow-dark.svg">
  <img src="../../assets/diagrams/platform-landscape-narrow-light.svg" alt="OpenPlatform ownership map: channels, banking lending and insurance domains, owning cores, integrations, and shared foundations" width="100%" style="padding:0">
</picture>

*Customer and staff experiences coordinate domain decisions. Owning cores retain business records and money. Selected adapters reach external authorities; shared identity, terms, and evidence span the journey. This is a conceptual ownership map, not a claim that every illustrated integration is deployed.*

## The layers and their contracts

| Role | Responsibility | Concrete example | What consumers should use |
| --- | --- | --- | --- |
| Channel and gateway | Entry, routing, caller interaction, and configured security boundary | Public customer channel, staff terminal, authenticator | Its documented entry route and actual security configuration |
| Experience (`exp-*`) | Compose a user-facing business operation and shape its result | `exp-accounts`, `exp-lending`, `exp-insurance` | Experience API or supported frontend integration |
| Domain (`domain-*`) | Business intent, decisions, orchestration, and typed boundaries to authorities | `domain-payments`, `domain-insurance-policies` | Domain command/query contract and matching SDK |
| Core (`core-*`) | Durable records, migrations, local consistency, and service invariants | `core-banking-accounts`, `core-banking-ledger` | Core API and matching generated SDK |
| Integration library | Translate a specific external or technical contract | `library-rails`, `library-psps`, specialist bureau clients | Selected interface and configuration, with provider qualification |
| Framework | Shared application mechanisms | Jafly command/query dispatch, orchestration, web, security and provider interfaces | Framework facilities appropriate to the service |

An experience should not repair a failed operation by writing directly into another core's tables. A domain should not infer a provider's settlement from its own successful method return. An SDK preserves the producer's transport types; it does not move ownership from the producer to the caller.

## Business families

**Banking** organizes account identity and spaces, card lifecycle and transactions, payment instructions, ledger effects, and open-banking consent. Its common axis is who may act on which account and what financial state results. Start with [operational banking](../journeys/banking.md).

**Lending** connects application and simulation, credit decisions, product-specific agreements, collateral, disbursement, schedules, repayment, collections, provisioning, and reporting. The agreement defines obligations; payment and accounting evidence explain what actually happened. Start with [lending](../journeys/lending.md).

**Insurance** connects distribution, submission and underwriting, policy administration, claims, premium, delegated authority, reserving, reinsurance, and financial operations. The effective policy version and coverage decision matter as much as current record status. Start with [insurance](../journeys/insurance.md).

**Shared services** supply party, identity, organization, product, contract, document, signature, notification, configuration, and accounting capabilities. These are reusable business authorities, not a miscellaneous utility layer. Their ownership is explained in [shared services](../journeys/shared.md).

## A concrete route through the map

For a payment, `exp-payments` composes the interaction; `domain-payments` coordinates TRY, confirmation, cancellation, SCA, and ledger/provider ports. Its ledger adapter calls the generated `core-banking-ledger` SDK. The core owns the atomic posting aggregate and its durable idempotency claim. A selected rail implementation owns the external request/response translation. Each boundary has a different recovery question: can the experience find the session, can the domain reconstruct its intent, does the core already hold the posting, and did the provider accept the instruction?

The [payments chapter](../journeys/payments.md) explains the current synthetic chain and its remaining operational boundaries. This example should not be generalized to another domain's adapter without reading that adapter: the card domain has its own ledger command handler and is not automatically covered by payment-adapter qualification.

## Ports, providers, and internal records

A port is an explicit interface consumed by application logic and supplied by a selected implementation. A provider adapter implements that boundary and is wired into the runtime. The evidence is the imported interface, implementation, and bean/configuration selection.

A class named `AccountProviderService` can instead manage stored account-provider metadata. CRUD over a provider table is not an outbound integration. When selecting a replacement, inspect the actual port and wiring, the owning contract, and provider error semantics. Configure credentials through the deployment's secret mechanism; never turn a local synthetic adapter into an implicit live fallback.

The [API reference](../api/index.md) maps producer operations and schemas. The [repository catalog](../reference/repositories.md) supplies module/build context. Use both: the architecture map gives direction, while those references identify the exact boundary to implement.
