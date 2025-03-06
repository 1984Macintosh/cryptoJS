import jwt from "jsonwebtoken";

const secretKey = "secretKey";

const token = jwt.sign(
    {
        nickname : "Jhon Doe",
        profession: "Developer",
    }, secretKey
)

// Will print following the JWT pattern, which is: header.payload.signature (in hexadecimal)
console.log(token);


const decodedToken = jwt.verify(token, secretKey);

// Will print back the original token + the time in which the token was instanciated
console.log(decodedToken)



