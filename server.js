const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const mongoose = require('mongoose');
const db =
  'mongodb+srv://tduong:6pHOU9dHDmePpVO0@cluster0.madns.mongodb.net/test?retryWrites=true&w=majority';
//const db = 'mongodb+srv://<username>:<password>@cluster0.madns.mongodb.net/<dbname>?retryWrites=true&w=majority';
//const courses = require('./routes/api/courses');
const admins = require('./routes/api/admins');
const students = require('./routes/api/students');
const requests = require('./routes/api/requests');
const auth = require('./routes/api/auth');
const bodyParser = require('body-parser');
const workers = require('./routes/api/workers');
const { request } = require('express');
app.use(bodyParser.json());
mongoose
  .connect(db, {
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
//app.use('/api/items', items);
app.use('/api/admins', admins);
app.use('/api/auth', auth);

//app.use('/api/courses', courses);
app.use('/api/workers', workers);
app.use('/api/students', students);
app.use('/api/requests', requests);
app.listen(5000, function (err) {
  console.log('route working');
});
