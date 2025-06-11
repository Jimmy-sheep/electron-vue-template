import { fileURLToPath } from "node:url";
import { mergeConfig, defineConfig, configDefaults, coverageConfigDefaults } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig({ command: "serve", mode: "test" }),
  defineConfig({
    test: {
      environment: "jsdom",
      exclude: [...configDefaults.exclude, "**/e2e/**", "**/playwright.config.*"],
      root: fileURLToPath(new URL("./", import.meta.url)),
      coverage: {
        exclude: [...coverageConfigDefaults.exclude, "e2e/**", "**/playwright.config.*"]
      }
    }
  })
);
