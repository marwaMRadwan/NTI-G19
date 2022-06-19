const user = require("../controllers/user.controller")
const router = require("express").Router()
//add user
router.post("/register", user.register)
//get all users
router.get("/all", user.getAllUsers)
//get single user
router.get("/all/:id", user.getSingleUser)
//update user
//update status (activate)
//update status (deactivate)
//update password
//remove account
module.exports=router