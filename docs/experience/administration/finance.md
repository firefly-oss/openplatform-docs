# Finance terminal

An employee works the records Ada opens, without using her journey. The finance terminal is that desk. The employee signs in, the terminal checks that they may administer the area, and a change that names a customer first checks that they may act for that customer. Both identities are stored before the record changes.

The employee in the sandbox is `sample-employee`, actor `33333333-3333-4333-8333-333333333333`. Ada is still `sample-journey`, party `11111111-1111-4111-8111-111111111111`. She cannot sign in here. The terminal asks whether the caller may administer, and the sample customer does not have that grant. `denied-actor` cannot sign in either. An unknown name is refused before any list is returned.

When the employee signs in, the session returns that employee id and the provider sandbox. No identity-provider process is started. Listing accounts then checks administer on the account area. The sample account anchor is `10000000-0000-4000-8000-000000000002`. If administer is refused, the list is empty of records because the call stops.

Updating Ada's account is different from listing it. The employee sends her party id and a reason. The terminal checks administer on the account, then checks impersonate on her party. If impersonate is refused, the account is not changed. If it is allowed, the terminal stores an audit row with the employee id and Ada's party id, and only then updates the record. Close, a decision, and attaching a distributor follow the same impersonation when a customer is named.

The areas are accounts, cards, lending applications, mortgage agreements, supply-chain agreements, collateral cases, collection cases, provisioning cases, and AML cases. A decision applies only where that area has one. Asking to decide an account is refused, because an account has no decision on this desk. Asking to approve or reject a lending application is allowed. Removing a draft applies only where that area allows removal.

<div class="ff-journey" markdown="0">
<img src="../../../assets/journeys/staff.svg" alt="Sequence: the employee signs in as sample-employee. Access must allow administer. Ada cannot sign in. An update impersonates Ada, stores both ids, and only then changes the record. Configuration and masters do not impersonate.">
</div>

The same employee can set a configuration value and can read master lists. Those calls check administer on the anchor. They do not impersonate Ada, because they are not a change to her record. The sandbox lists are currencies and countries. Any other master type is refused. A missing value on a close, when the status key has not been set, refuses the close. The sandbox store is the default. When `firefly.terminal.adapter` is `domain`, configuration and reference data go through the domain SDKs for environment configuration and reference masters, not through an HTTP client written in the terminal. Ada cannot open this terminal. Sign-in as `sample-journey` is refused before any list is returned.

## What the employee is refused

`sample-journey` and `denied-actor` do not receive a session.

An update without Ada's party id, or without a reason, is refused before the record changes. Impersonation denied stops the update. Administer denied stops the list, the open, the configuration write, and the master read.

A master type other than currency or country is refused. A close whose status has not been configured is refused.

## Where the records go

The audit row keeps the employee and the customer together. The account or card or case itself stays in its own domain. With the domain adapter on, an account holder change is sent to the accounts domain, which writes the accounts core. The terminal does not write that core itself. Insurance money is not this desk. This desk does not post a payment.

## Reference

The service listens on port 8120. The header after sign-in is `X-Actor-Id`.

| What the employee does | Call |
| --- | --- |
| Sign in | `POST /api/v1/staff/sessions` |
| List an area | `GET /api/v1/staff/records/{area}` |
| Open one record | `GET /api/v1/staff/records/{area}/{recordId}` |
| Update, naming the customer | `PUT /api/v1/staff/records/{area}/{recordId}` |
| Close | `POST /api/v1/staff/records/{area}/{recordId}/close` |
| Decide, where the area has a decision | `POST /api/v1/staff/records/{area}/{recordId}/decide` |
| Set a property | `PUT /api/v1/staff/configuration/{key}` |
| Read masters | `GET /api/v1/staff/masters/{type}` |

```text
// POST /api/v1/staff/sessions
{ "username": "sample-employee" }
// actorId: 33333333-3333-4333-8333-333333333333
// provider: sandbox

// PUT /api/v1/staff/records/ACCOUNT/{recordId}
{
  // customerPartyId: 11111111-1111-4111-8111-111111111111
  // reason: why the employee is acting for Ada
}
```

There is no OpenAPI file for this terminal. The type names are the staff session and the record command. Areas include `ACCOUNT`, `CARD`, and `LENDING_APPLICATION`. Master types in the sandbox are `CURRENCY` and `COUNTRY`.
