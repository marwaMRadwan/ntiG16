const router = require("express").Router()
const userController = require('../app/controllers/user.controller')

router.get("/", userController.showAll)
router.get("/add", userController.addUser)
router.get("/show/:id", userController.show)
router.get("/edit/:id", userController.editUser)
router.get("/delete/:id", userController.deleteUser)
module.exports = router