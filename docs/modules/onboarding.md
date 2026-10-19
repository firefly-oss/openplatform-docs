# Onboarding and verification

**Module id:** `onboarding`

Data collection, identity evidence, and verification cases in one
journey.

Public product page:
<https://fireflysoftware.io/openplatform/modules/>

## Coverage

- Individual and business onboarding APIs
- Personal, economic, and corporate information
- KYC/KYB evidence, case records, and journey status

## How it is used

Prepare a complete customer file, with the institution’s providers and
approval policy built in through adapters. Experience services pause and
resume long-running journeys; domain and core services hold case and
evidence state.

## Key repositories

| Repository | Layer | Role |
|------------|-------|------|
| <a href="https://github.com/firefly-oss/exp-onboarding"><code>exp-onboarding</code></a> | `exp-*` | Journey orchestration for individual and business onboarding |
| <a href="https://github.com/firefly-oss/domain-customer-kyc-kyb"><code>domain-customer-kyc-kyb</code></a> | `domain-*` | KYC/KYB domain workflows and APIs |
| <a href="https://github.com/firefly-oss/core-common-kycb-mgmt"><code>core-common-kycb-mgmt</code></a> | `core-*` | Core KYC/KYB case and evidence persistence |

Upstream customer registration typically uses
<a href="https://github.com/firefly-oss/domain-customer-people"><code>domain-customer-people</code></a>
from the <a href="customers.md">customers</a> module.

## API and events

OpenAPI paths for this module:
<a href="../reference/openapi.md#onboarding-onboarding">OpenAPI index — onboarding</a>.

Event contracts: <a href="../reference/events.md">stub until published</a>.

## Maturity notes

Repositories are public under `firefly-oss`. Per the
`domain-customer-kyc-kyb` README, the KYB track is the primary
implemented flow; the KYC track exposes a lifecycle API with
implementation still incomplete in places. Confirm current behaviour in
that repository before planning a KYC-only cutover.

## Related modules

- <a href="customers.md">Customers and relationships</a>
- <a href="distribution.md">Distribution and partner channels</a>
- <a href="risk.md">Risk and compliance operations</a>
- <a href="catalog.md">Business modules catalogue</a>
