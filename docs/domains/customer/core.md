# Customer core

The core is the system of record. Another context stores the party's UUID, not a foreign key into these tables.

## Party aggregate

[core-common-customer-mgmt](https://github.com/fireflysoftwaresolutions/core-common-customer-mgmt) owns `Party`, `NaturalPerson`, `LegalEntity`, industry classification, party attributes, and `PartyRelationship`.

Direct edges are stored. Ancestors and subsidiaries are a walk. A person can own a company. A company can own a company.

## KYC and KYB records

[core-common-kycb-mgmt](https://github.com/fireflysoftwaresolutions/core-common-kycb-mgmt) owns KYC, KYB, and AML screening records for a party. The party identifier points at the customer core. It is not a shared table.
