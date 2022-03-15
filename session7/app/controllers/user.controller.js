const deal = require("../helpers/dealWithJson")
const showAll = (req,res)=>{
    
    res.render("showAll", {
        pageTitle:"All Users"
    })
}
const show = (req,res)=>{
    res.render("show", {
        pageTitle:"User Data"
    })
}
const addUser = (req,res)=>{
    let user = {
        name:req.query.name,
        age:req.query.age,
        email:req.query.email
    }
    if(req.query.name && req.query.email && req.query.age){
        let data = deal.readData()
        data.push(user)
        deal.writeData(data)
        res.redirect("/")
    }
    res.render("add", {
        pageTitle:"Add New User",
        user
    })
}
const editUser = (req,res)=>{
    res.render("edit", {
        pageTitle:"Edit User"
    })
}
const deleteUser = (req,res)=>{
    res.send("deleted")
}
module.exports = { showAll, addUser, editUser, show , deleteUser}