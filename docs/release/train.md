# Source, SDK, and release versions

A source version, a built SDK, a published artifact, and a deployed service describe different states. Record each separately when qualifying an operation or documenting a release.

## Inspected source baseline

| Coordinate or runtime | Remote source baseline | Current integration source | Role |
| --- | --- | --- | --- |
| `io.fireflysoftware:firefly-parent` | 26.10.6 | 26.10.6 | Parent for OpenPlatform service builds |
| `io.fireflysoftware:firefly-bom` | 26.10.6 | 26.10.6 | Platform dependency management |
| `org.fireflyframework:fireflyframework-parent` | 26.10.20 | 26.10.22 | Framework parent extended by the platform parent |
| `org.fireflyframework:fireflyframework-bom` | 26.10.20 | 26.10.22 | Framework module compatibility |
| Java | 25 | 25 | Runtime JDK |
| Spring Boot | 4.1.1 | 4.1.1 | Framework parent runtime line |

The current integration parent selects the matching Jafly 26.10.22 parent and BOM. Those working sources and locally installed artifacts are unpublished. Build the matching framework and platform dependencies in an isolated qualification cache before adopting the examples that require this train. An existing deployed service or SDK retains its packaged dependencies until it is rebuilt and qualified.

Use each selected release's POM and dependency manifest to select compatible service and framework artifacts. Source versions and published/deployed versions can differ.

## Qualify producer and consumers

Generate OpenAPI from the actual producer controller and preserve its digest. Build the typed SDK from those bytes. Check required fields, enums, precision, dates, pagination, optional-header semantics, and error handling against the actual producer. Install a local qualification artifact only into the isolated test cache and record that artifact's digest before running its consumers.

Test results, generated contracts, independent review, release tags, published binaries, remote CI, deployment, and live-provider acceptance require their own evidence. A release workflow that skips tests or fresh OpenAPI generation cannot establish complete business integration.

## Documentation publication

Build strictly, crawl all local HTML/assets/anchors, validate examples against actual schemas, and inspect the rendered site and interactions before publishing. Use [versioned documentation](../versioning/mike.md) for the documentation lifecycle. Preserve previous qualified versions where required; label the current source and acceptance boundary in [operating guidance](../operations/index.md).

Operational endpoints come from the selected deployment and its service configuration. The documentation does not define a universal live service address.
