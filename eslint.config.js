import globals from "globals";
import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import reactRefreshPlugin from "eslint-plugin-react-refresh";
import reactPlugin from "eslint-plugin-react";
import prettierPlugin from "eslint-plugin-prettier";
import tsParser from "@typescript-eslint/parser";

export default [
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
      globals: globals.browser,
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "react-refresh": reactRefreshPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      // قواعد ESLint الأساسية + TypeScript + React + Hooks
      ...js.configs.recommended.rules,
      ...tsPlugin.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "react/react-in-jsx-scope": "off",

      // قواعد مهمة للتعلم
      semi: ["error", "always"],
      quotes: ["error", "single"],
      "no-unused-vars": "warn",
      eqeqeq: "error",
      "no-console": "warn",
      curly: "error",
      "no-duplicate-imports": "error",
      indent: ["error", 2],

      // قواعد Prettier مدمجة
      "prettier/prettier": [
        "error",
        {
          printWidth: 100, // الحد الأقصى لطول السطر
          tabWidth: 2, // عرض كل مسافة بادئة
          useTabs: false, // استخدام مسافات بدل Tabs
          semi: true, // الفاصلة المنقوطة
          singleQuote: true, // علامات اقتباس مفردة
          jsxSingleQuote: true, // علامات اقتباس مفردة في JSX
          trailingComma: "all", // فاصلة بعد آخر عنصر
          bracketSpacing: true, // مسافة بين الأقواس {}
          arrowParens: "always", // أقواس دائمًا للباراميتر الواحد
          endOfLine: "auto", // نهاية السطر حسب OS
        },
      ],
    },
    settings: {
      react: { version: "detect" },
    },
  },
];
