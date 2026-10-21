# Replace an adapter

<p class="ff-steward">Stewarded by the Firefly Software Foundation. <a href="mailto:dev@fireflysoftware.io">dev@fireflysoftware.io</a></p>

An installer does not rewrite a journey to point at a new bank system. The journey calls a port. The port is a promise: hold this money, send this credit, check this person, evaluate this rules file. Which system keeps the promise is a property. One answer per port per deployment. The sandbox answer ships in the repository and does not open a network connection. The live answer is selected by configuration. Secrets stay out of the repository.

Ada's calls stay the same either way. She still tries a payment, confirms it, or asks for a quote. What changes is who posts the ledger, who sends the rail message, and who says she is signed in.

<div class="ff-journey" markdown="0">
<img src="../assets/journeys/ports.svg" alt="Sequence: the installer leaves payments mode unset and the sandbox answers. Setting the mode to live posts the same call on core-banking-ledger and sends transfers on the rail. The journey does not change.">
</div>

## Payments

`firefly.payments.mode` defaults to `sandbox`. The ledger hold and the later posting stay in memory. The rail and the card provider accept the instruction locally and do not send it. The numeric challenge is created by a stand-in for the SCA core.

Set `firefly.payments.mode` to `live` and the same try and confirm post through `core-banking-ledger`. A credit transfer goes out through `library-rails`. International is SWIFT. A domestic transfer is SEPA when the catalog contains SEPA credit transfer. A card goes through `library-psps`. The challenge is created by `core-common-sca-mgmt`. Delivery of that code, in the wiring shipped here, still returns the code on the try response and does not send SMS, push, or email. An installer replaces that delivery.

`firefly.payments.configuration` defaults to `sandbox`. Set it to `live` when the routes, limits, currencies, and clearing accounts should be read from configuration and reference data instead of the sandbox lists.

## Identity, access, and the decision

`firefly.security-center.identity.adapter` defaults to `sandbox`. `sample-journey` is Ada. Set `keycloak`, `cognito`, or `internal-db` to use the matching Jafly provider. The journey does not construct that client.

`firefly.security-center.access.adapter` defaults to `sandbox` and reads `sandbox-access-policy.json`. Set `session-grants` when the check should use the role scopes on the party session. Replace the policy file to change who the sandbox allows. Do not hard-code allow and deny in a controller.

`firefly.decision.credit-report` defaults to `sandbox` and returns score 640, not high risk, for every party. Any other value selects the report adapter the installer registers. The sandbox does not call a bureau.

`firefly.decision.ruleset` defaults to `openplatform-journey`. `firefly.decision.rulesets-directory` points at a directory of `{name}.yaml` files. Replacing the file changes approve, refer, and decline. It does not replace the engine.

## Catalog and documents

`firefly.reference-data.catalog.adapter` left unset uses the sandbox catalog. Deposits, payments, lending, and cards are regulated. Insurance is not. The document types are contract, amendment, renewal, letter, and welcome. Set the property to `core` to read reference data instead.

`firefly.documents.storage` defaults to the sandbox store. Set `core` to write the HTML, including the inlined kit stylesheet, into the document core. `firefly.documents.render` defaults to FreeMarker.

## What can go wrong

An unset property is the sandbox, not a failure. A live property with no base URL, or a provider process that is not running, fails the call that needs that system. The journey does not switch itself back to the sandbox.

A rules file that is missing, or a catalog row that is missing, fails the decision or the document before the write. An international credit configured onto a card route is rejected. The rail is the path for that transfer.

## Reference

| Port | Sandbox until the property changes | Property |
| --- | --- | --- |
| Ledger, rail, card provider, challenge creation | In-process stand-ins | `firefly.payments.mode=live` |
| Challenge delivery | Returns the code, sends no message | Replace the delivery adapter |
| Routes and masters | Sandbox lists | `firefly.payments.configuration=live` |
| Identity | `sample-journey` is Ada | `firefly.security-center.identity.adapter` |
| Access | Policy file | `firefly.security-center.access.adapter` |
| Credit report | Score 640 | `firefly.decision.credit-report` |
| Rules | `openplatform-journey.yaml` | `firefly.decision.ruleset` and `firefly.decision.rulesets-directory` |
| Catalog | Sandbox families and document types | `firefly.reference-data.catalog.adapter=core` |
| Document store | In-process HTML | `firefly.documents.storage=core` |
