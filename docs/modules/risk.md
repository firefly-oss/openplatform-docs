# Risk and compliance operations

**Module id:** `risk`

A structured record of reviews, risk decisions, and reporting, linked to
each case.

Public product page:
<https://fireflysoftware.io/openplatform/modules/>

## Coverage

- Credit-scoring requests, models, and result records
- Provisioning, expected-credit-loss values, and stage history
- Case and submission records for screening and reporting workflows

## How it is used

Connect approved risk calculations to operational records. Actuarial and
bureau systems integrate through adapters; they are not replaced by
default. Decisions with significant effects on people, or beyond
delegated limits, go to people with delegated authority.

## Key repositories

| Repository | Layer | Role |
|------------|-------|------|
| <a href="https://github.com/firefly-oss/core-lending-credit-scoring"><code>core-lending-credit-scoring</code></a> | `core-*` | Scoring cases, models, and results |
| <a href="https://github.com/firefly-oss/domain-lending-credit-scoring"><code>domain-lending-credit-scoring</code></a> | `domain-*` | Scoring domain orchestration |
| <a href="https://github.com/firefly-oss/core-lending-provisioning-risk"><code>core-lending-provisioning-risk</code></a> | `core-*` | Provisioning and stage history |
| <a href="https://github.com/firefly-oss/core-lending-regulatory-compliance"><code>core-lending-regulatory-compliance</code></a> | `core-*` | Regulatory reporting case records |

Related data integration:
<a href="https://github.com/firefly-oss/domain-data-credit-bureaus"><code>domain-data-credit-bureaus</code></a>
(bureau adapters and data access). Prefer category language for named
bureaus in public docs unless an approved integration guide lists them.

## API and events

OpenAPI paths for this module:
<a href="../reference/openapi.md#risk-risk">OpenAPI index — risk</a>.

Event contracts: <a href="../reference/events.md">stub until published</a>.

## Maturity notes

Scoring, provisioning, and regulatory-reporting repositories are present
under `firefly-oss`. This page describes operational records and
integration points; it does not claim regulatory outcomes for any
institution.

## Related modules

- <a href="lending.md">The lending lifecycle</a>
- <a href="onboarding.md">Onboarding and verification</a>
- <a href="customers.md">Customers and relationships</a>
- <a href="../integrate/adapters.md">Integrate — adapters</a>
- <a href="catalog.md">Business modules catalogue</a>
