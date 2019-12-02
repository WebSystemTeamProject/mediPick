var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');
var mysql = require('mysql');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

//Database setting
var connection = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : 'password',
    database : 'jsman'
})

connection.connect();

//router
router.get('/',function(req,res){
    var msg;
    var errMsg = req.flash('error');
    if(errMsg) msg = errMsg;
    console.log('get login url');
    res.render('login.ejs',{'message' : msg});
})

passport.serializeUser(function(user,done){
    console.log('passport session save : ',user.email);
    done(null,user.email);
});

passport.deserializeUser(function(email,done){
    console.log('passport session get email : ',email);
    done(null,email);
})

passport.use('local-login',new LocalStrategy({ //local-join 이라는 이름의 Strategy 사용
    usernameField: 'email',
    passwordField: 'password',
    pssReqToCallback: true
}, function(email,password,done) {
    // DB에 있는 email search
    console.log('email : '+email);
    var query = connection.query('select * from user where email=? AND pw=?',[email,password],function(err,rows){
        if(err)return done(err);
        console.log(rows)
        if(rows.length){
            return done(null,{'email' : email,'name' : rows[0].name});
        }
        else{
            return done(null,false,{'message' : "your login info is wrong"})
        }
    })
    console.log('local-login callback called');
}));



router.post('/',function(req,res,next){
    passport.authenticate('local-login',function(err,user,info){
        if(err)return res.status(500).json(err);
        if(!user) return res.status(401).json(info.message);
        req.logIn(user,function(err){
            if(err) return next(err);
            return res.json(user);
        });
    })(req,res,next);
})

module.exports = router;
















