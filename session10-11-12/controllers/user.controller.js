const userModel = require("../database/models/user.model")
const sendEmailMe = require("../helper/sendEmail.helper")
class User{
    //add user
    static register = async(req,res)=>{
        try{
            const user = new userModel(req.body)
            user.userType="user"
            await user.save()
            sendEmailMe(user.email, "hello")
            res.status(200).send({
                apiStatus: true,
                data:user,
                message:"user added successfuly"
            })
        }
        catch(e){   
            res.status(500).send({
                apiStatus:false,
                data:e.message,
                message:"error in register"
            })
        }
    }
    static addAdmin = async(req,res)=>{
        try{
            const user = new userModel(req.body)
            user.userType="admin"
            await user.save()
            res.status(200).send({
                apiStatus: true,
                data:user,
                message:"user added successfuly"
            })
        }
        catch(e){   
            res.status(500).send({
                apiStatus:false,
                data:e.message,
                message:"error in register"
            })
        }
    }
    static login = async(req,res)=>{
        try{
            const user = await userModel.loginUser(req.body.email, req.body.password)
            const token = await user.generateToken()
            res.status(200).send({
                apiStatus:true,
                data:{user, token},
                message:"logged in"
            })
        }
        catch(e){
            res.status(500).send({apiStatus:false, error:e, message:e.message})
        }
    }
    //get all users
    static getAllUsers = async(req, res) => {
        try{
            const allUsers = await userModel.find()
            res.status(200).send({
                apiStatus:true,
                data:allUsers,
                message:"data fetched"
            })
        }
        catch(e){
            res.status(500).send({apiStatus:false, error: e, message:e.message})
        }
    }
    //get single user
    static getSingleUser = async(req, res) => {
        try{
            const userData = await userModel.findById(req.params.id)
            if(!userData){
                res.status(404).send({
                    apiStatus:false,
                    data:null,
                    message:"invalid user id"
                })
            }
            res.status(200).send({
                apiStatus:true,
                data:userData,
                message:"data fetched"
            })
        }
        catch(e){
            res.status(500).send({apiStatus:false, error: e, message:e.message})
        }
    }
    //update status (activate)
    static activateUser = async(req,res) =>{
        try{
            // await userModel.findByIdAndUpdate(req.params.id, {status:true})
            const userData = await userModel.findById(req.params.id)
            userData.status = true
            await userData.save()
            res.status(200).send({
                apiStatus:true,
                data:userData,
                message:"data fetched"
            })
        }
        catch(e){
            res.status(500).send({apiStatus:false, error: e, message:e.message})
        }
    }
    //update status (deactivate)
    static deactivateUser = async(req,res) =>{
        try{
            // await userModel.findByIdAndUpdate(req.params.id, {status:true})
            const userData = await userModel.findById(req.params.id)
            userData.status = false
            await userData.save()
            res.status(200).send({
                apiStatus:true,
                data:userData,
                message:"data fetched"
            })
        }
        catch(e){
            res.status(500).send({apiStatus:false, error: e, message:e.message})
        }
    }
    //change status
    static changeStatus = async(req,res) =>{
        try{
            // await userModel.findByIdAndUpdate(req.params.id, {status:true})
            // const userData = await userModel.findById(req.params.id)
            req.user.status = !req.user.status
            await req.user.save()
            res.status(200).send({
                apiStatus:true,
                data:req.user,
                message:"data fetched"
            })
        }
        catch(e){
            res.status(500).send({apiStatus:false, error: e, message:e.message})
        }
    }
    //update password
    static changePassword = async(req,res) =>{
        try{
            // const userData = await userModel.findById(req.params.id)
            const userData= req.user
            userData.password = req.body.password
            await userData.save()
            res.status(200).send({
                apiStatus:true,
                data:userData,
                message:"data fetched"
            })
        }
        catch(e){
            res.status(500).send({apiStatus:false, error: e, message:e.message})
        }
    }
    //update user
    static updateUser= async(req,res)=>{
        try{
            const userData = await userModel.findByIdAndUpdate(
                req.user._id,
                req.body,
                {runValidators:true}
                )
            // req.body.for in=> req.user.key=req.body.key
            res.status(200).send({
                apiStatus:true,
                data:userData,
                message:"data fetched"
            })
        }
        catch(e){
            res.status(500).send({apiStatus:false, error: e, message:e.message})
        }
    }
    //remove account
    static deleteUser= async(req,res)=>{
        try{
            const userData = await userModel.findByIdAndDelete(req.user._id)
            res.status(200).send({
                apiStatus:true,
                data:userData,
                message:"data fetched"
            })
        }
        catch(e){
            res.status(500).send({apiStatus:false, error: e, message:e.message})
        }
    }
    static logout = async(req,res)=>{
        try{
            req.user.tokens = req.user.tokens.filter(t=> t.token != req.token)
            await req.user.save()
            res.status(200).send({
                apiStatus:true,
                message:"logged out"
            })

        }
        catch(e){
            res.status(500).send({apiStatus:false, error: e, message:e.message})
        }
    }
    static logoutAll = async(req,res)=>{
        try{
            req.user.tokens = []
            await req.user.save()
            res.status(200).send({
                apiStatus:true,
                message:"logged out"
            })
        }
        catch(e){
            res.status(500).send({apiStatus:false, error: e, message:e.message})
        }        
    }
    static profile = async(req,res)=>{
        res.status(200).send({apiStatus:true, data:req.user, message:"data featched"})
    }
    static addAddr = async(req,res)=>{
        try{
            req.user.addresses.push(req.body)
            await req.user.save()
            res.status(200).send({data:req.user, apiStatus:true, message:"ADDED"})
        }
        catch(e){
            res.status(500).send({apiStatus:false, message:e.message})
        }
    }
}
module.exports = User