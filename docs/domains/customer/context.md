# Customer

The customer domain is the party. A party is either a natural person or a legal entity. Ownership and the other relationships are edges on that party, not a separate customer database.

## What it owns

- The party, and the person or company record that specializes it.
- Industry classification: a scheme and a code, with one primary classification.
- Party attributes for facts that are not person columns.
- Relationship edges: who owns, controls, parents, or is an officer of whom.
- KYC and KYB cases for that party. The case is not a column on the person.

## What it does not own

It does not own the contract, the product, the account, or the decision. Those contexts store a party identifier. They do not join the party tables.

`AccessPort` is not part of this context. It is not published on main. See [Access and identity](../../catalog/security.md).

## Ubiquitous language

| Name in code | Meaning |
| --- | --- |
| `Party` | The customer. A person or a legal entity. |
| `NaturalPerson` | A person party. |
| `LegalEntity` | A company party. |
| `IndustryClassificationScheme` | `ISIC`, `NACE`, `NAICS`, `SIC`, `CNAE`, or `OTHER`. The scheme is stored. `CNAE` is one scheme, not the only activity code. |
| Party attribute | Employment, housing, loans, and debts. Not columns on the person. |
| Occupation, monthly income | Stay on the person. |
| `PartyRelationship` | A direct edge. Kinds are `OWNERSHIP`, `CONTROL`, `PARENT`, `OFFICER`. The source acts on the target. |
| Owners, subsidiaries, ancestors | Walks over direct edges. Ancestors and subsidiaries are not stored as a closure. Cycles and self-links are rejected. |
| Ownership percentage | Optional, from 0 to 100. Several owners do not need to sum to 100. |

Party reads:

- `/api/v1/parties/{partyId}/owners`
- `/api/v1/parties/{partyId}/subsidiaries`
- `/api/v1/parties/{partyId}/ancestors`

Next: [Journeys](journeys.md).
