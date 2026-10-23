# Lending: from application to final recovery

Lending converts an approved set of terms into a funded obligation and then manages that obligation over time. The application, agreement, disbursement, repayment schedule, actual receipts, collateral, and risk assessment are related records with different owners and effective dates.

## The lending lifecycle and its owners

| Stage | Business result | Current service boundaries |
| --- | --- | --- |
| Origination | Recorded application, simulation and requested terms | [Loan origination domain](../api/services/domain-lending-loan-origination.md) and [core](../api/services/core-lending-loan-origination.md) |
| Assessment | Evidence, score, decision or referral | [Credit-scoring domain](../api/services/domain-lending-credit-scoring.md) and [core](../api/services/core-lending-credit-scoring.md) |
| Agreement | Product-specific obligation and conditions | Personal-loan, mortgage, asset-finance and supply-chain contexts; shared contracts |
| Funding | Authorized drawdown linked to money movement | Lending experience, payments and ledger boundaries |
| Servicing | Schedule, accrual, allocation and changes | [Loan-servicing domain](../api/services/domain-lending-loan-servicing.md) and [core](../api/services/core-lending-loan-servicing.md) |
| Recovery and risk | Collections case, collateral actions, provisions and reporting | Collections, collateral, provisioning and compliance contexts |

[The lending experience](../api/services/exp-lending.md) composes these capabilities. It should preserve the identity returned by each owner, rather than substituting a single “loan ID” for application, agreement, servicing case, payment, and ledger identities.

## Origination: capture a decision-ready request

An application must establish the applicant, requested product and amount, currency, term, purpose, repayment capacity, relevant liabilities, and consent/evidence needed for checks. For an organization, beneficial ownership and authorized representatives can matter as much as the legal entity itself. Record the source and effective date of evidence so a later reviewer can explain the decision.

The origination core's simulation controller accepts a request such as `productType=PERSONAL_LOAN`, amount `10000`, term `36`, and currency `EUR`. Its controller fixture checks a 201 saved representation with a mocked service. The domain persistence command can also carry priced results such as monthly payment, TIN, TAE, and total amount. Those values are outputs of a defined pricing policy; a transport test does not validate the policy or make a stored simulation an offer.

Keep simulation, application, approved offer, and signed agreement distinct. An applicant can change the amount after a simulation; that change must invalidate or rerun any decision that depends on it. A price quote also needs a validity period and retained rule version before it can be accepted as contractual terms.

## Underwriting: explain why and who decided

Credit assessment combines customer evidence, bureau results where selected, internal exposure, product policy, affordability, and authority. Define outcomes such as approval, decline, referral, and further evidence in the institution's decision model. A numeric score alone does not contain the conditions or delegated authority required to approve credit.

The current scoring source includes synthetic behavior: a missing caller score can produce a sandbox report and a `REFER` result with reason `CREDIT_SCORE_BELOW_THRESHOLD` against the configured threshold. This teaches an important integration rule: a fallback report must remain visibly synthetic and a referral must remain unresolved until an authorized decision is recorded. Never convert an unavailable bureau response into silent approval.

For a real bureau integration, preserve the request identity and evidence reference, response classification, consent basis, and freshness. No-hit, frozen, conflicting, thin-file, unavailable, and uncertain results need explicit handling. An operator can request evidence or refer the case; they should not repeatedly query a provider without a controlled reason and correlation.

## Agreements, product differences, and conditions

| Product family | Contract distinction | Operational consequence |
| --- | --- | --- |
| Personal loan | Purpose, rate type, principal, schedule and borrower obligation | Repayment and early-settlement rules follow the accepted terms |
| Mortgage | Property/collateral, valuation, priority and rate terms | Funding and release depend on collateral and closing conditions |
| Asset finance | `RENTING` versus `LEASING`, asset and purchase option | The current source rejects a purchase option for operating rental; product types are not interchangeable |
| Supply-chain finance | `FACTORING` or `REVERSE_FACTORING`, commercial relationship and receivables | Verify the financed obligation, counterparty and collection allocation |
| Credit card lending | Revolving limit and billing relationship | Billing, utilization, repayment allocation and delinquency differ from a fixed installment loan |

