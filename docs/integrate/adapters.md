# Integrate — adapter pattern

OpenPlatform keeps provider and institution-system details behind
**adapters** so business modules stay portable.

## Intent

- Business modules speak stable domain APIs and events
- Adapters translate those contracts to an external system’s API, file
  format, or message shape
- Swapping a provider should change adapter configuration or
  implementation, not every application service

## SPI and ports

OpenPlatform and Jafly use the same idea: a **port** (interface) in the
application or library, and an **adapter** that implements that port for
one external system.

| Role | Responsibility |
|------|----------------|
| Port / SPI | Stable contract the domain or library depends on |
| Adapter | Provider-specific client, mapping, and configuration |
| Application service | Calls the port only; never imports provider SDKs directly |

Jafly documents this for security (`fireflyframework-security-spi`) and
ECM (storage and e-signature ports with selectable adapter modules).
OpenPlatform payment libraries expose a single facade interface per
concern (`PspAdapter`, `RailAdapter`) that aggregates operation ports.

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

Names on marketing surfaces stay generic for third parties. Prefer
category language in docs unless a specific integration guide is
approved.

## Named guides in this hub

| Guide | Grounding in the codebase |
|-------|---------------------------|
| <a href="library-psps.md">PSP library</a> | `firefly-oss/library-psps` — `PspAdapter` and operation ports |
| <a href="library-rails.md">Payment rails library</a> | `firefly-oss/library-rails` — `RailAdapter` and operation ports |

Framework-level adapter modules (security SPI, ECM storage and
e-signature, notification providers) are documented in Jafly:

<https://fireflyframework.github.io/fireflyframework-jafly/>

## How to extend

1. Depend on the port or facade interface, not a concrete provider class
2. Implement the adapter in a dedicated module or configuration slice
3. Wire the implementation with Spring configuration (or the library’s
   auto-configuration)
4. Keep contract tests against the port so provider swaps stay safe

Until a BOM registration recipe is published for every OpenPlatform
module, mirror an existing adapter module in `fireflyframework-jafly` or
the payment libraries above, and confirm the parent pin in
<a href="../versioning/bom.md">Versioning and BOM</a> (**26.10.19** /
Boot **4.1.1**).
