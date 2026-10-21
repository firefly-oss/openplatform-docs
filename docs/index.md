# Overview

<div class="ff-cover" markdown="0">
<img class="ff-cover__img ff-cover__img--light" src="https://raw.githubusercontent.com/fireflysoftwaresolutions/.github/main/profile/assets/banner-light.svg" alt="Firefly OpenPlatform">
<img class="ff-cover__img ff-cover__img--dark" src="https://raw.githubusercontent.com/fireflysoftwaresolutions/.github/main/profile/assets/banner-dark.svg" alt="">
</div>

<p class="ff-lead">OpenPlatform is the set of services a bank or an insurer runs for customers, accounts, lending, and insurance. It is implemented on Jafly. Train 26.10.3 is the published set.</p>

It is for engineers who build or operate those services. Experience services own the journey. Domain services own the saga. Core services own the database. Read [Jafly is the foundation](jafly.md) before treating the framework as a library footnote. Then use the [quickstart](quickstart.md), the [architecture](layers/index.md), and the family that matches the work.

The release list has 90 repositories. Every one is in the [families](catalog/index.md), with the layer it sits in and a link to `github.com/fireflysoftwaresolutions`.

Attitude makes the difference.

## Read next

- [Jafly is the foundation](jafly.md). Parent import of `fireflyframework-bom` 26.10.20, the rules engine, and the identity adapters.
- [Quickstart](quickstart.md). Call `POST /api/v1/decisions` on the published decision sandbox. No bureau process.
- [Architecture](layers/index.md). Access, external data, decision, saga, core. A process engine is a later replacement of the domain adapter.
- [Journeys](journeys/index.md). Onboarding, customer, accounts and cards, lending, insurance.
- [Families](catalog/index.md). Customer, contract, product, banking, lending, insurance, data, security, and decision.
- [Replace an adapter](adapters/index.md). Ruleset, credit report, and the identity provider the security center already depends on.

<ul class="ff-pins" markdown="0">
<li class="ff-pin"><span class="ff-pin__label">OpenPlatform</span><span class="ff-pin__value">26.10.3</span></li>
<li class="ff-pin"><span class="ff-pin__label">Jafly BOM</span><span class="ff-pin__value">26.10.20</span></li>
<li class="ff-pin"><span class="ff-pin__label">Java</span><span class="ff-pin__value">25</span></li>
<li class="ff-pin"><span class="ff-pin__label">Spring Boot</span><span class="ff-pin__value">4.1.1</span></li>
</ul>

Published by the Firefly Software Foundation. [dev@fireflysoftware.io](mailto:dev@fireflysoftware.io). Organization: [fireflysoftwaresolutions](https://github.com/fireflysoftwaresolutions). Service host: `https://openplatform.fireflysoftware.io/{service}`. Product site: [fireflysoftware.io](https://fireflysoftware.io/).

Source: `io.fireflysoftware:firefly-parent` and `io.fireflysoftware:firefly-bom` at 26.10.3. Java 25 and Spring Boot 4.1.1 come from `org.fireflyframework:fireflyframework-parent` 26.10.20.
