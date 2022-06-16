const mongoose=require("mongoose")
const Post = mongoose.model("Post", {
    title:{
        type:String,
        trim:true,
        lowercase:true,
        minlength:5,
        maxlength:20,
        required:true,
        unique:true
    },
    content:{
        type:String,
        trim:true,
        lowercase:true,
        minlength:5,
        maxlength:20,
        required:true
    },
    date:{
        type:Date,
        // default:""
        // min:"",
        // max:""
    }
})
module.exports = Post
