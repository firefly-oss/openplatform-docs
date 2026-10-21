# Security and access

<p class="ff-steward">Stewarded by the Firefly Software Foundation. <a href="mailto:dev@fireflysoftware.io">dev@fireflysoftware.io</a></p>


Sign-in is `exp-security`, in front of `domain-core-security-center` and `domain-common-sca`. The authenticator application routes to the security center and does not own sessions.

On main, the security center depends on the Jafly identity modules, including `org.fireflyframework:fireflyframework-security-idp-keycloak` (BOM 26.10.20). The journey does not call Keycloak. The published properties `firefly.idp.provider` and `firefly.security-center.idp.provider` are `cognito`.

`AccessPort` and a sandbox access policy are not in this published tree. Do not call a sample access decision from these pages.

How to swap the adapter is on [Replace an adapter](../adapters/index.md).



## Experience

<div class="ff-entry ff-entry--experience" markdown="1">
<p class="ff-kicker">Experience</p>

### exp-security

Owns the sign-in journey: password, biometric sign-in, session, strong customer authentication, and password change. It calls `domain-core-security-center` and `domain-common-sca`.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/exp-security">github.com/fireflysoftwaresolutions/exp-security</a></p>

</div>


## Domain

<div class="ff-entry ff-entry--domain" markdown="1">
<p class="ff-kicker">Domain</p>

### domain-common-sca

Owns the strong-customer-authentication saga: start a challenge, verify the response, and write the audit event, through `core-common-sca-mgmt`.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/domain-common-sca">github.com/fireflysoftwaresolutions/domain-common-sca</a></p>

</div>

<div class="ff-entry ff-entry--domain" markdown="1">
<p class="ff-kicker">Domain</p>

### domain-core-security-center

Owns authentication sessions. On main it delegates identity to a Jafly `IdpAdapter`. Keycloak is the `fireflyframework-security-idp-keycloak` dependency, not a client the journey opens. A sandbox access policy is not in the published tree.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/domain-core-security-center">github.com/fireflysoftwaresolutions/domain-core-security-center</a></p>

</div>


## Core

<div class="ff-entry ff-entry--core" markdown="1">
<p class="ff-kicker">Core</p>

### core-common-sca-mgmt

Owns strong-customer-authentication operations, challenges, attempts, and the audit trail. `domain-common-sca` is the domain orchestrator.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/core-common-sca-mgmt">github.com/fireflysoftwaresolutions/core-common-sca-mgmt</a></p>

</div>

<div class="ff-entry ff-entry--core" markdown="1">
<p class="ff-kicker">Core</p>

### core-common-security-vault

Owns credential and secret records, including rotation and an access audit. This is a core without a domain orchestrator.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/core-common-security-vault">github.com/fireflysoftwaresolutions/core-common-security-vault</a></p>

</div>

<div class="ff-entry ff-entry--core" markdown="1">
<p class="ff-kicker">Core</p>

### core-common-user-mgmt

Owns users, roles, and permissions. This is a core without a domain orchestrator. Session state lives in the security center.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/core-common-user-mgmt">github.com/fireflysoftwaresolutions/core-common-user-mgmt</a></p>

</div>


## Application

<div class="ff-entry ff-entry--application" markdown="1">
<p class="ff-kicker">Application</p>

### app-authenticator

Gateway in front of the security center. It routes calls to `domain-core-security-center` and does not own session records.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/app-authenticator">github.com/fireflysoftwaresolutions/app-authenticator</a></p>

</div>


## Related


- [All services](index.md)

- [Layers](../layers/index.md)

- [Replace an adapter](../adapters/index.md)

