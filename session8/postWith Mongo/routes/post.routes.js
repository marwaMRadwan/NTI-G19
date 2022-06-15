const router = require("express").Router()
const postController = require("../controllers/post.controller")

router.get("/", postController.home)
router.get("/single/:id",postController.single)
router.get("/addPost", postController.addPost)
router.post("/addPost", postController.addPostLogic)
router.get("/edit/:id",postController.edit)
router.post("/edit/:id",postController.editLogic)
router.get("/delete/:id", postController.delItem)
module.exports = router