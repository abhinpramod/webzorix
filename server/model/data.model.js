const mongoose= require('mongoose')

const dataSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String},
    message:{type: String}
    
});

module.exports = mongoose.model('Data', dataSchema);