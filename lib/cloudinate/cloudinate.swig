{# cloudinate.url
 #
 # Returns the path to an asset on Cloudinary.
 #}
{%- macro url(asset, transformation) -%}

  {%- if transformation -%}
    {%- set transform = transformation + '/' -%}
  {%- else -%}
    {%- set transform = '' -%}
  {%- endif -%}

  https://res.cloudinary.com/ismay/
  {{- cloudinary[asset].resource_type -}}/
  {{- cloudinary[asset].type -}}/
  {{- transform -}}
 v{{- cloudinary[asset].version -}}/
  {{- asset -}}.
  {{- cloudinary[asset].format -}}
{%- endmacro -%}
