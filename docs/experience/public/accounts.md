# Accounts experience

Account opening and servicing must bind current eligibility, customer authority, contract, account spaces, and any proven funding effect. Restrictions, statements, limits, sweeps, mandates, recurring payments, and closure require their own financial and recovery cases. A stored servicing instruction is not evidence that money moved.

[Business lifecycle](../../journeys/banking.md) · [Repository guide](https://github.com/fireflysoftwaresolutions/exp-accounts) · [Source reference](https://github.com/fireflysoftwaresolutions/exp-accounts/blob/main/docs/openplatform/reference.md)

## Behavior and limitations

Initial source analysis identified direct-open eligibility bypass, income/funding signals without retained evidence, process-local workflow state, and closure/compensation gaps. The account-domain HTTP correction preserves supplied fields and truthful saga outcomes; it does not by itself close these broader cases.

## Declared entry points

The table is derived from local controller mappings. It does not include inherited, conditional, gateway, or framework routes and is not a runtime security or completeness assertion.

| Method | Path | Source |
| --- | --- | --- |
| `GET` | `/api/v1/journeys/account-opening/{journeyId}` | [AccountOpeningJourneyController](https://github.com/fireflysoftwaresolutions/exp-accounts/blob/main/exp-accounts-web/src/main/java/io/fireflysoftware/experience/accounts/web/controllers/AccountOpeningJourneyController.java) |
| `POST` | `/api/v1/journeys/account-opening` | [AccountOpeningJourneyController](https://github.com/fireflysoftwaresolutions/exp-accounts/blob/main/exp-accounts-web/src/main/java/io/fireflysoftware/experience/accounts/web/controllers/AccountOpeningJourneyController.java) |
| `POST` | `/api/v1/journeys/account-opening/{journeyId}/income-proof` | [AccountOpeningJourneyController](https://github.com/fireflysoftwaresolutions/exp-accounts/blob/main/exp-accounts-web/src/main/java/io/fireflysoftware/experience/accounts/web/controllers/AccountOpeningJourneyController.java) |
| `POST` | `/api/v1/journeys/account-opening/{journeyId}/funding` | [AccountOpeningJourneyController](https://github.com/fireflysoftwaresolutions/exp-accounts/blob/main/exp-accounts-web/src/main/java/io/fireflysoftware/experience/accounts/web/controllers/AccountOpeningJourneyController.java) |
| `GET` | `/api/v1/accounts/{accountId}` | [AccountsController](https://github.com/fireflysoftwaresolutions/exp-accounts/blob/main/exp-accounts-web/src/main/java/io/fireflysoftware/experience/accounts/web/controllers/AccountsController.java) |
| `GET` | `/api/v1/accounts/{accountId}/statements/{statementId}` | [AccountsController](https://github.com/fireflysoftwaresolutions/exp-accounts/blob/main/exp-accounts-web/src/main/java/io/fireflysoftware/experience/accounts/web/controllers/AccountsController.java) |
| `POST` | `/api/v1/accounts` | [AccountsController](https://github.com/fireflysoftwaresolutions/exp-accounts/blob/main/exp-accounts-web/src/main/java/io/fireflysoftware/experience/accounts/web/controllers/AccountsController.java) |
| `POST` | `/api/v1/accounts/{accountId}/statements` | [AccountsController](https://github.com/fireflysoftwaresolutions/exp-accounts/blob/main/exp-accounts-web/src/main/java/io/fireflysoftware/experience/accounts/web/controllers/AccountsController.java) |
| `PUT` | `/api/v1/accounts/{accountId}` | [AccountsController](https://github.com/fireflysoftwaresolutions/exp-accounts/blob/main/exp-accounts-web/src/main/java/io/fireflysoftware/experience/accounts/web/controllers/AccountsController.java) |
| `DELETE` | `/api/v1/accounts/{accountId}` | [AccountsController](https://github.com/fireflysoftwaresolutions/exp-accounts/blob/main/exp-accounts-web/src/main/java/io/fireflysoftware/experience/accounts/web/controllers/AccountsController.java) |

## Reproduce a source-specific boundary

## Consumer example: carry account and payment records through typed domain SDKs

Start with this repository-owned executable contract before connecting a full runtime. Use the JDK required by the effective parent, Maven, and the matching internal artifacts. The selected test defines its own collaborators; no provider credentials should be added to it. Run from this repository root:

```sh
mvn -B -pl exp-accounts-core -am test -DskipOpenApiGen \
  -Dtest=AccountRecordsJourneyTest -Dsurefire.failIfNoSpecifiedTests=false
```

Runtime integration remains gated on the service configuration and selected adapters described below. The local port and bean-selection inventory below distinguishes the declared abstraction from its configured implementation. An SDK client is an outbound integration; its presence does not establish a working provider connection. Where a sandbox adapter is selected, its behavior is synthetic and limited to what that adapter implements.

**Inputs and fixture ownership.** The complete linked test class supplies its imports, setup, synthetic IDs and collaborators. Run that class as shown; the excerpt is not a standalone Java program. Mocked collaborators include `AccountRecordsControllerApi`, `PaymentRecordsApi`. For a deployed call, replace fixture IDs with IDs returned by the owning record-creation API and keep tenant/parent associations intact. The request values and assertions below describe this test boundary only.

```java
@Test
    void recordsTheSixRowsThroughTheDomainSdks() {
        when(accounts.closeStatement(any(), any(), any())).thenReturn(Mono.just(new RecordedId().id(UUID.randomUUID())));
        when(accounts.withdrawalLimit(any(), any(), any())).thenReturn(Mono.just(new RecordedId().id(UUID.randomUUID())));
        when(accounts.spaceSweep(any(), any(), any())).thenReturn(Mono.just(new RecordedId().id(UUID.randomUUID())));
        when(accounts.servicingMandate(any(), any(), any())).thenReturn(Mono.just(new RecordedId().id(UUID.randomUUID())));
        when(payments.runStandingOrder(any(), any())).thenReturn(Mono.just(new io.fireflysoftware.domain.payments.sdk.model.RecordedId().id(UUID.randomUUID())));
        when(payments.createDirectDebit(any(), any())).thenReturn(Mono.just(new io.fireflysoftware.domain.payments.sdk.model.RecordedId().id(UUID.randomUUID())));

        UUID accountId = UUID.randomUUID();
        UUID partyId = UUID.randomUUID();
        UUID source = UUID.randomUUID();
        UUID target = UUID.randomUUID();
        UUID schedule = UUID.randomUUID();
        UUID creditor = UUID.randomUUID();
        new AccountRecordsJourney(accounts, payments)
                .record(accountId, partyId, source, target, schedule, creditor)
                .block();

        verify(accounts).closeStatement(eq(accountId), eq(new StatementClose()
                .currency("USD")
                .openingBalance(new BigDecimal("100.00"))
                .lineAmounts(List.of(new BigDecimal("25.00"), new BigDecimal("-10.00")))), eq("statement"));
        verify(accounts).withdrawalLimit(eq(accountId), eq(new WithdrawalLimit()
                .currency("USD")
                .withdrawalLimit(new BigDecimal("50.00"))
                .overdraftLimit(new BigDecimal("10.00"))
                .balance(new BigDecimal("40.00"))
                .withdrawalAmount(new BigDecimal("45.00"))), eq("limit"));
        verify(accounts).spaceSweep(eq(accountId), eq(new SpaceSweep()
                .sourceSpaceId(source).targetSpaceId(target).amount(new BigDecimal("15.00")).currency("USD")), eq("sweep"));
        verify(accounts).servicingMandate(eq(accountId), eq(new ServicingMandate()
                .partyId(partyId).role("OPERATOR").active(true)), eq("mandate"));
        verify(payments).runStandingOrder(eq(new StandingOrderBody()
                .paymentScheduleId(schedule).amount(new BigDecimal("25.00")).currency("GBP")
                .valueDate(LocalDate.of(2026, 10, 21))), eq("standing-order"));
        verify(payments).createDirectDebit(eq(new DirectDebitBody()
                .debtorAccountId(accountId).creditorPartyId(creditor).amountLimit(new BigDecimal("100.00"))
                .currency("GBP").reference("MANDATE-1")), eq("direct-debit"));
    }
```

**Expected behavior.** The fixture verifies statement lines, withdrawal limits, space sweep, servicing mandate, standing-order run and direct-debit mandate arguments. Its UUIDs and mocked RecordedId responses do not establish persisted rows or an atomic six-operation journey.

**Verification and recovery.** Run the complete selected test class and inspect its Surefire result: zero failures/errors and at least one executed test are required. A skipped or zero-test build is not evidence. Compare the assertions with the owning DTO/service before extending the request. For a runtime run, separately configure authentication/entitlements and the exact downstream endpoints, migrate/seed disposable owner stores, and reread the returned identifier; these unit/contract fixtures do not establish those prerequisites.

Source of this example: [AccountRecordsJourneyTest](https://github.com/fireflysoftwaresolutions/exp-accounts/blob/main/exp-accounts-core/src/test/java/io/fireflysoftware/experience/accounts/core/records/AccountRecordsJourneyTest.java).



## Configuration and replacement

Read the exact runtime configuration and existing adapter selectors in the repository guide. Defaults are implementation facts, not recommended live settings. A live dependency failure must not fall back to synthetic approval. [The adapter contract](../../adapters/index.md) defines durable request identity, lookup, uncertain outcomes, callbacks, and provenance.

## Required negative and recovery cases

Denied and cross-tenant callers must reach no unauthorized write. Missing or expired evidence, changed intent under the same key, duplicate callback, partial participant failure, lost response, process restart, and replica retry must preserve one authoritative outcome. Retain original and compensating effects; do not delete accepted evidence to simulate rollback. Financial cases reconcile posted, available, reserved, provider, and accounting state.

See [operating procedures](../../operations/index.md) for duplicate requests, partial failures, provider uncertainty, and recovery.
