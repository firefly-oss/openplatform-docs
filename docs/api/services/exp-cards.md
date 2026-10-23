# exp-cards

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/exp-cards) · [Complete contract](../contracts/exp-cards/openapi.yml)

**Provenance:** base revision `07888d50d359fff00aeabc66f388c823997aa784`; current copied input SHA256 `9ebc0338fa7ea118dadc88cf0194a25fa29ab59fdb6de7a2c78651f5e8c590ec`. [Baseline source](https://github.com/fireflysoftwaresolutions/exp-cards/blob/07888d50d359fff00aeabc66f388c823997aa784/exp-cards-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `POST` | `/api/v1/journeys/card-replacement/{journeyId}/identity` | `verifyIdentity` | `200` |
| `POST` | `/api/v1/journeys/card-replacement` | `reportCardLost` | `200` |
| `POST` | `/api/v1/journeys/card-issuance/{journeyId}/pin` | `setupPin` | `200` |
| `POST` | `/api/v1/journeys/card-issuance/{journeyId}/address` | `confirmAddress` | `200` |
| `POST` | `/api/v1/journeys/card-issuance` | `initiateCardIssuance` | `200` |
| `POST` | `/api/v1/cards` | `issueCard` | `201`, `400` |
| `POST` | `/api/v1/cards/{cardId}/block` | `blockCard` | `204`, `404` |
| `POST` | `/api/v1/cards/{cardId}/activate` | `activateCard` | `204`, `404` |
| `GET` | `/api/v1/journeys/card-replacement/{journeyId}` | `getJourneyStatus` | `200` |
| `GET` | `/api/v1/journeys/card-issuance/{journeyId}` | `getJourneyStatus_1` | `200` |
| `GET` | `/api/v1/cards/{cardId}` | `getCardSummary` | `200`, `404` |
| `DELETE` | `/api/v1/cards/{cardId}` | `cancelCard` | `204`, `404` |
| `GET` | `/api/v1/cards/customer/{customerId}` | `getCustomerCards` | `200` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`CardIssuanceJourneyStatusDTO`, `CardReplacementJourneyStatusDTO`, `CardSummaryResponse`, `ConfirmAddressCommand`, `InitiateCardIssuanceCommand`, `IssueCardRequest`, `IssueCardResponse`, `ReportCardLostCommand`, `SetupPinCommand`, `VerifyIdentityCommand`

## Contract explorer

<swagger-ui src="../contracts/exp-cards/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
