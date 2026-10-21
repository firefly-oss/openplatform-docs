# Lending

Journey contract for `exp-lending`. Core and domain contracts stay in each repository.

Request: `POST /api/v1/experience/lending/simulations`

```yaml
# POST /api/v1/experience/lending/simulations
# CreateSimulationCommand fields in the spec: amount, term, productType, productId.
# Response: 200 OK
# An application reads journey.lending.min-credit-score from BusinessParameterPort
# and the catalog selects the domain from the product kind.
```

<link rel="stylesheet" href="../../assets/swagger/stylesheets/swagger-ui.css">
<div id="ff-swagger"></div>
<script src="../../assets/swagger/javascripts/swagger-ui-bundle.js"></script>
<script>
document.addEventListener("DOMContentLoaded", function () {
  if (!window.SwaggerUIBundle) return;
  window.SwaggerUIBundle({
    url: "../specs/lending.yml",
    dom_id: "#ff-swagger",
    deepLinking: true,
    presets: [window.SwaggerUIBundle.presets.apis]
  });
});
</script>

