# Onboarding and verification

**Module id:** `onboarding`

<p class="ff-lead">The case that gathers personal or business evidence over time, before the party record is the durable one.</p>

The institution keeps approval policy and the choice of identity provider. OpenPlatform holds the case and the evidence attached to it.

<figure class="ff-figure">
  <img src="/diagrams/module-onboarding.svg?v=20261019b" alt="Onboarding, read top to bottom: the journey, then the KYC or KYB case, then the evidence record" width="960" height="484" />
  <figcaption>Read top to bottom. The channel runs the journey. The domain moves the KYC or KYB case. The core stores the evidence.</figcaption>
</figure>

`exp-onboarding` is the channel API. `domain-customer-kyc-kyb` moves the case. `core-common-kycb-mgmt` stores evidence. When a durable party is required, registration goes to [customers](customers.md).

<div class="ff-split" markdown="0">
  <section class="ff-panel">
    <h3>What it owns</h3>
    <ul>
      <li>Individual and business onboarding journeys</li>
      <li>KYC cases and KYB cases, including status</li>
      <li>Verification documents, corporate documents, and powers of attorney</li>
      <li>Beneficial-owner records, source of funds, and expected activity</li>
      <li>Sanctions questionnaire answers and screening matches stored on the case</li>
      <li>Business profile and location records gathered for the case</li>
    </ul>
  </section>
  <section class="ff-panel">
    <h3>What it does not own</h3>
    <ul>
      <li>The durable party. That is <a href="/modules/customers/">customers</a>, after the case is ready.</li>
      <li>The identity provider or screening vendor. Those stay behind an <a href="/integrate/adapters/">adapter</a>.</li>
      <li>Scoring cases and reporting submissions. Those are <a href="/modules/risk/">risk</a>.</li>
      <li>Sign-in and sessions. Those are <a href="/modules/shared/">shared services</a>.</li>
    </ul>
  </section>
</div>

## Repositories

| Repository | Layer | What it holds | OpenAPI |
|------------|-------|---------------|---------|
| [`exp-onboarding`](https://github.com/firefly-oss/exp-onboarding) | Experience | Individual onboarding, business onboarding, business search | [openapi.yml](https://github.com/firefly-oss/exp-onboarding/blob/main/exp-onboarding-sdk/src/main/resources/openapi.yml) |
| [`domain-customer-kyc-kyb`](https://github.com/firefly-oss/domain-customer-kyc-kyb) | Domain | KYC cases and KYB cases | [openapi.yml](https://github.com/firefly-oss/domain-customer-kyc-kyb/blob/main/domain-customer-kyc-kyb-sdk/src/main/resources/openapi.yml) |
| [`core-common-kycb-mgmt`](https://github.com/firefly-oss/core-common-kycb-mgmt) | Core | Evidence, corporate profile, and case records | [openapi.yml](https://github.com/firefly-oss/core-common-kycb-mgmt/blob/main/core-common-kycb-mgmt-sdk/src/main/resources/openapi.yml) |

## How the pieces fit

`exp-onboarding` exposes `/api/v1/onboarding/individuals` and `/api/v1/onboarding/businesses`. That is the journey the channel calls.

`domain-customer-kyc-kyb` exposes KYC cases and KYB cases. The repository README states that the KYB track is the implemented flow: create the case, collect corporate documents and beneficial owners, request verification, then evaluate the result. The KYC track exposes a lifecycle API, and the README states that the service implementation is still incomplete. Confirm that file before planning a KYC-only cutover.

`core-common-kycb-mgmt` stores what the case collects: verification documents, corporate documents, beneficial owners, source of funds, sanctions questionnaire answers, screening matches, and the business profile. Identity providers are not imported here. They sit behind an adapter.

Channel branding and reference data for the first screen live in `exp-channel-management`, documented under [shared services](shared.md).

## Related

- [Customers](customers.md) when the case becomes a party
- [Distribution](distribution.md) when a partner starts the journey
- [Risk](risk.md) for scoring records, which are not this case
- [Adapters](../integrate/adapters.md)
- [Catalogue](catalog.md)
