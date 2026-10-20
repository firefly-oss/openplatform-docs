# Architecture overview

OpenPlatform keeps business modules composable, shared services reusable, and systems outside Firefly behind adapters. The shape below is what you will see across `firefly-oss` repositories.

<figure class="ff-figure">
  <img src="/diagrams/openplatform-layers.svg?v=20261019b" alt="OpenPlatform layers, read top to bottom: Experience, then Domain, then Core" width="960" height="653" />
  <figcaption>Read top to bottom. Experience calls domain. Domain calls core. Adapters are not a fourth layer; they are the boundary on the integration page.</figcaption>
</figure>

The picture is the direction of a call. Repository names for each band are on the module pages. Examples of each prefix appear in the bands below.

## Why the bands exist

A single deployable that mixes HTTP for channels, domain rules, and persistence becomes hard to change when one journey needs a different pace from another. OpenPlatform splits that work into three repository conventions so teams can evolve a bounded context without rewriting everything above or below it.

Adapters sit at the edge. Provider SDKs and institution cores stay out of domain services so you can swap a rail, a PSP, or a document store without rewriting every application that starts a payment or stores a signed agreement.

## Service bands

Channels sit above; institution systems and providers sit behind adapters.

<div class="ff-topo" role="img" aria-label="OpenPlatform layers from experience to core, with adapters at the boundary">
  <p class="ff-topo__caption">OpenPlatform service bands (firefly-oss)</p>
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
        <li>core-insurance-policies</li>
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

Around those bands:

- **Channels** start a journey (apps, portals, partner surfaces).
- **Process** coordinates across modules (orchestration, workflows such as Weave).
- **Shared / identity** covers users, notifications, reference data, and related common services.

Repository naming for the service bands is summarised in the [business modules catalogue](../modules/catalog.md).

## Where the code lives

Public OpenPlatform modules, adapter libraries, `firefly-parent`, and this documentation hub live under **firefly-oss**.

<div class="ff-topo" role="img" aria-label="firefly-oss OpenPlatform modules on the Jafly train">
  <p class="ff-topo__caption">OpenPlatform runtime and ownership</p>
  <div class="ff-topo__map">
    <div class="ff-topo__card ff-topo__card--oss">
      <p class="ff-topo__kicker">GitHub org</p>
      <p class="ff-topo__label">firefly-oss</p>
      <p class="ff-topo__meta">Business modules, shared services, adapter libraries, firefly-parent, and this documentation hub.</p>
    </div>
    <div class="ff-topo__card ff-topo__card--fw">
      <p class="ff-topo__kicker">Framework train</p>
      <p class="ff-topo__label">Jafly <code>26.10.20</code> (Spring Boot <code>4.1.1</code>)</p>
      <p class="ff-topo__meta"><code>org.fireflyframework:fireflyframework-parent</code> via <code>com.firefly:firefly-parent</code>. Security SPI, ECM ports, and related adapter modules ship in the Jafly reactor.</p>
    </div>
  </div>
</div>

Commercial applications that compose these modules are published under other organisations; see the short cross-link on the [ecosystem](../ecosystem.md) page. This architecture page stays on firefly-oss.

## Business module ids

The website and this hub share the same OpenPlatform module ids:

`customers`, `onboarding`, `products`, `agreements`, `distribution`, `accounts`, `payments`, `lending`, `risk`, plus shared identity services.

See the [business modules catalogue](../modules/catalog.md) for purpose, coverage, and repository names.

## Integration grammar

A journey step may touch several layers (channel, process, modules, core, third party). Third parties and legacy cores stay behind adapters so provider details do not leak into every application.

<figure class="ff-figure">
  <img src="/diagrams/openplatform-adapters.svg?v=20261019b" alt="Adapter ports: OpenPlatform services call a payment-provider port or a payment-rail port, which reach outside systems" width="960" height="817" />
  <figcaption>Read top to bottom. Services call a port. The port is either payment providers or payment rails. Only the adapter talks to the outside system.</figcaption>
</figure>

The provider port is `PspAdapter` in `library-psps` (payments, refunds, payouts, and further operation ports). The rail port is `RailAdapter` in `library-rails` (payments, settlement, mandates, and further operation ports, including a screening port). Those names live in the libraries. The picture keeps the words a reader needs.

Worked adapter guides:

- [Adapter pattern](../integrate/adapters.md)
- [PSP library (`library-psps`)](../integrate/library-psps.md)
- [Payment rails library (`library-rails`)](../integrate/library-rails.md)

APIs and events form the backbone between modules. See the [OpenAPI index](../reference/openapi.md) and [Event contracts](../reference/events.md).

## AI stance

Where AI participates in a journey, it decides within approved limits, explained, recorded, and open to human review. Decisions with significant effects on people, or beyond delegated limits, go to people with delegated authority. Platform documentation must not describe AI as replacing staff outside those limits.

## Runtime pin (brief)

OpenPlatform modules currently consume Boot **4.1.1** via `fireflyframework-parent` **26.10.20** (Java **25**). See [Versioning and BOM](../versioning/bom.md). Framework bootstrap and SPI usage: [Jafly docs](https://fireflyframework.github.io/fireflyframework-jafly/).

## What next

1. [Start here](../start/index.md) to navigate this hub.
2. [Module catalogue](../modules/catalog.md) to pick a bounded context.
3. [OpenAPI index](../reference/openapi.md) for published contracts.
