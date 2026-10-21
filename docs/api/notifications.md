# Notifications

This page is generated from `exp-notifications-sdk/src/main/resources/openapi.yml`.
Core and domain contracts stay in each repository.
A journey call is identity, then access, then a decision only when the operation creates risk, then the domain port.
Read the path, then the example, then the panel rendered from the spec.

## GET /api/v1/experience/notifications/preferences

Get notification preferences.

This operation's spec does not document a separate refusal body.

```text
// request GET /api/v1/experience/notifications/preferences
// no request body declared

// response
// 200 OK
```

## PUT /api/v1/experience/notifications/preferences

Update notification preferences.

This operation's spec does not document a separate refusal body.

```text
// request PUT /api/v1/experience/notifications/preferences
// schema: UpdatePreferencesCommand
{
  // email: boolean, optional
  // sms: boolean, optional
  // push: boolean, optional
  // inApp: boolean, optional
  // marketingConsent: boolean, optional
}

// response
// 200 OK
```

## POST /api/v1/experience/notifications/read-all

Mark all notifications as read.

This operation's spec does not document a separate refusal body.

```text
// request POST /api/v1/experience/notifications/read-all
// no request body declared

// response
// 204 No Content
```

## PATCH /api/v1/experience/notifications/{id}/read

Mark notification as read.

This operation's spec does not document a separate refusal body.

```text
// request PATCH /api/v1/experience/notifications/{id}/read
// no request body declared

// response
// 204 No Content
```

## GET /api/v1/experience/notifications

List notifications.

Returns the notification list for the authenticated party

This operation's spec does not document a separate refusal body.

```text
// request GET /api/v1/experience/notifications
// no request body declared

// response
// 200 OK
```

## GET /api/v1/experience/notifications/{id}

Get notification detail.

Returns full detail for a single notification

This operation's spec does not document a separate refusal body.

```text
// request GET /api/v1/experience/notifications/{id}
// no request body declared

// response
// 200 OK
```

## DELETE /api/v1/experience/notifications/{id}

Delete a notification.

This operation's spec does not document a separate refusal body.

```text
// request DELETE /api/v1/experience/notifications/{id}
// no request body declared

// response
// 204 No Content
```

## GET /api/v1/experience/notifications/unread-count

Get unread notification count.

This operation's spec does not document a separate refusal body.

```text
// request GET /api/v1/experience/notifications/unread-count
// no request body declared

// response
// 200 OK
```

The panel below is the same file. Open an operation there after you have read its example.

<swagger-ui src="specs/notifications/openapi.yml"></swagger-ui>
