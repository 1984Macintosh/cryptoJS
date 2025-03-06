import { createHash } from 'crypto'

class User {
    constructor(name, password) {
        this.name = name;
        this.hash = this.hashCreator(password);
    }
    
    hashCreator(password) {
        return createHash('sha256').update(password).digest('hex')
    }
    authentication(name, password) {
        if (name === this.name && this.hash === this.hashCreator(password)) {
            console.log("User created successfully!");
            return true;
        }
        else {
           //console.log("User or password incorrect.");
            return false;
        }
    }
}

const user = new User('Gabriel', '1337');

for (let crack = 0; crack < 10000; crack++) {
    if (user.authentication("Gabriel", crack.toString())) {
        console.log(`A senha do usuário é ${crack}`);
    };
}
