var mongoose = require('mongoose');
const autoInc = require('mongoose-auto-increment');
mongoose.set('useCreateIndex',true);

mongoose.connect('mongodb+srv://new:helloworld@medicinedb-txqna.mongodb.net/mediPick?retryWrites=true&w=majority',{
    useUnifiedTopology:true, useNewUrlParser:true
});

const conn = mongoose.connection;
autoInc.initialize(conn);

const userSchema = new mongoose.Schema({
    email : String,
    password : String,
    recommend : [],
    gender : String,
    age : String
})
//Database setting

userSchema.plugin(autoInc.plugin,"user");
const User = mongoose.model('user',userSchema);

module.exports = User;