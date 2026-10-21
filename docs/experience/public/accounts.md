# Open and close an account

The person opens a deposit account, reads it, and later closes it. That is one journey. It is not the card journey and not the lending journey.

<div class="ff-journey" markdown="0">
<img src="../../../assets/journeys/accounts.svg" alt="Sequence: person, experience, access, domain, core. Opening is compensated by closeAccount.">
</div>

## Steps

1. The person calls `POST /api/v1/accounts` on `exp-accounts`.
2. `AccessPort` must allow `CREATE` on `ACCOUNT`. A denial does not call the domain.
3. `OpenAccount` calls `domain-banking-accounts`. `OpenAccountSaga` runs `createAccount` on `core-banking-accounts`. Compensation closes that account.
4. A later `DELETE /api/v1/accounts/{accountId}` checks `CLOSE`, then `CloseAccountSaga` updates the status on the same core.

The account domain also creates a contract row as part of opening. That call stays inside the account saga. The person does not call the contract experience.

## Domain sagas and cores

| Task | Saga | Core |
| --- | --- | --- |
| Open | `OpenAccountSaga` in `domain-banking-accounts` | `core-banking-accounts` |
| Close | `CloseAccountSaga` in `domain-banking-accounts` | `core-banking-accounts` |

## Technical port

[exp-accounts](https://github.com/fireflysoftwaresolutions/exp-accounts), port 8100. `OpenAccount`, `ReadAccount`, and `CloseAccount` are the ports. The default adapter calls `domain-banking-accounts`.
