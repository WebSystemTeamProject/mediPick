var express = require('express');
var router = express.Router();
const db = require('../mediDB/index');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/search', async function(req,res){ // body로 넘겨준 값을 가지고 맞는 디비 리스트를 json 형식으로 보내줌
  //console.log(req.body);
  const regex = new RegExp(req.body.search);
  const result = await db.mediModel.find({efficacy: regex});
  await res.json(result);
})

router.get('/pharmacy',async function(req,res,next){
  const result = await db.compModel.find();
  console.log('result : ',result);
  await res.json(result);
});

router.post('/api/symptom',async function(req,res,next){
  //console.log(req.body.symptom)
  const regex = new RegExp(req.body.symptom);
  const result = await db.mediModel.find({efficacy: regex});
  //console.log(result);
  await res.json(result);
});

router.post('/pharmacy/name',async function(req,res,next){
  //console.log(req.body.symptom)
  const regex = new RegExp(req.body.name);
  var result = await db.mediModel.find({company: regex});
  if(result.length===0)
     result = await db.mediModel.find({company: req.body.name});
  //console.log(result);
  await res.json(result);
});

router.post('/pharmacy/company',async function(req,res,next){
  console.log(req.body.company)
  const result = await db.mediModel.find({company: req.body.company});
  console.log(result);
  await res.json(result);
});
module.exports = router;
