#!/usr/bin/env python3
"""Copy current producer contracts and render inspectable API indexes.

Run from any directory: python scripts/sync_api_reference.py --workspace /path/to/current/worktrees
Only the declared public producers are read. No builds, network, or acceptance changes occur.
"""
from __future__ import annotations
import argparse
import hashlib
import json
import re
from pathlib import Path
import yaml

METHODS = {"get", "post", "put", "patch", "delete", "options", "head", "trace"}

def scalar(value):
    return str(value).replace("|", r"\|").replace("\n", " ")

def generate(workspace):
    repository = Path(__file__).resolve().parents[1]
    docs = repository / "docs/api"
    inputs = json.loads((repository / "sources/api-contracts.json").read_text())["contracts"]
    manifests = []
    index = ["# Producer API contracts", "These public producer SDK input specifications are copied byte for byte from the stated workspace snapshot. They document declarations, not independently accepted runtime behavior. Read the business journey and repository adoption guide before sending a write.", "| Producer | Operations | Schemas | Source baseline |", "| --- | --- | --- | --- |"]
    for item in inputs:
        producer = item["repository"]
        commit = item.get("source_commit")
        local_addition = item.get("publication") == "local_addition_unpublished"
        if local_addition:
            if commit is not None:
                raise ValueError("Unpublished producer provenance cannot invent a baseline commit")
        elif not isinstance(commit, str) or not re.fullmatch(r"[0-9a-f]{40}|[0-9a-f]{64}", commit):
            raise ValueError("Producer provenance requires a real baseline or explicit unpublished addition")
        source = (workspace / item["input_spec"]).resolve()
        if not source.is_relative_to(workspace.resolve()) or not source.is_file():
            raise ValueError("Missing or invalid producer source: " + str(source))
        raw = source.read_bytes()
        spec = yaml.safe_load(raw)
        if not isinstance(spec, dict) or not isinstance(spec.get("paths"), dict):
            raise ValueError("Invalid OpenAPI contract: " + str(source))
        target = docs / "contracts" / producer / "openapi.yml"
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_bytes(raw)
        operations = [(path, method.upper(), operation) for path, methods in spec["paths"].items()
                      for method, operation in methods.items() if method in METHODS]
        schemas = spec.get("components", {}).get("schemas", {})
        digest = hashlib.sha256(raw).hexdigest()
        relative = "/".join(item["input_spec"].split("/")[1:])
        contract_link = "[Complete contract](../contracts/" + producer + "/openapi.yml)"
        if local_addition:
            links = contract_link
            provenance = "**Provenance:** local addition; its source repository and SDK release are not published. Current copied input SHA256 `" + digest + "`. Producer input: `" + scalar(item["input_spec"]) + "`. Build the matching local producer and SDK before using this contract."
        else:
            source_url = "https://github.com/fireflysoftwaresolutions/" + producer + "/blob/" + commit + "/" + relative
            links = "[Repository adoption guide](https://github.com/fireflysoftwaresolutions/" + producer + ") · " + contract_link
            provenance = "**Provenance:** base revision `" + commit + "`; current copied input SHA256 `" + digest + "`. [Baseline source](" + source_url + "). The digest identifies the copied producer input independently of its base revision. Select a matching released SDK for the target service."
        page = ["# " + producer, links, provenance,
                "## Before calling", "Use the producer POM and matching SDK, validated authentication/tenant context, owner-created synthetic IDs, and disposable infrastructure. Request-supplied IDs are not authority. OpenAPI security declarations can be incomplete; inspect the actual controller and deployed filters. Follow required fields, enum values, pagination, monetary precision, and documented errors. A transport response-cache header does not replace durable business action identity.",
                "## Declared operations", "| Method | Path | Operation | Responses |", "| --- | --- | --- | --- |"]
        for path, method, operation in operations:
            responses = ", ".join("`" + str(x) + "`" for x in operation.get("responses", {}))
            page.append("| `" + method + "` | `" + scalar(path) + "` | `" + scalar(operation.get("operationId", "not declared")) + "` | " + responses + " |")
        page += ["## Schema directory", "The interactive contract below contains field constraints, nesting, parameters, and response models. A missing constraint or error declaration is a specification gap to verify against the producer, not permission to omit the business rule.", ", ".join("`" + name + "`" for name in sorted(schemas)) or "No component schemas are declared.",
                 "## Contract explorer", '<swagger-ui src="../contracts/' + producer + '/openapi.yml"></swagger-ui>',
                 "## Retries and recovery", "Keep the original business action key and returned resource/provider IDs when retrying. For pending or uncertain effects, query the existing operation before submitting another. Follow the service README for configuration and [operating guidance](../../operations/index.md) for recovery."]
        destination = docs / "services" / (producer + ".md")
        destination.parent.mkdir(exist_ok=True)
        destination.write_text("\n\n".join(page[:6]) + "\n\n" + "\n".join(page[6:8 + len(operations)]) + "\n\n" + "\n\n".join(page[8 + len(operations):]) + "\n")
        baseline = "Local addition, not published" if local_addition else "`" + commit[:12] + "`"
        index.append("| [" + producer + "](services/" + producer + ".md) | " + str(len(operations)) + " | " + str(len(schemas)) + " | " + baseline + " |")
        manifest = {"repository": producer, "source_path": item["input_spec"], "base_commit": commit, "sha256": digest, "operation_count": len(operations), "schema_count": len(schemas), "qualification": "declaration_snapshot_not_runtime_acceptance"}
        if local_addition:
            manifest["publication"] = "local_addition_unpublished"
        manifests.append(manifest)
    (docs / "contracts.md").write_text("\n\n".join(index[:2]) + "\n\n" + "\n".join(index[2:]) + "\n")
    (docs / "contract-manifest.json").write_text(json.dumps({"contracts": manifests}, indent=2) + "\n")
    return len(manifests), sum(item["operation_count"] for item in manifests)

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--workspace", type=Path, required=True)
    args = parser.parse_args()
    print(generate(args.workspace))
