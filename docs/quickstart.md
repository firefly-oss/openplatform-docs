# Quickstart

This is the sandbox for OpenPlatform, not a tour of one module. You run an experience journey. That journey asks who you are, whether you may touch a resource, and, when the step needs it, what decision to record. The domain saga writes the core. Jafly supplies the rules engine and the identity adapters. The sandbox starts neither Keycloak nor a credit bureau.

Train 26.10.3. Jafly BOM 26.10.20.

## What you are running

The call order on a journey that creates something is:

1. Experience journey. `exp-onboarding` for a person or a company. `exp-accounts` to open an account. `exp-lending` to start an application.
2. Access check. `AccessPort`, HTTP `POST /api/v1/access/checks` on `domain-core-security-center`. A denial does not call the domain.
3. Optional credit report. `CreditReportPort`. The published adapter is `SandboxCreditReportAdapter`. It returns one fixed report and does not open a network connection.
4. Decision. `DecisionPort`, HTTP `POST /api/v1/decisions` on `domain-lending-credit-scoring`. The outcome is `APPROVE`, `REFER`, or `DECLINE`, plus reason codes. A `DECLINE` does not continue into the saga.
5. Domain saga. `domain-customer-people` for the party, `domain-banking-accounts` for the account, `domain-lending-loan-origination` for the application.
6. Core. The system of record for that context. The domain calls the core SDK. The experience service does not.

There is no experience service for an insurance quote or a claim. Those domains exist. This chapter does not pretend an experience journey calls them.

## Jafly underneath

OpenPlatform does not own the rules engine and does not own Keycloak. Both are Jafly, `org.fireflyframework`, BOM 26.10.20, imported by `firefly-parent` 26.10.3.

The rules engine is `org.fireflyframework:fireflyframework-rule-engine-core`. `JaflyRulesEngineAdapter` calls `ASTRulesEvaluationEngine` and reads `rulesets/openplatform-journey.yaml`. The sandbox does not start a Jafly rule database.

Identity is `org.fireflyframework:fireflyframework-security-idp` and the Keycloak module `org.fireflyframework:fireflyframework-security-idp-keycloak`. With `firefly.security-center.identity.adapter` left at `sandbox`, `SandboxIdentityAdapter` answers `POST /api/v1/identity/subjects`. It ignores `password`. No Keycloak process is required. No bureau process is required.

More on why that split exists: [Jafly](jafly.md).

## Processes for this path

Each service is its own process. Ports below are the defaults in the published configuration files.

| Service | Port | Role in this chapter |
| --- | --- | --- |
| `domain-core-security-center` | 8085 | Identity and access |
| `domain-lending-credit-scoring` | 8042 | Decision and the sandbox credit report |
| `exp-onboarding` | 8096 | Person or company journey |
| `exp-accounts` | 8100 | Open an account |
| `exp-lending` | 8102 | Start a lending application |

The published security-center file expects Redis on `localhost:6379`. The published decision service expects Kafka on `localhost:9092` because other endpoints publish events. The three HTTP calls in the next section do not call Keycloak and do not call a bureau.

## One public path

Use the sample customer. The resource identifiers below are the ones in `sandbox-access-policy.json`. They are sample ids, not a production customer.

### 1. Say who is calling

`POST http://localhost:8085/api/v1/identity/subjects`

```json
{ "username": "sample-journey" }
```

HTTP 200:

```json
{
  "actorId": "11111111-1111-4111-8111-111111111111",
  "provider": "sandbox",
  "roles": []
}
```

An unknown username is HTTP 404. A body with neither `username` nor `actorId` is HTTP 400.

### 2. Ask whether that actor may create a party

`POST http://localhost:8085/api/v1/access/checks`

```json
{
  "actorId": "11111111-1111-4111-8111-111111111111",
  "action": "CREATE",
  "resourceType": "PARTY",
  "resourceId": "10000000-0000-4000-8000-000000000001"
}
```

Both allow and deny return HTTP 200. `allowed: true` and `reasonCode: SANDBOX_GRANT` means the journey may continue. `allowed: false` means stop. Do not call the domain.

### 3. Ask for a decision

`POST http://localhost:8042/api/v1/decisions`

