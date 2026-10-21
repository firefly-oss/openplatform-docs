# Lending

Lending is one journey, `exp-lending`. The person simulates a product, applies, and later looks at the loan. The product kind chooses the saga. A personal loan, a lease, and a loan that is already disbursed are not three experience services.

The picture is the application path, which is the path that also asks for a decision. The other sagas in the table are the same journey calling a different domain.

<div class="ff-journey" markdown="0">
<img src="../../../assets/journeys/lending.svg" alt="Sequence: person, experience, access, credit report, decision, domain, core. The application write is compensated by removing it.">
</div>

## Steps

1. The person calls `POST /api/v1/experience/lending/applications` on `exp-lending`.
2. `AccessPort` must allow `CREATE` on `APPLICATION`. A denial does not continue.
3. `CreditReportPort` returns the sandbox report. It does not call a bureau.
4. `DecisionPort` asks for `LENDING_APPLICATION`. A `DECLINE` does not call origination.
5. `LoanApplicationPort` calls `domain-lending-loan-origination`. `RegisterApplicationSaga` creates the application on `core-lending-loan-origination`. Compensation removes that application.

A lease uses `POST /api/v1/experience/lending/asset-finance` and `domain-lending-asset-finance`. Servicing uses `POST /api/v1/experience/lending/loans` and `domain-lending-loan-servicing`. Personal-loan terms use `domain-lending-personal-loans`. Trade finance is not on this journey. `domain-lending-supply-chain-finance` is not a dependency of `exp-lending`.

## Domain sagas and cores

| Product kind or task | Saga | Core |
| --- | --- | --- |
| Application | `RegisterApplicationSaga` in `domain-lending-loan-origination` | `core-lending-loan-origination` |
| After disbursement | servicing sagas in `domain-lending-loan-servicing` | `core-lending-loan-servicing` |
| Lease or rental (`LEASING`, `RENTING`) | `RegisterAssetFinanceAgreementSaga` in `domain-lending-asset-finance` | `core-lending-asset-finance` |
| Personal-loan terms | personal-loan agreement saga in `domain-lending-personal-loans` | `core-lending-personal-loans` |
| Decision | `DecisionPort` in `domain-lending-credit-scoring`, not a lending aggregate | scoring rows stay on `core-lending-credit-scoring` |

## Technical port

[exp-lending](https://github.com/fireflysoftwaresolutions/exp-lending), port 8102. The decision HTTP call, when the sandbox adapter is replaced, is `POST /api/v1/decisions` with `journeyStep` `LENDING_APPLICATION`.
