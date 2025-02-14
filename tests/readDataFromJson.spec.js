import { test,expect } from "@playwright/test";

const testdata=JSON.parse(JSON.stringify(require("../testData.json")))

test('Read data from json file',async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/")
    await page.getByText("Log in").click()

    await page.locator("#Email").fill(testdata.username)
    await page.locator("#Password").fill(testdata.password)

    await page.pause()

})


