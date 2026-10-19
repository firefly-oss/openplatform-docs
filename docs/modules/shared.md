# Identity and shared services

**Module id:** `shared`

<p class="ff-lead">Users, messages, organisation, and the reference data every other module reuses.</p>

Business modules call these services. They do not keep a private user store or a private list of countries.

<figure class="ff-figure">
  <img src="/diagrams/module-shared.svg?v=20261019b" alt="Shared services in four groups: identity, notifications, organisation, and reference data" width="960" height="592" />
  <figcaption>Read top to bottom. Identity, then notifications, then organisation, then reference data. Repository names for each group are in the tables below.</figcaption>
</figure>

The picture names the four jobs. It does not list every repository. Those are below, including experience, domain, and core services, plus a few supporting repositories that are on disk but are not a fifth job.

<div class="ff-split" markdown="0">
  <section class="ff-panel">
    <h3>What it owns</h3>
    <ul>
      <li>Users, roles, permissions, and external identities</li>
      <li>Sessions, sign-in, and strong-authentication operations</li>
      <li>Credentials and encryption keys</li>
      <li>Notification send and preferences</li>
      <li>Banks, branches, calendars, and tenant configuration</li>
      <li>Reference data: countries, currencies, legal forms, and shared codes</li>
    </ul>
  </section>
  <section class="ff-panel">
    <h3>What it does not own</h3>
    <ul>
      <li>The customer party. That is <a href="/modules/customers/">customers</a>.</li>
      <li>KYC and KYB cases. Those are <a href="/modules/onboarding/">onboarding</a>.</li>
      <li>Identity-provider toolkits and notification-channel vendors. Those stay behind adapters.</li>
      <li>Product, agreement, and account records.</li>
    </ul>
  </section>
</div>

## Identity

