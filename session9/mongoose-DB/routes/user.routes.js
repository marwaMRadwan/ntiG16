const router = require("express").Router()
const userController = require('../app/controllers/user.controller')

router.get("/", userController.showAll)

router.get("/add", userController.addUser)
router.post("/add", userController.addLogic)

router.get("/addAddr/:id", userController.addAddr)
router.post("/addAddr/:id", userController.addAddrLogic)
router.get("/delAddr/:userId/:addrId", userController.delAddress)

router.get("/show/:id", userController.show)

router.get("/edit/:id", userController.editUser)
router.post("/edit/:id", userController.editUserLogic)

router.get("/delete/:id", userController.deleteUser)

module.exports = router