const userController = require("../controller/user.controller")
const router = require("express").Router()
const auth = require("../middleware/auth")
router.post("/register", userController.add)
router.post("/login", userController.login)

router.get('/all',auth, userController.all)
router.get('/all/:id', userController.single)
router.delete('/all/:id', userController.del)

router.patch('/all/:id', userController.edit)

module.exports = router

