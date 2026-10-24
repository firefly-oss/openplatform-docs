# Ledger account-transaction collections

The PSD2 directory reads the ledger's existing `GET /api/v1/transactions/by-account/{accountId}` route through the genuine ledger SDK. Its successful JSON response is an array: every visible transaction for that account, or an empty array when none is visible. The domain adapter applies inclusive booking-date boundaries and maps the ledger amount, currency, dates and status into the existing PSD2 transaction DTO.

The account-specific operation never falls back to a generic first ledger page. An absent account identifier produces no request. Unavailable owner responses remain errors. The owner retains account filtering and managed-record visibility controls; this collection contract adds no financial mutation, funds authority, settlement result, consent authority, or account ownership inference.

## SDK contract correction

The previous generated contract incorrectly described one transaction even though the owner returned a JSON array. The corrected native `TransactionsApi.getTransactionsByAccountId` returns `Flux<TransactionDTO>`; its `WithHttpInfo` variant returns a response containing `List<TransactionDTO>`. `WithResponseSpec` remains available. Applications compiled against the incorrect singular return must update and recompile. The current platform source audit found only this PSD2 adapter consuming account-list SDK data, under an obsolete method name; no speculative singular-result facade is provided. Other ledger SDK operations and native managed-funds classes remain unchanged.

## Qualification in an isolated sandbox

Build the corrected ledger producer and its genuine generated SDK before qualifying the PSD2 consumer. A temporary Maven aggregator containing both repositories can resolve the corrected SDK as a reactor dependency without installing it into a shared cache. Use JDK 25 and the repository's normal Maven lifecycle. The shared parent disables producer startup with `-DskipOpenApiGen`; producer generation requires its own available port 18080 window.

The maintained probe uses a new private PostgreSQL container and a copied ledger executable. It creates synthetic, unmanaged transaction read fixtures through the owner API, verifies a non-superuser/non-BYPASSRLS/nonowner application role and forced RLS, compiles the actual PSD2 adapter against the genuine SDK, and checks collection decoding and account/date isolation before and after an executable restart. These records are read fixtures; they do not establish authoritative customer balances or a complete PSD2 journey.

```sh
python3 scripts/qualify-ledger-account-collections.py \
  --ledger-jar /absolute/path/to/core-banking-ledger.jar \
  --ledger-sdk /absolute/path/to/core-banking-ledger-sdk.jar \
  --psdx-interfaces-jar /absolute/path/to/core-banking-psdx-interfaces.jar \
  --funds-fixture-script /absolute/path/to/core-banking-accounts/scripts/qualify-managed-funds.py \
  --output-dir /absolute/path/to/new-private-output \
  --java /absolute/path/to/jdk25/bin/java \
  --docker-host unix:///absolute/path/to/docker.sock
```

The fixture helper supplies the existing isolated bootstrap and process lifecycle. Every input is copied and hashed before use. The script requires a new output directory, preserves logs and source/artifact identities, and stops only its own application and container. It does not install SDKs, modify a shared database, enable disabled provider tests, publish a release, or qualify production identity and consent integration. At least 12 GiB of free space is required before starting.
