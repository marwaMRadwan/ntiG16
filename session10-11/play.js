const bcrypt = require("bcryptjs");
let password = "123456"

bcrypt.hash(password, 8).then(res=>{
     console.log(res)
     bcrypt.compare(password, res).then(response=> console.log(response))
    
    })

