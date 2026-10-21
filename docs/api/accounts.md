# Accounts

This page is generated from `exp-accounts-sdk/src/main/resources/openapi.yml`.
Core and domain contracts stay in each repository.
A journey call is identity, then access, then a decision only when the operation creates risk, then the domain port.
Read the path, then the example, then the panel rendered from the spec.

## POST /api/v1/journeys/account-opening/{journeyId}/income-proof

Submit Income Proof.

Submit income proof documents for the account opening. Advances the journey past the income proof gate.

This operation's spec does not document a separate refusal body.

```text
// request POST /api/v1/journeys/account-opening/{journeyId}/income-proof
// schema: SubmitIncomeProofCommand
{
  // documentType: string, optional
  // documentContent: string, optional
  // mimeType: string, optional
  // declaredAnnualIncome: number, optional
  // employerName: string, optional
  // occupation: string, optional
}

// response
// 200 OK
// no fields declared
```

## POST /api/v1/journeys/account-opening/{journeyId}/funding

Configure Funding Source.

Configure the funding source for the initial deposit. Advances the journey past the funding gate and triggers account creation.

This operation's spec does not document a separate refusal body.

```text
// request POST /api/v1/journeys/account-opening/{journeyId}/funding
// schema: ConfigureFundingSourceCommand
{
  // fundingMethod: string, optional
  // externalAccountNumber: string, optional
  // externalBankCode: string, optional
  // initialDepositAmount: number, optional
}

// response
// 200 OK
// no fields declared
```

## POST /api/v1/journeys/account-opening

Initiate Account Opening.

Start a new account opening journey - sends welcome notification, checks eligibility, and waits for income proof submission

This operation's spec does not document a separate refusal body.

```text
// request POST /api/v1/journeys/account-opening
// schema: InitiateAccountOpeningCommand
{
  // customerId: string (uuid); identifier, optional
  // productId: string (uuid); identifier, optional
  // productCatalogId: string (uuid); identifier, optional
  // accountType: string, optional
  // currency: string; currency code, optional
  // branchId: string (uuid); identifier, optional
  // email: string, optional
  // phone: string, optional
}

// response
// 200 OK
// schema: AccountOpeningJourneyStatusDTO
{
  // journeyId: string (uuid); identifier, optional
  // customerId: string (uuid); identifier, optional
  // accountId: string (uuid); identifier, optional
  // contractId: string (uuid); identifier, optional
  // currentPhase: string, optional
  // completedSteps: array, optional
  // nextStep: string, optional
  // accountStatus: string, optional
  // documentVerificationStatus: string, optional
}
```

## GET /api/v1/journeys/account-opening/{journeyId}

Get Journey Status.

Retrieve the current state of an account opening journey. Returns completed steps, current phase, and next expected action.

This operation's spec does not document a separate refusal body.

```text
// request GET /api/v1/journeys/account-opening/{journeyId}
// no request body declared

// response
// 200 OK
// schema: AccountOpeningJourneyStatusDTO
{
  // journeyId: string (uuid); identifier, optional
  // customerId: string (uuid); identifier, optional
  // accountId: string (uuid); identifier, optional
  // contractId: string (uuid); identifier, optional
  // currentPhase: string, optional
  // completedSteps: array, optional
  // nextStep: string, optional
  // accountStatus: string, optional
  // documentVerificationStatus: string, optional
}
```

## GET /api/v1/accounts/{accountId}

Get account summary.

Retrieves the account summary including balances and status

A refusal in this spec is `404` Account not found.

```text
// request GET /api/v1/accounts/{accountId}
// no request body declared

// response
// 200 Account found
// 404 Account not found
```

## DELETE /api/v1/accounts/{accountId}

Close an account.

Closes an account with the specified reason

A refusal in this spec is `404` Account not found.

```text
// request DELETE /api/v1/accounts/{accountId}
// no request body declared

// response
// 204 Account closed successfully
// 404 Account not found
```

## GET /api/v1/accounts/party/{partyId}

Get party accounts.

Retrieves all accounts for a specific party (customer)

This operation's spec does not document a separate refusal body.

```text
// request GET /api/v1/accounts/party/{partyId}
// no request body declared

// response
// 200 Accounts retrieved
```

The panel below is the same file. Open an operation there after you have read its example.

<swagger-ui src="specs/accounts/openapi.yml"></swagger-ui>
