const userModel = require("../../db/models/user.model")
const showAll = async(req,res)=>{
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
const show = async(req,res)=>{
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
const addUser = (req,res)=>{
    res.render("add", {
        pageTitle:"Add New User"
    })
}
const addLogic = async(req,res)=>{
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
const editUser = (req,res)=>{
            // res.render("edit", {
            //     pageTitle:"Edit Data",
            //     user:result,
            //     isEmpty: result? false : true // x? true : false
            // })
    
}
const editUserLogic=(req,res)=>{
        // .then(()=> res.redirect('/'))
        // .catch(e=> res.send(e) )
}
const deleteUser = (req,res)=>{
    // .then(()=> res.redirect("/"))
    // .catch(e=> res.send(e))
}
module.exports = { showAll, addUser, editUser, show , deleteUser, addLogic, editUserLogic}