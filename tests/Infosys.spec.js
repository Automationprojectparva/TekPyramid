import { test,expect } from "@playwright/test";

test('fetch multiple checkbox and click',async({page})=>{

    await page.goto("https://www.amazon.in/")
    await page.locator("//a[text()=' Electronics ']").click()

    await page.waitForSelector("//div[@id='sobe_d_b_ms_6-carousel']")
    let box1=await page.$$("//div[@id='sobe_d_b_ms_6-carousel']")
    // await page.waitForTimeout(3000)

    for(let item1 of box1){
        let so1=await item1.textContent()
        console.log(so1)
    }

    await page.waitForSelector("//div[@id='sobe_d_b_ms_7-carousel']")
    let box2=await page.$$("//div[@id='sobe_d_b_ms_7-carousel']")
    // await page.waitForTimeout(3000)

    for(let item2 of box2){
        let so2=await item2.textContent()
        console.log(so2)
    }
})







