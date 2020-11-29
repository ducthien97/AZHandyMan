const mongoose = require('mongoose');
const Schema = mongoose.Schema;
    
const JobSchema = new Schema({
    jobName: {
        type: String,
        required: true
    },
    score:{
        type: Number,
        required: true
    },
    customer:{
        type: String,
        default: 'Annonymous Customer'
    },
    jobDescription :{
        type: String,
    }
})
const WorkerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    workerID: {
        type: Number,
        required: true,
        unique: true
    },
    experience: [JobSchema],
    grade: {
        type: Number,
        default: 0
    },
    workerEmail: {
        type: String,
        required: true
    },
    workerPhoneNumber: {
        type: String,
        required: true
    },
    expertise:{
        type: String,
        default: 'Unavailable'
    },
    photo:{
        type: String,
        default: 'https://t4.ftcdn.net/jpg/02/53/46/77/360_F_253467743_1bsisN7PyXQ9OkgAMldI7CiIIf7LfwdX.jpg'
    },
    hourlyCharge:{
        type: Number,
        default: 0.00
    },
    isEditing:{
        type: Boolean,
        default: false
    }
})
module.exports = Job = mongoose.model('job', JobSchema)
module.exports = WorkerS = mongoose.model('worker', WorkerSchema)