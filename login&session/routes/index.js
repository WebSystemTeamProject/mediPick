var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');

var main = require('./main/main');
var join = require('./join/index');
var login = require('./login/index');
var logout = require('./logout/index');

/*router.get('/',function(req,res){
  res.sendFile(path.join(__dirname,"../public/main.html"))
})*/
router.use('/',login);
router.use('/main',main);
router.use('/join',join);
router.use('/login',login);
router.use('/logout',logout);

module.exports = router;

