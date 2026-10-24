# Accounts: opening through closure

An account is a durable relationship between a customer, agreed terms, an institution, and permitted financial activity. Opening is the start of that relationship; servicing determines whether it remains usable and explainable over time.

## Ownership and prerequisites

| Responsibility | Current boundary | Why it matters |
| --- | --- | --- |
| Customer interaction | [Account experience](../api/services/exp-accounts.md) | Presents the customer action and result |
| Account commands and composition | [Account domain](../api/services/domain-banking-accounts.md) | Coordinates spaces, servicing and downstream owners |
| Account records and spaces | [Account core](../api/services/core-banking-accounts.md) | Returns durable account/space IDs and stored servicing records |
| Agreed terms | [Contract core](../api/services/core-common-contract-mgmt.md) | Supplies the contract referenced by the account |
| Branch/institution identity | [Organization core](../api/services/core-common-org-mgmt.md) | Supplies an owned branch rather than an arbitrary UUID |
| Financial effects | [Ledger core](../api/services/core-banking-ledger.md) | Owns postings and their histories |

Before opening, resolve the party, applicable product, required evidence and approvals, contract, branch, currency, and intended ownership. This is the business prerequisite set. The account create DTO contains a narrower persistence contract and does not itself demonstrate that every prerequisite has been approved.

## Create the record and preserve its identity

The current account API accepts `contractId`, `accountNumber`, `accountType`, `openDate`, `accountStatus`, and `branchId`, with currency and other declared fields. For a synthetic checking record, `accountType` can be `CHECKING` and the initial status `DRAFT`. The declared account statuses are `DRAFT`, `OPEN`, `CLOSED`, `SUSPENDED`, and `DORMANT`; these enum values do not, by themselves, specify every legal transition.

`POST /api/v1/accounts` returns 201. The service also creates a `MAIN` account space with zero initial balance. Retain the returned account and space identities and reread the account. Do not use a caller-generated account ID to pretend that an account exists, or treat the creation of its zero-valued space as evidence of initial funding.

An account number has routing and uniqueness implications in a real institution. The example fixture's synthetic number is only fixture data; allocation, validation, and any external registration must follow the institution's selected scheme and authority.

## Spaces and initial funding

Spaces partition the account's intended uses while preserving the parent account relationship. The domain's `CreateAccountSpaceCommand` carries fields such as `spaceType`, `name`, `targetAmount`, `targetDate`, `currency`, `initialAmount`, `sourceSpaceId`, and `autoTransferRules`. Its HTTP binding test deliberately supplies a conflicting body account ID and verifies that the path account wins. This establishes the binding rule, not a completed transfer.

For a synthetic savings space called Trip, the source test uses target EUR 1,500.25, initial amount EUR 125.50, and a monthly auto-transfer amount EUR 25.75. The source space must come from the same owning environment. A real initial funding operation must authorize the source, establish any reservation, post the movement, and reconcile external funding where applicable. Merely setting `initialAmount` in a command is not proof those effects occurred.

**Sequence panels.** Follow the numbered messages in order. Return messages and conditional branches are labeled explicitly.

<style>
@media (max-width: 1100px) {
  picture.manual-diagram-phase { display: block; max-width: 432px; margin-inline: auto; }
}
</style>

<picture class="manual-diagram-phase">
  <source media="(max-width: 1100px) and (prefers-color-scheme: dark)" srcset="../../assets/diagrams/journeys-accounts-phase-1-narrow-dark.svg">
  <source media="(max-width: 1100px)" srcset="../../assets/diagrams/journeys-accounts-phase-1-narrow-light.svg">
  <source media="(prefers-color-scheme: dark)" srcset="../../assets/diagrams/journeys-accounts-phase-1-dark.svg">
  <img src="../../assets/diagrams/journeys-accounts-phase-1-light.svg" alt="journeys-accounts: Phase 1, steps 1, 2, 3" width="100%" style="padding:0">
</picture>

<picture class="manual-diagram-phase">
  <source media="(max-width: 1100px) and (prefers-color-scheme: dark)" srcset="../../assets/diagrams/journeys-accounts-phase-2-narrow-dark.svg">
  <source media="(max-width: 1100px)" srcset="../../assets/diagrams/journeys-accounts-phase-2-narrow-light.svg">
  <source media="(prefers-color-scheme: dark)" srcset="../../assets/diagrams/journeys-accounts-phase-2-dark.svg">
  <img src="../../assets/diagrams/journeys-accounts-phase-2-light.svg" alt="journeys-accounts: Phase 2, steps 4, 5, 6" width="100%" style="padding:0">
</picture>

[Diagram source and stable step identities](../assets/diagrams/sequences.json) preserve the same messages in both layouts.

*Business dependency sequence. The binding fixture does not qualify all financial steps shown.*

## Worked example: a stored customer position

The account SDK fixture creates and reads a customer-position row through the actual application and disposable PostgreSQL. It is a useful first runtime exercise because the result can be independently checked from the returned data.

