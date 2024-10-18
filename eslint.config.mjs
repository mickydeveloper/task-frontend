// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: [
      "webpack.*",
      "test.*",
      "jest.*",
      "**/__tests__/**",
      "**/node_modules/**",
      "**/build/**",
    ],
  }
);
