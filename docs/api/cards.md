# Cards API

Separate issuance and replacement from authorization, clearing, settlement, billing, and dispute. A card record or request signal does not prove provider or financial completion.

[Complete current producer contract](services/exp-cards.md) · [Business lifecycle](../journeys/banking.md) · [Repository adoption guide](https://github.com/fireflysoftwaresolutions/exp-cards)

## Core activation boundary

The [core activation contract](services/core-banking-cards.md) and [activation guide](../reference/service-guides/card-activation.md) describe current card authorization, stable action identity, proof and issuer-observation checks. The core source is published at `84fe51492341fb17200b3b3650d9039d86ce3b83`; a qualified core-owned issuance entry point and positive issuer journey remain unavailable. The experience contract above is a separate producer and has not been migrated by this documentation update. Select matching generated clients and complete that migration before adoption.

## Read the request in context

Use the linked producer page for all declared paths, request and response models, required fields, enums, parameters, and statuses. Its downloadable contract and SHA256 identify the copied source independently of the producer's base revision. The [complete API directory](contracts.md) includes experience, domain, and core producers.

Executable examples belong with their prerequisite records, selected adapters, validation fixture, expected outcome, and failure/recovery checks. The repository guide and business implementation chapter identify those sources. Commented pseudo-JSON is not a valid request body.

## Authentication and effects

Establish trusted subject and tenant from the configured authenticated context and verify resource authority before the operation. Supply synthetic IDs created in the same disposable environment for qualification. Do not reuse another chapter's customer, contract, policy, or account merely because its UUID has the right shape.

A successful HTTP status establishes the documented transport result. Verify the owning durable state, emitted events, provider references, and financial effects required by the journey. Include denied, invalid, identical/conflicting replay, uncertainty, restart, and recovery cases. See [operating guidance](../operations/index.md) and [operate](../operations/index.md).
