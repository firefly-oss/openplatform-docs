# Start here

<p class="ff-steward">Stewarded by the Firefly Software Foundation. <a href="mailto:dev@fireflysoftware.io">dev@fireflysoftware.io</a></p>

This is the sandbox path for OpenPlatform 26.10.3. You sign Ada in, you ask whether she may act, and you ask for a decision only when the step creates something. The sandbox does not start an identity provider and it does not call a credit bureau. Jafly supplies the rules and the identity adapters. Their versions come from framework parent 26.10.20, imported by `firefly-parent` 26.10.3.

The person is Ada Lovelace, username `sample-journey`, actor `11111111-1111-4111-8111-111111111111`. The agreement you will see printed, and the agreement a payment can name, is `10000000-0000-4000-8000-000000000021`.

## Say who is calling

`POST http://localhost:8085/api/v1/identity/subjects`

```text
// request
{ "username": "sample-journey" }
// 200
{
  // actorId: 11111111-1111-4111-8111-111111111111
  // provider: sandbox
}
```

An unknown username is HTTP 404. A body with neither a username nor an actor id is HTTP 400. The sandbox does not read a password.

## Ask whether she may create a party

`POST http://localhost:8085/api/v1/access/checks`

```text
// request
{
  // actorId: 11111111-1111-4111-8111-111111111111
  // action: CREATE
  // resourceType: PARTY
  // resourceId: 10000000-0000-4000-8000-000000000001
}
```

Both allow and deny return HTTP 200. `allowed: true` means the journey may continue. `allowed: false` means stop. Do not call the domain. `denied-actor` is `22222222-2222-4222-8222-222222222222` and is not allowed.

## Ask for a decision

`POST http://localhost:8042/api/v1/decisions`

```text
// request. Omit creditScore. The sandbox report fills 640.
{
  // partyId: 11111111-1111-4111-8111-111111111111
  // journeyStep: ONBOARDING
  // attributes: { highRisk: false }
}
// outcome: REFER
// reasonCodes: CREDIT_SCORE_BELOW_THRESHOLD
```

The sample threshold is 680, so 640 is a referral. A referral does not stop the journey. `highRisk: true` is a decline with `HIGH_RISK`, and a decline does not write the record. `journeyStep` may also be `INSURANCE_QUOTE`, `INSURANCE_BIND`, or `CLAIM`.

## Continue with one sitting

Onboard a person at `POST http://localhost:8096/api/v1/onboarding/individuals`. Send `productFamily` `INSURANCE` when she is buying cover. That path opens a contract and does not start identity checks. Omit the family, or send `DEPOSITS`, and the regulated path registers her and waits for personal data, economic data, identity documents, a verification signal, and completion. The body and the later signals are on the [onboarding](experience/public/onboarding.md) page and the [onboarding API](api/onboarding.md).

Read what she holds at `GET http://localhost:8103/api/v1/experience/profile/11111111-1111-4111-8111-111111111111/contracts`. Each row is an agreement and the product on it. See [profile](experience/public/profile.md).

Issue the reading copy of agreement `10000000-0000-4000-8000-000000000021` as template `contract`. The sample prints Horizon Personal Loan, five years, two lines.
Source: the sandbox sample prints 250,000.00 EUR. See [documents](shared/documents.md).

Send money only from the [payments](experience/public/payments.md) page. Try, then confirm. The ledger posts on confirm, not on try.

Quote, bind, and claim from the [insurance](experience/public/insurance.md) page. Those three ask for a decision. Status, withdraw, cancel, and close do not. Insurance does not move that amount.

## Sample actors

| Username | Actor id | What the sandbox allows |
| --- | --- | --- |
| `sample-journey` | `11111111-1111-4111-8111-111111111111` | Read and create on the sample party, account, card, policy, claim, contract, and product. |
| `sample-employee` | `33333333-3333-4333-8333-333333333333` | Read, plus administer and impersonate. |
| `denied-actor` | `22222222-2222-4222-8222-222222222222` | Nothing. The access check returns `allowed: false`. |

Apply for the Horizon Personal Loan at `POST http://localhost:8102/api/v1/experience/lending/applications` with product `10000000-0000-4000-8000-000000000202`, amount 250,000.00, and term 60. The journey reads `journey.lending.min-credit-score` before it decides. See [lending](experience/public/lending.md).
