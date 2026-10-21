# Cards

This page is generated from `exp-cards-sdk/src/main/resources/openapi.yml`.
Core and domain contracts stay in each repository.
A journey call is identity, then access, then a decision only when the operation creates risk, then the domain port.
Read the path, then the example, then the panel rendered from the spec.

## POST /api/v1/journeys/card-replacement/{journeyId}/identity

Verify Identity.

Submit identity verification for card replacement. Advances the journey past the identity verification gate and triggers replacement card creation.

This operation's spec does not document a separate refusal body.

```text
// request POST /api/v1/journeys/card-replacement/{journeyId}/identity
// schema: VerifyIdentityCommand
{
  // verificationCode: string, optional
  // documentType: string, optional
  // documentNumber: string, optional
}

// response
// 200 OK
// no fields declared
```

## POST /api/v1/journeys/card-replacement

Report Card Lost/Stolen.

Start a card replacement journey - blocks the old card, sends security alert, and waits for identity verification

This operation's spec does not document a separate refusal body.

```text
// request POST /api/v1/journeys/card-replacement
// schema: ReportCardLostCommand
{
  // cardId: string (uuid); identifier, optional
  // customerId: string (uuid); identifier, optional
  // reason: string, optional
  // email: string, optional
  // phone: string, optional
  // requestPhysicalReplacement: boolean, optional
}

// response
// 200 OK
// schema: CardReplacementJourneyStatusDTO
{
  // journeyId: string (uuid); identifier, optional
  // customerId: string (uuid); identifier, optional
  // oldCardId: string (uuid); identifier, optional
  // newCardId: string (uuid); identifier, optional
  // currentPhase: string, optional
  // completedSteps: array, optional
  // nextStep: string, optional
  // oldCardStatus: string, optional
  // newCardStatus: string, optional
  // isPhysicalReplacement: boolean, optional
}
```

## POST /api/v1/journeys/card-issuance/{journeyId}/pin

Setup PIN.

Setup the PIN for the card. Advances the journey past the PIN setup gate and triggers card issuance.

This operation's spec does not document a separate refusal body.

```text
// request POST /api/v1/journeys/card-issuance/{journeyId}/pin
// schema: SetupPinCommand
{
  // encryptedPin: string, optional
  // pinConfirmation: string, optional
}

// response
// 200 OK
// no fields declared
```

## POST /api/v1/journeys/card-issuance/{journeyId}/address

Confirm Delivery Address.

Submit the delivery address for the card. Advances the journey past the address confirmation gate.

This operation's spec does not document a separate refusal body.

```text
// request POST /api/v1/journeys/card-issuance/{journeyId}/address
// schema: ConfirmAddressCommand
{
  // addressLine1: string, optional
  // addressLine2: string, optional
  // city: string, optional
  // postalCode: string, optional
  // country: string, optional
}

// response
// 200 OK
// no fields declared
```

## POST /api/v1/journeys/card-issuance

Initiate Card Issuance.

Start a new card issuance journey - verifies eligibility, sends welcome notification, and waits for address confirmation

This operation's spec does not document a separate refusal body.

```text
// request POST /api/v1/journeys/card-issuance
// schema: InitiateCardIssuanceCommand
{
  // customerId: string (uuid); identifier, optional
  // accountId: string (uuid); identifier, optional
  // cardProgramId: string (uuid); identifier, optional
  // cardholderName: string, optional
  // email: string, optional
  // phone: string, optional
  // virtual: boolean, optional
}

// response
// 200 OK
// schema: CardIssuanceJourneyStatusDTO
{
  // journeyId: string (uuid); identifier, optional
  // customerId: string (uuid); identifier, optional
  // cardId: string (uuid); identifier, optional
  // currentPhase: string, optional
  // completedSteps: array, optional
  // nextStep: string, optional
  // cardStatus: string, optional
  // isVirtual: boolean, optional
}
```

## POST /api/v1/cards

Issue a new card.

Issues a new card for a customer through the card issuance journey

A refusal in this spec is `400` Invalid request.

```text
// request POST /api/v1/cards
// schema: IssueCardRequest
{
  // customerId: string (uuid); identifier, required
  // accountId: string (uuid); identifier, required
  // cardProgramId: string (uuid); identifier, required
  // cardholderName: string, optional
  // virtual: boolean, optional
}

// response
// 201 Card issued successfully
// 400 Invalid request
```

## POST /api/v1/cards/{cardId}/block

Block a card.

Blocks a card temporarily

A refusal in this spec is `404` Card not found.

```text
// request POST /api/v1/cards/{cardId}/block
// no request body declared

// response
// 204 Card blocked successfully
// 404 Card not found
```

## POST /api/v1/cards/{cardId}/activate

Activate a card.

Activates a card that is in pending activation status

A refusal in this spec is `404` Card not found.

```text
// request POST /api/v1/cards/{cardId}/activate
// no request body declared

// response
// 204 Card activated successfully
// 404 Card not found
```

## GET /api/v1/journeys/card-replacement/{journeyId}

Get Journey Status.

Retrieve the current state of a card replacement journey. Returns completed steps, current phase, and card statuses.

This operation's spec does not document a separate refusal body.

```text
// request GET /api/v1/journeys/card-replacement/{journeyId}
// no request body declared

// response
// 200 OK
// schema: CardReplacementJourneyStatusDTO
{
  // journeyId: string (uuid); identifier, optional
  // customerId: string (uuid); identifier, optional
  // oldCardId: string (uuid); identifier, optional
  // newCardId: string (uuid); identifier, optional
  // currentPhase: string, optional
  // completedSteps: array, optional
  // nextStep: string, optional
  // oldCardStatus: string, optional
  // newCardStatus: string, optional
  // isPhysicalReplacement: boolean, optional
}
```

## GET /api/v1/journeys/card-issuance/{journeyId}

Get Journey Status.

Retrieve the current state of a card issuance journey. Returns completed steps, current phase, and next expected action.

This operation's spec does not document a separate refusal body.

```text
// request GET /api/v1/journeys/card-issuance/{journeyId}
// no request body declared

// response
// 200 OK
// schema: CardIssuanceJourneyStatusDTO
{
  // journeyId: string (uuid); identifier, optional
  // customerId: string (uuid); identifier, optional
  // cardId: string (uuid); identifier, optional
  // currentPhase: string, optional
  // completedSteps: array, optional
  // nextStep: string, optional
  // cardStatus: string, optional
  // isVirtual: boolean, optional
}
```

## GET /api/v1/cards/{cardId}

Get card summary.

Retrieves the card summary including balances and status

A refusal in this spec is `404` Card not found.

```text
// request GET /api/v1/cards/{cardId}
// no request body declared

// response
// 200 Card found
// 404 Card not found
```

## DELETE /api/v1/cards/{cardId}

Cancel a card.

Cancels a card permanently

A refusal in this spec is `404` Card not found.

```text
// request DELETE /api/v1/cards/{cardId}
// no request body declared

// response
// 204 Card cancelled successfully
// 404 Card not found
```

## GET /api/v1/cards/customer/{customerId}

Get customer cards.

Retrieves all cards for a specific customer

This operation's spec does not document a separate refusal body.

```text
// request GET /api/v1/cards/customer/{customerId}
// no request body declared

// response
// 200 Cards retrieved
```

The panel below is the same file. Open an operation there after you have read its example.

<swagger-ui src="specs/cards/openapi.yml"></swagger-ui>
