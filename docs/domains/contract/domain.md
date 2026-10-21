# Contract domain

[domain-common-contracts](https://github.com/fireflysoftwaresolutions/domain-common-contracts) owns the saga: create, update, status change, and delete. Delete runs only when the contract is `DRAFT`. Compensation restores the previous status history. The service calls `core-common-contract-mgmt` and does not import that core's internals.

Next: [Core](core.md).
