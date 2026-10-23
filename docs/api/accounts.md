# Accounts API

Account opening, servicing, authority, and closure must agree with the owning domain and core. The controller inventory can be broader than a checked-in OpenAPI input; qualification compares both.

[Complete current producer contract](services/exp-accounts.md) · [Business lifecycle](../journeys/banking.md) · [Repository adoption guide](https://github.com/fireflysoftwaresolutions/exp-accounts)

## Read the request in context

Use the linked producer page for all declared paths, request and response models, required fields, enums, parameters, and statuses. Its downloadable contract and SHA256 identify the copied source independently of the producer's base revision. The [complete API directory](contracts.md) includes experience, domain, and core producers.

Executable examples belong with their prerequisite records, selected adapters, validation fixture, expected outcome, and failure/recovery checks. The repository guide and business implementation chapter identify those sources. Commented pseudo-JSON is not a valid request body.

## Authentication and effects

Establish trusted subject and tenant from the configured authenticated context and verify resource authority before the operation. Supply synthetic IDs created in the same disposable environment for qualification. Do not reuse another chapter's customer, contract, policy, or account merely because its UUID has the right shape.

A successful HTTP status establishes the documented transport result. Verify the owning durable state, emitted events, provider references, and financial effects required by the journey. Include denied, invalid, identical/conflicting replay, uncertainty, restart, and recovery cases. See [recovery and reconciliation](../operations/index.md).

## Account-service complaints

`POST /api/v1/experience/accounts/{resourceId}/complaints` checks the signed account-resource grant, reads the product through its SDK and opens the shared case through the case-domain SDK. Retain the original sourceRequestId and Idempotency-Key. A valid intake returns201 with case identity/state/deadline/version; it does not change the account or its money. [Configure the complete human-work chain](../operations/cases.md), including token properties, current-permission replay, evidence, investigation and independent closure. The new case source/SDK builds are local unpublished additions in this snapshot.
