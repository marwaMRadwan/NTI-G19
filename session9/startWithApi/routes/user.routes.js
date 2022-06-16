const user = require("../controllers/user.controller")
const router = require("express").Router()
router.post("/register", user.register)

module.exports=router