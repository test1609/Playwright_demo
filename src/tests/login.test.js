import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';

test('valid login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('https://www.facebook.com/'); // Replace with actual URL

-    await loginPage.login('testuser', 'password123');
+    await loginPage.login(
+      process.env.TEST_USERNAME || 'testuser',
+      process.env.TEST_PASSWORD || 'password123'
+    );

    // Assert successful login by checking for elements that confirm logged-in state
    await expect(page.locator('.user-profile-element')).toBeVisible(); // Update selector to match your application
    // Or check for a welcome message
    await expect(page.locator('.welcome-message')).toContainText('Welcome');
});