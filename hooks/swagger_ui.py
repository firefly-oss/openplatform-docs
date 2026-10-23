"""Render accessible, read-only producer contract explorers with the pinned plugin."""

from mkdocs_swagger_ui_tag.plugin import SwaggerUIPlugin


class ContractExplorer(SwaggerUIPlugin):
    def replace_with_iframe(self, soup, swagger_ui_ele, cur_id, iframe_filename):
        super().replace_with_iframe(soup, swagger_ui_ele, cur_id, iframe_filename)
        soup.find("iframe", id=cur_id)["title"] = "OpenAPI contract explorer"


_plugin = ContractExplorer()
_plugin.load_config({
    "docExpansion": "none",
    "supportedSubmitMethods": [],
    "extra_css": ["stylesheets/swagger.css"],
})


def on_pre_page(page, config, files, **kwargs):
    return _plugin.on_pre_page(page, config, files, **kwargs)


def on_post_page(output, page, config, **kwargs):
    return _plugin.on_post_page(output, page=page, config=config)


def on_post_build(config, **kwargs):
    return _plugin.on_post_build(config=config)
