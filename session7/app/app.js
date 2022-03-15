//import build in modules
const path = require("path")
//import installed modules
const express = require("express")
const hbs = require("hbs")
const app = express()
//define locations of static, views, layouts folders and route files
const staticDir = path.join(__dirname, "../assets")
const viewsDir = path.join(__dirname, "../resourses/views")
const layoutsDir = path.join(__dirname, "../resourses/layouts")
const userRoutes = require("../routes/user.routes")
//use static folder
app.use( express.static( staticDir ))
//set view engine and location
app.set("view engine", "hbs")
app.set("views", viewsDir)
//register layouts
hbs.registerPartials(layoutsDir)
//use route files
app.use(userRoutes) //app.use("/users",userRoutes)
//export app
module.exports = app