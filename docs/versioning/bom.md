# Versioning and BOM

How OpenPlatform pins the Firefly Framework line. The current train is
Jafly **26.10.19** on Spring Boot **4.1.1**.

## Current OpenPlatform pin (authoritative)

| Coordinate | Version | Notes |
|------------|---------|-------|
| `org.fireflyframework:fireflyframework-parent` | **26.10.19** | Parent of `com.firefly:firefly-parent` |
| `org.fireflyframework:fireflyframework-bom` | **26.10.19** | Imported by `firefly-parent` |
| `fireflyframework.bom.version` (in `firefly-parent`) | **26.10.19** | Single source of truth for modules |
| Spring Boot (via that parent) | **4.1.1** | OpenPlatform Java services |
| Java (via that parent) | **25** | Language level for the train |

Published on **Maven Central** and GitHub Packages. Prefer Central for
**26.10.19** and later.

Source: `firefly-oss/firefly-parent` POM as of 2026-10-18/19.

## Inheritance sketch

```text
org.fireflyframework:fireflyframework-parent:26.10.19  -->  Boot 4.1.1 / Java 25
        ^
        |
com.firefly:firefly-parent (fireflyframework.bom.version = 26.10.19)
        ^
        |
OpenPlatform modules (com.firefly:*)
```

Maven Central coordinate for the framework parent:

```xml
<parent>
  <groupId>org.fireflyframework</groupId>
  <artifactId>fireflyframework-parent</artifactId>
  <version>26.10.19</version>
  <relativePath/>
</parent>
```

## Optional GitHub Packages profile

When Maven Central is unreachable, activate the optional profile on
`firefly-parent`:

```sh
mvn -Pjafly-packages ...
```

That profile reads
`https://maven.pkg.github.com/fireflyframework/fireflyframework-jafly`
(server id `firefly-github` in `settings.xml`). Leave it off by default;
prefer Central for **26.10.19+**.

## Framework reactor

Framework capabilities are developed in
`fireflyframework/fireflyframework-jafly` and published as the
**26.10.19** artifacts above. OpenPlatform consumes those published
coordinates; it does not pin a SNAPSHOT reactor for day-to-day module
work.

## What to document in services

- State the `fireflyframework.bom.version` your service inherits
  (**26.10.19** on the current train)
- Cite Boot **4.1.1** when describing the runtime line
- When citing illustrative future figures that are not verified pins,
  follow the brand content policy for placeholders (do not invent metrics)

## Mike / docs versions

This hub uses **mike** so doc sets can track BOM trains. Current pin to
advertise when publishing versions: **26.10.19** (with `latest` alias).

See <a href="mike.md">Publish with mike</a> for local
`mike deploy --update-aliases 26.10.19 latest` steps. CI still builds a
single unversioned site for pull-request checks; the GitHub Pages
workflow remains a manual stub until versioned deploy is enabled.
