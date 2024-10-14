import { test, expect } from '@playwright/test';

test.use({ storageState: 'playwright/.auth/standardUser.json' });

test('purchase an item with standardUser', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/inventory.html");

    const itemsContainer = await page.locator('#inventory_container .inventory_item').all();
    const randomIndex = Math.floor(Math.random() * itemsContainer.length);
    const randomItem = itemsContainer[randomIndex];

    const expectedDescription = await randomItem.locator('.inventory_item_desc').innerText();
    const expectedName = await randomItem.locator('.inventory_item_name').innerText();
    const expectedPrice = await randomItem.locator('.inventory_item_price').innerText();

    console.log(`Price: ${expectedPrice} Name: ${expectedName} Description: ${expectedDescription}`);

    await randomItem.getByRole('button', {name:'Add to cart'}).click();
    await page.locator('a.shopping_cart_link').click();
    await expect(page.getByRole('button', {name: 'Checkout'})).toBeVisible();

    const actualName = await page.locator('.inventory_item_name').innerText();
    const actualDescription = await page.locator('.inventory_item_desc').innerText();
    const actualPrice = await page.locator('.inventory_item_price').innerText();

    expect(actualName).toEqual(expectedName);
    expect(actualDescription).toEqual(expectedDescription);
    expect(actualPrice).toEqual(expectedPrice);

    await page.getByRole('button', {name: 'Checkout'}).click();
    await page.getByRole('textbox', {name:'First Name'}).fill('John');
    await page.getByRole('textbox', {name:'Last Name'}).fill('Doe');
    await page.getByRole('textbox', {name:'Zip/Postal Code'}).fill('1234');

    await expect(page.getByRole('button', {name:'Continue'})).toBeVisible();
    await page.getByRole('button', {name:'Continue'}).click();
    await page.getByRole('button', {name:'Finish'}).click();

    await expect(page.getByRole('heading', {name: 'Thank you for your order!'})).toBeVisible();
});