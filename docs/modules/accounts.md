# Accounts and financial records

**Module id:** `accounts`

Account relationships kept apart from financial movements. Account services hold relationships; ledger and general-ledger services hold postings and books.

Public product page: <https://fireflysoftware.io/openplatform/modules/>

## Why this module exists

Mixing “who owns the account” with “how money was posted” in one dump makes accounting changes dangerous. OpenPlatform splits relationship state from ledger and GL movements so teams can evolve posting rules without rewriting every channel journey. Institution cores that remain books of record connect through adapters rather than being replaced by default.

## When to use it

Use `accounts` when you need account relationships, balances, restrictions, or posting into ledger and general-ledger structures.

Keep relationship data and financial movements in the services that own them. Do not collapse everything into one table model.

## Key concepts

| Concept | Meaning in this module |
|---------|------------------------|
| Account relationship | Party-linked account record, balances, restrictions |
| Ledger movement | Posting and status history for financial events |
| General ledger | GL accounts, journal batches, and entries |
| Book-of-record boundary | Institution core reached through adapters when it stays authoritative |

## Layer map (repos that exist)

| Repository | Layer | Role |
|------------|-------|------|
| [`core-banking-accounts`](https://github.com/firefly-oss/core-banking-accounts) | `core-*` | Account relationship persistence |
| [`domain-banking-accounts`](https://github.com/firefly-oss/domain-banking-accounts) | `domain-*` | Account domain orchestration |
| [`exp-accounts`](https://github.com/firefly-oss/exp-accounts) | `exp-*` | Account journeys for channels |
| [`core-banking-ledger`](https://github.com/firefly-oss/core-banking-ledger) | `core-*` | Ledger movements and posting |
| [`core-common-accounting-gl`](https://github.com/firefly-oss/core-common-accounting-gl) | `core-*` | General-ledger accounts and journals |

**Gap:** there is no `domain-banking-ledger` or `exp-ledger` in the inventory. Ledger and GL are core-facing today; experience work goes through `exp-accounts` or adjacent payment/lending journeys.

## How a typical call path looks

1. Experience or domain account services open or update relationships.
2. `core-banking-accounts` holds account state.
3. Ledger and GL cores post movements according to the institution’s accounting model.
4. Institution cores that remain books of record connect through adapters.

## How to start

1. Confirm pins: **26.10.19** / Boot **4.1.1** / Java **25**.
2. Mirror `exp-accounts` for channel work or `domain-banking-accounts` for domain orchestration ([First service](../start/first-service.md)).
3. Read OpenAPI for accounts before assuming ledger endpoints live on the same service.
4. For money movement at the rail edge, continue to [payments](payments.md).

## OpenAPI

| Repository | Spec |
|------------|------|
| `core-banking-accounts` | [`…/openapi.yml`](https://github.com/firefly-oss/core-banking-accounts/blob/main/core-banking-accounts-sdk/src/main/resources/openapi.yml) |
| `domain-banking-accounts` | [`…/openapi.yml`](https://github.com/firefly-oss/domain-banking-accounts/blob/main/domain-banking-accounts-sdk/src/main/resources/openapi.yml) |
| `exp-accounts` | [`…/openapi.yml`](https://github.com/firefly-oss/exp-accounts/blob/main/exp-accounts-sdk/src/main/resources/openapi.yml) |
| `core-banking-ledger` | [`…/openapi.yml`](https://github.com/firefly-oss/core-banking-ledger/blob/main/core-banking-ledger-sdk/src/main/resources/openapi.yml) |
| `core-common-accounting-gl` | [`…/openapi.yml`](https://github.com/firefly-oss/core-common-accounting-gl/blob/main/core-common-accounting-gl-sdk/src/main/resources/openapi.yml) |

Full index: [OpenAPI — accounts](../reference/openapi.md#accounts-accounts).

## Events

[Stub until published](../reference/events.md).

## Maturity notes

Banking account, ledger, and GL repositories are present under `firefly-oss`. Institution cores that remain authoritative connect through adapters. Parent pin for new work: **26.10.19**.

## Related modules

- [Customers and relationships](customers.md)
- [Payments and cards](payments.md)
- [The lending lifecycle](lending.md)
- [Business modules catalogue](catalog.md)

## Next steps

See [Payments](payments.md) for rail and PSP boundaries, and [Customers](customers.md) for party ids on account relationships.
