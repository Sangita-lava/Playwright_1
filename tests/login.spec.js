// tests/login.spec.test.js

import { test, expect } from '@playwright/test';
import { creds } from '../test-data/credentials';
const {loginPage} =require('../pages/loginPage');

test('test', async ({ page }) => {
  const login =new loginPage(page);
  await login.gotologinPage()
  await login.loginPage()

  // await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
  // await page.getByRole('textbox', { name: 'E-Mail Address' }).fill(creds.emailaddress);
  // await page.getByRole('textbox', { name: 'Password' }).click();
  // await page.getByRole('textbox', { name: 'Password' }).fill(creds.password);
  // await page.getByRole('button', { name: 'Login' }).click();
  // await expect(loginPage.errorMessage).toBeVisible();
});