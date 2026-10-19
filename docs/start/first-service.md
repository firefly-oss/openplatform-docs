# Your first service (Jafly)

How a new Java service fits the Firefly stack when OpenPlatform is pinned
to Jafly **26.10.19** / Spring Boot **4.1.1** / Java **25**.

## Current train

| Coordinate | Version | Spring Boot | Role |
|------------|---------|-------------|------|
| `org.fireflyframework:fireflyframework-parent` | **26.10.19** | **4.1.1** | Framework parent on Maven Central |
| `com.firefly:firefly-parent` | platform SNAPSHOT | inherits **26.10.19** | OpenPlatform module parent |

Prefer Maven Central. Use `-Pjafly-packages` only when Central is
unreachable (see <a href="../versioning/bom.md">Versioning and BOM</a>).

## Inheritance chain

```text
org.fireflyframework:fireflyframework-parent  (26.10.19, Boot 4.1.1, Java 25)
  └── com.firefly:firefly-parent              (fireflyframework.bom.version = 26.10.19)
        └── your module                       (com.firefly:<artifactId>)
```

Declare `firefly-parent` as the Maven parent. You inherit framework BOM
management, OpenAPI packaging conventions, and Boot plugin configuration
without redeclaring Boot versions in every module.

Example reactor parent (pattern used by existing `domain-*` services):

```xml
<parent>
  <groupId>com.firefly</groupId>
  <artifactId>firefly-parent</artifactId>
  <version>1.0.0-SNAPSHOT</version>
  <relativePath/>
</parent>

<artifactId>domain-example</artifactId>
<packaging>pom</packaging>
```

Install or resolve `com.firefly:firefly-parent` from your organisation’s
mirror of `firefly-oss/firefly-parent` before building local modules.

## Choose a layer, then mirror a neighbour

OpenPlatform modules follow naming and packaging conventions already
visible under `firefly-oss`:

| Prefix | Use when |
|--------|----------|
| `core-*` | You own persistence and core APIs for a bounded context |
| `domain-*` | You orchestrate commands, sagas, and queries over one or more cores |
| `exp-*` | You expose a channel journey (BFF) over domain SDKs |
| `library-*` | You share rail or provider interfaces without a deployable service |

There is no separate published Maven archetype for OpenPlatform today.
The practical path is:

1. Pick the module id you are extending
   (<a href="../modules/catalog.md">catalogue</a>).
2. Clone a neighbouring repository with the same prefix and copy its
   multi-module layout (`-interfaces` / `-models` or `-infra`, `-core`,
   `-web`, `-sdk` as applicable).
3. Rename artifact ids and base packages under `com.firefly`.
4. Keep the parent as `com.firefly:firefly-parent` so you stay on
   **26.10.19**.

Good starting mirrors:

- Domain orchestration: `domain-customer-people`
- Core persistence: `core-common-customer-mgmt`
- Experience journey: `exp-onboarding`

## Typical multi-module shape

```text
your-service/
├── pom.xml                          # packaging pom, parent = firefly-parent
├── your-service-interfaces/         # DTOs, enums, API contracts
├── your-service-core/               # business logic
├── your-service-infra/              # clients, validators (domain-style)
├── your-service-web/                # Spring Boot app, controllers, OpenAPI
└── your-service-sdk/                # generated client for consumers
```

`core-*` services often use `-models` (entities, repositories, migrations)
instead of `-infra`. Match the neighbour you copied.

## Honest Boot 4.1 notes

OpenPlatform’s **current** parent train is Spring Boot **4.1.1** through
Jafly **26.10.19**. That is the pin to target for new work.

Be aware that:

- Many module README badges and older docs still say “Spring Boot 3.x”.
  Those lines can lag the parent POM. Always trust the parent chain
  (`firefly-parent` through `fireflyframework-parent` **26.10.19**), not a
  badge.
- Boot 4 sits on a newer Spring generation than Boot 3. When you lift an
  older module, expect dependency and configuration review (Jakarta APIs,
  actuator and security defaults, and plugin versions from the parent).
- Do not mix Boot 3 and Boot 4 coordinates in one reactor. If a dependency
  is not yet on the **26.10.19** BOM, raise that in the module owning the
  dependency rather than overriding Boot in your POM.
- Framework behaviour (cache, security, ECM, EDA, CQRS, workflows) comes
  from published Jafly artifacts. Prefer those modules over copying
  framework code into a business service.

Published Jafly docs:
<https://fireflyframework.github.io/fireflyframework-jafly/>

## Build and run sketch

From the service repository (after JDK **25** and a resolved
`firefly-parent`):

```sh
./mvnw -q verify
# or: mvn -q verify
```

Run the `-web` module with the Spring Boot plugin as that repository’s
README describes (profiles, local compose files, and ports differ per
service). Prefer Central-resolved `org.fireflyframework:*` artifacts at
**26.10.19**.

Optional packages profile when Central is unreachable:

```sh
./mvnw -Pjafly-packages -q verify
```

## Expose HTTP and stay behind adapters

1. Keep public HTTP in the `-web` artifact.
2. Enable OpenAPI generation in `-web` when the parent conventions
   require it (`openapi.gen.skip` is true by default on
   `firefly-parent`; flip it in modules that publish an SDK).
3. Call other OpenPlatform services through their published `-sdk`
   artifacts where available.
4. Put external systems behind adapters (see
   <a href="../integrate/adapters.md">Integrate</a>). Do not embed
   provider SDKs in every application service.

## Suggested first steps (checklist)

1. Confirm JDK **25** and Maven can resolve
   `org.fireflyframework:fireflyframework-parent:26.10.19` from Central.
2. Ensure `com.firefly:firefly-parent` is available (clone/install
   `firefly-oss/firefly-parent` if your mirror does not publish it yet).
3. Mirror a `core-*`, `domain-*`, or `exp-*` neighbour in the same bounded
   context.
4. Set the parent to `com.firefly:firefly-parent` and keep
   `fireflyframework.bom.version` inherited (**26.10.19**).
5. Align reactive or servlet style with neighbouring modules in that
   context (most OpenPlatform services use WebFlux).
6. Wire OpenAPI / SDK only when you need a published client.
7. Add adapter boundaries for anything outside Firefly.

## Next

- <a href="prerequisites.md">Prerequisites</a>
- <a href="../architecture/overview.md">Architecture overview</a>
- <a href="../modules/catalog.md">Business modules catalogue</a>
- <a href="../versioning/bom.md">Versioning and BOM</a>
