var express = require('express');
var router = express.Router();

const mongoose = require('mongoose')
const conn = mongoose.connect('mongodb+srv://admin:helloworld@medicinedb-txqna.mongodb.net/test?retryWrites=true&w=majority',
    { useUnifiedTopology: true, useNewUrlParser: true})
const autoInc = require('mongoose-auto-increment')
autoInc.initialize(mongoose.connection)
var Schema = mongoose.Schema;

const searchSchema = new mongoose.Schema ({
    part: String,
    symptom: String,
    url: String,
    mdsCd: String
});

searchSchema.plugin(autoInc.plugin, {
    model: 'SearchTable'
})
var SearchTable = mongoose.model('searchTable', searchSchema)

router.get('/:idx', async function (req, res, next) {
    console.log("get succeed")
    var idx = req.params.idx
    var query = {part: idx}
    SearchTable.find(query, function(err, searchTables) {
        if(err) return res.status(500).send({error: 'database failure'});
        console.log(searchTables)
        res.json(searchTables);
    })
});

module.exports = router;
