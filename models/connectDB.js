mongoose = require('mongoose')

function connectToDB(dbUrl){
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
