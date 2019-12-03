var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');
var mysql = require('mysql');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const User = require("../user/index");
//router
router.get('/',function(req,res){
    //res.sendFile(path.join(__dirname,'../../public/join.html'));
    var msg;
    var errMsg = req.flash('error');
    if(errMsg) msg = errMsg;
    console.log('get join url');
    if(msg) {
        res.json({trig : false, message: msg});
    }
    else
        res.json({trig:true});
    //res.render('join.ejs',{'message' : msg});
})

passport.serializeUser(function(user,done){
    console.log('passport session save : ',user.email);
    done(null,user.email);
});

passport.deserializeUser(function(email,done){
    console.log('passport session get email : ',email);
    done(null,email);
})

passport.use('local-join',new LocalStrategy({ //local-join 이라는 이름의 Strategy 사용
        usernameField: 'email',
        passwordField: 'password',
        pssReqToCallback: true
    }, function(email,password,done) {
    // DB에 있는 email search
    User.findOne({email : email},function(err,user){
        if(err)return done(err);
        //console.log(user)
        if(user){
            console.log('existed user');
            return done(null, false,{message : 'your email is already used'})
        }
        else{
            new User({
                email : email,
                password : password
            }).save();
            return done(null,{'email' : email});
        }
    });
    console.log('local-join callback called');
}));


router.post('/',passport.authenticate('local-join',{ //authentic 수행시 local-join 에서 수행
        successRedirect: '/main',
        failureRedirect: '/join',
        failureFlash: true
    })
)


module.exports = router;
















//insert DB 처리
/*router.post('/',function(req,res){
    var body = req.body;
    var email = body.email;
    var name = body.name;
    var passwd = body.password;
    var query = connection.query('insert into user (email,name,pw) values ("'+ email +'","'+name+'","'+passwd +'")',function(err,rows){
        if(err){throw err;}
        console.log("ok db insert");
    })
})*/

/*router.post('/',function(req,res){
    var body = req.body;
    var email = body.email;
    var name = body.name;
    var passwd = body.password;
    var sql = {email : email,name : name,pw : passwd};
    var query = connection.query('insert into user set ?',sql,function(err,rows){
        if(err){throw err;}
        console.log("ok db insert",rows.insertId,name);
        res.render('welcome.ejs',{'name' : name});
    })
})*/ //form 처리
