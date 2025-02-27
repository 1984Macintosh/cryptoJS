import { createHash } from 'crypto'

function hashCreator(password) {
    return createHash('sha256').update(password).digest('hex')
}

console.log(hashCreator("Dummy string"))

class User {
    constructor(name, password) {
        this.name = name;
        this.hash = hashCreator(password);
    }

    authentication(name, password) {
        if (name === this.name && this.hash === hashCreator(password)) {
            console.log("User created successfully!");
            return true;
        }
        else {
            console.log("User or password incorrect.");
            return false;
        }
    }
}

const user = new User('Gabriel', '123456');

console.log("User stored like this: ");
console.log(user);

// When successfull
console.log(user.authentication('Gabriel', '123456'));

// When failure
console.log(user.authentication('Gabriel', '123455'));