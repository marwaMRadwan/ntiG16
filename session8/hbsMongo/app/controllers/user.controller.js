const db = require("../../models/dbConnection")
const showAll = (req,res)=>{
    db((err, connection)=>{
        connection.collection("user").find()
        .toArray((e, users)=>{
            if(e) res.send(e)
            res.render("showAll", {
                pageTitle:"All Users",
                users,
                isEmpty: users.length==0 ? true : false 
            })
        })
    })
}
const show = (req,res)=>{
    // let userId = req.params.id
    // const allUsers = deal.readData()
    // let user = allUsers.find(u=> u.id == userId)
    // res.render("show", {
    //     pageTitle:"User Data",
    //     user,
    //     isEmpty: user? false : true // x? true : false
    // })
}
const addUser = (req,res)=>{
    res.render("add", {
        pageTitle:"Add New User"
    })
}
const addLogic = (req,res)=>{
    db((err, connection)=>{
        connection.collection("user").insertOne( req.body,
            (e, result)=>{
                if(e) res.send(e)
                res.redirect("/")
            }
        )
    })
}
const editUser = (req,res)=>{
    // let userId = req.params.id
    // const allUsers = deal.readData()
    // let user = allUsers.find(u=> u.id == userId)
    // if(!user) res.redirect("/")
    // res.render("edit", {
    //     pageTitle:"Edit user",
    //     user
    // })

}
const editUserLogic=(req,res)=>{
    // let userId = req.params.id
    // const allUsers = deal.readData()
    // const userIndex = allUsers.findIndex(u=> u.id==userId)
    // allUsers[userIndex] = { ...req.body, id: userId }
    // deal.writeData(allUsers)
    // res.redirect("/")
}

const deleteUser = (req,res)=>{
    // let userId = req.params.id
    // const users = deal.readData()
    // let data = users.filter(u=> u.id!=userId)
    // deal.writeData(data)
    // res.redirect("/")
}
module.exports = { showAll, addUser, editUser, show , deleteUser, addLogic, editUserLogic}