# Start here

<p class="ff-steward">Stewarded by the Firefly Software Foundation. <a href="mailto:dev@fireflysoftware.io">dev@fireflysoftware.io</a></p>

This is one path through the sandbox, for OpenPlatform 26.10.3. The person is Ada Lovelace the whole way. You sign her in, you ask whether she may act, and you ask for a decision only when the step creates a record. The sandbox does not start an identity provider and it does not call a credit bureau. Jafly supplies the rules and the identity adapters. Their versions come from framework parent 26.10.20, imported by `firefly-parent` 26.10.3.

Her username is `sample-journey`. Her actor id is `11111111-1111-4111-8111-111111111111`. The agreement you will see printed, and the agreement a payment or a policy can name, is `10000000-0000-4000-8000-000000000021`. The product on that agreement is the Horizon Personal Loan, `10000000-0000-4000-8000-000000000202`.

## Who is calling

`POST http://localhost:8085/api/v1/identity/subjects`

```text
{ "username": "sample-journey" }
```

She sees HTTP 200, actor `11111111-1111-4111-8111-111111111111`, and provider `sandbox`. An unknown username is HTTP 404. A body with neither a username nor an actor id is HTTP 400. The sandbox does not read a password. `denied-actor`, actor `22222222-2222-4222-8222-222222222222`, can be resolved and then fails the next check.

## Whether she may create a party

`POST http://localhost:8085/api/v1/access/checks`

```text
{
  // actorId: 11111111-1111-4111-8111-111111111111
  // action: CREATE
  // resourceType: PARTY
  // resourceId: 10000000-0000-4000-8000-000000000001
}
```

Both allow and deny return HTTP 200. She sees `allowed: true` and may continue. `allowed: false` means stop. Do not call the domain. That is what `denied-actor` sees.

## The decision, when the step creates a record

`POST http://localhost:8042/api/v1/decisions`

```text
{
  // partyId: 11111111-1111-4111-8111-111111111111
  // journeyStep: ONBOARDING
  // attributes: { highRisk: false }
}
```

Omit the score. The sandbox report fills 640. She sees `REFER` and `CREDIT_SCORE_BELOW_THRESHOLD`, because 640 is below 680. A referral does not stop her. `highRisk: true` is `DECLINE` and `HIGH_RISK`, and a decline does not write the record. The same call is used for `INSURANCE_QUOTE`, `INSURANCE_BIND`, `CLAIM`, and a lending application.

## The rest of the afternoon

Onboard her at `POST http://localhost:8096/api/v1/onboarding/individuals`. Send `productFamily` `INSURANCE` and she sees phase `NON_REGULATED` and a new contract id. She does not see an identity case. Send `DEPOSITS`, or omit the family, and she is registered and the journey waits for personal data, economic data, identity documents, a verification signal, and completion. The body is on [onboarding](experience/public/onboarding.md).

Read what she holds at `GET http://localhost:8103/api/v1/experience/profile/11111111-1111-4111-8111-111111111111/contracts`. Each row is an agreement and the product on it. Agreement `...021` appears only when the contract service holds it for her. See [profile](experience/public/profile.md).

Issue the reading copy of that agreement as template `contract`. She can read HTML: Horizon Personal Loan, five years, two lines, each part its own sheet.
Source: the sandbox sample prints 250,000.00 EUR. See [documents](shared/documents.md).

Send money from [payments](experience/public/payments.md). Try, then confirm with the numeric code. The word sandbox does not confirm. The ledger posts on confirm, not on try. Cancel releases a hold that was never posted. An inbound credit posts once.

Quote, bind, and claim from [insurance](experience/public/insurance.md). Those three ask for a decision. Status, withdraw, cancel, and close do not. Insurance does not move the loan amount and does not post a ledger entry.

Apply for the Horizon Personal Loan at `POST http://localhost:8102/api/v1/experience/lending/applications` with product `10000000-0000-4000-8000-000000000202`, the sample amount, and term 60. The journey reads `journey.lending.min-credit-score` before it decides. After the loan exists she can read `GET /api/v1/experience/lending/loans/{id}/calendar`. See [lending](experience/public/lending.md).

## Who else can call

| Username | Actor id | What the sandbox allows |
| --- | --- | --- |
| `sample-journey` | `11111111-1111-4111-8111-111111111111` | Read and create on the sample party, account, card, policy, claim, contract, and product. |
| `sample-employee` | `33333333-3333-4333-8333-333333333333` | Read, plus administer and impersonate. |
| `denied-actor` | `22222222-2222-4222-8222-222222222222` | Nothing. The access check returns `allowed: false`. |

The employee does not use Ada's calls. The finance terminal is port 8120 and the insurance terminal is port 8121.