```json
{
  "partyId": "10000000-0000-4000-8000-000000000001",
  "journeyStep": "ONBOARDING",
  "attributes": { "creditScore": 720, "highRisk": false }
}
```

`journeyStep` may also be `LENDING_APPLICATION`, `INSURANCE_QUOTE`, `INSURANCE_BIND`, or `CLAIM`. If you omit `creditScore`, the sandbox report score is 640. The ruleset constant `MIN_CREDIT_SCORE` is 680, so that request is `REFER` with `CREDIT_SCORE_BELOW_THRESHOLD`. `highRisk: true` is `DECLINE` with `HIGH_RISK`.

### 4. Onboard

Person: `POST http://localhost:8096/api/v1/onboarding/individuals`

Company: `POST http://localhost:8096/api/v1/onboarding/businesses`

The experience service repeats the access check, reads the sandbox credit report, and calls `DecisionPort` before it starts the workflow. The workflow registers the party through `domain-customer-people` and opens KYC or KYB through `domain-customer-kyc-kyb`. The body is `InitiateOnboardingCommand` in that repository. This page does not invent fields for it.

Later signals on the person journey are personal data, economic data, identity documents, KYC, and completion. The company journey uses company data, beneficial owners, documents, signers, KYB, and completion.

### 5. Continue with an account or an application

Open an account only after the access check allows `CREATE` on `ACCOUNT` for `10000000-0000-4000-8000-000000000002`.

`POST http://localhost:8100/api/v1/accounts`

`exp-accounts` checks access, then calls `OpenAccount`, whose default adapter is `domain-banking-accounts`. That domain writes `core-banking-accounts`. Close is `DELETE /api/v1/accounts/{accountId}`. The same order applies: access, then `CloseAccount`.

Or start a lending application:

`POST http://localhost:8102/api/v1/experience/lending/applications`

`exp-lending` checks access, reads the sandbox credit report, calls `POST /api/v1/decisions` with `journeyStep` `LENDING_APPLICATION`, and only then calls `LoanApplicationPort` (`domain-lending-loan-origination`). A `DECLINE` does not create the application.

There is no experience service that quotes a policy or registers a claim. `domain-insurance-policies`, `domain-insurance-underwriting`, and `domain-insurance-claims` are on main. A channel can call those domains. This sandbox path does not.

## Sample actors

| Username | Actor id | What the sandbox policy allows |
| --- | --- | --- |
| `sample-journey` | `11111111-1111-4111-8111-111111111111` | `READ` and `CREATE` on the sample party, account, card, application, policy, claim, contract, and product. Not `ADMINISTER` or `IMPERSONATE`. |
| `sample-employee` | `33333333-3333-4333-8333-333333333333` | `READ` on those sample resources, plus `ADMINISTER` and `IMPERSONATE` on every resource of those types. |
| `denied-actor` | `22222222-2222-4222-8222-222222222222` | No grants. An access check returns `allowed: false`. |

Sign the employee in with the same identity call and `"username": "sample-employee"`. The sandbox still does not start Keycloak.

## Staff terminals

No finance staff terminal and no insurance staff terminal is on disk. This chapter does not impersonate a customer through a terminal, because that repository does not exist. The employee subject and the `IMPERSONATE` grant live only in the security center, so a later terminal can call the same identity and access ports.

## What an installer replaces

| Piece | Where it is now |
| --- | --- |
| Ruleset | `rulesets/openplatform-journey.yaml` in `domain-lending-credit-scoring`. Or set `firefly.decision.rulesets-directory` to a directory of `{ruleset}.yaml` files. The ruleset name is `firefly.decision.ruleset`, default `openplatform-journey`. |
| Credit report | `firefly.decision.credit-report`, default `sandbox`, selects `SandboxCreditReportAdapter`. Another value requires your own `CreditReportPort`. |
| Identity | `firefly.security-center.identity.adapter`, default `sandbox`. `keycloak`, `cognito`, or `internal-db` selects the Jafly adapter. The journey still does not open a Keycloak client. |
| Access policy | `sandbox-access-policy.json`, read from `firefly.security-center.access.sandbox-policy` (`classpath:access/sandbox-access-policy.json`). Replace the file. Do not hard-code allow and deny in the controller. |

Details: [Replace an adapter](adapters/index.md). The pictures of the public journeys are under [Experience](experience/index.md).
