# Manual diagrams

These diagrams use the current Firefly brand kit's canonical piece library, semantic families, and outlined Manrope. Labels are measured by the brand renderer; they cannot silently shrink below its minimum or exceed two lines. Every composition has explicit light/dark and narrow variants. SVGs remain source-native and scale without raster text.

## Reproduce

Use a sibling `brand-kit` checkout with its documented Node dependencies installed, including `fontkit` and `@fontsource/manrope`. Run:

```sh
node docs/assets/diagrams/render.mjs
```

Set `BRAND_KIT_ROOT` only when the brand checkout lives elsewhere. The script reads that checkout and writes only this diagram directory. It changes its working directory in-process because the brand type renderer resolves font files from the kit's installed dependencies. It does not install dependencies or modify the brand kit.

`source-manifest.json` records the exact brand source and renderer hashes, base revision when available, font package versions, the semantic model digest, and SVG output hashes on every run.

`diagram-inventory.json` retains canvas, theme, piece provenance, and measured text bounds for review. Use the wide variants for full-width layouts, and the compact 320px variants inside normal article columns and on phones. Compact labels start at 18px; do not shrink the wide landscape into a narrow reading column. MkDocs directory URLs require `../../assets/diagrams/` in raw HTML used by introduction/journey pages. Markdown image paths follow Markdown source-link rewriting instead.

- `platform-landscape`: conceptual architecture and ownership, used by introduction and homepage.
- `money-and-evidence`: separate instruction, decision, financial, external, and reconciliation authority.
- `signature-evidence`: current durable managed synthetic lifecycle; no live signing claim.
- `insurance-cover-to-cash`: business dependencies from risk/terms to coverage and financial close; not a deployed-integration claim.

Arrow/connector meaning and business qualification remain in the adjacent chapter. Read both the diagram and the source-linked explanation before using it as a runtime flow specification.

## Responsive sequences and dependency panels

`sequences.json` retains original source models, their participants, messages, returns, conditions, explanatory notes, and stable diagram-local step identities. The renderer partitions these into phase panels. Each panel has a 960px composition with source/action/target columns and a 320px stacked composition; both preserve the same numbered interactions. The narrow variant is selected below the chapter's reviewed breakpoint and capped at a 432px display width to prevent excessive enlargement on tablets. Labels start at 18px in the source canvas, with measured wrapping and additional vertical space rather than tiny-font fitting or horizontal scrolling. Check displayed type size at the actual viewport, because a narrow article can still reduce that source canvas.

Sequence numbers establish message order within the stated conditional branch. A return is explicitly labeled. Dependency and state panels instead label each connection independently; their numbers do not assert a temporal execution order. Self-messages keep the same actor as source and recipient. The original source and phase model make these semantics reviewable independently of the SVG outlines.

The managed-payment ownership model sets `labelsDescribeConnections`: its labeled edges describe responsibilities rather than conditions, so those labels appear once as connection text without an invented "When" qualifier. Its companion effect sequence preserves all nine messages and the lost-response note. The payment chapter selects the compact layout through1560px so that navigation rails cannot reduce the wide labels below their intended reading size at intermediate viewports.

Run the geometry and semantic regression checks after rendering:

```sh
node docs/assets/diagrams/validate.mjs
```

The checks reconstruct every original interaction and branch, compare the complete ordered phase partition, require both layouts and themes, retain explanatory notes, check actual page references, reject fixed scrolling wrappers, and verify measured text bounds and nonoverlap. Browser review should also confirm responsive selection, minimum displayed type size, and complete images at wide and narrow viewports.
