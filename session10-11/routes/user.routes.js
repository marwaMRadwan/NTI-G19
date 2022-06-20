const user = require("../controllers/user.controller")
const router = require("express").Router()
const auth = require("../middleware/auth.middleware")
//add user
router.post("/register", user.register)
//login user
router.post("/login", user.login)
//get all users
router.get("/all",auth, user.getAllUsers)
//get single user
router.get("/all/:id", user.getSingleUser)
//update status (activate - deactivate)
router.patch("/activate/:id", user.activateUser)
router.put("/deactivate/:id", user.deactivateUser)
router.patch("/changeStatus", auth, user.changeStatus)
//update user
router.patch("/update/:id", auth, user.updateUser)
//update password
router.patch("/updatePassword", auth, user.changePassword)
//remove account
router.delete("/delete/:id", user.deleteUser)
module.exports=router