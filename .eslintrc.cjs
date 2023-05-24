// eslint-disable-next-line import/no-extraneous-dependencies, @typescript-eslint/no-var-requires
const a11y = require("eslint-plugin-jsx-a11y");

const a11yOff = Object.keys(a11y.rules).reduce((acc, rule) => {
  acc[`jsx-a11y/${rule}`] = "off";
  return acc;
}, {});

module.exports = {
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/jsx-runtime",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {},
    },
  },
  rules: {
    ...a11yOff,
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "import/no-extraneous-dependencies": [
      2,
      { devDependencies: ["**/test.tsx", "**/test.ts"] },
    ],
    "@typescript-eslint/indent": [2, 2],
    "import/extensions": [2, "never"],
    "@typescript-eslint/no-explicit-any": "off",
    "react/no-unused-prop-types": [0],
    "react/no-array-index-key": [0],
    "react/jsx-props-no-spreading": [0],
    "class-methods-use-this": [0],
    "default-param-last": [0],
  },
};
