const router = require("express").Router()
const postController = require("../controllers/post.controller")

router.get("/", postController.home)

router.get("/single/:id",postController.single)

router.get("/add", postController.add)

router.get("/addPost", postController.addPost)
router.post("/addPost", postController.addPostLogic)

router.get("/edit/:id",postController.edit)

router.get("/delete/:id", postController.delItem)
// router.get("/test", postController.test)
// router.post("/test", (req,res)=> res.send("hello"))
module.exports = router