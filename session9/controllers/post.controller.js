const postModel = require("../db/models/post.model")
class Post{
    static home = async(req, res)=> { 
        try{
            const data = await postModel.find()
            res.render("home", {
                pageTitle:"all posts",
                data,
                isEmpty: !data.length
            })        
        }
        catch(e){
            res.send(e)
        }
    }
    static addPost = (req, res)=> { 
        res.render("addpost", {
            pageTitle:"Add Post"
        })    
    }
    static addPostLogic = async(req,res)=>{
        const post = new postModel(req.body)
        // post.save()
        // .then(()=>res.redirect("/") )
        // .catch(e=> console.log(e))
        try{
            await post.save()
            res.redirect("/")
        }
        catch(e){
            console.log(e)
        }
    }
    static single = async(req, res)=> { 
        try{
            const postData = await postModel.findById(req.params.id)
            res.render("single", { pageTitle:"single Post", postData})
        }
        catch(e){
            res.send(e)
        }
    }
    static edit = async(req, res)=> { 
        try{
            const postData = await postModel.findById(req.params.id)
            res.render("edit", { pageTitle:"edit Post", postData})
        }
        catch(e){
            res.send(e)
        }

    }
    static editLogic = (req,res)=>{
        // dbConnect(db=>{
        //     db.collection("posts")
        //     .updateOne(
        //         {_id:new ObjectId(req.params.id)},
        //         { $set:req.body }
        //     )
        //     .then(r=>res.redirect("/"))
        // }  )
    }
    static delItem = (req,res)=>{
        const postId = req.params.id
        // dbConnect(db=>
        // db.collection("posts")
        // .deleteOne({_id:new ObjectId(postId)})
        //     .then(r=> res.redirect("/"))
        // )
    }
}
module.exports = Post
