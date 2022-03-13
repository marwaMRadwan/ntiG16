const express = require("express")
const path = require("path")
const hbs = require('hbs')
const app = express()
const PORT = 3000

const viewDir = path.join(__dirname, "public/frontend/views")
const layoutDir = path.join(__dirname, "public/frontend/layouts")
const staticDir = path.join(__dirname, "public/statics")

app.use(express.static(staticDir))
//engine type hbs ejs pug  //npm i hbs
app.set("view engine", "hbs")
app.set('views', viewDir)

hbs.registerPartials(layoutDir)

app.get("/",(req,res)=>{
    const data = [
        {
        albumId: 1,
        id: 1,
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url: "https://via.placeholder.com/600/92c952",
        thumbnailUrl: "https://via.placeholder.com/150/92c952"
        },
        {
        albumId: 1,
        id: 2,
        title: "reprehenderit est deserunt velit ipsam",
        url: "https://via.placeholder.com/600/771796",
        thumbnailUrl: "https://via.placeholder.com/150/771796"
        },
        {
        albumId: 1,
        id: 3,
        title: "officia porro iure quia iusto qui ipsa ut modi",
        url: "https://via.placeholder.com/600/24f355",
        thumbnailUrl: "https://via.placeholder.com/150/24f355"
        },
        {
        albumId: 1,
        id: 4,
        title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        url: "https://via.placeholder.com/600/d32776",
        thumbnailUrl: "https://via.placeholder.com/150/d32776"
        },
        {
        albumId: 1,
        id: 5,
        title: "natus nisi omnis corporis facere molestiae rerum in",
        url: "https://via.placeholder.com/600/f66b97",
        thumbnailUrl: "https://via.placeholder.com/150/f66b97"
        },
        {
        albumId: 1,
        id: 6,
        title: "accusamus ea aliquid et amet sequi nemo",
        url: "https://via.placeholder.com/600/56a8c2",
        thumbnailUrl: "https://via.placeholder.com/150/56a8c2"
        },
        {
        albumId: 1,
        id: 7,
        title: "officia delectus consequatur vero aut veniam explicabo molestias",
        url: "https://via.placeholder.com/600/b0f7cc",
        thumbnailUrl: "https://via.placeholder.com/150/b0f7cc"
        },
        {
        albumId: 1,
        id: 8,
        title: "aut porro officiis laborum odit ea laudantium corporis",
        url: "https://via.placeholder.com/600/54176f",
        thumbnailUrl: "https://via.placeholder.com/150/54176f"
        },
        {
        albumId: 1,
        id: 9,
        title: "qui eius qui autem sed",
        url: "https://via.placeholder.com/600/51aa97",
        thumbnailUrl: "https://via.placeholder.com/150/51aa97"
        },
        {
        albumId: 1,
        id: 10,
        title: "beatae et provident et ut vel",
        url: "https://via.placeholder.com/600/810b14",
        thumbnailUrl: "https://via.placeholder.com/150/810b14"
        }
        ]
    res.render('home', { data }) //localhost:3000/
})
app.get('/about', (req,res)=>{ //localhost:3000/about
    res.render("about", {
        name:"marwa",
        age:36,
        subjects: ['js', 'node', 'angular'],
        details:{ job:"CTO", location:"Techs Experts"}
    })
})
const fetch = require('node-fetch');
app.get('/api', async(req,res)=>{ //localhost:3000/about
    const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10');
    const data = await response.json()
    res.render('home', {data})
})



app.listen(PORT, ()=> console.log("server up"))