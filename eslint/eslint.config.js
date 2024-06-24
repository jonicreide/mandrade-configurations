import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:@typescript-eslint/recommended-requiring-type-checking",
    ],
    files: ["src/**/*.js", "src/**/*.jsx", "src/**/*.ts", "src/**/*.tsx"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      project: "./tsconfig.json",
      sourceType: "module",
    },
    plugins: ["@typescript-eslint"],
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

      // Typescript
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/ban-ts-comment": "warn",
      "@typescript-eslint/no-non-null-assertion": "warn",
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    },
  },
];
