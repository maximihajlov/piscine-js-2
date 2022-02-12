const puppeteer = require('puppeteer');

async function test(origin, permissions) {
    const browser = await puppeteer.launch({headless: true});

    const context = browser.defaultBrowserContext();
    context.overridePermissions(origin, ['clipboard-writeZZZ'])

    const page = await browser.newPage();
    await page.goto('http://localhost:63342/piscine-js-2/pick-and-click.html')

    await page.waitForSelector('.hue')
    await page.mouse.click(...[100, 100])
    await page.mouse.click(...[200, 200])

    const clipboard = await page.evaluate(() => navigator.clipboard.readText())
    const hslValue = await page.$eval('.hsl', hsl => hsl.textContent)
    console.log(clipboard)
}

test()

