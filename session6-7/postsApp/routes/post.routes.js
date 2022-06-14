const router = require("express").Router()
const postController = require("../controllers/post.controller")
router.get("/", postController.home)
router.get("/add", postController.add)
router.get("/single",postController.single)
router.get("/edit",postController.edit)
module.exports = router