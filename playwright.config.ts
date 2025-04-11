import { defineConfig } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from "dotenv";
// import path from "path";
// dotenv.config({ path: path.resolve(__dirname, ".env") });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./e2e",
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000
  },
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: Boolean(process.env.CI),
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter:  "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    /* Base URL to use in actions like `await page.goto("/")`. */
    // baseURL: "http://localhost:5173",

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry"
  },

  projects: [
    /* Configure projects for major browsers */
    // {
    //   name: "chromium",
    //   use: { ...devices["Desktop Chrome"] }
    // },
    // {
    //   name: "firefox",
    //   use: { ...devices["Desktop Firefox"] }
    // },
    // {
    //   name: "webkit",
    //   use: { ...devices["Desktop Safari"] }
    // },

    /* Test against mobile viewports. */
    // {
    //   name: "Mobile Chrome",
    //   use: { ...devices["Pixel 5"] }
    // },
    // {
    //   name: "Mobile Safari",
    //   use: { ...devices["iPhone 12"] }
    // },

    /* Test against branded browsers. */
    // {
    //   name: "Microsoft Edge",
    //   use: { ...devices["Desktop Edge"], channel: "msedge" }
    // },
    // {
    //   name: "Google Chrome",
    //   use: { ...devices["Desktop Chrome"], channel: "chrome" }
    // },

    {
      name: "Electron",
      use: {
        userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) electron-vue-template/0.0.0 Chrome/134.0.6998.205 Electron/35.2.0 Safari/537.36",
        viewport: {
          width: 1280,
          height: 720
        },
        deviceScaleFactor: 1,
        isMobile: false,
        hasTouch: false,
        defaultBrowserType: "chromium"
      },
      metadata: {
        browserName: "electron"
      }
    }
  ]

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   /**
  //    * Use the dev server by default for faster feedback loop.
  //    * Playwright will re-use the local server if there is already a dev-server running.
  //    */
  //   command: "npm run dev",
  //   port: 5173,
  //   reuseExistingServer: !process.env.CI,
  // }
});
