# Presentation

<img class="ff-mark ff-mark--light" src="assets/brand/firefly-logo-primary-colour.svg" alt="Firefly" width="160" height="40">
<img class="ff-mark ff-mark--dark" src="assets/brand/firefly-logo-primary-reversed.svg" alt="" width="160" height="40">

OpenPlatform is the open-source project of the Firefly Software Foundation and Firefly Software Solutions Inc. They stay two bodies. The Foundation stewards the project. The company stands behind it. Contact remains the Firefly Software Foundation, [dev@fireflysoftware.io](mailto:dev@fireflysoftware.io).

It is a set of corporate systems an institution can run for banking and for insurance. A new institution can start on these cores. An institution that already has systems can keep them and replace one edge at a time. The institution runs the software. The records stay in the cores. A rail, a card provider, or an identity provider is a replaceable edge. The journey a person follows does not change when that edge changes.

A journey is what a person or an employee does in one sitting. Onboarding is how someone becomes a customer, and the product family decides whether that sitting includes identity checks. Profile is how that person later reads who they are and which agreements they hold. Payments are how money the bank holds actually moves. Insurance is how a cover is quoted, bound, and claimed. Insurance does not move money, and it does not certify IFRS 17 or Solvency II.

The published version of this documentation is 26.10.3.

## One afternoon with Ada

The sandbox person is Ada Lovelace. She signs in with the name `sample-journey`. That name resolves to actor `11111111-1111-4111-8111-111111111111`. She is allowed to read and to create the sample resources. The username `denied-actor` is refused, and a refused caller never reaches the record.

The sandbox agreement is `10000000-0000-4000-8000-000000000021`. The document that prints that agreement is a Horizon Personal Loan for Ada, five years, with two lines.
Source: the sandbox sample prints 250,000.00 EUR. That printed page is the [documents](shared/documents.md) chapter. It is a reading copy. It is not a movement of money.

<div class="ff-journey" markdown="0">
<img src="assets/journeys/presentation.svg" alt="Sequence: Ada signs in as sample-journey, access allows her, and agreement 021 is the Horizon Personal Loan for five years with two lines.">
</div>

From that sign-in, the rest of this book is the same person on the same agreement.

If she is new and names insurance as the product family, onboarding opens a contract and does not start an identity case. Insurance is not a regulated banking family. If she names deposits, cards, lending, or payments, onboarding registers her and waits for identity evidence. That split is the [onboarding](experience/public/onboarding.md) chapter.

Once she exists, her [profile](experience/public/profile.md) lists the agreements the contract service holds for her, each with its number, its status, and the product name.

If she sends money, that is a separate sitting. A domestic or international credit is reserved, she receives a numeric code, and only a matching code posts the ledger and then sends the rail. An internal move, including a move between spaces of one account, posts the ledger and does not ask for a code. Money arriving from outside is posted once. That sitting is [payments](experience/public/payments.md).

If she wants cover, she asks for a quote, then binds a policy, then registers a claim. Later she can change a status, withdraw the quote, cancel the policy, or close the claim. Endorse and renew are not operations on that journey. That sitting is [insurance](experience/public/insurance.md).

If she asks for the Horizon Personal Loan, that is [lending](experience/public/lending.md). The product chooses the record. After the loan exists she can change the rate, close it, or take a payment holiday. Paying the money out tries, then confirms.

## Where to go next

- [Start here](quickstart.md) for the calls in this path.
- [Jafly](jafly.md) for the framework under identity and decisions.
- [Replace an adapter](adapters/index.md) for the edges an installer swaps.
- [Service landscape](layers/bian.md) and [insurance standards](layers/acord.md) for the coverage maps.
