# Customer

After onboarding, `exp-profile` is the journey for a signed-in customer. It reads and updates personal data, contacts, addresses, documents, consents, and a summary of active contracts. It calls `domain-customer-people` and `domain-common-contracts`. It does not write the customer tables itself.

The party graph is owned by the customer core and changed by `domain-customer-people`:

- A party is a natural person or a legal entity.
- Relationships are `OWNERSHIP`, `CONTROL`, `PARENT`, and `OFFICER`. The source acts on the target.
- A person or a company can own a company. Companies can own companies.
- The core stores direct edges. Ancestors and subsidiaries are a walk. Cycles and self-links are rejected.

KYC and KYB stay on `domain-customer-kyc-kyb` and `core-common-kycb-mgmt`. They are not columns on the person.

There is no second customer experience service. Channel startup data is `exp-channel-management`, which is not the profile.

Repository: [exp-profile](https://github.com/fireflysoftwaresolutions/exp-profile). Model: [Party](../models/party.md). Catalog: [Customer and party](../catalog/customer.md).
