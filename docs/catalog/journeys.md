# Onboarding and other journeys

Experience services own journeys. Each step calls a port. The default adapter calls a domain service. A later process engine can implement the same port. Nothing on this page says that engine is already running.

`exp-security` is listed with [Security and access](security.md) because it is the sign-in journey. The journey narratives are under [Journeys](../journeys/index.md).



## Experience

<div class="ff-entry ff-entry--experience" markdown="1">
<p class="ff-kicker">Experience</p>

### exp-accounts

Owns the account journey: open, summary, list, and close. Each step calls a port. The default adapter calls `domain-banking-accounts`, and it can call `domain-common-notifications`. A later process engine can implement the same port.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/exp-accounts">github.com/fireflysoftwaresolutions/exp-accounts</a></p>

</div>

<div class="ff-entry ff-entry--experience" markdown="1">
<p class="ff-kicker">Experience</p>

### exp-cards

Owns the card journey: issue, summary, list, activate, block, and cancel. The default adapter calls `domain-banking-cards`, and it can call `domain-common-notifications`.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/exp-cards">github.com/fireflysoftwaresolutions/exp-cards</a></p>

</div>

<div class="ff-entry ff-entry--experience" markdown="1">
<p class="ff-kicker">Experience</p>

### exp-channel-management

Owns channel startup reads: branding, languages, and reference data in one response. It calls `domain-core-configuration` and `domain-distributor-branding`.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/exp-channel-management">github.com/fireflysoftwaresolutions/exp-channel-management</a></p>

</div>

<div class="ff-entry ff-entry--experience" markdown="1">
<p class="ff-kicker">Experience</p>

### exp-distributor

Owns the distributor-portal journey: registration, branding, catalog, territories, and agents. It calls the distributor, product, contract, and notification domain services.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/exp-distributor">github.com/fireflysoftwaresolutions/exp-distributor</a></p>

</div>

<div class="ff-entry ff-entry--experience" markdown="1">
<p class="ff-kicker">Experience</p>

### exp-lending

Owns lending screens from simulation and application through offer, signing, and servicing. Its build calls five lending domains: origination, servicing, credit scoring, asset finance, and personal loans, plus product, pricing, contracts, strong customer authentication, and notifications. The other lending domains are published and are not on this classpath yet.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/exp-lending">github.com/fireflysoftwaresolutions/exp-lending</a></p>

</div>

<div class="ff-entry ff-entry--experience" markdown="1">
<p class="ff-kicker">Experience</p>

### exp-notifications

Owns the in-app notification journey: list, read, dismiss, unread count, and preferences. The default adapter calls `domain-common-notifications`.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/exp-notifications">github.com/fireflysoftwaresolutions/exp-notifications</a></p>

</div>

<div class="ff-entry ff-entry--experience" markdown="1">
<p class="ff-kicker">Experience</p>

### exp-onboarding

Owns onboarding for a natural person and for a legal entity. Each step calls a port. The default adapter calls `domain-customer-people`, `domain-customer-kyc-kyb`, and `domain-common-notifications`. A later process engine can implement the same port. Industry classification is a scheme plus a code. Occupation and monthly income stay on the person. Employment, housing, loans, and debts are party attributes.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/exp-onboarding">github.com/fireflysoftwaresolutions/exp-onboarding</a></p>

</div>

<div class="ff-entry ff-entry--experience" markdown="1">
<p class="ff-kicker">Experience</p>

### exp-profile

Owns the signed-in customer profile journey: read and update the person, contacts, documents, consents, and contract summaries. It calls `domain-customer-people` and `domain-common-contracts`.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/exp-profile">github.com/fireflysoftwaresolutions/exp-profile</a></p>

</div>


## Application

<div class="ff-entry ff-entry--application" markdown="1">
<p class="ff-kicker">Application</p>

### bfc-initconfig

Channel startup service. It returns initialization data such as countries, currencies, and other parameters a client needs before a journey starts.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/bfc-initconfig">github.com/fireflysoftwaresolutions/bfc-initconfig</a></p>

</div>


## Related


- [All services](index.md)

- [Layers](../layers/index.md)

- [Replace an adapter](../adapters/index.md)

