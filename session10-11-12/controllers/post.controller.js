const postModel = require("../database/models/post.model")
class Post{
    static add= async(req,res)=>{
        //detail => req.body, userId=> req.user
        try{
            const postData = new postModel({
                ...req.body,
                userId: req.user._id
            })
            await postData.save()
            res.status(200).send({
                apiStatus:true,
                data:postData,
                message:"added"
            })
        }
        catch(e){
            res.status(500).send({apiStatus:false, message:e.message})
        }
    }
    static myPosts = async(req,res)=>{
        // await postModel.find({userId:req.user._id})
        try{
            await req.user.populate("myPosts")
            res.status(200).send({data:req.user.myPosts})
        }
        catch(e){
            res.status(500).send({err:e.message})
        }
    }
}
module.exports = Post