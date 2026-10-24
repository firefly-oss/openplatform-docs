# Onboarding experience

Establish trusted customer or employee context, tenant, party, product, consent, evidence, screening, review, and a durable approval. Individual and business onboarding need separate evidence, ownership, signer, and exception handling.

[Business lifecycle](../../journeys/shared.md) · [Repository guide](https://github.com/fireflysoftwaresolutions/exp-onboarding) · [Source reference](https://github.com/fireflysoftwaresolutions/exp-onboarding/blob/main/docs/openplatform/reference.md)

## Behavior and limitations

The current sample catalog routes INSURANCE to a contract-only NON_REGULATED branch and banking families to verification workflows. That is an implementation classification, not a statement of legal obligations. These branches require explicit eligibility, caller ownership, and evidence checks before they can activate an account or customer relationship.

## Declared entry points

The table is derived from local controller mappings. It does not include inherited, conditional, gateway, or framework routes and is not a runtime security or completeness assertion.

| Method | Path | Source |
| --- | --- | --- |
| `GET` | `/api/v1/onboarding/businesses/{onboardingId}` | [BusinessOnboardingController](https://github.com/fireflysoftwaresolutions/exp-onboarding/blob/main/exp-onboarding-web/src/main/java/io/fireflysoftware/experience/onboarding/web/controllers/BusinessOnboardingController.java) |
| `GET` | `/api/v1/onboarding/businesses/{onboardingId}/kyb/status` | [BusinessOnboardingController](https://github.com/fireflysoftwaresolutions/exp-onboarding/blob/main/exp-onboarding-web/src/main/java/io/fireflysoftware/experience/onboarding/web/controllers/BusinessOnboardingController.java) |
| `POST` | `/api/v1/onboarding/businesses` | [BusinessOnboardingController](https://github.com/fireflysoftwaresolutions/exp-onboarding/blob/main/exp-onboarding-web/src/main/java/io/fireflysoftware/experience/onboarding/web/controllers/BusinessOnboardingController.java) |
| `POST` | `/api/v1/onboarding/businesses/{onboardingId}/company-data` | [BusinessOnboardingController](https://github.com/fireflysoftwaresolutions/exp-onboarding/blob/main/exp-onboarding-web/src/main/java/io/fireflysoftware/experience/onboarding/web/controllers/BusinessOnboardingController.java) |
| `POST` | `/api/v1/onboarding/businesses/{onboardingId}/ubos` | [BusinessOnboardingController](https://github.com/fireflysoftwaresolutions/exp-onboarding/blob/main/exp-onboarding-web/src/main/java/io/fireflysoftware/experience/onboarding/web/controllers/BusinessOnboardingController.java) |
| `POST` | `/api/v1/onboarding/businesses/{onboardingId}/corporate-documents` | [BusinessOnboardingController](https://github.com/fireflysoftwaresolutions/exp-onboarding/blob/main/exp-onboarding-web/src/main/java/io/fireflysoftware/experience/onboarding/web/controllers/BusinessOnboardingController.java) |
| `POST` | `/api/v1/onboarding/businesses/{onboardingId}/authorized-signers` | [BusinessOnboardingController](https://github.com/fireflysoftwaresolutions/exp-onboarding/blob/main/exp-onboarding-web/src/main/java/io/fireflysoftware/experience/onboarding/web/controllers/BusinessOnboardingController.java) |
| `POST` | `/api/v1/onboarding/businesses/{onboardingId}/kyb` | [BusinessOnboardingController](https://github.com/fireflysoftwaresolutions/exp-onboarding/blob/main/exp-onboarding-web/src/main/java/io/fireflysoftware/experience/onboarding/web/controllers/BusinessOnboardingController.java) |
| `POST` | `/api/v1/onboarding/businesses/{onboardingId}/completion` | [BusinessOnboardingController](https://github.com/fireflysoftwaresolutions/exp-onboarding/blob/main/exp-onboarding-web/src/main/java/io/fireflysoftware/experience/onboarding/web/controllers/BusinessOnboardingController.java) |
| `PATCH` | `/api/v1/onboarding/businesses/{onboardingId}` | [BusinessOnboardingController](https://github.com/fireflysoftwaresolutions/exp-onboarding/blob/main/exp-onboarding-web/src/main/java/io/fireflysoftware/experience/onboarding/web/controllers/BusinessOnboardingController.java) |
| `GET` | `/api/v1/onboarding/businesses/search/{bvdId}` | [BusinessSearchController](https://github.com/fireflysoftwaresolutions/exp-onboarding/blob/main/exp-onboarding-web/src/main/java/io/fireflysoftware/experience/onboarding/web/controllers/BusinessSearchController.java) |
| `POST` | `/api/v1/onboarding/businesses/search` | [BusinessSearchController](https://github.com/fireflysoftwaresolutions/exp-onboarding/blob/main/exp-onboarding-web/src/main/java/io/fireflysoftware/experience/onboarding/web/controllers/BusinessSearchController.java) |
| `GET` | `/api/v1/onboarding/individuals/{onboardingId}` | [IndividualOnboardingController](https://github.com/fireflysoftwaresolutions/exp-onboarding/blob/main/exp-onboarding-web/src/main/java/io/fireflysoftware/experience/onboarding/web/controllers/IndividualOnboardingController.java) |
| `GET` | `/api/v1/onboarding/individuals/{onboardingId}/kyc/status` | [IndividualOnboardingController](https://github.com/fireflysoftwaresolutions/exp-onboarding/blob/main/exp-onboarding-web/src/main/java/io/fireflysoftware/experience/onboarding/web/controllers/IndividualOnboardingController.java) |
| `POST` | `/api/v1/onboarding/individuals` | [IndividualOnboardingController](https://github.com/fireflysoftwaresolutions/exp-onboarding/blob/main/exp-onboarding-web/src/main/java/io/fireflysoftware/experience/onboarding/web/controllers/IndividualOnboardingController.java) |
| `POST` | `/api/v1/onboarding/individuals/{onboardingId}/personal-data` | [IndividualOnboardingController](https://github.com/fireflysoftwaresolutions/exp-onboarding/blob/main/exp-onboarding-web/src/main/java/io/fireflysoftware/experience/onboarding/web/controllers/IndividualOnboardingController.java) |
| `POST` | `/api/v1/onboarding/individuals/{onboardingId}/economic-data` | [IndividualOnboardingController](https://github.com/fireflysoftwaresolutions/exp-onboarding/blob/main/exp-onboarding-web/src/main/java/io/fireflysoftware/experience/onboarding/web/controllers/IndividualOnboardingController.java) |
| `POST` | `/api/v1/onboarding/individuals/{onboardingId}/identity-documents` | [IndividualOnboardingController](https://github.com/fireflysoftwaresolutions/exp-onboarding/blob/main/exp-onboarding-web/src/main/java/io/fireflysoftware/experience/onboarding/web/controllers/IndividualOnboardingController.java) |
| `POST` | `/api/v1/onboarding/individuals/{onboardingId}/kyc` | [IndividualOnboardingController](https://github.com/fireflysoftwaresolutions/exp-onboarding/blob/main/exp-onboarding-web/src/main/java/io/fireflysoftware/experience/onboarding/web/controllers/IndividualOnboardingController.java) |
| `POST` | `/api/v1/onboarding/individuals/{onboardingId}/completion` | [IndividualOnboardingController](https://github.com/fireflysoftwaresolutions/exp-onboarding/blob/main/exp-onboarding-web/src/main/java/io/fireflysoftware/experience/onboarding/web/controllers/IndividualOnboardingController.java) |

## Reproduce a source-specific boundary

## Consumer example: start the business onboarding response contract

Start with this repository-owned executable contract before connecting a full runtime. Use the JDK required by the effective parent, Maven, and the matching internal artifacts. The selected test defines its own collaborators; no provider credentials should be added to it. Run from this repository root:

```sh
mvn -B -pl exp-onboarding-web -am test -DskipOpenApiGen \
  -Dtest=BusinessOnboardingControllerTest -Dsurefire.failIfNoSpecifiedTests=false
```

Runtime integration remains gated on the service configuration and selected adapters described below. The local port and bean-selection inventory below distinguishes the declared abstraction from its configured implementation. An SDK client is an outbound integration; its presence does not establish a working provider connection. Where a sandbox adapter is selected, its behavior is synthetic and limited to what that adapter implements.

**Inputs and fixture ownership.** The complete linked test class supplies its imports, setup, synthetic IDs and collaborators. Run that class as shown; the excerpt is not a standalone Java program. Mocked collaborators include `BusinessOnboardingService`. For a deployed call, replace fixture IDs with IDs returned by the owning record-creation API and keep tenant/parent associations intact. The request values and assertions below describe this test boundary only.

```java
@Test
    void initiateOnboarding_returnsCreatedWithBusinessOnboardingResponse() {
        when(onboardingService.initiateOnboarding(any(InitiateBusinessOnboardingCommand.class)))
                .thenReturn(Mono.just(MOCK_STATUS));

        InitiateBusinessOnboardingCommand command = InitiateBusinessOnboardingCommand.builder()
                .businessName("Acme Corp")
                .registrationNumber("B12345678")
                .countryOfIncorporation("ES")
                .build();

        StepVerifier.create(controller.initiateOnboarding(command))
                .assertNext(response -> {
                    assertThat(response.getStatusCode()).isEqualTo(HttpStatus.CREATED);
                    BusinessOnboardingResponse body = response.getBody();
                    assertThat(body).isNotNull();
                    assertThat(body.getOnboardingId()).isEqualTo(ONBOARDING_ID);
                    assertThat(body.getPartyId()).isEqualTo(PARTY_ID);
                    assertThat(body.getCurrentPhase())
                            .isEqualTo(BusinessOnboardingWorkflow.PHASE_INITIATED);
                })
                .verifyComplete();
    }
```

**Expected behavior.** Business name Acme Corp, registration B12345678 and country ES map to a 201 response containing onboarding/party IDs and INITIATED phase. The workflow service is mocked; subsequent KYB, document, and account steps are not executed.

**Verification and recovery.** Run the complete selected test class and inspect its Surefire result: zero failures/errors and at least one executed test are required. A skipped or zero-test build is not evidence. Compare the assertions with the owning DTO/service before extending the request. For a runtime run, separately configure authentication/entitlements and the exact downstream endpoints, migrate/seed disposable owner stores, and reread the returned identifier; these unit/contract fixtures do not establish those prerequisites.

Source of this example: [BusinessOnboardingControllerTest](https://github.com/fireflysoftwaresolutions/exp-onboarding/blob/main/exp-onboarding-web/src/test/java/io/fireflysoftware/experience/onboarding/web/controllers/BusinessOnboardingControllerTest.java), [InitiateBusinessOnboardingCommand](https://github.com/fireflysoftwaresolutions/exp-onboarding/blob/main/exp-onboarding-core/src/main/java/io/fireflysoftware/experience/onboarding/core/business/commands/InitiateBusinessOnboardingCommand.java), [SubmitAuthorizedSignersCommand](https://github.com/fireflysoftwaresolutions/exp-onboarding/blob/main/exp-onboarding-core/src/main/java/io/fireflysoftware/experience/onboarding/core/business/commands/SubmitAuthorizedSignersCommand.java), [SubmitCompanyDataCommand](https://github.com/fireflysoftwaresolutions/exp-onboarding/blob/main/exp-onboarding-core/src/main/java/io/fireflysoftware/experience/onboarding/core/business/commands/SubmitCompanyDataCommand.java), [SubmitCorporateDocumentsCommand](https://github.com/fireflysoftwaresolutions/exp-onboarding/blob/main/exp-onboarding-core/src/main/java/io/fireflysoftware/experience/onboarding/core/business/commands/SubmitCorporateDocumentsCommand.java), [SubmitUbosCommand](https://github.com/fireflysoftwaresolutions/exp-onboarding/blob/main/exp-onboarding-core/src/main/java/io/fireflysoftware/experience/onboarding/core/business/commands/SubmitUbosCommand.java), [UpdatePartialDataCommand](https://github.com/fireflysoftwaresolutions/exp-onboarding/blob/main/exp-onboarding-core/src/main/java/io/fireflysoftware/experience/onboarding/core/business/commands/UpdatePartialDataCommand.java), [BusinessOnboardingStatusDTO](https://github.com/fireflysoftwaresolutions/exp-onboarding/blob/main/exp-onboarding-core/src/main/java/io/fireflysoftware/experience/onboarding/core/business/queries/BusinessOnboardingStatusDTO.java), [KybStatusDTO](https://github.com/fireflysoftwaresolutions/exp-onboarding/blob/main/exp-onboarding-core/src/main/java/io/fireflysoftware/experience/onboarding/core/business/queries/KybStatusDTO.java).



## Configuration and replacement

Read the exact runtime configuration and existing adapter selectors in the repository guide. Defaults are implementation facts, not recommended live settings. A live dependency failure must not fall back to synthetic approval. [The adapter contract](../../adapters/index.md) defines durable request identity, lookup, uncertain outcomes, callbacks, and provenance.

## Required negative and recovery cases

Denied and cross-tenant callers must reach no unauthorized write. Missing or expired evidence, changed intent under the same key, duplicate callback, partial participant failure, lost response, process restart, and replica retry must preserve one authoritative outcome. Retain original and compensating effects; do not delete accepted evidence to simulate rollback. Financial cases reconcile posted, available, reserved, provider, and accounting state.

See [operating procedures](../../operations/index.md) for duplicate requests, partial failures, provider uncertainty, and recovery.
