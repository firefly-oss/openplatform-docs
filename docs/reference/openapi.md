# OpenAPI index

Known OpenAPI files under `firefly-oss`, grouped by OpenPlatform module
id. Prefer the `*-sdk/src/main/resources/openapi.yml` path when both that
file and `api-spec/openapi.yml` exist (they are commonly kept in sync for
SDK generation).

**Status meanings**

| Status | Meaning |
|--------|---------|
| Spec in repo | File present; treat it as the contract for that service |
| No published OpenAPI yet | Repository exists; no checked-in OpenAPI found in the usual SDK paths |
| Sample / mock | Illustrative or mock surface — not the production module contract |

GitHub organisation: <https://github.com/firefly-oss>

## Customers (`customers`)

Module page: <a href="../modules/customers.md">customers</a>

| Repository | OpenAPI | Status |
|------------|---------|--------|
| <a href="https://github.com/firefly-oss/core-common-customer-mgmt"><code>core-common-customer-mgmt</code></a> | <a href="https://github.com/firefly-oss/core-common-customer-mgmt/blob/main/core-common-customer-mgmt-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |
| <a href="https://github.com/firefly-oss/domain-customer-people"><code>domain-customer-people</code></a> | <a href="https://github.com/firefly-oss/domain-customer-people/blob/main/domain-customer-people-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |

## Onboarding (`onboarding`)

Module page: <a href="../modules/onboarding.md">onboarding</a>

| Repository | OpenAPI | Status |
|------------|---------|--------|
| <a href="https://github.com/firefly-oss/exp-onboarding"><code>exp-onboarding</code></a> | <a href="https://github.com/firefly-oss/exp-onboarding/blob/main/exp-onboarding-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |
| <a href="https://github.com/firefly-oss/domain-customer-kyc-kyb"><code>domain-customer-kyc-kyb</code></a> | <a href="https://github.com/firefly-oss/domain-customer-kyc-kyb/blob/main/domain-customer-kyc-kyb-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |
| <a href="https://github.com/firefly-oss/core-common-kycb-mgmt"><code>core-common-kycb-mgmt</code></a> | <a href="https://github.com/firefly-oss/core-common-kycb-mgmt/blob/main/core-common-kycb-mgmt-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |

## Products (`products`)

Module page: <a href="../modules/products.md">products</a>

| Repository | OpenAPI | Status |
|------------|---------|--------|
| <a href="https://github.com/firefly-oss/core-common-product-mgmt"><code>core-common-product-mgmt</code></a> | <a href="https://github.com/firefly-oss/core-common-product-mgmt/blob/main/core-common-product-mgmt-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |
| <a href="https://github.com/firefly-oss/domain-product-catalog"><code>domain-product-catalog</code></a> | <a href="https://github.com/firefly-oss/domain-product-catalog/blob/main/domain-product-catalog-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |
| <a href="https://github.com/firefly-oss/domain-core-pricing-engine"><code>domain-core-pricing-engine</code></a> | <a href="https://github.com/firefly-oss/domain-core-pricing-engine/blob/main/domain-core-pricing-engine-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |
| <a href="https://github.com/firefly-oss/domain-product-pricing"><code>domain-product-pricing</code></a> | <a href="https://github.com/firefly-oss/domain-product-pricing/blob/main/domain-product-pricing-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |
| <a href="https://github.com/firefly-oss/core-common-pricing-mgmt"><code>core-common-pricing-mgmt</code></a> | — | No published OpenAPI yet |

## Agreements (`agreements`)

Module page: <a href="../modules/agreements.md">agreements</a>

| Repository | OpenAPI | Status |
|------------|---------|--------|
| <a href="https://github.com/firefly-oss/core-common-contract-mgmt"><code>core-common-contract-mgmt</code></a> | <a href="https://github.com/firefly-oss/core-common-contract-mgmt/blob/main/core-common-contract-mgmt-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |
| <a href="https://github.com/firefly-oss/domain-common-contracts"><code>domain-common-contracts</code></a> | <a href="https://github.com/firefly-oss/domain-common-contracts/blob/main/domain-common-contracts-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |
| <a href="https://github.com/firefly-oss/core-common-document-mgmt"><code>core-common-document-mgmt</code></a> | <a href="https://github.com/firefly-oss/core-common-document-mgmt/blob/main/core-common-document-mgmt-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |

## Distribution (`distribution`)

Module page: <a href="../modules/distribution.md">distribution</a>

