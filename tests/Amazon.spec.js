import { test,expect } from "@playwright/test";

test('Amazon login',async({page})=>{
    
    //Launching the Application URL 
    await page.goto("https://www.amazon.in/")

    //Validating whether expected page is opened
    await expect(page).toHaveURL("https://www.amazon.in/")
    await expect(page.getByLabel("Amazon.in")).toBeTruthy()
   

    //clicking on Electronics Tab
    await page.click("//a[text()=' Electronics ']")
    await page.waitForTimeout(2000)

    //Storing the locator to the variable
    let laptop=await page.locator("//span[text()='Laptops']")
    let headphones=await page.locator("//span[text()='Headphones']")

    //verifying the expected products are available in the page 
    await expect(laptop).toBeVisible()
    await expect(headphones).toBeVisible()

})

test.only('atoz',async({page})=>{

    await page.goto("https://www.amazon.in/")
    await expect(page).toHaveURL("https://www.amazon.in/")

    await page.waitForSelector("//a[text()=' Electronics ']")
    await page.click("//a[text()=' Electronics ']")

    const laptop=await page.locator("//span[text()='Laptops']")
    const headphones=await page.locator("//span[text()='Headphones']")

    expect(laptop).toBeVisible()
    expect(headphones).toBeVisible()

})