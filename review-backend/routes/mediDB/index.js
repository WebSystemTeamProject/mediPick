var mongoose = require('mongoose');
const autoInc = require('mongoose-auto-increment');
mongoose.set('useCreateIndex',true);
mongoose.set('useFindAndModify', false);

mongoose.connect('mongodb+srv://admin:helloworld@medicinedb-txqna.mongodb.net/mediPick?retryWrites=true&w=majority',{
    useUnifiedTopology:true, useNewUrlParser:true
});

const conn = mongoose.connection;
autoInc.initialize(conn);

const mediSchema = new mongoose.Schema({
    medicineName: String,
    company: String,
    shape: String,
    activeInGredient: String,
    additive: String,
    efficacy: String,
    dosage: String,
    precautions: String,
    store: String,
    period: String,
    recommend:{
        type: Number,
        default: 0
    },
    price:{
        type: String,
        default: "정보 없음"
    }
})
//Database setting

mediSchema.plugin(autoInc.plugin,"medicines");
const mediList = mongoose.model('medicines',mediSchema);

module.exports = mediList;