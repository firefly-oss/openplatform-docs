# Configure payment adapters

Payment configuration has two selectors. `firefly.payments.mode` chooses transaction and SCA adapters. `firefly.payments.configuration` chooses routing configuration and reference data. Set both explicitly when assembling an environment.

## Start a local simulation

```yaml
firefly:
  payments:
    mode: sandbox
    configuration: sandbox
```

These settings select in-process ledger, account-position, payment-record, rail and PSP adapters, a synthetic routing catalog, and no-socket SCA. The sandbox generates a per-request challenge and returns its value so a developer can complete the local payment demonstration. It needs no SCA server; the literal response `sandbox` is rejected.

Package the matching `domain-payments` reactor using its configured JDK and dependencies, then start its executable on a private loopback address:

```sh
java -jar domain-payments-web/target/domain-payments-web-26.10.6.jar \
  --server.address=127.0.0.1 --server.port=8092 \
  --firefly.payments.mode=sandbox \
  --firefly.payments.configuration=sandbox
```

Use the typed request in the [payment domain contract](../api/services/domain-payments.md). Retain its idempotency key and the returned payment ID. Submit TRY, confirm with the returned challenge, and inspect status. Alternatively cancel the pending payment. The [payment journey](../journeys/payments.md) explains the financial participants and the difference between a provisional effect and posted money.

All these selected adapters keep state in the application process. A restart loses sessions, challenges and simulated effects. A synthetic confirmation or synchronization flag does not establish a durable reservation, bank balance, notification or external settlement.

## Select the SDK and provider boundaries

| Boundary | Transaction mode `sandbox` | Transaction mode `live` |
| --- | --- | --- |
| Ledger | In-process ledger adapter | Core ledger SDK |
| Account position | In-process position adapter | Core banking accounts SDK |
| Payment record | In-process record adapter | Core banking payments SDK |
| Rail | Synthetic rail adapter | Rail library port supplied by the deployment |
| PSP | Synthetic PSP adapter | Payment, payout and refund library ports supplied by the deployment |
| SCA storage and validation | In-process challenge client | Core SCA SDK |
| Challenge delivery | Synthetic inbox | Explicit `ChallengeDeliveryPort` implementation |

With `firefly.payments.configuration=live`, configuration and masters use their core SDKs. This selection is independent of transaction mode. Changing routing configuration alone does not activate financial or provider adapters.

The supplied endpoint variables are:

| Environment variable | Consumed property | Destination |
| --- | --- | --- |
| `LEDGER_URL` | `firefly.payments.ledger-base-url` | Core ledger |
| `ACCOUNTS_CORE_URL` | `firefly.payments.accounts-base-url` | Core banking accounts |
| `PAYMENTS_CORE_URL` | `firefly.payments.payments-core-base-url` | Core banking payments |
| `CONFIG_URL` | `firefly.payments.config-base-url` | Core configuration |
| `MASTERS_URL` | `firefly.payments.masters-base-url` | Core reference masters |
| `SCA_URL` | `firefly.payments.sca-base-url` | Core SCA |

The account adapter calls `AccountBalancesApi` and `AccountSpacesApi`. Configure the core accounts URL, even when an account domain is available. Replace the former `accounts-domain-base-url`/`ACCOUNTS_DOMAIN_URL` setting: it did not populate the property used by this adapter. Development URL defaults are not deployment discovery or authentication configuration.

## Replace challenge delivery

Register a deployment integration implementing the existing `ChallengeDeliveryPort`. Live SCA requires this bean and rejects the built-in sandbox inbox, including standard Spring AOP proxies around it. No SMS, email or push provider is selected automatically. A custom adapter must establish its own authenticated provider contract and authorized customer/channel destination.

Preserve the original challenge identity. The port's `challengeValue` reaches the application response, so a real delivery implementation must not return its secret OTP in that field. Load credentials from deployment secrets and retain provider identifiers for uncertain delivery recovery. A missing integration prevents startup; a failed or uncertain send must never fall back to the synthetic inbox or become payment approval.

Provider selection requires more than endpoint configuration. The current payment chain still needs complete trusted actor/tenant/resource propagation, durable coordinator recovery, safe available-funds enforcement, authenticated SCA delivery and external finality/reconciliation. Core balance record writes alone do not establish those controls. Follow the [replacement contract](index.md) and [recovery guidance](../operations/index.md) when qualifying each adapter.

## Source and operational guide

The service [adapter configuration guide](../reference/service-guides/payment-adapters.md) details the local example, provider replacement, packaged runtime command and recovery boundary. Its [source snapshot](../reference/service-guides/index.md) identifies the exact copied guide independently of publication. The producer's [wiring](https://github.com/fireflysoftwaresolutions/domain-payments/blob/main/domain-payments-web/src/main/java/io/fireflysoftware/domain/payments/web/PaymentsWiring.java) and [application configuration](https://github.com/fireflysoftwaresolutions/domain-payments/blob/main/domain-payments-web/src/main/resources/application.yaml) define the selectors; the remote main branch can precede these local corrections. Match implementation source and installed artifact version before adopting a deployment recipe.
