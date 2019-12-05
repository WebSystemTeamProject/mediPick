var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');


//main page는 login이 됐을때만 렌더링
router.get('/',function(req,res){ //localhosd:3000/main url에서도 main.html을 보이게해줌console.log('main js loaded');
    if(!req.user)return res.json({trig : false});
    console.log('main js loaded',req.user); // user로 session에 저장된 정보 접근
    var email = req.user;
    console.log('in the main : '+email);
    if(!email) res.render('login.ejs');
    res.json({trig : true,'user' : req.user});
});


//user의 recommend 불러오기
router.post('/update',function(req,res){
    console.log("update,req.body :" ,req.body.user);
    var user;
    req.login(req.body.user,function(err){
        console.log('update user');
    }) // session 갱신
    //console.log("req.user : ",req.user);
    res.json(req.user);
})

module.exports = router;