| Repository | OpenAPI | Status |
|------------|---------|--------|
| <a href="https://github.com/firefly-oss/core-common-distributor-mgmt"><code>core-common-distributor-mgmt</code></a> | <a href="https://github.com/firefly-oss/core-common-distributor-mgmt/blob/main/core-common-distributor-mgmt-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |
| <a href="https://github.com/firefly-oss/domain-distributor-branding"><code>domain-distributor-branding</code></a> | <a href="https://github.com/firefly-oss/domain-distributor-branding/blob/main/domain-distributor-branding-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |
| <a href="https://github.com/firefly-oss/domain-distributor-catalog"><code>domain-distributor-catalog</code></a> | <a href="https://github.com/firefly-oss/domain-distributor-catalog/blob/main/domain-distributor-catalog-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |
| <a href="https://github.com/firefly-oss/exp-distributor"><code>exp-distributor</code></a> | <a href="https://github.com/firefly-oss/exp-distributor/blob/main/exp-distributor-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |

## Accounts (`accounts`)

Module page: <a href="../modules/accounts.md">accounts</a>

| Repository | OpenAPI | Status |
|------------|---------|--------|
| <a href="https://github.com/firefly-oss/core-banking-accounts"><code>core-banking-accounts</code></a> | <a href="https://github.com/firefly-oss/core-banking-accounts/blob/main/core-banking-accounts-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |
| <a href="https://github.com/firefly-oss/domain-banking-accounts"><code>domain-banking-accounts</code></a> | <a href="https://github.com/firefly-oss/domain-banking-accounts/blob/main/domain-banking-accounts-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |
| <a href="https://github.com/firefly-oss/core-banking-ledger"><code>core-banking-ledger</code></a> | <a href="https://github.com/firefly-oss/core-banking-ledger/blob/main/core-banking-ledger-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |
| <a href="https://github.com/firefly-oss/core-common-accounting-gl"><code>core-common-accounting-gl</code></a> | <a href="https://github.com/firefly-oss/core-common-accounting-gl/blob/main/core-common-accounting-gl-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |
| <a href="https://github.com/firefly-oss/exp-accounts"><code>exp-accounts</code></a> | <a href="https://github.com/firefly-oss/exp-accounts/blob/main/exp-accounts-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |

## Payments (`payments`)

Module page: <a href="../modules/payments.md">payments</a>

| Repository | OpenAPI | Status |
|------------|---------|--------|
| <a href="https://github.com/firefly-oss/core-banking-payments"><code>core-banking-payments</code></a> | <a href="https://github.com/firefly-oss/core-banking-payments/blob/main/core-banking-payments-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |
| <a href="https://github.com/firefly-oss/core-banking-cards"><code>core-banking-cards</code></a> | <a href="https://github.com/firefly-oss/core-banking-cards/blob/main/core-banking-cards-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |
| <a href="https://github.com/firefly-oss/domain-banking-cards"><code>domain-banking-cards</code></a> | <a href="https://github.com/firefly-oss/domain-banking-cards/blob/main/domain-banking-cards-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |
| <a href="https://github.com/firefly-oss/core-banking-psdx"><code>core-banking-psdx</code></a> | <a href="https://github.com/firefly-oss/core-banking-psdx/blob/main/core-banking-psdx-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |
| <a href="https://github.com/firefly-oss/exp-cards"><code>exp-cards</code></a> | <a href="https://github.com/firefly-oss/exp-cards/blob/main/exp-cards-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |
| <a href="https://github.com/firefly-oss/library-rails"><code>library-rails</code></a> | — | No published OpenAPI yet (library interfaces) |
| <a href="https://github.com/firefly-oss/library-psps"><code>library-psps</code></a> | — | No published OpenAPI yet (library interfaces) |
| <a href="https://github.com/firefly-oss/core-payments-engine"><code>core-payments-engine</code></a> | — | No published OpenAPI yet |

## Lending (`lending`)

Module page: <a href="../modules/lending.md">lending</a>

