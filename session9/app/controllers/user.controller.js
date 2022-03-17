const db = require("../../models/dbConnection")
const  ObjectId = require("mongodb").ObjectId
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
    let userId = req.params.id
    db((err, connection)=>{
    connection.collection("user").findOne( { _id : new ObjectId(userId) } , 
        (e, result)=>{
            res.render("show", {
                pageTitle:"User Data",
                user:result,
                isEmpty: result? false : true // x? true : false
            })
        }
        )
    })
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
    let userId = req.params.id
    db((err, connection)=>{
    connection.collection("user")
    .deleteOne({ _id : new ObjectId(userId) } )
    .then(()=> res.redirect("/"))
    .catch(e=> res.send(e))
    })
}
module.exports = { showAll, addUser, editUser, show , deleteUser, addLogic, editUserLogic}