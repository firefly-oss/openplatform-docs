# Lending

Eleven lending domains orchestrate eleven cores. Each domain calls that core's SDK only and does not import the core's internals.

`core-lending-credit-cards` is the lending core without a domain orchestrator. There is no `domain-lending-credit-cards` repository. `domain-banking-cards` calls the credit-cards core from the banking family.

[exp-lending](journeys.md#exp-lending) currently calls five of the lending domains: origination, servicing, credit scoring, asset finance, and personal loans. The other six domains are in this train and are not on that experience classpath yet.

The lending journey page is [Lending](../journeys/lending.md). `DecisionPort` is documented under [Decision](decision.md). It is not a lending repository.



## Domain

<div class="ff-entry ff-entry--domain" markdown="1">
<p class="ff-kicker">Domain</p>

### domain-lending-asset-finance

Owns the asset-finance saga through `core-lending-asset-finance`. It calls that core's SDK only and does not import the core's internals.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/domain-lending-asset-finance">github.com/fireflysoftwaresolutions/domain-lending-asset-finance</a></p>

</div>

<div class="ff-entry ff-entry--domain" markdown="1">
<p class="ff-kicker">Domain</p>

### domain-lending-collateral-management

Owns the collateral saga: create, update, status change, and close, with compensation, through `core-lending-collateral-management`. It calls that core's SDK only. Close writes `RELEASED` when the lifecycle allows it. Remove deletes the case when the core allows removal.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/domain-lending-collateral-management">github.com/fireflysoftwaresolutions/domain-lending-collateral-management</a></p>

</div>

<div class="ff-entry ff-entry--domain" markdown="1">
<p class="ff-kicker">Domain</p>

### domain-lending-credit-scoring

Owns the scoring saga through `core-lending-credit-scoring`, and it is also the decision service. `DecisionPort` and `POST /api/v1/decisions` live here. `JaflyRulesEngineAdapter` evaluates `rulesets/openplatform-journey.yaml`. `SandboxCreditReportAdapter` returns the fixed report and does not call a bureau.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/domain-lending-credit-scoring">github.com/fireflysoftwaresolutions/domain-lending-credit-scoring</a></p>

</div>

<div class="ff-entry ff-entry--domain" markdown="1">
<p class="ff-kicker">Domain</p>

### domain-lending-delinquency-collections

Owns the collections saga: create, update, status change, and close, with compensation, through `core-lending-delinquency-collections`. It calls that core's SDK only.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/domain-lending-delinquency-collections">github.com/fireflysoftwaresolutions/domain-lending-delinquency-collections</a></p>

</div>

<div class="ff-entry ff-entry--domain" markdown="1">
<p class="ff-kicker">Domain</p>

### domain-lending-loan-origination

Owns the origination saga: submit, update, and record an underwriting outcome, through `core-lending-loan-origination`.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/domain-lending-loan-origination">github.com/fireflysoftwaresolutions/domain-lending-loan-origination</a></p>

</div>

<div class="ff-entry ff-entry--domain" markdown="1">
<p class="ff-kicker">Domain</p>

### domain-lending-loan-servicing

Owns the servicing saga: disburse, repay, and later servicing commands, through `core-lending-loan-servicing`.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/domain-lending-loan-servicing">github.com/fireflysoftwaresolutions/domain-lending-loan-servicing</a></p>

</div>

<div class="ff-entry ff-entry--domain" markdown="1">
<p class="ff-kicker">Domain</p>

### domain-lending-mortgage

Owns the mortgage agreement saga: create, update, status change, and close, with compensation, through `core-lending-mortgage`. It calls that core's SDK only. Party, contract, and product links on the agreement are UUIDs.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/domain-lending-mortgage">github.com/fireflysoftwaresolutions/domain-lending-mortgage</a></p>

</div>

<div class="ff-entry ff-entry--domain" markdown="1">
<p class="ff-kicker">Domain</p>

### domain-lending-personal-loans

Owns the personal-loan agreement saga through `core-lending-personal-loans`.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/domain-lending-personal-loans">github.com/fireflysoftwaresolutions/domain-lending-personal-loans</a></p>

</div>

<div class="ff-entry ff-entry--domain" markdown="1">
<p class="ff-kicker">Domain</p>

### domain-lending-provisioning-risk

Owns the provisioning saga: create, update, status change, and close, with compensation, through `core-lending-provisioning-risk`. It calls that core's SDK only. It does not certify an accounting standard.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/domain-lending-provisioning-risk">github.com/fireflysoftwaresolutions/domain-lending-provisioning-risk</a></p>

</div>

<div class="ff-entry ff-entry--domain" markdown="1">
<p class="ff-kicker">Domain</p>

### domain-lending-regulatory-compliance

Owns the AML-case saga: create, update, status change, and close, with compensation, through `core-lending-regulatory-compliance`. It calls that core's SDK only. It does not certify a regulatory outcome.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/domain-lending-regulatory-compliance">github.com/fireflysoftwaresolutions/domain-lending-regulatory-compliance</a></p>

</div>

<div class="ff-entry ff-entry--domain" markdown="1">
<p class="ff-kicker">Domain</p>

### domain-lending-supply-chain-finance

Owns the supply-chain finance saga: create, update, status change, and close, with compensation, through `core-lending-supply-chain-finance`. It calls that core's SDK only.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/domain-lending-supply-chain-finance">github.com/fireflysoftwaresolutions/domain-lending-supply-chain-finance</a></p>

</div>


## Core

<div class="ff-entry ff-entry--core" markdown="1">
<p class="ff-kicker">Core</p>

### core-lending-asset-finance

Owns asset-finance agreements and the financed asset. `FinanceTypeEnum` stores `RENTING` and `LEASING`. `domain-lending-asset-finance` is the domain orchestrator.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/core-lending-asset-finance">github.com/fireflysoftwaresolutions/core-lending-asset-finance</a></p>

</div>

<div class="ff-entry ff-entry--core" markdown="1">
<p class="ff-kicker">Core</p>

### core-lending-collateral-management

Owns collateral assets, cases, liens, valuations, and monitoring. `domain-lending-collateral-management` is the domain orchestrator.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/core-lending-collateral-management">github.com/fireflysoftwaresolutions/core-lending-collateral-management</a></p>

</div>

<div class="ff-entry ff-entry--core" markdown="1">
<p class="ff-kicker">Core</p>

### core-lending-credit-cards

Owns revolving credit lines, billing cycles, statements, and amounts posted to the credit line. This is a core without a domain orchestrator. `domain-banking-cards` calls this core. There is no `domain-lending-credit-cards` repository.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/core-lending-credit-cards">github.com/fireflysoftwaresolutions/core-lending-credit-cards</a></p>

</div>

<div class="ff-entry ff-entry--core" markdown="1">
<p class="ff-kicker">Core</p>

### core-lending-credit-scoring

Owns scoring cases and bureau-call records. `domain-lending-credit-scoring` is the domain orchestrator. This core is not `DecisionPort`.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/core-lending-credit-scoring">github.com/fireflysoftwaresolutions/core-lending-credit-scoring</a></p>

</div>

<div class="ff-entry ff-entry--core" markdown="1">
<p class="ff-kicker">Core</p>

### core-lending-delinquency-collections

Owns delinquency cases, collection actions, and payment promises. `domain-lending-delinquency-collections` is the domain orchestrator.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/core-lending-delinquency-collections">github.com/fireflysoftwaresolutions/core-lending-delinquency-collections</a></p>

</div>

<div class="ff-entry ff-entry--core" markdown="1">
<p class="ff-kicker">Core</p>

### core-lending-loan-origination

Owns loan applications, parties on the application, documents, proposed offers, underwriting decisions, scores, and status history. Collateral is a separate core. `domain-lending-loan-origination` is the domain orchestrator.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/core-lending-loan-origination">github.com/fireflysoftwaresolutions/core-lending-loan-origination</a></p>

</div>

<div class="ff-entry ff-entry--core" markdown="1">
<p class="ff-kicker">Core</p>

### core-lending-loan-servicing

Owns servicing after origination: disbursements, repayment schedules, interest, rate changes, and servicing events. `domain-lending-loan-servicing` is the domain orchestrator.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/core-lending-loan-servicing">github.com/fireflysoftwaresolutions/core-lending-loan-servicing</a></p>

</div>

<div class="ff-entry ff-entry--core" markdown="1">
<p class="ff-kicker">Core</p>

### core-lending-mortgage

Owns mortgage agreement terms. `domain-lending-mortgage` is the domain orchestrator. Payment servicing stays on `core-lending-loan-servicing`.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/core-lending-mortgage">github.com/fireflysoftwaresolutions/core-lending-mortgage</a></p>

</div>

<div class="ff-entry ff-entry--core" markdown="1">
<p class="ff-kicker">Core</p>

### core-lending-personal-loans

Owns personal-loan contractual terms, including purpose and early-repayment conditions. Day-to-day servicing stays on `core-lending-loan-servicing`. `domain-lending-personal-loans` is the domain orchestrator.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/core-lending-personal-loans">github.com/fireflysoftwaresolutions/core-lending-personal-loans</a></p>

</div>

<div class="ff-entry ff-entry--core" markdown="1">
<p class="ff-kicker">Core</p>

### core-lending-provisioning-risk

Owns provisioning cases, expected-credit-loss amounts, and risk assessments. `domain-lending-provisioning-risk` is the domain orchestrator. It does not certify an accounting standard.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/core-lending-provisioning-risk">github.com/fireflysoftwaresolutions/core-lending-provisioning-risk</a></p>

</div>

<div class="ff-entry ff-entry--core" markdown="1">
<p class="ff-kicker">Core</p>

### core-lending-regulatory-compliance

Owns AML cases, suspicious-activity reports, and regulatory report records. `domain-lending-regulatory-compliance` is the domain orchestrator. It does not certify a regulatory outcome.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/core-lending-regulatory-compliance">github.com/fireflysoftwaresolutions/core-lending-regulatory-compliance</a></p>

</div>

<div class="ff-entry ff-entry--core" markdown="1">
<p class="ff-kicker">Core</p>

### core-lending-supply-chain-finance

Owns supply-chain finance agreements. `FinanceTypeEnum` stores `FACTORING` and `CONFIRMING`. The code does not store `REVERSE_FACTORING`. `domain-lending-supply-chain-finance` is the domain orchestrator.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/core-lending-supply-chain-finance">github.com/fireflysoftwaresolutions/core-lending-supply-chain-finance</a></p>

</div>


## Related


- [All services](index.md)

- [Layers](../layers/index.md)

- [Replace an adapter](../adapters/index.md)

