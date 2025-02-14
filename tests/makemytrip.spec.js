import { test,expect,chromium } from "@playwright/test";

test('log in',async()=>{

    const browser = await chromium.launch()
    const context=await browser.newContext()

    const page1=await context.newPage()
    const page2=await context.newPage()

    const allPages=context.pages()

    await page1.goto("https://www.flipkart.com/")

    await page2.goto("https://www.makemytrip.com/")
})
