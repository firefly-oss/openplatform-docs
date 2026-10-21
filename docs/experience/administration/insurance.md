# Insurance terminal

<p class="ff-steward">Stewarded by the Firefly Software Foundation. <a href="mailto:dev@fireflysoftware.io">dev@fireflysoftware.io</a></p>

An employee works on policies, claims, and underwriting submissions without using a customer journey. `exp-insurance-terminal` is that journey. The employee signs in, the terminal checks that they may administer the area, and a change to a customer's record checks `IMPERSONATE` before the record port runs.

<div class="ff-journey" markdown="0">
<img src="../../../assets/journeys/insurance-staff.svg" alt="Sequence: employee, insurance terminal, access, domain. Sign in, administer, impersonate the customer, then update the policy.">
</div>

## Steps

1. `POST /api/v1/staff/sessions` with username `sample-employee`. `IdentityPort` calls `POST /api/v1/identity/subjects` on `domain-core-security-center`. The sandbox adapter returns actor `33333333-3333-4333-8333-333333333333`. It does not start Keycloak.
2. The terminal checks `ADMINISTER` on `POLICY`. A denial does not list records.
3. A customer-scoped change, such as `PUT /api/v1/staff/records/POLICY/{recordId}`, calls `ImpersonationPort`. That posts `IMPERSONATE` on `PARTY` for the customer. A denial does not call the record port.
4. `StaffRecordPort` then updates the record. The shipped adapter is `SandboxRecordBook`. Setting `firefly.terminal.adapter` to `domain` uses `DomainRecordClient`, which calls the domain HTTP API and does not use a core SDK.

The areas in `InsuranceArea` are `POLICY`, `CLAIM`, and `SUBMISSION`. With the domain adapter on, those calls go to `domain-insurance-policies` (`PUT /api/v1/policies/{id}`), `domain-insurance-claims` (`/api/v1/claims/{id}`), and `domain-insurance-underwriting` (`/api/v1/submissions/{id}`). Listing distributors on that same adapter calls `core-common-distributor-mgmt` at `/api/v1/distributors/filter`.

## Technical port

`exp-insurance-terminal`, port 8121. Identity and access stay on [domain-core-security-center](https://github.com/fireflysoftwaresolutions/domain-core-security-center). `firefly.security-center.identity.adapter` selects the identity adapter. `sandbox-access-policy.json` grants `sample-employee` `ADMINISTER` and `IMPERSONATE`.
