const express = require("express")
const app = express()
const PORT = 3000
//engine type hbs ejs pug
//npm i hbs
app.set("view engine", "hbs")

app.get("/",(req,res)=>{
    res.render('home')
})

app.listen(PORT, ()=> console.log("server up"))