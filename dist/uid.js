import { randomBytes } from 'crypto';
const UID_CHARS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
export function uid(length = 32, chars = UID_CHARS) {
    let bytes = randomBytes(length);
    let r = [];
    for (let byte of bytes) {
        r.push(chars[byte % chars.length]);
    }
    return r.join('');
}
