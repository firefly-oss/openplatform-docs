# Insurance

Journey contract for `exp-insurance`. Core and domain contracts stay in each repository.

The OpenAPI file lists create quote, bind, cancel a policy, register a claim, and close a claim. The service also exposes read, update, and status on each record, and withdraw on a quote. Those calls are on the [insurance journey](../experience/public/insurance.md).

```yaml
# InsuranceJourneyServiceTest.quote()
# POST /api/v1/experience/insurance/quotes
# QuoteCommand: tenantId, partyId, productId, submissionNumber Q-1,
# lineOfBusiness MOTOR, currency USD
# Response record in that test: id, reference Q-1, status RECEIVED
```

A denial in `createQuote_deniedActorDoesNotCallDecisionOrDomain` returns `ACTOR_NOT_ENTITLED` and expects `AccessDeniedException`. Decision and the domain are not called.

<link rel="stylesheet" href="../../assets/swagger/stylesheets/swagger-ui.css">
<div id="ff-swagger"></div>
<script src="../../assets/swagger/javascripts/swagger-ui-bundle.js"></script>
<script>
document.addEventListener("DOMContentLoaded", function () {
  if (!window.SwaggerUIBundle) return;
  window.SwaggerUIBundle({
    url: "../specs/insurance.yml",
    dom_id: "#ff-swagger",
    deepLinking: true,
    presets: [window.SwaggerUIBundle.presets.apis]
  });
});
</script>

