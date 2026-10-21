# How to read a call

<div class="ff-banner" markdown="0">
<img class="ff-banner__light" src="../assets/brand/banner-light.svg" alt="Firefly OpenPlatform">
<img class="ff-banner__dark" src="../assets/brand/banner-dark.svg" alt="">
</div>


A journey call is identity, then access, then a decision only when the operation creates a new risk, then the record. A refusal at access or a decline at the decision does not write that record.

Read an operation in this order. First the plain explanation of who calls it and what they get. Then the commented example, which is the body the service accepts. Then the Swagger panel. The panel is the OpenAPI file shipped with that service, copied to `docs/api/specs/<journey>/openapi.yml`. It is not typed by hand from a running process. Where the file names a path and a status but does not list every field, the example above the panel is the body the service reads.

The published version is 26.10.4.

Payments have no OpenAPI file. Try, confirm, and cancel are written on the [payments](../experience/public/payments.md) page, with the commented example there.

- [Onboarding](onboarding.md)
- [Lending](lending.md)
- [Profile](profile.md)
- [Accounts](accounts.md)
- [Cards](cards.md)
- [Insurance](insurance.md)
- [Channel](channel.md)
- [Distributor](distributor.md)
- [Notifications](notifications.md)
- [Security](security.md)
