// const bcrypt = require("bcryptjs");
// let password = "123456"

// bcrypt.hash(password, 8).then(res=>{
//      console.log(res)
//      bcrypt.compare(password, res).then(response=> console.log(response))
    
//     })

// 'abc' => 'kys'

let _id = "623842c88fcbfe52afb07bdc"
const jwt = require("jsonwebtoken")
const token = jwt.sign({_id}, "marwa")
console.log(token)
decoded = jwt.verify(token, "marwa")
console.log(decoded)