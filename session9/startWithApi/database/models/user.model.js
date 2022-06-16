const mongoose = require("mongoose")
const validator = require("validator")
const User = mongoose.model("User",{
    name:{
        type:String,
        required: true,
        trim:true
    }, 
    age:{
        type:Number,
        min:21,
        max:60
    }, 
    gender:{
        type:String,
        required: true,
        trim:true,
        enum:["male", "female"]
    }, 
    email:{
        type:String,
        required: true,
        trim:true,
        unique:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)) throw new Error("invalid email")
        }
    }, 
    password:{
        type:String,
        required: true,
        trim:true,
        match:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    },
    // addresses:[{location:"",details}],
    postalCode:{
        type:String,
        trim:true
    }, 
    status:{
        type:Boolean,
        default:false
    }, 
    createdAt:{
        type:Date,
        default:Date.now()
    }, 
    phone:{
        type:String,
        required: true,
        trim:true
    }, 
    image:{
        type:String,
        trim:true
    }
})
module.exports=User