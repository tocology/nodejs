'use strict';
const crypto = require('crypto');

module.exports = function(key) {
    this.key = key;
    return {
        encode: (str) => {
            let encoder = crypto.createCipher('aes-256-ctr', this.key);
            return encoder.update(str, 'utf8', 'hex');
        },
        decode: (str) => {
            let decoder = crypto.createDecipher('aes-256-ctr', this.key);
            return decoder.update(str, 'hex', 'utf8');
        }
    }
}
