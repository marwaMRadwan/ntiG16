const postController = require("../controller/post.controller")
const router = require("express").Router()
const auth = require("../middleware/auth")
router.post("/add",auth, postController.add)
router.get("/myPosts",auth, postController.myPosts)

module.exports = router