import { test,expect } from "@playwright/test";
const testdata=JSON.parse(JSON.stringify(require("../testLogin.json")))

test.describe('read multiple data', function(){

    for(const value of testdata){
        test.describe('login for Demowebshop',function(){

            test(`login to App ${value.id}`,async({page})=>{

                await page.goto("https://demowebshop.tricentis.com/")
                await page.getByText("Log in").click()

                await page.locator("#Email").fill(value.username)
                await page.locator("#Password").fill(value.password)
            });

        })
    }
})