| Repository | OpenAPI | Status |
|------------|---------|--------|
| <a href="https://github.com/firefly-oss/core-lending-loan-origination"><code>core-lending-loan-origination</code></a> | <a href="https://github.com/firefly-oss/core-lending-loan-origination/blob/main/core-lending-loan-origination-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |
| <a href="https://github.com/firefly-oss/domain-lending-loan-origination"><code>domain-lending-loan-origination</code></a> | <a href="https://github.com/firefly-oss/domain-lending-loan-origination/blob/main/domain-lending-loan-origination-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |
| <a href="https://github.com/firefly-oss/core-lending-loan-servicing"><code>core-lending-loan-servicing</code></a> | <a href="https://github.com/firefly-oss/core-lending-loan-servicing/blob/main/core-lending-loan-servicing-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |
| <a href="https://github.com/firefly-oss/domain-lending-loan-servicing"><code>domain-lending-loan-servicing</code></a> | <a href="https://github.com/firefly-oss/domain-lending-loan-servicing/blob/main/domain-lending-loan-servicing-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |
| <a href="https://github.com/firefly-oss/core-lending-collateral-management"><code>core-lending-collateral-management</code></a> | <a href="https://github.com/firefly-oss/core-lending-collateral-management/blob/main/core-lending-collateral-management-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |
| <a href="https://github.com/firefly-oss/core-lending-delinquency-collections"><code>core-lending-delinquency-collections</code></a> | <a href="https://github.com/firefly-oss/core-lending-delinquency-collections/blob/main/core-lending-delinquency-collections-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |
| <a href="https://github.com/firefly-oss/core-lending-personal-loans"><code>core-lending-personal-loans</code></a> | <a href="https://github.com/firefly-oss/core-lending-personal-loans/blob/main/core-lending-personal-loans-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |
| <a href="https://github.com/firefly-oss/domain-lending-personal-loans"><code>domain-lending-personal-loans</code></a> | <a href="https://github.com/firefly-oss/domain-lending-personal-loans/blob/main/domain-lending-personal-loans-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |
| <a href="https://github.com/firefly-oss/core-lending-mortgage"><code>core-lending-mortgage</code></a> | <a href="https://github.com/firefly-oss/core-lending-mortgage/blob/main/core-lending-mortgages-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo (note: SDK artifact uses <code>mortgages</code>) |
| <a href="https://github.com/firefly-oss/core-lending-asset-finance"><code>core-lending-asset-finance</code></a> | <a href="https://github.com/firefly-oss/core-lending-asset-finance/blob/main/core-lending-asset-finance-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |
| <a href="https://github.com/firefly-oss/domain-lending-asset-finance"><code>domain-lending-asset-finance</code></a> | <a href="https://github.com/firefly-oss/domain-lending-asset-finance/blob/main/domain-lending-asset-finance-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |
| <a href="https://github.com/firefly-oss/core-lending-credit-cards"><code>core-lending-credit-cards</code></a> | <a href="https://github.com/firefly-oss/core-lending-credit-cards/blob/main/core-lending-credit-cards-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |
| <a href="https://github.com/firefly-oss/core-lending-supply-chain-finance"><code>core-lending-supply-chain-finance</code></a> | <a href="https://github.com/firefly-oss/core-lending-supply-chain-finance/blob/main/core-lending-supply-chain-finance-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |
| <a href="https://github.com/firefly-oss/exp-lending"><code>exp-lending</code></a> | <a href="https://github.com/firefly-oss/exp-lending/blob/main/exp-lending-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |
| <a href="https://github.com/firefly-oss/firefly-lending"><code>firefly-lending</code></a> | <a href="https://github.com/firefly-oss/firefly-lending/blob/main/openapi/lending.v1.yaml"><code>openapi/lending.v1.yaml</code></a> | Sample / mock (title marks it as mock) |

## Risk (`risk`)

Module page: <a href="../modules/risk.md">risk</a>

| Repository | OpenAPI | Status |
|------------|---------|--------|
| <a href="https://github.com/firefly-oss/core-lending-credit-scoring"><code>core-lending-credit-scoring</code></a> | <a href="https://github.com/firefly-oss/core-lending-credit-scoring/blob/main/core-lending-credit-scoring-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |
| <a href="https://github.com/firefly-oss/domain-lending-credit-scoring"><code>domain-lending-credit-scoring</code></a> | <a href="https://github.com/firefly-oss/domain-lending-credit-scoring/blob/main/domain-lending-credit-scoring-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |
| <a href="https://github.com/firefly-oss/core-lending-provisioning-risk"><code>core-lending-provisioning-risk</code></a> | <a href="https://github.com/firefly-oss/core-lending-provisioning-risk/blob/main/core-lending-provisioning-risk-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |
| <a href="https://github.com/firefly-oss/core-lending-regulatory-compliance"><code>core-lending-regulatory-compliance</code></a> | <a href="https://github.com/firefly-oss/core-lending-regulatory-compliance/blob/main/core-lending-regulatory-compliance-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |
| <a href="https://github.com/firefly-oss/domain-data-credit-bureaus"><code>domain-data-credit-bureaus</code></a> | — | No published OpenAPI yet |

