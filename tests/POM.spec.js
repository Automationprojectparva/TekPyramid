import { test,expect } from "@playwright/test";
const Loginpage=require("../pages/loginApp.spec.js")

test('implementing pom design',async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/")   //locator
    await page.getByText("Log in").click()                  //action for element

    const loginpage= new Loginpage(page)
    await  loginpage.loginToApp()

})

