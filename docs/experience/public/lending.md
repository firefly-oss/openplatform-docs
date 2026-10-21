# Lending

A borrower asks for credit, and later lives with the loan that was granted. Applying is one step. Servicing is what she can do after the loan exists: change the rate, close it, take a payment holiday or end one, and ask for the money to be paid out or for an installment to be paid. The product she names chooses which record is opened. A personal loan, a mortgage, asset finance, and supply-chain finance are not four different sittings. They are routes on this one journey. There is no separate experience for a syndicated loan.

Ada Lovelace is the sandbox customer, party `11111111-1111-4111-8111-111111111111`. The product on the sandbox agreement `10000000-0000-4000-8000-000000000021` is Horizon Personal Loan, product `10000000-0000-4000-8000-000000000202`. In the lending catalog that product is a personal loan. She applies for it: the product, an amount, and a term in months. The printed agreement is five years, so the application that matches that document asks for that amount over 60 months.
Source: the sandbox sample is 250,000.00 EUR.

The journey checks access as `sample-journey` before anything else. If she is not allowed to create an application, nothing is written.

It then reads the parameter `journey.lending.min-credit-score` and sends that number with the decision, under the name `minCreditScore`. In the sandbox that parameter is 680. She does not send a credit score. The decision service fills 640 from its own sandbox report when the score is omitted. 640 is below 680, so the sample rules refer her. A referral does not stop the application. High risk is a decline, and a decline does not open a record.

The catalog then chooses the domain from the product. Product `...202` is a personal loan, so the personal-loan domain opens the agreement. A mortgage product opens a mortgage. An asset-finance product opens asset finance, as a lease or as a rental. A supply-chain product opens that agreement. A product the catalog does not list uses the default route, which in the sandbox is loan origination.

<div class="ff-journey" markdown="0">
<img src="../../../assets/journeys/lending.svg" alt="Sequence: Ada applies for the Horizon Personal Loan. Access is checked. The decision is sent with the threshold 680. A decline stops. Product 202 opens a personal loan. Later she changes the rate, closes, or takes a holiday on the loan. Disbursement and an installment try, then confirm, through the payments port. The sandbox does not post the ledger.">
</div>

## After the loan exists

She can change the interest rate. She sends the old rate, the new rate, the date it takes effect, and a reason: an index adjustment, a renegotiation, a penalty, or a promotion. She can close the loan and say why. She can take a payment holiday, and she can end it. Those four calls stay on the loan. They do not try a payment.

Asking for the money to be paid out, or paying one installment, does try and then confirm, through the payments port, in the same call. The sandbox adapter is the default. It keeps the try until confirm, and it does not post the ledger and does not run a challenge for this internal movement. Set `firefly.experience.payments.adapter` to `hub` and the same try and confirm go through the domain payments SDK. That live adapter does not invent a code, and it does not accept the word `sandbox` as one.

If the loan is syndicated, she can read the facility. The response is the facility id, the loan id, the currency, the commitment amount, and the status. The participant register is not on that response. There is no `exp-syndicated-loans`. This journey only shows her the facility.

She can also read the amortization calendar at `GET /api/v1/experience/lending/loans/{id}/calendar`. Each row is one installment: its due date, principal, interest, and remaining balance. The read goes through the loan-servicing domain SDK. Restructuring and end of day are not on this call. The participant register is not on this response either. The OpenAPI file for this journey does not list the path, so the API panel has no operation for it.

## The schedule, the cash, and the day

Once the loan exists, the servicing record keeps a schedule. Each installment stores its due date, the principal due, the interest due, and the balance that remains after that installment. The rate on that schedule is not one number for every loan. It is read from the product's pricing: the interest bracket that matches the product and the amount. A personal loan and a lease do not share a bracket. The sandbox price is the default. It reads that configuration and does not open a network connection. A live price is selected with `firefly.lending.price.adapter=engine`.

A repayment marks the earliest unpaid installment paid, with the payment date and the amount, and posts the cash on the ledger. The sandbox ledger is the default. `firefly.lending.ledger.adapter=sdk` posts through the ledger instead. If that posting fails, the installment is put back and the repayment record is removed. If the balance update fails after the cash has posted, that posting is reversed.

