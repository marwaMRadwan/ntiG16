const router = require("express").Router()
const userController = require('../app/controllers/user.controller')

router.get("/", userController.showAll)
router.get("/add", userController.addUser)
router.get("/edit", userController.editUser)
router.get("/show", userController.show)
router.get("/delete", userController.deleteUser)
module.exports = router