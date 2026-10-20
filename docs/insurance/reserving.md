# Reserving data

**Core repository:** [`core-insurance-reserving`](https://github.com/firefly-oss/core-insurance-reserving)

Stores a reserving snapshot supplied by the insurer's actuarial process, the cells of a loss-development triangle, and a reference to a prepared reporting extract. It does not calculate reserves and it does not certify an IFRS 17 or Solvency II return.

Operational reserves on one claim stay in [claims](claims.md).

## API

Base path `/api/v1/snapshots`.

OpenAPI: [openapi.yml](https://github.com/firefly-oss/core-insurance-reserving/blob/main/core-insurance-reserving-sdk/src/main/resources/openapi.yml)

## Related

- [Claims](claims.md)
- [Insurance cores](index.md)
