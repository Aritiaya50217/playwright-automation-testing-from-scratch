const { test, expect } = require('@playwright/test');

test.only('Browser Context Playwright test', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('#username');
    const password = page.locator("[type='password']");
    const signIn = page.locator("#signInBtn");


    // chrome - plugins / cookies
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    // css      type , fill
    await userName.fill("rahulshettyacademy");
    await password.fill("Learning@830$3mK2"); // Learning@830$3mK2
    await signIn.click();

    // wait until this locator shown up page
    await expect(page.locator(".alert-danger")).toContainText('Incorrect username/password.');

    // type - fill
    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await signIn.click();
    console.log(await page.locator(".card-body a").first().textContent());
    console.log(await page.locator(".card-body a").nth(1).textContent());


});