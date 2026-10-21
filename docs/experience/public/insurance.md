# Insurance

A person asks for cover, accepts it, and later reports a loss. That is one sitting. It is not three products glued together, and it does not collect a premium. Insurance does not move money, and it does not certify IFRS 17 or Solvency II. Where a premium or a claim payment would leave the institution, the payments journey and the ledger own that movement. This journey stores the quote, the policy, and the claim.

Ada Lovelace is `sample-journey`, actor `11111111-1111-4111-8111-111111111111`. The sandbox agreement she can name on the policy is `10000000-0000-4000-8000-000000000021`, the same agreement the Horizon Personal Loan document prints. Naming it records the identifier. It does not disburse that amount, and it does not post a ledger entry.

She asks for a motor quote. The journey checks access as the sample customer. If that check is not allowed, the quote stops and nothing is stored. It then asks for a decision. She does not send a credit score. The sandbox report supplies 640, which is below the sample threshold of 680, so the outcome is a referral. A referral does not stop her. The submission is stored as received.

She binds a policy and names that agreement, a product, the line of business, the currency, and the inception and expiry dates. The same access check and the same decision run again. If she omits her party id, the agreement id is used for the check. The policy is stored as bound, and binding it issues the letter through the document domain SDK.

She registers a claim against the policy: a loss date, a cause, and a description. The catalog default is notified. Reading, updating, or changing a status later does not ask for another decision. Withdrawing the quote, cancelling the policy, and closing the claim do not either.

Endorse and renew are not operations on this journey, and they are not operations on the policy domain. Reinsurance, reserving, and insurance financials are not in this sitting. Staff work is the insurance terminal.

<div class="ff-journey" markdown="0">
<img src="../../../assets/journeys/insurance.svg" alt="Sequence: Ada asks for a motor quote. Access allows her. The decision refers her because the sandbox score is 640. The submission is stored as received. Bind stores the policy as bound. Claim, status, withdraw, cancel, and close follow. A decline stops before the record.">
</div>

## What she sees

A quote comes back with an id, a reference, and status `RECEIVED` when she omits a status. A bind comes back `BOUND`. A claim comes back `NOTIFIED`. A referral does not change those statuses. She does not see a ledger entry, and she does not see the Horizon Personal Loan amount move. Naming agreement `10000000-0000-4000-8000-000000000021` only stores that identifier on the policy.

## Where the records go

The quote is stored by the underwriting domain. The policy is stored by the policies domain. The claim is stored by the claims domain. Each of those cores keeps its own rows. None of them posts cash. A premium or a claim payment, if the institution pays it, is a payments journey and a ledger entry, not this sitting.

## What a refusal does

If access is not allowed, the call stops before the credit report and before any record is written.

A decision of decline, which the sample rules return when high risk is true, stops the quote, the bind, or the claim registration. The reason code is `HIGH_RISK`. Nothing is stored. A referral is not a refusal.

If the catalog has switched an operation off, the call answers HTTP 409 and says that operation is not enabled. In the file shipped here, quote, bind, claim, status, withdraw, cancel, and close are all enabled.

The journey does not lapse or expire a policy. Those closes exist on the policy domain. The status stored for a cancelled policy is `CANCELLED`.

## Reference

The service listens on port 8108.

| What she does | Call | Decision | Default status when she omits one |
| --- | --- | --- | --- |
| Ask for a quote | `POST /api/v1/experience/insurance/quotes` | Yes | `RECEIVED` |
| Read or update the quote | `GET` or `PUT .../quotes/{id}` | No | |
| Change quote status | `PUT .../quotes/{id}/status` | No | |
| Withdraw the quote | `POST .../quotes/{id}/withdraw` | No | |
| Bind | `POST /api/v1/experience/insurance/policies` | Yes | `BOUND` |
| Read, update, or change policy status | the matching policy calls | No | |
| Cancel the policy | `POST .../policies/{id}/cancel` | No | |
| Register a claim | `POST /api/v1/experience/insurance/claims` | Yes | `NOTIFIED` |
| Read, update, change claim status, or close | the matching claim calls | No | |

```text
// POST /api/v1/experience/insurance/quotes
{
  // partyId: 11111111-1111-4111-8111-111111111111
  // productId: the cover she is quoted
  // lineOfBusiness: MOTOR
  // currency: EUR
  // submissionStatus: omit to store RECEIVED
}

// POST /api/v1/experience/insurance/policies
{
  // partyId: 11111111-1111-4111-8111-111111111111
  // contractId: 10000000-0000-4000-8000-000000000021
  // productId: the cover
  // lineOfBusiness: MOTOR
  // currency: EUR
  // inceptionDate, expiryDate: dates
  // policyStatus: omit to store BOUND
}

// POST /api/v1/experience/insurance/claims
{
  // policyId: the bound policy
  // lossDate, causeCode, description, currency
  // claimStatus: omit to store NOTIFIED
}

// Withdraw, cancel, and close send { "reason": "why" }
```

A successful create returns the record id, a business reference, and the status name. Lines of business include motor, property, liability, life, health, marine, aviation, accident, and other. The type names are `QuoteCommand`, `PolicyCommand`, and `ClaimCommand`. The panel of paths is on the [insurance API](../../api/insurance.md).
