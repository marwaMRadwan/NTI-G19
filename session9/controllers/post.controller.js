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
            res.render("addpost", {
                // post,
                titleErr: e.errors.title?.message||null,   
                contentErr: e.errors.content?.message||null    
            })
            // res.send(e)
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
    static editLogic = async(req,res)=>{
        try{
            await postModel.findByIdAndUpdate(
                req.params.id,
                req.body,
                {runValidators:true}
            )
            res.redirect("/")
        }
        catch(e){
            res.send(e)
        }
    }
    static delItem = async(req,res)=>{
        try{
            await postModel.findByIdAndDelete(req.params.id)
            res.redirect("/")
        }
        catch(e){
            res.send(e)
        }
    }
}
module.exports = Post
