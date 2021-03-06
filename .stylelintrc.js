module.exports = {
  "extends": "stylelint-config-standard",
  "processors": ["stylelint-processor-styled-components"],
  "syntax": "scss",
  "plugins": [
    "stylelint-order",
    "stylelint-no-unsupported-browser-features"
  ],
  "rules": {
    "rule-empty-line-before": null,
    "no-empty-source": null,
    "no-missing-end-of-source-newline": null,
    "at-rule-empty-line-before": "always",
    "font-family-name-quotes": "always-where-recommended",
    "at-rule-no-vendor-prefix": true,
    "media-feature-name-no-vendor-prefix": true,
    "property-no-vendor-prefix": true,
    "selector-no-vendor-prefix": true,
    "value-no-vendor-prefix": true,
    "color-named": "never",
    "declaration-no-important": true,
    "font-weight-notation": "numeric",
    "plugin/no-unsupported-browser-features": [true, { "severity": "warning" }],
    "order/order": [
      "declarations",
      "rules",
      "at-rules"
    ],
    "order/properties-alphabetical-order": true
  }
}
