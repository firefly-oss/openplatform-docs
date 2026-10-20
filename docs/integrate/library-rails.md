# Adapter guide — payment rails library

This page is a worked example of the OpenPlatform adapter pattern using
the public `library-rails` repository under `firefly-oss`.

Repository:
<a href="https://github.com/firefly-oss/library-rails"><code>firefly-oss/library-rails</code></a>

## What it is

`library-rails` is a hexagonal **banking payment rails** abstraction.
Application code depends on `com.firefly.rails.adapter.RailAdapter` and
its operation ports. Each rail implementation (domestic batch, real-time,
cross-border schemes, and similar) plugs in behind that facade.

Related OpenPlatform module page:
<a href="../modules/payments.md">Payments</a>.

## Ports on the facade

`RailAdapter` exposes operation ports (package
`com.firefly.rails.adapter.ports`), including:

| Port accessor | Concern |
|---------------|---------|
| `payments()` | Initiation, status, cancellation |
| `settlement()` | Settlement reporting |
| `status()` | Real-time tracking queries |
| `mandates()` | Direct-debit mandate lifecycle |
| `bulkPayments()` | Batch submissions |
| `reconciliation()` | Matching and discrepancy detection |
| `railSpecific()` | Scheme-only features outside the common shape |
| `scheduledPayments()` | Future-dated and standing orders |
| `compliance()` | Screening and regulatory-check hooks |

The facade also exposes `getRailType()` and `isHealthy()` for
configuration and readiness checks.

## Pattern in application code

Payment domain services should depend on `RailAdapter` (or a single
operation port) rather than a scheme-specific client.

```java
@Service
@RequiredArgsConstructor
public class TransferApplicationService {

    private final RailAdapter railAdapter;

    public Mono<ResponseEntity<PaymentResponse>> credit(
            InitiatePaymentRequest request) {
        return railAdapter.payments().initiatePayment(request);
    }
}
```

Choose the active rail with configuration (one `RailAdapter` bean, or a
router that selects among implementations). Scheme coverage and REST
auto-configuration details live in the library README and
`RAIL_COVERAGE.md` in the repository; this hub does not invent coverage
claims beyond what those files state.

## Maturity notes

- The library is present under `firefly-oss` with ports, tests, and rail
  coverage notes in-repo.
- Prefer category language for networks and schemes on marketing
  surfaces; use this guide for engineering boundaries.
- Align dependency versions with
  <a href="../versioning/bom.md">Versioning and BOM</a> (**26.10.20** /
  Boot **4.1.1**) when wiring into OpenPlatform services.

## Related

- [Adapter pattern](adapters.md)
- [PSP library](library-psps.md)
- [Architecture overview](../architecture/overview.md)
