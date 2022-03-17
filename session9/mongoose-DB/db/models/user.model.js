const mongoose = require("mongoose")
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
module.exports = user