The [asset-finance](../api/services/core-lending-asset-finance.md), [mortgage](../api/services/core-lending-mortgage.md), [personal-loan](../api/services/core-lending-personal-loans.md), and [supply-chain](../api/services/core-lending-supply-chain-finance.md) contracts define current record shapes. Before funding, bind the approved terms to the correct agreement and immutable signing evidence, resolve required conditions, and preserve the authorized destination.

Collateral is another lifecycle. Establish ownership, valuation date and method, lien or security priority, insurance where required, and release conditions. Updating a collateral status is not evidence that an external security interest was perfected or released. Retain that evidence through the actual institutional process.

## Disbursement: connect obligation to money

A drawdown must reference the agreement and conditions it consumes, the authorized beneficiary/account, the funding source, and the corresponding payment. Check approval validity and material changes before release. Record the amount/currency and the money effect returned by its owner.

**Ownership and state panels.** Each numbered connection preserves the source, destination, and condition; dependency panels do not imply execution order.

<style>
@media (max-width: 1100px) {
  picture.manual-diagram-phase { display: block; max-width: 432px; margin-inline: auto; }
}
</style>

<picture class="manual-diagram-phase">
  <source media="(max-width: 1100px) and (prefers-color-scheme: dark)" srcset="../../assets/diagrams/journeys-lending-phase-1-narrow-dark.svg">
  <source media="(max-width: 1100px)" srcset="../../assets/diagrams/journeys-lending-phase-1-narrow-light.svg">
  <source media="(prefers-color-scheme: dark)" srcset="../../assets/diagrams/journeys-lending-phase-1-dark.svg">
  <img src="../../assets/diagrams/journeys-lending-phase-1-light.svg" alt="journeys-lending: Connections 1 to 4" width="100%" style="padding:0">
</picture>

<picture class="manual-diagram-phase">
  <source media="(max-width: 1100px) and (prefers-color-scheme: dark)" srcset="../../assets/diagrams/journeys-lending-phase-2-narrow-dark.svg">
  <source media="(max-width: 1100px)" srcset="../../assets/diagrams/journeys-lending-phase-2-narrow-light.svg">
  <source media="(prefers-color-scheme: dark)" srcset="../../assets/diagrams/journeys-lending-phase-2-dark.svg">
  <img src="../../assets/diagrams/journeys-lending-phase-2-light.svg" alt="journeys-lending: Connections 5 to 8" width="100%" style="padding:0">
</picture>

[Diagram source and stable step identities](../assets/diagrams/sequences.json) preserve the same messages in both layouts.

*Business dependency model. Each arrow requires an implemented and qualified contract; it does not claim a single deployed end-to-end transaction.*

A provider timeout after accepting a drawdown is uncertain. Reconcile the original payment identity and external reference before another submission. A servicing record should distinguish contractual expectations from actual funded amounts; otherwise an approved-but-unfunded loan can appear as collectible debt.

## Worked example: store and read an amortization calendar

`StoreAmortizationCalendarRequest` defines `principal`, `annualRatePercent`, `term`, `paymentFrequency`, optional `amortizationMethod`, `firstDueDate`, and optional `installmentAmount`. Principal must be at least 0.01, rate cannot be negative, term is at least one, and the first due date is required. The calendar belongs to an existing servicing case.

The repository's numerical fixture supplies:

```java
new StoreAmortizationCalendarRequest(
    new BigDecimal("1200.00"),
    new BigDecimal("12.00"),
    12,
    PaymentFrequencyEnum.MONTHLY,
    AmortizationMethodEnum.EQUAL_INSTALLMENT,
    LocalDate.of(2026, 2, 1),
    null
);
```

This is an excerpt from the existing test, not a standalone Java application. With these inputs the assertions require twelve rows, first due date February 1, 2026, first interest 12.00, last due date January 1, 2027, final remaining balance 0.00, and total scheduled principal 1,200.00. Read rows retain the same servicing-case ID and generated schedule IDs. The fixture also replaces a schedule, marks the previous rows `SUPERSEDED`, and restores the prior schedule on the same case.

