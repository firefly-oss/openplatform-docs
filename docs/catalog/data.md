# Data and external systems

Company lookup and credit-bureau clients live in the two repositories below. Neither has a core in the release list. Both still contain a provider client.

The decision sandbox does not call them. `SandboxCreditReportAdapter` is in `domain-lending-credit-scoring`, and `POST /api/v1/decisions` does not require `domain-data-credit-bureaus` to be running. See [Decision](decision.md).



## Domain

<div class="ff-entry ff-entry--domain" markdown="1">
<p class="ff-kicker">Domain</p>

### domain-data-business-intelligence

Owns company lookup against an external business-information provider. No core for this port is in the release list. The repository contains a provider client. The decision sandbox does not call this service.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/domain-data-business-intelligence">github.com/fireflysoftwaresolutions/domain-data-business-intelligence</a></p>

</div>

<div class="ff-entry ff-entry--domain" markdown="1">
<p class="ff-kicker">Domain</p>

### domain-data-credit-bureaus

Owns credit-bureau client code. No core for this port is in the release list. The published decision path does not call this repository. The fixed report used by `POST /api/v1/decisions` is `SandboxCreditReportAdapter` in `domain-lending-credit-scoring`.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/domain-data-credit-bureaus">github.com/fireflysoftwaresolutions/domain-data-credit-bureaus</a></p>

</div>


## Related


- [All services](index.md)

- [Layers](../layers/index.md)

- [Replace an adapter](../adapters/index.md)

