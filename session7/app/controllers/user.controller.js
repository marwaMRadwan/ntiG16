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
    res.render("add", {
        pageTitle:"Add New User"
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