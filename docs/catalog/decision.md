# Decision

<p class="ff-steward">Stewarded by the Firefly Software Foundation. <a href="mailto:dev@fireflysoftware.io">dev@fireflysoftware.io</a></p>


`domain-lending-credit-scoring` is the decision service for every journey, and it is also the scoring domain. It is listed with [Lending](lending.md).

## DecisionPort

`DecisionPort` is `io.fireflysoftware.domain.lending.creditscoring.core.decision.DecisionPort`. The HTTP adapter is `POST /api/v1/decisions` (`DecisionController`).

The response is `APPROVE`, `REFER`, or `DECLINE`, plus `reasonCodes`. `journeyStep` is `ONBOARDING`, `LENDING_APPLICATION`, `INSURANCE_QUOTE`, `INSURANCE_BIND`, or `CLAIM`.

The rules engine is Jafly's. `JaflyRulesEngineAdapter` calls `org.fireflyframework.rules.core.dsl.evaluation.ASTRulesEvaluationEngine` from `org.fireflyframework:fireflyframework-rule-engine-core`, BOM 26.10.20. The sample file is `rulesets/openplatform-journey.yaml`. An installer replaces that file, not the engine. The full pin is in [Jafly is the foundation](../jafly.md).

`REFER` is the outcome the sample ruleset returns when the score is missing or below `MIN_CREDIT_SCORE`. A decision with a significant effect on a person, or a decision outside delegated limits, still goes to a person with delegated authority. The engine does not remove that duty.

## What sits next to the port

`SandboxCreditReportAdapter` supplies the credit facts when the caller does not. It does not call the network. The older scoring saga in the same service still writes scoring cases to `core-lending-credit-scoring`. A stored score is not itself `APPROVE`, `REFER`, or `DECLINE`.

`domain-data-credit-bureaus` is not called by the sandbox adapter. See [Data and external systems](data.md).

`AccessPort` is a different check. It is not in the published main of the experience modules or the security center. See [Security and access](security.md) and the [quickstart](../quickstart.md).
