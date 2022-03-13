
//npm init
//npm i express
//npm i -g nodemon
const express = require("express")
const app = express()
const path = require("path")
//routes
app.get("/", (req, res)=>{
    res.send("hello from express")
})
app.get("/about", (req, res)=>{
    res.send({name:"marwa", age:36})
})
app.get("/test", (req, res)=>{
    // let fDestination = `${__dirname}/logo.jpg`
    let fDestination = path.join(__dirname, 'images','logo.jpg')
    res.sendFile(fDestination)
})
//engine   template language => html tags, operations => if for, ....
app.listen(3000, ()=>{
    console.log("we are on http://localhost:3000")
}) // localhost:3000