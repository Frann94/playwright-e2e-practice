import { test } from '@playwright/test';

test.use({ storageState: { cookies: [], origins: [] } });

test('Test web table', async ({ page }) => {
    await page.goto('https://cosmocode.io/automation-practice-webtable/');

    const tableContainer = await page.locator('//table[@id=\'countries\']');
    const rows = await tableContainer.locator('//tr').all();
    const countries: Country[] = [];

    for(let row of rows){
        let country: Country = {
            name: await row.locator('//td[2]').innerText(),
            capital: await row.locator('//td[3]').innerText(),
            currency: await row.locator('//td[4]').innerText(),
            language: await row.locator('//td[5]').innerText(),
        };
        countries.push(country);
    }

    const countryWherePeopleSpeakPortuguese = countries.filter(country => country.language === 'Portuguese');
    console.log('Countries where people speak portugues', countryWherePeopleSpeakPortuguese.length);
});


interface Country{
    name:string,
    capital:string,
    currency:string,
    language:string
}