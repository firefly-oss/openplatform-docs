# domain-lending-supply-chain-finance

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/domain-lending-supply-chain-finance) · [Complete contract](../contracts/domain-lending-supply-chain-finance/openapi.yml)

**Provenance:** base revision `11409276f8318484e2e5a424a6089232b1e8fd15`; current copied input SHA256 `5a23df6b610f4a6b393d06ce571e167c3d1b23ac07f7ea7b17749eed3bd528b8`. [Baseline source](https://github.com/fireflysoftwaresolutions/domain-lending-supply-chain-finance/blob/11409276f8318484e2e5a424a6089232b1e8fd15/domain-lending-supply-chain-finance-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `PUT` | `/api/v1/supply-chain-finance-agreements/{agreementId}/status` | `updateStatus` | `200`, `404` |
| `GET` | `/api/v1/supply-chain-finance-agreements/{agreementId}` | `get` | `200`, `404` |
| `PUT` | `/api/v1/supply-chain-finance-agreements/{agreementId}` | `update` | `200`, `404` |
| `DELETE` | `/api/v1/supply-chain-finance-agreements/{agreementId}` | `remove` | `204`, `404` |
| `POST` | `/api/v1/supply-chain-finance-agreements/{agreementId}/close` | `close` | `200`, `404` |
| `POST` | `/api/v1/supply-chain-finance-agreements/{agreementId}/cancel` | `cancel` | `200`, `404` |
| `POST` | `/api/v1/supply-chain-finance-agreements` | `create` | `201`, `400` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`ReasonRequest`, `StatusChangeRequest`, `SupplyChainFinanceAgreementDTO`

## Contract explorer

<swagger-ui src="../contracts/domain-lending-supply-chain-finance/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
