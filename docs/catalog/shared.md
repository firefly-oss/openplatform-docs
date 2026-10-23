# Shared platform

These repositories are in the release list and do not sit inside one business family. They include the parent, the bill of materials, the libraries, reference data, documents, notifications, distributors, organization structure, configuration, the general ledger, and the model hub.

Libraries are shared code. They are not a fourth business layer. The layer page is [Libraries](../layers/libraries.md). The version pin is [Version](../release/train.md).



## Domain

### domain-common-case-mgmt

Local unpublished addition owning authenticated case commands/queries and SDK composition. Its durable aggregate lives in the case core. Account-service and policy-service complaint intake is connected through the existing experiences; referral/exception contracts do not automatically resume product work. See [configuration and workflow](../operations/cases.md) and the [domain contract](../api/services/domain-common-case-mgmt.md).

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

### core-common-case-mgmt

Local unpublished addition owning cases, immutable journals/evidence references, original command receipts, transactional outbox and persisted escalation deadlines. It enforces tenant scope and requester/operator/closer duties. A case decision does not authorize a financial or insurance product command. See the [core contract](../api/services/core-common-case-mgmt.md).

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

Owns document metadata, versions, storage integration, and the managed signature evidence lifecycle. `domain-common-contracts` consumes its document/signature SDK. The current kit-document endpoint still creates metadata without rendering content; see [documents](../shared/documents.md).

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

Exposes email, SMS, and push delivery facades over configured Jafly providers. Its reactor has web and SDK modules and no owned notification-record database. The email sandbox returns a synthetic SENT acknowledgement without delivering a message. `domain-common-notifications` provides separate orchestration; see its source guide.

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

Bill of materials for source version 26.10.6. Its dependency management declares the platform coordinates. Verify the actual managed dependency and published artifact before adoption; a source version does not establish publication.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/firefly-bom">github.com/fireflysoftwaresolutions/firefly-bom</a></p>

</div>

<div class="ff-entry ff-entry--platform" markdown="1">
<p class="ff-kicker">Platform</p>

### firefly-parent

Parent POM for OpenPlatform modules. The current unpublished integration source extends `org.fireflyframework:fireflyframework-parent` 26.10.22 and imports `firefly-bom` 26.10.6; the remote baseline used Jafly 26.10.20. Banking, lending, and insurance use this parent. Follow the [version-selection guide](../release/train.md) and inspect the actual consumer artifact before adoption.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/firefly-parent">github.com/fireflysoftwaresolutions/firefly-parent</a></p>

</div>


## Related


- [All services](index.md)

- [Layers](../layers/index.md)

- [Replace an adapter](../adapters/index.md)

