# Versioned documentation

The site uses Mike to manage versioned MkDocs output. Documentation versions must identify the service and SDK baseline they describe. A framework dependency version is not the same as an OpenPlatform service release.

## Local review

Install the repository's documentation requirements in an isolated Python environment and build without publishing:

```sh
python -m pip install -r requirements.txt
mkdocs build --strict
```

Run link/asset checks and review the actual output on wide and narrow screens, both themes, keyboard navigation, search, long tables, and diagrams. Confirm the [operating guidance](../operations/index.md) matches the qualified source and artifacts.

## Publication gate

Publication changes remote documentation state. Use the repository's approved release workflow after the source, SDK, runtime, documentation, and independent-review gates pass and the owner authorizes publication. Do not label an uncommitted local correction as an available release.

Inspect the installed tool's `mike --help` and the existing publication workflow before selecting a version or alias. Keep previous qualified versions available where required; move `latest` only to the intended accepted baseline. Verify the built pages, assets, version selector, and canonical links at the actual destination after publication.

The header links to the setup guide and source repository. Version aliases become available only after the documentation publication workflow creates them.
