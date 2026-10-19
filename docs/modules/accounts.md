# Accounts and financial records

**Module id:** `accounts`

<p class="ff-lead">Who holds the account, kept apart from how money was posted.</p>

Account services hold relationships. Ledger and general-ledger services hold movements and books. An institution core that remains the book of record connects through an adapter.

<figure class="ff-figure">
  <img src="/diagrams/module-accounts.svg?v=20261019b" alt="Accounts, read top to bottom: account opening, then relationships, then ledger and general ledger" width="960" height="484" />
  <figcaption>Read top to bottom. The channel opens the account. The domain holds the relationship. The core holds the account record, the ledger, and the general ledger.</figcaption>
</figure>

`exp-accounts` is the channel. `domain-banking-accounts` coordinates the relationship. Three core services split the record: `core-banking-accounts`, `core-banking-ledger`, and `core-common-accounting-gl`. There is no `domain-banking-ledger` and no `exp-ledger`.

<div class="ff-split" markdown="0">
  <section class="ff-panel">
    <h3>What it owns</h3>
    <ul>
      <li>Account relationships, holders, spaces, balances, and restrictions</li>
      <li>Account opening for a channel</li>
      <li>Ledger transactions and the lines that make a posting</li>
      <li>General-ledger accounts, journal batches, entries, and lines</li>
    </ul>
  </section>
  <section class="ff-panel">
    <h3>What it does not own</h3>
    <ul>
      <li>The party. That is <a href="/modules/customers/">customers</a>.</li>
      <li>Payment orders and card records. Those are <a href="/modules/payments/">payments</a>.</li>
      <li>Loan schedules. Those are <a href="/modules/lending/">lending</a>.</li>
      <li>An institution core that remains the book of record. That stays behind an <a href="/integrate/adapters/">adapter</a>.</li>
    </ul>
  </section>
</div>

## Repositories

| Repository | Layer | What it holds | OpenAPI |
|------------|-------|---------------|---------|
| [`exp-accounts`](https://github.com/firefly-oss/exp-accounts) | Experience | Account opening journey and accounts by party | [openapi.yml](https://github.com/firefly-oss/exp-accounts/blob/main/exp-accounts-sdk/src/main/resources/openapi.yml) |
| [`domain-banking-accounts`](https://github.com/firefly-oss/domain-banking-accounts) | Domain | Holders, accounts, spaces, restrictions, back office | [openapi.yml](https://github.com/firefly-oss/domain-banking-accounts/blob/main/domain-banking-accounts-sdk/src/main/resources/openapi.yml) |
| [`core-banking-accounts`](https://github.com/firefly-oss/core-banking-accounts) | Core | Account relationships, balances, restrictions, spaces | [openapi.yml](https://github.com/firefly-oss/core-banking-accounts/blob/main/core-banking-accounts-sdk/src/main/resources/openapi.yml) |
| [`core-banking-ledger`](https://github.com/firefly-oss/core-banking-ledger) | Core | Transactions, lines, statements | [openapi.yml](https://github.com/firefly-oss/core-banking-ledger/blob/main/core-banking-ledger-sdk/src/main/resources/openapi.yml) |
| [`core-common-accounting-gl`](https://github.com/firefly-oss/core-common-accounting-gl) | Core | GL accounts and journal batches | [openapi.yml](https://github.com/firefly-oss/core-common-accounting-gl/blob/main/core-common-accounting-gl-sdk/src/main/resources/openapi.yml) |

## How the pieces fit

`exp-accounts` exposes the account-opening journey and accounts for a party. That is the channel edge.

`domain-banking-accounts` coordinates holders, accounts, spaces, and restrictions, including a back-office view. It does not post the ledger.

`core-banking-accounts` persists the relationship: accounts, spaces, balances, restrictions, parameters, and status. `core-banking-ledger` persists transactions and typed lines (transfers, fees, interest, deposits, withdrawals, and scheme-specific lines listed in that spec). `core-common-accounting-gl` persists GL accounts, journal batches, entries, and lines.

A payment or a loan keeps its own record and posts here when the movement belongs on the books. The three cores are not one table.

## Related

- [Customers](customers.md) for the party on the account
- [Payments](payments.md) for orders that may post
- [Lending](lending.md) for servicing movements
- [Adapters](../integrate/adapters.md)
- [Catalogue](catalog.md)
