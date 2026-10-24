"""Resolve repository-owned references that intentionally live outside docs/."""
from pathlib import Path
import re
from urllib.parse import quote, urlsplit
from mkdocs.exceptions import PluginError

_LINK = re.compile(r"(?<!!)\[([^]\n]+)\]\(([^\s)]+)\)")

def on_page_markdown(markdown, page, config, **kwargs):
    docs = Path(config.docs_dir).resolve()
    repository = docs.parent
    source = Path(page.file.abs_src_path).parent

    def resolve(match):
        target = match.group(2)
        parts = urlsplit(target)
        if parts.scheme or parts.netloc or not parts.path or parts.path.startswith("/"):
            return match.group(0)
        destination = (source / parts.path).resolve()
        if destination.is_relative_to(docs):
            return match.group(0)
        if not destination.is_relative_to(repository) or not destination.is_file():
            raise PluginError(f"Invalid repository reference in {page.file.src_uri}: {target}")
        relative = destination.relative_to(repository).as_posix()
        url = config.repo_url.rstrip("/") + "/blob/main/" + quote(relative, safe="/")
        if parts.fragment:
            url += "#" + parts.fragment
        return "[" + match.group(1) + "](" + url + ")"

    return _LINK.sub(resolve, markdown)
