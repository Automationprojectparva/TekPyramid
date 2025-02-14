import { test,expect } from "@playwright/test";

test('locate all links in page', async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/camera-photo")

    // const links=await page.$$('a');

    // for(const link of links){
    //     const linktext=await link.textContent();
    //     console.log(linktext);
    // }

    await page.waitForSelector("h2[class='product-title']");
    const products=await page.$$("h2[class='product-title']")

    for(const product of products){
        const productlist=await product.textContent()
        console.log(productlist);
    }

})