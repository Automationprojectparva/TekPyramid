import { test , expect } from "@playwright/test";

test('iframe',async({page})=>{

    await page.goto("https://demoapps.qspiders.com/ui/frames/multiple?sublist=2")

    const iframe=await page.frameLocator("(//iframe[@class='w-full h-96'])[1]")

    await iframe.locator("#email").fill("pradeep@gmail.com")

    await page.pause()
})

