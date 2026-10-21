# Experience

An experience microservice is a journey. It is not a second copy of a domain. One journey can call several domain sagas. The product kind, or the task the person is doing, chooses which saga runs.

Customer, account, and card journeys stay separate. A person does those as different tasks. Lending is one journey. Insurance is one journey.

## Public

- [Onboard a person or a company](public/onboarding.md)
- [Customer profile](public/profile.md)
- [Open and close an account](public/accounts.md)
- [Cards](public/cards.md)
- [Lending](public/lending.md)
- [Insurance](public/insurance.md)

## Administration

- [Staff terminals](administration/index.md)

There is no finance staff terminal and no insurance staff terminal repository on disk. The administration page shows the sign-in and `IMPERSONATE` check that such a terminal would start with, and it does not invent the operation that would follow.
