# Contract

<p class="ff-steward">Stewarded by the Firefly Software Foundation. <a href="mailto:dev@fireflysoftware.io">dev@fireflysoftware.io</a></p>


A contract is the agreement: who is on it, which products, in which currency, and whether it amends or renews an earlier agreement.

## What it owns

- The contract header and its status history.
- One or more product lines. `contract.product_id` is the primary line.
- Currency as `currency_code`, a `VARCHAR(3)`.
- An optional predecessor. `link_kind` is `AMENDMENT` or `RENEWAL`.

## What it does not own

It does not own the party, the product catalog, or the account. Party and product appear as identifiers. A contract does not link to itself.

## Ubiquitous language

| Name in code | Meaning |
| --- | --- |
| `contract_line` | A product on the agreement. More than one line is allowed. |
| `product_id` | The primary line. |
| `predecessor_contract_id` | The earlier contract this one amends or renews. |
| `link_kind` | `AMENDMENT` or `RENEWAL`. |
| Status | `DRAFT`, `PENDING_APPROVAL`, `ACTIVE`, `SUSPENDED`, `TERMINATED`, `EXPIRED`, `CANCELLED`. |
| Delete | Only in `DRAFT`. A later status is a status change, not a hard delete. |

Next: [Journeys](journeys.md).
