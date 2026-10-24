# Integrations and adapter replacement

A journey expresses business intent through a port. The adapter translates that intent into a core SDK or external provider contract. Replacing an adapter must preserve lifecycle meaning, identifiers, errors, idempotency, recovery, and evidence.

## Choose the correct boundary

- **Experience ports** express a channel's business step and call domain SDKs.
- **Domain ports** express business capabilities and coordinate owning core SDKs or framework integration ports.
- **Core services** own authoritative state and local transactions. External I/O must not create a second untracked authority for that state.
- **Jafly integration ports** define provider capabilities such as identity, document content, signature requests, and signature envelopes. A provider implementing one interface does not implicitly implement another.

Internal persistence packages named `provider` are not necessarily external adapters. Inspect implemented interfaces, selection configuration, actual outbound calls, and tests before classifying an integration.

## Required adapter contract

Define supported operations, request identity, caller and tenant context, canonical immutable input, pending and terminal statuses, rejected versus unavailable versus uncertain outcomes, timeouts, retry policy, lookup, cancellation support, callbacks, and retained evidence. Unsupported operations fail explicitly. Never translate an unavailable provider into accepted business work.

The owning core retains provider request/reference mapping and business association before consumers can treat an effect as recoverable. An accepted request with a lost response must be looked up or reconciled under its original identity. Provider IDs in a process-local map disappear on restart and do not satisfy that requirement.

## Sandbox is an implementation

A sandbox implements the same port and input validation as its replacement. It provides deterministic fixtures for success, rejection, pending, unavailable, timeout before acceptance, acceptance with lost response, duplicate callback, conflicting replay, and restart recovery where the contract requires persistence. Synthetic provenance remains visible to downstream decisions and evidence.

Use explicit scenario configuration and synthetic data. Keep provider and sandbox beans mutually exclusive in a deployment. A required live adapter with missing configuration must fail closed; an implicit fallback cannot turn a failed live call into synthetic success.

## Signature requests and envelopes

Jafly exposes separate request and envelope ports. The current durable core sandbox implements `SignatureRequestPort`, while the inspected DocuSign and Logalty modules implement `SignatureEnvelopePort`. Selecting an envelope provider does not automatically wire a complete request bridge.

A usable signing integration needs actual immutable document bytes/version/hash, signers and roles, routing/order, authentication policy, provider request and envelope references, status mapping, durable lookup, cancellation capability, authenticated callback handling, and retained completion evidence. The current sandbox qualifies synthetic lifecycle behavior; it does not establish legal acceptance of a real provider signature. See [shared journeys](../journeys/shared.md).

## Credit bureaus and decisions

A bureau adapter must represent consent and purpose, query identity, identity match, report identity/version/time, provider status, score model and reason codes, raw-evidence retention policy, and no-hit/frozen/unavailable/ambiguous responses. The decision engine consumes that evidence under versioned rules. Returning a constant score for every applicant is a fixture, not a bureau implementation or credit approval.

A referral needs a durable review process. A provider error must not silently yield an approving score or allow a dependent write.

## Payment rails and card providers

Keep business action, reservation, ledger transaction, provider instruction, clearing, and settlement identifiers distinct and linked. Test duplicate and late messages, partial acceptance, changed intent, uncertain responses, returns, reversals, and reconciliation. Provider acceptance and final settlement have different meanings. A ledger compensation cannot cancel a rail effect without the rail's supported protocol and proven outcome.

## Replace and qualify

1. Inspect the exact existing port and consumers before introducing an interface.
2. Implement provider translation and configuration in the appropriate integration module.
3. Keep credentials in environment or a configured secrets service; retain no secrets in source or test reports.
4. Run shared contract fixtures against sandbox and provider HTTP fixtures.
5. Run the real consumer SDK, owning core, and private database with restart and failure cases.
6. Run the provider's actual sandbox with its documented credentials and supported scenarios.
7. Verify production authority, callback authentication, operational recovery, and institution acceptance separately.

Record evidence by layer in [operating guidance](../operations/index.md). A configuration switch alone is not proof of a replacement integration.
