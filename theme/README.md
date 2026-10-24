# OpenPlatform documentation theme

The site extends the Firefly brand kit's Material theme pack with a business-first reading experience. The brand authority is `fireflysoftwaresolutions/brand-kit`; [the source manifest](../sources/brand-origin.json) records its baseline, selected design inputs, and byte-identical vendored Manrope font files and license.

## Ownership and file layout

| Path | Responsibility |
| --- | --- |
| `theme/stylesheets/` | Retained reusable theme-pack source assets |
| `theme/assets/` | Theme-pack logos, icons, fonts, and licenses |
| `theme/overrides/partials/header.html` | Firefly logo and OpenPlatform lockup, navigation/search controls, readiness link |
| `theme/overrides/partials/source.html` | Repository link without remote release-stat requests |
| `docs/stylesheets/extra.css` | Vendored brand Material foundation consumed by the site |
| `docs/stylesheets/firefly-docs.css` | Application layout: reading rails, home orientation, legible navigation, mobile controls |
| `docs/javascripts/nav.js` | Accessible section navigation and diagram theme synchronization |
| `docs/assets/brand/` | Runtime logo, favicon, and banner assets |
| `docs/assets/fonts/` | Self-hosted font assets; preserve OFL license |
| `docs/assets/diagrams/` | Canonical piece-library diagrams, compositions, and measured text inventory |
| `mkdocs.yml` | Actual navigation, extensions, validation, styles, scripts, and override wiring |

`theme/mkdocs.snippet.yml` is a reusable template, not the deployed site configuration. The application consumes assets under `docs/`; a path under `theme/` does not automatically become a public site URL.

## Visual contract

Use Manrope, charcoal `#10110f`, paper `#f3f1eb`, and amber `#ffb34a`. Logos keep their existing geometry. Diagram colors retain semantic roles from the brand system; changing a theme cannot change what a component means. Show a useful introduction before technical reference tables, keep long navigation labels readable, and let narrow layouts reflow without hiding content.

The home page uses a wider orientation canvas. Manual articles keep a measured text column. Diagram sources provide wide/narrow and light/dark variants; their labels must remain readable at the actual rendered size. A theme choice in the site updates diagrams even when it differs from the operating system theme.

## Change and validate

Read the current brand-kit MkDocs template and diagram-system guide before replacing assets. Update the source manifest when refreshing upstream assets, and preserve font licensing. Do not treat local application overrides as byte-identical upstream CSS.

```sh
mkdocs build --strict
python scripts/check_site.py
```

Review actual desktop/mobile screenshots, both themes, keyboard menu/search behavior, focus visibility, zoom, tables, figures, and API explorer loading. Build/link checks do not assess readability or prove runtime API behavior. The [maintenance guide](../scripts/README.md) describes contract and coverage refresh commands. Publication/version aliases follow the explicit release workflow, separately from local preview.
