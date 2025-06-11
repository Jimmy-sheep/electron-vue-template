import { globalIgnores } from "eslint/config";
import { defineConfigWithVueTs, vueTsConfigs } from "@vue/eslint-config-typescript";
import pluginVue from "eslint-plugin-vue";
import pluginVitest from "@vitest/eslint-plugin";
import pluginPlaywright from "eslint-plugin-playwright";
import stylistic from "@stylistic/eslint-plugin";

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from "@vue/eslint-config-typescript"
// configureVueProject({ scriptLangs: ["ts", "tsx"] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  {
    name: "app/files-to-lint",
    files: ["**/*.{ts,mts,tsx,vue}"]
  },

  globalIgnores(["**/dist/**", "**/dist-ssr/**", "**/coverage/**", "**/dist-electron/**"]),

  pluginVue.configs["flat/essential"],
  vueTsConfigs.recommended,

  {
    ...pluginVitest.configs.recommended,
    files: ["src/**/__tests__/*"]
  },

  {
    ...pluginPlaywright.configs["flat/recommended"],
    files: ["e2e/**/*.{test,spec}.{js,ts,jsx,tsx}"]
  },

  {
    name: "stylistic",
    ...stylistic.configs["recommended"],
    plugins: {
      "@stylistic": stylistic
    },
    rules: {
      "@stylistic/arrow-parens": ["error", "always"],
      "@stylistic/comma-dangle": ["error", "never"],
      "@stylistic/indent": ["error", 2],
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/semi": ["error", "always"]
    }
  }
);
