import { test,expect } from "@playwright/test";

test('inBuilt locators action',async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/")

    //page.getByAltText() to locate an element, usually image, by its text alternative.
    const logo=await page.getByAltText("Tricentis Demo Web Shop");
    console.log(logo);
    expect(logo).toBeVisible();

    //page.getByPlaceholder() to locate an input by placeholder.
    // await page.getByPlaceholder('')
    
    //page.getByRole() to locate by explicit and implicit accessibility attributes.
    await page.getByRole('input',{id:"small-searchterms"}).type('laptops');
    await page.pause(2000);

});