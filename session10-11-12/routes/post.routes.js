const post = require("../controllers/post.controller")
const {auth, adminAuth} = require("../middleware/auth.middleware")
const router = require("express").Router()
router.post("/add",auth, post.add)
router.get("/myPosts", auth, post.myPosts)
module.exports = router