const dbConnect = require("../db/connect")
const {ObjectId} = require("mongodb")
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
        const postId = req.params.id
        dbConnect(db=>{
            db.collection("posts")
            .findOne({_id:new ObjectId(postId)})
            .then(
                postData=>
                    res.render("single", {
                        pageTitle:"single Post", postData
                    })
                )
            })
    }
    static edit =  (req, res)=> { 
        const postId = req.params.id
        dbConnect(db=>{
            db.collection("posts")
            .findOne({_id:new ObjectId(postId)})
            .then(
                postData=>
                    res.render("edit", {
                        pageTitle:"Edit Post", postData
                    })
                )
            })

    }
    static editLogic = (req,res)=>{
        dbConnect(db=>{
            db.collection("posts")
            .updateOne(
                {_id:new ObjectId(req.params.id)},
                { $set:req.body }
            )
            .then(r=>res.redirect("/"))
        }  )
    }
    static delItem = (req,res)=>{
        const postId = req.params.id
        dbConnect(db=>
        db.collection("posts")
        .deleteOne({_id:new ObjectId(postId)})
            .then(r=> res.redirect("/"))
        )
    }
}
module.exports = Post
