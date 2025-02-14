import { test,expect } from "@playwright/test";

test('mouse over action',async({page})=>{

    await page.goto("https://demoapps.qspiders.com/ui/mouseHover?sublist=0")

    await page.getByPlaceholder("Enter Password").fill("Parva@5353")

    await page.locator("//*[@id='demoUI']/main/section/article/aside/div/aside/div/div/form/div[1]/img[2]").hover()

    await page.waitForTimeout(3000)
})

test('mouse over on image',async({page})=>{

    await page.goto("https://demoapps.qspiders.com/ui/mouseHover/mouseHoverimage?sublist=1")

    await page.waitForTimeout(3000)

    await page.getByAltText("order placed").hover()

    await page.waitForTimeout(3000)

})

test('mouse over on tab',async({page})=>{

    await page.goto("https://demoapps.qspiders.com/ui/mouseHover/tab?sublist=3")

    await page.locator("//li[@class='Men p-4 relative']").hover()

    await page.waitForTimeout(3000)

    await page.getByText("Men's Top wear").hover()

    await page.waitForTimeout(3000)

    await page.getByText("Men's T-Shirts").hover()

    await page.waitForTimeout(3000)

    await page.click("//*[@id='demoUI']/main/section/article/aside/div/aside/div/article/div/div[1]/ul/li[1]/section/ul/li[1]/section/ul/li[3]/section/ul/li[2]")

    await page.waitForTimeout(2000)

})