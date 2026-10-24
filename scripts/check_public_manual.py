#!/usr/bin/env python3
"""Keep internal program acceptance records out of the public platform manual."""
from pathlib import Path
import re

root = Path(__file__).resolve().parents[1] / "docs"
patterns = [
    re.compile(r"(?:family-coverage|operational-coverage|reference/readiness)"),
    re.compile(r"\bFAMILY-[A-Z_]+-\d+\b"),
    re.compile(r"\b(?:ACC|CARD|PAY)-\d{2,3}\b"),
    re.compile(r"Registered acceptance cases|Required acceptance record", re.IGNORECASE),
    re.compile(r"reference/data/(?:journeys|capabilities|perimeter|manifest)\.json"),
    re.compile(r"^\s*#{1,6}\s+(?:(?:BIAN|ACORD|Insurance)\s+)?(?:coverage\s+)?counts\b", re.IGNORECASE),
    re.compile(r"^\s*(?:[-*]\s*)?(?:covers|partial|absent|BIAN rows)\s*:\s*\d", re.IGNORECASE),
    re.compile(r"\bcovers\s+\d+\s*,\s*partial\s+\d+\s*,\s*absent\s+\d+", re.IGNORECASE),
]
errors = []
for path in sorted(root.rglob("*.md")):
    for number, line in enumerate(path.read_text(encoding="utf-8").splitlines(), 1):
        if any(pattern.search(line) for pattern in patterns):
            errors.append(f"{path.relative_to(root)}:{number}: internal acceptance content")
for name in ("family-coverage.md", "operational-coverage.md", "readiness.md"):
    if (root / "reference" / name).exists():
        errors.append(f"reference/{name}: internal register export")
for name in ("journeys", "capabilities", "perimeter", "manifest"):
    if (root / "reference/data" / (name + ".json")).exists():
        errors.append(f"reference/data/{name}.json: internal register export")
if errors:
    raise SystemExit("\n".join(errors))
print("Public manual contains no internal acceptance-register exports or case IDs.")
