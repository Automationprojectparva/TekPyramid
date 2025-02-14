import { test,expect } from "@playwright/test";

test('handle Dynamic network Call',async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/")

    const count=await page.locator("//input[@type='radio']").count()

    await expect(count).toBe(4)

    console.log(count);

})

test('wait for loadstate',async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/")

    await page.getByText("Register").click()

    await page.waitForLoadState("networkidle")      //To finish the API calls before going to next action 

    const counts=await page.locator("//input[@type='text']").count()

    expect(counts).toBe(5)
})