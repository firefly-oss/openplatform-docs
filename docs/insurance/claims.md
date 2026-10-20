# Claims operations

**Core repository:** [`core-insurance-claims`](https://github.com/firefly-oss/core-insurance-claims)

Records for a specific claim: notification, parties, coverage references, coverage checks, triage, adjuster assignment, reserves, assessments, evidence references, fraud indicators, SIU referrals, settlements, denials, recoveries (subrogation, salvage, contribution), and status history.

`policyId` points at `core-insurance-policies`. `paymentOrderId` on a settlement points at [payments](../modules/payments.md). Paying the order is not this service.

## What it does not own

Coverage determinations and settlement authority. Those stay with the insurer. Case reserves here are operational. Actuarial snapshots are [reserving](reserving.md).

## API

Base path `/api/v1/claims`.

OpenAPI: [openapi.yml](https://github.com/firefly-oss/core-insurance-claims/blob/main/core-insurance-claims-sdk/src/main/resources/openapi.yml)

## Related

- [Financial flows](financial-flows.md)
- [Insurance cores](index.md)
