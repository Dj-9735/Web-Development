const port = 8000;
const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const { response } = require("express");

const app = express();

const url = "https://time.com/";

app.get('/',(req,resp)=>{
    res.json('webinfo')
})

axios(url)
.then(response=>{
    const html = response.data;
    const $ = cheerio.load(html);
    const article = [];
    $('.taxonomy-tout',html).each(function(){
        const title = $(this).text();
        const link = $(this).find('a').attr('href');
        article.push({
            title,
            link
        })
    })
    console.log(article);
}).catch(error=>console.log(error));

app.listen(port,()=>console.log(`Server is running at port ${port}`));