const axios = require('axios');
const cheerio = require('cheerio');
const client = require('cheerio-httpcli');
const site = "https://nedrug.mfds.go.kr/pbp/CCBBB01/getItemDetail?itemSeq=";
var param = {};
var fs = require('fs');
var fileName = "dataset.txt";
var mediLink;

fs.readFile(fileName,'utf8',async function(err,data){
    if(err) throw err;
    mediLink = await data.split('\r\n');
    for(let k = 0; k<5; k++){
        await client.fetch(site + mediLink[k],param,function(err, $, res){
            if(err){
                console.log(err);
                return;
            }
            var arr;
            var nameArr;
            var medicineName;
            var re = /(\s|\||:)+/;
            var newArr = [];
            $(".inner").each(async function(post){
                nameArr = await $(this).find(".title").find("strong").text();
                medicineName=nameArr.substring(0,nameArr.length/2);
            })
            $(".drug_content").each(async function(post){
                arr = await $(this).text().split(re);
                for(let i = 0; i<arr.length; i++){
                    if(arr[i]===' '|| arr[i]==='' || arr[i] === '\n' || arr[i] === '\xA0') continue;
                    newArr.push(arr[i]);
                }
            })
            
        });
    }
});
/*
;*/
// excel.link.length