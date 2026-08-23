import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import playwright from 'eslint-plugin-playwright';


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
 tseslint.configs.recommendedTypeChecked,
   {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ["eslint.config.mjs"],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
  rules: {
    '@typescript-eslint/no-floating-promises': 'error',
  },
},
{
  files: ['tests/**'],
  extends: [playwright.configs['flat/recommended']],
},
]);
