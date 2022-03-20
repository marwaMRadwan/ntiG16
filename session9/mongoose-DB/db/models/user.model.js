const validator = require("validator")
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
        default:21,
        validate(value){
            if(value<21) throw new Error ("age must be greater than 21")
        }
    },
    email:{
        type: String,
        trim:true,
        required:true,
        lowercase:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)) 
                throw new Error("invalid Email format")
        }
    },
    addresses:[
        {
            addrType:{type:String},
            addrDetails:{type:String}
        }
    ]
}) 
module.exports = user
