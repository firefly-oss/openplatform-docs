# Architecture

<p class="ff-steward">Stewarded by the Firefly Software Foundation. <a href="mailto:dev@fireflysoftware.io">dev@fireflysoftware.io</a></p>


OpenPlatform is a banking core and an insurance core. Products and the processes around them are built on those cores. A deposit account, a loan, and a policy are records in a core. The journey that opens them does not own the tables.

Insurance records policies, claims, premium schedules, and reserves. It does not move money and it does not certify IFRS 17 or Solvency II.

Each process is a port. The journey calls the port. The adapter that answers today is the domain saga: create, update, change status, and close, with compensation, through that context's core. A later process engine can implement the same port. The journey stays. A later payment rail, payment provider, or identity adapter is the same kind of replacement. The journey does not learn the new system.

Identity and the rules engine are Jafly, from Firefly Framework, `org.fireflyframework`, BOM 26.10.20. OpenPlatform does not fork them. The sandbox identity adapter does not start Keycloak. The sandbox credit report does not call a bureau.

A customer journey runs a product through its life. Origination starts it. Servicing continues it. Both live in `exp-lending`. Account and card tasks stay their own journeys, because a person does those as separate work. The finance staff terminal and the insurance staff terminal are the matching journeys for an employee: sign in, impersonate the customer, then run an operation on the same kind of record, and also run back-office work the customer does not run.

<div class="ff-topo" markdown="0">
<p class="ff-topo__caption">Layers inside a business domain</p>
<div class="ff-topo__stack">
<div class="ff-topo__band">
<p class="ff-topo__label">Experience</p>
<p class="ff-topo__meta">A journey. One service can call several domain sagas. It does not own the database.</p>
</div>
<div class="ff-topo__band">
<p class="ff-topo__label">Domain</p>
<p class="ff-topo__meta">The saga for one bounded context. Create, update, status, and close, with compensation.</p>
</div>
<div class="ff-topo__band ff-topo__band--core">
<p class="ff-topo__label">Core</p>
<p class="ff-topo__meta">The system of record. Other contexts keep an identifier, not a foreign key into these tables.</p>
</div>
</div>
</div>

Journeys are sequence diagrams under [Experience](../experience/index.md). This picture is only the layer stack.

`DecisionPort` and `SandboxCreditReportAdapter` are in `domain-lending-credit-scoring`. `POST /api/v1/decisions` is the HTTP adapter. The rules engine is Jafly's, BOM 26.10.20. OpenPlatform does not ship a forked engine.

`AccessPort` runs before a journey changes a resource. A denial does not call the domain. The HTTP check is `POST /api/v1/access/checks` on `domain-core-security-center`.

The domain saga then writes one core through that core's SDK. It does not import another core's internals. Cross-service links are UUIDs. Child rows inside one core cascade on delete. Currency is `VARCHAR(3)`.

## A process engine later

An experience step calls a port. The default adapter calls a domain service. A later process engine can implement that same port. This version does not run that engine. No diagram here shows one in the call path.

## Keycloak is not a journey call

`domain-core-security-center` depends on `org.fireflyframework:fireflyframework-security-idp-keycloak`. That module is a Jafly identity-provider adapter, BOM `26.10.20`. The journey does not construct a Keycloak client. The default is `firefly.security-center.identity.adapter=sandbox`. An installer sets `keycloak`, `cognito`, or `internal-db`. The decision call does not read that property.

Jafly (`org.fireflyframework`, BOM 26.10.20) is the identity and the rules engine, from Firefly Framework. OpenPlatform does not fork it. See [Jafly](../jafly.md).

## Open a layer

- [Experience](../experience/index.md). The journeys, not a list of domains.
- [Domain](domain.md). The saga rule and every `domain-*` service.
- [Core](core.md). Persistence rules and every `core-*` service.
- [Libraries](libraries.md). Payment ports, batch jobs, the parent, and the bill of materials.

The same repositories, grouped by business, are the [families](../catalog/index.md).
