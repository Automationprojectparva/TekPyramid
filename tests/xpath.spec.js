import { test,expect } from "@playwright/test";

test('login into application',async({page})=>{

    await page.goto("https://www.amazon.in/")
    await expect(page).toHaveURL("https://www.amazon.in/")
    // await page.waitForTimeout(10000)

    await page.click("//a[text()=' Electronics ']")
    // await page.waitForTimeout(10000)

    
    let laptop= await page.locator("//span[text()='Laptops']")
    await page.waitForSelector(laptop)
    let headphones= await page.locator("//span[text()='Headphones']")
    await page.waitForSelector(headphones)

    //Assertions
    await expect(laptop).toBeVisible()
    await expect(headphones).toBeVisible()
})