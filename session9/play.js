const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/g19S9")
const User = mongoose.model("User",{
    name:{
        type:String,
        trim:true,
        lowercase: true,
        required:true,
        minlength:3,
        maxlength:20
    }
})

const userData = new User()
userData.save().then((res)=> console.log(res))