# Ecosystem map

Firefly Software ships an open platform, industry products, and shared
frameworks. This page places **OpenPlatform** in that landscape.

<img src="diagrams/openplatform-ecosystem.svg" alt="OpenPlatform among Firefly products and frameworks" width="960" />

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
    <p class="ff-path__meta">Packaged journeys on OpenPlatform — LendingOS and peers for banking and insurance operations.</p>
  </article>
  <article class="ff-path">
    <p class="ff-path__kicker">OpenPlatform</p>
    <p class="ff-path__title">firefly-oss</p>
    <p class="ff-path__meta">Business modules, shared services, and adapter libraries: customers, lending, payments, risk, and more.</p>
  </article>
  <article class="ff-path">
    <p class="ff-path__kicker">Frameworks</p>
    <p class="ff-path__title">Jafly and Weave</p>
    <p class="ff-path__meta">Jafly <strong>26.10.19</strong> (Boot <strong>4.1.1</strong>) for Java services; Weave for durable workflow coordination.</p>
  </article>
</div>

Institution systems (core, ledger, channels, providers) connect through
adapters. OpenPlatform does not assume those systems are replaced by
default.

## Organisations

- <a href="https://github.com/firefly-oss">firefly-oss</a> — public
  OpenPlatform modules, libraries, and this docs hub
- <a href="https://github.com/firefly-serviceOS">firefly-serviceOS</a> —
  commercial OS applications and Firefly services built on OpenPlatform
- <a href="https://github.com/fireflyframework">fireflyframework</a> —
  Jafly and peer framework reactors

## OpenPlatform in one sentence

Composable business modules on one open foundation, with a backbone of
APIs and events, so your services, your systems, and other providers
connect through adapters.

## How products relate

- **OpenPlatform** (`firefly-oss`) is the platform catalogue of modules
  and shared services.
- **LendingOS** and peer industry solutions (`firefly-serviceOS`) compose
  those modules into a product experience for a sector journey.
- Frameworks such as **Jafly** (**26.10.19** / Boot **4.1.1**) supply the
  Java service stack OpenPlatform modules build on.

Topology diagrams:
<a href="architecture/overview.md">Architecture overview</a>.

## Where documentation lives today

- This hub (`docs.fireflysoftware.io`) — developer portal for OpenPlatform
- fireflysoftware.io — marketing and product narrative
- Jafly docs — framework modules and Boot train
- firefly-weave docs — Weave workflow platform
- Module repositories under `firefly-oss` — service-level README and OpenAPI

Jafly docs: <https://fireflyframework.github.io/fireflyframework-jafly/>

Per-module pages under <a href="modules/catalog.md">Business modules</a>
link purpose and key `firefly-oss` repositories. See also
<a href="reference/openapi.md">OpenAPI index</a> and
<a href="integrate/adapters.md">adapter guides</a>.
