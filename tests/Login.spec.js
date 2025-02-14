import {test,expect} from "@playwright/test";

test('login application',async ({page})=>{

    await page.goto('https://demowebshop.tricentis.com/')
    await page.click('//a[text()="Log in"]')
    
    await page.fill("id=Email",'pradeepparva@gmail.com')
    await page.fill("id=Password",'pp00123')
    await page.click('id=RememberMe')
    await page.click('input[class="button-1 login-button"]')

    
});