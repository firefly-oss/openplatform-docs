# Distributor

Journey contract for `exp-distributor`. Core and domain contracts stay in each repository.

Request: `GET /api/v1/experience/distributors/{distributorId}/territories/{territoryId}`

The spec does not declare a request body for this call.

Response: `200` OK.

<link rel="stylesheet" href="../../assets/swagger/stylesheets/swagger-ui.css">
<div id="ff-swagger"></div>
<script src="../../assets/swagger/javascripts/swagger-ui-bundle.js"></script>
<script>
document.addEventListener("DOMContentLoaded", function () {
  if (!window.SwaggerUIBundle) return;
  window.SwaggerUIBundle({
    url: "../specs/distributor.yml",
    dom_id: "#ff-swagger",
    deepLinking: true,
    presets: [window.SwaggerUIBundle.presets.apis]
  });
});
</script>

