# Delegated authority

**Core repository:** [`core-insurance-delegated-authority`](https://github.com/firefly-oss/core-insurance-delegated-authority)

Records for a binder: the carrier and coverholder, the authority limits (sum insured, premium, territory, line), and coverholder appointments. The binder agreement itself is a `contractId` in [agreements](../modules/agreements.md). Bordereaux stay in [financial flows](financial-flows.md).

This service does not decide whether a risk sits inside a limit.

## API

Base path `/api/v1/binders`.

OpenAPI: [openapi.yml](https://github.com/firefly-oss/core-insurance-delegated-authority/blob/main/core-insurance-delegated-authority-sdk/src/main/resources/openapi.yml)

## Related

- [Underwriting](underwriting.md)
- [Insurance cores](index.md)
