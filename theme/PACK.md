# Theme pack (vendored)

This folder is a copy of Firefly brand-kit **`16-MkDocs/`**
(`dist/Firefly-Brand-Kit/16-MkDocs/` after `npm run build -- --only mkdocs`).

See `README.md` in this folder for pack contents and colour tokens.

## Sync into this hub

After rebuilding the pack in the brand-kit work tree:

```sh
cp -R /path/to/brand-kit/dist/Firefly-Brand-Kit/16-MkDocs/. theme/
cp theme/stylesheets/*.css docs/stylesheets/
cp -R theme/assets/brand/. docs/assets/brand/
cp -R theme/assets/fonts/. docs/assets/fonts/
```

`mkdocs.yml` resolves logo, favicon, and `extra_css` under `docs/`, and
`custom_dir` at `theme/overrides`.

## Brand

Firefly · OpenPlatform · LendingOS · Attitude makes the difference.
