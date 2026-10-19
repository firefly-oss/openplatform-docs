---
title: Home
hide:
  - toc
---

# OpenPlatform

<div class="ff-hero" markdown="0">
  <div class="ff-hero__copy">
    <p class="ff-hero__kicker">Firefly Software · Developer hub</p>
    <p class="ff-hero__brand">OpenPlatform</p>
    <p class="ff-hero__lede">The firefly-oss module platform: core, domain, experience, and libraries.</p>
    <p class="ff-hero__body">This hub explains what OpenPlatform is, how modules compose, the full catalogue of repositories, OpenAPI contracts, and adapters in firefly-oss. Framework bootstrap lives in the Jafly docs, not here.</p>
    <p class="ff-hero__slogan">Attitude makes the difference.</p>
    <ul class="ff-hero__actions">
      <li><a class="ff-hero__primary" href="start/">Start here</a></li>
      <li><a href="architecture/overview/">Architecture</a></li>
      <li><a href="modules/catalog/">Modules</a></li>
      <li><a href="reference/openapi/">OpenAPI</a></li>
    </ul>
  </div>
  <div class="ff-hero__visual">
    <img src="/diagrams/openplatform-layers.svg" alt="OpenPlatform layers: experience, domain, core, and adapters in firefly-oss" width="960" height="560" />
  </div>
</div>

<ul class="ff-pins" markdown="0">
  <li class="ff-pin">
    <span class="ff-pin__label">Framework train</span>
    <span class="ff-pin__value">26.10.19</span>
  </li>
  <li class="ff-pin">
    <span class="ff-pin__label">Spring Boot</span>
    <span class="ff-pin__value">4.1.1</span>
  </li>
  <li class="ff-pin">
    <span class="ff-pin__label">Java</span>
    <span class="ff-pin__value">25</span>
  </li>
  <li class="ff-pin">
    <span class="ff-pin__label">Org</span>
    <span class="ff-pin__value">firefly-oss</span>
  </li>
</ul>

## What OpenPlatform is

OpenPlatform is the catalogue of business modules under **firefly-oss**: customers, onboarding, products, agreements, distribution, accounts, payments, lending, risk, and shared identity, plus adapter libraries such as `library-psps` and `library-rails`.

Each module page lists repositories that exist today, OpenAPI links, honest gaps, and related modules. Begin at the [business modules catalogue](modules/catalog.md).

Marketing narrative: [fireflysoftware.io/openplatform](https://fireflysoftware.io/openplatform/). Framework SPI and service bootstrap: [Jafly docs](https://fireflyframework.github.io/fireflyframework-jafly/).

## The narrative arc

<ol class="ff-steps" markdown="0">
  <li class="ff-step">
    <p class="ff-step__title"><a href="ecosystem/">What it is</a></p>
    <p class="ff-step__meta">OpenPlatform equals firefly-oss modules and libraries.</p>
  </li>
  <li class="ff-step">
    <p class="ff-step__title"><a href="architecture/overview/">How modules compose</a></p>
    <p class="ff-step__meta">Experience, domain, and core bands, with adapters at the boundary.</p>
  </li>
  <li class="ff-step">
    <p class="ff-step__title"><a href="modules/catalog/">Full catalogue</a></p>
    <p class="ff-step__meta">Every module id mapped to real repositories and OpenAPI.</p>
  </li>
  <li class="ff-step">
    <p class="ff-step__title"><a href="integrate/adapters/">Adapters</a> and <a href="versioning/bom/">version pin</a></p>
    <p class="ff-step__meta">firefly-oss libraries, plus a brief BOM note and outbound Jafly link.</p>
  </li>
</ol>

## Choose a path by role

<div class="ff-paths" markdown="0">
  <article class="ff-path">
    <p class="ff-path__kicker">New reader</p>
    <p class="ff-path__title"><a href="start/">Start here</a></p>
    <p class="ff-path__meta">How to navigate this hub and pick a module page.</p>
  </article>
  <article class="ff-path">
    <p class="ff-path__kicker">Platform engineer</p>
    <p class="ff-path__title"><a href="architecture/overview/">Architecture</a></p>
    <p class="ff-path__meta">exp-*, domain-*, and core-* bands and the adapter boundary.</p>
  </article>
  <article class="ff-path">
    <p class="ff-path__kicker">Domain developer</p>
    <p class="ff-path__title"><a href="modules/catalog/">Business modules</a></p>
    <p class="ff-path__meta">Purpose, repository maps, and OpenAPI links for each module id.</p>
  </article>
  <article class="ff-path">
    <p class="ff-path__kicker">Integration engineer</p>
    <p class="ff-path__title"><a href="integrate/adapters/">Adapters and libraries</a></p>
    <p class="ff-path__meta">Port pattern, library-psps, and library-rails in firefly-oss.</p>
  </article>
  <article class="ff-path">
    <p class="ff-path__kicker">API consumer</p>
    <p class="ff-path__title"><a href="reference/openapi/">OpenAPI index</a></p>
    <p class="ff-path__meta">Known specs per module repository. No invented endpoints.</p>
  </article>
  <article class="ff-path">
    <p class="ff-path__kicker">Release owner</p>
    <p class="ff-path__title"><a href="versioning/bom/">Versioning and BOM</a></p>
    <p class="ff-path__meta">Current train pin 26.10.19 / Boot 4.1.1; framework how-to stays in Jafly docs.</p>
  </article>
</div>

## How modules compose

Channels call experience services. Domain services coordinate commands. Core services persist state. Providers and institution systems sit behind adapters.

<img src="/diagrams/openplatform-layers.svg" alt="OpenPlatform layers: experience, domain, core, and adapters" width="960" height="560" />

Current consumption pin (for accuracy only): Spring Boot **4.1.1** via `com.firefly:firefly-parent` and framework parent **26.10.19**. See [Versioning and BOM](versioning/bom.md). To build on that train, use the [Jafly docs](https://fireflyframework.github.io/fireflyframework-jafly/).

## Related surfaces

- This hub: <https://docs.fireflysoftware.io/>
- Product site: <https://fireflysoftware.io/openplatform/>
- GitHub org: <https://github.com/firefly-oss>
- Jafly docs (framework): <https://fireflyframework.github.io/fireflyframework-jafly/>
- Improve these pages: [Contribute](contribute/index.md)
