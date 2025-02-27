import { generateKeyPairSync, createSign, createVerify } from 'crypto';

const { privateKey, publicKey } = generateKeyPairSync('rsa',
    {
        modulusLength: 2048,

        publicKeyEncoding: {
            type: 'spki',
            format: 'pem',
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem',
        },
    }
)


let data = "Dummy text.";

// Signature

const signer = createSign('rsa-sha256');

signer.update(data);

const signature = signer.sign(privateKey, 'hex');

console.log(`Signature: ${signature}`);

// Middle man

//data += 'H4ck3d by'; if enabled, verifier will return false

// Data sent --------------------- Document, signature, public key

const verifier = createVerify('rsa-sha256');

verifier.update(data);

const verified = verifier.verify(publicKey, signature, 'hex');

console.log(verified);

