const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    name :{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    RegisterDate: {
        type: Date,
        default: Date.now
    },
})
module.exports = Item = mongoose.model("admin", AdminSchema);