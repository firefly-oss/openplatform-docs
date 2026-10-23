# domain-payments

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/domain-payments) · [Complete contract](../contracts/domain-payments/openapi.yml)

**Provenance:** base revision `58fb42ab7d880c4dfda44bd0dc777bae68690452`; current copied input SHA256 `8c6262d8b2b7f263ade44dd4521c9bcf24031ae5d8a25cf46f7c080178af8079`. [Baseline source](https://github.com/fireflysoftwaresolutions/domain-payments/blob/58fb42ab7d880c4dfda44bd0dc777bae68690452/domain-payments-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `POST` | `/api/v1/tenants/{tenant}/internal-payments` | `createManagedPaymentJourney` | `201`, `200`, `400`, `401`, `403`, `404`, `409`, `503` |
| `POST` | `/api/v1/tenants/{tenant}/internal-payments/{paymentId}/recovery` | `recoverManagedPaymentJourney` | `200`, `202`, `400`, `401`, `403`, `404`, `409`, `503` |
| `POST` | `/api/v1/tenants/{tenant}/internal-payments/{paymentId}/decisions` | `decideManagedPaymentJourney` | `200`, `202`, `400`, `401`, `403`, `404`, `409`, `503` |
| `POST` | `/api/v1/payments/{paymentId}/confirmations` | `confirmPayment` | `200` |
| `POST` | `/api/v1/payments/{paymentId}/cancellations` | `cancelPayment` | `200` |
| `POST` | `/api/v1/payments/tries` | `tryPayment` | `201` |
| `POST` | `/api/v1/payment-records/standing-orders` | `runStandingOrder` | `200` |
| `POST` | `/api/v1/payment-records/direct-debits` | `createDirectDebit` | `200` |
| `POST` | `/api/orchestration/workflows/{workflowId}/start` | `startWorkflow` | `202` |
| `POST` | `/api/orchestration/workflows/instances/{correlationId}/suspend` | `suspendWorkflow` | `200` |
| `POST` | `/api/orchestration/workflows/instances/{correlationId}/signal/{signalName}` | `deliverSignal` | `200` |
| `POST` | `/api/orchestration/workflows/instances/{correlationId}/resume` | `resumeWorkflow` | `200` |
| `POST` | `/api/orchestration/workflows/instances/{correlationId}/cancel` | `cancelWorkflow` | `200` |
| `GET` | `/api/v1/tenants/{tenant}/internal-payments/{paymentId}` | `getManagedPaymentJourney` | `400`, `401`, `403`, `404`, `409`, `503`, `200` |
| `GET` | `/api/v1/tenants/{tenant}/internal-payments/{paymentId}/history` | `getManagedPaymentJourneyHistory` | `400`, `401`, `403`, `404`, `409`, `503`, `200` |
| `GET` | `/api/v1/payments/{paymentId}` | `readPayment` | `200` |
| `GET` | `/api/v1/payment-records/standing-orders/{runId}` | `readStandingOrder` | `200` |
| `GET` | `/api/v1/payment-records/direct-debits/{mandateId}` | `readDirectDebit` | `200` |
| `GET` | `/api/orchestration/workflows` | `listWorkflows` | `200` |
| `GET` | `/api/orchestration/workflows/{workflowId}` | `getWorkflow` | `200` |
| `GET` | `/api/orchestration/workflows/{workflowId}/topology` | `getTopology` | `200` |
| `GET` | `/api/orchestration/workflows/instances` | `listInstances` | `200` |
| `GET` | `/api/orchestration/workflows/instances/{correlationId}` | `getInstance` | `200` |
| `GET` | `/api/orchestration/workflows/instances/{correlationId}/timers` | `listTimers` | `200` |
| `GET` | `/api/orchestration/executions` | `listExecutions` | `200` |
| `GET` | `/api/orchestration/executions/{id}` | `getExecution` | `200` |
| `GET` | `/api/orchestration/dlq` | `listEntries` | `200` |
| `GET` | `/api/orchestration/dlq/count` | `count` | `200` |
| `DELETE` | `/api/orchestration/workflows/instances/{correlationId}/timers/{timerId}` | `cancelTimer` | `200` |
| `DELETE` | `/api/orchestration/dlq/{id}` | `deleteEntry` | `200` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`Confirmation`, `Create`, `DeadLetterEntryDto`, `Decision`, `DirectDebitBody`, `DirectDebitView`, `ExecutionSummaryDto`, `HistoryEvent`, `HistoryPage`, `LedgerLeg`, `LedgerPosting`, `MovementCommand`, `MovementResult`, `RecordedId`, `Recovery`, `SignalResult`, `StandingOrderBody`, `StandingOrderView`, `StartExecutionRequest`, `StepSummary`, `TimerEntry`, `View`, `WorkflowDetail`, `WorkflowSummary`

## Contract explorer

<swagger-ui src="../contracts/domain-payments/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
