# core-lending-supply-chain-finance

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/core-lending-supply-chain-finance) · [Complete contract](../contracts/core-lending-supply-chain-finance/openapi.yml)

**Provenance:** base revision `56ea0f31669d5f0c3249e51bc698f86cd4aa3e7b`; current copied input SHA256 `24b4ac3cf5081ab7d05e8ebec9994831509f847559ecc8253a3cb20fb0787ee9`. [Baseline source](https://github.com/fireflysoftwaresolutions/core-lending-supply-chain-finance/blob/56ea0f31669d5f0c3249e51bc698f86cd4aa3e7b/core-lending-supply-chain-finance-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/supply-chain-finance/settlements/{id}` | `getById` | `200`, `404` |
| `PUT` | `/api/v1/supply-chain-finance/settlements/{id}` | `update` | `200`, `404`, `400` |
| `DELETE` | `/api/v1/supply-chain-finance/settlements/{id}` | `delete` | `204`, `404` |
| `GET` | `/api/v1/supply-chain-finance/invoices/{id}` | `getById_1` | `200`, `404` |
| `PUT` | `/api/v1/supply-chain-finance/invoices/{id}` | `update_1` | `200`, `404`, `400` |
| `DELETE` | `/api/v1/supply-chain-finance/invoices/{id}` | `delete_1` | `204`, `404` |
| `GET` | `/api/v1/supply-chain-finance/fees/{id}` | `getById_2` | `200`, `404` |
| `PUT` | `/api/v1/supply-chain-finance/fees/{id}` | `update_2` | `200`, `404`, `400` |
| `DELETE` | `/api/v1/supply-chain-finance/fees/{id}` | `delete_2` | `204`, `404` |
| `GET` | `/api/v1/supply-chain-finance/counterparties/{id}` | `getById_3` | `200`, `404` |
| `PUT` | `/api/v1/supply-chain-finance/counterparties/{id}` | `update_3` | `200`, `404`, `400` |
| `DELETE` | `/api/v1/supply-chain-finance/counterparties/{id}` | `delete_3` | `204`, `404` |
| `GET` | `/api/v1/supply-chain-finance/agreements/{id}` | `getById_4` | `200`, `404` |
| `PUT` | `/api/v1/supply-chain-finance/agreements/{id}` | `update_4` | `200`, `404`, `400` |
| `DELETE` | `/api/v1/supply-chain-finance/agreements/{id}` | `delete_4` | `204`, `404` |
| `GET` | `/api/v1/supply-chain-finance/advances/{id}` | `getById_5` | `200`, `404` |
| `PUT` | `/api/v1/supply-chain-finance/advances/{id}` | `update_5` | `200`, `404`, `400` |
| `DELETE` | `/api/v1/supply-chain-finance/advances/{id}` | `delete_5` | `204`, `404` |
| `GET` | `/api/v1/supply-chain-finance/settlements` | `findAll` | `200`, `400` |
| `POST` | `/api/v1/supply-chain-finance/settlements` | `create` | `200`, `400` |
| `GET` | `/api/v1/supply-chain-finance/invoices` | `findAll_1` | `200`, `400` |
| `POST` | `/api/v1/supply-chain-finance/invoices` | `create_1` | `200`, `400` |
| `GET` | `/api/v1/supply-chain-finance/fees` | `findAll_2` | `200`, `400` |
| `POST` | `/api/v1/supply-chain-finance/fees` | `create_2` | `200`, `400` |
| `GET` | `/api/v1/supply-chain-finance/counterparties` | `findAll_3` | `200`, `400` |
| `POST` | `/api/v1/supply-chain-finance/counterparties` | `create_3` | `200`, `400` |
| `GET` | `/api/v1/supply-chain-finance/agreements` | `findAll_4` | `200`, `400` |
| `POST` | `/api/v1/supply-chain-finance/agreements` | `create_4` | `200`, `400` |
| `GET` | `/api/v1/supply-chain-finance/advances` | `findAll_5` | `200`, `400` |
| `POST` | `/api/v1/supply-chain-finance/advances` | `create_5` | `200`, `400` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`CounterpartyDTO`, `FilterOptions`, `FilterRequestCounterpartyDTO`, `FilterRequestSupplyChainFinanceAdvanceDTO`, `FilterRequestSupplyChainFinanceAgreementDTO`, `FilterRequestSupplyChainFinanceFeeDTO`, `FilterRequestSupplyChainFinanceInvoiceDTO`, `FilterRequestSupplyChainFinanceSettlementDTO`, `PaginationRequest`, `PaginationResponse`, `RangeFilter`, `RangeObject`, `SupplyChainFinanceAdvanceDTO`, `SupplyChainFinanceAgreementDTO`, `SupplyChainFinanceFeeDTO`, `SupplyChainFinanceInvoiceDTO`, `SupplyChainFinanceSettlementDTO`

## Contract explorer

<swagger-ui src="../contracts/core-lending-supply-chain-finance/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
