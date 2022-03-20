const res = require("express/lib/response")
const userModel = require("../../db/models/user.model")
class User {
    static showAll = async(req,res)=>{
        try{
            const users = await userModel.find()
            res.render("showAll", {
                pageTitle:"All Users",
                users,
                isEmpty: users.length==0 ? true : false 
            })
        }
        catch(e){
            res.send(e.message)
        }        
    }
    static show = async(req,res)=>{
        try{
         const user = await userModel.findById(req.params.id) //findOne({_id:req.params.id})
         res.render("show", {
            pageTitle:"user data",
            user,
            isEmpty: user ? false : true 
          })
        }
        catch(e){
            res.send(e.message)
        }
    }
    static addUser = (req,res)=>{
        res.render("add", {
            pageTitle:"Add New User"
        })
    }
    static addLogic = async(req,res)=>{
        let user={ name:"",age:"", email:"" }
        try{
            user = new userModel(req.body)
            await user.save()
            res.redirect("/")
        }
        catch(e){
            res.render("add", {
                pageTitle:"Error Adding user", 
                errors:e.message,
                user
            })
        }
    }
    static addAddr = (req,res)=>{
        res.render("addr", {
            pageTitle:"Add user address"
        })
    }
    static addAddrLogic = async(req,res)=>{
        try{
            const user = await userModel.findById(req.params.id)
            user.addresses.push(req.body)
            await user.save()
            res.redirect("/")
        }
        catch(e){
            res.send(e.message)
        }
    }
    static editUser = (req,res)=>{
                // res.render("edit", {
                //     pageTitle:"Edit Data",
                //     user:result,
                //     isEmpty: result? false : true // x? true : false
                // })
        
    }
    static editUserLogic=(req,res)=>{
            // .then(()=> res.redirect('/'))
            // .catch(e=> res.send(e) )
    }
    static deleteUser = (req,res)=>{
        // .then(()=> res.redirect("/"))
        // .catch(e=> res.send(e))
    }
}
module.exports = User
