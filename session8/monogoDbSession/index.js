// const mongodb = require("mongodb")
//const MongoClient = mongodb.MongoClient
const { MongoClient } = require("mongodb")
const dbUrl = "mongodb://127.0.0.1:27017"
const dbName = "s8"
MongoClient.connect( dbUrl, {}, (err, client)=>{
    if(err) return console.log("database error")
    const connection = client.db(dbName)
    // connection.collection('user').insertOne(
    //     {name:"nouran", age:28, email:"nouran@techsexperts.com"},
    //     (error, res)=>{
    //         if(error) return console.log("error insert data")
    //         console.log(res)
    //     }
    // )
    //     connection.collection('user').insertMany(
    //     [
    //         {name:"nouran", age:28, email:"nouran@techsexperts.com"},
    //         {name:"omar", age:7}
    //     ],
    //     (error, res)=>{
    //         if(error) return console.log("error insert data")
    //         console.log(res)
    //     }
    // )
    connection.collection("user").find({name:"marwa"}).toArray(
        (err, res)=>{
            if(err) return console.log("db error")
            console.log(res)
        }
    )
})


