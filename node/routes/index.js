var express = require('express');
var router = express.Router();
const db = require('../database');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/searchMedicine', async function(req,res){ // body로 넘겨준 값을 가지고 맞는 디비 리스트를 json 형식으로 보내줌
  //console.log(req.body);
  const regex = new RegExp(req.body.search);
  const result = await db.model.find({efficacy: regex});
  res.json(result);
})
module.exports = router;