| Repository | Layer | What it holds | OpenAPI |
|------------|-------|---------------|---------|
| [`exp-security`](https://github.com/firefly-oss/exp-security) | Experience | Channel security at `/api/v1/experience/security` | [openapi.yml](https://github.com/firefly-oss/exp-security/blob/main/exp-security-sdk/src/main/resources/openapi.yml) |
| [`domain-core-security-center`](https://github.com/firefly-oss/domain-core-security-center) | Domain | Sign-in, sessions, users, permission checks | [openapi.yml](https://github.com/firefly-oss/domain-core-security-center/blob/main/domain-core-security-center-sdk/src/main/resources/openapi.yml) |
| [`domain-common-sca`](https://github.com/firefly-oss/domain-common-sca) | Domain | Strong-authentication operations | [openapi.yml](https://github.com/firefly-oss/domain-common-sca/blob/main/domain-common-sca-sdk/src/main/resources/openapi.yml) |
| [`core-common-user-mgmt`](https://github.com/firefly-oss/core-common-user-mgmt) | Core | Users, roles, permissions, external identities | [openapi.yml](https://github.com/firefly-oss/core-common-user-mgmt/blob/main/core-common-user-mgmt-sdk/src/main/resources/openapi.yml) |
| [`core-common-sca-mgmt`](https://github.com/firefly-oss/core-common-sca-mgmt) | Core | Strong-authentication operation records | [openapi.yml](https://github.com/firefly-oss/core-common-sca-mgmt/blob/main/core-common-sca-mgmt-sdk/src/main/resources/openapi.yml) |
| [`core-common-security-vault`](https://github.com/firefly-oss/core-common-security-vault) | Core | Credentials, versions, and encryption keys | [openapi.yml](https://github.com/firefly-oss/core-common-security-vault/blob/main/core-common-security-vault-sdk/src/main/resources/openapi.yml) |
| [`app-authenticator`](https://github.com/firefly-oss/app-authenticator) | Application | Authenticator application | No published OpenAPI |

Sign-in and session queries live on `domain-core-security-center` (`/api/v1/auth/login`, logout, refresh, introspect, and session checks). The core stores the user. The experience service is the channel face.

## Notifications

| Repository | Layer | What it holds | OpenAPI |
|------------|-------|---------------|---------|
| [`exp-notifications`](https://github.com/firefly-oss/exp-notifications) | Experience | Notification centre at `/api/v1/experience/notifications` | [openapi.yml](https://github.com/firefly-oss/exp-notifications/blob/main/exp-notifications-sdk/src/main/resources/openapi.yml) |
| [`domain-common-notifications`](https://github.com/firefly-oss/domain-common-notifications) | Domain | Send, bulk send, and preferences | [openapi.yml](https://github.com/firefly-oss/domain-common-notifications/blob/main/domain-common-notifications-sdk/src/main/resources/openapi.yml) |
| [`core-common-notification-services`](https://github.com/firefly-oss/core-common-notification-services) | Core | Email, SMS, and push send | [openapi.yml](https://github.com/firefly-oss/core-common-notification-services/blob/main/core-common-notification-services-sdk/src/main/resources/openapi.yml) |

The domain decides what to send and stores preferences. The core performs the channel send. The vendor connection is an adapter concern, not a field on the business module.

## Organisation and reference data

| Repository | Layer | What it holds | OpenAPI |
|------------|-------|---------------|---------|
| [`exp-profile`](https://github.com/firefly-oss/exp-profile) | Experience | Profile self-service at `/api/v1/experience/profile` | [openapi.yml](https://github.com/firefly-oss/exp-profile/blob/main/exp-profile-sdk/src/main/resources/openapi.yml) |
| [`exp-channel-management`](https://github.com/firefly-oss/exp-channel-management) | Experience | Channel init at `/api/v1/experience/channel` | [openapi.yml](https://github.com/firefly-oss/exp-channel-management/blob/main/exp-channel-management-sdk/src/main/resources/openapi.yml) |
| [`domain-core-configuration`](https://github.com/firefly-oss/domain-core-configuration) | Domain | Tenant branding, languages, and lookup queries | [openapi.yml](https://github.com/firefly-oss/domain-core-configuration/blob/main/domain-core-configuration-sdk/src/main/resources/openapi.yml) |
| [`core-common-org-mgmt`](https://github.com/firefly-oss/core-common-org-mgmt) | Core | Banks, branches, divisions, regions, calendars | [openapi.yml](https://github.com/firefly-oss/core-common-org-mgmt/blob/main/core-common-org-mgmt-sdk/src/main/resources/openapi.yml) |
| [`core-common-config-mgmt`](https://github.com/firefly-oss/core-common-config-mgmt) | Core | Tenants, feature flags, provider parameters, webhooks | [openapi.yml](https://github.com/firefly-oss/core-common-config-mgmt/blob/main/core-common-config-mgmt-sdk/src/main/resources/openapi.yml) |
| [`core-common-reference-master-data`](https://github.com/firefly-oss/core-common-reference-master-data) | Core | Countries, currencies, legal forms, lookups, and related codes | [openapi.yml](https://github.com/firefly-oss/core-common-reference-master-data/blob/main/core-common-reference-master-data-sdk/src/main/resources/openapi.yml) |

Profile self-service is an experience over the party and the user. It is not a second customer core. Channel init loads branding and reference data for a channel. The product catalogue itself stays in [products](products.md).

## Also on disk

These repositories are in the tree. They are not a separate module id.

| Repository | What it is | OpenAPI |
|------------|------------|---------|
| [`core-common-modelhub`](https://github.com/firefly-oss/core-common-modelhub) | Dynamic entity definitions | [openapi.yml](https://github.com/firefly-oss/core-common-modelhub/blob/main/core-common-modelhub-sdk/src/main/resources/openapi.yml) |
| [`core-data-template`](https://github.com/firefly-oss/core-data-template) | Template application with sample job-control paths | [api-spec/openapi.yml](https://github.com/firefly-oss/core-data-template/blob/main/core-data-template-sdk/src/main/resources/api-spec/openapi.yml) |
| [`domain-data-business-intelligence`](https://github.com/firefly-oss/domain-data-business-intelligence) | Repository present. README is a title only. | No published OpenAPI |
| [`library-common-batch`](https://github.com/firefly-oss/library-common-batch) | Batch scheduling utilities. No HTTP contract. | No published OpenAPI |

The template spec is a sample for job control. It is not a business-module contract.

## How the pieces fit

A channel calls `exp-security`, `exp-notifications`, `exp-profile`, or `exp-channel-management`.

Identity commands and queries go through the security-centre domain into user, vault, and strong-authentication cores. Notification preferences and send requests go through the notification domain into the email, SMS, and push core. Organisation and reference data are core records that configuration queries read.

Full spec paths are also indexed under [OpenAPI, shared services](../reference/openapi.md#shared-services-shared).

## Related

- [Customers](customers.md) for the party, not the user
- [Onboarding](onboarding.md) for evidence cases
- [Adapters](../integrate/adapters.md) for identity providers and message channels
- [Catalogue](catalog.md)
