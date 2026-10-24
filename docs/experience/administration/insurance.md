# Insurance staff terminal

Preserve employee and represented-party authority, underwriting or settlement limits, decision reasons, evidence, effective dates, and auditable financial consequences for every policy, claim, submission, or configuration change.

[Business lifecycle](../../journeys/insurance.md) · [Repository guide](https://github.com/fireflysoftwaresolutions/exp-insurance-terminal) · [Source reference](https://github.com/fireflysoftwaresolutions/exp-insurance-terminal/blob/main/docs/openplatform/reference.md)

## Behavior and limitations

The terminal exposes record operations with configurable domain adapters. Updating a policy status does not establish effective insurance binding or cancellation; deciding a claim is not a settled indemnity payment. Qualify delegation, approval, persistence, premium/refund/reserve implications, and recovery separately.

## Declared entry points

The table is derived from local controller mappings. It does not include inherited, conditional, gateway, or framework routes and is not a runtime security or completeness assertion.

| Method | Path | Source |
| --- | --- | --- |
| `GET` | `/api/v1/staff/records/{area}` | [StaffController](https://github.com/fireflysoftwaresolutions/exp-insurance-terminal/blob/main/exp-insurance-terminal-web/src/main/java/io/fireflysoftware/experience/insurance/terminal/StaffController.java) |
| `GET` | `/api/v1/staff/records/{area}/{recordId}` | [StaffController](https://github.com/fireflysoftwaresolutions/exp-insurance-terminal/blob/main/exp-insurance-terminal-web/src/main/java/io/fireflysoftware/experience/insurance/terminal/StaffController.java) |
| `GET` | `/api/v1/staff/distributors` | [StaffController](https://github.com/fireflysoftwaresolutions/exp-insurance-terminal/blob/main/exp-insurance-terminal-web/src/main/java/io/fireflysoftware/experience/insurance/terminal/StaffController.java) |
| `GET` | `/api/v1/staff/masters/{type}` | [StaffController](https://github.com/fireflysoftwaresolutions/exp-insurance-terminal/blob/main/exp-insurance-terminal-web/src/main/java/io/fireflysoftware/experience/insurance/terminal/StaffController.java) |
| `POST` | `/api/v1/staff/sessions` | [StaffController](https://github.com/fireflysoftwaresolutions/exp-insurance-terminal/blob/main/exp-insurance-terminal-web/src/main/java/io/fireflysoftware/experience/insurance/terminal/StaffController.java) |
| `POST` | `/api/v1/staff/records/{area}/{recordId}/close` | [StaffController](https://github.com/fireflysoftwaresolutions/exp-insurance-terminal/blob/main/exp-insurance-terminal-web/src/main/java/io/fireflysoftware/experience/insurance/terminal/StaffController.java) |
| `POST` | `/api/v1/staff/records/{area}/{recordId}/remove` | [StaffController](https://github.com/fireflysoftwaresolutions/exp-insurance-terminal/blob/main/exp-insurance-terminal-web/src/main/java/io/fireflysoftware/experience/insurance/terminal/StaffController.java) |
| `POST` | `/api/v1/staff/records/{area}/{recordId}/decide` | [StaffController](https://github.com/fireflysoftwaresolutions/exp-insurance-terminal/blob/main/exp-insurance-terminal-web/src/main/java/io/fireflysoftware/experience/insurance/terminal/StaffController.java) |
| `POST` | `/api/v1/staff/records/{area}/{recordId}/distributor` | [StaffController](https://github.com/fireflysoftwaresolutions/exp-insurance-terminal/blob/main/exp-insurance-terminal-web/src/main/java/io/fireflysoftware/experience/insurance/terminal/StaffController.java) |
| `PUT` | `/api/v1/staff/records/{area}/{recordId}` | [StaffController](https://github.com/fireflysoftwaresolutions/exp-insurance-terminal/blob/main/exp-insurance-terminal-web/src/main/java/io/fireflysoftware/experience/insurance/terminal/StaffController.java) |
| `PUT` | `/api/v1/staff/configuration/{key}` | [StaffController](https://github.com/fireflysoftwaresolutions/exp-insurance-terminal/blob/main/exp-insurance-terminal-web/src/main/java/io/fireflysoftware/experience/insurance/terminal/StaffController.java) |

## Reproduce a source-specific boundary

## Consumer example: sign in the sample insurance employee

Start with this repository-owned executable contract before connecting a full runtime. Use the JDK required by the effective parent, Maven, and the matching internal artifacts. The selected test defines its own collaborators; no provider credentials should be added to it. Run from this repository root:

```sh
mvn -B -pl exp-insurance-terminal-core -am test -DskipOpenApiGen \
  -Dtest=StaffTerminalTest -Dsurefire.failIfNoSpecifiedTests=false
```

Runtime integration remains gated on the service configuration and selected adapters described below. The local port and bean-selection inventory below distinguishes the declared abstraction from its configured implementation. An SDK client is an outbound integration; its presence does not establish a working provider connection. Where a sandbox adapter is selected, its behavior is synthetic and limited to what that adapter implements.

**Inputs and fixture ownership.** The complete linked test class supplies its imports, setup, synthetic IDs and collaborators. Run that class as shown; the excerpt is not a standalone Java program. Synthetic adapter data is scoped to this fixture and does not seed an external owner. For a deployed call, replace fixture IDs with IDs returned by the owning record-creation API and keep tenant/parent associations intact. The request values and assertions below describe this test boundary only.

```java
@Test
    void sampleEmployeeSignsIn() {
        StaffSession session = terminal.signIn("sample-employee").block();
        assertEquals(EMPLOYEE, session.actorId());
        assertEquals("sandbox", session.provider());
    }
```

**Expected behavior.** The fixture signs in sample-employee and returns its configured employee actor with provider sandbox. It does not authenticate an employee against an external identity system.

**Verification and recovery.** Run the complete selected test class and inspect its Surefire result: zero failures/errors and at least one executed test are required. A skipped or zero-test build is not evidence. Compare the assertions with the owning DTO/service before extending the request. For a runtime run, separately configure authentication/entitlements and the exact downstream endpoints, migrate/seed disposable owner stores, and reread the returned identifier; these unit/contract fixtures do not establish those prerequisites.

Source of this example: [StaffTerminalTest](https://github.com/fireflysoftwaresolutions/exp-insurance-terminal/blob/main/exp-insurance-terminal-core/src/test/java/io/fireflysoftware/experience/insurance/terminal/StaffTerminalTest.java).



## Configuration and replacement

Read the exact runtime configuration and existing adapter selectors in the repository guide. Defaults are implementation facts, not recommended live settings. A live dependency failure must not fall back to synthetic approval. [The adapter contract](../../adapters/index.md) defines durable request identity, lookup, uncertain outcomes, callbacks, and provenance.

## Required negative and recovery cases

Denied and cross-tenant callers must reach no unauthorized write. Missing or expired evidence, changed intent under the same key, duplicate callback, partial participant failure, lost response, process restart, and replica retry must preserve one authoritative outcome. Retain original and compensating effects; do not delete accepted evidence to simulate rollback. Financial cases reconcile posted, available, reserved, provider, and accounting state.

See [operating procedures](../../operations/index.md) for duplicate requests, partial failures, provider uncertainty, and recovery.
