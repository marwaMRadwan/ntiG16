const mongoose = require("mongoose")
const dbUrl = "mongodb://localhost:27017/mongooseS9"
mongoose.connect(dbUrl)

const user = mongoose.model("user", {
    name:{
        type: String,
        trim:true,
        required:true,
        minlength:3,
        maxlength:20,
        lowercase:true
    },
    age:{
        type:Number,
        default:21
    },
    email:{
        type: String,
        trim:true,
        required:true,
        minlength:3,
        maxlength:20,
        lowercase:true,
        unique:true
    }
}) 

const userData = new user({name:"ma", age:36, email:"marwa@techs.com"})
userData.save()
.then((res)=> console.log(res))
.catch(e=> console.log(e.message))