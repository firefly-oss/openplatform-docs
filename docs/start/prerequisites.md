# Prerequisites

What you need before creating or extending an OpenPlatform Java service.

## People and access

- Access to the relevant `firefly-oss` and `fireflyframework` GitHub
  organisations (or your institution’s mirrors)
- Ability to pull Maven artifacts for `org.fireflyframework` and
  `com.firefly` from **Maven Central** (default for **26.10.19+**), or
  optionally from GitHub Packages with `-Pjafly-packages`

## Toolchain (current OpenPlatform pin)

OpenPlatform services inherit from `com.firefly:firefly-parent`, which
pins `fireflyframework.bom.version` to **26.10.19**. That train uses:

| Concern | Current OpenPlatform expectation |
|---------|----------------------------------|
| Framework parent | `org.fireflyframework:fireflyframework-parent:26.10.19` |
| Spring Boot | **4.1.1** |
| Java | **25** |
| Build | Maven, matching the parent’s plugin management |

Confirm exact compiler and plugin versions in
`firefly-oss/firefly-parent` and the published
`fireflyframework-parent` **26.10.19** POM before upgrading a
workstation JDK.

## Recommended local setup

1. JDK **25** (or the release required by the parent you will use)
2. Maven Wrapper in the service repository when present
3. Docker, if you run local dependencies (databases, brokers) from compose
   files in the service or shared templates
4. An editor with Java and YAML/OpenAPI support

## Next

Continue to <a href="first-service.md">Your first service (Jafly)</a>.
