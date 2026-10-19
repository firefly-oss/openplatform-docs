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
    <p class="ff-hero__lede">Business modules in firefly-oss on the Jafly train.</p>
    <p class="ff-hero__body">This hub documents core-*, domain-*, and exp-* repositories, firefly-parent consumption, the module catalogue, OpenAPI indexes, and the adapter libraries. Start with the pin strip, then pick a path that matches your job.</p>
    <p class="ff-hero__slogan">Attitude makes the difference.</p>
    <ul class="ff-hero__actions">
      <li><a class="ff-hero__primary" href="start/prerequisites/">Start here</a></li>
      <li><a href="architecture/overview/">Architecture</a></li>
      <li><a href="modules/catalog/">Modules</a></li>
      <li><a href="versioning/bom/">BOM 26.10.19</a></li>
    </ul>
  </div>
  <div class="ff-hero__visual">
    <img src="/diagrams/openplatform-layers.svg" alt="OpenPlatform layers: experience, domain, core, and adapters in firefly-oss" width="960" height="560" />
  </div>
</div>

<ul class="ff-pins" markdown="0">
  <li class="ff-pin">
    <span class="ff-pin__label">Jafly / Central</span>
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
    <span class="ff-pin__label">Resolve from</span>
    <span class="ff-pin__value">Maven Central</span>
  </li>
</ul>

## What this hub is

OpenPlatform is the platform catalogue under **firefly-oss**: customers, onboarding, products, agreements, distribution, accounts, payments, lending, risk, and shared identity. Services inherit Jafly **26.10.19** (Spring Boot **4.1.1**, Java **25**) through `com.firefly:firefly-parent`.

Each module page lists repositories that exist today, OpenAPI links, honest gaps, and a start path. Begin at the [business modules catalogue](modules/catalog.md).

Marketing narrative stays on [fireflysoftware.io/openplatform](https://fireflysoftware.io/openplatform/). Framework SPI details stay in the [Jafly docs](https://fireflyframework.github.io/fireflyframework-jafly/). Commercial product assemblies under firefly-serviceOS are out of scope here except as a one-line cross-link on the [ecosystem](ecosystem.md) page.

## Choose a path by role

<div class="ff-paths" markdown="0">
  <article class="ff-path">
    <p class="ff-path__kicker">New to the stack</p>
    <p class="ff-path__title"><a href="start/prerequisites/">Start here</a></p>
    <p class="ff-path__meta">Confirm JDK 25, resolve firefly-parent from Central, then mirror a core, domain, or exp neighbour.</p>
  </article>
  <article class="ff-path">
    <p class="ff-path__kicker">Platform engineer</p>
    <p class="ff-path__title"><a href="architecture/overview/">Architecture</a></p>
    <p class="ff-path__meta">exp-*, domain-*, and core-* bands and the adapter boundary in firefly-oss.</p>
  </article>
  <article class="ff-path">
    <p class="ff-path__kicker">Domain developer</p>
    <p class="ff-path__title"><a href="modules/catalog/">Business modules</a></p>
    <p class="ff-path__meta">Purpose, repository maps, and OpenAPI links for each module id.</p>
  </article>
  <article class="ff-path">
    <p class="ff-path__kicker">Integration engineer</p>
    <p class="ff-path__title"><a href="integrate/adapters/">Adapters and libraries</a></p>
    <p class="ff-path__meta">Port and adapter pattern, library-psps, and library-rails.</p>
  </article>
  <article class="ff-path">
    <p class="ff-path__kicker">API consumer</p>
    <p class="ff-path__title"><a href="reference/">Reference</a></p>
    <p class="ff-path__meta">OpenAPI and event-contract indexes drawn from repositories.</p>
  </article>
  <article class="ff-path">
    <p class="ff-path__kicker">Release owner</p>
    <p class="ff-path__title"><a href="versioning/bom/">Versioning and BOM</a></p>
    <p class="ff-path__meta">Authoritative 26.10.19 / Boot 4.1.1 pins and mike aliases.</p>
  </article>
</div>

## How an OpenPlatform service is layered

Channels call experience services. Domain services coordinate commands. Core services persist state. Providers and institution systems sit behind adapters (`library-psps`, `library-rails`, and related ports).

<img src="/diagrams/openplatform-layers.svg" alt="OpenPlatform layers: experience, domain, core, and adapters" width="960" height="560" />

As of 2026-10-18/19 the train inherits Spring Boot **4.1.1** through `com.firefly:firefly-parent` and `org.fireflyframework:fireflyframework-parent` version **26.10.19**. Prefer Maven Central; use `-Pjafly-packages` only when Central is unreachable.

## Suggested reading order

<ol class="ff-steps" markdown="0">
  <li class="ff-step">
    <p class="ff-step__title"><a href="ecosystem/">Ecosystem map</a></p>
    <p class="ff-step__meta">Place firefly-oss next to Jafly and the adapter boundary before you open a repository.</p>
  </li>
  <li class="ff-step">
    <p class="ff-step__title"><a href="start/prerequisites/">Prerequisites</a> then <a href="start/first-service/">First service</a></p>
    <p class="ff-step__meta">Tooling, parent inheritance, and a checklist for mirroring a neighbour.</p>
  </li>
  <li class="ff-step">
    <p class="ff-step__title"><a href="architecture/overview/">Architecture overview</a></p>
    <p class="ff-step__meta">Bands, topology, and the integration grammar reused on every module.</p>
  </li>
  <li class="ff-step">
    <p class="ff-step__title"><a href="modules/catalog/">Module catalogue</a></p>
    <p class="ff-step__meta">Pick the bounded context you own, then open its page for repositories and OpenAPI.</p>
  </li>
</ol>

## Related surfaces

- This hub: <https://docs.fireflysoftware.io/>
- Product site: <https://fireflysoftware.io/openplatform/>
- GitHub org: <https://github.com/firefly-oss>
- Jafly docs: <https://fireflyframework.github.io/fireflyframework-jafly/>
- Improve these pages: [Contribute](contribute/index.md)
