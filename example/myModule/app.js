'use strict';
const Enigma = require('./enigma');
const eng = new Engima('magrathea');

let encodeString = eng.encode("Don't Panic!");
let decodeString = eng.decode(encodeString);

console.log("Encoded: ", encodeString);
console.log("Decoded: ", decodeString);
