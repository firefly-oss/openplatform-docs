# API and SDK contracts

An API contract describes the wire boundary between services. To integrate a business operation, read its actors, prerequisites, decisions, durable state, and exceptions first; then select the exact experience, domain, and core SDKs that implement it.

## Find the producer

The [complete producer directory](contracts.md) contains the current public SDK input specifications across experience, domain, and core. Every page lists its operation directory, component schemas, downloadable OpenAPI bytes, base revision, and current SHA256. These are source snapshots, with runtime qualification tracked separately.

Experience entry points: [accounts](accounts.md), [cards](cards.md), [lending](lending.md), [insurance](insurance.md), [onboarding](onboarding.md), [profile](profile.md), [security](security.md), [notifications](notifications.md), [distributor](distributor.md), and [channel](channel.md).

The [payment experience contract](services/exp-payments.md), [finance terminal contract](services/exp-finance-terminal.md), and [insurance terminal contract](services/exp-insurance-terminal.md) are included in the producer directory. Use their matching generated SDKs. Staff terminal session/read/mutation calls require the declared bearer authentication and current resource policy; a username or actor header does not authenticate an employee. See the [finance](../reference/service-guides/finance-terminal-authentication.md) and [insurance](../reference/service-guides/insurance-terminal-authentication.md) configuration tutorials before connecting a terminal.

The embedded explorer is read-only: expand operations and schemas to inspect their fields and responses. Generated `servers` URLs describe the producer generation environment and are not advertised deployment endpoints. Use the matching SDK or your own qualification client against the explicitly selected running service.

## Use the contract safely and precisely

1. Read the producer POM, SDK generation settings, runtime configuration, and controller declaration for the selected revision.
2. Establish trusted subject/tenant authority and create prerequisite records in the owned qualification environment.
3. Use the generated typed request, preserving required IDs, enum values, precision, dates, and optional-header semantics.
4. Verify actual SDK serialization against the running producer's validation and response handling.
5. Inspect the durable business result and provider/financial effects; the returned status alone is insufficient.
6. Test invalid and denied requests, pagination, identical and conflicting replay, lost response, restart, and reconciliation.

Some baseline schemas retain an inherited description that overstates the protection provided by the optional transport idempotency header. Use the actual deployed filter contract: eligible response reuse is separate from durable business deduplication, and safe reads do not become once-only business operations. The shared-framework correction updates that description; each producer must be regenerated and qualified against the exact adopted artifact.

The OpenAPI security section can be incomplete even when a gateway or framework filter enforces authentication. An omitted schema field, validation constraint, or error response is a contract gap to resolve, not evidence that a business rule is absent. Do not invent an undocumented required payload from a commented example.

## Keep SDKs and servers together

Generate APIs, models and invoker support from the actual producer using the existing OpenAPI Generator configuration. Keep SDK production Java generated; fix compatibility through producer tags, operation IDs and DTO metadata instead of handwritten clients or subclasses. See the [framework and SDK tutorial](../reference/service-guides/framework-adoption.md). Qualify required-field and enum changes at every current consumer. An SDK generated for a response DTO can compile while omitting party or business-action data required by the write path. [Architecture](../layers/index.md) explains the boundaries; [operating guidance](../operations/index.md) explains the evidence.
