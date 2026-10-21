# Presentation

<img class="ff-mark ff-mark--light" src="assets/brand/firefly-logo-primary-colour.svg" alt="Firefly" width="160" height="40">
<img class="ff-mark ff-mark--dark" src="assets/brand/firefly-logo-primary-reversed.svg" alt="" width="160" height="40">

OpenPlatform is the open-source project of the Firefly Software Foundation and Firefly Software Solutions Inc. They stay two bodies. The Foundation stewards the project. The company stands behind it. Contact remains the Firefly Software Foundation, [dev@fireflysoftware.io](mailto:dev@fireflysoftware.io).

It is a set of corporate systems for enterprise industries. Banking and insurance come first. Another industry uses the same shape later: a journey, a domain port, a core.

A new institution can start on these cores. An existing institution can modernize and digitize and still control what it has. The institution runs the software. The data stays in the cores. A BPM, a rail, a PSP, or an IAM replaces an adapter.

A journey is what a person or an employee does. It is not a copy of a domain. Onboarding takes a regulated banking product or a non-regulated product such as insurance. Profile reads the person and the contracts and products they hold. Accounts, cards, and lending stay separate: lending is where a person applies and, once the loan exists, where servicing continues. Payments are their own journey: an internal transfer or a movement between account spaces, a domestic or international transfer by rail, and a card movement by PSP. Insurance is its own journey: quote, bind, service the policy, and claim. Staff terminals administer and impersonate. Impersonation stores the employee id and the customer id.

We are the bank. The ledger posts every movement of money we hold. An internal transfer or a movement between account spaces stays on the ledger. Domestic and international transfers use `library-rails`, and international is SWIFT. A card uses `library-psps`. Insurance does not move money and does not certify IFRS 17 or Solvency II.

Each external edge is a port. The repository ships a sandbox adapter, and a property switches the live adapter. Jafly, from [Firefly Framework](https://fireflyframework.org), is the identity and the rules engine we ship. Sandbox adapters are the default. The [adapter page](adapters/index.md) lists the ports.

## Where to go next

- [Start here](quickstart.md)
- [Jafly](jafly.md)
- [Banking](catalog/banking.md)
- [Insurance](experience/public/insurance.md)
