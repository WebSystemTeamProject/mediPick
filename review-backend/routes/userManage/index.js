var express = require('express');
var router = express.Router();
var path = require('path');
const User = require("../user/index");


router.post('/update',async function(req,res){
    var body = req.body;
    var result_user;
    await User.update({email : body.user.email},{$set : body.user});
    result_user = await User.findOne({email : body.user.email});
    console.log("result",result_user);
    res.json(result_user);
})

module.exports = router;