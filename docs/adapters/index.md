# Replace an adapter

<p class="ff-steward">Stewarded by the Firefly Software Foundation. <a href="mailto:dev@fireflysoftware.io">dev@fireflysoftware.io</a></p>

Each external edge is a port. The repository ships a sandbox adapter. A property switches the live adapter. One adapter per port per deployment. The choice lives in configuration. The saga does not import the vendor. Secrets stay out of the repository.

Jafly, from Firefly Framework, is the identity and the rules engine we ship. Sandbox adapters are the default. A future BPM replaces the domain-saga adapter behind the journey port. The journey stays.

## Ports an organization replaces

| Port | Sandbox class | Property | Live adapter calls |
| --- | --- | --- | --- |
| `IdentityPort` | `SandboxIdentityAdapter` | `firefly.security-center.identity.adapter` unset or `sandbox`. Set `keycloak`, `cognito`, or `internal-db`. | The matching Jafly `IdpAdapter` through `JaflyIdentityAdapter`. |
| `AccessPort` | `SandboxPolicyAccessAdapter` | `firefly.security-center.access.adapter` unset or `sandbox`. Set `session-grants`. | Role scopes on the party session, through `SessionGrantAccessAdapter`. |
| `CreditReportPort` | `SandboxCreditReportAdapter` | `firefly.decision.credit-report` unset or `sandbox`. Any other value selects the replacement bean. | The `CreditReportPort` the installer registers. The sandbox does not call a bureau. |
| `RulesEnginePort` | `JaflyRulesEngineAdapter` | `firefly.decision.ruleset` defaults to `openplatform-journey`. `firefly.decision.rulesets-directory` points at a directory of `{name}.yaml` files. | Jafly `ASTRulesEvaluationEngine`. The installer replaces the ruleset file, not the engine. |
| `BusinessParameterPort` | `SandboxBusinessParameterAdapter` | `firefly.configuration.parameters.adapter=core` | `ConfigMgmtBusinessParameterAdapter` calls `core-common-config-mgmt`. |
| `ReferenceCatalogPort` | `SandboxReferenceCatalogAdapter` | `firefly.reference-data.catalog.adapter=core` | `MastersReferenceCatalogAdapter` calls `core-common-reference-master-data`. |
| `CardJourneyParameterPort` | `SandboxCardJourneyParameterAdapter` | `firefly.cards.parameters.adapter=configuration` | `ConfigurationCardJourneyParameterAdapter` reads `domain-core-configuration`. |

`library-rails` and `library-psps` are the external payment edges. The ledger and the account core are ours. International credit transfer uses `library-rails` (SWIFT). A card uses `library-psps`.

## Sandbox defaults

When the property is unset, the classes above are the ones that run.

People in `sandbox-access-policy.json`, not accounts:

| Label | Actor id |
| --- | --- |
| `sample-journey` | `11111111-1111-4111-8111-111111111111` |
| `denied-actor` | `22222222-2222-4222-8222-222222222222` |
| `sample-employee` | `33333333-3333-4333-8333-333333333333` |

`SandboxCreditReportAdapter` returns score 640 and `highRisk` false.

`SandboxBusinessParameterAdapter` includes `journey.lending.min-credit-score` = 680.

`SandboxReferenceCatalogAdapter` publishes `CURRENCY`, `COUNTRY`, `TRANSFER_TYPE`, `RAIL_SCHEME`, `ACCOUNT_SPACE_TYPE`, and `PRODUCT_FAMILY`. In `PRODUCT_FAMILY`, deposits, payments, lending, and cards are regulated banking. Insurance is non-regulated.

`SandboxCardJourneyParameterAdapter` returns currency `EUR` and a tenure of 4 years, the same values as `journey.cards.default-currency` and `journey.cards.tenure-years`.