## Shared services (`shared`)

Module page: <a href="../modules/shared.md">shared</a>

| Repository | OpenAPI | Status |
|------------|---------|--------|
| <a href="https://github.com/firefly-oss/core-common-user-mgmt"><code>core-common-user-mgmt</code></a> | <a href="https://github.com/firefly-oss/core-common-user-mgmt/blob/main/core-common-user-mgmt-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |
| <a href="https://github.com/firefly-oss/domain-core-security-center"><code>domain-core-security-center</code></a> | <a href="https://github.com/firefly-oss/domain-core-security-center/blob/main/domain-core-security-center-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |
| <a href="https://github.com/firefly-oss/core-common-security-vault"><code>core-common-security-vault</code></a> | <a href="https://github.com/firefly-oss/core-common-security-vault/blob/main/core-common-security-vault-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |
| <a href="https://github.com/firefly-oss/core-common-sca-mgmt"><code>core-common-sca-mgmt</code></a> | <a href="https://github.com/firefly-oss/core-common-sca-mgmt/blob/main/core-common-sca-mgmt-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |
| <a href="https://github.com/firefly-oss/domain-common-sca"><code>domain-common-sca</code></a> | <a href="https://github.com/firefly-oss/domain-common-sca/blob/main/domain-common-sca-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |
| <a href="https://github.com/firefly-oss/exp-security"><code>exp-security</code></a> | <a href="https://github.com/firefly-oss/exp-security/blob/main/exp-security-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |
| <a href="https://github.com/firefly-oss/core-common-notification-services"><code>core-common-notification-services</code></a> | <a href="https://github.com/firefly-oss/core-common-notification-services/blob/main/core-common-notification-services-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |
| <a href="https://github.com/firefly-oss/domain-common-notifications"><code>domain-common-notifications</code></a> | <a href="https://github.com/firefly-oss/domain-common-notifications/blob/main/domain-common-notifications-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |
| <a href="https://github.com/firefly-oss/exp-notifications"><code>exp-notifications</code></a> | <a href="https://github.com/firefly-oss/exp-notifications/blob/main/exp-notifications-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |
| <a href="https://github.com/firefly-oss/core-common-reference-master-data"><code>core-common-reference-master-data</code></a> | <a href="https://github.com/firefly-oss/core-common-reference-master-data/blob/main/core-common-reference-master-data-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |
| <a href="https://github.com/firefly-oss/core-common-org-mgmt"><code>core-common-org-mgmt</code></a> | <a href="https://github.com/firefly-oss/core-common-org-mgmt/blob/main/core-common-org-mgmt-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |
| <a href="https://github.com/firefly-oss/core-common-config-mgmt"><code>core-common-config-mgmt</code></a> | <a href="https://github.com/firefly-oss/core-common-config-mgmt/blob/main/core-common-config-mgmt-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |
| <a href="https://github.com/firefly-oss/domain-core-configuration"><code>domain-core-configuration</code></a> | <a href="https://github.com/firefly-oss/domain-core-configuration/blob/main/domain-core-configuration-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |
| <a href="https://github.com/firefly-oss/exp-profile"><code>exp-profile</code></a> | <a href="https://github.com/firefly-oss/exp-profile/blob/main/exp-profile-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |
| <a href="https://github.com/firefly-oss/exp-channel-management"><code>exp-channel-management</code></a> | <a href="https://github.com/firefly-oss/exp-channel-management/blob/main/exp-channel-management-sdk/src/main/resources/openapi.yml"><code>…/openapi.yml</code></a> | Spec in repo |
| <a href="https://github.com/firefly-oss/app-authenticator"><code>app-authenticator</code></a> | — | No published OpenAPI yet |

## Insurance development areas

Insurance-specific OpenAPI surfaces are **not published** as dedicated
`firefly-oss` repositories yet. Foundation APIs live under the business
modules above. See <a href="../insurance/index.md">Insurance development
areas</a>.

## Keeping this index honest

When you add or move a spec:

1. Update the row for that repository here.
2. Prefer linking the file that SDK generation uses.
3. Mark sample or mock documents clearly (do not present them as the
   production contract).
