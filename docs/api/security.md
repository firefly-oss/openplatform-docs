# Security

Journey contract for `exp-security`. Core and domain contracts stay in each repository.

Request: `POST /api/v1/experience/security/sca/verify`

The body schema is `VerifyScaCommand`. Fields in the spec include `operationId`, `challengeId`, `verificationCode`.

Response: `200` OK.

<link rel="stylesheet" href="../../assets/swagger/stylesheets/swagger-ui.css">
<div id="ff-swagger"></div>
<script src="../../assets/swagger/javascripts/swagger-ui-bundle.js"></script>
<script>
document.addEventListener("DOMContentLoaded", function () {
  if (!window.SwaggerUIBundle) return;
  window.SwaggerUIBundle({
    url: "../specs/security.yml",
    dom_id: "#ff-swagger",
    deepLinking: true,
    presets: [window.SwaggerUIBundle.presets.apis]
  });
});
</script>