| Input | Synthetic value | Meaning in the fixture |
| --- | --- | --- |
| `partyId` | Fixture-generated synthetic party reference | Position subject |
| `currency` | `USD` | Position currency |
| `balances` | `100` | Stored balance input |
| `creditLimit` | `50` | Credit limit input |
| `creditUsed` | `20` | Used credit input |
| `collateralValue` | `75` | Retained collateral input |
| `taxWithheld` | `5` | Tax input |
| Expected `creditRemaining` | `30` | Limit minus used credit |
| Expected `availableFunds` | `125` | Implemented summary calculation |

The fixture uses `CustomerPositionApi`, obtains the server-returned position UUID, and reads it back. For an HTTP consumer the corresponding operations are `POST /api/v1/customer-positions` and `GET /api/v1/customer-positions/{positionId}`. Use the exact producer DTO and generated SDK model; the copied API page lists the current schema.

**Run the repository-owned fixture:** use JDK 25, Maven with access to the matching internal artifacts, and a Docker-compatible runtime. From `core-banking-accounts`, run:

```sh
mvn -B -pl core-banking-accounts-sdk -am test -DskipOpenApiGen   -Dtest=StoredAccountRowsTest -Dsurefire.failIfNoSpecifiedTests=false
```

Use the corrected source fixture. It starts PostgreSQL 17 on a random loopback port and the application on a random loopback HTTP port. It binds both Spring connection settings and the application's custom `DB_*` configuration; it asserts JDBC and custom R2DBC use the same disposable database and role. Do not substitute a shared database or a host-port fixture.

The position fixture exercises storage, SDK transport, and the asserted calculation in its disposable environment. Its generated party identity is synthetic; use an owned party record for an application integration. The calculation does not enforce concurrent available-funds exclusion.

## Servicing and restrictions

Servicing includes mandates, limits, statements, interest terms, sweeps, ownership changes, and restrictions. A mandate links an account, party, role, and active state. The actual SDK fixture saves an `OPERATOR` servicing mandate and reads it back. An active stored mandate is still subject to the application's authentication and authorization rules at use time.

Balance records are also explicit resources. `BalanceDTO` carries `accountId`, `balanceType`, `balanceAmount`, and `asOfDatetime`. The account path overrides the body parent during creation. Reading a balance under a different account returns 404. This is a useful ownership-scoping behavior, but a stored `CURRENT` balance snapshot is not a ledger posting or a concurrency-safe spending decision.

A restriction needs a scope, reason, authority, effective period, and release condition. The complete process must distinguish blocking debits, blocking all movement, legal holds, product limits, and operational suspension. Recheck the applicable restriction when the instruction is accepted and again at execution where policy requires it. An account status string should not replace that detailed decision.

## Closure is a controlled sequence

Before closure, inspect posted and provisional money, pending external settlements, accrued fees and interest, linked cards and payment instructions, statements, mandates, residual amounts, and retention duties. An empty displayed balance can coexist with an unsettled authorization or a future-dated instruction.

The domain contains closure logic, including residual-balance/force-related behavior; read it before using the command. A force option is not institutional authorization to bypass unresolved obligations. Define who can approve any exception and how its financial and evidence consequences are retained.

## Recovery and verification

| Symptom | Inspect first | Safe next step |
| --- | --- | --- |
| Create response lost | Contract/account lookup and returned/logged correlation | Recover the created ID before another create |
| Space exists but funding is unclear | Space record, movement identity, ledger and external outcome | Resolve the movement; do not recreate the space to retry money |
| Balance read is 404 under an account | Parent account ID and balance owner | Correct the resource scope; do not broaden access |
| Position differs from a statement | Calculation inputs, timestamps, ledger population | Rebuild or correct the view through its owner |
| Closure blocked | Residual and provisional obligations | Resolve each owner; retain approved exception evidence |

Jafly 26.10.22 corrects transport-cache scoping, but each service must adopt the rebuilt framework artifact. Reusing an optional transport header is not proof of safe business deduplication across process lifetimes. Account handlers do not acquire durable business-action semantics merely because the header is accepted.

## Implementation sources

Source anchors: [AccountDTO.java](https://github.com/fireflysoftwaresolutions/core-banking-accounts/blob/main/core-banking-accounts-interfaces/src/main/java/io/fireflysoftware/core/banking/accounts/interfaces/dtos/core/v1/AccountDTO.java) · [AccountStatusEnum.java](https://github.com/fireflysoftwaresolutions/core-banking-accounts/blob/main/core-banking-accounts-interfaces/src/main/java/io/fireflysoftware/core/banking/accounts/interfaces/enums/core/v1/AccountStatusEnum.java) · [StoredAccountRowsTest.java](https://github.com/fireflysoftwaresolutions/core-banking-accounts/blob/main/core-banking-accounts-sdk/src/test/java/io/fireflysoftware/core/banking/accounts/sdk/StoredAccountRowsTest.java) · [AccountCommandHttpTest.java](https://github.com/fireflysoftwaresolutions/domain-banking-accounts/blob/main/domain-banking-accounts-web/src/test/java/io/fireflysoftware/domain/banking/accounts/web/controllers/AccountCommandHttpTest.java).
