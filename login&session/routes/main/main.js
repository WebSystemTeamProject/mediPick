var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');


//main page는 login이 됐을때만 렌더링
router.get('/',function(req,res){ //localhosd:3000/main url에서도 main.html을 보이게해줌console.log('main js loaded');
    console.log('main js loaded',req.user); // user로 session에 저장된 정보 접근
    var email = req.user;
    console.log('in the main : '+email);
    if(!email) res.render('login.ejs');
    res.render('main.ejs',{'email' : req.user});
});


module.exports = router;