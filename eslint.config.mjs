import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "off",
      "no-useless-escape": "off",
      "no-func-assign": "off",
      "no-constant-binary-expression": "off",
      "no-empty": "off",
    },
  },
];
