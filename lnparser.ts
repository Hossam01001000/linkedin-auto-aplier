/** @format */

let handellb = (a: Element) => {
  let name = a.querySelector('[class="ui_name_locale_original"]')?.textContent;
  let rating = a.querySelector(
    '[class="page_charts_section_charts_item_details_average_num"]'
  )?.textContent;
  let date = a
    .querySelector('[class="page_charts_section_charts_item_date"]')
    ?.querySelector("span")?.textContent;
    let img = a.querySelector('img')?.src
    let b = a.querySelector('[class="page_charts_section_charts_item_genres_primary"]')?.children
    let mainGenres:any
    if(b){
        let mainGenres = Array.from(b).map((q)=>q.textContent)
    }
    else{
        let mainGenres = []
    };
    let  qq = a.querySelector('.ui_media_link_btn_spotify') as HTMLAnchorElement;
    let spotifyLink = qq?.href;

    let full = {
        name:name,
        imgSrc:img,
        date:date,
        rating:rating,
        genres:mainGenres,
        spotifyLink:spotifyLink
    }
    return(full);


};
export{handellb}
