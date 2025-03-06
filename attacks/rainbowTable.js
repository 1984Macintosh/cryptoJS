import { createHash } from "crypto";

function crtHash(data, strategy) {
    return createHash(strategy).update(data).digest('hex');
}

const commonPwd = ["password", "123456", "password123", "admin", "blink182","myBirthday", "password123456", "brasil", "102030"];

const rainbowTable = commonPwd.map( password => {
    return [password, crtHash(password, "MD5")]
})

console.log(rainbowTable);

const leakedHashes = ["21232f297a57a5a743894a0e4a801fc3",
    "cedf5ab7b5c5852b3ed35d7dbe3c3835",
    "81dc9bdb52d04dc20036dbd8313ed055"]

leakedHashes.map( leakedHash => {
    rainbowTable.map( peer => {
        if (leakedHash === peer[1]) {
            console.log(`Password found: hash ${leakedHash} it's equal to ${peer[0]}.`);
        }
    })
})
