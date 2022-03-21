const userController = require("../controller/user.controller")
const router = require("express").Router()
router.post("/register", userController.add)
module.exports = router