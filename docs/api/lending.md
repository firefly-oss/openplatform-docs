# Lending

Ada applies for credit. Access is checked first. The journey reads `journey.lending.min-credit-score` and sends that number with the decision. In the sandbox the parameter is 680. A decline stores nothing. The product id chooses the domain: personal loan, mortgage, asset finance, supply-chain finance, or, when the product is not listed, loan origination.

Product `10000000-0000-4000-8000-000000000202` is the Horizon Personal Loan. She can ask for that amount over 60 months, which is the five-year sample on agreement `10000000-0000-4000-8000-000000000021`.
Source: the sandbox sample is 250,000.00 EUR.

After the loan exists she can change the rate, close it, and take or end a payment holiday. Those do not move money. Disbursement and an installment payment try, then confirm, through the payments port. The sandbox is the default and does not post the ledger. `firefly.experience.payments.adapter=hub` uses the domain payments SDK. The word `sandbox` is not a valid code on that adapter.

A syndicated facility, when she reads one, returns the facility id, the loan id, the currency, the commitment, and the status. The participant register is not on that response. There is no separate syndicated-loan experience.

The service listens on port 8102. If access is not allowed, nothing is written. A decline stops before the domain. An operation the catalog has switched off is HTTP 409.

```text
// POST /api/v1/experience/lending/applications
{
  // partyId: 11111111-1111-4111-8111-111111111111
  // productId: 10000000-0000-4000-8000-000000000202
  // requestedAmount: 250000.00
  // term: 60
  // purpose: optional
}

// POST /api/v1/experience/lending/loans/{loanId}/rate
{
  // oldInterestRate
  // newInterestRate
  // effectiveDate
  // reason: INDEX_ADJUSTMENT, RENEGOTIATION, PENALTY, or PROMOTION
}

// POST /api/v1/experience/lending/loans/{loanId}/close
{ "reason": "why" }

// POST /api/v1/experience/lending/loans/{loanId}/payment-holiday
{ "reason": "why the holiday starts" }

// POST /api/v1/experience/lending/loans/{loanId}/payment-holiday/end
{ "reason": "why the holiday ends" }

// POST /api/v1/experience/lending/loans/{loanId}/disbursements
{ "amount": 250000.00 }
// try, then confirm, on the payments port

// POST /api/v1/experience/lending/loans/{loanId}/installments/{installmentId}/payments
{ "amount": the installment }

// GET /api/v1/experience/lending/loans/{loanId}/syndicated-facility
{
  // facilityId, loanId, currency, commitmentAmount, status
}

// GET /api/v1/experience/lending/loans/{id}/calendar
// operationId: readAmortizationCalendar
// 200, an array of AmortizationCalendarRow
[
  {
    // installmentNumber: integer
    // dueDate: date
    // principal: number
    // interest: number
    // remainingBalance: number
  }
]
```

The panel is `exp-lending-sdk/src/main/resources/openapi.yml`. Read the calendar example, then open `readAmortizationCalendar`.

<swagger-ui src="specs/lending/openapi.yml"></swagger-ui>
