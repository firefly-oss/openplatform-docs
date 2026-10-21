# Onboarding

A person or a company becomes a customer. Access is checked first. A decision follows. A decline writes nothing. The product family then chooses the path. `INSURANCE` opens a contract and does not start identity checks. `DEPOSITS`, `PAYMENTS`, `LENDING`, `CARDS`, or an omitted family registers the person and waits for the later signals.

Ada can send party `11111111-1111-4111-8111-111111111111` so the decision is about her. The new contract from an insurance start is not agreement `10000000-0000-4000-8000-000000000021`. That agreement is the sandbox Horizon Personal Loan. This call asks the contract service for a new id.

The service listens on port 8096. Denied access does not start. A decline does not register her. The published spec requires tenant, first name, last name, and email. The service also reads `productFamily`, `partyId`, and `actorId` when they are present.

```text
// POST /api/v1/onboarding/individuals
// header X-Idempotency-Key: optional
{
  // tenantId: required
  // firstName: Ada
  // lastName: Lovelace
  // email: her email, required
  // phone: optional
  // nationalIdNumber: optional
  // dueDiligenceLevel: STANDARD when omitted
  // partyId: 11111111-1111-4111-8111-111111111111
  // actorId: defaults to the party id
  // productFamily: INSURANCE or DEPOSITS
}
// Insurance response
{
  // onboardingId: the new contract id
  // partyId: the party sent above
  // currentPhase: NON_REGULATED
  // nextStep: INSURANCE
}
// Deposit response waits for personal data.
// Later: POST .../{onboardingId}/personal-data
//        POST .../economic-data
//        POST .../identity-documents
//        POST .../kyc
//        POST .../completion
```

A company is `POST /api/v1/onboarding/businesses`, then company data, beneficial owners, documents, authorized signers, business verification, and completion.

The panel is the OpenAPI file from `exp-onboarding`. Read the example before you open an operation. The spec schema for the start lists the required name and email. The family and the party id are read by the service when you send them.

<swagger-ui src="specs/onboarding/openapi.yml"></swagger-ui>
