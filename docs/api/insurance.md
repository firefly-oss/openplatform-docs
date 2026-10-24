# Insurance API

Quote, bind request, policy servicing, claim registration, settlement, and insurance financial operations have distinct authority and state. The typed policy producer preserves party identity; underwriting and financial acceptance remain separate cases.

[Complete current producer contract](services/exp-insurance.md) · [Business lifecycle](../journeys/insurance.md) · [Repository adoption guide](https://github.com/fireflysoftwaresolutions/exp-insurance)

## Binding availability and SDK migration

`POST /api/v1/experience/insurance/policies` requires an explicit party ID and remains unavailable: an `APPROVE` decision returns HTTP 503 `INSURANCE_BINDING_UNAVAILABLE` before policy creation or document issuance. The [binding guide](../reference/service-guides/insurance-bind-decision-boundary.md) explains referral and missing-decision responses, current authority gaps and recovery of earlier effects.

The copied producer declaration comes from published source commit `b81836f3234f6ed03ef78715e789e1b5c260948c`. Its typed `InsuranceControllerApi` replaces the published `QuotesApi`, `PoliciesApi` and `ClaimsApi` classes; required bodies and generated response models break the old five bodyless calls. Migrate callers and coordinate a future SDK version. These source bytes establish neither a released replacement SDK nor positive binding.

## Read the request in context

Use the linked producer page for all declared paths, request and response models, required fields, enums, parameters, and statuses. Its downloadable contract and SHA256 identify the copied source independently of the producer's base revision. The [complete API directory](contracts.md) includes experience, domain, and core producers.

Executable examples belong with their prerequisite records, selected adapters, validation fixture, expected outcome, and failure/recovery checks. The repository guide and business implementation chapter identify those sources. Commented pseudo-JSON is not a valid request body.

## Authentication and effects

Establish trusted subject and tenant from the configured authenticated context and verify resource authority before the operation. Supply synthetic IDs created in the same disposable environment for qualification. Do not reuse another chapter's customer, contract, policy, or account merely because its UUID has the right shape.

A successful HTTP status establishes the documented transport result. Verify the owning durable state, emitted events, provider references, and financial effects required by the journey. Include denied, invalid, identical/conflicting replay, uncertainty, restart, and recovery cases. See [recovery and reconciliation](../operations/index.md).

## Policy-service complaints

The [human-work integration chapter](../operations/cases.md) retains the broader program snapshot for policy-service complaints. Its complaint route and models are absent from the focused published `exp-insurance` declaration copied above. Qualify that separate source/SDK integration before exposing complaint intake; this binding-source update does not publish it. A complaint does not amend coverage, decide a claim or authorize settlement.
