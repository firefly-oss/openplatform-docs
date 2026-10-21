# Profile

Journey contract for `exp-profile`. Core and domain contracts stay in each repository.

Request: `POST /api/v1/experience/profile/identity-documents`

```yaml
# POST /api/v1/experience/profile/identity-documents
# AddIdentityDocumentCommand. The spec requires type, number, and expiryDate.
# Response: 200 OK
# A contract read returns contractId, contract number, status, productId, productName, and productCode.
```

Denied call, from the journey test:

The test `deniedActorDoesNotReadContractsOrProducts` returns `AccessDecision.denied` with reason `ACTOR_NOT_ENTITLED` and expects `AccessDeniedException`. The contracts and products are not read.

<link rel="stylesheet" href="../../assets/swagger/stylesheets/swagger-ui.css">
<div id="ff-swagger"></div>
<script src="../../assets/swagger/javascripts/swagger-ui-bundle.js"></script>
<script>
document.addEventListener("DOMContentLoaded", function () {
  if (!window.SwaggerUIBundle) return;
  window.SwaggerUIBundle({
    url: "../specs/profile.yml",
    dom_id: "#ff-swagger",
    deepLinking: true,
    presets: [window.SwaggerUIBundle.presets.apis]
  });
});
</script>

