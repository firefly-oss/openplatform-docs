# Customer journeys

Two experience services speak this domain. Neither one writes the party tables. Each step calls a port. The default adapter calls a domain service. A later process engine can implement that port. That engine is not running.

## Onboarding

[exp-onboarding](https://github.com/fireflysoftwaresolutions/exp-onboarding) owns two journeys: a natural person and a legal entity.

| Concern | Port, default adapter |
| --- | --- |
| Person or company, contacts, industry classification, attributes, relationships | `domain-customer-people` |
| KYC or KYB case | `domain-customer-kyc-kyb` |
| Message to the party | `domain-common-notifications` |

On main, this service does not call `POST /api/v1/decisions` and does not contain `AccessPort`. The decision service already accepts `journeyStep` `ONBOARDING`.

A company classification is a scheme plus a code. Occupation and monthly income stay on the person. Employment, housing, loans, and debts are party attributes.

## Profile

[exp-profile](https://github.com/fireflysoftwaresolutions/exp-profile) is the signed-in customer. It reads and updates the person, contacts, documents, consents, and a summary of active contracts.

It calls `domain-customer-people` and `domain-common-contracts`. The contract summary is a read across the contract context. The profile does not open the contract database.

Next: [Domain](domain.md).
