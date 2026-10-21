# Jafly

<p class="ff-steward">Stewarded by the Firefly Software Foundation. <a href="mailto:dev@fireflysoftware.io">dev@fireflysoftware.io</a></p>

Jafly is the Java framework in [Firefly Framework](https://fireflyframework.org). The Firefly Software Foundation maintains the frameworks. Firefly Software Solutions Inc. builds services on them. They stay two bodies. OpenPlatform does not ship a second copy of Jafly, and it does not fork the rules engine or the identity adapters.

On the framework site, Jafly is the layer between Spring Boot and the business rules. Requests stay on Spring Boot and WebFlux. A service adds the modules it needs: command and query buses, orchestration for compensating steps and for try-confirm-cancel, reactive transactions, and observability. The framework release described there uses Java 25 and Spring Boot 4.1.1. The team still owns the business rules, who may act, and what a failed step undoes. The framework does not make a command exactly once.

OpenPlatform 26.10.3 sits on that foundation. `firefly-parent` 26.10.3 extends `org.fireflyframework:fireflyframework-parent` 26.10.20 and imports `org.fireflyframework:fireflyframework-bom` 26.10.20. Every OpenPlatform module inherits that pin. The module guide is at [fireflyframework.org/frameworks/java](https://fireflyframework.org/frameworks/java/).

## What Ada meets

Ada never calls Jafly by name. She signs in, and she sometimes waits for a decision. Both of those happen in OpenPlatform services that use Jafly underneath.

Sign-in is the security center, port 8085. With the identity adapter left at `sandbox`, the name `sample-journey` returns actor `11111111-1111-4111-8111-111111111111` and provider `sandbox`. The password is ignored. Keycloak, Cognito, and an internal user store do not start. An installer sets `firefly.security-center.identity.adapter` to `keycloak`, `cognito`, or `internal-db`. Those three are Jafly identity adapters. The journey still does not open an identity-provider client. The security center selects the provider.

A decision is the credit-scoring service, port 8042. Ada's journey does not send a score. The sandbox report supplies 640 and says she is not high risk. The sample rules file is named `openplatform-journey`. Its threshold is 680. She sees `REFER` and `CREDIT_SCORE_BELOW_THRESHOLD`. A referral does not stop her. If the request says high risk, she sees `DECLINE` and `HIGH_RISK`, and the journey does not write the record. An installer replaces the rules file, or points `firefly.decision.rulesets-directory` at a directory of files. The installer does not replace the engine that reads the file.

<div class="ff-journey" markdown="0">
<img src="assets/journeys/jafly.svg" alt="Sequence: Ada signs in and the sandbox returns her actor id. A journey asks for a decision without a score. The report supplies 640. The rules refer her. High risk would decline and stop before any record is written.">
</div>

Payments use the same foundation for a different pause. Try reserves the money. Confirm is a later call, after she returns the numeric code. The word sandbox is not that code. The payments chapter tells that story.

## What a refusal means for her

An unknown username is not a subject. She sees HTTP 404. A body with neither username nor actor id is HTTP 400. Nothing is written.

A decline stops the journey before the domain write. She does not get a party, a quote, a policy, a claim, or a loan application from that call. A referral is not a refusal. She continues, and the record is stored.

If an installer has selected a live identity provider and that process is not running, sign-in fails in that provider. The sandbox setting does not require it.

## Where this is stored

The sandbox identity answer is not a row in an identity-provider database. The decision outcome is the rules file plus the report. The business record, when the outcome is not a decline, is written by the journey's own domain into that domain's core. Jafly does not own those tables.

## Reference

| Piece | Where it sits |
| --- | --- |
| Parent | `io.fireflysoftware:firefly-parent` 26.10.3 |
| Framework parent and bill of materials | `org.fireflyframework` 26.10.20 |
| Sign-in | `POST /api/v1/identity/subjects` |
| Decision | `POST /api/v1/decisions` |
| Outcomes | `APPROVE`, `REFER`, `DECLINE` |
| Rules file | `rulesets/openplatform-journey.yaml` |
| Identity property | `firefly.security-center.identity.adapter` |
| Credit report property | `firefly.decision.credit-report`, default `sandbox` |

The type names are `DecisionPort`, `JaflyRulesEngineAdapter`, and `SandboxIdentityAdapter`. They are the footnote.
