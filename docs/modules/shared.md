# Identity and shared services

**Module id:** `shared`

Access, communication, and configuration reused across applications.

This id is part of the public OpenPlatform module set on
<https://fireflysoftware.io/openplatform/modules/> even though it is not
one of the nine business-module tiles drawn in architecture figures.

## Coverage

- Users, roles, permissions, and identity-provider links
- Authentication, sessions, and token operations
- Notifications, preferences, and reference data

## How it is used

Common access and notifications for banking and insurance journeys,
including connected policy systems. Business modules depend on these
services rather than embedding their own identity stores.

## Key repositories

| Repository | Layer | Role |
|------------|-------|------|
| <a href="https://github.com/firefly-oss/core-common-user-mgmt"><code>core-common-user-mgmt</code></a> | `core-*` | Users, roles, and permissions |
| <a href="https://github.com/firefly-oss/domain-core-security-center"><code>domain-core-security-center</code></a> | `domain-*` | Security-centre domain APIs |
| <a href="https://github.com/firefly-oss/domain-common-notifications"><code>domain-common-notifications</code></a> | `domain-*` | Notification domain orchestration |
| <a href="https://github.com/firefly-oss/core-common-reference-master-data"><code>core-common-reference-master-data</code></a> | `core-*` | Reference and master data |

Also commonly paired:
<a href="https://github.com/firefly-oss/core-common-notification-services"><code>core-common-notification-services</code></a>,
<a href="https://github.com/firefly-oss/app-authenticator"><code>app-authenticator</code></a>,
<a href="https://github.com/firefly-oss/core-common-sca-mgmt"><code>core-common-sca-mgmt</code></a>,
<a href="https://github.com/firefly-oss/domain-common-sca"><code>domain-common-sca</code></a>,
<a href="https://github.com/firefly-oss/exp-security"><code>exp-security</code></a>,
<a href="https://github.com/firefly-oss/exp-notifications"><code>exp-notifications</code></a>.

## API and events

OpenAPI paths for this module:
<a href="../reference/openapi.md#shared-services-shared">OpenAPI index — shared</a>.

Event contracts: <a href="../reference/events.md">stub until published</a>.

## Maturity notes

Shared identity and notification repositories are present under
`firefly-oss`. Identity-provider choices and notification channels are
adapter concerns; see <a href="../integrate/adapters.md">Integrate</a>.

## Related modules

- <a href="customers.md">Customers and relationships</a>
- <a href="onboarding.md">Onboarding and verification</a>
- <a href="catalog.md">Business modules catalogue</a>
