mongoose = require('mongoose')

const dbUrl = 'mongodb+srv://tduong:6pHOU9dHDmePpVO0@cluster0.madns.mongodb.net/test?retryWrites=true&w=majority';

function connectToDB(){
    mongoose
    .connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(() => {
      console.log('Database hooked');
    })
    .catch((err) => {
      console.log(err);
    });    
}



module.exports = connectToDB
