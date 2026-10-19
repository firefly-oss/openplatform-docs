# Architecture overview

OpenPlatform is organised so business modules stay composable, shared
services stay reusable, and systems outside Firefly connect through
adapters.

## Layers

OpenPlatform services in `firefly-oss` follow a three-band repository
convention. Channels sit above; institution systems and providers sit
behind adapters.

<div class="ff-topo" role="img" aria-label="OpenPlatform layers from experience to core, with adapters at the boundary">
  <p class="ff-topo__caption">OpenPlatform service bands</p>
  <div class="ff-topo__stack">
    <div class="ff-topo__band">
      <p class="ff-topo__label">Experience (<code>exp-*</code>)</p>
      <p class="ff-topo__meta">Channel and journey APIs (BFF). Orchestrates domain calls for apps and portals.</p>
      <ul class="ff-topo__chips">
        <li>exp-onboarding</li>
        <li>exp-lending</li>
        <li>exp-accounts</li>
      </ul>
    </div>
    <div class="ff-topo__band">
      <p class="ff-topo__label">Domain (<code>domain-*</code>)</p>
      <p class="ff-topo__meta">Commands, queries, and process coordination for a bounded context.</p>
      <ul class="ff-topo__chips">
        <li>domain-customer-people</li>
        <li>domain-lending-loan-origination</li>
      </ul>
    </div>
    <div class="ff-topo__band ff-topo__band--core">
      <p class="ff-topo__label">Core (<code>core-*</code>)</p>
      <p class="ff-topo__meta">Persistence and core APIs for the bounded context.</p>
      <ul class="ff-topo__chips">
        <li>core-common-customer-mgmt</li>
        <li>core-banking-ledger</li>
      </ul>
    </div>
    <div class="ff-topo__band ff-topo__band--steel">
      <p class="ff-topo__label">Adapters and libraries</p>
      <p class="ff-topo__meta">Ports to payment rails, PSPs, document stores, identity, and institution systems. Shared libraries use the <code>library-*</code> prefix.</p>
      <ul class="ff-topo__chips">
        <li>library-rails</li>
        <li>library-psps</li>
      </ul>
    </div>
  </div>
</div>

| Layer | Responsibility |
|-------|----------------|
| Channels | Apps, portals, and partner surfaces that start a journey |
| Process | Coordination across modules (orchestration, workflows such as Weave) |
| Experience / domain / core | OpenPlatform service bands (`exp-*`, `domain-*`, `core-*`) |
| Shared / identity | Users, notifications, reference data, and related common services |
| Adapters | Boundaries to institution systems and third-party providers |

Repository naming for the service bands is summarised in the
<a href="../modules/catalog.md">business modules catalogue</a>.

## Topology: organisations and products

Public OpenPlatform modules live under **firefly-oss**. Commercial
industry applications and packaged services are published under
**firefly-serviceOS**. Both sit on the same Jafly runtime train.

<div class="ff-topo" role="img" aria-label="firefly-serviceOS industry solutions on OpenPlatform modules in firefly-oss, on Jafly">
  <p class="ff-topo__caption">Where code and products live</p>
  <div class="ff-topo__map">
    <div class="ff-topo__card ff-topo__card--svc">
      <p class="ff-topo__kicker">GitHub org</p>
      <p class="ff-topo__label">firefly-serviceOS</p>
      <p class="ff-topo__meta">Commercial OS applications and Firefly services for banking and insurance operations (for example LendingOS). Built on OpenPlatform.</p>
    </div>
    <div class="ff-topo__card ff-topo__card--oss">
      <p class="ff-topo__kicker">GitHub org</p>
      <p class="ff-topo__label">firefly-oss</p>
      <p class="ff-topo__meta">Public OpenPlatform business modules, shared services, adapter libraries, and this documentation hub.</p>
    </div>
    <div class="ff-topo__card ff-topo__card--fw">
      <p class="ff-topo__kicker">Framework train</p>
      <p class="ff-topo__label">Jafly <code>26.10.19</code> (Spring Boot <code>4.1.1</code>)</p>
      <p class="ff-topo__meta"><code>org.fireflyframework:fireflyframework-parent</code> via <code>com.firefly:firefly-parent</code>. Security SPI, ECM ports, notifications, and related adapter modules ship in the Jafly reactor.</p>
    </div>
  </div>
</div>

## Business module ids

The website and this hub share the same OpenPlatform module ids:

`customers`, `onboarding`, `products`, `agreements`, `distribution`,
`accounts`, `payments`, `lending`, `risk`, plus shared identity services.

See the <a href="../modules/catalog.md">business modules catalogue</a>
for purpose, coverage, and repository names.

## Integration grammar

A journey step may touch several layers (channel, process, modules, core,
third party). Third parties and legacy cores stay behind adapters so
provider details do not leak into every application. Worked adapter
guides:

- <a href="../integrate/adapters.md">Adapter pattern</a>
- <a href="../integrate/library-psps.md">PSP library (`library-psps`)</a>
- <a href="../integrate/library-rails.md">Payment rails library (`library-rails`)</a>

## AI stance

Where AI participates in a journey, it decides within approved limits,
explained, recorded, and open to human review. Decisions with significant
effects on people, or beyond delegated limits, go to people with
delegated authority. Platform documentation should never claim fully
autonomous replacement of staff.

## Runtime note

Module services are Java Spring applications on the framework train
pinned by OpenPlatform (Boot **4.1.1** via
`fireflyframework-parent` **26.10.19**). Workflow coordination may use
Firefly Weave. Treat each runtime’s docs as authoritative for that layer.

See <a href="../versioning/bom.md">Versioning and BOM</a> and
<a href="../ecosystem.md">Ecosystem</a>.
