const express = require('express');
const cors = require('cors');
const os = require('os');
const cluster = require('cluster')
const bodyParser = require('body-parser');

const connectDB = require('./models/connectDB')

const app = express();
app.use(cors());
app.use(bodyParser.json());
const mongoose = require('mongoose');

const admins = require('./routes/api/admins');
const requests = require('./routes/api/requests');
const auth = require('./routes/api/auth');
const workers = require('./routes/api/workers');

const PORT = process.env.PORT || 4200;

function registerEnvironmentVariables() {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line global-require
    require('dotenv').config();
  }
}

registerEnvironmentVariables();
connectDB()




app.use('/api/admins', admins);
app.use('/api/auth', auth);
app.use('/api/workers', workers);
app.use('/api/requests', requests);

app.listen(5000, function (err) {
  console.log('route working');
});
