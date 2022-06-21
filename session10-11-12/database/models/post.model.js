const mongoose = require("mongoose")
const postSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    postType:{
        type:String,
        required:true,
        enum:["img", "txt"]
    },
    content:{
        type:String,
        trim:true,
        required: function(){ return this.postType=="txt" }
    },
    file:{
        type:String,
        trim:true,
        required: function(){ return this.postType=="img"}
    }
},
{timeStamps:true})
const Post= mongoose.model("Post", postSchema)
module.exports = Post