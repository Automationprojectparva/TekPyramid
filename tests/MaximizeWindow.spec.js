import { test,expect } from "@playwright/test";

    //option 1   
// test.use({viewport:{width:1080,height:680}})

//option 2 - set up in configuration file

//option 3 - await page.setViewportSize({width:1080,height:650})

test('maximize window',async({page})=>{

    await page.goto("http://www.flipkart.com/")
    await page.pause(3000)

})

//test.use({viewport:{width:1080,height:680}})