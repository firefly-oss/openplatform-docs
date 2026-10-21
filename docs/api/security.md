# Security

This page is generated from `exp-security-sdk/src/main/resources/openapi.yml`.
Core and domain contracts stay in each repository.
A journey call is identity, then access, then a decision only when the operation creates risk, then the domain port.
Read the path, then the example, then the panel rendered from the spec.

## POST /api/v1/experience/security/sca/verify

Verify SCA.

Verifies the party's response to an issued SCA challenge.

This operation's spec does not document a separate refusal body.

```text
// request POST /api/v1/experience/security/sca/verify
// schema: VerifyScaCommand
{
  // operationId: string (uuid); identifier, optional
  // challengeId: string (uuid); identifier, optional
  // verificationCode: string, optional
}

// response
// 200 OK
// schema: ScaVerificationResultDTO
{
  // operationId: string (uuid); identifier, optional
  // status: string, optional
  // verifiedAt: string (date-time), optional
}
```

## POST /api/v1/experience/security/sca/challenge

Request SCA Challenge.

Issues an SCA challenge for the requested operation type and preferred mechanism.

This operation's spec does not document a separate refusal body.

```text
// request POST /api/v1/experience/security/sca/challenge
// schema: RequestScaChallengeCommand
{
  // operationType: string, optional
  // challengeType: string, optional
}

// response
// 200 OK
// schema: ScaChallengeDTO
{
  // challengeId: string (uuid); identifier, optional
  // operationId: string (uuid); identifier, optional
  // challengeType: string, optional
  // expiresAt: string (date-time), optional
}
```

## POST /api/v1/experience/security/auth/refresh

Refresh Token.

Exchanges a valid refresh token for a new access token.

This operation's spec does not document a separate refusal body.

```text
// request POST /api/v1/experience/security/auth/refresh
// schema: RefreshTokenCommand
{
  // refreshToken: string, optional
}

// response
// 200 OK
// schema: AuthTokenDTO
{
  // accessToken: string, optional
  // refreshToken: string, optional
  // expiresIn: integer (int64), optional
  // tokenType: string, optional
}
```

## POST /api/v1/experience/security/auth/password/reset

Reset Password.

Triggers a password-reset email for the account associated with the given email address.

This operation's spec does not document a separate refusal body.

```text
// request POST /api/v1/experience/security/auth/password/reset
// schema: PasswordResetCommand
{
  // email: string, optional
}

// response
// 200 OK
```

## POST /api/v1/experience/security/auth/password/change

Change Password.

Changes the authenticated party's password after verifying the current one.

This operation's spec does not document a separate refusal body.

```text
// request POST /api/v1/experience/security/auth/password/change
// schema: PasswordChangeCommand
{
  // currentPassword: string, optional
  // newPassword: string, optional
}

// response
// 200 OK
```

## POST /api/v1/experience/security/auth/logout

Logout.

Invalidates the current party session and IDP tokens.

This operation's spec does not document a separate refusal body.

```text
// request POST /api/v1/experience/security/auth/logout
// no request body declared

// response
// 200 OK
```

## POST /api/v1/experience/security/auth/login/biometric

Biometric Login.

Authenticates a party using a device-generated biometric token.

This operation's spec does not document a separate refusal body.

```text
// request POST /api/v1/experience/security/auth/login/biometric
// schema: BiometricLoginCommand
{
  // biometricToken: string, optional
  // deviceInfo: string, optional
}

// response
// 200 OK
// schema: AuthTokenDTO
{
  // accessToken: string, optional
  // refreshToken: string, optional
  // expiresIn: integer (int64), optional
  // tokenType: string, optional
}
```

## POST /api/v1/experience/security/auth/login

Login.

Authenticates a party using username/password credentials and returns access and refresh tokens.

This operation's spec does not document a separate refusal body.

```text
// request POST /api/v1/experience/security/auth/login
// schema: LoginCommand
{
  // username: string, optional
  // password: string, optional
  // deviceInfo: string, optional
}

// response
// 200 OK
// schema: AuthTokenDTO
{
  // accessToken: string, optional
  // refreshToken: string, optional
  // expiresIn: integer (int64), optional
  // tokenType: string, optional
}
```

## GET /api/v1/experience/security/sessions

Get Active Sessions.

Returns the list of active sessions for the authenticated party.

This operation's spec does not document a separate refusal body.

```text
// request GET /api/v1/experience/security/sessions
// no request body declared

// response
// 200 OK
// no fields declared
```

## GET /api/v1/experience/security/activity-log

Get Activity Log.

Returns the security activity log for the authenticated party in reverse chronological order.

This operation's spec does not document a separate refusal body.

```text
// request GET /api/v1/experience/security/activity-log
// no request body declared

// response
// 200 OK
// no fields declared
```

## DELETE /api/v1/experience/security/sessions/{sessionId}

Close Session.

Invalidates a specific session by its identifier.

This operation's spec does not document a separate refusal body.

```text
// request DELETE /api/v1/experience/security/sessions/{sessionId}
// no request body declared

// response
// 200 OK
```

The panel below is the same file. Open an operation there after you have read its example.

<swagger-ui src="specs/security/openapi.yml"></swagger-ui>
