/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
  ],
  overrides: [
    {
      files: ["cypress/e2e/**.{cy,spec}.{js,ts,jsx,tsx}"],
      extends: ["plugin:cypress/recommended"],
    },
    {
      files: ["src/components/__tests__/**.spec.js"],
      globals: {
        test: "readonly",
        describe: "readonly",
        vi: "readonly",
        expect: "readonly",
        it: "readonly",
        beforeEach: "readonly",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  env: {
    node: true,
  },
  rules: {
    "vue/multi-word-component-names": "off",
    "vue/no-reserved-component-names": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
