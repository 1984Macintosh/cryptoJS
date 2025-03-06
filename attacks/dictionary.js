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

const user = new User('Gabriel', 'password123');

// código omitido

const commonPwd = ["password", "123456", "password123", "admin", "blink182","myBirthday", "password123456", "brasil", "102030"];

commonPwd.map( password => {
    if (user.authentication("Gabriel", password)) {
        console.log(`The password is ${password}`)
    }
}

)
