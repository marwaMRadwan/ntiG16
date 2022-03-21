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
}

module.exports = User