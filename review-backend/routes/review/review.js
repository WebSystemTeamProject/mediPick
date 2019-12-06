var express = require('express');
var router = express.Router();
var reviewList = require("../reviewDB/index");
//router
router.post('/list',async function(req,res){
    console.log("list here!");
    var list = [];
    console.log("id?? : ",req.body.id);
    list = await reviewList.find({medi_id : req.body.id});
    console.log("list1234 : ",list);
    res.json(list);
})

router.post('/submit',function(req,res){
    var body = req.body;
    //console.log("bdoy !!! " ,body.id);
    new reviewList({
        content : body.content,
        email : body.email,
        time : body.time,
        medi_id : body.id
    }).save(err=>console.log("review err",err));
    res.end();
})

router.post('/comment',async function(req,res){
    var comment;
    comment = await reviewList.find({medi_id : req.body.id});
    res.json({cnt : comment.length});
})

router.post('/remove',async function(req,res){
    await reviewList.remove({_id : req.body.id});
    res.end();
})

module.exports = router;









