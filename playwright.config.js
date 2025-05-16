const { devices } = require('@playwright/test');

module.exports = {
    testDir: 'src/tests',
    timeout: 30000,
    expect: {
        timeout: 5000
    },
    reporter: 'list',
    use: {
        headless: false, // <-- Change this to false
        browserName: 'chromium',
        launchOptions: {
            slowMo: 50
        }
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
        },
        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] },
        },
    ],
};