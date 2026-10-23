# exp-security

[Repository adoption guide](https://github.com/fireflysoftwaresolutions/exp-security) · [Complete contract](../contracts/exp-security/openapi.yml)

**Provenance:** base revision `8278c552f7b3cc374c041701ab75e631e1a6c4e9`; current copied input SHA256 `1236ef07b73434f7e7ab2601ae3f1a33e5aed00d3a3dfdcc6ee988d6bfcbc67c`. [Baseline source](https://github.com/fireflysoftwaresolutions/exp-security/blob/8278c552f7b3cc374c041701ab75e631e1a6c4e9/exp-security-sdk/src/main/resources/openapi.yml). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service.

## Before calling

Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.

## Declared operations

| Method | Path | Operation | Responses |
| --- | --- | --- | --- |
| `POST` | `/api/v1/experience/security/sca/verify` | `verifySca` | `200` |
| `POST` | `/api/v1/experience/security/sca/challenge` | `requestScaChallenge` | `200` |
| `POST` | `/api/v1/experience/security/auth/refresh` | `refreshToken` | `200` |
| `POST` | `/api/v1/experience/security/auth/password/reset` | `resetPassword` | `200` |
| `POST` | `/api/v1/experience/security/auth/logout` | `logout` | `200` |
| `POST` | `/api/v1/experience/security/auth/login` | `login` | `200` |
| `GET` | `/api/v1/experience/security/sessions` | `getActiveSessions` | `200` |
| `DELETE` | `/api/v1/experience/security/sessions/{sessionId}` | `closeSession` | `200` |

## Schema directory

The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.

`AuthTokenDTO`, `LoginCommand`, `PasswordResetCommand`, `RefreshTokenCommand`, `RequestScaChallengeCommand`, `ScaChallengeDTO`, `ScaVerificationResultDTO`, `SessionDTO`, `VerifyScaCommand`

## Contract explorer

<swagger-ui src="../contracts/exp-security/openapi.yml"></swagger-ui>

## Retries and recovery

Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery.
