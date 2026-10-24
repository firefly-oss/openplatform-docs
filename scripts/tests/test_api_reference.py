import importlib.util
import json
from pathlib import Path
import tempfile
import unittest


SOURCE = Path(__file__).resolve().parents[1] / "sync_api_reference.py"


class ApiReferenceProvenanceTests(unittest.TestCase):
    def setUp(self):
        self.temporary = tempfile.TemporaryDirectory()
        self.addCleanup(self.temporary.cleanup)
        self.root = Path(self.temporary.name)
        self.documentation = self.root / "documentation"
        (self.documentation / "sources").mkdir(parents=True)
        self.workspace = self.root / "workspace"
        self.input = "core-common-case-mgmt/core-common-case-mgmt-sdk/src/main/resources/openapi.yml"
        source = self.workspace / self.input
        source.parent.mkdir(parents=True)
        source.write_text("openapi: 3.0.3\ninfo: {title: Synthetic producer, version: 1}\npaths: {}\n")
        spec = importlib.util.spec_from_file_location("api_reference_probe", SOURCE)
        self.module = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(self.module)
        self.module.__file__ = str(self.documentation / "scripts/sync_api_reference.py")

    def generate(self, **overrides):
        item = {"repository": "core-common-case-mgmt", "input_spec": self.input,
                "source_commit": "a" * 40, **overrides}
        (self.documentation / "sources/api-contracts.json").write_text(json.dumps({"contracts": [item]}))
        self.module.generate(self.workspace)
        return (self.documentation / "docs/api/services/core-common-case-mgmt.md").read_text()

    def test_existing_producer_keeps_its_real_baseline_link_and_current_digest(self):
        page = self.generate()
        self.assertIn("/blob/" + "a" * 40 + "/", page)
        self.assertIn("current copied input SHA256", page)
        self.assertEqual((self.documentation / "docs/api/contracts/core-common-case-mgmt/openapi.yml").read_bytes(),
                         (self.workspace / self.input).read_bytes())

    def test_local_addition_has_no_invented_remote_commit_or_repository_link(self):
        page = self.generate(source_commit=None, publication="local_addition_unpublished")
        self.assertIn("local addition", page)
        self.assertIn("not published", page)
        self.assertNotIn("github.com/fireflysoftwaresolutions/core-common-case-mgmt", page)
        self.assertNotIn("None", page)
        manifest = json.loads((self.documentation / "docs/api/contract-manifest.json").read_text())["contracts"][0]
        self.assertIsNone(manifest["base_commit"])
        self.assertEqual(manifest["publication"], "local_addition_unpublished")

    def test_missing_baseline_requires_explicit_unpublished_provenance(self):
        with self.assertRaisesRegex(ValueError, "provenance"):
            self.generate(source_commit=None)

    def test_missing_source_is_never_replaced_by_a_placeholder_contract(self):
        (self.workspace / self.input).unlink()
        with self.assertRaisesRegex(ValueError, "Missing or invalid producer source"):
            self.generate()


if __name__ == "__main__":
    unittest.main()
