require("../db/connection")
const path = require("path")
const express = require("express")
const hbs = require("hbs")
const app = express()
const userRoutes = require("../routes/user.routes")
app.use( express.static( path.join(__dirname, "../assets" ) ))
app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "../resourses/views"))
hbs.registerPartials(path.join(__dirname, "../resourses/layouts"))
app.use(express.urlencoded({extended:true}))
app.use(userRoutes)
app.get("*", (req,res)=> res.render("err404", {pageTitle:"Not found"}) )
//export app
module.exports = app