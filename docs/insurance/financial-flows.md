# Insurance financial flows

**Core repository:** [`core-insurance-financials`](https://github.com/firefly-oss/core-insurance-financials)

Records for what is due: premium schedules and instalments, commissions, refunds, premium audits, credit control and lapse notices, indemnity disbursements, and bordereaux. Each collected or paid item may point at a `paymentOrderId` in [payments](../modules/payments.md).

Journal posting stays in `core-common-accounting-gl`. This service does not move money.

## API

Base paths `/api/v1/premium-schedules`, `/api/v1/indemnities`, and `/api/v1/bordereaux`.

OpenAPI: [openapi.yml](https://github.com/firefly-oss/core-insurance-financials/blob/main/core-insurance-financials-sdk/src/main/resources/openapi.yml)

## Related

- [Reinsurance](reinsurance.md)
- [Payments](../modules/payments.md)
- [Insurance cores](index.md)
