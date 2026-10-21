# Contract journeys

Other journeys call the contract domain when they need an agreement. They do not call `core-common-contract-mgmt` directly.

| Journey | How it uses the contract |
| --- | --- |
| [exp-profile](https://github.com/fireflysoftwaresolutions/exp-profile) | Reads contract summaries through `domain-common-contracts`. |
| [exp-lending](https://github.com/fireflysoftwaresolutions/exp-lending) | Calls `domain-common-contracts` when a lending screen needs the agreement. |
| [exp-distributor](https://github.com/fireflysoftwaresolutions/exp-distributor) | Calls `domain-common-contracts` for distributor agreements. |
| [domain-banking-accounts](https://github.com/fireflysoftwaresolutions/domain-banking-accounts) | Its build includes the contract SDK when an account is tied to an agreement. The account journey still enters through `exp-accounts`, which calls the account domain. |

Next: [Domain](domain.md).
