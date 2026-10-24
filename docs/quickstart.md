# Get started

Start with one explicit business outcome and the exact repositories that implement it. Use synthetic data and disposable infrastructure for qualification. A running process or a successful create-record response establishes only that part of the operation.

## 1. Select a business operation and its prerequisites

Choose a requirement from [Business journeys](journeys/index.md). Record the acting subject and tenant, affected resources, effective date, currency and amount where applicable, expected durable result, and the party authorized to approve a referral or exception. Identify the alternate outcomes before making a write.

For example, qualifying account opening requires current eligibility evidence, the intended contract and account, correct ownership and spaces, and a proven funding effect when funding is requested. Creating an account row alone does not satisfy that outcome.

## 2. Resolve the implementation and dependencies

Use the [repository map](reference/repositories.md) to find the experience, domain, and owning core. Read each repository's README and `docs/openplatform/` guide for source paths, modules, configuration, API operations, and current tests. Follow the producer's checked-in OpenAPI contract; do not infer a request from a diagram or from an SDK generated for another revision.

Keep Jafly dependencies under `org.fireflyframework` and OpenPlatform services under their declared coordinates. Read the producer POM for its actual version. A local artifact built from an edited producer must precede qualification of its consumers.

## 3. Establish an isolated environment

Use the JDK and build command declared by the repository and CI. Check both `java -version` and `mvn -version`: Maven may select a different JDK. Configure the service's documented database properties and provider selection explicitly. Never point a test initializer at an existing local or shared database.

Where a repository uses Testcontainers, run Docker and let the test provision its private database. For example, the account core's `StoredAccountRowsTest` provisions PostgreSQL, seeds synthetic positions through its own JDBC connection, then calls the actual generated SDK against the running application. It verifies that JDBC and the custom R2DBC connection use that same database and role. This qualifies stored account-position behavior; it does not post or reserve customer funds.

## 4. Run the producer's configured verification

The following commands show the repository build shape; they are not a platform installer. Run them from the relevant producer checkout after reviewing its prerequisites.

```sh
java -version
mvn -version
mvn verify
```

Use any documented presubmit script instead when available. OpenAPI generation may launch a temporary application and require dedicated ports and dependencies. Serialize generation when the parent configuration uses a fixed port. Skipping generation is useful for a targeted test run only when a separately verified producer contract already exists; it is not fresh SDK-generation evidence.

## 5. Execute the actual SDK boundary

Use the API/client example in the repository guide and replace synthetic IDs with records created in the same isolated environment. Preserve required fields and enum values. Carry a stable business action identity through retries; distinguish it from a transport response-cache header. Verify validation failures reach no business write.

A sandbox must implement the same port as its provider replacement and expose pending, rejected, unavailable, and uncertain outcomes. [Integrations](adapters/index.md) explains the replacement contract. Do not treat a constant score or an in-memory success response as provider acceptance.

## 6. Prove recovery and retain evidence

Repeat the same action, change its immutable input under the same key, restart the responsible process, and inspect the authoritative rows and events. Include denied and cross-tenant cases, a lost response, and failure after an intermediate write. Capture source revisions, exact commands, SDK/OpenAPI digests, isolated-resource configuration, test outputs, and the resulting durable IDs.

The [operating guide](operations/index.md) explains how to handle duplicate requests, partial failures, and uncertain outcomes.
