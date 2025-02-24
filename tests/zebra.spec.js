import { test,expect } from "@playwright/test";

test('practice of playwright',async({page})=>{

   await page.goto("https://demoapps.qspiders.com/ui/fileUpload?sublist=0")
//    await page.click("//div[text()='Drag and drop files or click to select']")
   await page.locator("#fileInput").setInputFiles("./tests/upload/1.-simple-l-shape-kitchen-layout.jpg")
    await page.waitForTimeout(5000)

})

test('multiTabs',async({browser})=>{

    const context=await browser.newContext()
    const page=await context.newPage()

    await page.goto("https://demoapps.qspiders.com/ui/browser?sublist=0")

   const [newPage]=await Promise.all
   (
        [
            context.waitForEvent("page"),
            page.locator("#browserLink1").click()
        ]
    )

    await newPage.waitForTimeout(3000)

    await newPage.locator("#email").fill("pradeep@gmail.com")
    await newPage.waitForTimeout(3000)

})

test('handle Alert',async({page})=>{

    await page.goto("https://demoqa.com/alerts")
    await page.locator("#alertButton").click()

    page.on('dialog',async(d)=>{

        expect(d.type()).toContain("Alert")

        expect(d.message()).toContain("You clicked a button")
        await page.waitForTimeout(2000)
        
        await d.accept()
    })
})

// page.on('dialog',async(t)=> t.accept())

test('handle autosuggestions',async({page})=>{

    await page.goto("https://demoapps.qspiders.com/ui/autocomplete?sublist=0&scenario=1")

    await page.locator("#free-solo-with-text-demo").fill("ind")

    await page.waitForSelector("#free-solo-with-text-demo")

    await page.keyboard.press("ArrowDown")

    await page.keyboard.press("ArrowDown")

    await page.keyboard.press("Enter")
    await page.waitForTimeout(3000)

})

















