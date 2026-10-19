# Prerequisites

What you need before creating or extending an OpenPlatform Java service on the current train. Work through this page once; then follow [Your first service](first-service.md).

<ul class="ff-pins" markdown="0">
  <li class="ff-pin">
    <span class="ff-pin__label">Framework parent</span>
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

## People and access

- Access to the relevant `firefly-oss` and `fireflyframework` GitHub organisations (or your institution’s mirrors)
- Ability to pull Maven artifacts for `org.fireflyframework` and `com.firefly` from **Maven Central** (default for **26.10.19+**), or optionally from GitHub Packages with `-Pjafly-packages`

## Toolchain (current OpenPlatform pin)

OpenPlatform services inherit from `com.firefly:firefly-parent`, which pins `fireflyframework.bom.version` to **26.10.19**. That train uses:

- Framework parent: `org.fireflyframework:fireflyframework-parent:26.10.19`
- Spring Boot **4.1.1**
- Java **25**
- Maven, matching the parent’s plugin management

Confirm exact compiler and plugin versions in `firefly-oss/firefly-parent` and the published `fireflyframework-parent` **26.10.19** POM before upgrading a workstation JDK.

### Quick resolve check

```sh
mvn -q dependency:get \
  -Dartifact=org.fireflyframework:fireflyframework-parent:26.10.19:pom
```

If that fails on Central, fix network or credentials before you chase service build errors. Only then try `-Pjafly-packages` against GitHub Packages.

## Recommended local setup

<ol class="ff-steps" markdown="0">
  <li class="ff-step">
    <p class="ff-step__title">JDK 25</p>
    <p class="ff-step__meta">Install the release required by fireflyframework-parent 26.10.19. Point JAVA_HOME at it for Maven and your IDE.</p>
  </li>
  <li class="ff-step">
    <p class="ff-step__title">Maven Wrapper</p>
    <p class="ff-step__meta">Use the wrapper in each service repository when present so plugin versions match the parent train.</p>
  </li>
  <li class="ff-step">
    <p class="ff-step__title">Docker (when needed)</p>
    <p class="ff-step__meta">Many services ship compose files for databases and brokers. Install Docker only if you will run those locally.</p>
  </li>
  <li class="ff-step">
    <p class="ff-step__title">Editor support</p>
    <p class="ff-step__meta">Java, YAML, and OpenAPI support help when you mirror a neighbour and rename packages.</p>
  </li>
</ol>

## What you do not need yet

- A separate published OpenPlatform Maven archetype (there is none today; mirror a neighbour instead)
- A Boot 3 toolchain (new work targets Boot **4.1.1**)
- Provider SDK credentials until you implement an adapter for a specific rail or PSP

## Next

Continue to [Your first service (Jafly)](first-service.md). Keep [Versioning and BOM](../versioning/bom.md) open in another tab while you set the parent.
