import { test, expect } from '@playwright/test';
import { registerPage } from '../pages/registerPage';
import credentials from '../test-data/credentials';

test('Should show warning when email is already registered', async ({ page }) => {
  const register = new registerPage(page);

  // Navigate to registration page
  await page.goto(credentials.registerCreds.url2);

  // Perform registration using the page object
  await register.register(credentials.registerCreds);
  const warningText = await register.getEmailWarningText();
  expect(warningText).toContain('Warning: E-Mail Address is already registered!');
});

test('Should register successfully with a new email', async ({ page }) => {
  const register = new registerPage(page); // ✅ Add this line
  await page.goto(credentials.newUser.url3);
  await register.register(credentials.newUser);
});
