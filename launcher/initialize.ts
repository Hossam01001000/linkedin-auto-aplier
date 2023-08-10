/** @format */

import puppeteer from "puppeteer";
import 'dotenv/config';
const udd = process.env.UDD!= undefined? process.env.UDD:'/data'
const noHead = process.env.HEADLESS ==='true'?true:false;
const timeLimit = process.env.TIME_LIMIT!= undefined? parseInt(process.env.TIME_LIMIT)*60000:20*60000
const initialize = async () =>{
  const browser = await puppeteer.launch({
    protocolTimeout: timeLimit,
    userDataDir: udd,
    defaultViewport: null,
    headless: noHead,
  });

  let page = await browser.newPage();
  page.setDefaultNavigationTimeout(120000);

  // try {
  //   await page.goto(
  //    url
  //   );
  // } catch(e) {
  //   console.log("an error occured during launching the browser"+ e);
  // }
  return(page)
}
export{initialize}