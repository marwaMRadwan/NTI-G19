const dbConnect = require("../db/connect")
class Post{
    static home = (req, res)=> { 
        dbConnect(
            db=>
                db.collection("posts")
                .find()
                .toArray((error, data)=>{
                    res.render("home", {
                        pageTitle:"all posts",
                        data,
                        isEmpty: !data.length
                    })    
            })
        )
    }
    static addPost = (req, res)=> { 
        res.render("addpost", {
            pageTitle:"Add Post"
        })    
    }
    static addPostLogic = (req,res)=>{
        const post = req.body
        dbConnect((db)=>{
            db.collection('posts').insertOne(post)
            .then(()=>res.redirect("/") )
            .catch(e=> console.log(e))
        })     
    }
    static single = (req, res)=> { 
        // // res.send(req.params)
        // const postId = req.params.id
        // const data = deal.readDataFromJSON("models/posts.json")
        // const postData = data.find(p=> p.id == postId)
        // res.render("single", {
        //     pageTitle:"single Post",
        //     postData
        // })
    }
    static edit =  (req, res)=> { 
        // const postId = req.params.id
        // const data = deal.readDataFromJSON("models/posts.json")
        // const postData = data.find(p=> p.id == postId)
        // res.render("edit", {
        //     pageTitle:"Edit Post",
        //     postData
        // })
    }
    static delItem = (req,res)=>{
        // const postId = req.params.id
        // const data = deal.readDataFromJSON("models/posts.json")
        // const postData = data.filter(p=> p.id != postId)
        // deal.writeDataToJSON("models/posts.json", postData)
        // res.redirect("/")
    }
}
module.exports = Post
