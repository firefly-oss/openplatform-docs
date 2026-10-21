# Customer and party

Party is the customer record. A party is either a natural person or a legal entity. Industry classification is a scheme plus a code, not a single national activity-code column. KYC and KYB cases are a second pair of services on the same family.

The data rules are on the [party model](../models/party.md). Onboarding calls these services from [exp-onboarding](journeys.md#exp-onboarding).



## Domain

<div class="ff-entry ff-entry--domain" markdown="1">
<p class="ff-kicker">Domain</p>

### domain-customer-kyc-kyb

Owns the KYC and KYB saga: open a case, attach evidence, and change status, with compensation on create, through `core-common-kycb-mgmt`.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/domain-customer-kyc-kyb">github.com/fireflysoftwaresolutions/domain-customer-kyc-kyb</a></p>

</div>

<div class="ff-entry ff-entry--domain" markdown="1">
<p class="ff-kicker">Domain</p>

### domain-customer-people

Owns the party saga: create, update, status change, and relationship changes for a natural person or a legal entity, with compensation, through `core-common-customer-mgmt`.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/domain-customer-people">github.com/fireflysoftwaresolutions/domain-customer-people</a></p>

</div>


## Core

<div class="ff-entry ff-entry--core" markdown="1">
<p class="ff-kicker">Core</p>

### core-common-customer-mgmt

Owns party, natural person, and legal entity rows, plus industry classification, party attributes, and relationship edges. `domain-customer-people` is the domain orchestrator. See the party model.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/core-common-customer-mgmt">github.com/fireflysoftwaresolutions/core-common-customer-mgmt</a></p>

</div>

<div class="ff-entry ff-entry--core" markdown="1">
<p class="ff-kicker">Core</p>

### core-common-kycb-mgmt

Owns KYC, KYB, and AML screening records. `domain-customer-kyc-kyb` is the domain orchestrator.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/core-common-kycb-mgmt">github.com/fireflysoftwaresolutions/core-common-kycb-mgmt</a></p>

</div>


## Related


- [All services](index.md)

- [Layers](../layers/index.md)

- [Replace an adapter](../adapters/index.md)

