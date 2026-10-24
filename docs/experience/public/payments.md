# Payments experience

Initiate, authenticate, reserve, post, dispatch, settle, return, reconcile, and repair with separate authoritative identities and states. A posted ledger entry and an accepted rail instruction have different finality.

[Business lifecycle](../../journeys/banking.md) · [Repository guide](https://github.com/fireflysoftwaresolutions/exp-payments) · [Source reference](https://github.com/fireflysoftwaresolutions/exp-payments/blob/main/docs/openplatform/reference.md)

## Behavior and limitations

The actual composed experience/domain/core qualification exercises selected synthetic identity/access/configuration/SCA/provider participants and a real packaged ledger/PostgreSQL. It is not deployed experience/domain filter/startup/security acceptance. Domain TCC sessions remain process-local, available-funds reservation is unqualified, and uncertain rail outcomes require durable reconciliation.

## Declared entry points

The table is derived from local controller mappings. It does not include inherited, conditional, gateway, or framework routes and is not a runtime security or completeness assertion.

| Method | Path | Source |
| --- | --- | --- |
| `GET` | `/api/v1/payments/{paymentId}` | [PaymentsJourneyController](https://github.com/fireflysoftwaresolutions/exp-payments/blob/main/exp-payments-web/src/main/java/io/fireflysoftware/experience/payments/web/PaymentsJourneyController.java) |
| `POST` | `/api/v1/payments/tries` | [PaymentsJourneyController](https://github.com/fireflysoftwaresolutions/exp-payments/blob/main/exp-payments-web/src/main/java/io/fireflysoftware/experience/payments/web/PaymentsJourneyController.java) |
| `POST` | `/api/v1/payments/{paymentId}/confirmations` | [PaymentsJourneyController](https://github.com/fireflysoftwaresolutions/exp-payments/blob/main/exp-payments-web/src/main/java/io/fireflysoftware/experience/payments/web/PaymentsJourneyController.java) |
| `POST` | `/api/v1/payments/{paymentId}/cancellations` | [PaymentsJourneyController](https://github.com/fireflysoftwaresolutions/exp-payments/blob/main/exp-payments-web/src/main/java/io/fireflysoftware/experience/payments/web/PaymentsJourneyController.java) |

## Reproduce a source-specific boundary

## Consumer example: use the delivered challenge in the channel journey

Start with this repository-owned executable contract before connecting a full runtime. Use the JDK required by the effective parent, Maven, and the matching internal artifacts. The selected test defines its own collaborators; no provider credentials should be added to it. Run from this repository root:

```sh
mvn -B -pl exp-payments-core -am test -DskipOpenApiGen \
  -Dtest=PaymentJourneyTest -Dsurefire.failIfNoSpecifiedTests=false
```

Runtime integration remains gated on the service configuration and selected adapters described below. The local port and bean-selection inventory below distinguishes the declared abstraction from its configured implementation. An SDK client is an outbound integration; its presence does not establish a working provider connection. Where a sandbox adapter is selected, its behavior is synthetic and limited to what that adapter implements.

**Inputs and fixture ownership.** The complete linked test class supplies its imports, setup, synthetic IDs and collaborators. Run that class as shown; the excerpt is not a standalone Java program. Synthetic adapter data is scoped to this fixture and does not seed an external owner. For a deployed call, replace fixture IDs with IDs returned by the owning record-creation API and keep tenant/parent associations intact. The request values and assertions below describe this test boundary only.

```java
@Test
    void sampleJourneyConfirmsOutboundWithTheDeliveredChallenge() {
        RecordingPort port = new RecordingPort();
        PaymentJourney journey = new PaymentJourney(new SandboxIdentityAdapter(), new SandboxAccessAdapter(), port);
        JourneyContract.TryResult tried = journey.tryPayment(IdentityPort.SAMPLE_USERNAME, outbound());
        assertNotNull(tried.challengeId());
        assertNotEquals("sandbox", tried.challengeValue());
        JourneyContract.Movement rejected = journey.confirm(IdentityPort.SAMPLE_USERNAME, tried.paymentId(), "sandbox");
        assertEquals("CANCELLED", rejected.phase());
        JourneyContract.TryResult second = journey.tryPayment(IdentityPort.SAMPLE_USERNAME, outbound());
        JourneyContract.Movement confirmed = journey.confirm(IdentityPort.SAMPLE_USERNAME, second.paymentId(), second.challengeValue());
        assertEquals("CONFIRMED", confirmed.phase());
        assertTrue(confirmed.thirdPartySynced());
        assertEquals(JourneyContract.Side.DEBIT, confirmed.posting().legs().get(0).side());
        assertEquals(2, port.confirms);
    }
```

**Expected behavior.** The sample identity/access adapters authorize the caller. Literal sandbox confirmation cancels; the next returned challenge confirms through the recording payment port. thirdPartySynced=true here describes the fixture response, not a real bank settlement.

**Verification and recovery.** Run the complete selected test class and inspect its Surefire result: zero failures/errors and at least one executed test are required. A skipped or zero-test build is not evidence. Compare the assertions with the owning DTO/service before extending the request. For a runtime run, separately configure authentication/entitlements and the exact downstream endpoints, migrate/seed disposable owner stores, and reread the returned identifier; these unit/contract fixtures do not establish those prerequisites.

Source of this example: [PaymentJourneyTest](https://github.com/fireflysoftwaresolutions/exp-payments/blob/main/exp-payments-core/src/test/java/io/fireflysoftware/experience/payments/PaymentJourneyTest.java).



## Configuration and replacement

Read the exact runtime configuration and existing adapter selectors in the repository guide. Defaults are implementation facts, not recommended live settings. A live dependency failure must not fall back to synthetic approval. [The adapter contract](../../adapters/index.md) defines durable request identity, lookup, uncertain outcomes, callbacks, and provenance.

## Required negative and recovery cases

Denied and cross-tenant callers must reach no unauthorized write. Missing or expired evidence, changed intent under the same key, duplicate callback, partial participant failure, lost response, process restart, and replica retry must preserve one authoritative outcome. Retain original and compensating effects; do not delete accepted evidence to simulate rollback. Financial cases reconcile posted, available, reserved, provider, and accounting state.

See [operating procedures](../../operations/index.md) for duplicate requests, partial failures, provider uncertainty, and recovery.
