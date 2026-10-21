# Architecture

A customer action moves in one direction. Experience owns the journey. Domain owns the saga. Core owns the database. Libraries are shared code, not a fourth place where records live.

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

An experience step calls a port. The default adapter calls a domain service. A later process engine can implement that same port. This train does not run that engine. No diagram here shows one in the call path.

## Keycloak is not a journey call

`domain-core-security-center` depends on `org.fireflyframework:fireflyframework-security-idp-keycloak`. That module is a Jafly identity-provider adapter, BOM `26.10.20`. The journey does not construct a Keycloak client. On main, `firefly.idp.provider` and `firefly.security-center.idp.provider` are `cognito`. An installer changes those properties. The decision call does not read them.

Jafly (`org.fireflyframework`, BOM 26.10.20) is the framework under this train. OpenPlatform does not fork it. See [Jafly](../jafly.md).

## Open a layer

- [Experience](../experience/index.md). The journeys, not a list of domains.
- [Domain](domain.md). The saga rule and every `domain-*` service.
- [Core](core.md). Persistence rules and every `core-*` service.
- [Libraries](libraries.md). Payment ports, batch jobs, the parent, and the bill of materials.

The same repositories, grouped by business, are the [families](../catalog/index.md).
