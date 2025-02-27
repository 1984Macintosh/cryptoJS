import { scryptSync, randomBytes, timingSafeEqual } from "crypto";

function saltHashCreator(password) {
    const salt = randomBytes(16).toString('hex');

    const hashedPassword = scryptSync(password, salt, 64).toString('hex');

    return `${salt}:${hashedPassword}`
}

class User {
    constructor(name, password) {
        this.name = name;
        [this.salt, this.hash] = saltHashCreator(password).split(':')
    }
    authenticator(name, password){
        if (name === this.name) {
            const hashTest = scryptSync(password, this.salt, 64);
            const realHash = Buffer.from(this.hash, 'hex');

            const hashesMatch = timingSafeEqual(hashTest, realHash);

            if (hashesMatch) {
                console.log("User successfully authenticated");
                return true;
            }
        }
        console.log("User or password incorrect.");
        return false;
    }
}

const gab = new User('Gabriel', '123456');

console.log(gab);

//Success case

gab.authenticator('Gabriel', '123456');

// Failure case

gab.authenticator('Jhon Doe', '123456');