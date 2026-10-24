# core-lending-regulatory-compliance

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/core-lending-regulatory-compliance) · [Complete contract](../contracts/core-lending-regulatory-compliance/openapi.yml)

**Provenance:** base revision `fd8220fa1f10db3a11a75c790c450b966dd6f574`; current copied input SHA256 `ba4bf07b30e294833f4e1c02cb1ab2a9f232d4fe4be269c432c6c9082cad9034`. [Baseline source](https://github.com/fireflysoftwaresolutions/core-lending-regulatory-compliance/blob/fd8220fa1f10db3a11a75c790c450b966dd6f574/core-lending-regulatory-compliance-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `GET` | `/api/v1/reporting-runs/{reportingRunId}` | `getById` | `200` |
| `PUT` | `/api/v1/reporting-runs/{reportingRunId}` | `update` | `200` |
| `DELETE` | `/api/v1/reporting-runs/{reportingRunId}` | `delete` | `200` |
| `GET` | `/api/v1/reporting-runs/{reportingRunId}/submissions/{regulatorySubmissionId}` | `getById_1` | `200` |
| `PUT` | `/api/v1/reporting-runs/{reportingRunId}/submissions/{regulatorySubmissionId}` | `update_1` | `200` |
| `DELETE` | `/api/v1/reporting-runs/{reportingRunId}/submissions/{regulatorySubmissionId}` | `delete_1` | `200` |
| `GET` | `/api/v1/reporting-runs/{reportingRunId}/records/{reportingRecordId}` | `getById_2` | `200` |
| `PUT` | `/api/v1/reporting-runs/{reportingRunId}/records/{reportingRecordId}` | `update_2` | `200` |
| `DELETE` | `/api/v1/reporting-runs/{reportingRunId}/records/{reportingRecordId}` | `delete_2` | `200` |
| `GET` | `/api/v1/aml-cases/{amlCaseId}` | `getById_3` | `200` |
| `PUT` | `/api/v1/aml-cases/{amlCaseId}` | `update_3` | `200` |
| `DELETE` | `/api/v1/aml-cases/{amlCaseId}` | `delete_3` | `200` |
| `GET` | `/api/v1/aml-cases/{amlCaseId}/sars/{amlSarId}` | `getById_4` | `200` |
| `PUT` | `/api/v1/aml-cases/{amlCaseId}/sars/{amlSarId}` | `update_4` | `200` |
| `DELETE` | `/api/v1/aml-cases/{amlCaseId}/sars/{amlSarId}` | `delete_4` | `200` |
| `GET` | `/api/v1/aml-cases/{amlCaseId}/actions/{amlActionId}` | `getById_5` | `200` |
| `PUT` | `/api/v1/aml-cases/{amlCaseId}/actions/{amlActionId}` | `update_5` | `200` |
| `DELETE` | `/api/v1/aml-cases/{amlCaseId}/actions/{amlActionId}` | `delete_5` | `200` |
| `GET` | `/api/v1/reporting-runs` | `findAll` | `200` |
| `POST` | `/api/v1/reporting-runs` | `create` | `200` |
| `GET` | `/api/v1/reporting-runs/{reportingRunId}/submissions` | `findAll_1` | `200` |
| `POST` | `/api/v1/reporting-runs/{reportingRunId}/submissions` | `create_1` | `200` |
| `GET` | `/api/v1/reporting-runs/{reportingRunId}/records` | `findAll_2` | `200` |
| `POST` | `/api/v1/reporting-runs/{reportingRunId}/records` | `create_2` | `200` |
| `GET` | `/api/v1/aml-cases` | `findAll_3` | `200` |
| `POST` | `/api/v1/aml-cases` | `create_3` | `200` |
| `GET` | `/api/v1/aml-cases/{amlCaseId}/sars` | `findAll_4` | `200` |
| `POST` | `/api/v1/aml-cases/{amlCaseId}/sars` | `create_4` | `200` |
| `GET` | `/api/v1/aml-cases/{amlCaseId}/actions` | `findAll_5` | `200` |
| `POST` | `/api/v1/aml-cases/{amlCaseId}/actions` | `create_5` | `200` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`AmlActionDTO`, `AmlCaseDTO`, `AmlSarDTO`, `FilterOptions`, `FilterRequestAmlActionDTO`, `FilterRequestAmlCaseDTO`, `FilterRequestAmlSarDTO`, `FilterRequestRegulatorySubmissionDTO`, `FilterRequestReportingRecordDTO`, `FilterRequestReportingRunDTO`, `PaginationRequest`, `PaginationResponseAmlActionDTO`, `PaginationResponseAmlCaseDTO`, `PaginationResponseAmlSarDTO`, `PaginationResponseRegulatorySubmissionDTO`, `PaginationResponseReportingRecordDTO`, `PaginationResponseReportingRunDTO`, `RangeFilter`, `RangeObject`, `RegulatorySubmissionDTO`, `ReportingRecordDTO`, `ReportingRunDTO`

## Contract explorer

<swagger-ui src="../contracts/core-lending-regulatory-compliance/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
