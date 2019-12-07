var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');

var review = require('./review/review');
var main = require('./main/main');
var join = require('./join/index');
var login = require('./login/index');
var logout = require('./logout/index');
var manage = require('./userManage/index');
var mediMange = require('./mediManage/index');
var api = require('./api/index');
/*router.get('/',function(req,res){
  res.sendFile(path.join(__dirname,"../public/main.html"))
})*/
router.use('/api',api);
router.use('/main',main);
router.use('/join',join);
router.use('/login',login);
router.use('/logout',logout);
router.use('/review',review);
router.use('/userManage',manage);
router.use('/mediManage',mediMange);


module.exports = router;

