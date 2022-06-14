//npm init --y
//npm i express
// nodemon => npm i -g nodemon => nodemon index
const express = require("express")
const path = require("path")
const hbs = require("hbs")
const app = express()

const publicDir = path.join(__dirname, "public")
const viewsDir = path.join(__dirname, "frontend/views")
const layouts = path.join(__dirname, "frontend/layouts")
app.use(express.static(publicDir))
app.set("view engine", "hbs")
app.set("views", viewsDir)
hbs.registerPartials(layouts)
//route
app.get('/', (req, res)=>{
    res.send("hello from express js")
})
app.get('/about', (req, res)=>{
    res.send("<h2>hello</h2>")
})
app.get('/json', (req, res)=>{
    const data = [{name:"marwa"}, {name:"mazen"}, {name:"omar"}, {name:"nouran"}]
    res.send(data)
})
app.get('/htmlFile', (req,res)=>{
    //__dirname
    // res.sendFile(`${__dirname}/a.html`)
    const fileLoc = path.join(__dirname, "a.html")
    res.sendFile(fileLoc)
})
app.get("/home", (req,res)=>{
    res.render("home")
})
app.listen(3000, ()=> console.log("server opened")) //localhost:3000
