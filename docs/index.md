# OpenPlatform

<div class="ff-hero" markdown="0">
  <p class="ff-hero__kicker">Firefly Software · Developer hub</p>
  <p class="ff-hero__brand">OpenPlatform</p>
  <p class="ff-hero__lede">Composable banking and insurance modules on one open foundation.</p>
  <p class="ff-hero__body">APIs, events, and adapters so institutions assemble journeys without replacing every system they already run. This hub is for people who build, integrate, and operate on the platform.</p>
  <p class="ff-hero__slogan">Attitude makes the difference.</p>
  <ul class="ff-hero__actions">
    <li><a class="ff-hero__primary" href="start/prerequisites/">Start here</a></li>
    <li><a href="architecture/overview/">Architecture</a></li>
    <li><a href="modules/catalog/">Business modules</a></li>
    <li><a href="versioning/bom/">BOM 26.10.19</a></li>
  </ul>
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
    <span class="ff-pin__label">Publish status</span>
    <span class="ff-pin__value">Central live</span>
  </li>
</ul>

<img src="diagrams/openplatform-ecosystem.svg" alt="OpenPlatform among Firefly products and frameworks" width="960" />

OpenPlatform modules live under **firefly-oss**. Industry products such as
**LendingOS** sit on top under **firefly-serviceOS**. Both trains inherit
Jafly **26.10.19** (Spring Boot **4.1.1**, Java **25**) from Maven Central.

## Choose a path

<div class="ff-paths" markdown="0">
  <article class="ff-path">
    <p class="ff-path__kicker">New service</p>
    <p class="ff-path__title"><a href="start/prerequisites/">Start here</a></p>
    <p class="ff-path__meta">JDK 25, resolve the parent chain, then mirror a neighbour repository for your first Jafly service.</p>
  </article>
  <article class="ff-path">
    <p class="ff-path__kicker">Shape of the platform</p>
    <p class="ff-path__title"><a href="architecture/overview/">Architecture</a></p>
    <p class="ff-path__meta">Experience, domain, and core bands; adapters at the boundary; how orgs and products relate.</p>
  </article>
  <article class="ff-path">
    <p class="ff-path__kicker">Catalogue</p>
    <p class="ff-path__title"><a href="modules/catalog/">Business modules</a></p>
    <p class="ff-path__meta">Customers, onboarding, products, agreements, distribution, accounts, payments, lending, and risk.</p>
  </article>
  <article class="ff-path">
    <p class="ff-path__kicker">Outside Firefly</p>
    <p class="ff-path__title"><a href="integrate/adapters/">Integrate</a></p>
    <p class="ff-path__meta">Adapter pattern plus guides for payment rails and PSP libraries.</p>
  </article>
  <article class="ff-path">
    <p class="ff-path__kicker">Contracts</p>
    <p class="ff-path__title"><a href="reference/">Reference</a></p>
    <p class="ff-path__meta">OpenAPI and event-contract indexes drawn from repositories — no invented endpoints.</p>
  </article>
  <article class="ff-path">
    <p class="ff-path__kicker">Pins</p>
    <p class="ff-path__title"><a href="versioning/bom/">Versioning and BOM</a></p>
    <p class="ff-path__meta">Authoritative 26.10.19 / Boot 4.1.1 pins, Central preference, and mike aliases.</p>
  </article>
</div>

## Platform status

As of 2026-10-18/19 the OpenPlatform Java train inherits Spring Boot
**4.1.1** through `com.firefly:firefly-parent` and
`org.fireflyframework:fireflyframework-parent` version **26.10.19**. That
release is on **Maven Central** (and GitHub Packages). Prefer Central;
use `-Pjafly-packages` only when Central is unreachable.

Framework docs for Jafly:
<https://fireflyframework.github.io/fireflyframework-jafly/>

See <a href="versioning/bom.md">Versioning and BOM</a> for the full picture,
and <a href="ecosystem.md">Ecosystem</a> for how products and orgs relate.

## Related surfaces

- This hub: <https://docs.fireflysoftware.io/>
- Product site: <https://fireflysoftware.io/openplatform/>
- Brand kit: <https://github.com/firefly-oss/brand-kit>
- Framework reactor: <https://github.com/fireflyframework/fireflyframework-jafly>
- Jafly docs: <https://fireflyframework.github.io/fireflyframework-jafly/>
- Improve these pages: <a href="contribute/index.md">Contribute</a>
