/** @format */

import { initialize } from "./launcher/initialize";
import { wf } from "./writer";
import { genres } from "./generes";
// import { wait } from "./funs";
// import {handellb} from './lnparser'
import { wait } from "./funs";
import { WaitForSelectorOptions } from "puppeteer";

(async () => {
  const page = await initialize();
  // for(let k =39 ; k<genres.length;k++){
  let finale: any = {};
  // let max = genres[k][1] as number
  for (let i = 1;i<10 ; i++) {
    await page.goto(
      `https://rateyourmusic.com/charts/top/album/all-time/g:noise-rock/${i}/`
    );

    // await wait(5);
    let sec = await page.waitForSelector('[id="page_sections_charts"]');

    await wait(3);

    // await page.evaluate(()=>{
    //   let fish = (arg:string) => {
    //     return document.querySelector(arg);
    //   };
    //   let fishes = (arg:string) => {
    //     return document.querySelectorAll(arg);
    //   };
    //   let bod = fish('body');
    //   bod?.animate({transform:"translateY(-95%)"},{fill:"forwards" , duration:14000});
    // });

    // await wait(16)

    let some = await page.evaluate(() => {

      
      
      
      let some = [];
      let a = document.querySelector('[id="page_charts_section_charts"]');
      let bs = a?.querySelectorAll(".anchor");
      let artists = bs
        ? Array.from(bs).map(
            (q) =>
              q
                ?.querySelector(".artist")
                ?.querySelector("span")
                ?.querySelector("span")?.textContent
          )
        : ["none"];

      let handellb = (a: Element) => {
        let name = a.querySelector(
          '[class="ui_name_locale_original"]'
        )?.textContent;
        let rating = a.querySelector(
          '[class="page_charts_section_charts_item_details_average_num"]'
        )?.textContent;
        let date = a
          .querySelector('[class="page_charts_section_charts_item_date"]')
          ?.querySelector("span")?.textContent;
        // let img = a.querySelector("img")?.src;
        let b = a.querySelector(
          '[class="page_charts_section_charts_item_genres_primary"]'
        )?.children;
        let mainGenres: any;
        if (b) {
          let mainGenres = Array.from(b).map((q) => q.textContent);
        } else {
          let mainGenres = [];
        }
        // let  qq = a.querySelector('.ui_media_link_btn_spotify') as HTMLAnchorElement;
        // let spotifyLink = qq?.href;

        let full = {
          name: name,
          // imgSrc: img,
          date: date,
          rating: rating,
          genres: mainGenres,
          // spotifyLink: spotifyLink,
        };
        return full;
      };
      if (bs) {
        let cs = Array.from(bs);
        for (let b of cs) {
          if (b) {
            let gg = handellb(b);
            some.push(gg);
          }
        }
      }

      //

      return some;
    });
    let artists = await page.evaluate(() => {
      let a = document.querySelector('[id="page_charts_section_charts"]');
      let bs = a?.querySelectorAll(".anchor");
      let artists = bs
        ? Array.from(bs).map(
            (q) =>
              q
                ?.querySelector(".artist")
                ?.querySelector("span")
                ?.querySelector("span")?.textContent
          )
        : ["none"];
      return artists;
    });
    for (let i = 0; i < artists.length; i++) {
      let point = artists[i];
      if (point) {
        if (finale[`${point}`]) {
          finale[`${point}`].push(some[i]);
        } else {
          finale[`${point}`] = [some[i]];
        }
      }
    }
  }
  wf(finale,`noise-rock9`)

})();
