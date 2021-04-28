const axios = require('axios');
const https = require('https');

function getRealmURL() {
    if (process.env.NODE_ENV === 'development') {
        return `http://${process.env.KEYCLOAK_HOST}:${process.env.KEYCLOAK_PORT}/auth/realms/${process.env.KEYCLOAK_REALM}`;
    }
}
module.exports = function getPublicKey() {
    return new Promise((resolve, reject) => {
        let agent;
        if (process.env.NODE_ENV === 'development'){
            agent = axios.create();
        }
        agent
          .get(getRealmURL())
          .then((res) => {
              resolve(res.data.public_key);
          })
          .catch((err) => reject(err));
    })
}