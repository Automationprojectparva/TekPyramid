const {test,expect}=require('@playwright/test');

test('Home Page',async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");

    const Pagetitle=await page.title();
    console.log(Pagetitle);

    await expect(page).toHaveTitle('Demo Web Shop');

    const pageURL=page.url();
    console.log("page url :",pageURL);
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/");
    await page.close();

});