A restructure does not throw the old schedule away. The unpaid rows that are still current are marked superseded and stay on the same loan. New rows are stored on that same loan, priced again from the product. Paid rows are left as they are. If the restructure has to be undone, the previous rows can be made current again and the replacement rows removed.

At the end of a business day, interest is accrued once for each open loan that does not already have an interest accrual on that date. Those amounts are posted as one general-ledger journal for the date and the currency. A second run for the same date finds the journal that is already there and does not post another. The sandbox general ledger is the default. `firefly.lending.accounting.adapter` left unset keeps that sandbox. The live adapter asks accounting to store the journal.

## What a refusal does

When access is not allowed, the application is not created, the rate is not changed, the loan is not closed, and no payment is tried.

A decline stops before the personal-loan domain, the mortgage domain, asset finance, supply-chain finance, or origination. The sample decline is high risk.

A servicing operation the catalog has switched off answers HTTP 409 and does not call the loan. In the file shipped here, rate change, close, both holiday calls, disbursement, and installment payment are enabled.

Confirming a payment the sandbox does not know, or confirming an outbound try with the wrong code, does not complete the payment. On the live adapter, the word `sandbox` is rejected before confirm is sent.

## Reference

The service listens on port 8102.

| What she does | Call |
| --- | --- |
| Apply | `POST /api/v1/experience/lending/applications` |
| Change the rate | `POST /api/v1/experience/lending/loans/{loanId}/rate` |
| Close | `POST /api/v1/experience/lending/loans/{loanId}/close` |
| Take a payment holiday | `POST /api/v1/experience/lending/loans/{loanId}/payment-holiday` |
| End the holiday | `POST /api/v1/experience/lending/loans/{loanId}/payment-holiday/end` |
| Disburse | `POST /api/v1/experience/lending/loans/{loanId}/disbursements` |
| Pay an installment | `POST /api/v1/experience/lending/loans/{loanId}/installments/{installmentId}/payments` |
| Read a syndicated facility | `GET /api/v1/experience/lending/loans/{loanId}/syndicated-facility` |
| Read the amortization calendar | `GET /api/v1/experience/lending/loans/{id}/calendar` |

```text
// POST /api/v1/experience/lending/applications
{
  // partyId: 11111111-1111-4111-8111-111111111111
  // productId: 10000000-0000-4000-8000-000000000202
  // requestedAmount: 250000.00
  // term: 60
  // purpose: optional
}
// The catalog routes product ...202 to a personal loan.
// A product that is not listed uses loan origination.

// GET /api/v1/experience/lending/loans/{id}/calendar
// Not in the OpenAPI file. Each row:
{
  // installmentNumber
  // dueDate
  // principal
  // interest
  // remainingBalance
  // no participant register
}

// GET .../loans/{loanId}/syndicated-facility
{
  // facilityId
  // loanId
  // currency
  // commitmentAmount
  // status
  // no participant register
}
```

The threshold parameter is `journey.lending.min-credit-score`. The sandbox value is 680. The product routes are `PERSONAL_LOAN`, `MORTGAGE`, `ASSET_FINANCE`, `SUPPLY_CHAIN_FINANCE`, and `LOAN_ORIGINATION`. The payments property is `firefly.experience.payments.adapter`, default `sandbox`, live value `hub`.

The schedule, repayment, restructure, and end of day are on the loan servicing service, not on the experience call Ada uses to apply.

| What the servicing record does | Call |
| --- | --- |
| Build the schedule | `POST /api/v1/loans/{loanId}/schedule` |
| Take a repayment | `POST /api/v1/loans/{loanId}/repayments` |
| Replace the remaining schedule | `POST /api/v1/loans/{loanId}/restructure` |
| Accrue the day | `POST /api/v1/loans/end-of-day` |

Each stored installment has `dueDate`, `principalDue`, `interestDue`, and `remainingBalance`. The calls Ada makes from the experience are also on the [lending API](../../api/lending.md).
