# Ecosystem map

Firefly Software ships an open platform, industry products, and shared frameworks. This page places **OpenPlatform** in that landscape so you know which GitHub organisation owns what before you clone a repository.

<div class="ff-iso" markdown="0">
  <img class="ff-iso__light" src="/assets/isometrics/assembly-light.webp" alt="Industry products assembled on OpenPlatform modules" width="784" height="441" />
  <img class="ff-iso__dark" src="/assets/isometrics/assembly-dark.webp" alt="Industry products assembled on OpenPlatform modules" width="784" height="441" />
  <p class="ff-iso__caption">Products on modules on frameworks (brand kit isometric).</p>
</div>

<img src="/diagrams/openplatform-ecosystem.svg" alt="OpenPlatform among Firefly products and frameworks" width="960" />

## Layers at a glance

<div class="ff-paths" markdown="0">
  <article class="ff-path">
    <p class="ff-path__kicker">Brand and company</p>
    <p class="ff-path__title">Firefly Software</p>
    <p class="ff-path__meta">fireflysoftware.io and the brand kit set the visual and content rules for every public surface.</p>
  </article>
  <article class="ff-path">
    <p class="ff-path__kicker">Industry solutions</p>
    <p class="ff-path__title">firefly-serviceOS</p>
    <p class="ff-path__meta">Packaged journeys on OpenPlatform, such as LendingOS, for banking and insurance operations.</p>
  </article>
  <article class="ff-path">
    <p class="ff-path__kicker">OpenPlatform</p>
    <p class="ff-path__title">firefly-oss</p>
    <p class="ff-path__meta">Business modules, shared services, and adapter libraries: customers, lending, payments, risk, and more.</p>
  </article>
  <article class="ff-path">
    <p class="ff-path__kicker">Frameworks</p>
    <p class="ff-path__title">Jafly and Weave</p>
    <p class="ff-path__meta">Jafly 26.10.19 (Boot 4.1.1) for Java services; Weave for durable workflow coordination.</p>
  </article>
</div>

Institution systems (core banking, ledger, channels, providers) connect through adapters. OpenPlatform does not assume those systems are replaced by default.

## Organisations

| Organisation | What it holds | Start here |
|--------------|---------------|------------|
| [firefly-oss](https://github.com/firefly-oss) | Public OpenPlatform modules, libraries, this docs hub | [Module catalogue](modules/catalog.md) |
| [firefly-serviceOS](https://github.com/firefly-serviceOS) | Commercial OS applications built on OpenPlatform | Product pages on fireflysoftware.io |
| [fireflyframework](https://github.com/fireflyframework) | Jafly and peer framework reactors | [Jafly docs](https://fireflyframework.github.io/fireflyframework-jafly/) |

## OpenPlatform in one sentence

Composable business modules on one open foundation, with a backbone of APIs and events, so your services, your systems, and other providers connect through adapters.

## How products relate

- **OpenPlatform** (`firefly-oss`) is the platform catalogue of modules and shared services.
- **LendingOS** and peer industry solutions (`firefly-serviceOS`) compose those modules into a product experience for a sector journey.
- Frameworks such as **Jafly** (**26.10.19** / Boot **4.1.1**) supply the Java service stack OpenPlatform modules build on.
- **Weave** coordinates long-running workflows across services when a journey needs durable process state.

Topology diagrams and band naming live on the [Architecture overview](architecture/overview.md).

## Where documentation lives today

| Surface | Audience | Notes |
|---------|----------|-------|
| This hub (`docs.fireflysoftware.io`) | Developers on OpenPlatform | Module pages, BOM pins, adapter guides |
| fireflysoftware.io | Product and marketing | Narrative and module story |
| Jafly docs | Framework consumers | Security SPI, ECM, Boot train details |
| firefly-weave docs | Workflow platform | Durable process orchestration |
| Module repositories under `firefly-oss` | Service owners | README, OpenAPI, local run |

Jafly docs: <https://fireflyframework.github.io/fireflyframework-jafly/>

Per-module pages under [Business modules](modules/catalog.md) link purpose and key `firefly-oss` repositories. See also [OpenAPI index](reference/openapi.md) and [adapter guides](integrate/adapters.md).

## What next

1. Confirm the current pin on [Versioning and BOM](versioning/bom.md) (**26.10.19** / Boot **4.1.1** / Java **25**).
2. Skim [Architecture](architecture/overview.md) so band prefixes (`exp-*`, `domain-*`, `core-*`) make sense.
3. Open [Start here](start/prerequisites.md) when you are ready to create or extend a service.
