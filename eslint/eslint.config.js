import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    files: ["src/**/*.js", "src/**/*.jsx", "src/**/*.ts", "src/**/*.tsx"],
    rules: {
      "array-callback-return": "warn",
      "no-constructor-return": "warn",
      "no-duplicate-imports": "error",
      "no-self-compare": "error",
      "no-template-curly-in-string": "warn",
      "no-use-before-define": "error",
      "no-useless-assignment": "error",
      camelcase: "warn",
      "class-methods-use-this": "error",
      "consistent-return": "error",
      "default-case": "error",
      "dot-notation": "warn",
      eqeqeq: "warn",
      "require-yield": "error",
      "require-await": "error",
      "prefer-const": "error",
      "prefer-arrow-callback": "warn",
    },
  },
];
