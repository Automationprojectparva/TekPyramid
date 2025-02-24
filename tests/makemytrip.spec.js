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

test.only('handle calender',async({page})=>{

    await page.goto("https://www.makemytrip.com/")
    await page.locator("//span[@class='commonModal__close']").click()

    await page.locator("//div[@class='flt_fsw_inputBox dates inactiveWidget ']").click()

    await page.waitForSelector("//p[@class=' todayPrice']")
    let prices=await page.$$("//p[@class=' todayPrice']")

    await page.waitForTimeout(3000)

    let array=[]

    for(let price of prices){
       let rate=await price.textContent()
        
        array.push(parseInt(rate.replaceAll(",","")))

    }
    
    array.sort((a,b)=> a-b )
    console.log(array)
    console.log("Minimum price of the month :"+array[0])
    
})