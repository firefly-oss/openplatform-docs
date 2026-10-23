# Insurance experience

Quote and underwriting decisions precede effective binding. Policy servicing, claims, premium, reserve, reinsurance, commission, tax, settlement, and close continue beyond create-record operations. Preserve terms and effective-date versions and explicit delegated authority.

[Business lifecycle](../../journeys/insurance.md) · [Repository guide](https://github.com/fireflysoftwaresolutions/exp-insurance) · [Source reference](https://github.com/fireflysoftwaresolutions/exp-insurance/blob/main/docs/openplatform/reference.md)

## Behavior and limitations

The typed policy correction preserves customer party identity through the generated domain SDK and real controller validation. Its combined fixture mocks domain orchestration; underwriting approval, contract effects, premium, claim settlement, and insurance finance remain unqualified. A sample product-family classifier cannot remove insurance controls.

## Declared entry points

The table is derived from local controller mappings. It does not include inherited, conditional, gateway, or framework routes and is not a runtime security or completeness assertion.

| Method | Path | Source |
| --- | --- | --- |
| `GET` | `/api/v1/experience/insurance/quotes/{submissionId}` | [InsuranceController](https://github.com/fireflysoftwaresolutions/exp-insurance/blob/main/exp-insurance-web/src/main/java/io/fireflysoftware/experience/insurance/web/controllers/InsuranceController.java) |
| `GET` | `/api/v1/experience/insurance/policies/{policyId}` | [InsuranceController](https://github.com/fireflysoftwaresolutions/exp-insurance/blob/main/exp-insurance-web/src/main/java/io/fireflysoftware/experience/insurance/web/controllers/InsuranceController.java) |
| `GET` | `/api/v1/experience/insurance/claims/{claimId}` | [InsuranceController](https://github.com/fireflysoftwaresolutions/exp-insurance/blob/main/exp-insurance-web/src/main/java/io/fireflysoftware/experience/insurance/web/controllers/InsuranceController.java) |
| `POST` | `/api/v1/experience/insurance/quotes` | [InsuranceController](https://github.com/fireflysoftwaresolutions/exp-insurance/blob/main/exp-insurance-web/src/main/java/io/fireflysoftware/experience/insurance/web/controllers/InsuranceController.java) |
| `POST` | `/api/v1/experience/insurance/quotes/{submissionId}/withdraw` | [InsuranceController](https://github.com/fireflysoftwaresolutions/exp-insurance/blob/main/exp-insurance-web/src/main/java/io/fireflysoftware/experience/insurance/web/controllers/InsuranceController.java) |
| `POST` | `/api/v1/experience/insurance/policies` | [InsuranceController](https://github.com/fireflysoftwaresolutions/exp-insurance/blob/main/exp-insurance-web/src/main/java/io/fireflysoftware/experience/insurance/web/controllers/InsuranceController.java) |
| `POST` | `/api/v1/experience/insurance/policies/{policyId}/cancel` | [InsuranceController](https://github.com/fireflysoftwaresolutions/exp-insurance/blob/main/exp-insurance-web/src/main/java/io/fireflysoftware/experience/insurance/web/controllers/InsuranceController.java) |
| `POST` | `/api/v1/experience/insurance/claims` | [InsuranceController](https://github.com/fireflysoftwaresolutions/exp-insurance/blob/main/exp-insurance-web/src/main/java/io/fireflysoftware/experience/insurance/web/controllers/InsuranceController.java) |
| `POST` | `/api/v1/experience/insurance/claims/{claimId}/close` | [InsuranceController](https://github.com/fireflysoftwaresolutions/exp-insurance/blob/main/exp-insurance-web/src/main/java/io/fireflysoftware/experience/insurance/web/controllers/InsuranceController.java) |
| `PUT` | `/api/v1/experience/insurance/quotes/{submissionId}` | [InsuranceController](https://github.com/fireflysoftwaresolutions/exp-insurance/blob/main/exp-insurance-web/src/main/java/io/fireflysoftware/experience/insurance/web/controllers/InsuranceController.java) |
| `PUT` | `/api/v1/experience/insurance/quotes/{submissionId}/status` | [InsuranceController](https://github.com/fireflysoftwaresolutions/exp-insurance/blob/main/exp-insurance-web/src/main/java/io/fireflysoftware/experience/insurance/web/controllers/InsuranceController.java) |
| `PUT` | `/api/v1/experience/insurance/policies/{policyId}` | [InsuranceController](https://github.com/fireflysoftwaresolutions/exp-insurance/blob/main/exp-insurance-web/src/main/java/io/fireflysoftware/experience/insurance/web/controllers/InsuranceController.java) |
| `PUT` | `/api/v1/experience/insurance/policies/{policyId}/status` | [InsuranceController](https://github.com/fireflysoftwaresolutions/exp-insurance/blob/main/exp-insurance-web/src/main/java/io/fireflysoftware/experience/insurance/web/controllers/InsuranceController.java) |
| `PUT` | `/api/v1/experience/insurance/claims/{claimId}` | [InsuranceController](https://github.com/fireflysoftwaresolutions/exp-insurance/blob/main/exp-insurance-web/src/main/java/io/fireflysoftware/experience/insurance/web/controllers/InsuranceController.java) |
| `PUT` | `/api/v1/experience/insurance/claims/{claimId}/status` | [InsuranceController](https://github.com/fireflysoftwaresolutions/exp-insurance/blob/main/exp-insurance-web/src/main/java/io/fireflysoftware/experience/insurance/web/controllers/InsuranceController.java) |

## Reproduce a source-specific boundary

## Consumer example: serialize a policy through the generated domain SDK

Start with this repository-owned executable contract before connecting a full runtime. Use the JDK required by the effective parent, Maven, and the matching internal artifacts. The selected test defines its own collaborators; no provider credentials should be added to it. Run from this repository root:

```sh
mvn -B -pl exp-insurance-core -am test -DskipOpenApiGen \
  -Dtest=HttpPolicyClientTest -Dsurefire.failIfNoSpecifiedTests=false
```

Runtime integration remains gated on the service configuration and selected adapters described below. The local port and bean-selection inventory below distinguishes the declared abstraction from its configured implementation. An SDK client is an outbound integration; its presence does not establish a working provider connection. Where a sandbox adapter is selected, its behavior is synthetic and limited to what that adapter implements.

**Inputs and fixture ownership.** The complete linked test class supplies its imports, setup, synthetic IDs and collaborators. Run that class as shown; the excerpt is not a standalone Java program. The test uses a local HTTP fixture; it does not connect to the production downstream service. For a deployed call, replace fixture IDs with IDs returned by the owning record-creation API and keep tenant/parent associations intact. The request values and assertions below describe this test boundary only.

```java
@ParameterizedTest
    @EnumSource(LineOfBusiness.class)
    void createSerializesPartyAndPolicyFieldsThroughTheActualGeneratedSdk(LineOfBusiness business) {
        UUID tenant = UUID.randomUUID();
        UUID contract = UUID.randomUUID();
        UUID product = UUID.randomUUID();
        UUID party = UUID.randomUUID();
        var command = new PolicyCommand(tenant, contract, product, party, "SYNTHETIC-001", business,
                PolicyStatus.QUOTE, LocalDate.of(2026, 11, 1), LocalDate.of(2027, 11, 1), "USD");

        StepVerifier.create(client.create(command, PolicyStatus.QUOTE)).assertNext(result -> {
            assertThat(result.id()).isEqualTo(policyId);
            assertThat(result.reference()).isEqualTo("SYNTHETIC-001");
        }).verifyComplete();

        JsonNode request = sent.get();
        assertThat(request).isNotNull();
        assertThat(request.path("partyId").asText()).isEqualTo(party.toString());
        assertThat(request.path("tenantId").asText()).isEqualTo(tenant.toString());
        assertThat(request.path("contractId").asText()).isEqualTo(contract.toString());
        assertThat(request.path("productId").asText()).isEqualTo(product.toString());
        assertThat(request.path("policyNumber").asText()).isEqualTo("SYNTHETIC-001");
        assertThat(request.path("lineOfBusiness").asText()).isEqualTo(business.name());
        assertThat(request.path("policyStatus").asText()).isEqualTo("QUOTE");
        assertThat(request.path("inceptionDate").asText()).isEqualTo("2026-11-01");
        assertThat(request.path("expiryDate").asText()).isEqualTo("2027-11-01");
        assertThat(request.path("currency").asText()).isEqualTo("USD");
    }
```

**Expected behavior.** The parameterized test covers every LineOfBusiness. It checks tenant, contract, product and customer-party UUIDs, policy number, QUOTE status, inception/expiry dates, and USD in the actual generated request body.

**Verification and recovery.** Run the complete selected test class and inspect its Surefire result: zero failures/errors and at least one executed test are required. A skipped or zero-test build is not evidence. Compare the assertions with the owning DTO/service before extending the request. For a runtime run, separately configure authentication/entitlements and the exact downstream endpoints, migrate/seed disposable owner stores, and reread the returned identifier; these unit/contract fixtures do not establish those prerequisites.

Source of this example: [HttpPolicyClientTest](https://github.com/fireflysoftwaresolutions/exp-insurance/blob/main/exp-insurance-core/src/test/java/io/fireflysoftware/experience/insurance/core/adapter/HttpPolicyClientTest.java), [LineOfBusiness](https://github.com/fireflysoftwaresolutions/exp-insurance/blob/main/exp-insurance-core/src/main/java/io/fireflysoftware/experience/insurance/core/journey/LineOfBusiness.java), [PolicyCommand](https://github.com/fireflysoftwaresolutions/exp-insurance/blob/main/exp-insurance-core/src/main/java/io/fireflysoftware/experience/insurance/core/journey/PolicyCommand.java), [PolicyStatus](https://github.com/fireflysoftwaresolutions/exp-insurance/blob/main/exp-insurance-core/src/main/java/io/fireflysoftware/experience/insurance/core/journey/PolicyStatus.java).



## Configuration and replacement

Read the exact runtime configuration and existing adapter selectors in the repository guide. Defaults are implementation facts, not recommended live settings. A live dependency failure must not fall back to synthetic approval. [The adapter contract](../../adapters/index.md) defines durable request identity, lookup, uncertain outcomes, callbacks, and provenance.

## Required negative and recovery cases

Denied and cross-tenant callers must reach no unauthorized write. Missing or expired evidence, changed intent under the same key, duplicate callback, partial participant failure, lost response, process restart, and replica retry must preserve one authoritative outcome. Retain original and compensating effects; do not delete accepted evidence to simulate rollback. Financial cases reconcile posted, available, reserved, provider, and accounting state.

See [operating procedures](../../operations/index.md) for duplicate requests, partial failures, provider uncertainty, and recovery.
