# Ecosystem map

Firefly Software ships an open platform, industry products, and shared
frameworks. This page places **OpenPlatform** in that landscape.

## Map

| Layer | What it is | Examples |
|-------|------------|----------|
| Brand and company | Firefly Software | fireflysoftware.io, brand kit |
| Industry solutions | Packaged journeys on OpenPlatform | LendingOS and peers under `firefly-serviceOS` |
| OpenPlatform | Business modules, shared services, adapters | Customers, lending, payments, risk under `firefly-oss` |
| Frameworks | Language and runtime foundations | Jafly **26.10.19**, Weave (workflows), other Firefly frameworks |
| Institution systems | Core, ledger, channels, providers | Connected through adapters, not replaced by default |

## Organisations

| GitHub org | Role |
|------------|------|
| <a href="https://github.com/firefly-oss">firefly-oss</a> | Public OpenPlatform modules, libraries, and this docs hub |
| <a href="https://github.com/firefly-serviceOS">firefly-serviceOS</a> | Commercial OS applications and Firefly services built on OpenPlatform |
| <a href="https://github.com/fireflyframework">fireflyframework</a> | Jafly and peer framework reactors |

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

| Surface | Role |
|---------|------|
| This hub (`docs.fireflysoftware.io`) | Developer portal for OpenPlatform |
| fireflysoftware.io | Marketing and product narrative |
| Jafly docs | Framework modules and Boot train |
| firefly-weave docs | Weave workflow platform |
| Module repositories under `firefly-oss` | Service-level README and OpenAPI |

Jafly docs: <https://fireflyframework.github.io/fireflyframework-jafly/>

Per-module pages under <a href="modules/catalog.md">Business modules</a>
link purpose and key `firefly-oss` repositories. See also
<a href="reference/openapi.md">OpenAPI index</a> and
<a href="integrate/adapters.md">adapter guides</a>.
