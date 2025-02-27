import { generateKeyPairSync, publicEncrypt, privateDecrypt } from 'crypto'

const {privateKey, publicKey } = generateKeyPairSync('rsa',
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

//console.log(publicKey);
//console.log(privateKey);

const cryptedData = publicEncrypt(publicKey, Buffer.from("Dummy text."));

console.log(cryptedData.toString('hex'));

// -----------------------------> Transmission <------------------------------

const decypheredData = privateDecrypt(privateKey, cryptedData);

console.log(`Decyphered data: ${decypheredData.toString('utf-8')}`);
