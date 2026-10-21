# Onboarding

Journey contract for `exp-onboarding`. Core and domain contracts stay in each repository.

Request: `POST /api/v1/onboarding/individuals`

```yaml
# POST /api/v1/onboarding/individuals
# InitiateOnboardingCommand. The spec requires tenantId, firstName, lastName, and email.
# Response: 200 OK
```

<link rel="stylesheet" href="../../assets/swagger/stylesheets/swagger-ui.css">
<div id="ff-swagger"></div>
<script src="../../assets/swagger/javascripts/swagger-ui-bundle.js"></script>
<script>
document.addEventListener("DOMContentLoaded", function () {
  if (!window.SwaggerUIBundle) return;
  window.SwaggerUIBundle({
    url: "../specs/onboarding.yml",
    dom_id: "#ff-swagger",
    deepLinking: true,
    presets: [window.SwaggerUIBundle.presets.apis]
  });
});
</script>

