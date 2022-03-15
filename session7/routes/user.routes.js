const router = require("express").Router()
const userController = require('../app/controllers/user.controller')

router.get("/", userController.index)

module.exports = router