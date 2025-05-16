import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';

test('valid login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('https://www.facebook.com/'); // Replace with actual URL

    await loginPage.login('testuser', 'password123');

    // assert that the title contains "Facebook" or the expected title
    await expect(page).toHaveTitle(/Facebook/); // Update as per your website's title
});