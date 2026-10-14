const crypto = require('crypto');

function getUuid4(isAuthorized) {
    if (typeof isAuthorized !== 'boolean') {
        throw new Error('isAuthorized must be a boolean');
    }
    if (!isAuthorized) {
        throw new Error('Unauthorized');
    }
    return crypto.randomUUID();
}

let uuid = getUuid4(true);

function cookieWrite(uuid){
    document.cookie = `uuid=${uuid}; path=/; secure; SameSite=Strict`;
}