var express = require('express');
var router = express.Router();
var mediList = require("../mediDB/index");


//router
router.post('/update',async function(req,res){
    await mediList.mediModel.update({_id : req.body.medi_id},{recommend : req.body.recommend});
    res.end();
})

router.post('/update_comment',async function(req,res){
    await mediList.mediModel.update({_id : req.body.medi_id},{comment : req.body.comment});
    res.end();
})

module.exports = router;









