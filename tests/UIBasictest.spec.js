const { test, expect } = require('@playwright/test');

test('Browser Context Playwright test', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('#username');
    const password = page.locator("[type='password']");
    const signIn = page.locator("#signInBtn");
    const cardTitles = page.locator(".card-body a");


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
    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);
});

test('UI Controls', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    const userName = page.locator('#username');
    const signIn = page.locator("#signInBtn");
    const dropdown = page.locator("select.form-control");
    const isClickRadio = await page.locator(".radiotextsty").last().isChecked();
    const documentLink = page.locator("[href*='documents-request']");


    await dropdown.selectOption("consult");
    await page.locator(".radiotextsty").last().click();
    await page.locator("#okayBtn").click();
    console.log(isClickRadio);
    await expect(page.locator(".radiotextsty").last()).toBeChecked();
    await page.locator("#terms").click();
    await expect(page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck();
    expect(await page.locator("#terms").isChecked()).toBeFalsy();
    await expect(documentLink).toHaveAttribute("class", "blinkingText");

})