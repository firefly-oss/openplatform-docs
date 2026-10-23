import io.fireflysoftware.commons.ecm.sdk.api.GovernedDocumentIssuanceApi;
import io.fireflysoftware.commons.ecm.sdk.model.DocumentIssuanceReceipt;
import io.fireflysoftware.commons.ecm.sdk.model.DocumentIssueRequest;
import io.fireflysoftware.commons.ecm.sdk.model.DocumentIssuedContent;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.time.Duration;
import java.util.HexFormat;
import java.util.Objects;
import java.util.UUID;
import reactor.core.publisher.Mono;

/** Uses a configured authenticated SDK and an already retained exact business request. */
public final class GovernedDocumentIssuanceExample {
  public record RetainedContent(DocumentIssuanceReceipt receipt, DocumentIssuedContent content) {}

  public static Mono<RetainedContent> issueAndRead(
      GovernedDocumentIssuanceApi documents,
      UUID tenantId,
      String resourceType,
      UUID resourceId,
      DocumentIssueRequest sealedRequest) {
    Objects.requireNonNull(documents);
    Objects.requireNonNull(sealedRequest);
    Objects.requireNonNull(sealedRequest.getActionId());
    Objects.requireNonNull(sealedRequest.getFactsJson());
    String tenant = tenantId.toString();
    String resource = resourceId.toString();
    return documents
        .issueGovernedDocument(tenant, resourceType, resource, sealedRequest, null)
        .switchIfEmpty(Mono.error(new IllegalStateException("Missing issuance receipt")))
        .flatMap(
            receipt -> {
              if (!"ISSUED".equals(receipt.getStatus()) || receipt.getIssuanceId() == null) {
                return Mono.error(new IllegalStateException("Incomplete issuance receipt"));
              }
              return documents
                  .getGovernedDocumentContent(
                      tenant, resourceType, resource, receipt.getIssuanceId().toString(), null)
                  .switchIfEmpty(Mono.error(new IllegalStateException("Missing retained content")))
                  .map(content -> verify(sealedRequest, receipt, content));
            })
        .timeout(Duration.ofSeconds(15));
  }

  private static RetainedContent verify(
      DocumentIssueRequest request,
      DocumentIssuanceReceipt receipt,
      DocumentIssuedContent content) {
    byte[] bytes = Objects.requireNonNull(content.getContentUtf8()).getBytes(StandardCharsets.UTF_8);
    String digest = sha256(bytes);
    if (!Objects.equals(receipt.getIssuanceId(), content.getIssuanceId())
        || !Objects.equals(receipt.getDocumentVersionId(), content.getDocumentVersionId())
        || !"text/html".equals(content.getMediaType())
        || !Objects.equals(receipt.getMediaType(), content.getMediaType())
        || !Objects.equals(receipt.getByteLength(), (long) bytes.length)
        || !Objects.equals(content.getByteLength(), (long) bytes.length)
        || !digest.equals(receipt.getContentDigest())
        || !digest.equals(content.getContentDigest())
        || !sha256(request.getFactsJson().getBytes(StandardCharsets.UTF_8))
            .equals(receipt.getFactsDigest())) {
      throw new IllegalStateException("Retained document integrity mismatch");
    }
    return new RetainedContent(receipt, content);
  }

  private static String sha256(byte[] bytes) {
    try {
      return HexFormat.of().formatHex(MessageDigest.getInstance("SHA-256").digest(bytes));
    } catch (java.security.NoSuchAlgorithmException impossible) {
      throw new IllegalStateException(impossible);
    }
  }
}
