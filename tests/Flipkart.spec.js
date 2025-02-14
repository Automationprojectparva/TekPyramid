import { test,expect } from "@playwright/test";

test('login',async({page})=>{
    await page.goto("https://www.makemytrip.com/")
   
    await page.click("//span[@class='commonModal__close']");
    
    await page.click("//label[@for='departure']");
    
    await page.waitForSelector("(//div[@class='DayPicker-Month'])[1]/descendant::p[@class=' todayPrice']");
    let allPrice=await page.$$("(//div[@class='DayPicker-Month'])[1]/descendant::p[@class=' todayPrice']");

    let lowestprice=[]
    for(let price of allPrice){
        let pro=await price.textContent();
        lowestprice.push(pro);
    }
    
    await lowestprice.sort();
    console.log(lowestprice);
    
    await page.click(`//p[.="${lowestprice[0]}"]`);
    await page.pause(3000);
    console.log(lowestprice[0]);
    
})