# Versioning and BOM

OpenPlatform modules in firefly-oss currently consume the published framework train below. This page records the pin for accuracy. It is not a framework getting-started guide.

## Current OpenPlatform pin

| Coordinate | Version | Notes |
|------------|---------|-------|
| `org.fireflyframework:fireflyframework-parent` | **26.10.20** | Parent of `io.fireflysoftware:firefly-parent` |
| `org.fireflyframework:fireflyframework-bom` | **26.10.20** | Imported by `firefly-parent` |
| `fireflyframework.bom.version` (in `firefly-parent`) | **26.10.20** | Pin inherited by OpenPlatform modules |
| Spring Boot (via that parent) | **4.1.1** | Runtime line for OpenPlatform Java services |
| Java (via that parent) | **25** | Language level for the train |
| `io.fireflysoftware:*` (parent, BOM, and every module) | **26.10.3** | OpenPlatform release. Scheme is `YY.MM.PATCH`: year, month, and the patch within that month. |

Jafly is published on Maven Central. OpenPlatform modules are published to GitHub Packages by the release workflow when the tag `vYY.MM.PATCH` is pushed. Prefer Central for the framework pin **26.10.20** and later.

Source: `firefly-oss/firefly-parent` as of 2026-10-18/19.

## Inheritance (sketch)

```text
org.fireflyframework:fireflyframework-parent:26.10.20
        ^
io.fireflysoftware:firefly-parent
        ^
OpenPlatform modules (io.fireflysoftware:*)
```

## Framework how-to

Service bootstrap, toolchain, and SPI module usage belong in the [Jafly docs](https://fireflyframework.github.io/fireflyframework-jafly/). This hub does not duplicate them.

## Docs versions (mike)

This hub can publish versioned aliases with mike (for example **26.10.20** / `latest`). See [Publish with mike](mike.md). Live Pages today may still be a single snapshot until versioned deploy is enabled.

## Related

- [Ecosystem](../ecosystem.md)
- [Module catalogue](../modules/catalog.md)
- [Jafly docs](https://fireflyframework.github.io/fireflyframework-jafly/)
