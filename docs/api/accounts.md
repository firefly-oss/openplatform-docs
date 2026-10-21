# Accounts

Journey contract for `exp-accounts`. Core and domain contracts stay in each repository.

Request: `POST /api/v1/journeys/account-opening`

The body schema is `InitiateAccountOpeningCommand`. Fields in the spec include `customerId`, `productId`, `currency`.

Response: `200` OK.

Denied call, from the journey test:

The test `openAccount_deniedAccessDoesNotCallDomain` returns a denied access decision and expects `AccessDeniedException`. The domain is not called.

<link rel="stylesheet" href="../../assets/swagger/stylesheets/swagger-ui.css">
<div id="ff-swagger"></div>
<script src="../../assets/swagger/javascripts/swagger-ui-bundle.js"></script>
<script>
document.addEventListener("DOMContentLoaded", function () {
  if (!window.SwaggerUIBundle) return;
  window.SwaggerUIBundle({
    url: "../specs/accounts.yml",
    dom_id: "#ff-swagger",
    deepLinking: true,
    presets: [window.SwaggerUIBundle.presets.apis]
  });
});
</script>

