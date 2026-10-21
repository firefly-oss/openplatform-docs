# Accounts and cards

Two experience services cover this journey.

`exp-accounts` opens an account, reads a summary, lists a customer's accounts, and closes an account. The default adapter calls `domain-banking-accounts`. That domain's saga writes `core-banking-accounts`. Its build also includes the contract SDK and the ledger SDK.

`exp-cards` issues a card and changes its status. The default adapter calls `domain-banking-cards`. That domain writes `core-banking-cards` and calls `core-lending-credit-cards`. There is no `domain-lending-credit-cards` repository. Credit cards remain a core without a lending domain orchestrator.

An open account, an open card, an open ledger record, and an open payment record are not hard-deleted.

These cores have no experience service and no domain orchestrator in the release list:

- `core-banking-ledger`
- `core-banking-payments`
- `core-banking-psdx` (open-banking access)

Ledger identifiers are `initiating_party_identifier` and `card_merchant_tax_id`, not NIF or CIF.

Catalog: [Banking](../catalog/banking.md).
