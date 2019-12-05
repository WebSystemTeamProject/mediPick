var express = require('express');
var router = express.Router();
var mediList = require("../mediDB/index");


//router
router.post('/',async function(req,res){
    console.log("mediManage here!");
    var list = [];
    var number= 5;
    list = await mediList.find({company : "일동제약(주)"});
    res.json(list);
})


module.exports = router;









