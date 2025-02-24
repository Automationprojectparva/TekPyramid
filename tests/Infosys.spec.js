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

test('dynamic element action',async({page})=>{

    await page.goto("https://www.amazon.in/")
    let search=await page.locator("#twotabsearchtextbox")
    await search.fill("sunglasses")
    await search.press("Enter")
    
    await page.locator("//div[@id='p_n_feature_two_browse-bin/93770377031']//li[@id='p_n_feature_two_browse-bin/93770416031']//i[@class='a-icon a-icon-checkbox']").check()
    await page.pause()
})

test.only('handling multi browser',async({browser})=>{

    const context =await browser.newContext()
    const page=await context.newPage()

    await page.goto("https://demoapps.qspiders.com/ui/browser?sublist=0")

    const [newPage] = await Promise.all
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





