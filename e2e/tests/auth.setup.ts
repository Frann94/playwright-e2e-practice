import { test as setup } from '@playwright/test';
import { LoginPage } from '../pages/saucedemo/login';

// User account for saucedemo app

const standardUserFile = 'playwright/.auth/standardUser.json';
setup('authenticate as standardUser', async ({ page }) => {
    await page.goto(process.env.URL as string);
    const loginPage = new LoginPage(page);
    await loginPage.loginWithCredentials('standard_user', 'secret_sauce');
    await loginPage.checkSuccessfulLogin();

    await page.context().storageState({ path: standardUserFile });
});