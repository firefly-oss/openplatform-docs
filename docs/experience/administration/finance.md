# Finance terminal

<p class="ff-steward">Stewarded by the Firefly Software Foundation. <a href="mailto:dev@fireflysoftware.io">dev@fireflysoftware.io</a></p>


An employee works on the same kinds of records a customer opens, without using the customer's journey. `exp-finance-terminal` is that journey. The employee signs in, the terminal checks that they may administer the area, and a change to a customer's record checks `IMPERSONATE` before the record port runs.

<div class="ff-journey" markdown="0">
<img src="../../../assets/journeys/staff.svg" alt="Sequence: employee, finance terminal, access, domain. Sign in, administer, impersonate the customer, then update the record.">
</div>

## Steps

1. `POST /api/v1/staff/sessions` with username `sample-employee`. `IdentityPort` calls `POST /api/v1/identity/subjects` on `domain-core-security-center`. The sandbox adapter returns actor `33333333-3333-4333-8333-333333333333`. It does not start Keycloak.
2. The terminal checks `ADMINISTER` on the area, for example `ACCOUNT`. A denial does not list records.
3. A customer-scoped change, such as `PUT /api/v1/staff/records/ACCOUNT/{recordId}`, calls `ImpersonationPort`. That posts `IMPERSONATE` on `PARTY` for the customer. A denial does not call the record port.
4. `StaffRecordPort` then updates the record. The shipped adapter is `SandboxRecordBook`. Setting `firefly.terminal.adapter` to `domain` uses `DomainRecordClient`, which calls the domain HTTP API and does not call a core SDK.

The areas in `FinanceArea` are accounts, cards, lending applications, mortgage agreements, supply-chain finance agreements, collateral cases, collection cases, provisioning cases, and AML cases.

## Domain sagas and cores

The terminal does not call a core. When the domain adapter is on, the account update posts to `domain-banking-accounts` (`POST /api/v1/accounts/{id}/holders`). That domain's `AddAccountHolderSaga` writes the account core and compensates by removing the party from the contract.

## Technical port

The repository on disk is `exp-finance-terminal`. Identity and access stay on [domain-core-security-center](https://github.com/fireflysoftwaresolutions/domain-core-security-center). `firefly.security-center.identity.adapter` selects the identity adapter. `sandbox-access-policy.json` grants `sample-employee` `ADMINISTER` and `IMPERSONATE`.
