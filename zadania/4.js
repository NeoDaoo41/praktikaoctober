const crypto = require('crypto');

const sha256node = (text) => {
   return crypto.createHash('sha256').update(text).digest('hex');
}

sha256node('Hello, world!');