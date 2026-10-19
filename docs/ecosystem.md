# Ecosystem map

This page places **OpenPlatform** (`firefly-oss`) next to the framework train and the adapter boundary so you know what this hub documents before you clone a repository.

<figure class="ff-figure">
  <img src="/diagrams/openplatform-ecosystem.svg?v=20261019b" alt="Map of the ten OpenPlatform module ids in firefly-oss" width="960" height="964" />
  <figcaption>Read the grid left to right, then down. Each card is one module id. Repository names are on that module's page.</figcaption>
</figure>

This hub documents those ten ids under firefly-oss. The framework train is a pin for accuracy, not a second product drawn here.

## What this hub owns

| Surface | Organisation | What you will find here |
|---------|--------------|-------------------------|
| OpenPlatform modules | [firefly-oss](https://github.com/firefly-oss) | `core-*`, `domain-*`, `exp-*`, `library-*`, this docs hub |
| Parent BOM | firefly-oss / fireflyframework | `com.firefly:firefly-parent` pins Jafly **26.10.19** / Boot **4.1.1** / Java **25** |
| Adapter libraries | firefly-oss | `library-psps`, `library-rails`, and related ports |
| Framework details | [fireflyframework](https://github.com/fireflyframework) | Jafly SPI modules — see [Jafly docs](https://fireflyframework.github.io/fireflyframework-jafly/) |

Institution systems (core banking, ledger, channels, providers) connect through adapters. OpenPlatform does not assume those systems are replaced by default.

## OpenPlatform in one sentence

Composable business modules on one open foundation, with a backbone of APIs and events, so your services and outside systems connect through adapters.

## Layers at a glance

<div class="ff-paths" markdown="0">
  <article class="ff-path">
    <p class="ff-path__kicker">Platform</p>
    <p class="ff-path__title">firefly-oss</p>
    <p class="ff-path__meta">Business modules, shared services, adapter libraries, firefly-parent, and this documentation hub.</p>
  </article>
  <article class="ff-path">
    <p class="ff-path__kicker">Runtime</p>
    <p class="ff-path__title">Jafly 26.10.19</p>
    <p class="ff-path__meta">Spring Boot 4.1.1 and Java 25 for OpenPlatform Java services. Weave for durable workflow when needed.</p>
  </article>
  <article class="ff-path">
    <p class="ff-path__kicker">Boundary</p>
    <p class="ff-path__title">Adapters</p>
    <p class="ff-path__meta">library-psps, library-rails, and institution-system ports keep provider SDKs out of domain services.</p>
  </article>
</div>

## Commercial products (cross-link only)

Industry applications under [firefly-serviceOS](https://github.com/firefly-serviceOS) may compose OpenPlatform modules into a packaged product experience. Product narrative lives on [fireflysoftware.io](https://fireflysoftware.io/). This hub does not document those product assemblies.

## Where documentation lives

| Surface | Audience | Notes |
|---------|----------|-------|
| This hub (`docs.fireflysoftware.io`) | Developers on OpenPlatform | Module pages, BOM pins, adapter guides, OpenAPI index |
| fireflysoftware.io/openplatform | Product and marketing | Narrative |
| Jafly docs | Framework consumers | Security SPI, ECM, Boot train details |
| Module repositories under `firefly-oss` | Service owners | README, OpenAPI, local run |

## What next

1. Confirm the current pin on [Versioning and BOM](versioning/bom.md) (**26.10.19** / Boot **4.1.1** / Java **25**).
2. Skim [Architecture](architecture/overview.md) so band prefixes (`exp-*`, `domain-*`, `core-*`) make sense.
3. Open [Start here](start/index.md) to navigate the module catalogue.
