# Accounts and financial records

**Module id:** `accounts`

Account relationships kept apart from financial movements, each with a
clear owner.

Public product page:
<https://fireflysoftware.io/openplatform/modules/>

## When you need this module

Use `accounts` when you need account relationships, balances, restrictions, or posting into ledger and general-ledger structures. Keep relationship data and financial movements in the services that own them; do not collapse everything into one table model.

## Coverage

- Accounts, balances, restrictions, and account spaces
- Transactions, transaction legs, and status history
- General-ledger accounts, journal batches, and entries

## How it is used

1. Experience or domain account services open or update relationships.
2. `core-banking-accounts` holds account state.
3. Ledger and GL cores post movements according to the institution’s accounting model.
4. Institution cores that remain books of record connect through adapters.

Coordinate account opening and design posting controls around the
institution’s accounting model. Account services hold relationships;
ledger and GL services hold movements and books.

## Key repositories

| Repository | Layer | Role |
|------------|-------|------|
| <a href="https://github.com/firefly-oss/core-banking-accounts"><code>core-banking-accounts</code></a> | `core-*` | Account relationship persistence |
| <a href="https://github.com/firefly-oss/domain-banking-accounts"><code>domain-banking-accounts</code></a> | `domain-*` | Account domain orchestration |
| <a href="https://github.com/firefly-oss/core-banking-ledger"><code>core-banking-ledger</code></a> | `core-*` | Ledger movements and posting |
| <a href="https://github.com/firefly-oss/core-common-accounting-gl"><code>core-common-accounting-gl</code></a> | `core-*` | General-ledger accounts and journals |

Experience layer: <a href="https://github.com/firefly-oss/exp-accounts"><code>exp-accounts</code></a>.

## API and events

OpenAPI paths for this module:
<a href="../reference/openapi.md#accounts-accounts">OpenAPI index — accounts</a>.

Event contracts: <a href="../reference/events.md">stub until published</a>.

## Maturity notes

Banking account, ledger, and GL repositories are present under
`firefly-oss`. Institution cores that remain authoritative connect through
adapters rather than by replacing every book of record by default.

Parent pin for new work: Jafly **26.10.19** / Boot **4.1.1** / Java **25**.

## Related modules

- <a href="customers.md">Customers and relationships</a>
- <a href="payments.md">Payments and cards</a>
- <a href="lending.md">The lending lifecycle</a>
- <a href="catalog.md">Business modules catalogue</a>

## What next

See [Payments](payments.md) for money movement at the rail/PSP edge, and [Customers](customers.md) for party ids.
