# Party

`core-common-customer-mgmt` owns the tables. `domain-customer-people` owns the saga. Source commits on main: customer core `8cd2d6c`, domain `62f5f8e`.

## Records

A party is a `NaturalPerson` or a `LegalEntity`.

Industry classification is a scheme and a code. The scheme is one of `ISIC`, `NACE`, `NAICS`, `SIC`, `CNAE`, or `OTHER`. One classification is primary. The scheme is stored. It is not implied by the installation country. `CNAE` is one allowed scheme, not the only activity code.

Extra facts live in party attributes. Employment, housing, loans, and debts are attributes. They are not columns on the person. Occupation and monthly income stay on the person.

## Relationships

`PartyRelationship` stores a direct edge. The source acts on the target. The kind is `OWNERSHIP`, `CONTROL`, `PARENT`, or `OFFICER`.

A person can own a company. A company can own a company. Ancestors and subsidiaries are a walk over those edges. The walk is not a stored closure. A cycle is rejected. A party cannot link to itself.

Ownership percentage is optional and is from 0 to 100 inclusive. Several owners do not need to sum to 100.

## API

- `/api/v1/parties/{partyId}/owners`
- `/api/v1/parties/{partyId}/subsidiaries`
- `/api/v1/parties/{partyId}/ancestors`

Host: `https://openplatform.fireflysoftware.io/core-common-customer-mgmt` for the core, and `https://openplatform.fireflysoftware.io/domain-customer-people` for the domain.

Catalog: [Customer and party](../catalog/customer.md).
