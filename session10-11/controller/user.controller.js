const userModel = require("../db/models/user.model")
class User{
    static add = async(req, res)=>{
        try{
            const user = new userModel(req.body)
            await user.save()
            res.status(200).send({
                apiStatus:true,
                data:user,
                message:"user added"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                errors:e.message,
                message:"error in register"
            })
        }
    }
    static all = async(req,res)=>{
        try{
            const users = await userModel.find().sort({email:1})
            res.status(200).send({
                apiStatus:true,
                data:users,
                message:"users fetched"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                errors:e.message,
                message:"error in fetching"
            })
        }
    }
    static single = async(req,res)=>{
        try{
            const user = await userModel.findById(req.params.id)
            // const user = await userModel.findOne({_id:req.params.id})
            // const user = await userModel.find({_id:req.params.id})
            res.status(200).send({
                apiStatus:true,
                data:user,
                message:"users fetched"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                errors:e.message,
                message:"error in fetching"
            })
        }
    }
    static del = async(req,res)=>{
        try{
            const user = await userModel.findByIdAndDelete(req.params.id)
            res.status(200).send({
                apiStatus:true,
                data:user,
                message:"user deleted"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                errors:e.message,
                message:"error in deleting"
            })
        }

    }
    static edit = async(req,res)=>{
        try{
            const user = await userModel.findByIdAndUpdate(
                req.params.id, req.body, {runValidators:true}
            )
            // const user = await userModel.findById(req.params.id)
            // const data = Object.keys(req.body)
            // if(data.includes('email')) throw new Error('email cannot be updated')
            // data.forEach(d=> user[d]= req.body[d])
            // await user.save()
            res.status(200).send({
                apiStatus:true,
                data:user,
                message:"user deleted"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                errors:e.message,
                message:"error in deleting"
            })
        }

    }
    static login = async(req,res)=>{
        //email, password => hash
        try{
            const user = await userModel.loginUser(req.body.email, req.body.password)
            const token = await user.generateToken()
            res.status(200).send({
                apiStatus:true,
                data:{user, token},
                message:"logged in"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                errors:e.message,
                message:"error in deleting"
            })    
        }
    }
}

module.exports = User