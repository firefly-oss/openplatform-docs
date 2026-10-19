# Risk and compliance operations

**Module id:** `risk`

Structured records of credit scoring, provisioning, screening cases, and regulatory reporting submissions. Actuarial and bureau systems integrate through adapters; they are not replaced by default.

Public product page: <https://fireflysoftware.io/openplatform/modules/>

## Why this module exists

Lending and onboarding journeys need a place to store scoring results and reporting cases without embedding bureau SDKs in every service. Risk owns operational records; providers stay behind adapters. Where AI participates, it decides within approved limits, explained, recorded, and open to human review. Decisions with significant effects on people, or beyond delegated limits, go to people with delegated authority.

## When to use it

Use `risk` when you need structured records of credit scoring, provisioning, screening cases, or regulatory reporting submissions.

Do not claim regulatory outcomes for an institution from this hub. Compliance evidence stays with the institution.

## Key concepts

| Concept | Meaning in this module |
|---------|------------------------|
| Scoring case | Request, model reference, and result record |
| Provisioning | Expected-credit-loss values and stage history |
| Regulatory case | Submission and reporting case records |
| Bureau boundary | External credit-data provider behind adapters |

## Layer map (repos that exist)

| Repository | Layer | Role |
|------------|-------|------|
| [`core-lending-credit-scoring`](https://github.com/firefly-oss/core-lending-credit-scoring) | `core-*` | Scoring cases, models, and results |
| [`domain-lending-credit-scoring`](https://github.com/firefly-oss/domain-lending-credit-scoring) | `domain-*` | Scoring domain orchestration |
| [`core-lending-provisioning-risk`](https://github.com/firefly-oss/core-lending-provisioning-risk) | `core-*` | Provisioning and stage history |
| [`core-lending-regulatory-compliance`](https://github.com/firefly-oss/core-lending-regulatory-compliance) | `core-*` | Regulatory reporting case records |
| [`domain-data-credit-bureaus`](https://github.com/firefly-oss/domain-data-credit-bureaus) | `domain-*` | Bureau data access (no published OpenAPI yet) |

**Gap:** no dedicated `exp-risk` repository. Journeys usually request scoring through lending or onboarding experience services. Prefer category language for named bureaus unless an approved integration guide lists them.

## How a typical call path looks

1. Lending or onboarding journeys request a scoring or screening case.
2. Domain scoring services orchestrate the case.
3. Core scoring, provisioning, or regulatory repositories store results and history.
4. Bureau and screening providers stay behind adapters.

## How to start

1. Confirm the current pin on [Versioning and BOM](../versioning/bom.md) (**26.10.19** / Boot **4.1.1** / Java **25**).
2. Open the repositories in the layer map above and read each README and OpenAPI.
3. Follow related module pages for upstream identifiers and [adapters](../integrate/adapters.md) for outside systems.
4. Framework bootstrap: [Jafly docs](https://fireflyframework.github.io/fireflyframework-jafly/) (outbound).


## OpenAPI

| Repository | Spec |
|------------|------|
| `core-lending-credit-scoring` | [`…/openapi.yml`](https://github.com/firefly-oss/core-lending-credit-scoring/blob/main/core-lending-credit-scoring-sdk/src/main/resources/openapi.yml) |
| `domain-lending-credit-scoring` | [`…/openapi.yml`](https://github.com/firefly-oss/domain-lending-credit-scoring/blob/main/domain-lending-credit-scoring-sdk/src/main/resources/openapi.yml) |
| `core-lending-provisioning-risk` | [`…/openapi.yml`](https://github.com/firefly-oss/core-lending-provisioning-risk/blob/main/core-lending-provisioning-risk-sdk/src/main/resources/openapi.yml) |
| `core-lending-regulatory-compliance` | [`…/openapi.yml`](https://github.com/firefly-oss/core-lending-regulatory-compliance/blob/main/core-lending-regulatory-compliance-sdk/src/main/resources/openapi.yml) |
| `domain-data-credit-bureaus` | — (no published OpenAPI yet) |

Full index: [OpenAPI — risk](../reference/openapi.md#risk-risk).

## Events

[Stub until published](../reference/events.md).

## Maturity notes

Scoring, provisioning, and regulatory-reporting repositories are present under `firefly-oss`. This page describes operational records and integration points; it does not claim regulatory outcomes. Parent pin for new work: **26.10.19**.

## Related modules

- [The lending lifecycle](lending.md)
- [Onboarding and verification](onboarding.md)
- [Customers and relationships](customers.md)
- [Integrate — adapters](../integrate/adapters.md)
- [Business modules catalogue](catalog.md)

## Next steps

Return to [Lending](lending.md) or [Onboarding](onboarding.md) for the journey that owns the case. Do not invent compliance outcomes in docs or READMEs.
