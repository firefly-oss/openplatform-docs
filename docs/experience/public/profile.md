# Profile experience

Read and change only resources permitted to the authenticated subject or documented delegate. Preserve effective customer data, consent history, document evidence, contract relationships, and privacy-safe audit.

[Business lifecycle](../../journeys/shared.md) · [Repository guide](https://github.com/fireflysoftwaresolutions/exp-profile) · [Source reference](https://github.com/fireflysoftwaresolutions/exp-profile/blob/main/docs/openplatform/reference.md)

## Behavior and limitations

Source analysis found fixed sample-identity assumptions. A successful read for a fixture party does not prove resource ownership or cross-tenant isolation. Product enrichment is a dependent read; missing enrichment must not fabricate a new contract or authority.

## Declared entry points

The table is derived from local controller mappings. It does not include inherited, conditional, gateway, or framework routes and is not a runtime security or completeness assertion.

| Method | Path | Source |
| --- | --- | --- |
| `GET` | `/api/v1/experience/profile/{partyId}` | [ProfileController](https://github.com/fireflysoftwaresolutions/exp-profile/blob/main/exp-profile-web/src/main/java/io/fireflysoftware/experience/profile/web/controllers/ProfileController.java) |
| `GET` | `/api/v1/experience/profile/{partyId}/addresses` | [ProfileController](https://github.com/fireflysoftwaresolutions/exp-profile/blob/main/exp-profile-web/src/main/java/io/fireflysoftware/experience/profile/web/controllers/ProfileController.java) |
| `GET` | `/api/v1/experience/profile/{partyId}/documents` | [ProfileController](https://github.com/fireflysoftwaresolutions/exp-profile/blob/main/exp-profile-web/src/main/java/io/fireflysoftware/experience/profile/web/controllers/ProfileController.java) |
| `GET` | `/api/v1/experience/profile/{partyId}/documents/{id}` | [ProfileController](https://github.com/fireflysoftwaresolutions/exp-profile/blob/main/exp-profile-web/src/main/java/io/fireflysoftware/experience/profile/web/controllers/ProfileController.java) |
| `GET` | `/api/v1/experience/profile/{partyId}/consents` | [ProfileController](https://github.com/fireflysoftwaresolutions/exp-profile/blob/main/exp-profile-web/src/main/java/io/fireflysoftware/experience/profile/web/controllers/ProfileController.java) |
| `GET` | `/api/v1/experience/profile/{partyId}/identity-documents` | [ProfileController](https://github.com/fireflysoftwaresolutions/exp-profile/blob/main/exp-profile-web/src/main/java/io/fireflysoftware/experience/profile/web/controllers/ProfileController.java) |
| `GET` | `/api/v1/experience/profile/{partyId}/contracts` | [ProfileController](https://github.com/fireflysoftwaresolutions/exp-profile/blob/main/exp-profile-web/src/main/java/io/fireflysoftware/experience/profile/web/controllers/ProfileController.java) |
| `POST` | `/api/v1/experience/profile/{partyId}/addresses` | [ProfileController](https://github.com/fireflysoftwaresolutions/exp-profile/blob/main/exp-profile-web/src/main/java/io/fireflysoftware/experience/profile/web/controllers/ProfileController.java) |
| `POST` | `/api/v1/experience/profile/{partyId}/documents` | [ProfileController](https://github.com/fireflysoftwaresolutions/exp-profile/blob/main/exp-profile-web/src/main/java/io/fireflysoftware/experience/profile/web/controllers/ProfileController.java) |
| `POST` | `/api/v1/experience/profile/{partyId}/identity-documents` | [ProfileController](https://github.com/fireflysoftwaresolutions/exp-profile/blob/main/exp-profile-web/src/main/java/io/fireflysoftware/experience/profile/web/controllers/ProfileController.java) |
| `PUT` | `/api/v1/experience/profile/{partyId}/addresses/{id}` | [ProfileController](https://github.com/fireflysoftwaresolutions/exp-profile/blob/main/exp-profile-web/src/main/java/io/fireflysoftware/experience/profile/web/controllers/ProfileController.java) |
| `PUT` | `/api/v1/experience/profile/{partyId}/consents/{id}` | [ProfileController](https://github.com/fireflysoftwaresolutions/exp-profile/blob/main/exp-profile-web/src/main/java/io/fireflysoftware/experience/profile/web/controllers/ProfileController.java) |
| `PATCH` | `/api/v1/experience/profile/{partyId}/personal-data` | [ProfileController](https://github.com/fireflysoftwaresolutions/exp-profile/blob/main/exp-profile-web/src/main/java/io/fireflysoftware/experience/profile/web/controllers/ProfileController.java) |
| `PATCH` | `/api/v1/experience/profile/{partyId}/contact-data` | [ProfileController](https://github.com/fireflysoftwaresolutions/exp-profile/blob/main/exp-profile-web/src/main/java/io/fireflysoftware/experience/profile/web/controllers/ProfileController.java) |
| `DELETE` | `/api/v1/experience/profile/{partyId}/addresses/{id}` | [ProfileController](https://github.com/fireflysoftwaresolutions/exp-profile/blob/main/exp-profile-web/src/main/java/io/fireflysoftware/experience/profile/web/controllers/ProfileController.java) |
| `DELETE` | `/api/v1/experience/profile/{partyId}/identity-documents/{id}` | [ProfileController](https://github.com/fireflysoftwaresolutions/exp-profile/blob/main/exp-profile-web/src/main/java/io/fireflysoftware/experience/profile/web/controllers/ProfileController.java) |

## Reproduce a source-specific boundary

## Consumer example: read a customer profile view

Start with this repository-owned executable contract before connecting a full runtime. Use the JDK required by the effective parent, Maven, and the matching internal artifacts. The selected test defines its own collaborators; no provider credentials should be added to it. Run from this repository root:

```sh
mvn -B -pl exp-profile-web -am test -DskipOpenApiGen \
  -Dtest=ProfileControllerTest -Dsurefire.failIfNoSpecifiedTests=false
```

Runtime integration remains gated on the service configuration and selected adapters described below. The local port and bean-selection inventory below distinguishes the declared abstraction from its configured implementation. An SDK client is an outbound integration; its presence does not establish a working provider connection. Where a sandbox adapter is selected, its behavior is synthetic and limited to what that adapter implements.

**Inputs and fixture ownership.** The complete linked test class supplies its imports, setup, synthetic IDs and collaborators. Run that class as shown; the excerpt is not a standalone Java program. Mocked collaborators include `ProfileService`. For a deployed call, replace fixture IDs with IDs returned by the owning record-creation API and keep tenant/parent associations intact. The request values and assertions below describe this test boundary only.

```java
@Test
    void getProfile_returns200WithProfileDto() {
        ProfileDTO profileDto = ProfileDTO.builder()
                .partyId(UUID.randomUUID())
                .firstName("Jane")
                .lastName("Doe")
                .dateOfBirth(LocalDate.of(1990, 5, 15))
                .addresses(Collections.emptyList())
                .identityDocuments(Collections.emptyList())
                .build();

        when(profileService.getProfile(any())).thenReturn(Mono.just(profileDto));

        webTestClient.get()
                .uri(BASE_PATH)
                .accept(MediaType.APPLICATION_JSON)
                .exchange()
                .expectStatus().isOk()
                .expectBody(ProfileDTO.class)
                .value(body -> {
                    assertThat(body.getFirstName()).isEqualTo("Jane");
                    assertThat(body.getLastName()).isEqualTo("Doe");
                });
    }
```

**Expected behavior.** The HTTP response preserves the fixture’s Jane Doe profile and empty address/document collections. The response contract is exercised with a mocked profile service.

**Verification and recovery.** Run the complete selected test class and inspect its Surefire result: zero failures/errors and at least one executed test are required. A skipped or zero-test build is not evidence. Compare the assertions with the owning DTO/service before extending the request. For a runtime run, separately configure authentication/entitlements and the exact downstream endpoints, migrate/seed disposable owner stores, and reread the returned identifier; these unit/contract fixtures do not establish those prerequisites.

Source of this example: [ProfileControllerTest](https://github.com/fireflysoftwaresolutions/exp-profile/blob/main/exp-profile-web/src/test/java/io/fireflysoftware/experience/profile/web/controllers/ProfileControllerTest.java), [AddAddressCommand](https://github.com/fireflysoftwaresolutions/exp-profile/blob/main/exp-profile-core/src/main/java/io/fireflysoftware/experience/profile/core/commands/AddAddressCommand.java), [AddIdentityDocumentCommand](https://github.com/fireflysoftwaresolutions/exp-profile/blob/main/exp-profile-core/src/main/java/io/fireflysoftware/experience/profile/core/commands/AddIdentityDocumentCommand.java), [UpdateAddressCommand](https://github.com/fireflysoftwaresolutions/exp-profile/blob/main/exp-profile-core/src/main/java/io/fireflysoftware/experience/profile/core/commands/UpdateAddressCommand.java), [UpdateConsentCommand](https://github.com/fireflysoftwaresolutions/exp-profile/blob/main/exp-profile-core/src/main/java/io/fireflysoftware/experience/profile/core/commands/UpdateConsentCommand.java), [UpdateContactDataCommand](https://github.com/fireflysoftwaresolutions/exp-profile/blob/main/exp-profile-core/src/main/java/io/fireflysoftware/experience/profile/core/commands/UpdateContactDataCommand.java), [UpdatePersonalDataCommand](https://github.com/fireflysoftwaresolutions/exp-profile/blob/main/exp-profile-core/src/main/java/io/fireflysoftware/experience/profile/core/commands/UpdatePersonalDataCommand.java), [AddressDTO](https://github.com/fireflysoftwaresolutions/exp-profile/blob/main/exp-profile-core/src/main/java/io/fireflysoftware/experience/profile/core/queries/AddressDTO.java), [IdentityDocumentDTO](https://github.com/fireflysoftwaresolutions/exp-profile/blob/main/exp-profile-core/src/main/java/io/fireflysoftware/experience/profile/core/queries/IdentityDocumentDTO.java).



## Configuration and replacement

Read the exact runtime configuration and existing adapter selectors in the repository guide. Defaults are implementation facts, not recommended live settings. A live dependency failure must not fall back to synthetic approval. [The adapter contract](../../adapters/index.md) defines durable request identity, lookup, uncertain outcomes, callbacks, and provenance.

## Required negative and recovery cases

Denied and cross-tenant callers must reach no unauthorized write. Missing or expired evidence, changed intent under the same key, duplicate callback, partial participant failure, lost response, process restart, and replica retry must preserve one authoritative outcome. Retain original and compensating effects; do not delete accepted evidence to simulate rollback. Financial cases reconcile posted, available, reserved, provider, and accounting state.

See [operating procedures](../../operations/index.md) for duplicate requests, partial failures, provider uncertainty, and recovery.
