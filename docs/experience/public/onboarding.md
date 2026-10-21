# Onboarding

Someone new becomes a customer, or a company does. The same service runs both. What happens next depends on the product family she names. Banking families are regulated: deposits, payments, lending, and cards. Insurance is not. A regulated start registers the person and opens identity checks. A non-regulated start opens a contract and leaves quote, bind, and claim to the insurance journey. A decline stops either path before that write.

Ada Lovelace can be the person who starts. If she sends her party id `11111111-1111-4111-8111-111111111111`, that id is the one sent to the decision. If she omits it, the tenant id is used for the decision. The sandbox agreement `10000000-0000-4000-8000-000000000021` is not created by this call. A non-regulated start asks the contract service for a new contract id and returns that id as the onboarding id.

The journey checks access as `sample-journey`, the sandbox customer. If that check is not allowed, nothing is registered and no contract is opened.

The decision runs next, for onboarding. She does not send a score. The sandbox report is 640, below 680, so the outcome is a referral. A referral continues. High risk is a decline, and a decline does not register her and does not open a contract.

If she sends product family `INSURANCE`, the catalog says the family is not regulated and the industry is insurance. The journey opens a contract for that industry and stops. The response phase is `NON_REGULATED`. There is no identity case and no welcome-and-wait.

If she omits the family, or she sends `DEPOSITS`, `PAYMENTS`, `LENDING`, or `CARDS`, the regulated path starts. For a person it registers her from her name and email, opens an identity case, and sends a welcome. It then waits. She submits personal data, economic data, and identity documents, asks for verification, and asks to complete. A company uses the business call and waits for company data, beneficial owners, documents, authorized signers, a business verification signal, and completion. Replaying the same email does not create a second person.

<div class="ff-journey" markdown="0">
<img src="../../../assets/journeys/onboarding.svg" alt="Sequence: Ada names a product family. Access and the decision run first. A decline stops. Insurance opens a contract. A deposit registers her and opens verification. A later failure closes her and cancels the case.">
</div>

If a later step of the regulated path fails after she has been registered, the journey asks for her closure and cancels the identity case. If registration never produced a person, that closure is skipped. If a step inside registration fails after some of her records exist, those records are removed.

A family the catalog does not know does not open a contract and does not start verification.

## What a refusal does

When access is not allowed, the workflow does not start and no contract is opened.

A decline returns the decision failure and writes neither a person nor a contract. The sample decline is high risk, reason `HIGH_RISK`.

A malformed personal, economic, or document signal is HTTP 400. If the regulated start does not reach the first wait within 30 seconds, the call times out. If the workflow has already failed, been cancelled, or timed out, the start is refused instead of returning an empty person.

The published spec lists tenant, first name, last name, and email as required. The service also reads `productFamily`, `partyId`, and `actorId` when they are present. Omitting `productFamily` is the regulated path, not an error.

## Reference

Person: `POST /api/v1/onboarding/individuals` on port 8096.

```text
// Insurance. Opens a contract. Does not start identity checks.
{
  // tenantId: required identifier
  // firstName: Ada
  // lastName: Lovelace
  // email: her email
  // partyId: 11111111-1111-4111-8111-111111111111
  // productFamily: INSURANCE
}
// onboardingId is the new contract id
// currentPhase: NON_REGULATED
// nextStep: INSURANCE

// A deposit. Registers her and waits.
{
  // same name and email
  // productFamily: DEPOSITS
}
```

Later person calls, each with the onboarding id from the start:

| Call | What she sends |
| --- | --- |
| `POST .../personal-data` | Address and personal details |
| `POST .../economic-data` | Income and housing |
| `POST .../identity-documents` | The documents |
| `POST .../kyc` | The signal to verify |
| `GET .../kyc/status` | Whether the case is open |
| `POST .../completion` | The signal to finish |

A company uses `POST /api/v1/onboarding/businesses` and then company data, beneficial owners, corporate documents, authorized signers, business verification, and completion.

The type names are `InitiateOnboardingCommand` and `ProductFamily`. The regulated families in the sandbox catalog are `DEPOSITS`, `PAYMENTS`, `LENDING`, and `CARDS`. `INSURANCE` is `NON_REGULATED`. The calls are also on the [onboarding API](../../api/onboarding.md).
