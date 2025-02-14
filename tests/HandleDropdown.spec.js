import { test,expect } from "@playwright/test";

test('handling drop down',async({page})=>{

    await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
    await page.locator("#select2").selectOption("Male")

    await page.waitForTimeout(1000)
    
    await page.locator("#select3").selectOption("India")

    //await page.waitForTimeout(1000)

   // await page.waitForSelector("#select3 option")

    const countries=await page.$$("#select3 option");
    let country=[]
    for(let value of countries){
        const good=await value.textContent()
       country.push(good)
        // console.log(good);
    }
    
   console.log(country)

    await expect(country.includes("Germany")).toBeTruthy()
})

test('multi element dropdown',async({page})=>{

    await page.goto("https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1")

    await page.waitForSelector("(//*[@id='select-multiple-native'])[1]")

    await page.locator("(//*[@id='select-multiple-native'])[1]").selectOption(["Running Shoes","Casual Pants"])

    await page.waitForTimeout(1000)

    await page.click("//button[text()='Add']")

    await page.waitForTimeout(5000)
    
})


