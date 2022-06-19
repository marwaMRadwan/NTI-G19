const userModel = require("../database/models/user.model")
class User{
    static register = async(req,res)=>{
        try{
            const user = new userModel(req.body)
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
    static login = async(req,res)=>{}
    static showAll = async(req,res)=>{}
    static showSingle = async(req,res)=>{}
    static delUser = async(req,res)=>{}
    static editUser = async(req,res)=>{}
}
module.exports = User