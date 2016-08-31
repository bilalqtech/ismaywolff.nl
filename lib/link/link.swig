{# link.to
 #
 # Returns the appropriate absolute url. Expects a path relative to root,
 # without a leading slash.
 #
 # 1. Replaces any .swig extensions with .html
 # 2. Removes the .html extension for production builds
 #}

{%- macro to(href) -%}
  {%- if production -%}
    {{- host.remote -}}{{- href | replace(".swig", ".html") | replace(".html", "") -}}
  {%- endif -%}
  {%- if development -%}
    {{- host.local -}}{{- href | replace(".swig", ".html") -}}
  {%- endif -%}
{%- endmacro -%}

{# link.root
 #
 # Returns the appropriate absolute path to root.
 #}
{%- macro root() -%}
  {%- if production -%}
    {{- host.remote -}}
  {%- endif -%}
  {%- if development -%}
    {{- host.local -}}
  {%- endif -%}
{%- endmacro -%}
