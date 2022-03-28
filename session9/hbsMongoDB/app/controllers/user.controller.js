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
    let userId = req.params.id
    db((err, connection)=>{
    connection.collection("user").findOne( { _id : new ObjectId(userId) } , 
        (e, result)=>{
            res.render("edit", {
                pageTitle:"Edit Data",
                user:result,
                isEmpty: result? false : true // x? true : false
            })
        }
        )
    })
    
}
const editUserLogic=(req,res)=>{
    db((err, connection)=>{
        if(err) res.send(err)
        connection.collection("user").updateOne(
            { _id : new ObjectId( req.params.id ) },
            { $set: req.body } // {name:"abc", age:12}
        )
        .then(()=> res.redirect('/'))
        .catch(e=> res.send(e) )
    })
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