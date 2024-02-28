const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://uk.webuy.com/product-detail?id=sappi616ggro2c&categoryName=iphones&superCatName=phones&title=&queryID=8b5677e2c975aed62e1f0ce4b0d6bc25&position=1';

axios.get(url)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);
    const targetClass = "text-xs md-text-sm mr-xxs md-mr-xs font-semibold";
    const data = [];
    
    $(`.${targetClass}`).each((index, element) => {
      data.push($(element).text().trim());
    });

    console.log(response);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
