# Publishing docs with mike

This hub uses **mike** so documentation versions can track OpenPlatform /
Jafly BOM trains (for example `26.10.20`) with a `latest` alias.

`mike` is already in `requirements.txt`. The MkDocs Material version
selector is wired via the `mike` plugin and `extra.version.provider`.

## Local aliases for the current train

Prerequisites: a git commit on `main` (mike reads `HEAD`), virtualenv
active, and `pip install -r requirements.txt`.

```sh
mkdocs build --strict
```

Deploy version **26.10.20** and update the **latest** alias on the local
`gh-pages` branch (does not push anywhere by itself):

```sh
mike deploy --push --update-aliases 26.10.20 latest
mike set-default --push latest
```

Omit `--push` if you only want to update the local `gh-pages` branch:

```sh
mike deploy --update-aliases 26.10.20 latest
mike set-default latest
```

List versions:

```sh
mike list
```

Serve the versioned site from `gh-pages` (after a deploy):

```sh
mike serve
```

## CI and GitHub Pages

- `.github/workflows/docs.yml` runs `mkdocs build --strict` (unversioned
  build check) plus brand check.
- `.github/workflows/publish-gh-pages.yml` publishes a single `site/` tree
  to `gh-pages` (custom domain `docs.fireflysoftware.io`). When the team
  is ready for versioned Pages, replace that push with `mike deploy` /
  `mike set-default` on `gh-pages`.

DNS and HTTPS for `docs.fireflysoftware.io` are owned by the publish
track. Do not edit GoDaddy or Pages domain settings from docs-only work.

## Naming convention

| Alias / version | Meaning |
|-----------------|---------|
| `26.10.20` | Docs set aligned with Jafly / OpenPlatform pin **26.10.20** (Boot **4.1.1**, Java **25**) |
| `latest` | Alias pointing at the current public train |

When the BOM pin moves, deploy a new version string and retarget
`latest`. Keep [Versioning and BOM](bom.md) in sync with the
pin you advertise.

## Related

- [Versioning and BOM](bom.md)
- [Contribute](../contribute/index.md)
