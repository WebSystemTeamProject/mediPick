var mongoose = require('mongoose');
const autoInc = require('mongoose-auto-increment');
mongoose.set('useCreateIndex',true);
mongoose.set('useFindAndModify', false);

mongoose.connect('mongodb+srv://admin:helloworld@medicinedb-txqna.mongodb.net/mediPick?retryWrites=true&w=majority',{
    useUnifiedTopology:true, useNewUrlParser:true
});

const conn = mongoose.connection;
autoInc.initialize(conn);

const newreviewSchema = new mongoose.Schema({
    content : String,
    email : String,
    time : String,
    medi_id : Number
})
//Database setting

newreviewSchema.plugin(autoInc.plugin,"newreviewlist");
const reviewlist = mongoose.model('newreviewlist',newreviewSchema);

module.exports = reviewlist;