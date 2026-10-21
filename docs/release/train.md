# Train

The published OpenPlatform train is **26.10.3**.

| Coordinate | Version | Role |
| --- | --- | --- |
| `io.fireflysoftware:firefly-bom` | 26.10.3 | Pins every OpenPlatform module in the release list |
| `io.fireflysoftware:firefly-parent` | 26.10.3 | Parent POM used by those modules |
| `org.fireflyframework:fireflyframework-parent` | 26.10.20 | Framework parent, extended by `firefly-parent` |
| `org.fireflyframework:fireflyframework-bom` | 26.10.20 | Jafly bill of materials, including the rules engine |
| Java | 25 | Language level on the framework parent |
| Spring Boot | 4.1.1 | Runtime on the framework parent |

The rules engine, the identity adapters, and the parent import are explained in [Jafly is the foundation](../jafly.md). OpenPlatform does not fork that engine.

Service host: `https://openplatform.fireflysoftware.io/{service}`.

This documentation site is [docs.fireflysoftware.io](https://docs.fireflysoftware.io/). The product site is [fireflysoftware.io](https://fireflysoftware.io/). Publisher: Firefly Software Foundation. [dev@fireflysoftware.io](mailto:dev@fireflysoftware.io).

Source: `firefly-parent` and `firefly-bom` at 26.10.3, and `org.fireflyframework:fireflyframework-parent` 26.10.20 for Java 25 and Spring Boot 4.1.1.

The documentation site is one snapshot on the `gh-pages` branch. The publish workflow builds that snapshot. It does not publish a second train.
