const userController = require("../controller/user.controller")
const router = require("express").Router()

router.post("/register", userController.add)
router.get('/all', userController.all)
router.get('/all/:id', userController.single)
router.delete('/all/:id', userController.del)

module.exports = router

