# Versioning and BOM

OpenPlatform modules in firefly-oss currently consume the published framework train below. This page records the pin for accuracy. It is not a framework getting-started guide.

## Current OpenPlatform pin

| Coordinate | Version | Notes |
|------------|---------|-------|
| `org.fireflyframework:fireflyframework-parent` | **26.10.19** | Parent of `com.firefly:firefly-parent` |
| `org.fireflyframework:fireflyframework-bom` | **26.10.19** | Imported by `firefly-parent` |
| `fireflyframework.bom.version` (in `firefly-parent`) | **26.10.19** | Pin inherited by OpenPlatform modules |
| Spring Boot (via that parent) | **4.1.1** | Runtime line for OpenPlatform Java services |
| Java (via that parent) | **25** | Language level for the train |
| `com.firefly:firefly-parent` and `com.firefly:firefly-bom` | **1.1.0-SNAPSHOT** | OpenPlatform train that includes the insurance cores |

Published on Maven Central (and GitHub Packages). Prefer Central for **26.10.19** and later.

Source: `firefly-oss/firefly-parent` as of 2026-10-18/19.

## Inheritance (sketch)

```text
org.fireflyframework:fireflyframework-parent:26.10.19
        ^
com.firefly:firefly-parent
        ^
OpenPlatform modules (com.firefly:*)
```

## Framework how-to

Service bootstrap, toolchain, and SPI module usage belong in the [Jafly docs](https://fireflyframework.github.io/fireflyframework-jafly/). This hub does not duplicate them.

## Docs versions (mike)

This hub can publish versioned aliases with mike (for example **26.10.19** / `latest`). See [Publish with mike](mike.md). Live Pages today may still be a single snapshot until versioned deploy is enabled.

## Related

- [Ecosystem](../ecosystem.md)
- [Module catalogue](../modules/catalog.md)
- [Jafly docs](https://fireflyframework.github.io/fireflyframework-jafly/)
