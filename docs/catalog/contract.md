# Contract

A contract is the agreement record: parties, product lines, currency, status, and an optional predecessor. The domain saga is the only writer. The core owns the rows.

The data rules are on the [contract model](../models/contract.md).



## Domain

<div class="ff-entry ff-entry--domain" markdown="1">
<p class="ff-kicker">Domain</p>

### domain-common-contracts

Owns the contract saga: create, update, status change, and delete. Delete runs only when the contract is `DRAFT`. It calls `core-common-contract-mgmt` and does not import that core's internals.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/domain-common-contracts">github.com/fireflysoftwaresolutions/domain-common-contracts</a></p>

</div>


## Core

<div class="ff-entry ff-entry--core" markdown="1">
<p class="ff-kicker">Core</p>

### core-common-contract-mgmt

Owns contract rows, contract lines, status history, and predecessor links. Currency is `currency_code` as `VARCHAR(3)`. `domain-common-contracts` is the domain orchestrator. See the contract model.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/core-common-contract-mgmt">github.com/fireflysoftwaresolutions/core-common-contract-mgmt</a></p>

</div>


## Related


- [All services](index.md)

- [Layers](../layers/index.md)

- [Replace an adapter](../adapters/index.md)

