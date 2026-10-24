# Distributor API

Distributor agreements, appointments, products, authority, terms, shipments, and settings each require relationship and effective-date checks. Record availability does not establish delegated authority.

[Complete current producer contract](services/exp-distributor.md) · [Business lifecycle](../journeys/shared.md) · [Repository adoption guide](https://github.com/fireflysoftwaresolutions/exp-distributor)

## Read the request in context

Use the linked producer page for all declared paths, request and response models, required fields, enums, parameters, and statuses. Its downloadable contract and SHA256 identify the copied source independently of the producer's base revision. The [complete API directory](contracts.md) includes experience, domain, and core producers.

Executable examples belong with their prerequisite records, selected adapters, validation fixture, expected outcome, and failure/recovery checks. The repository guide and business implementation chapter identify those sources. Commented pseudo-JSON is not a valid request body.

## Authentication and effects

Establish trusted subject and tenant from the configured authenticated context and verify resource authority before the operation. Supply synthetic IDs created in the same disposable environment for qualification. Do not reuse another chapter's customer, contract, policy, or account merely because its UUID has the right shape.

A successful HTTP status establishes the documented transport result. Verify the owning durable state, emitted events, provider references, and financial effects required by the journey. Include denied, invalid, identical/conflicting replay, uncertainty, restart, and recovery cases. See [operating guidance](../operations/index.md) and [operate](../operations/index.md).
