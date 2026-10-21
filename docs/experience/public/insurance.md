# Insurance

`exp-insurance` is one journey. It is not a copy of each insurance domain. Quote uses `domain-insurance-underwriting`. Bind, status, and cancel use `domain-insurance-policies`. Registering and closing a claim use `domain-insurance-claims`.

Quote, bind, and claim registration each call identity, then access, then a decision. The journey steps are `INSURANCE_QUOTE`, `INSURANCE_BIND`, and `CLAIM`. A denial or a `DECLINE` does not call the domain. After the record exists, status, withdraw on a quote, cancel on a policy, and close on a claim do not ask for a decision.

The policy domain and the underwriting domain do not have an endorse saga or a renew saga. Reinsurance, reserving, and insurance financials are not in this journey. Insurance does not move money.

Staff administration is the [insurance terminal](../administration/insurance.md).

## Operations

| Method | Path | What it does |
| --- | --- | --- |
| POST | `/api/v1/experience/insurance/quotes` | Create a submission |
| GET | `/api/v1/experience/insurance/quotes/{id}` | Read a submission |
| PUT | `/api/v1/experience/insurance/quotes/{id}` | Update a submission |
| PUT | `/api/v1/experience/insurance/quotes/{id}/status` | Change submission status |
| POST | `/api/v1/experience/insurance/quotes/{id}/withdraw` | Withdraw a submission |
| POST | `/api/v1/experience/insurance/policies` | Bind a policy |
| GET | `/api/v1/experience/insurance/policies/{id}` | Read a policy |
| PUT | `/api/v1/experience/insurance/policies/{id}` | Update a policy |
| PUT | `/api/v1/experience/insurance/policies/{id}/status` | Change policy status |
| POST | `/api/v1/experience/insurance/policies/{id}/cancel` | Cancel a policy |
| POST | `/api/v1/experience/insurance/claims` | Register a claim |
| GET | `/api/v1/experience/insurance/claims/{id}` | Read a claim |
| PUT | `/api/v1/experience/insurance/claims/{id}` | Update a claim |
| PUT | `/api/v1/experience/insurance/claims/{id}/status` | Change claim status |
| POST | `/api/v1/experience/insurance/claims/{id}/close` | Close a claim |

Which of those calls is enabled, and the default status when the caller omits one, comes from `insurance-journey-catalog.json`. `SandboxJourneyCatalogAdapter` is the class an installer replaces.

## Technical port

[exp-insurance](https://github.com/fireflysoftwaresolutions/exp-insurance), port 8108. The contract file is on the [API page](../../api/insurance.md). The service does not import a core SDK. Jafly stays behind the security-center identity adapter and the decision service.
