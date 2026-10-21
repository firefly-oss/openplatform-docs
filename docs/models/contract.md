# Contract

`core-common-contract-mgmt` owns the tables. `domain-common-contracts` owns the saga. Source commits: contract core `41d1f57`, domain `5aec18b`.

## Shape

`currency_code` is `VARCHAR(3)`.

A contract has one or more `contract_line` rows when more than one product is on the agreement. `contract.product_id` is the primary line.

`predecessor_contract_id` points at an earlier contract. `link_kind` is `AMENDMENT` or `RENEWAL`. A contract does not link to itself.

## Status and delete

Status values used by the domain are `DRAFT`, `PENDING_APPROVAL`, `ACTIVE`, `SUSPENDED`, `TERMINATED`, `EXPIRED`, and `CANCELLED`.

Delete runs only in `DRAFT`. A later status is a status change, with compensation that restores the previous history row, not a hard delete of an open contract.

The domain calls the contract core SDK and does not import that core's internals.

Catalog: [Contract](../catalog/contract.md).
