# domain-core-security-center

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/domain-core-security-center) · [Complete contract](../contracts/domain-core-security-center/openapi.yml)

**Provenance:** base revision `da6006873315a81c5cd04057f83503e2f11dd030`; current copied input SHA256 `5e985e6244bc40bb7d8bed64ac46e9e798c7a5d65d510f446be065d214b0909a`. [Baseline source](https://github.com/fireflysoftwaresolutions/domain-core-security-center/blob/da6006873315a81c5cd04057f83503e2f11dd030/domain-core-security-center-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `POST` | `/api/v1/users` | `createUser` | `200` |
| `POST` | `/api/v1/sessions` | `createOrGetSession` | `200` |
| `POST` | `/api/v1/sessions/{sessionId}/refresh` | `refreshSession` | `200` |
| `POST` | `/api/v1/auth/reset-password` | `resetPassword` | `200` |
| `POST` | `/api/v1/auth/refresh` | `refresh` | `200` |
| `POST` | `/api/v1/auth/logout` | `logout` | `200` |
| `POST` | `/api/v1/auth/login` | `login` | `200` |
| `POST` | `/api/v1/auth/introspect` | `introspect` | `200` |
| `GET` | `/api/v1/sessions/{sessionId}` | `getSessionById` | `200` |
| `DELETE` | `/api/v1/sessions/{sessionId}` | `invalidateSession` | `200` |
| `GET` | `/api/v1/sessions/{sessionId}/validate` | `validateSession` | `200` |
| `GET` | `/api/v1/sessions/permission-check` | `checkPermission` | `200` |
| `GET` | `/api/v1/sessions/party/{partyId}` | `getSessionByPartyId` | `200` |
| `DELETE` | `/api/v1/sessions/party/{partyId}` | `invalidateSessionsByPartyId` | `200` |
| `GET` | `/api/v1/sessions/access-check` | `checkAccess` | `200` |
| `POST` | `/api/v1/identity/subjects` | `resolveSubject` | `200`, `400`, `404` |
| `POST` | `/api/v1/access/checks` | `decideAccess` | `200`, `400` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`AccessDecision`, `AccessRequest`, `AuthLogoutRequest`, `AuthenticationResponse`, `ContractInfoDTO`, `CreateUserRequest`, `CreateUserResponse`, `CustomerInfoDTO`, `IdentityRequest`, `IntrospectionResponse`, `LoginRequest`, `ProductInfoDTO`, `RefreshRequest`, `RoleInfoDTO`, `RoleScopeInfoDTO`, `SessionContextDTO`, `SessionMetadataDTO`, `Subject`

## Contract explorer

<swagger-ui src="../contracts/domain-core-security-center/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
