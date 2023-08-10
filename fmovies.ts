
import puppeteer from "puppeteer";
(async()=>{

    const browser = await puppeteer.launch({
        protocolTimeout: 90000000,
    defaultViewport: null,

    headless: false,

});

let page = await browser.newPage();
await page.goto(
    `https://www.linkedin.com/jobs/search/?currentJobId=3660518268&f_AL=true&f_TPR=r604800&geoId=91000001&keywords=software%20engineer&location=Middle%20East&refresh=true&sortBy=R`
        );
    })()