# Cards experience

Issuance, delivery, activation, blocking, replacement, authorization, clearing, settlement, billing, repayment, dispute, and closure are distinct stages. Keep cardholder authority and sensitive credentials protected across every entry point.

[Business lifecycle](../../journeys/banking.md) · [Repository guide](https://github.com/fireflysoftwaresolutions/exp-cards) · [Source reference](https://github.com/fireflysoftwaresolutions/exp-cards/blob/main/docs/openplatform/reference.md)

## Behavior and limitations

The current experience declares direct card and longer issuance/replacement operations. Declaration or successful card-row creation does not demonstrate provider personalization, secure PIN handling, authorization holds, financial settlement, or dispute completion. These require the corresponding provider and financial integrations.

## Declared entry points

The table is derived from local controller mappings. It does not include inherited, conditional, gateway, or framework routes and is not a runtime security or completeness assertion.

| Method | Path | Source |
| --- | --- | --- |
| `GET` | `/api/v1/journeys/card-issuance/{journeyId}` | [CardIssuanceJourneyController](https://github.com/fireflysoftwaresolutions/exp-cards/blob/main/exp-cards-web/src/main/java/io/fireflysoftware/experience/cards/web/controllers/CardIssuanceJourneyController.java) |
| `POST` | `/api/v1/journeys/card-issuance` | [CardIssuanceJourneyController](https://github.com/fireflysoftwaresolutions/exp-cards/blob/main/exp-cards-web/src/main/java/io/fireflysoftware/experience/cards/web/controllers/CardIssuanceJourneyController.java) |
| `POST` | `/api/v1/journeys/card-issuance/{journeyId}/address` | [CardIssuanceJourneyController](https://github.com/fireflysoftwaresolutions/exp-cards/blob/main/exp-cards-web/src/main/java/io/fireflysoftware/experience/cards/web/controllers/CardIssuanceJourneyController.java) |
| `POST` | `/api/v1/journeys/card-issuance/{journeyId}/pin` | [CardIssuanceJourneyController](https://github.com/fireflysoftwaresolutions/exp-cards/blob/main/exp-cards-web/src/main/java/io/fireflysoftware/experience/cards/web/controllers/CardIssuanceJourneyController.java) |
| `GET` | `/api/v1/journeys/card-replacement/{journeyId}` | [CardReplacementJourneyController](https://github.com/fireflysoftwaresolutions/exp-cards/blob/main/exp-cards-web/src/main/java/io/fireflysoftware/experience/cards/web/controllers/CardReplacementJourneyController.java) |
| `POST` | `/api/v1/journeys/card-replacement` | [CardReplacementJourneyController](https://github.com/fireflysoftwaresolutions/exp-cards/blob/main/exp-cards-web/src/main/java/io/fireflysoftware/experience/cards/web/controllers/CardReplacementJourneyController.java) |
| `POST` | `/api/v1/journeys/card-replacement/{journeyId}/identity` | [CardReplacementJourneyController](https://github.com/fireflysoftwaresolutions/exp-cards/blob/main/exp-cards-web/src/main/java/io/fireflysoftware/experience/cards/web/controllers/CardReplacementJourneyController.java) |
| `GET` | `/api/v1/cards/{cardId}` | [CardsController](https://github.com/fireflysoftwaresolutions/exp-cards/blob/main/exp-cards-web/src/main/java/io/fireflysoftware/experience/cards/web/controllers/CardsController.java) |
| `GET` | `/api/v1/cards/{cardId}/limits` | [CardsController](https://github.com/fireflysoftwaresolutions/exp-cards/blob/main/exp-cards-web/src/main/java/io/fireflysoftware/experience/cards/web/controllers/CardsController.java) |
| `POST` | `/api/v1/cards` | [CardsController](https://github.com/fireflysoftwaresolutions/exp-cards/blob/main/exp-cards-web/src/main/java/io/fireflysoftware/experience/cards/web/controllers/CardsController.java) |
| `POST` | `/api/v1/cards/{cardId}/activate` | [CardsController](https://github.com/fireflysoftwaresolutions/exp-cards/blob/main/exp-cards-web/src/main/java/io/fireflysoftware/experience/cards/web/controllers/CardsController.java) |
| `POST` | `/api/v1/cards/{cardId}/block` | [CardsController](https://github.com/fireflysoftwaresolutions/exp-cards/blob/main/exp-cards-web/src/main/java/io/fireflysoftware/experience/cards/web/controllers/CardsController.java) |
| `PUT` | `/api/v1/cards/{cardId}/limits/{limitId}` | [CardsController](https://github.com/fireflysoftwaresolutions/exp-cards/blob/main/exp-cards-web/src/main/java/io/fireflysoftware/experience/cards/web/controllers/CardsController.java) |
| `DELETE` | `/api/v1/cards/{cardId}` | [CardsController](https://github.com/fireflysoftwaresolutions/exp-cards/blob/main/exp-cards-web/src/main/java/io/fireflysoftware/experience/cards/web/controllers/CardsController.java) |

## Reproduce a source-specific boundary

## Consumer example: read a channel-safe card summary

Start with this repository-owned executable contract before connecting a full runtime. Use the JDK required by the effective parent, Maven, and the matching internal artifacts. The selected test defines its own collaborators; no provider credentials should be added to it. Run from this repository root:

```sh
mvn -B -pl exp-cards-web -am test -DskipOpenApiGen \
  -Dtest=CardsControllerTest -Dsurefire.failIfNoSpecifiedTests=false
```

Runtime integration remains gated on the service configuration and selected adapters described below. The local port and bean-selection inventory below distinguishes the declared abstraction from its configured implementation. An SDK client is an outbound integration; its presence does not establish a working provider connection. Where a sandbox adapter is selected, its behavior is synthetic and limited to what that adapter implements.

**Inputs and fixture ownership.** The complete linked test class supplies its imports, setup, synthetic IDs and collaborators. Run that class as shown; the excerpt is not a standalone Java program. Mocked collaborators include `CardExperienceService`. For a deployed call, replace fixture IDs with IDs returned by the owning record-creation API and keep tenant/parent associations intact. The request values and assertions below describe this test boundary only.

```java
@Test
    void getCardSummary_returnsOkWithCardSummary() {
        UUID cardId = UUID.randomUUID();

        CardSummaryResponse summaryResponse = CardSummaryResponse.builder()
                .cardId(cardId)
                .maskedCardNumber("**** **** **** 1234")
                .cardType("DEBIT")
                .status("ACTIVE")
                .cardholderName("John Doe")
                .expirationDate(LocalDate.of(2028, 12, 31))
                .availableBalance(BigDecimal.valueOf(1000.00))
                .currentBalance(BigDecimal.valueOf(500.00))
                .currency("EUR")
                .virtual(false)
                .build();

        when(cardService.getCardSummary(cardId))
                .thenReturn(Mono.just(summaryResponse));

        StepVerifier.create(controller.getCardSummary(cardId))
                .assertNext(response -> {
                    assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
                    CardSummaryResponse body = response.getBody();
                    assertThat(body).isNotNull();
                    assertThat(body.getCardId()).isEqualTo(cardId);
                    assertThat(body.getMaskedCardNumber()).isEqualTo("**** **** **** 1234");
                    assertThat(body.getCardType()).isEqualTo("DEBIT");
                    assertThat(body.getStatus()).isEqualTo("ACTIVE");
                })
                .verifyComplete();
    }
```

**Expected behavior.** The controller returns a masked number ending 1234, DEBIT type and ACTIVE status from its mocked service. This is a channel representation, not a network authorization or an unmasked PAN API.

**Verification and recovery.** Run the complete selected test class and inspect its Surefire result: zero failures/errors and at least one executed test are required. A skipped or zero-test build is not evidence. Compare the assertions with the owning DTO/service before extending the request. For a runtime run, separately configure authentication/entitlements and the exact downstream endpoints, migrate/seed disposable owner stores, and reread the returned identifier; these unit/contract fixtures do not establish those prerequisites.

Source of this example: [CardsControllerTest](https://github.com/fireflysoftwaresolutions/exp-cards/blob/main/exp-cards-web/src/test/java/io/fireflysoftware/experience/cards/web/controllers/CardsControllerTest.java), [CardExperienceService](https://github.com/fireflysoftwaresolutions/exp-cards/blob/main/exp-cards-core/src/main/java/io/fireflysoftware/experience/cards/core/services/CardExperienceService.java), [CardSummaryResponse](https://github.com/fireflysoftwaresolutions/exp-cards/blob/main/exp-cards-interfaces/src/main/java/io/fireflysoftware/experience/cards/interfaces/dtos/CardSummaryResponse.java).



## Configuration and replacement

Read the exact runtime configuration and existing adapter selectors in the repository guide. Defaults are implementation facts, not recommended live settings. A live dependency failure must not fall back to synthetic approval. [The adapter contract](../../adapters/index.md) defines durable request identity, lookup, uncertain outcomes, callbacks, and provenance.

## Required negative and recovery cases

Denied and cross-tenant callers must reach no unauthorized write. Missing or expired evidence, changed intent under the same key, duplicate callback, partial participant failure, lost response, process restart, and replica retry must preserve one authoritative outcome. Retain original and compensating effects; do not delete accepted evidence to simulate rollback. Financial cases reconcile posted, available, reserved, provider, and accounting state.

See [operating procedures](../../operations/index.md) for duplicate requests, partial failures, provider uncertainty, and recovery.
