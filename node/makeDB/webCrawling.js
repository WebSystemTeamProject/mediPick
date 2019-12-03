const axios = require('axios');
const cheerio = require('cheerio');
const client = require('cheerio-httpcli');
const site = "https://nedrug.mfds.go.kr/pbp/CCBBB01/getItemDetail?itemSeq=";
var param = {};
var fs = require('fs');
var fileName = "dataset.txt";
var mediLink;

fs.readFile(fileName,'utf8',function(err,data){
    if(err) throw err;
    mediLink = data.split('\r\n');
});

console.log(mediLink);
/*
client.fetch(site + excel.link[0],param,function(err, $, res){
    if(err){
        console.log(err);
        return;
    }

    $(".r_sec").each(function(post){
        console.log($(this).text());
    })
});*/
// excel.link.length