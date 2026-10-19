# What is OpenPlatform

**Firefly OpenPlatform** is the open banking and insurance platform from
Firefly Software. It is a set of composable business modules on a shared
foundation of APIs, events, and adapters, so institutions can assemble
journeys without replacing every system they already run.

Attitude makes the difference.

## What it is for

OpenPlatform is for teams that need domain services for customers,
onboarding, products, agreements, distribution, accounts, payments,
lending, and risk, connected to the institution’s own systems and to
third-party providers through adapters.

Product experiences such as **LendingOS** sit on top of these modules.
This documentation hub is for people who build, integrate, and operate
on the platform, not for marketing overview alone.

## How to read this hub

| Path | Audience |
|------|----------|
| <a href="ecosystem.md">Ecosystem</a> | Orient across Firefly, OpenPlatform, frameworks, and products |
| <a href="start/prerequisites.md">Start here</a> | Prerequisites and a first service on Jafly |
| <a href="architecture/overview.md">Architecture</a> | Layers, modules, and integration grammar |
| <a href="modules/catalog.md">Business modules</a> | Per-module pages aligned with the public OpenPlatform module ids |
| <a href="insurance/index.md">Insurance (in development)</a> | Policy, underwriting, claims, and insurance financial flows |
| <a href="reference/index.md">Reference</a> | OpenAPI and event-contract indexes (no invented endpoints) |
| <a href="integrate/adapters.md">Integrate</a> | Adapter pattern and named library guides |
| <a href="versioning/bom.md">Versioning and BOM</a> | Current pins (**26.10.19** / Boot **4.1.1**) |
| <a href="contribute/index.md">Contribute</a> | How to improve these docs and run brand check |

## Platform status

As of 2026-10-18/19:

- OpenPlatform Java services inherit Spring Boot **4.1.1** through
  `com.firefly:firefly-parent` and
  `org.fireflyframework:fireflyframework-parent` version **26.10.19**.
- That train is published on **Maven Central** (and GitHub Packages).
  Prefer Central; optional `-Pjafly-packages` when Central is unreachable.
- Framework docs for Jafly:
  <https://fireflyframework.github.io/fireflyframework-jafly/>

See <a href="versioning/bom.md">Versioning and BOM</a> for the full picture.

## Related surfaces

- Product site: <https://fireflysoftware.io/openplatform/>
- Brand kit: <https://github.com/firefly-oss/brand-kit>
- Framework reactor: <https://github.com/fireflyframework/fireflyframework-jafly>
- Jafly docs: <https://fireflyframework.github.io/fireflyframework-jafly/>
