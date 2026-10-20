---
title: Home
hide:
  - toc
  - navigation
---

# Firefly OpenPlatform Documentation Hub

<div class="ff-hero" markdown="0">
  <div class="ff-hero__copy">
    <p class="ff-hero__kicker">Developer hub · firefly-oss</p>
    <p class="ff-hero__brand">Firefly OpenPlatform Documentation Hub</p>
    <p class="ff-hero__lede">Business modules, shared services, and adapter libraries, documented from the repositories that exist today.</p>
    <p class="ff-hero__body">Purpose, layer maps, OpenAPI links, and honest gaps for every module id. This hub does not teach framework bootstrap.</p>
    <p class="ff-hero__slogan">Attitude makes the difference.</p>
    <ul class="ff-hero__actions">
      <li><a class="ff-hero__primary" href="/modules/catalog/">Browse modules</a></li>
      <li><a href="/start/">Start here</a></li>
      <li><a href="/architecture/overview/">Architecture</a></li>
      <li><a href="/reference/openapi/">OpenAPI</a></li>
    </ul>
  </div>
  <div class="ff-hero__visual">
    <figure class="ff-figure">
      <img src="/diagrams/openplatform-layers.svg?v=20261019b" alt="OpenPlatform layers, read top to bottom: Experience, then Domain, then Core" width="960" height="653" />
      <figcaption>Read top to bottom. A channel call starts in experience, passes through domain, and lands in core.</figcaption>
    </figure>
  </div>
</div>

<ul class="ff-pins" markdown="0">
  <li class="ff-pin">
    <span class="ff-pin__label">Train pin</span>
    <span class="ff-pin__value">26.10.20</span>
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

## What this hub covers

OpenPlatform is the catalogue of modules under **firefly-oss**: customers, onboarding, products, agreements, distribution, accounts, payments, lending, risk, and shared identity, plus libraries such as `library-psps` and `library-rails`.

Each module page maps real repositories (`core-*`, `domain-*`, `exp-*`), links OpenAPI where published, and states gaps without inventing services. Product narrative lives on [fireflysoftware.io/openplatform](https://fireflysoftware.io/openplatform/).

## Find your path

<div class="ff-paths" markdown="0">
  <article class="ff-path">
    <p class="ff-path__kicker">New reader</p>
    <p class="ff-path__title"><a href="/start/">Start here</a></p>
    <p class="ff-path__meta">How OpenPlatform equals firefly-oss, and how to pick a module page.</p>
  </article>
  <article class="ff-path">
    <p class="ff-path__kicker">Platform</p>
    <p class="ff-path__title"><a href="/architecture/overview/">Architecture</a></p>
    <p class="ff-path__meta">Experience, domain, and core bands, with adapters at the boundary.</p>
  </article>
  <article class="ff-path">
    <p class="ff-path__kicker">Domain</p>
    <p class="ff-path__title"><a href="/modules/catalog/">Module catalogue</a></p>
    <p class="ff-path__meta">Every module id with repository maps and OpenAPI links.</p>
  </article>
  <article class="ff-path">
    <p class="ff-path__kicker">Integration</p>
    <p class="ff-path__title"><a href="/integrate/adapters/">Adapters and libraries</a></p>
    <p class="ff-path__meta">Port pattern, library-psps, and library-rails.</p>
  </article>
  <article class="ff-path">
    <p class="ff-path__kicker">API consumer</p>
    <p class="ff-path__title"><a href="/reference/openapi/">OpenAPI index</a></p>
    <p class="ff-path__meta">Known specs per module repository. No invented endpoints.</p>
  </article>
  <article class="ff-path">
    <p class="ff-path__kicker">Release</p>
    <p class="ff-path__title"><a href="/versioning/bom/">Versioning and BOM</a></p>
    <p class="ff-path__meta">Current train pin 26.10.20 / Boot 4.1.1 for accuracy.</p>
  </article>
</div>

## How modules compose

Channels call experience services. Domain services coordinate commands. Core services persist state. Providers and institution systems sit behind adapters, drawn on the [adapter pattern](integrate/adapters.md) page.

<figure class="ff-figure">
  <img src="/diagrams/openplatform-ecosystem.svg?v=20261019b" alt="Map of the ten OpenPlatform module ids in firefly-oss" width="960" height="964" />
  <figcaption>Ten shared module ids. Open a card's page for the repositories behind it. Insurance cores are published separately under the insurance section; domain and experience services for those areas are not.</figcaption>
</figure>

Pin for consumption accuracy: Spring Boot **4.1.1** via `io.fireflysoftware:firefly-parent` and framework parent **26.10.20**. See [Versioning and BOM](versioning/bom.md). Framework tooling: [Jafly docs](https://fireflyframework.github.io/fireflyframework-jafly/).

## Elsewhere

- Product: <https://fireflysoftware.io/openplatform/>
- GitHub: <https://github.com/firefly-oss>
- Improve these pages: [Contribute](contribute/index.md)