Run from `core-lending-loan-servicing` with the effective JDK and matching artifacts:

```sh
mvn -B -pl core-lending-loan-servicing-core -am test -DskipOpenApiGen   -Dtest=AmortizationCalendarServiceTest -Dsurefire.failIfNoSpecifiedTests=false
```

The test uses a mocked repository backed by an in-memory map. It verifies service calculations and retained row relationships within that fixture; it is not a PostgreSQL or contractual day-count qualification. Before runtime use, create the servicing case through its owner, select the actual schedule method and priced terms, persist with the real database, and compare the schedule to an independently approved calculation.

## Receipts, allocation, and early repayment

Separate receipt from allocation. A receipt records money received; allocation determines how it reduces principal, interest, fees, arrears, or suspense according to the agreement. An overpayment, partial payment, chargeback, or backdated receipt can require a different allocation and accrual outcome. Retain the original financial effect and linked adjustment rather than rewriting history.

The `EarlyRepaymentJourneyTest` demonstrates a narrow but useful relationship. It submits amount `5000` and type `PARTIAL`, receives a payment ID from the payment port's TRY/confirmation interaction, and verifies that the servicing command's `transactionId` is that returned ID. The identity/access, payment, and servicing ports are mocks. The test proves correlation through the experience, not settlement or a recalculated loan balance.

A complete early-repayment operation additionally needs the permitted quote date, accrued interest and charges, payment finality, allocation, and schedule/remainder treatment. If payment succeeds but servicing fails, recover the original payment and retry the supported servicing step; do not charge the customer again to obtain another transaction ID.

## Collections, risk, and closure

Collections begins with a defined overdue population and days-past-due calculation. A `CollectionCaseDTO` can record a servicing-case reference, status `OPEN`, stage `EARLY`, days past due, total due/recovered, and opening time. These fields are useful case data; they do not decide a lawful contact strategy, hardship arrangement, default, repossession, or write-off.

Provisioning separates exposure, stage, risk grade, assumptions, measurement date, review, and financial treatment. A `ProvisioningCaseDTO` with `STAGE_1`, `AAA`, and `ACTIVE` is a record shape, not an accepted accounting calculation. Retain model and population versions and reconcile adjustments to accounting. Regulatory/compliance records similarly need evidence and authorized reporting workflows.

Close the loan only after balances and contingent obligations are resolved, collateral and guarantees are released according to policy, linked products reflect the outcome, and notices/evidence are retained. A zero scheduled balance is not enough when actual receipts or fees disagree.

## Recover the original obligation

| Situation | Starting point | Recovery |
| --- | --- | --- |
| Decision based on current evidence | Origination/scoring contracts and handlers | Compare evidence/rule versions; retain referral until authorized resolution |
| One funded obligation | Agreement and payment boundaries | Reconcile drawdown to payment/ledger/provider before resubmission |
| Correct calendar and revision history | Amortization service fixture | Independently check amounts, dates, rounding and actual persistence |
| Receipt allocated once | Early-repayment correlation fixture | Recover payment ID; qualify allocation, partial/reversed receipt and retry |
| Controlled arrears and loss treatment | Collections/provisioning cores | Qualify population, strategy, authority, accounting and reporting |

Source anchors: [StoreAmortizationCalendarRequest.java](https://github.com/fireflysoftwaresolutions/core-lending-loan-servicing/blob/main/core-lending-loan-servicing-interfaces/src/main/java/io/fireflysoftware/core/lending/servicing/interfaces/dtos/StoreAmortizationCalendarRequest.java) · [AmortizationCalendarServiceTest.java](https://github.com/fireflysoftwaresolutions/core-lending-loan-servicing/blob/main/core-lending-loan-servicing-core/src/test/java/io/fireflysoftware/core/lending/servicing/core/schedule/AmortizationCalendarServiceTest.java) · [EarlyRepaymentJourneyTest.java](https://github.com/fireflysoftwaresolutions/exp-lending/blob/main/exp-lending-core/src/test/java/io/fireflysoftware/experience/lending/core/servicing/services/EarlyRepaymentJourneyTest.java).
