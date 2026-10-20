# Adapter guide — PSP library

This page is a worked example of the OpenPlatform adapter pattern using
the public `library-psps` repository under `firefly-oss`.

Repository:
<a href="https://github.com/firefly-oss/library-psps"><code>firefly-oss/library-psps</code></a>

## What it is

`library-psps` is a hexagonal **payment service provider** abstraction.
Application code depends on `io.fireflysoftware.psps.adapter.PspAdapter` and its
operation ports. Concrete providers implement that facade; swapping a
processor changes the adapter bean, not payment domain services.

Related OpenPlatform module page:
<a href="../modules/payments.md">Payments</a>.

## Ports on the facade

`PspAdapter` exposes operation ports (package
`io.fireflysoftware.psps.adapter.ports`), including:

| Port accessor | Concern |
|---------------|---------|
| `payments()` | Create, confirm, capture, cancel |
| `refunds()` | Full and partial refunds |
| `payouts()` | Transfers to external accounts |
| `customers()` | Customer and payment-method records |
| `disputes()` | Chargebacks and dispute handling |
| `subscriptions()` | Recurring billing |
| `checkout()` | Hosted checkout / redirect flows |
| `providerSpecific()` | Provider-only features outside the common shape |
| `reconciliation()` | Settlement reports and discrepancy detection |

The facade also exposes `getProviderName()` and `isHealthy()` for
configuration and readiness checks.

## Pattern in application code

Domain or experience services should take `PspAdapter` (or a narrower
port) as a constructor dependency. They must not import a provider SDK
type.

```java
@Service
@RequiredArgsConstructor
public class CheckoutApplicationService {

    private final PspAdapter pspAdapter;

    public Mono<ResponseEntity<PaymentResponse>> startPayment(
            CreatePaymentRequest request) {
        return pspAdapter.payments().createPayment(request);
    }
}
```

Provider selection belongs in configuration: register one
`PspAdapter` implementation bean for the active processor (or a routing
adapter that chooses among implementations). Treat README and tests in
`library-psps` as authoritative for auto-configuration and resilience
hooks.

## Maturity notes

- The library is present under `firefly-oss` with ports, tests, and a
  README that describe hexagonal boundaries.
- This hub does not publish processor-specific credential recipes or
  claim production readiness for any named provider.
- Confirm the Java / Spring Boot train against
  <a href="../versioning/bom.md">Versioning and BOM</a> before adopting
  the artifact in an OpenPlatform service on pin **26.10.20**.

## Related

- [Adapter pattern](adapters.md)
- [Payment rails library](library-rails.md)
- [Architecture overview](../architecture/overview.md)
