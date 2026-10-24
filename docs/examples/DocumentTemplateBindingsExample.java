import io.fireflysoftware.common.config.sdk.api.DocumentTemplateBindingsApi;
import io.fireflysoftware.common.config.sdk.model.DocumentBindingBrandReference;
import io.fireflysoftware.common.config.sdk.model.DocumentTemplateBindingActionRequest;
import io.fireflysoftware.common.config.sdk.model.DocumentTemplateBindingCreateRequest;
import io.fireflysoftware.common.config.sdk.model.DocumentTemplateBindingDefinition;
import io.fireflysoftware.common.config.sdk.model.DocumentTemplateBindingResolution;
import io.fireflysoftware.common.config.sdk.model.DocumentTemplateMasterReference;
import io.fireflysoftware.common.reference.master.data.sdk.api.DocumentTemplateRevisionsApi;

import java.time.Duration;
import java.util.Objects;
import java.util.UUID;

/** Uses caller-configured authenticated SDKs; it does not generate a document. */
public final class DocumentTemplateBindingsExample {
    private static final Duration WAIT = Duration.ofSeconds(15);

    public record Selection(UUID tenantId, UUID channelId, String channelCode,
                            String purpose, String jurisdiction, String locale,
                            long effectiveFromEpochMillis, Long effectiveToEpochMillis,
                            long businessInstantEpochMillis,
                            UUID createActionId, UUID activateActionId) { }

    public static DocumentTemplateBindingResolution createAndResolve(
            DocumentTemplateRevisionsApi masters, DocumentTemplateBindingsApi bindings,
            String templateCode, String version, Selection selection) {
        var revision = Objects.requireNonNull(masters.resolveDocumentTemplateRevision(
                templateCode, version, selection.locale(), null).block(WAIT));
        var pin = new DocumentTemplateMasterReference()
                .revisionId(revision.getRevisionId().toString())
                .templateId(revision.getTemplateId().toString())
                .templateCode(revision.getTemplateCode())
                .templateVersion(revision.getVersion())
                .localeCode(revision.getLocaleCode())
                .mediaType(revision.getMediaType())
                .canonicalizationVersion(revision.getCanonicalizationVersion())
                .sourceDigest(revision.getSourceDigest())
                .contentDigest(revision.getContentDigest())
                .schemaDigest(revision.getSchemaDigest())
                .styleDigest(revision.getStyleDigest());
        var definition = new DocumentTemplateBindingDefinition()
                .documentPurpose(selection.purpose())
                .productScope(DocumentTemplateBindingDefinition.ProductScopeEnum.NONE)
                .channelConfigId(selection.channelId().toString())
                .channelCode(selection.channelCode())
                .jurisdiction(selection.jurisdiction())
                .localeCode(selection.locale())
                .effectiveFromEpochMillis(selection.effectiveFromEpochMillis())
                .effectiveToEpochMillis(selection.effectiveToEpochMillis())
                .masterReference(pin)
                .branding(new DocumentBindingBrandReference()
                        .scope(DocumentBindingBrandReference.ScopeEnum.NONE));
        String tenant = selection.tenantId().toString();
        var draft = Objects.requireNonNull(bindings.createDocumentTemplateBinding(tenant,
                new DocumentTemplateBindingCreateRequest()
                        .actionId(selection.createActionId().toString()).definition(definition),
                null).block(WAIT));
        bindings.activateDocumentTemplateBinding(tenant, draft.getBindingId().toString(),
                new DocumentTemplateBindingActionRequest()
                        .actionId(selection.activateActionId().toString()), null).block(WAIT);
        return Objects.requireNonNull(bindings.resolveDocumentTemplateBinding(tenant,
                selection.purpose(), "NONE", selection.channelCode(), selection.jurisdiction(),
                selection.locale(), selection.businessInstantEpochMillis(), null, null).block(WAIT));
    }
}
