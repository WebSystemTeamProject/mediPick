var mongoose = require('mongoose');
const autoInc = require('mongoose-auto-increment');
mongoose.set('useCreateIndex',true);
mongoose.set('useFindAndModify', false);

mongoose.connect('mongodb+srv://admin:helloworld@medicinedb-txqna.mongodb.net/mediPick?retryWrites=true&w=majority',{
    useUnifiedTopology:true, useNewUrlParser:true
});

const conn = mongoose.connection;
autoInc.initialize(conn);

const reviewSchema = new mongoose.Schema({
    content : String,
    email : String,
    mediname : String,
    time : String
})
//Database setting

reviewSchema.plugin(autoInc.plugin,"reviewList");
const reviewList = mongoose.model('reviewList',reviewSchema);

module.exports = reviewList;