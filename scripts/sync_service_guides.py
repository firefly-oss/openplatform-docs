#!/usr/bin/env python3
"""Mirror explicitly selected current service guides without inventing publication."""
from __future__ import annotations

import argparse
import hashlib
import json
import re
from pathlib import Path


def generate(workspace: Path, check: bool = False) -> int:
    repository = Path(__file__).resolve().parents[1]
    registry = json.loads((repository / "sources/service-guides.json").read_text())
    target = repository / "docs/reference/service-guides"
    outputs = {}
    manifests = []
    index = ["# Service configuration guides", "These guides reproduce the exact current service source snapshot so configuration instructions remain available inside this manual. The SHA256 identifies the copied bytes. They can contain local implementation changes that are not yet published in the remote service repository or released SDK. Build matching service/SDK sources and qualify deployment configuration before adopting them. A repository link identifies ownership, not publication of this snapshot.", "| Guide | Owning source | SHA256 |", "| --- | --- | --- |"]
    for item in registry["guides"]:
        name = item["repository"]
        destination = item["destination"]
        if not re.fullmatch(r"[a-z0-9]+(?:-[a-z0-9]+)*", name):
            raise ValueError("Invalid source repository")
        if not re.fullmatch(r"[a-z0-9]+(?:-[a-z0-9]+)*\.md", destination) or destination == "index.md":
            raise ValueError("Invalid guide destination")
        if destination in outputs:
            raise ValueError("Duplicate guide destination: " + destination)
        owner = (workspace / name).resolve()
        source = (owner / item["source"]).resolve()
        if not owner.is_relative_to(workspace.resolve()) or not source.is_relative_to(owner) or not source.is_file():
            raise ValueError("Missing or invalid service guide: " + str(source))
        raw = source.read_bytes()
        raw.decode("utf-8")
        digest = hashlib.sha256(raw).hexdigest()
        outputs[destination] = raw
        path = name + "/" + item["source"]
        title = str(item["title"]).replace("|", r"\|")
        index.append("| [" + title + "](" + destination + ") | [" + name + "](https://github.com/fireflysoftwaresolutions/" + name + "), `" + path + "` | `" + digest + "` |")
        manifests.append({"repository": name, "source": item["source"], "destination": destination,
                          "sha256": digest, "publication": "local_source_snapshot_not_release_proof"})
    outputs["index.md"] = ("\n\n".join(index[:2]) + "\n\n" + "\n".join(index[2:]) + "\n").encode()
    outputs["source-manifest.json"] = (json.dumps({"guides": manifests}, indent=2) + "\n").encode()
    if not target.resolve().is_relative_to(repository.resolve()):
        raise ValueError("Invalid output path: guide directory escapes the repository")
    for name in outputs:
        if not (target / name).resolve().is_relative_to(target.resolve()):
            raise ValueError("Invalid output path: " + name)
    unexpected = [str(path.relative_to(target)) for path in target.rglob("*")
                  if path.is_file() and str(path.relative_to(target)) not in outputs]
    if unexpected:
        raise ValueError("Unexpected generated guide outputs; review and remove retired snapshots explicitly: "
                         + ", ".join(sorted(unexpected)))
    if check:
        stale = [name for name, raw in outputs.items()
                 if not (target / name).is_file() or (target / name).read_bytes() != raw]
        if stale:
            raise ValueError("Stale service guide snapshot: " + ", ".join(stale))
    else:
        target.mkdir(parents=True, exist_ok=True)
        for name, raw in outputs.items():
            (target / name).write_bytes(raw)
    return len(manifests)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--workspace", type=Path, required=True)
    parser.add_argument("--check", action="store_true")
    args = parser.parse_args()
    print(generate(args.workspace, check=args.check))
