# Risk and compliance operations

**Module id:** `risk`

<p class="ff-lead">Records of scoring, provisioning, and reporting. The decision policy stays with the institution.</p>

Bureau systems connect through adapters. This module stores the case, not the provider toolkit.

<figure class="ff-figure">
  <img src="/diagrams/module-risk.svg?v=20261019b" alt="Risk, read top to bottom: no separate channel, then scoring and bureau access, then scoring, provisioning, and reporting records" width="960" height="484" />
  <figcaption>Read top to bottom. There is no risk channel. Lending and onboarding call in. The domain handles scoring requests and bureau access. The core stores the records.</figcaption>
</figure>

There is no `exp-risk` repository. `domain-data-credit-bureaus` is on disk and has no published OpenAPI.

Where AI participates in a scoring journey, it decides within approved limits, explained, recorded, and open to human review. Decisions with significant effects on people, or beyond delegated limits, go to people with delegated authority.

<div class="ff-split" markdown="0">
  <section class="ff-panel">
    <h3>What it owns</h3>
    <ul>
      <li>Scoring cases, models, requests, and results</li>
      <li>Records that a bureau was called, without embedding the provider toolkit</li>
      <li>Provisioning cases, stage history, calculations, and journals</li>
      <li>Reporting runs, submissions, and case records for reporting</li>
    </ul>
  </section>
  <section class="ff-panel">
    <h3>What it does not own</h3>
    <ul>
      <li>The loan application. That is <a href="/modules/lending/">lending</a>.</li>
      <li>KYC and KYB evidence. That is <a href="/modules/onboarding/">onboarding</a>.</li>
      <li>Credit policy and the final decision authority. Those stay with the institution.</li>
      <li>A regulatory outcome for an institution. This hub does not claim one.</li>
    </ul>
  </section>
</div>

## Repositories

| Repository | Layer | What it holds | OpenAPI |
|------------|-------|---------------|---------|
| [`domain-lending-credit-scoring`](https://github.com/firefly-oss/domain-lending-credit-scoring) | Domain | Scoring requests, cases, and models | [openapi.yml](https://github.com/firefly-oss/domain-lending-credit-scoring/blob/main/domain-lending-credit-scoring-sdk/src/main/resources/openapi.yml) |
| [`domain-data-credit-bureaus`](https://github.com/firefly-oss/domain-data-credit-bureaus) | Domain | Bureau data access | No published OpenAPI yet |
| [`core-lending-credit-scoring`](https://github.com/firefly-oss/core-lending-credit-scoring) | Core | Scoring cases, models, results, bureau-call records | [openapi.yml](https://github.com/firefly-oss/core-lending-credit-scoring/blob/main/core-lending-credit-scoring-sdk/src/main/resources/openapi.yml) |
| [`core-lending-provisioning-risk`](https://github.com/firefly-oss/core-lending-provisioning-risk) | Core | Provisioning cases, stage history, calculations | [openapi.yml](https://github.com/firefly-oss/core-lending-provisioning-risk/blob/main/core-lending-provisioning-risk-sdk/src/main/resources/openapi.yml) |
| [`core-lending-regulatory-compliance`](https://github.com/firefly-oss/core-lending-regulatory-compliance) | Core | Reporting runs, submissions, and related case records | [openapi.yml](https://github.com/firefly-oss/core-lending-regulatory-compliance/blob/main/core-lending-regulatory-compliance-sdk/src/main/resources/openapi.yml) |

## How the pieces fit

`domain-lending-credit-scoring` exposes scoring requests, cases, and models. A request is the domain command. The result is stored, not implied.

`core-lending-credit-scoring` persists the case, the model reference, the result, and a record that a bureau was called. `domain-data-credit-bureaus` is the bureau-access repository. It has no checked-in OpenAPI, so this page does not describe its operations.

`core-lending-provisioning-risk` persists provisioning cases, stage history, calculations, and journals. `core-lending-regulatory-compliance` persists reporting runs, submissions, and reporting records. Those are operational records. They are not a statement that an institution meets a regulation.

Lending journeys call these services. They do not embed a bureau toolkit in `exp-lending`.

## Related

- [Lending](lending.md) for the application that asks for a score
- [Onboarding](onboarding.md) for evidence that is not a scoring case
- [Adapters](../integrate/adapters.md) for bureau boundaries
- [Catalogue](catalog.md)
