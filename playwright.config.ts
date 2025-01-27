import { defineConfig, devices } from "@playwright/test";

if (!process.env.CI) process.env.DEBUG = "pw:api";

const projects = process.env.CI
  ? [
      {
        name: "chromium",
        use: { ...devices["Desktop Chrome"] },
      },
      {
        name: "firefox",
        use: { ...devices["Desktop Firefox"] },
      },
      {
        name: "webkit",
        use: { ...devices["Desktop Safari"] },
      },
    ]
  : [
      {
        name: "chromium",
        use: { ...devices["Desktop Chrome"] },
      },
    ];

export default defineConfig({
  timeout: 1 * 60 * 1000,
  testDir: "./src/tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? undefined : 1,
  reporter: "html",
  use: {
    baseURL: "https://www.advantageonlineshopping.com",
    headless: process.env.CI ? true : false,
    launchOptions: { slowMo: process.env.CI ? 0 : 1000 },
    screenshot: process.env.CI ? "off" : "only-on-failure",
    trace: "on-first-retry",
    video: process.env.CI ? "on" : "off",
  },
  projects
});
