import { test,expect } from "@playwright/test";

    //option 1   
// test.use({viewport:{width:1080,height:680}})

//option 2 - set up in configuration file

test('maximize window',async({page})=>{

    await page.goto("http://www.flipkart.com/")
    await page.pause(3000)

})

//test.use({viewport:{width:1080,height:680}})