const deal = require("../helpers/dealWithJson")
const showAll = (req,res)=>{
    const users = deal.readData()
    res.render("showAll", {
        pageTitle:"All Users",
        users,
        isEmpty: users.length==0 ? true : false  // []
    })
}
const show = (req,res)=>{
    let userId = req.params.id
    const allUsers = deal.readData()
    let user = allUsers.find(u=> u.id == userId)
    res.render("show", {
        pageTitle:"User Data",
        user,
        isEmpty: user? false : true // x? true : false
    })
}
const addUser = (req,res)=>{
    let user = {
        id: Date.now(),
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
    let userId = req.params.id
    const users = deal.readData()
    let data = users.filter(u=> u.id!=userId)
    deal.writeData(data)
    res.redirect("/")
}
module.exports = { showAll, addUser, editUser, show , deleteUser}