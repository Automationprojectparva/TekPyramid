import { test,expect, chromium } from "@playwright/test";

test('Window Handles ',async({browser})=>{

   let context=await browser.newContext();

    const page1=await context.newPage();
    await page1.goto("https://www.google.com/");
    await page1.fill("#APjFqb","selenium");
    await page1.keyboard.press('Enter');
    await page1.pause(2000);

    const [page2]=await Promise.all([
        context.waitForEvent("page2"),
        page1.locator("(//cite[text()='https://www.selenium.dev'])[1]").click()
    ])
})