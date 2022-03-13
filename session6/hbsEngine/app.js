const express = require("express")
const path = require("path")
const hbs = require('hbs')
const app = express()
const PORT = 3000
const viewDir = path.join(__dirname, "public/frontend/views")
const layoutDir = path.join(__dirname, "public/frontend/layouts")
//engine type hbs ejs pug  //npm i hbs
app.set("view engine", "hbs")
app.set('views', viewDir)
hbs.registerPartials(layoutDir)
app.get("/",(req,res)=>{
    res.render('home')
})
app.listen(PORT, ()=> console.log("server up"))