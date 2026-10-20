# Event contracts

OpenPlatform services exchange domain events as well as HTTP APIs.
This page lists **published** event-contract locations only. Where no
contract file is checked into `firefly-oss` yet, the row is an explicit
stub — do not invent topics, payload schemas, or broker bindings here.

Framework guidance for event-driven integration on Jafly:
<https://fireflyframework.github.io/fireflyframework-jafly/>
(see the event-driven capability pages in that hub).

## Status of module event contracts (2026-10-18/19)

| Module | Event contracts in `firefly-oss` | Notes |
|--------|----------------------------------|-------|
| Customers | **Stub** — not published as a shared schema pack | Prefer domain README and outbox / integration docs in each repo when present |
| Onboarding | **Stub** | Same |
| Products | **Stub** | Same |
| Agreements | **Stub** | Same |
| Distribution | **Stub** | Same |
| Accounts | **Stub** | Same |
| Payments | **Stub** | Same |
| Lending | **Stub** | Same |
| Risk | **Stub** | Same |
| Shared | **Stub** | Same |
| Insurance cores | **Stub** | Core HTTP APIs are published. No shared event pack yet |

No AsyncAPI files or shared Avro / JSON Schema event packs were found
under the usual OpenPlatform module roots at the time of this index.
Consulting catalogue semantics under other trees are out of scope for
this hub.

## What to do until packs are published

1. Read the service README for published event names and payload
   examples.
2. Prefer framework libraries and patterns from Jafly rather than
   inventing a parallel envelope.
3. When a repository adds `events/`, `asyncapi.yml`, or an equivalent
   schema directory, link it from this page and from the module’s
   OpenAPI section if events and APIs ship together.

## Related

- [OpenAPI index](openapi.md)
- [Architecture overview](../architecture/overview.md)
- [Versioning and BOM](../versioning/bom.md) (Jafly **26.10.20**)
