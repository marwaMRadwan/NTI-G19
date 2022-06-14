const router = require("express").Router()
const postController = require("../controllers/post.controller")

router.get("/", postController.home)

router.get("/single/:id",postController.single)

router.get("/add", postController.add)

router.get("/edit",postController.edit)

module.exports = router