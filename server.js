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

require('./config/keycloak-config.js')
  .initKeyCloak()
  .then((keycloak) => {
    function registerMiddleware(){

    }
  })
    function getNumWorkers() {
      // console.log(os.cpus());
      return os.cpus().length;
    }
    function forkWorkers() {
      for (let i = 0; i < getNumWorkers(); i++) {
        // console.log(cluster);
        
        cluster.fork();
        console.log("forking worker");
        // console.log(cluster.workers.length);   
      }

      cluster.on('exit', (worker) => {
        logWarning(`Worker ${worker.id} has exited`);
      })
    }



connectDB(process.env.MONGO_URL)

function startWorker() {
  app.use('/api/admins', admins);
  app.use('/api/auth', auth);
  app.use('/api/workers', workers);
  app.use('/api/requests', requests);
  app.listen(3000, function (err) {
    console.log('route working');
    console.log('Worker: ' + process.pid);
  });
}





function isRunningMasterProcess() {
  if (cluster.isMaster){
    forkWorkers();
    console.log(`Master ${process.pid} is running`);
  }
  else {
    startWorker()
    console.log(`Worker ${process.pid} is running`);
  }
}


function runApp() {
  if (getNumWorkers() > 1) {
    isRunningMasterProcess();
  } else {
    startWorker();
  }
  
}
runApp()