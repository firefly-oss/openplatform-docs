# Start here — navigate OpenPlatform

This hub documents **OpenPlatform** as the module platform in **firefly-oss**: what each module is for, how `exp-*` / `domain-*` / `core-*` compose, which repositories exist, and where OpenAPI and adapters live.

It does **not** teach how to scaffold or build Java services on the framework train. For framework tooling and service bootstrap, use the [Jafly docs](https://fireflyframework.github.io/fireflyframework-jafly/).

## The story in four stops

<ol class="ff-steps" markdown="0">
  <li class="ff-step">
    <p class="ff-step__title"><a href="/ecosystem/">Ecosystem</a></p>
    <p class="ff-step__meta">OpenPlatform equals firefly-oss modules and libraries. Framework details stay outbound.</p>
  </li>
  <li class="ff-step">
    <p class="ff-step__title"><a href="/architecture/overview/">Architecture</a></p>
    <p class="ff-step__meta">How experience, domain, and core bands fit, and where adapters sit.</p>
  </li>
  <li class="ff-step">
    <p class="ff-step__title"><a href="/modules/catalog/">Module catalogue</a></p>
    <p class="ff-step__meta">Every business module id with repository maps and OpenAPI links grounded in real repos.</p>
  </li>
  <li class="ff-step">
    <p class="ff-step__title"><a href="/integrate/adapters/">Integrate</a> and <a href="/reference/openapi/">OpenAPI index</a></p>
    <p class="ff-step__meta">firefly-oss libraries (library-psps, library-rails) and published contracts.</p>
  </li>
</ol>

## How to pick a module page

1. Match the journey step (party, product, payment, loan, and so on) to a module id on the [catalogue](../modules/catalog.md).
2. Open that module page for purpose, when-to-use, layer map, and OpenAPI links.
3. Follow repository READMEs for local run details; this hub does not duplicate them.
4. Put anything outside Firefly behind the [adapter pattern](../integrate/adapters.md).

## Layer prefixes (quick map)

| Prefix | Role in firefly-oss |
|--------|---------------------|
| `exp-*` | Experience / BFF journeys for channels |
| `domain-*` | Domain orchestration (commands, queries, processes) |
| `core-*` | Persistence and core APIs for a bounded context |
| `library-*` | Shared ports (for example `library-psps`, `library-rails`) |

## Version pin (brief)

OpenPlatform modules currently consume framework train **26.10.20** (Spring Boot **4.1.1**, Java **25**) through `com.firefly:firefly-parent`. Details and publish notes: [Versioning and BOM](../versioning/bom.md). Framework how-to: [Jafly docs](https://fireflyframework.github.io/fireflyframework-jafly/).

## Next

- Browse the [module catalogue](../modules/catalog.md)
- Read [Architecture](../architecture/overview.md) if band names are new
- Open [Adapters](../integrate/adapters.md) before wiring a provider
