module.exports = {
  "extends": [
    "airbnb"
  ],
  "rules": {
    // Ignored because prettier takes care of this
    "arrow-parens": 0,
    "comma-dangle": 0,
    "semi": 0,

    // Import settings
    "import/no-extraneous-dependencies": 0,
    "import/order": ["error"],
    "import/prefer-default-export": 0,

    // Comment settings
    "capitalized-comments": ["error", "always"],
    "no-warning-comments": ["error", { "terms": ["todo", "fixme"], "location": "anywhere" }],
    "spaced-comment": ["error", "always"],
    "lines-around-comment": ["error", {
      "beforeBlockComment": true,
      "afterBlockComment": true,
      "beforeLineComment": true,
      "afterLineComment": false,
      "allowBlockStart": true
    }]
  }
}
