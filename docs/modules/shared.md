# Identity and shared services

**Module id:** `shared`

Access, authentication, notifications, organisation and configuration, and reference data reused across applications. Business modules should depend on these services instead of embedding separate identity stores.

This id is part of the public OpenPlatform module set on <https://fireflysoftware.io/openplatform/modules/> even though it is not one of the nine business-module tiles drawn in architecture figures.

## Why this module exists

Every journey needs users, sessions, notifications, and reference codes. Duplicating that per business module creates inconsistent security and noisy ops. Shared services provide common access and communication; identity providers and notification channels remain adapter concerns.

## When to use it

Use `shared` for users, roles, sessions, SCA, notifications, organisation structure, configuration, channel init, and reference/master data.

Business modules should call these APIs rather than inventing parallel stores.

## Key concepts

| Concept | Meaning in this module |
|---------|------------------------|
| User / role | Access principals and permissions |
| SCA | Strong customer authentication challenges and results |
| Notification | Multi-channel message orchestration and preferences |
| Reference data | Shared codes and master data used across modules |
| Channel init | Branding and reference bootstrap for a channel |

## Layer map (repos that exist)

### Identity and security

| Repository | Layer | Role |
|------------|-------|------|
| [`core-common-user-mgmt`](https://github.com/firefly-oss/core-common-user-mgmt) | `core-*` | Users, roles, and permissions |
| [`core-common-security-vault`](https://github.com/firefly-oss/core-common-security-vault) | `core-*` | Secrets and vault-backed operations |
| [`core-common-sca-mgmt`](https://github.com/firefly-oss/core-common-sca-mgmt) | `core-*` | SCA persistence |
| [`domain-core-security-center`](https://github.com/firefly-oss/domain-core-security-center) | `domain-*` | Security-centre domain APIs |
| [`domain-common-sca`](https://github.com/firefly-oss/domain-common-sca) | `domain-*` | SCA domain orchestration |
| [`exp-security`](https://github.com/firefly-oss/exp-security) | `exp-*` | Auth, SCA, and session BFF |
| [`app-authenticator`](https://github.com/firefly-oss/app-authenticator) | app | Authenticator application (no published OpenAPI yet) |

### Notifications

| Repository | Layer | Role |
|------------|-------|------|
| [`core-common-notification-services`](https://github.com/firefly-oss/core-common-notification-services) | `core-*` | Email, SMS, and related send APIs |
| [`domain-common-notifications`](https://github.com/firefly-oss/domain-common-notifications) | `domain-*` | Notification domain orchestration |
| [`exp-notifications`](https://github.com/firefly-oss/exp-notifications) | `exp-*` | In-app notification centre BFF |

### Organisation, configuration, profile, channel

| Repository | Layer | Role |
|------------|-------|------|
| [`core-common-org-mgmt`](https://github.com/firefly-oss/core-common-org-mgmt) | `core-*` | Organisation structure |
| [`core-common-config-mgmt`](https://github.com/firefly-oss/core-common-config-mgmt) | `core-*` | Multi-tenant configuration |
| [`domain-core-configuration`](https://github.com/firefly-oss/domain-core-configuration) | `domain-*` | Configuration domain orchestration |
| [`core-common-reference-master-data`](https://github.com/firefly-oss/core-common-reference-master-data) | `core-*` | Reference and master data |
| [`exp-profile`](https://github.com/firefly-oss/exp-profile) | `exp-*` | Customer profile self-service BFF |
| [`exp-channel-management`](https://github.com/firefly-oss/exp-channel-management) | `exp-*` | Channel init, branding, reference bootstrap |

### Also present (supporting)

| Repository | Notes |
|------------|-------|
| [`core-common-modelhub`](https://github.com/firefly-oss/core-common-modelhub) | Dynamic data modelling platform (OpenAPI in SDK) |
| [`core-data-template`](https://github.com/firefly-oss/core-data-template) | Template service (no published OpenAPI yet) |
| [`domain-data-business-intelligence`](https://github.com/firefly-oss/domain-data-business-intelligence) | BI domain stub (no published OpenAPI yet) |
| [`library-common-batch`](https://github.com/firefly-oss/library-common-batch) | Batch scheduling utilities |

## How a typical call path looks

1. Experience security or notification APIs expose channel operations.
2. Domain security-centre and notification services coordinate behaviour.
3. Core user, SCA, notification, org, config, and reference-data services persist state.
4. Identity providers and notification channels are adapter concerns.

## How to start

1. Confirm the current pin on [Versioning and BOM](../versioning/bom.md) (**26.10.19** / Boot **4.1.1** / Java **25**).
2. Open the repositories in the layer map above and read each README and OpenAPI.
3. Follow related module pages for upstream identifiers and [adapters](../integrate/adapters.md) for outside systems.
4. Framework bootstrap: [Jafly docs](https://fireflyframework.github.io/fireflyframework-jafly/) (outbound).


## OpenAPI

See the full table under [OpenAPI — shared](../reference/openapi.md#shared-services-shared). Specs exist for the listed core/domain/exp services except where marked “no published OpenAPI yet” (`app-authenticator`, and some data templates).

## Events

[Stub until published](../reference/events.md).

## Maturity notes

Shared identity and notification repositories are present under `firefly-oss`. Identity-provider choices and notification channels are adapter concerns. Parent pin for new work: **26.10.19** / Boot **4.1.1** / Java **25**.

## Related modules

- [Customers and relationships](customers.md)
- [Onboarding and verification](onboarding.md)
- [Business modules catalogue](catalog.md)

## Next steps

See [Adapters](../integrate/adapters.md) for identity-provider boundaries. Most module pages assume shared identity is available to the journey.
