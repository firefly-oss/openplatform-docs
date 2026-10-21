# Onboarding

`exp-onboarding` owns two journeys: one for a natural person and one for a legal entity. The service keeps the journey. Each step calls a port. The default adapter calls a domain service.

| Step concern | Default domain |
| --- | --- |
| Person or company, contacts, industry classification, attributes, relationships | `domain-customer-people` |
| KYC or KYB case | `domain-customer-kyc-kyb` |
| Message to the party | `domain-common-notifications` |

Those domains write through `core-common-customer-mgmt` and `core-common-kycb-mgmt`. They do not import those cores' internals.

Industry classification on a company is a scheme plus a code. The scheme is `ISIC`, `NACE`, `NAICS`, `SIC`, `CNAE`, or `OTHER`. One classification is primary. `CNAE` is one scheme in that list, not the only activity code. A value that used to be sent as a bare activity code is stored as scheme `CNAE` plus that code.

On a person, occupation and monthly income stay on the person. Employment, housing, loans, and debts are party attributes, not extra person columns.

`exp-onboarding` on main does not call `POST /api/v1/decisions` and does not contain `AccessPort`. The decision service already accepts `journeyStep` `ONBOARDING`. A later process engine can replace the domain adapter. That engine is not running.

Repository: [exp-onboarding](https://github.com/fireflysoftwaresolutions/exp-onboarding). Model: [Party](../models/party.md).
