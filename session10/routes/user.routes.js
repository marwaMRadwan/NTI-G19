const user = require("../controllers/user.controller")
const router = require("express").Router()
//add user
router.post("/register", user.register)
//get all users
router.get("/all", user.getAllUsers)
//get single user
router.get("/all/:id", user.getSingleUser)
//update status (activate)
//update status (deactivate)
router.patch("/activate/:id", user.activateUser)
router.put("/deactivate/:id", user.deactivateUser)
router.patch("/changeStatus/:id", user.changeStatus)
//update user
router.patch("/update/:id", user.updateUser)
//update password
router.patch("/updatePassword/:id", user.changePassword)
//remove account
router.delete("/delete/:id", user.deleteUser)
module.exports=router