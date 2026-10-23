import importlib.util
import json
from pathlib import Path
import tempfile
import unittest


SOURCE = Path(__file__).resolve().parents[1] / "sync_service_guides.py"


class ServiceGuideSnapshotTests(unittest.TestCase):
    def setUp(self):
        self.temporary = tempfile.TemporaryDirectory()
        self.addCleanup(self.temporary.cleanup)
        self.root = Path(self.temporary.name)
        self.documentation = self.root / "documentation"
        (self.documentation / "sources").mkdir(parents=True)
        self.workspace = self.root / "workspace"
        self.input = self.workspace / "core-example/docs/guide.md"
        self.input.parent.mkdir(parents=True)
        self.input.write_bytes(b"# Example\n\nExact UTF-8 snapshot: \xc3\xa9.\n")
        self.registry = self.documentation / "sources/service-guides.json"
        self.registry.write_text(json.dumps({"guides": [{
            "repository": "core-example", "source": "docs/guide.md",
            "title": "Example", "destination": "example.md"}]}))
        spec = importlib.util.spec_from_file_location("service_guides_probe", SOURCE)
        self.module = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(self.module)
        self.module.__file__ = str(self.documentation / "scripts/sync_service_guides.py")

    def test_copy_preserves_exact_source_and_does_not_invent_published_source(self):
        self.module.generate(self.workspace)
        target = self.documentation / "docs/reference/service-guides/example.md"
        self.assertEqual(target.read_bytes(), self.input.read_bytes())
        index = (target.parent / "index.md").read_text()
        self.assertIn("source snapshot", index)
        self.assertNotIn("/blob/main/", index)
        self.assertIn("core-example/docs/guide.md", index)

    def test_check_detects_stale_source_without_replacing_output(self):
        self.module.generate(self.workspace)
        self.input.write_text("# Changed source\n")
        with self.assertRaisesRegex(ValueError, "Stale"):
            self.module.generate(self.workspace, check=True)
        self.assertNotEqual((self.documentation / "docs/reference/service-guides/example.md").read_bytes(),
                            self.input.read_bytes())

    def test_missing_guide_never_becomes_a_placeholder(self):
        self.input.unlink()
        with self.assertRaisesRegex(ValueError, "Missing or invalid"):
            self.module.generate(self.workspace)
        self.assertFalse((self.documentation / "docs").exists())

    def test_source_symlink_cannot_escape_its_own_repository(self):
        outside = self.root / "outside.md"
        outside.write_text("# Outside\n")
        self.input.unlink()
        self.input.symlink_to(outside)
        with self.assertRaisesRegex(ValueError, "Missing or invalid"):
            self.module.generate(self.workspace)

    def test_conflicting_destinations_are_rejected_before_any_write(self):
        data = json.loads(self.registry.read_text())
        data["guides"].append(data["guides"][0])
        self.registry.write_text(json.dumps(data))
        with self.assertRaisesRegex(ValueError, "Duplicate"):
            self.module.generate(self.workspace)
        self.assertFalse((self.documentation / "docs").exists())

    def test_destination_cannot_escape_the_guide_directory(self):
        data = json.loads(self.registry.read_text())
        data["guides"][0]["destination"] = "../outside.md"
        self.registry.write_text(json.dumps(data))
        with self.assertRaisesRegex(ValueError, "Invalid guide destination"):
            self.module.generate(self.workspace)

    def test_removed_registry_entry_cannot_leave_a_silently_published_guide(self):
        self.module.generate(self.workspace)
        self.registry.write_text(json.dumps({"guides": []}))
        retained = self.documentation / "docs/reference/service-guides/example.md"
        for check in (False, True):
            with self.assertRaisesRegex(ValueError, "Unexpected generated guide"):
                self.module.generate(self.workspace, check=check)
            self.assertEqual(retained.read_bytes(), self.input.read_bytes())

    def test_existing_output_symlink_cannot_overwrite_an_external_file(self):
        self.module.generate(self.workspace)
        target = self.documentation / "docs/reference/service-guides/example.md"
        target.unlink()
        outside = self.root / "outside.md"
        outside.write_text("# Keep outside content\n")
        target.symlink_to(outside)
        with self.assertRaisesRegex(ValueError, "Invalid output path"):
            self.module.generate(self.workspace)
        self.assertEqual(outside.read_text(), "# Keep outside content\n")


if __name__ == "__main__":
    unittest.main()
