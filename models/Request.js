const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RequestSchema = new Schema({
    workerContacted: {
        type: String,
        require: true
    },
    customerName :{
        type: String,
        required: true
    },
    customerEmail: {
        type: String,
        required: true,
    },
    customerPhone: {
        type: String,
        required: true
    },
    customerZIP: {
        type: String,
        required: true
    },
    serviceNeeded: {
        type: String,
    },
})
module.exports = Item = mongoose.model('request', RequestSchema);