# Configure complaints and human work

A customer complaint needs an accountable owner, a deadline, a retained investigation and a response. A payment exception or underwriting referral also needs human work, but its final product decision still belongs to the payment or underwriting owner. Shared cases provide the work record without transferring that authority.

The case domain uses Jafly commands and queries to call the case core through its generated SDK. The core owns the PostgreSQL transaction containing the snapshot, journal, command receipt, evidence references and outbox. The connected intake journeys are account-service and insurance-policy complaints. Other typed referral/exception subtypes have service contracts; automatic continuation of the product workflow is a separate integration.

!!! note "Build the matching source"
    `core-common-case-mgmt` and `domain-common-case-mgmt` are local additions in this documentation snapshot. Their source repositories and SDK releases are not published. Use the matching local producer/SDK builds; the [core contract](../api/services/core-common-case-mgmt.md) and [domain contract](../api/services/domain-common-case-mgmt.md) identify their copied inputs without inventing remote revisions.

## Assemble the service chain

Deploy the case core, its private database and the case domain. Connect the account/policy experience to both its product domain and the case domain. Product lookup happens before case creation; an absent product does not become a new complaint with a guessed owner.

| Component | Required configuration |
| --- | --- |
| Case core database | `CASE_R2DBC_URL`, `CASE_JDBC_URL`, `CASE_DB_USERNAME`, `CASE_DB_PASSWORD`; both URLs identify the same database |
| Core and domain token validation | `CASE_TOKEN_ISSUER`, `CASE_TOKEN_AUDIENCE`, `CASE_JWKS_URI` |
| Case domain downstream | `CASE_CORE_BASE_URL` |
| Evidence policy | Core `CASE_REQUIRED_EVIDENCE_SUBTYPES`: explicit comma-separated subtype names or `NONE` |
| Evidence owner | Core `CASE_DOCUMENTS_BASE_URL` for the real document service |
| Runtime binding | `SERVER_ADDRESS`, `SERVER_PORT`; loopback is the default address |
| Deadline intervals | Core `case.sla`, `case.escalation-interval`: positive ISO-8601 durations; both default to 24 hours |

Use Java 25 and the matching executable artifacts: `core-common-case-mgmt-web-26.10.6-exec.jar` and `domain-common-case-mgmt-web-26.10.6-exec.jar`. Provision secrets and TLS through the deployment. The core applies its own additive migration; do not aim a disposable qualification run at a shared database.

For an account experience, configure:

```yaml
api-configuration:
  domain-platform:
    banking-accounts:
      base-path: ${ACCOUNTS_DOMAIN_URL}
    common-case-mgmt:
      base-path: ${CASE_DOMAIN_URL}
case:
  security:
    issuer: ${CASE_TOKEN_ISSUER}
    audience: ${CASE_TOKEN_AUDIENCE}
    jwk-set-uri: ${CASE_JWKS_URI}
```

The policy experience uses `insurance-policies.base-path` in place of `banking-accounts.base-path`. These properties select endpoints; they do not create identities or product-resource grants. The priority security chain protects only the complaint routes. Existing unrelated experience routes require their own authorization configuration and review.

## Grant the actor's actual authority

The services validate the token signature, exact issuer, expected audience and finite expiration. They obtain subject and tenant from validated claims through Jafly's security interfaces. A request body, tenant header or product UUID cannot establish authority.

| Actor/action | Required authority and duty |
| --- | --- |
| Account customer intake | `account:complaint`, `case:create`, signed `case_resources` entry `ACCOUNT:<accountId>` |
| Policy customer intake | `policy:complaint`, `case:create`, signed `case_resources` entry `POLICY:<policyId>` |
| Direct case creation | `case:create` and matching signed product-resource grant; deliberately privileged technical actors may additionally use `case:create:any` |
| Staff read | `case:read` and the matching signed `case_queues` delegation |
| Assignment | `case:assign`, permitted queue and target operator delegated through signed `case_operators` |
| Investigation and resolution | `case:work` / `case:resolve`, actual assigned operator; requester cannot resolve their own case |
| Independent closure | `case:close`; closer differs from both requester and resolver |
| Reopen | `case:reopen`, permitted staff authority and a reason |

The requester can read their own case. Staff access is bounded by tenant and queue. An external `AuthorizeUseCase` may replace the local policy adapter; empty decisions, denial and unsupported obligations stop the operation. Aggregate tenant and human-duty checks still apply after permission. Use live policy where immediate membership revocation is required; changing an issuer's records does not rewrite an already issued token.

Bearer credentials and the original command key travel through fresh per-operation SDK clients. Never change the bearer on an application-wide mutable client. Use the generated `ApiClient.buildWebClientBuilder()` so its Java-time, Jackson and nullable codecs remain installed. Case queries disable inferred caching to preserve the caller's current scope.

## Open the complaint

The two experience routes are:

| Product | POST route |
| --- | --- |
| Account | `/api/v1/experience/accounts/{resourceId}/complaints` |
| Policy | `/api/v1/experience/insurance/policies/{resourceId}/complaints` |

Send a stable `Idempotency-Key`, the validated bearer and this body, substituting the source UUID from the owning synthetic intake:

