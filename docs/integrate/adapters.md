# Integrate — adapter pattern

OpenPlatform keeps provider and institution-system details behind **adapters** so business modules stay portable. This page teaches the pattern; the PSP and rails guides are worked examples from public repositories.

<img src="/diagrams/openplatform-adapters.svg?v=20261019" alt="Adapter boundary between firefly-oss services and external systems" width="960" height="360" />

## Intent

- Business modules speak stable domain APIs and events
- Adapters translate those contracts to an external system’s API, file format, or message shape
- Swapping a provider should change adapter configuration or implementation, not every application service

## SPI and ports

OpenPlatform libraries use the same port idea as the wider Firefly stack: a **port** (interface) in the application or library, and an **adapter** that implements that port for one external system.

| Role | Responsibility |
|------|----------------|
| Port / SPI | Stable contract the domain or library depends on |
| Adapter | Provider-specific client, mapping, and configuration |
| Application service | Calls the port only; never imports provider SDKs directly |

Jafly documents this for security (`fireflyframework-security-spi`) and ECM (storage and e-signature ports with selectable adapter modules). OpenPlatform payment libraries expose a single facade interface per concern (`PspAdapter`, `RailAdapter`) that aggregates operation ports.

## Worked example (shape)

Application code depends on the port:

```java
@Service
@RequiredArgsConstructor
public class DisbursementApplicationService {

    private final RailAdapter railAdapter;

    public Mono<TransferResult> disburse(TransferCommand command) {
        return railAdapter.transfers().submit(command);
    }
}
```

Configuration selects one adapter bean for the active provider. Domain tests mock `RailAdapter` (or a narrower port) so they never need live credentials.

For a full facade with named operation ports, see the [PSP library guide](library-psps.md). For payment-rail ports, see the [rails library guide](library-rails.md).

## Typical adapter boundaries

| Boundary | Examples of what sits outside |
|----------|-------------------------------|
| Identity verification | External identity evidence providers |
| Credit data | Bureau and bank-data providers |
| E-signature | Signature services |
| Payment rails | Networks and clearing schemes |
| Payment service providers | Card and wallet processors |
| Core / ledger | Institution core banking or general ledger |
| Screening | Sanctions and related checks |
| Documents and storage | ECM and object storage backends |

Names on marketing surfaces stay generic for third parties. Prefer category language in docs unless a specific integration guide is approved.

## Named guides in this hub

| Guide | Grounding in the codebase |
|-------|---------------------------|
| [PSP library](library-psps.md) | `firefly-oss/library-psps` — `PspAdapter` and operation ports |
| [Payment rails library](library-rails.md) | `firefly-oss/library-rails` — `RailAdapter` and operation ports |

Framework-level adapter modules (security SPI, ECM storage and e-signature, notification providers) are documented in Jafly:

<https://fireflyframework.github.io/fireflyframework-jafly/>

## How to extend

<ol class="ff-steps" markdown="0">
  <li class="ff-step">
    <p class="ff-step__title">Depend on the port</p>
    <p class="ff-step__meta">Inject the facade or a narrower operation port. Do not import a concrete provider class from domain or experience modules.</p>
  </li>
  <li class="ff-step">
    <p class="ff-step__title">Implement the adapter separately</p>
    <p class="ff-step__meta">Put provider SDKs and mapping in a dedicated module or configuration slice.</p>
  </li>
  <li class="ff-step">
    <p class="ff-step__title">Wire with Spring</p>
    <p class="ff-step__meta">Register one implementation bean (or a router) with the library’s auto-configuration pattern.</p>
  </li>
  <li class="ff-step">
    <p class="ff-step__title">Keep contract tests</p>
    <p class="ff-step__meta">Test against the port so provider swaps stay safe when credentials and endpoints change.</p>
  </li>
</ol>

Until a BOM registration recipe is published for every OpenPlatform module, mirror an existing adapter module in `fireflyframework-jafly` or the payment libraries above, and confirm the parent pin in [Versioning and BOM](../versioning/bom.md) (**26.10.19** / Boot **4.1.1**).

## What next

- [Payments module](../modules/payments.md) for repositories that consume these libraries
- [Architecture overview](../architecture/overview.md) for where adapters sit in the band model
- [Start here](../start/index.md) to navigate the module catalogue
