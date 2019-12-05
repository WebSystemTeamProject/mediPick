var express = require('express');
var router = express.Router();
var reviewList = require("../reviewDB/index");
//router
router.post('/list',async function(req,res){
    console.log("list here!");
    var list = [];
    list = await reviewList.find({});
    res.json(list);
})

router.post('/submit',function(req,res){
    var body = req.body;
    new reviewList({
        content : body.content,
        email : body.email,
        mediname : body.mediname,
        time : body.time
    }).save(err=>console.log("review err",err));
    res.end();
})

module.exports = router;









