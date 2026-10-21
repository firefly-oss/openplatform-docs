# Cards

Journey contract for `exp-cards`. Core and domain contracts stay in each repository.

Request: `POST /api/v1/journeys/card-replacement`

The body schema is `ReportCardLostCommand`. Fields in the spec include `cardId`, `customerId`, `reason`.

Response: `200` OK.

Denied call, from the journey test:

The test `issueCard_deniedDoesNotCallDomain` expects `AccessDeniedException` and does not call the domain.

<link rel="stylesheet" href="../../assets/swagger/stylesheets/swagger-ui.css">
<div id="ff-swagger"></div>
<script src="../../assets/swagger/javascripts/swagger-ui-bundle.js"></script>
<script>
document.addEventListener("DOMContentLoaded", function () {
  if (!window.SwaggerUIBundle) return;
  window.SwaggerUIBundle({
    url: "../specs/cards.yml",
    dom_id: "#ff-swagger",
    deepLinking: true,
    presets: [window.SwaggerUIBundle.presets.apis]
  });
});
</script>