```json
{
  "sourceRequestId": "10000000-0000-4000-8000-000000000101",
  "subject": "Synthetic service complaint",
  "description": "Please investigate the synthetic service incident."
}
```

The server fixes category, subtype and owner. It checks resource policy, reads the actual product SDK and sends the generated case-domain request. The policy lookup also checks the returned tenant; the account DTO lacks equivalent tenant/party proof, so its signed resource grant is essential. A successful intake returns 201 with `caseId`, `state`, `dueAt` and `version`. It does not alter the account, policy or a financial position.

Retain the sourceRequestId, original command key and response. A new key is not a recovery method after a timeout. Reuse of a source request for another create conflicts rather than silently opening a second case.

## Run the investigation with version checks

The public domain base is `/api/v1/cases`. Read `/{caseId}`, `/{caseId}/history`, or the authorized bounded queue using `queue`, `afterId` and `limit`. Apply work through `POST /{caseId}/actions`, with `Idempotency-Key` and numeric `If-Match` from the last authoritative version. Responses expose ETag; preserve the exact returned header for subsequent work.

| Action | Effect |
| --- | --- |
| `ASSIGN` | Assign or reassign a delegated operator within the existing case queue; work in progress returns to ASSIGNED |
| `START` | Assigned operator begins investigation |
| `EVIDENCE` | Append an independently verified document-version reference |
| `RESOLVE` | Assigned operator records a typed disposition and reason |
| `CLOSE` | Independent authorized operator closes a resolved case |
| `REOPEN` | Reopen a resolved case, clear active assignment/resolution and set a new policy deadline; retain prior decisions |
| `CANCEL` | Cancel an unresolved case under requester/operator authority |

For example, an authorized assignment body is:

```json
{
  "action": "ASSIGN",
  "assigneeSubject": "synthetic-operator",
  "queue": "accounts",
  "reason": "Assign the synthetic investigation."
}
```

The operator must exist in the issuer's signed delegation. Intake fixes the queue by subtype: account-service complaints use `accounts`, and policy-service complaints use `insurance`. Assignment cannot change it; staff need a signed grant for that existing queue. The example operator grants nothing. The normal path is OPEN, ASSIGNED, IN_PROGRESS, RESOLVED, CLOSED. CLOSED and CANCELLED are terminal. A disposition such as ACCEPTED or REFERRED_TO_PRODUCT_OWNER records the investigation outcome. Any resulting refund, policy change or claim payment needs the product owner's separate command and authority.

An identical retry returns its original committed response after checking **current** resource/action, queue/operator and human-duty permission. This response can describe an earlier version; GET returns the current snapshot. Retained permission allows replay after later lifecycle changes without repeating the old transition. Revoked permission cannot be recovered from the historical receipt.

## Attach exact evidence

Use the document owner's actual document ID, explicit version ID, `documentOwner` equal to `core-common-document-mgmt`, SHA-256 of the retained bytes and a bounded description. The core reads metadata and downloads at most 16 MiB through the generated document SDK. It checks tenant, document/version association and the digest before committing the reference.

Resolve and close revalidate every linked version, even when evidence is optional. Missing, inaccessible or changed content blocks finalization. A subtype configured to require evidence cannot resolve without it. The case stores a reference and verification time, not the binary. Its hash does not impose a retention hold on another service; configure actual document preservation before relying on it for retained evidence.

## Schedule deadlines and deliver events

A deployment scheduler invokes the **core** worker endpoints under `/api/v1/internal/cases/workers`. Call `/deadlines` with signed tenant-scoped `case:system` and `case:escalate`; call `/outbox` with `case:system` and `case:dispatch`. Schedule separately for each authorized tenant. No worker accepts a body-selected tenant or manufactures privileged identity.

Deadlines and next-escalation times live in PostgreSQL. Repeat scans and process restarts derive the same due command identity; escalation advances the persisted interval without resolving the case. The in-process timer is not deadline authority.

The outbox commits with each case event. Dispatch claims rows with expiring lease tokens and publishes stable event IDs through Jafly `EventPublisher`. An unavailable publisher leaves pending work with backoff. A crash after publication but before acknowledgement may redeliver; consumers must deduplicate `eventId`. Monitor oldest due unresolved work, escalation levels, pending delivery attempts and lease age. Configuring a publisher is separate from proving broker or notification delivery.

## Diagnose and recover

| Result | Recovery |
| --- | --- |
| 400 | Correct invalid input; retain the original failed intent for diagnosis |
| 401 | Restore valid signed authentication; no guessed identity headers |
| 403 | Re-establish actual permission/delegation; replay does not bypass revocation |
| 404 | Check the authorized product/case identity; another tenant's case is hidden |
| 409 `IDEMPOTENCY_CONFLICT` | Recover the original intent; do not change input under its key |
| 409 `VERSION_CONFLICT` | Read the current case/history and make a new authorized decision |
| 428 | Supply the expected If-Match version |
| Dependency failure or lost response | Preserve IDs/key/body/version, inspect durable state and retry the same authorized intent |

Never rewrite the journal, receipt or evidence rows to repair a job. Snapshot, journal, receipt, evidence and outbox commit together; database triggers protect retained history. Product operations, document preservation, real broker delivery and client/deployment qualification retain their own procedures. See [recovery and reconciliation](index.md) and the complete producer contracts for request constraints and current transport details.
