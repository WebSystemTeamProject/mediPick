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
    //res.sendFile(path.join(__dirname,'../../public/join.html'));
   /* var msg;
    var errMsg = req.flash('error');
    if(errMsg) msg = errMsg;*/
    console.log('execute review.js');
    res.render('review.ejs');
})

router.post('/form',function(req,res){
    console.log("form here");
    res.json({ok : true});
})

router.get('/list',function(req,res){
    console.log("list here");
    res.render('list.ejs');
})

module.exports = router;









