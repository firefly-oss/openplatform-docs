# Data and external systems

External data is evidence for a business decision. Its subject, purpose, consent context, observation time, source version, and finality must survive the provider boundary. A successful HTTP exchange alone does not establish a complete report or authorize lending.

## Credit-bureau inquiry ownership

<a id="domain-data-credit-bureaus"></a>

`domain-data-credit-bureaus` owns provider invocation and normalized translation. Its `CreditBureauPort` exposes submission and recovery. `core-lending-credit-scoring` owns the durable inquiry, immutable request binding, versioned report evidence, and append-only history. The bureau domain uses the generated core SDK; consumers use the generated bureau SDK. There is no second bureau database with competing report authority.

| Operation | Behavior |
| --- | --- |
| `POST /api/v1/bureau-inquiries` | Claim or replay a tenant/action-bound inquiry and represent the selected provider outcome |
| `GET /api/v1/bureau-inquiries/{inquiryId}` | Read the persisted inquiry and evidence |
| `POST /api/v1/bureau-inquiries/{inquiryId}/recovery` | Recover an uncertain outcome through the same port and durable identity |

See the [bureau contract](../api/services/domain-data-credit-bureaus.md) for current generated types and the repository's `docs/bureau-inquiry-lifecycle.md` for the full request and replacement procedure. These implementation changes remain local working-source changes until published; select matching artifacts when deploying.

## Configure the managed synthetic path

Start a migrated scoring core with its own isolated PostgreSQL database. Configure the bureau domain with `ENDPOINT_CORE_CREDIT_SCORING` pointing to that running core. Set `BUREAU_SANDBOX_ENABLED=true` explicitly; the default is false. The bureau service defaults to port 8088. Configure the scoring domain with `ENDPOINT_DOMAIN_DATA_CREDIT_BUREAUS` pointing to the bureau service and `ENDPOINT_CORE_CREDIT_SCORING` pointing to the same core. Set `SCORING_SANDBOX_ENABLED=true` explicitly in the scoring domain; that default is also false.

Use a new synthetic action ID and preserve it throughout retries. The request binds tenant, party, application, consent-evidence reference, purpose, provider, report model/version, scenario, and synthetic provenance. A changed binding conflicts; a supplied UUID or nonblank consent reference does not establish trusted authority. Managed live mode is unavailable until a project supplies and qualifies that context.

| Scenario | Represented evidence | Consumer behavior |
| --- | --- | --- |
| `HIT` | `COMPLETE`, synthetic score and declared range | Eligible for the explicitly synthetic calculation; never production approval |
| `NO_HIT`, `FROZEN`, `REJECTED` | Corresponding final outcome, no numerical facts | Stop calculation and apply the authorized business exception procedure |
| `PENDING`, `UNAVAILABLE` | Explicit unresolved outcome, no numerical facts | Preserve inquiry identity; these deterministic fixtures do not advance automatically |
| `ACCEPTED_REPLY_LOST` | `UNKNOWN` initially | Invoke recovery; retrieve the same deterministic report identity after restart |

The sandbox implements the same port as a future provider. It constructs a deterministic report from persisted inquiry identity and never interprets a timeout as a score. Core rejects numerical facts on non-COMPLETE evidence and changed final report identity. A real provider must separately establish durable submission intent, vendor idempotency or authoritative recovery before a billable retry.

## Legacy enrichers and company lookup

<a id="domain-data-business-intelligence"></a>

The older bureau DataEnricher routes are a separate opt-in surface controlled by `BUREAU_LEGACY_ENRICHMENT_ENABLED`, default false. Their local mock endpoint defaults and US/ES translation fixtures do not implement the managed inquiry lifecycle. Enabling those routes does not select the new `CreditBureauPort` or verify live provider access.

`domain-data-business-intelligence` owns a separate company-information integration. The managed scoring workflow does not call it. Treat legal-entity lookup, beneficial ownership, business-report evidence, and consumer credit inquiry as distinct contracts with their own purpose, provenance, and authorization requirements.

Continue with [scoring and decisions](decision.md), [adapter replacement](../adapters/index.md), and the [service directory](index.md).
