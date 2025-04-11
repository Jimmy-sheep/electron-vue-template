import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { _electron as electron, ElectronApplication, Page, test, expect } from "@playwright/test";

// See here how to get started:
// https://playwright.dev/docs/intro

let electronApp: ElectronApplication;
let window: Page;

test.beforeAll(async () => {
  if (!fs.existsSync(path.join("dist-electron"))) {
    execSync("npx vite build");
  }

  // Launch Electron app
  electronApp = await electron.launch({ args: [".", "--no-sandbox"] });
  // Get the first window that the app opens, wait if necessary.
  window = await electronApp.firstWindow();
});

test.afterAll(async () => {
  // Exit app
  await electronApp.close();
});

test("has title", async () => {
  await expect(window).toHaveTitle("Electron + Vite + Vue");
});

test("visits the app root url", async () => {
  await expect(window.locator("h1")).toHaveText("You did it!");
});

test("about link", async () => {
  // Click the get started link.
  await window.getByRole("link", { name: "About" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(window.getByRole("heading", { name: /This is an about page/ })).toBeVisible();
});
