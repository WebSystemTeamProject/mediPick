var express = require('express');
var router = express.Router();
var path = require('path');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const User = require("../user/index");
/* GET home page. */

//router

router.get('/',function(req,res){
    var msg;
    var errMsg = req.flash('error');
    if(errMsg) msg = errMsg;
    console.log('get login url');
    res.json({'message' : msg});
    //res.render('login.ejs',{'message' : msg});
})

passport.serializeUser(function(user,done){
    console.log('passport session save : ',user);
    done(null,user);
});

passport.deserializeUser(function(user,done){
    console.log('passport session get user object : ',user);
    done(null,user);
})


passport.use('local-login',new LocalStrategy({ //local-join 이라는 이름의 Strategy 사용
    usernameField: 'email',
    passwordField: 'password',
    pssReqToCallback: false
}, function(email,password,done) {
    // DB에 있는 email search
    console.log('email : '+email);
    User.findOne({email : email},function(err,user){
        if(err)
            return done(err);
        if(!user)
            return done(null,false,{message : "존재하지 않는 아이디입니다."})
        if(user.password !== password){
            return done(null,false,{message : "비밀번호를 잘못 입력하였습니다."});
        }
        return done(null,user);
    })
    console.log('local-login callback called');
}));



router.post('/',function(req,res,next){
    console.log("login here");
    passport.authenticate('local-login',function(err,user,info){
        if(err) {
            console.log("err : " + err);
            return res.status(500).json(err);
        }
        if(!user) {
            console.log("user : "+user);
            console.log("message : "+info.message);
            return res.json({trig : false, message : info.message});
        }
        req.logIn(user,function(err){
            if(err) return next(err);
            console.log("login :",user);
            return res.json({trig : true, user : user});
        });
    })(req,res,next);
})

module.exports = router;
















