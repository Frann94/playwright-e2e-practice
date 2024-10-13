import { test, expect } from '@playwright/test';

test('Search for product', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.ar/');
  await page.locator('input[id=cb1-edit]').fill('Iphone');
  await page.keyboard.press('Enter');

  await expect(page.locator('//ol[contains(@class, \'ui-search-layout\')]')).toBeVisible();
  const titles = await page.locator('//ol[contains(@class, \'ui-search-layout\')]//li//h2').allInnerTexts();

  console.log('Total products: ', titles.length);
  for(let title of titles) {
    console.log('Title: ', title);
  }
});

test('Buy history', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.ar/');
  await page.getByRole('link', {name: 'Mis compras'}).click();
});

test('Log In', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.ar/');
  await page.getByRole('link', {name: 'Ingresá', exact: true}).click();
});
