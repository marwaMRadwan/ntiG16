require("./db/connection")
const userModel = require("./db/models/user.model")
const userData = new userModel({
    name:"marwa", 
    age:36, 
    email:"nouran@techs.com"
})
userData.save()
.then((res)=> console.log(res))
.catch(e=> console.log(e.message))