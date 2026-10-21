# Jafly is the foundation

OpenPlatform is implemented on Jafly. Jafly is the framework under `org.fireflyframework`. OpenPlatform does not ship a second copy of that framework, and it does not fork the rules engine or the identity adapters.

`io.fireflysoftware:firefly-parent` at train **26.10.3** extends `org.fireflyframework:fireflyframework-parent` **26.10.20** and imports `org.fireflyframework:fireflyframework-bom` **26.10.20**. Every OpenPlatform module inherits that pin. The published OpenPlatform train stays 26.10.3.

Source: `firefly-parent` `pom.xml` on main.

Jafly's own documentation is [fireflyframework-jafly](https://fireflyframework.github.io/fireflyframework-jafly/).

## Rules

The rules engine is Jafly's, not an OpenPlatform engine.

`domain-lending-credit-scoring` depends on `org.fireflyframework:fireflyframework-rule-engine-core`. `JaflyRulesEngineAdapter` evaluates a ruleset with `org.fireflyframework.rules.core.dsl.evaluation.ASTRulesEvaluationEngine`.

`DecisionPort` is the inbound port. Its HTTP adapter is `POST /api/v1/decisions` on that same service. The outcome is `APPROVE`, `REFER`, or `DECLINE`, plus reason codes.

The sample ruleset is `rulesets/openplatform-journey.yaml` on the classpath of `domain-lending-credit-scoring-core`. An installer replaces that file, or points `firefly.decision.rulesets-directory` at a directory of `{ruleset}.yaml` files. The installer does not replace `ASTRulesEvaluationEngine`.

The call, the sandbox credit report, and the properties are on the [quickstart](quickstart.md). How to swap the file is on [Replace an adapter](adapters/index.md).

## Identity

Identity is also Jafly's. `domain-core-security-center` declares these modules, and the versions come from the same BOM:

| Artifact | Role in this train |
| --- | --- |
| `org.fireflyframework:fireflyframework-security-idp` | Shared IDP port |
| `org.fireflyframework:fireflyframework-security-idp-keycloak` | Keycloak, the reference provider |
| `org.fireflyframework:fireflyframework-security-idp-aws-cognito` | Cognito provider |
| `org.fireflyframework:fireflyframework-security-idp-internal-db` | Internal database provider |

Experience services do not declare the Keycloak artifact. A journey does not open a Keycloak client. The security center is the service that selects the provider. On the published main, `firefly.idp.provider` and `firefly.security-center.idp.provider` are both `cognito`.

`SandboxIdentityAdapter` is in the security-center working tree. It returns the sample subject and does not start an identity-provider process. That class is not in the published main commit, so the published service does not select it yet. The [quickstart](quickstart.md) does not ask you to call it.

## Libraries the modules declare

Two more Jafly artifacts are declared directly by OpenPlatform modules. Their versions come from `fireflyframework-bom` 26.10.20.

- `org.fireflyframework:fireflyframework-web` is on the web modules.
- `org.fireflyframework:fireflyframework-client` is declared by `domain-core-configuration`, `domain-data-business-intelligence`, and `domain-data-credit-bureaus`.

OpenPlatform repositories do not declare an artifact named `fireflyframework-data`. This page does not list one.

The parent import is the foundation. Individual modules then declare the Jafly libraries they call. The [architecture](layers/index.md) says how a business domain sits on top of that foundation.
