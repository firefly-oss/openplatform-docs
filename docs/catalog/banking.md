# Banking

<p class="ff-steward">Stewarded by the Firefly Software Foundation. <a href="mailto:dev@fireflysoftware.io">dev@fireflysoftware.io</a></p>


Operational banking spans accounts, cards, payments, ledger records, and open-banking access. These are separate authorities with explicitly integrated journeys. `domain-payments` consumes ledger and payment core SDKs; account opening and funding still require their own qualified integration. Follow the [banking manual](../journeys/banking.md) and detailed [payment obligations](../journeys/payments.md).

Deletion and terminal-state protection must be verified for each aggregate and every public service/HTTP/cascade path. Managed ledger postings have explicit protection; this does not establish a universal guard across every banking record. Ledger party columns are `initiating_party_identifier` and `card_merchant_tax_id`, not NIF or CIF.



## Domain

<div class="ff-entry ff-entry--domain" markdown="1">
<p class="ff-kicker">Domain</p>

### domain-banking-accounts

Owns the account saga: open, update, and close, with compensation, through `core-banking-accounts`. The build also includes the contract and ledger SDKs.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/domain-banking-accounts">github.com/fireflysoftwaresolutions/domain-banking-accounts</a></p>

</div>

<div class="ff-entry ff-entry--domain" markdown="1">
<p class="ff-kicker">Domain</p>

### domain-banking-cards

Owns the card saga: issue, activate, block, replace, and cancel, with compensation, through `core-banking-cards`. It also calls `core-lending-credit-cards`. The build includes the ledger SDK.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/domain-banking-cards">github.com/fireflysoftwaresolutions/domain-banking-cards</a></p>

</div>


## Core

<div class="ff-entry ff-entry--core" markdown="1">
<p class="ff-kicker">Core</p>

### core-banking-accounts

Owns account records, balances, parameters, providers, spaces, and restrictions. An open account is not hard-deleted. `domain-banking-accounts` is the domain orchestrator.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/core-banking-accounts">github.com/fireflysoftwaresolutions/core-banking-accounts</a></p>

</div>

<div class="ff-entry ff-entry--core" markdown="1">
<p class="ff-kicker">Core</p>

### core-banking-cards

Owns payment-card records, including physical and virtual cards. An open card is not hard-deleted. `domain-banking-cards` is the domain orchestrator.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/core-banking-cards">github.com/fireflysoftwaresolutions/core-banking-cards</a></p>

</div>

<div class="ff-entry ff-entry--core" markdown="1">
<p class="ff-kicker">Core</p>

### core-banking-ledger

Owns ledger transactions. The initiating party is `initiating_party_identifier`. A card merchant tax identifier is `card_merchant_tax_id`. Those columns are not NIF or CIF. An open ledger record is not hard-deleted. `domain-payments` consumes this core through its SDK.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/core-banking-ledger">github.com/fireflysoftwaresolutions/core-banking-ledger</a></p>

</div>

<div class="ff-entry ff-entry--core" markdown="1">
<p class="ff-kicker">Core</p>

### core-banking-payments

Owns payment orders, instructions, schedules, and related payment records. An open payment record is not hard-deleted. `domain-payments` consumes this core through its SDK.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/core-banking-payments">github.com/fireflysoftwaresolutions/core-banking-payments</a></p>

</div>

<div class="ff-entry ff-entry--core" markdown="1">
<p class="ff-kicker">Core</p>

### core-banking-psdx

Owns open-banking access records for account information and payment initiation, including consent. This is a core without a domain orchestrator. Regulatory duties stay with the institution.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/core-banking-psdx">github.com/fireflysoftwaresolutions/core-banking-psdx</a></p>

</div>


## Related


- [All services](index.md)

- [Layers](../layers/index.md)

- [Replace an adapter](../adapters/index.md)

