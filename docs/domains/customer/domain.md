# Customer domain

These services own the sagas. They call a core SDK. They do not import that core's internals.

## Party

[domain-customer-people](https://github.com/fireflysoftwaresolutions/domain-customer-people) creates, updates, and changes the status of a natural person or a legal entity. It also changes contacts and relationship edges. Compensation restores the previous relationship or status. It calls `core-common-customer-mgmt`.

## KYC and KYB

[domain-customer-kyc-kyb](https://github.com/fireflysoftwaresolutions/domain-customer-kyc-kyb) opens and updates a KYC case for a person and a KYB case for a company, and attaches evidence. Create is compensated by a delete on the core. It calls `core-common-kycb-mgmt`. It does not own the party row.

Next: [Core](core.md).
