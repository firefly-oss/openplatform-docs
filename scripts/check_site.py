#!/usr/bin/env python3
"""Check built local references after a successful strict MkDocs build."""
from __future__ import annotations

import argparse
import json
import re
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit


class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = set()
        self.links = []

    def handle_starttag(self, tag, attrs):
        attributes = dict(attrs)
        if "id" in attributes:
            self.ids.add(attributes["id"])
        for key in ("src", "href"):
            if attributes.get(key):
                self.links.append((key, attributes[key]))
        if attributes.get("srcset"):
            self.links.extend(("srcset", value.strip().split()[0])
                              for value in attributes["srcset"].split(",") if value.strip())


def check(root):
    root = root.resolve()
    pages = {}
    for path in root.rglob("*.html"):
        page = Page()
        page.feed(path.read_text(encoding="utf-8"))
        pages[path.resolve()] = page
    if not pages:
        raise ValueError("Built site has no HTML pages; build must succeed before crawling")
    errors = []
    checked = 0
    for path, page in pages.items():
        for _, url in page.links:
            parts = urlsplit(url)
            if parts.scheme or parts.netloc:
                continue
            target = ((root / unquote(parts.path.lstrip("/")))
                      if parts.path.startswith("/") else path.parent / unquote(parts.path))
            target = target.resolve() if parts.path else path
            if target.is_dir():
                target /= "index.html"
            checked += 1
            reason = None
            if not target.is_relative_to(root):
                reason = "outside site"
            elif not target.is_file():
                reason = "missing file"
            elif (parts.fragment and target.suffix == ".html" and target in pages
                  and unquote(parts.fragment) not in pages[target].ids):
                reason = "missing anchor"
            if reason:
                errors.append((str(path.relative_to(root)), url, reason))
    for path in root.rglob("*.css"):
        for url in re.findall(r"url\(['\"]?([^\)'\"]+)", path.read_text(encoding="utf-8")):
            parts = urlsplit(url)
            if parts.scheme or parts.netloc or url.startswith("#"):
                continue
            target = ((root / unquote(parts.path.lstrip("/")))
                      if parts.path.startswith("/") else path.parent / unquote(parts.path)).resolve()
            checked += 1
            if not target.is_relative_to(root) or not target.is_file():
                errors.append((str(path.relative_to(root)), url, "missing or outside CSS asset"))
    return {"html_pages": len(pages), "local_references": checked, "errors": errors}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--site", type=Path, default=Path(__file__).resolve().parents[1] / "site")
    parser.add_argument("--report", type=Path)
    args = parser.parse_args()
    try:
        report = check(args.site)
    except ValueError as error:
        parser.exit(1, str(error) + "\n")
    if args.report:
        args.report.parent.mkdir(parents=True, exist_ok=True)
        args.report.write_text(json.dumps(report, indent=2) + "\n", encoding="utf-8")
    print(json.dumps({**report, "errors": report["errors"][:25]}, indent=2))
    return bool(report["errors"])


if __name__ == "__main__":
    raise SystemExit(main())
