import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { validLoginData } from '../test-data/loginData';

test('successful login', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await page.goto('/practice-test-login/');

  await loginPage.enterUsername(validLoginData.username);

  await loginPage.enterPassword(validLoginData.password);

  await loginPage.clickSubmit();

  await expect(page).toHaveURL(/logged-in-successfully/);

  await expect(
    page.getByText(/Congratulations|successfully logged in/i)
  ).toBeVisible();

  await expect(page.getByText('Log out')).toBeVisible();

});