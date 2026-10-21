"""Render <swagger-ui> with mkdocs-swagger-ui-tag.

The running preview process was started before that plugin's entry point
existed, so MkDocs does not list it. This hook loads the same class.
"""

from mkdocs_swagger_ui_tag.plugin import SwaggerUIPlugin

_plugin = SwaggerUIPlugin()
_plugin.load_config({})


def on_pre_page(page, config, files, **kwargs):
    return _plugin.on_pre_page(page, config, files, **kwargs)


def on_post_page(output, page, config, **kwargs):
    return _plugin.on_post_page(output, page=page, config=config)


def on_post_build(config, **kwargs):
    return _plugin.on_post_build(config=config)
