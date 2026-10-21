# Insurance

Insurance is a full family: seven cores and seven domain services, one pair for each subject. There is no insurance experience service in the release list. A channel calls a domain, or a later experience service can call the same port.

Each domain orchestrates its own core. The saga is create, update, status change, and close, with compensation, and only when the core allows the close. A domain calls that core's SDK and does not import the core's internals.

These domains do not move money and do not certify IFRS 17 or Solvency II. Premium schedules, commissions, refunds, bordereaux, and credit control are records on the financials core. Moving cash is outside this family.

The journey view is [Insurance](../journeys/insurance.md).



## Domain

<div class="ff-entry ff-entry--domain" markdown="1">
<p class="ff-kicker">Domain</p>

### domain-insurance-claims

Owns the claims saga: create, update, status change, and close, with compensation, through `core-insurance-claims`. It does not move money and does not certify IFRS 17 or Solvency II.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/domain-insurance-claims">github.com/fireflysoftwaresolutions/domain-insurance-claims</a></p>

</div>

<div class="ff-entry ff-entry--domain" markdown="1">
<p class="ff-kicker">Domain</p>

### domain-insurance-delegated-authority

Owns the delegated-authority saga: create, update, status change, and close a binder, with compensation, through `core-insurance-delegated-authority`. It does not move money and does not certify IFRS 17 or Solvency II.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/domain-insurance-delegated-authority">github.com/fireflysoftwaresolutions/domain-insurance-delegated-authority</a></p>

</div>

<div class="ff-entry ff-entry--domain" markdown="1">
<p class="ff-kicker">Domain</p>

### domain-insurance-financials

Owns the financials saga for premium schedules and related billing records, through `core-insurance-financials`. It records those facts. It does not move money and does not certify IFRS 17 or Solvency II.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/domain-insurance-financials">github.com/fireflysoftwaresolutions/domain-insurance-financials</a></p>

</div>

<div class="ff-entry ff-entry--domain" markdown="1">
<p class="ff-kicker">Domain</p>

### domain-insurance-policies

Owns the policy saga: create, update, status change, and close, with compensation, through `core-insurance-policies`. It does not move money and does not certify IFRS 17 or Solvency II.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/domain-insurance-policies">github.com/fireflysoftwaresolutions/domain-insurance-policies</a></p>

</div>

<div class="ff-entry ff-entry--domain" markdown="1">
<p class="ff-kicker">Domain</p>

### domain-insurance-reinsurance

Owns the reinsurance saga for treaties and cessions, through `core-insurance-reinsurance`. It does not move money and does not certify IFRS 17 or Solvency II.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/domain-insurance-reinsurance">github.com/fireflysoftwaresolutions/domain-insurance-reinsurance</a></p>

</div>

<div class="ff-entry ff-entry--domain" markdown="1">
<p class="ff-kicker">Domain</p>

### domain-insurance-reserving

Owns the reserving saga for snapshots and reporting extracts, through `core-insurance-reserving`. It does not move money and does not certify IFRS 17 or Solvency II.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/domain-insurance-reserving">github.com/fireflysoftwaresolutions/domain-insurance-reserving</a></p>

</div>

<div class="ff-entry ff-entry--domain" markdown="1">
<p class="ff-kicker">Domain</p>

### domain-insurance-underwriting

Owns the underwriting saga for submissions, quotes, referrals, and decisions, through `core-insurance-underwriting`. It does not move money and does not certify IFRS 17 or Solvency II.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/domain-insurance-underwriting">github.com/fireflysoftwaresolutions/domain-insurance-underwriting</a></p>

</div>


## Core

<div class="ff-entry ff-entry--core" markdown="1">
<p class="ff-kicker">Core</p>

### core-insurance-claims

Owns claim files, coverage checks, reserves, assessments, settlements, fraud referrals, and recoveries.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/core-insurance-claims">github.com/fireflysoftwaresolutions/core-insurance-claims</a></p>

</div>

<div class="ff-entry ff-entry--core" markdown="1">
<p class="ff-kicker">Core</p>

### core-insurance-delegated-authority

Owns binders, authority limits, and coverholder appointments.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/core-insurance-delegated-authority">github.com/fireflysoftwaresolutions/core-insurance-delegated-authority</a></p>

</div>

<div class="ff-entry ff-entry--core" markdown="1">
<p class="ff-kicker">Core</p>

### core-insurance-financials

Owns premium schedules, commissions, refunds, bordereaux, premium audits, and credit-control records. This core does not move money.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/core-insurance-financials">github.com/fireflysoftwaresolutions/core-insurance-financials</a></p>

</div>

<div class="ff-entry ff-entry--core" markdown="1">
<p class="ff-kicker">Core</p>

### core-insurance-policies

Owns policy records, parties on the policy, transactions, coverages, certificates, and line-level risk details.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/core-insurance-policies">github.com/fireflysoftwaresolutions/core-insurance-policies</a></p>

</div>

<div class="ff-entry ff-entry--core" markdown="1">
<p class="ff-kicker">Core</p>

### core-insurance-reinsurance

Owns reinsurance treaties, cessions, and claim recoveries recorded against those treaties.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/core-insurance-reinsurance">github.com/fireflysoftwaresolutions/core-insurance-reinsurance</a></p>

</div>

<div class="ff-entry ff-entry--core" markdown="1">
<p class="ff-kicker">Core</p>

### core-insurance-reserving

Owns reserving snapshots, loss-development triangle cells, and reporting extracts.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/core-insurance-reserving">github.com/fireflysoftwaresolutions/core-insurance-reserving</a></p>

</div>

<div class="ff-entry ff-entry--core" markdown="1">
<p class="ff-kicker">Core</p>

### core-insurance-underwriting

Owns underwriting submissions, clearance, statements of value, loss runs, quotes, referrals, and underwriting decisions.

<p class="ff-entry__links"><a href="https://github.com/fireflysoftwaresolutions/core-insurance-underwriting">github.com/fireflysoftwaresolutions/core-insurance-underwriting</a></p>

</div>


## Related


- [All services](index.md)

- [Layers](../layers/index.md)

- [Replace an adapter](../adapters/index.md)

