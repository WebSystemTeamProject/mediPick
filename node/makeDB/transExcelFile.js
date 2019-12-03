var fs = require('fs');
var fileName = "dataset.txt";
var medLink;
fs.readFile(fileName,'utf8',(err,data)=>{
    if(err) throw err;
    medLink = data.split('\r\n');
});


module.exports = { link: mediLink };