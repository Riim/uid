"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
const UID_CHARS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function uid(length = 32, chars = UID_CHARS) {
    let bytes = crypto_1.randomBytes(length);
    let r = [];
    for (let byte of bytes) {
        r.push(chars[byte % chars.length]);
    }
    return r.join('');
}
exports.uid = uid;
