const Keycloak = require('keycloak-connect');

const getPublicKey = require('./getPublicKey');

let _keycloak;

function initKeyCloak() {
    return new Promise((resolve, reject) => {
        getPublicKey()
            .then((pubKey) => {
                let authURL;
                if (process.env.NODE_ENV === 'development') {
                    authURL = `http://${process.env.KEYCLOAK_HOST}:${process.env.KEYCLOAK_PORT}/auth`
                }
                else {
                    authURL = `https://${process.env.KEYCLOAK_HOST}/auth`;
                }

                const keycloakConfig = {
                    clientId : process.env.KEYCLOAK_CLIENT,
                    bearerOnly: true,
                    serverUrl: authURL,
                    realm : process.env.KEYCLOAK_REALM,
                    realmPublicKey: pubKey, 
                };

                if (_keycloak) {
                    console.log("Trying to init Keycloak again!");
                    resolve(_keycloak);
                }
                console.log(`Initializing Keycloak for pid ${process.pid}`);
                _keycloak = new Keycloak({}, keycloakConfig);
                resolve(_keycloak);
            })
            .catch((err) => reject(err));
    });
}
function getKeyCloak(){
    if (!_keycloak) {
        console.error('Keycloak has not been initialized. Please called init first.');
    }
    return _keycloak;
}

module.exports = {
    initKeyCloak,
    getKeyCloak,
};