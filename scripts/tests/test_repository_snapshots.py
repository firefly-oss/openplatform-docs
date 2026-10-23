"""Validate shipped snapshot integrity without fetching sibling repositories."""
import hashlib
import json
from pathlib import Path
import unittest

import yaml


ROOT = Path(__file__).resolve().parents[2]


class RepositorySnapshotIntegrityTests(unittest.TestCase):
    def test_service_guides_match_their_declared_bytes_and_current_registry(self):
        folder = ROOT / "docs/reference/service-guides"
        registry = json.loads((ROOT / "sources/service-guides.json").read_text())["guides"]
        manifest = json.loads((folder / "source-manifest.json").read_text())["guides"]
        expected = {item["destination"]: item for item in registry}
        self.assertEqual({item["destination"] for item in manifest}, set(expected))
        self.assertEqual(len(manifest), len(expected))
        self.assertEqual({str(path.relative_to(folder)) for path in folder.rglob("*") if path.is_file()},
                         set(expected) | {"index.md", "source-manifest.json"})
        for item in manifest:
            with self.subTest(guide=item["destination"]):
                source = expected[item["destination"]]
                self.assertEqual(item["repository"], source["repository"])
                self.assertEqual(item["source"], source["source"])
                self.assertEqual(item["publication"], "local_source_snapshot_not_release_proof")
                self.assertEqual(hashlib.sha256((folder / item["destination"]).read_bytes()).hexdigest(),
                                 item["sha256"])

    def test_api_copies_match_digest_provenance_and_declared_structure(self):
        registry = json.loads((ROOT / "sources/api-contracts.json").read_text())["contracts"]
        manifest = json.loads((ROOT / "docs/api/contract-manifest.json").read_text())["contracts"]
        expected = {item["repository"]: item for item in registry}
        self.assertEqual({item["repository"] for item in manifest}, set(expected))
        self.assertEqual(len(manifest), len(expected))
        for item in manifest:
            with self.subTest(producer=item["repository"]):
                source = expected[item["repository"]]
                raw = (ROOT / "docs/api/contracts" / item["repository"] / "openapi.yml").read_bytes()
                self.assertEqual(hashlib.sha256(raw).hexdigest(), item["sha256"])
                self.assertEqual(item["source_path"], source["input_spec"])
                self.assertEqual(item["base_commit"], source["source_commit"])
                spec = yaml.safe_load(raw)
                operations = sum(method in {"get", "post", "put", "patch", "delete", "options", "head", "trace"}
                                 for path in spec["paths"].values() for method in path)
                self.assertEqual(operations, item["operation_count"])
                self.assertEqual(len(spec.get("components", {}).get("schemas", {})), item["schema_count"])
                self.assertEqual(item["qualification"], "declaration_snapshot_not_runtime_acceptance")
                if source.get("publication") == "local_addition_unpublished":
                    self.assertIsNone(item["base_commit"])
                    self.assertEqual(item["publication"], source["publication"])


if __name__ == "__main__":
    unittest.main()
