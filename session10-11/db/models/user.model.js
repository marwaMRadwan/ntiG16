const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
        minlength:2,
        maxlength:25
    },
    email:{
        type:String,
        trim:true,
        lowercase:true,
        unique:true,
        required:true,
        validate(value){
            if(!validator.isEmail(value))
                throw new Error("invalid email format")
        }
    },
    phone:{
        type:String,
        trim:true,
        required:true,
        validate(value){
            if(!validator.isMobilePhone(value, ['ar-EG']))
                throw new Error("invalid phone number")
        }
    },
    password:{
        type:String,
        trim:true,
        required:true,
        minlength:6,
        // match:
        validate(value){
            if(value.includes(this.name))
                throw new Error('week password')
        }
    },
    age:{
        type:Number,
        min:21,
        max:60
    },
    image:{
        type:String,
        trim:true
    },
    gender:{
        type:String,
        trim:true,
        enum:['male', 'female']
    },
    status:{
        type:Boolean,
        default:false
    }
},
    {timestamps:true})

userSchema.pre("save", async function(){
    const user = this
    if(user.isModified("password"))
        user.password = await bcrypt.hash(user.password, Number(process.env.passwordSalt))
})

const User = mongoose.model('User', userSchema)
module.exports = User