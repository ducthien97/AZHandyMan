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
        default: 'https://previews.123rf.com/images/vector2011/vector20111609/vector2011160900023/63151179-handyman-wearing-work-clothes-and-a-belt-with-tool.jpg'
    },
    isEditing:{
        type: Boolean,
        default: false
    }
})
module.exports = Job = mongoose.model('job', JobSchema)
module.exports = WorkerS = mongoose.model('worker', WorkerSchema)