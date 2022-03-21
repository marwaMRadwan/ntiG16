const userController = require("../controller/user.controller")
const router = require("express").Router()
router.post("/register", userController.add)
router.get('/all', userController.all)
module.exports = router