# Customer profile

The signed-in person reads who they are and changes a fact: a name, a phone, an address, a consent. Contracts on the profile are a read from another context. This is not the onboarding journey and not the account journey.

<div class="ff-journey" markdown="0">
<img src="../../../assets/journeys/profile.svg" alt="Sequence: person, experience, access, domain, core. An update is compensated by restoreCustomer.">
</div>

## Steps

1. The person opens `GET /api/v1/experience/profile/{partyId}` on `exp-profile`.
2. `AccessPort` must allow `READ` on `PARTY`. A denial does not call the domain.
3. `PartyProfilePort` reads the party through `domain-customer-people` and `core-common-customer-mgmt`.
4. A change of personal data calls the update saga. Compensation is `restoreCustomer`, which writes the previous row back.

Reading contracts is the same access check, then `domain-common-contracts`. The profile service does not open the contract tables itself.

## Domain sagas and cores

| Task | Saga | Core |
| --- | --- | --- |
| Read or update the person | update and query handlers in `domain-customer-people`, including `UpdateCustomerSaga` | `core-common-customer-mgmt` |
| Read agreements | `domain-common-contracts` | `core-common-contract-mgmt` |

## Technical port

[exp-profile](https://github.com/fireflysoftwaresolutions/exp-profile). The default access adapter is `SandboxAccessAdapter` until `firefly.experience.access.adapter` is `domain`.
