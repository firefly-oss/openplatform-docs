# Reading paths by responsibility

Start with the decision you need to make. The same platform is viewed differently by a product owner defining a customer promise, an engineer integrating contracts, and an operator resolving an uncertain outcome.

## Product and business teams

Read [Understand OpenPlatform](index.md), the [platform map](platform-map.md), and your [journey chapter](../journeys/index.md). Use the lifecycle tables to identify the customer promise and the staff work that supports it. For every stage, decide which rules are institutional policy, who may approve exceptions, and what evidence the customer receives.

Your useful output is a journey scope with explicit entry conditions, outcomes, referrals, financial consequences, and exception handling. “Create an account” is too broad if it includes identity approval, contract acceptance, account persistence, funding, and card issuance. Each has a different authority and failure mode. Use the lifecycle and recovery sections to assign an owner to each obligation and exception.

## Application and integration engineers

Read the [execution model](execution-model.md), [data and money](data-and-money.md), the worked example in the relevant chapter, and the linked [producer API](../api/index.md). Then read the repository adoption guide and exact DTO/handler/adapter sources. Build the producer and matching SDK before testing the consumer.

Begin with a repository-owned contract test to understand inputs and boundaries. Next run the actual owner with disposable infrastructure and IDs created in that environment. Finally traverse the experience/domain/core path with selected adapters. Capture the source and SDK version, input identity, returned IDs, and persisted effects. A passing mocked orchestration test and a passing real core test are useful separate facts; only a connected test demonstrates their integration.

## Operations and support teams

Read [records and evidence](data-and-money.md), then your chapter's recovery section. Establish which service owns the current state, how to retrieve it, and which action is safe when a response is lost. The essential distinction is between rejected work, pending work, uncertain external work, and completed work whose projection or notification failed.

Build a runbook around a disposable reproduction first. An operator should not need to invent IDs, alter a ledger row, or resend a provider instruction to discover its status. Define escalation authority for disputed financial finality, evidence retention, access failures, and mismatched reconciliation populations. Customer-facing language should reflect what is known: pending and uncertain are legitimate operational outcomes.

## Security, risk, and assurance teams

Read [shared services](../journeys/shared.md), [execution identity](execution-model.md#four-identities-to-retain), and the domain-specific decision and exception sections. Trace trusted subject and tenant context into resource authorization, then trace the resulting effect into audit and retained evidence. Test denied actors and cross-owner resources before the success path.

Review current contracts and source alongside [operational guidance](../operations/index.md). Trace where permission, resource ownership, and financial invariants are enforced. Exercise denied actions before effects, process restarts, repeated requests, and uncertain provider outcomes in a disposable environment. Use the results to define deployment controls and escalation paths.

## Platform maintainers

Use the [glossary](glossary.md) to keep vocabulary consistent. When a producer changes, update the copied API reference, regenerate its SDK, check consumers, and revise the worked example and its stated boundaries together. Keep business requirements distinct from API names: a future implementation may change transport without changing the required customer outcome.

The manual is ordered to teach before cataloging. Preserve that order when extending it: explain why a capability exists, locate its authority, show its concrete contract, then describe failure and recovery. Put exhaustive operation inventories in the API reference rather than interrupting the chapter's learning path.
