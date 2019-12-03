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
    code: String,
    company: String,
    price: String
});

medicineSchema.plugin(autoInc.plugin, 'medicine');
const medicineModel = mongoose.model('medicine',medicineSchema);


module.exports = { model: medicineModel, plugin: medicineSchema };