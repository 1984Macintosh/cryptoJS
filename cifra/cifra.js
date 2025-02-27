const plainText = "Thisismysecretmessage";

console.log(plainText);

function messageCipher(message, shifts) {
    const ciphMessage = message.split('').map( character => {
        const charCode = character.charCodeAt(0);
        return String.fromCharCode( charCode + shifts );
    } )
    return ciphMessage.join('');
}

function messageDecipher(message, shifts) {
    const ciphMessage = message.split('').map( character => {
        const charCode = character.charCodeAt(0);
        return String.fromCharCode( charCode - shifts );
    } )
    return ciphMessage.join('');
}

const ciphMessage = messageCipher(plainText, 3)

const deciphMessage = messageDecipher(ciphMessage, 3)

console.log(ciphMessage);
console.log(deciphMessage)