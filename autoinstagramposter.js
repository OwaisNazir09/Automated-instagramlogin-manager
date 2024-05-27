const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        await page.goto("https://www.instagram.com");

     
        await page.type('input[name="username"]', "yourEmail");

    
        await page.type('input[name="password"]', "yourpassword");

        await Promise.all([
            page.waitForNavigation(), 
            page.click('button[type="submit"]'), 
        ]);
        await Promise.all([
            page.waitForNavigation(), 
            page.click('button[type="button"]'),
        ]);
        await page.waitForSelector('._a9--._ap36._a9_1'); 
        await page.click('._a9--._ap36._a9_1'); 
        let counter = 0;
        const interval = setInterval(async () => {
            if (counter < 10) {

                await page.evaluate(() => {
                    window.scrollBy(5, window.innerHeight);
                });
                counter++;
            } else {
                clearInterval(interval); 
            }
        }, 1000);
    }
        
      catch (error) {
        console.error("An error occurred:", error);
    }
})();
