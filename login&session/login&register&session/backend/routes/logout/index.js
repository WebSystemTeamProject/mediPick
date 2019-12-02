var express = require('express');
var app = express();
var router = express.Router();

router.get('/',function(req,res){
    req.logout();
    res.end(); // logout시 login 화면으로 이동
})

module.exports = router;