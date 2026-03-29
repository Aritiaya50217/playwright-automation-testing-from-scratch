const { test, expect } = require('@playwright/test');

test('Client App Login', async ({ page }) => {
    const productName = 'ZARA COAT 3';
    const userEmail = 'anshika@gmail.com';
    const products = page.locator(".card-body");

    // Login
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill(userEmail);
    await page.locator("#userPassword").fill("Iamking@000");
    await page.locator("[value='Login']").click();

    // เลือกสินค้าและเพิ่มลง Cart
    await page.locator(".card-body b").first().waitFor();
    const count = await products.count();

    for (let i = 0; i < count; i++) {
        const title = await products.nth(i).locator("b").textContent();
        console.log("Product name : ", title);
        if (title.trim().toUpperCase() === productName) {
            await products.nth(i).locator("text=Add To Cart").click();
            break;
        }
    }

    // ไปหน้า Cart
    await page.locator("[routerlink*='cart']").click();
    await page.locator("div li").first().waitFor();

    // ตรวจสอบว่าสินค้าอยู่ใน Cart
    const cartProduct = page.locator("h3", { hasText: productName });
    await expect(cartProduct).toBeVisible();

    // Checkout
    await page.locator("text=Checkout").click();

    // เลือกประเทศ
    await page.locator("[placeholder*='Country']").pressSequentially("ind");
    const dropdown = page.locator(".ta-results");
    await dropdown.waitFor();
    const optionsCount = await dropdown.locator("button").count();
    for (let i = 0; i < optionsCount; i++) {
        const text = await dropdown.locator("button").nth(i).textContent();
        if (text.trim() === "India") {
            await dropdown.locator("button").nth(i).click();
            break;
        }
    }

    // ตรวจสอบอีเมลผู้สั่งซื้อ
    await expect(page.locator(".user__name >> text=" + userEmail)).toBeVisible();
    // Submit order
    await page.locator(".action__submit").click();
    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");

    // เก็บ orderId
    const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log("Order Id:", orderId);

    // ไปหน้า My Orders
    await page.locator("button[routerlink*='myorders']").click();
    await page.locator("tbody").waitFor();
    const rows = page.locator("tbody tr");

    // ตรวจสอบ orderId
    for (let i = 0; i < await rows.count(); i++) {
        const rowOrderId = await rows.nth(i).locator("th").textContent();
        if (orderId.includes(rowOrderId.trim())) {
            await rows.nth(i).locator("button").first().click();
            break;
        }
    }

    const orderIdDetails = await page.locator(".col-text").textContent();
    expect(orderId.includes(orderIdDetails.trim())).toBeTruthy();

    await page.pause();
});
