# Quickstart

The shortest published path is one decision call. It lives in `domain-lending-credit-scoring` on main (`7f378f8`). Experience modules on main do not contain `DecisionPort` or `AccessPort` classes. You call the domain HTTP API directly.

## What you start

From a checkout of [domain-lending-credit-scoring](https://github.com/fireflysoftwaresolutions/domain-lending-credit-scoring):

```sh
mvn spring-boot:run -pl domain-lending-credit-scoring-web
```

The process listens on port `8042`. The published module notes also expect Kafka on `localhost:9092`, and `core-lending-credit-scoring` on port `8085`, because the scoring saga uses them. The decision call below does not.

## The call

`POST /api/v1/decisions`

```json
{
  "partyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "productId": "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
  "journeyStep": "ONBOARDING",
  "attributes": {
    "creditScore": 720,
    "highRisk": false
  }
}
```

`journeyStep` is `ONBOARDING`, `LENDING_APPLICATION`, `INSURANCE_QUOTE`, `INSURANCE_BIND`, or `CLAIM`. The response is `outcome` (`APPROVE`, `REFER`, or `DECLINE`) and `reasonCodes`.

`SandboxCreditReportAdapter` returns one fixed report and does not open a network connection. You do not start a credit bureau, and you do not start `domain-data-credit-bureaus`, for this call. You do not start Keycloak. The decision controller does not authenticate.

If you omit `creditScore`, the sandbox report score is `640`. The ruleset constant `MIN_CREDIT_SCORE` is `680`, so that request is `REFER` with `CREDIT_SCORE_BELOW_THRESHOLD`. `highRisk: true` is `DECLINE` with `HIGH_RISK`. A score of `680` or higher, with `highRisk` false, is `APPROVE`.

Source: `rulesets/openplatform-journey.yaml` and `SandboxCreditReportAdapter` on main.

## What is not in this quickstart

A sample access decision is not on main. `SandboxAccessAdapter`, `AccessPort` in the experience modules, and the security-center sandbox identity classes are local files, not the published branch. This page does not tell you to call them.

There is no staff terminal for employee identity or impersonation in the release list.

## What an installer changes later

| Piece | Published name | Default on main |
| --- | --- | --- |
| Credit report | `firefly.decision.credit-report` | `sandbox`, which selects `SandboxCreditReportAdapter` |
| Ruleset file | `rulesets/openplatform-journey.yaml` | Classpath ruleset `openplatform-journey` |
| Ruleset name | `firefly.decision.ruleset` | `openplatform-journey` |
| Ruleset directory | `firefly.decision.rulesets-directory` | Empty. Set it to a directory of `{ruleset}.yaml` files to replace the classpath file |
| Identity provider | `firefly.idp.provider` and `firefly.security-center.idp.provider` | `cognito` in the published security-center file |

The identity provider is not read by `POST /api/v1/decisions`. Keycloak, when a deployment uses it, is the Jafly module `org.fireflyframework:fireflyframework-security-idp-keycloak` from BOM `26.10.20`, already a dependency of `domain-core-security-center`. The journey does not open that client. See [Replace an adapter](adapters/index.md).
