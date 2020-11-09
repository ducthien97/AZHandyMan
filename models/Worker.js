const mongoose = require("mongoose");
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
        default: "Annonymous Customer"
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
        type: Number,
        required: true
    },
    expertise:{
        type: String,
        default: "Unavailable"
    }
})
module.exports = Job = mongoose.model("job", JobSchema)
module.exports = WorkerS = mongoose.model("worker", WorkerSchema)