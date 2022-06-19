const mongoose = require("mongoose")
const validator = require("validator")
const bcryptjs=require("bcryptjs")
const userSchema = new mongoose.Schema({
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
    phone:{
        type:String,
        required: true,
        trim:true
    }, 
    image:{
        type:String,
        trim:true
    }
},
{
    timestamps:true
})
userSchema.methods.toJSON= function(){
    const user = this.toObject()
    delete user.__v
    delete user.password
    return user
}
userSchema.pre("save", async function(){
    const user = this
    if(user.isModified("password"))
        user.password = await bcryptjs.hash(user.password, 12)
})
const User = mongoose.model("User",userSchema)
module.exports=User