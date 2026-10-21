# Shared platform

These repositories are in the release list and do not sit inside one business family. They include the parent, the bill of materials, the libraries, reference data, documents, notifications, distributors, organization structure, configuration, the general ledger, and the model hub.

Libraries are shared code. They are not a fourth business layer. The layer page is [Libraries](../layers/libraries.md). The train pin is [Train](../release/train.md).



## Domain

<div class="ff-entry ff-entry--domain" markdown="1">
<p class="ff-kicker">Domain</p>

### domain-common-notifications

Owns the notification saga: send, record history, and store channel preferences, with compensation, through `core-common-notification-services`.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/domain-common-notifications">github.com/fireflysoftwaresolutions/domain-common-notifications</a></p>

</div>

<div class="ff-entry ff-entry--domain" markdown="1">
<p class="ff-kicker">Domain</p>

### domain-core-configuration

Owns configuration queries: languages, lookup domains, tenant branding, and master-data lookup items. It calls the configuration core SDK and the reference-data core SDK.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/domain-core-configuration">github.com/fireflysoftwaresolutions/domain-core-configuration</a></p>

</div>

<div class="ff-entry ff-entry--domain" markdown="1">
<p class="ff-kicker">Domain</p>

### domain-distributor-branding

Owns the distributor saga for legal identity, branding, terms, agencies, agents, and territories, through `core-common-distributor-mgmt`.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/domain-distributor-branding">github.com/fireflysoftwaresolutions/domain-distributor-branding</a></p>

</div>

<div class="ff-entry ff-entry--domain" markdown="1">
<p class="ff-kicker">Domain</p>

### domain-distributor-catalog

Owns the saga for a distributor product catalog, through `core-common-distributor-mgmt`. It does not keep its own database.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/domain-distributor-catalog">github.com/fireflysoftwaresolutions/domain-distributor-catalog</a></p>

</div>


## Core

<div class="ff-entry ff-entry--core" markdown="1">
<p class="ff-kicker">Core</p>

### core-common-accounting-gl

Owns general-ledger accounting records for the platform. This is a core without a domain orchestrator.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/core-common-accounting-gl">github.com/fireflysoftwaresolutions/core-common-accounting-gl</a></p>

</div>

<div class="ff-entry ff-entry--core" markdown="1">
<p class="ff-kicker">Core</p>

### core-common-config-mgmt

Owns tenant configuration, provider settings, channel settings, and feature flags. `domain-core-configuration` reads this core.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/core-common-config-mgmt">github.com/fireflysoftwaresolutions/core-common-config-mgmt</a></p>

</div>

<div class="ff-entry ff-entry--core" markdown="1">
<p class="ff-kicker">Core</p>

### core-common-distributor-mgmt

Owns distributor records, agreements, agencies, agents, territories, and catalog rows. `domain-distributor-branding` and `domain-distributor-catalog` orchestrate it.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/core-common-distributor-mgmt">github.com/fireflysoftwaresolutions/core-common-distributor-mgmt</a></p>

</div>

<div class="ff-entry ff-entry--core" markdown="1">
<p class="ff-kicker">Core</p>

### core-common-document-mgmt

Owns document metadata and stored content. This is a core without a domain orchestrator.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/core-common-document-mgmt">github.com/fireflysoftwaresolutions/core-common-document-mgmt</a></p>

</div>

<div class="ff-entry ff-entry--core" markdown="1">
<p class="ff-kicker">Core</p>

### core-common-modelhub

Owns data models defined at runtime, and the records stored against those models. This is a core without a domain orchestrator.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/core-common-modelhub">github.com/fireflysoftwaresolutions/core-common-modelhub</a></p>

</div>

<div class="ff-entry ff-entry--core" markdown="1">
<p class="ff-kicker">Core</p>

### core-common-notification-services

Owns notification messages and delivery state. `domain-common-notifications` is the domain orchestrator.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/core-common-notification-services">github.com/fireflysoftwaresolutions/core-common-notification-services</a></p>

</div>

<div class="ff-entry ff-entry--core" markdown="1">
<p class="ff-kicker">Core</p>

### core-common-org-mgmt

Owns organization structure: divisions, regions, branches, departments, positions, and working calendars. This is a core without a domain orchestrator.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/core-common-org-mgmt">github.com/fireflysoftwaresolutions/core-common-org-mgmt</a></p>

</div>

<div class="ff-entry ff-entry--core" markdown="1">
<p class="ff-kicker">Core</p>

### core-common-reference-master-data

Owns reference lists such as countries, currencies, and document types. This is a core without a domain orchestrator. `domain-core-configuration` reads it.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/core-common-reference-master-data">github.com/fireflysoftwaresolutions/core-common-reference-master-data</a></p>

</div>


## Application

<div class="ff-entry ff-entry--application" markdown="1">
<p class="ff-kicker">Application</p>

### app-configurator-masters

Gateway in front of configuration. It routes calls to `domain-core-configuration` and does not own configuration records.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/app-configurator-masters">github.com/fireflysoftwaresolutions/app-configurator-masters</a></p>

</div>


## Library

<div class="ff-entry ff-entry--library" markdown="1">
<p class="ff-kicker">Library</p>

### library-common-batch

Library for scheduling batch jobs, with optional execution audit and a lock so the same job does not run concurrently on two nodes.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/library-common-batch">github.com/fireflysoftwaresolutions/library-common-batch</a></p>

</div>

<div class="ff-entry ff-entry--library" markdown="1">
<p class="ff-kicker">Library</p>

### library-psps

Port library for payment service providers. Domain and experience code call the port. A deployment supplies the provider adapter.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/library-psps">github.com/fireflysoftwaresolutions/library-psps</a></p>

</div>

<div class="ff-entry ff-entry--library" markdown="1">
<p class="ff-kicker">Library</p>

### library-rails

Port library for payment rails. Domain and experience code call the port. A deployment supplies the rail adapter.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/library-rails">github.com/fireflysoftwaresolutions/library-rails</a></p>

</div>


## Platform

<div class="ff-entry ff-entry--platform" markdown="1">
<p class="ff-kicker">Platform</p>

### firefly-bom

Bill of materials for train 26.10.3. Import it to pin every published `io.fireflysoftware` library, core, domain, experience service, and application to that train.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/firefly-bom">github.com/fireflysoftwaresolutions/firefly-bom</a></p>

</div>

<div class="ff-entry ff-entry--platform" markdown="1">
<p class="ff-kicker">Platform</p>

### firefly-parent

Parent POM for OpenPlatform modules. It extends `org.fireflyframework:fireflyframework-parent` 26.10.20 and imports `firefly-bom` 26.10.3. Banking, lending, and insurance use this parent.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/firefly-parent">github.com/fireflysoftwaresolutions/firefly-parent</a></p>

</div>


## Related


- [All services](index.md)

- [Layers](../layers/index.md)

- [Replace an adapter](../adapters/index.md)

