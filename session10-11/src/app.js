require('dotenv').config()
require("../db/connection")
const express = require("express")
const app = express()
app.use(express.json())
// app.use(express.urlencoded({extended:true}))
const userRoutes = require("../routes/user.routes")
const postRoutes = require("../routes/post.routes")
app.use("/user", userRoutes)
app.use("/post", postRoutes)
app.get('*', (req,res)=> res.status(404).send({ 
    apiStatus: false, 
    message: "incorrect route" 
}))
module.exports = app