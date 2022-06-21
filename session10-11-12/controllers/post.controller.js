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
}
module.exports = Post