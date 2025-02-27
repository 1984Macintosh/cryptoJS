import { createCipheriv, randomBytes, createDecipheriv } from "crypto";

const plainText = 'Just a demo';
const key = randomBytes(32);
const initVec = randomBytes(16);

const cypher = createCipheriv('aes256', key, initVec);

const cyphText = cypher.update(plainText, 'utf-8', 'hex') + cypher.final('hex');

console.log(cyphText);

// Transmission ---------------------------------- Should be transmitted key, initVec, plainText

// Decypher message

const decypher = createDecipheriv('aes256', key, initVec);

const decyphText = decypher.update(cyphText, 'hex', 'utf-8') + decypher.final('utf-8');

console.log(decyphText);
