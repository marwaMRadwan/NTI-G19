const jwt = require("jsonwebtoken")
const userModel= require("../database/models/user.model")
const auth = async(req, res, next)=>{
    try{
    //get token from headers
    const token = req.header("Authorization")
    // verify
    const decodedToken = jwt.verify(token, process.env.JWTKEY)
    // seach user => valid in db
    const userData = await userModel.findOne({_id:decodedToken._id, 'tokens.token': token})
    // if !user => unauth
    if(!userData) throw new Error("user not found")
    // next
    req.user = userData
    req.token = token
    next()
    }
    catch(e){
        res.status(500).send({
            apiStatus:false,
            error: e.message,
            message:"unauthorized"
        })
    }
}
const adminAuth = async(req, res, next)=>{
    try{
    //get token from headers
    const token = req.header("Authorization")
    // verify
    const decodedToken = jwt.verify(token, process.env.JWTKEY)
    // seach user => valid in db
    const userData = await userModel.findOne({_id:decodedToken._id, 'tokens.token': token})
    // if !user => unauth
    if(!userData) throw new Error("user not found")
    if(userData.userType != "admin") throw new Error("not available")
    // next
    req.user = userData
    req.token = token
    next()
    }
    catch(e){
        res.status(500).send({
            apiStatus:false,
            error: e.message,
            message:"unauthorized"
        })
    }
}

module.exports = { auth, adminAuth }