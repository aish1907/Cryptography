var crypto = require('crypto');

var hash = crypto.createHash('sha1');
hash.update("HELLO");
console.log(hash.digest('hex'));