# Scoring and decisions

The scoring domain has two separate public boundaries: an evidence-backed scoring workflow and a generic rules decision API. Persisting a calculated result does not approve credit. A shared decision API does not establish that one credit threshold is suitable for insurance, payments, accounts, or claims.

## Evidence-backed scoring workflow

`POST /api/v1/scoring/requests` dispatches a typed command through Jafly CommandBus to `ExecuteScoringProcessSaga`. The saga calls the bureau SDK, verifies the returned request binding and evidence, and calls the core SDK for an atomic evaluation. Core checks the calculation against its own persisted COMPLETE report and the explicitly selected model before creating the evaluation claim, case, bureau projection, request, and result together.

Enable and connect the two managed sandboxes as described in [Data and external systems](data.md). Create the scoring model through the core model API: name `sandbox-bureau-index`, version `1.0.0`, status `TESTING`, approach `RULES_BASED`. Pass its actual returned UUID as `scoringModelId`; there is no implicit latest-model fallback. Supply a stable action ID, tenant/party/application context, consent-evidence reference, purpose, scenario, and `synthetic=true` using the current typed request.

| HTTP / workflow state | Meaning and next action |
| --- | --- |
| 200 / `COMPLETED` | Synthetic calculation persisted; consume its `MANUAL_REVIEW` result and actual resource IDs |
| 202 / `PENDING`, `UNKNOWN`, `UNAVAILABLE` | Inquiry retained; no numerical result or approval. Recover UNKNOWN through the bureau API before retrying the same scoring action |
| 422 / `NO_HIT`, `FROZEN`, `REJECTED` | Explicit report outcome prevents calculation; follow the appropriate business exception |
| 422 / `FAILED` | Workflow or evaluation failed; retain correlation IDs and inspect the owned state |
| 400 | Required request context is invalid or missing |

The example report's score 720 on range 300–850 produces the explicit synthetic index 0.7636. This is neither probability of default nor a production underwriting model. Repeating identical evaluated intent returns the original result IDs; changed intent conflicts. Provider evidence is retained when the saga fails rather than deleted as compensation.

The [scoring API contract](../api/services/domain-lending-credit-scoring.md) lists the actual typed response and read operations. The repository's `docs/evidence-backed-scoring.md` explains configuration, request examples, status handling, recovery, and deployment limits. Experience scoring-status currently derives from origination decision records; it still needs integration with this managed workflow.

## Generic DecisionPort

`DecisionPort` is implemented by `DecisionService` behind `POST /api/v1/decisions`. Its response vocabulary is `APPROVE`, `REFER`, or `DECLINE`, with reason codes. `journeyStep` declares `ONBOARDING`, `LENDING_APPLICATION`, `INSURANCE_QUOTE`, `INSURANCE_BIND`, or `CLAIM`; that enumeration alone does not establish complete policy for those businesses.

The service removes caller-supplied `creditScore` and `highRisk` attributes before assembling facts. Only the configured `CreditReportPort` supplies those fields. The default `SandboxCreditReportAdapter` returns no report. Missing facts follow the configured referral path; an unavailable provider propagates an error without falling back to a caller's favorable score. A synthetic report that would produce APPROVE is converted to REFER with `SYNTHETIC_REPORT_REQUIRES_MANUAL_REVIEW`.

`REFER` belongs to this generic rules vocabulary. `MANUAL_REVIEW` belongs to the persisted scoring-result vocabulary. Both require an authorized next step; neither is a loan approval.

## Parameterize a project ruleset

`JaflyRulesEngineAdapter` uses Jafly's `ASTRulesEvaluationEngine`. The default resource is `rulesets/openplatform-journey.yaml`. `DECISION_RULESET` selects the configured ruleset name, while `DECISION_RULESETS_DIRECTORY` supplies the external ruleset directory. Preserve the declared input and output contract: the evaluator must return a recognized decision and reason codes; an empty or unknown decision fails instead of implying approval.

Copy the sample to the project-owned rules directory, choose its explicit name, and configure both properties in that deployment. Exercise missing facts, provider failure, referral, decline, and synthetic non-approval before enabling it for a journey. A rule-file change can alter an outcome without changing the engine, so retain the deployed file/version with the business decision and apply project governance. This configuration does not implement trusted persisted-report lookup, verified consent, production model calibration, or delegated approval authority; those remain required integrations.

Use [Jafly architecture](../jafly.md), [lending journeys](../journeys/lending.md), and [operating guidance](../operations/index.md) to connect the rule boundary to its business process.
