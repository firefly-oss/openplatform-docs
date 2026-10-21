# Insurance

Ada asks for cover, then binds it, then reports a loss. The three creates ask for a decision. A decline stores nothing. Status, withdraw, cancel, and close do not ask for a decision. Insurance does not move money.

She is `sample-journey`, party `11111111-1111-4111-8111-111111111111`. The policy can name sandbox agreement `10000000-0000-4000-8000-000000000021`. That identifier is not a ledger posting. Omit the status and the catalog stores a quote as received, a policy as bound, and a claim as notified.

The service listens on port 8108. If access is not allowed, the call stops before the domain. A decline is the sample high-risk result. An operation switched off in the catalog is HTTP 409.

```text
// POST /api/v1/experience/insurance/quotes
// Creates a submission. Decision runs. Default status RECEIVED.
{
  // tenantId: identifier, optional
  // partyId: 11111111-1111-4111-8111-111111111111
  // productId: the cover
  // submissionNumber: optional business number
  // lineOfBusiness: MOTOR
  // submissionStatus: omit to use RECEIVED
  // currency: EUR
}
// 201
{
  // id: the submission
  // reference: business number
  // status: RECEIVED
}

// POST /api/v1/experience/insurance/policies
// Binds a policy. Decision runs. Default status BOUND.
{
  // partyId: 11111111-1111-4111-8111-111111111111
  // contractId: 10000000-0000-4000-8000-000000000021
  // productId: the cover
  // lineOfBusiness: MOTOR
  // currency: EUR
  // inceptionDate: 2026-11-01
  // expiryDate: 2027-11-01
  // policyStatus: omit to use BOUND
}
// 201. id, reference, status BOUND

// POST /api/v1/experience/insurance/policies/{policyId}/cancel
{ "reason": "why she cancels" }
// 200. No decision.

// POST /api/v1/experience/insurance/claims
{
  // policyId: the bound policy
  // claimNumber: optional
  // lossDate: 2026-12-01
  // causeCode: the cause
  // description: what happened
  // currency: EUR
  // claimStatus: omit to use NOTIFIED
}
// 201

// POST /api/v1/experience/insurance/claims/{claimId}/close
{ "reason": "why it closes" }
// 200. No decision.
```

The panel below is `exp-insurance-sdk/src/main/resources/openapi.yml`. It names the paths and the success status. It does not repeat every field of the body. The example above is the body the service accepts. Endorse and renew are not on this file.

The panel below is the same file. Open an operation there after you have read its example.

<swagger-ui src="specs/insurance/openapi.yml"></swagger-ui>
