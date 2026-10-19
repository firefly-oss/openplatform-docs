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
    <p class="ff-hero__lede">Composable banking and insurance modules on one open foundation.</p>
    <p class="ff-hero__body">This hub teaches you how the platform is shaped, how services inherit the current Java train, and how to extend a module without dragging provider details into every application. Start with the pin strip, pick a path that matches your job, then follow the worked pages.</p>
    <p class="ff-hero__slogan">Attitude makes the difference.</p>
    <ul class="ff-hero__actions">
      <li><a class="ff-hero__primary" href="start/prerequisites/">Start here</a></li>
      <li><a href="architecture/overview/">Architecture</a></li>
      <li><a href="modules/catalog/">Modules</a></li>
      <li><a href="versioning/bom/">BOM 26.10.19</a></li>
    </ul>
  </div>
  <div class="ff-hero__visual">
    <div class="ff-iso">
      <img class="ff-iso__light" src="/assets/isometrics/assembly-light.svg" alt="OpenPlatform modules assembled into an industry product" width="1600" height="900" />
      <img class="ff-iso__dark" src="/assets/isometrics/assembly-dark.svg" alt="OpenPlatform modules assembled into an industry product" width="1600" height="900" />
    </div>
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

## What you will learn here

OpenPlatform is the catalogue of business modules under **firefly-oss**: customers, onboarding, products, agreements, distribution, accounts, payments, lending, risk, and shared identity. Industry products such as **LendingOS** live under **firefly-serviceOS** and compose those modules. Both trains inherit Jafly **26.10.19** (Spring Boot **4.1.1**, Java **25**) from Maven Central.

Each module page lists the repositories that exist today, OpenAPI links, honest gaps, and a start path. Begin at the [business modules catalogue](modules/catalog.md).

This site is for people who build, integrate, and operate on that stack. Marketing narrative stays on [fireflysoftware.io/openplatform](https://fireflysoftware.io/openplatform/). Framework behaviour for security, ECM, notifications, and related SPI modules stays in the [Jafly docs](https://fireflyframework.github.io/fireflyframework-jafly/).

## Choose a path by role

<div class="ff-paths" markdown="0">
  <article class="ff-path">
    <p class="ff-path__kicker">New to the stack</p>
    <p class="ff-path__title"><a href="start/prerequisites/">Start here</a></p>
    <p class="ff-path__meta">Confirm JDK 25, resolve the parent chain from Central, then mirror a neighbour repository for your first Jafly service.</p>
  </article>
  <article class="ff-path">
    <p class="ff-path__kicker">Platform engineer</p>
    <p class="ff-path__title"><a href="architecture/overview/">Architecture</a></p>
    <p class="ff-path__meta">Experience, domain, and core bands; adapters at the boundary; how firefly-oss and firefly-serviceOS relate.</p>
  </article>
  <article class="ff-path">
    <p class="ff-path__kicker">Domain developer</p>
    <p class="ff-path__title"><a href="modules/catalog/">Business modules</a></p>
    <p class="ff-path__meta">Purpose, coverage, and key repositories for each module id, with honest maturity notes from the repos.</p>
  </article>
  <article class="ff-path">
    <p class="ff-path__kicker">Integration engineer</p>
    <p class="ff-path__title"><a href="integrate/adapters/">Adapters and libraries</a></p>
    <p class="ff-path__meta">Port and adapter pattern, plus worked guides for library-psps and library-rails.</p>
  </article>
  <article class="ff-path">
    <p class="ff-path__kicker">API consumer</p>
    <p class="ff-path__title"><a href="reference/">Reference</a></p>
    <p class="ff-path__meta">OpenAPI and event-contract indexes drawn from repositories. No invented endpoints.</p>
  </article>
  <article class="ff-path">
    <p class="ff-path__kicker">Release owner</p>
    <p class="ff-path__title"><a href="versioning/bom/">Versioning and BOM</a></p>
    <p class="ff-path__meta">Authoritative 26.10.19 / Boot 4.1.1 pins, Central preference, and mike aliases for this hub.</p>
  </article>
</div>

## How the pieces fit

<div class="ff-section ff-section--split" markdown="0">
  <div class="ff-section__copy">
    <p>Industry solutions sit on OpenPlatform modules, which run on the Jafly train. Institution systems and providers connect through adapters so business services stay portable.</p>
  </div>
  <div class="ff-section__visual">
    <div class="ff-iso">
      <img class="ff-iso__light" src="/assets/isometrics/layers-light.svg" alt="Layered OpenPlatform stack from channels to adapters" width="1600" height="900" />
      <img class="ff-iso__dark" src="/assets/isometrics/layers-dark.svg" alt="Layered OpenPlatform stack from channels to adapters" width="1600" height="900" />
      <p class="ff-iso__caption">Service bands and adapter boundary (brand kit isometric).</p>
    </div>
  </div>
</div>

<img src="/diagrams/openplatform-ecosystem.svg" alt="OpenPlatform among Firefly products and frameworks" width="960" />

As of 2026-10-18/19 the OpenPlatform Java train inherits Spring Boot **4.1.1** through `com.firefly:firefly-parent` and `org.fireflyframework:fireflyframework-parent` version **26.10.19**. That release is on Maven Central (and GitHub Packages). Prefer Central; use `-Pjafly-packages` only when Central is unreachable.

## Suggested reading order

<ol class="ff-steps" markdown="0">
  <li class="ff-step">
    <p class="ff-step__title"><a href="ecosystem/">Ecosystem map</a></p>
    <p class="ff-step__meta">Place OpenPlatform next to firefly-serviceOS, Jafly, and Weave before you open a repository.</p>
  </li>
  <li class="ff-step">
    <p class="ff-step__title"><a href="start/prerequisites/">Prerequisites</a> then <a href="start/first-service/">First service</a></p>
    <p class="ff-step__meta">Tooling, parent inheritance, and a checklist for mirroring a core, domain, or experience neighbour.</p>
  </li>
  <li class="ff-step">
    <p class="ff-step__title"><a href="architecture/overview/">Architecture overview</a></p>
    <p class="ff-step__meta">Bands, topology, and the integration grammar you will reuse on every module.</p>
  </li>
  <li class="ff-step">
    <p class="ff-step__title"><a href="modules/catalog/">Module catalogue</a></p>
    <p class="ff-step__meta">Pick the bounded context you own, then open its page for repositories and OpenAPI links.</p>
  </li>
</ol>

## Related surfaces

- This hub: <https://docs.fireflysoftware.io/>
- Product site: <https://fireflysoftware.io/openplatform/>
- Brand kit: <https://github.com/firefly-oss/brand-kit>
- Framework reactor: <https://github.com/fireflyframework/fireflyframework-jafly>
- Jafly docs: <https://fireflyframework.github.io/fireflyframework-jafly/>
- Improve these pages: [Contribute](contribute/index.md)
