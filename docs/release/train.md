# Version

<p class="ff-steward">Stewarded by the Firefly Software Foundation. <a href="mailto:dev@fireflysoftware.io">dev@fireflysoftware.io</a></p>

The published OpenPlatform version is **26.10.4**.

| Coordinate | Version | Role |
| --- | --- | --- |
| `io.fireflysoftware:firefly-bom` | 26.10.4 | Pins every OpenPlatform module in the release list |
| `io.fireflysoftware:firefly-parent` | 26.10.4 | Parent POM used by those modules |
| `org.fireflyframework:fireflyframework-parent` | 26.10.20 | Framework parent, extended by `firefly-parent` |
| `org.fireflyframework:fireflyframework-bom` | 26.10.20 | Jafly bill of materials, including the rules engine |
| Java | 25 | Language level on the framework parent |
| Spring Boot | 4.1.1 | Runtime on the framework parent |

The rules engine and the identity adapters are Jafly, from Firefly Framework. OpenPlatform does not fork them. See [Jafly](../jafly.md).

Service host: `https://openplatform.fireflysoftware.io/{service}`.

This documentation site is [docs.fireflysoftware.io](https://docs.fireflysoftware.io/). The product site is [fireflysoftware.io](https://fireflysoftware.io/). The Firefly Software Foundation stewards the project. Firefly Software Solutions Inc. stands behind it. They stay two bodies. [dev@fireflysoftware.io](mailto:dev@fireflysoftware.io).
