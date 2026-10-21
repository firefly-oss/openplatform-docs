# Cards

The person issues a card, activates it, and can block or cancel it. That is one journey. It is not the account journey, even though the card is tied to an account identifier.

<div class="ff-journey" markdown="0">
<img src="../../../assets/journeys/cards.svg" alt="Sequence: person, experience, access, domain, core. Issuing is compensated by deleteCard.">
</div>

## Steps

1. The person asks `exp-cards` to issue a card.
2. `AccessPort` must allow `CREATE` on `CARD`. A denial does not call the domain.
3. `CardOperations` calls `domain-banking-cards`. `IssueCardSaga` runs `createCard` on `core-banking-cards`. Compensation deletes that card.
4. Activate, block, and cancel are later calls on the same port, each behind its own access check.

`domain-banking-cards` also calls `core-lending-credit-cards` when the card is a credit card. There is no `domain-lending-credit-cards` repository, and there is no separate credit-card experience service.

## Domain sagas and cores

| Task | Saga | Core |
| --- | --- | --- |
| Issue | `IssueCardSaga` in `domain-banking-cards` | `core-banking-cards` |
| Credit line, when the card is a credit card | called from `domain-banking-cards`, not from a second experience service | `core-lending-credit-cards` |

## Technical port

[exp-cards](https://github.com/fireflysoftwaresolutions/exp-cards). `CardOperations` is the port. The default adapter calls `domain-banking-cards`.
