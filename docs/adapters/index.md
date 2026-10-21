# Replace an adapter

<p class="ff-steward">Stewarded by the Firefly Software Foundation. <a href="mailto:dev@fireflysoftware.io">dev@fireflysoftware.io</a></p>


Replace data and adapters. Do not fork the rules engine, and do not edit a core's tables from another service.

## Ruleset

`JaflyRulesEngineAdapter` reads `rulesets/openplatform-journey.yaml` from the classpath of `domain-lending-credit-scoring`. Outcomes are `APPROVE`, `REFER`, and `DECLINE`, with reason codes. Thresholds live in that file (`MIN_CREDIT_SCORE`), not in Java.

An installer either replaces that file or sets `firefly.decision.rulesets-directory` to a directory that contains `{ruleset}.yaml`. The ruleset name is `firefly.decision.ruleset`, default `openplatform-journey`.

Replace `JaflyRulesEngineAdapter` only when a deployment must call stored rules through Jafly `RulesEvaluationService` instead of a file. The class calls `org.fireflyframework.rules.core.dsl.evaluation.ASTRulesEvaluationEngine`. The Maven artifact is `org.fireflyframework:fireflyframework-rule-engine-core`, versioned by `org.fireflyframework:fireflyframework-bom` `26.10.20`.

## Credit report

`CreditReportPort` is implemented by `SandboxCreditReportAdapter` when `firefly.decision.credit-report` is `sandbox` or unset. The class returns one fixed report and does not open a network connection.

Set `firefly.decision.credit-report` to another value only after you register your own `CreditReportPort`. `domain-data-credit-bureaus` does not publish an HTTP API this decision service calls. The sandbox value does not require that process.

## Decision HTTP

`DecisionController` adapts HTTP onto `DecisionPort` (`io.fireflysoftware.domain.lending.creditscoring.core.decision.DecisionPort`).

`POST /api/v1/decisions`

The body is `partyId`, optional `productId`, `journeyStep`, and `attributes`. Experience modules on main do not contain their own `DecisionPort`. They are expected to call this endpoint, or the same fields, when that wiring is published.

## Identity provider

The published security center does not ship a sandbox identity class. On main, both `firefly.idp.provider` and `firefly.security-center.idp.provider` are `cognito`. Keycloak settings sit under `firefly.security-center.idp.keycloak`.

The Keycloak client is `org.fireflyframework:fireflyframework-security-idp-keycloak`, BOM `26.10.20`. `domain-core-security-center` depends on it. A journey does not call Keycloak. Changing the provider property does not change `POST /api/v1/decisions`.

## Access policy

No access-policy file is on the published main of `domain-core-security-center`. Do not configure a sandbox access adapter until that code is on main. When `AccessPort` is published, it belongs in front of the decision call. A denial must not call the domain.

## Payments

`library-psps` is the provider port. `library-rails` is the rail port. Callers depend on the port. The deployment supplies the adapter. Payment rows, where they exist, are `core-banking-payments`, which has no domain orchestrator.
