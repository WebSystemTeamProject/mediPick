var mongoose = require('mongoose');
var autoInc = require('mongoose-auto-increment');
mongoose.connect("mongodb+srv://admin:helloworld@medicinedb-txqna.mongodb.net/mediPick?retryWrites=true&w=majority");

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('mongoose connected')
});
autoInc.initialize(db);

const medicineSchema = new mongoose.Schema({
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
    comment:{
        type: Number,
        default: 0
    },
    price:{
        type: String,
        default: "정보 없음"
    }
});
const companySchema = new mongoose.Schema({
    company: String
});
medicineSchema.plugin(autoInc.plugin, 'medicine');

const medicineModel = mongoose.model('medicine',medicineSchema);
const companyModel = mongoose.model('company',companySchema);
//medicineModel.create({}).
module.exports = { mediModel: medicineModel, compModel: companyModel}