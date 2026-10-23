# domain-data-business-intelligence

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/domain-data-business-intelligence) · [Complete contract](../contracts/domain-data-business-intelligence/openapi.yml)

**Provenance:** base revision `d513c40bfc258876c24c3888bcb903b157ee9a3d`; current copied input SHA256 `28e5f3eeca926cba5a93296ce4bd09353aa30f589a6eda4fc25f619c7367297e`. [Baseline source](https://github.com/fireflysoftwaresolutions/domain-data-business-intelligence/blob/d513c40bfc258876c24c3888bcb903b157ee9a3d/domain-data-business-intelligence-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `POST` | `/api/v1/business-intelligence/select-company` | `selectCompany` | `200` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`SelectCompanyRequest`, `SelectCompanyResponse`

## Contract explorer

<swagger-ui src="../contracts/domain-data-business-intelligence/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
