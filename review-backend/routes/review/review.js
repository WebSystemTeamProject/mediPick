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
    const date = new Date();
    var body = req.body;
    var month = date.getMonth() + 1;
    let time = date.getFullYear()+ "년/" + month + "월/"+date.getDate()+"일/"+date.getHours()+"시 "+date.getMinutes()+"분 "+date.getSeconds()+"초"
    //console.log("bdoy !!! " ,body.id);
    new reviewList({
        content : body.content,
        email : body.email,
        time : time,
        medi_id : body.id,
        gender : body.gender,
        age : body.age
    }).save(err=>console.log("review err",err));
    res.end();
})

router.post('/comment',async function(req,res){
    var comment;
    comment = await reviewList.find({medi_id : req.body.id});
    res.json({cnt : comment.length});
})

router.post('/remove',async function(req,res){
    await reviewList.remove({medi_id : req.body.medi_id,_id : req.body.id});
    res.end();
})

router.post('/update',async function(req,res){
    console.log("body : ",req.body);
    const date = new Date();
    var month = date.getMonth() + 1;
    let time = date.getFullYear()+ "년/" + month + "월/"+date.getDate()+"일/"+date.getHours()+"시 "+date.getMinutes()+"분 "+date.getSeconds()+"초"
    await reviewList.update({medi_id : req.body.medi_id, _id : req.body.id},{content : req.body.comment, time : time});
    res.end();
})

module.exports = router;









